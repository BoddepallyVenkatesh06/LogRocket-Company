(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lr_analytics = {}));
})(this, (function(exports) {
    const PROXY_HOSTNAME = 'relay.lr-wa.com';

    // Replaces all occurences of the given words with the LogRocket relay mask
    function maskString(input, wordsToMask) {
        return wordsToMask.reduce((s, word) => s.replaceAll(word, `__lrm__${btoa(word)}__lrm__`), input);
    }

    function prepareURLForRelay({
        inputURL,
        wordsToMask = []
    }) {
        // Most urls we get are absolute. However, vwo, sets the src of its script to
        // `//dev.visualwebsiteoptimizer.com/...`, which counts as a relative url
        // It is in this case that providing the base url is necessary.
        // See last example here: https://developer.mozilla.org/en-US/docs/Web/API/URL/URL#examples
        const base = `${window.location.protocol}//${window.location.host}`;
        const url = new URL(inputURL, base);
        const scheme = url.protocol;
        const {
            host
        } = url;
        const path = url.pathname;

        url.protocol = 'https:';
        url.host = PROXY_HOSTNAME;
        url.pathname = `/${btoa(`${scheme}//${host}`)}${maskString(path, wordsToMask)}`;

        return url.href;
    }

    // Overwrites web browser APIs to proxy analytics network requests through our relay
    // Params
    // contentWindow: the window object on which to stub the APIs.
    // hostnames: an array of hostnames that should be proxied through the relay
    // wordsToMask: an array of words that should be masked when proxied.
    function stubBrowserAPIs({
        contentWindow,
        hostnames = [],
        wordsToMask = []
    }) {
        //
        // Update the prototype of HTMLScriptElement and Image objects
        // such that setting with will swap out the url for a proxied version if the hostname
        // is in `hostnames`
        //
        const scriptDescriptor = Object.getOwnPropertyDescriptor(
            contentWindow.HTMLScriptElement.prototype,
            'src'
        );
        const imageDescriptor = Object.getOwnPropertyDescriptor(contentWindow.Image.prototype, 'src');

        // NOTE: this isn't an arrow function because we want to be able to specify what
        // `this` refers to.
        function setWithDescriptor(descriptor, arg) {
            if (hostnames.some((h) => arg.includes(h))) {
                return descriptor.set.call(
                    this,
                    prepareURLForRelay({
                        inputURL: arg,
                        wordsToMask,
                    })
                );
            }

            return descriptor.set.call(this, arg);
        }

        if (scriptDescriptor) {
            Object.defineProperty(contentWindow.HTMLScriptElement.prototype, 'src', {
                set: function set(arg) {
                    setWithDescriptor.call(this, scriptDescriptor, arg);
                },
                get: function get() {
                    return scriptDescriptor.get.call(this);
                },
            });
        }

        if (imageDescriptor) {
            Object.defineProperty(contentWindow.Image.prototype, 'src', {
                set: function set(arg) {
                    setWithDescriptor.call(this, imageDescriptor, arg);
                },
                get: function get() {
                    return imageDescriptor.get.call(this);
                },
            });
        }

        // DOM attributes can also be set using Element.setAttribute() (e.g. vwo sets the img src attribute using this method)
        // Proxy `src` attributes set in this manner where appropriate.
        const _setAttribute = contentWindow.Element.prototype.setAttribute;
        window.Element.prototype.setAttribute = function(name, value) {
            const func = _setAttribute.bind(this);

            // We only want to override this method for <img> and <script> tags
            if (this.tagName !== 'IMG' && this.tagName !== 'SCRIPT') {
                func(name, value);
                return;
            }

            // We only want to override this method when the attribute being updated is `src`
            if (name !== 'src') {
                func(name, value);
                return;
            }

            // We only want to override this method when the value is in `hostnames`
            if (!hostnames.some((h) => value.includes(h))) {
                func(name, value);
                return;
            }

            const newValue = prepareURLForRelay({
                inputURL: value,
                wordsToMask,
            });

            func(name, newValue);
        };

        //
        // Override window.fetch
        //
        const _fetch = contentWindow.fetch;

        // eslint-disable-next-line no-param-reassign
        contentWindow.fetch = function fetch(resource, options) {
            // `resource` can be a string or any other object that can be stringified to
            // provide a url
            const url = resource.toString();
            if (url) {
                if (hostnames.some((h) => url.includes(h))) {
                    return _fetch(prepareURLForRelay({
                        inputURL: url,
                        wordsToMask
                    }), options);
                }
            }

            // `resource` can be a `Request` object.
            // note: see note in tests/testUtils about using instanceof when iframes might be involved
            if (resource instanceof contentWindow.Request) {
                if (hostnames.some((h) => resource.url.includes(h))) {
                    const newURL = prepareURLForRelay({
                        inputURL: resource.url,
                        wordsToMask,
                    });
                    const newRequest = new Request(newURL, resource);
                    return _fetch(newRequest, options);
                }
            }

            return _fetch(resource, options);
        };

        //
        // Override XHR to swap out any analytics calls for calls to our proxy
        //
        const _XHR = contentWindow.XMLHttpRequest;

        // eslint-disable-next-line no-param-reassign
        contentWindow.XMLHttpRequest = function XMLHttpRequest(mozAnon, mozSystem) {
            const xhrObject = new _XHR(mozAnon, mozSystem);

            const origOpen = xhrObject.open.bind(xhrObject);
            xhrObject.open = function open(method, url, ...rest) {
                if (hostnames.some((h) => url.includes(h))) {
                    origOpen(method, prepareURLForRelay({
                        inputURL: url,
                        wordsToMask
                    }), ...rest);
                    return;
                }
                origOpen(method, url, ...rest);
            };

            return xhrObject;
        };

        // this allows "instanceof XMLHttpRequest" to work
        // eslint-disable-next-line no-param-reassign
        contentWindow.XMLHttpRequest.prototype = _XHR.prototype;

        // Persist the static variables.
        ['UNSENT', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'].forEach((variable) => {
            // eslint-disable-next-line no-param-reassign
            contentWindow.XMLHttpRequest[variable] = _XHR[variable];
        });
    }

    // Sets up the analytics proxy
    function initAnalyticsProxy({
        hostnames,
        wordsToMask
    }) {
        // Stub browser APIs for the `window` object
        stubBrowserAPIs({
            contentWindow: window,
            hostnames,
            wordsToMask
        });

        // Stub browser APIs for the intercom iframe once it loads
        const observer = new MutationObserver((mutationRecords) => {
            mutationRecords.forEach(({
                addedNodes
            }) => {
                addedNodes.forEach((node) => {
                    if (node.id === 'intercom-frame') {
                        stubBrowserAPIs({
                            contentWindow: node.contentWindow,
                            hostnames,
                            wordsToMask
                        });
                    }
                });
            });
        });

        // document.body is not guaranteed to exist until the window has loaded
        if (document.body) {
            observer.observe(document.body, {
                childList: true
            });
        } else {
            window.addEventListener('load', () => {
                observer.observe(document.body, {
                    childList: true
                });
            });
        }
    }

    // Executes the segment.io javascript snipppet and optionally kicks off the
    // asynchronous loading of the segment code The code comes directly from:
    // https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/quickstart/
    // After this is run, segment will be loaded and the API will be exposed on the
    // window object as `window.analytics`

    /* eslint-disable */
    function initSegment({
        writeKey,
        load = false
    }) {
        var analytics = (window.analytics = window.analytics || []);
        if (analytics.initialize) return;
        if (analytics.invoked) {
            if (window.console && console.error) {
                console.error('Segment snippet included twice.');
            }
            return;
        }
        analytics.invoked = true;
        analytics.methods = [
            'trackSubmit',
            'trackClick',
            'trackLink',
            'trackForm',
            'pageview',
            'identify',
            'reset',
            'group',
            'track',
            'ready',
            'alias',
            'debug',
            'page',
            'once',
            'off',
            'on',
            'addSourceMiddleware',
            'addIntegrationMiddleware',
            'setAnonymousId',
            'addDestinationMiddleware',
        ];
        analytics.factory = function(method) {
            return function() {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(method);
                analytics.push(args);
                return analytics;
            };
        };
        for (var i = 0; i < analytics.methods.length; i++) {
            var key = analytics.methods[i];
            analytics[key] = analytics.factory(key);
        }
        analytics.load = function(key, options) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://cdn.segment.com/analytics.js/v1/' + key + '/analytics.min.js';
            var first = document.getElementsByTagName('script')[0];
            first.parentNode.insertBefore(script, first);
            analytics._loadOptions = options;
        };
        analytics._writeKey = writeKey;
        analytics.SNIPPET_VERSION = '4.15.2';
        if (load && writeKey) {
            analytics.load(writeKey);
        }
    }
    /* eslint-enable */

    /* eslint-disable */

    // Sets up 6sense analytics
    // If `companyDetails` is given, a 6signal API call will be made after 6sense is loaded
    // `companyDetails.callback` will be called with the result of that API call.
    // See: https://support.6sense.com/hc/en-us/articles/360059123434-Deploying-6sense-Company-Details-API-with-Google-Tag-Manager-Event-Trigger#custom-script-snippet-0-4
    // Also: https://github.com/AppHubPlatform/logrocket-website/pull/158#issuecomment-805260177
    function initSixSense({
        apiKey,
        companyDetails,
        qa
    }) {
        window._6si = window._6si || [];
        window._6si.push(['enableEventTracking', true]);
        window._6si.push(['setToken', apiKey]);

        if (qa) {
            window._6si.push(['setEndpoint', 'bqa.6sc.co']);
        } else {
            window._6si.push(['setEndpoint', 'b.6sc.co']);
        }

        if (companyDetails) {
            const {
                apiKey: companyDetailsKey,
                callback
            } = companyDetails;
            window._6si.push(['setEpsilonKey', companyDetailsKey]);
            window._6si.push(['enableCompanyDetails', true, callback, 3]);
        }

        (function() {
            var gd = document.createElement('script');
            gd.type = 'text/javascript';
            gd.async = true;
            gd.src =
                ('https:' == document.location.protocol ? 'https://' : 'http://') + 'j.6sc.co/6si.min.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gd, s);
        })();
    }

    /* eslint-enable */

    /* eslint-disable */
    function initVwo({
        accountId
    }) {
        window._vwo_code =
            window._vwo_code ||
            (function() {
                var account_id = accountId,
                    settings_tolerance = 2000,
                    library_tolerance = 2500,
                    use_existing_jquery = false,
                    is_spa = 1,
                    hide_element = 'body',
                    /* DO NOT EDIT BELOW THIS LINE */
                    f = false,
                    d = document,
                    code = {
                        use_existing_jquery: function() {
                            return use_existing_jquery;
                        },
                        library_tolerance: function() {
                            return library_tolerance;
                        },
                        finish: function() {
                            if (!f) {
                                f = true;
                                var a = d.getElementById('_vis_opt_path_hides');
                                if (a) a.parentNode.removeChild(a);
                            }
                        },
                        finished: function() {
                            return f;
                        },
                        load: function(a) {
                            var b = d.createElement('script');
                            b.src = a;
                            b.type = 'text/javascript';
                            b.innerText;
                            b.onerror = function() {
                                _vwo_code.finish();
                            };
                            d.getElementsByTagName('head')[0].appendChild(b);
                        },
                        init: function() {
                            window.settings_timer = setTimeout('_vwo_code.finish()', settings_tolerance);
                            var a = d.createElement('style'),
                                b = hide_element +
                                '{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',
                                h = d.getElementsByTagName('head')[0];
                            a.setAttribute('id', '_vis_opt_path_hides');
                            a.setAttribute('type', 'text/css');
                            if (a.styleSheet) a.styleSheet.cssText = b;
                            else a.appendChild(d.createTextNode(b));
                            h.appendChild(a);
                            this.load(
                                '//dev.visualwebsiteoptimizer.com/j.php?a=' +
                                account_id +
                                '&u=' +
                                encodeURIComponent(d.URL) +
                                '&f=' +
                                +is_spa +
                                '&r=' +
                                Math.random()
                            );
                            return settings_timer;
                        },
                    };
                window._vwo_settings_timer = code.init();
                return code;
            })();
    }
    /* eslint-disable */

    /* eslint-disable */
    function initRedditPixel({
        accountId
    }) {
        !(function(w, d) {
            if (!w.rdt) {
                var p = (w.rdt = function() {
                    p.sendEvent ? p.sendEvent.apply(p, arguments) : p.callQueue.push(arguments);
                });
                p.callQueue = [];
                var t = d.createElement('script');
                (t.src = 'https://www.redditstatic.com/ads/pixel.js'), (t.async = !0);
                var s = d.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(t, s);
            }
        })(window, document);
        rdt('init', accountId);
        rdt('track', 'PageVisit');
    }
    /* eslint-enable */

    // Makes an http request to the clearbit reveal API.
    // The callback is called on successful response
    // See docs: https://dashboard.clearbit.com/docs#reveal-api
    // You'll get a CORS error if you try to make an http request for the response.
    // So we follow the docs recommendation of making use of jsonp.
    function initClearbitReveal({
        apiKey,
        callback
    }) {
        const endpoint =
            'https://reveal.clearbit.com/v1/companies/reveal?' +
            `authorization=${apiKey}&` +
            `callback=lr_analytics.clearbitCallback`;

        const script = document.createElement('script');
        script.src = endpoint;
        const first = document.getElementsByTagName('script')[0];
        first.parentNode.insertBefore(script, first);

        window.lr_analytics.clearbitCallback = async (clearbitResponse) => {
            await callback(clearbitResponse);
            // clean up the temporary global callback.
            delete window.lr_analytics.clearbitCallback;
        };
    }

    // Note: I have not been able to get any context about what this is used for
    // Many of our sites had this code, so until we figure it out, I'm keeping the
    // functionality.
    //
    // It has been simplified a bit by using `.searchParams` instead of
    // extracting the query param manually
    function initUtmMediumHash() {
        const url = new URL(window.location.href);
        const utmMedium = url.searchParams.get('utm_medium');
        if (utmMedium) {
            const queryString = window.location.search.substring(1);
            window.location.hash = encodeURIComponent(queryString);
        }
    }

    function initLogRocket({
        appSlug,
        callInit,
        initOptions
    }) {
        const script = document.createElement('script');

        if (callInit) {
            script.addEventListener('load', () => {
                if (window.LogRocket) {
                    window.lr_analytics.logrocket = {
                        call_queue: []
                    };
                    window.LogRocket.init(appSlug, initOptions || {});

                    // Calls to lr_analytics.track/identify will add their arguments to the
                    // list if `LogRocket` is not yet loaded. Once we load LogRocket, we
                    // want to loop through this list and actually send the events
                    window.lr_analytics.logrocket.call_queue.forEach(({
                        name,
                        args
                    }) => {
                        window.LogRocket[name](...args);
                    });
                }
            });
        }

        script.src = 'https://cdn.lr-ingest.com/LogRocket.min.js';
        const first = document.getElementsByTagName('script')[0];
        first.parentNode.insertBefore(script, first);
    }

    /**
     * Send a track event to segment & LogRocket
     *
     * @param {string} event - The name of the event
     * @param {object} [properties] - Additional properties
     */
    function track(event, properties) {
        if (window.analytics) {
            window.analytics.track(event, properties);
        }

        if (window.LogRocket) {
            window.LogRocket.track(event, properties);
        } else {
            // queue it
            window.lr_analytics.logrocket &&
                window.lr_analytics.logrocket.call_queue &&
                window.lr_analytics.logrocket.call_queue.push({
                    name: 'track',
                    args: [event, properties],
                });
        }
    }

    // Note: This is a leftover from a growth experiment.
    //
    // code-block-28 identifies where wordpress's Ad-inserter would place a certain
    // Ad. I think the idea is that once that Ad was visible we would want to show
    // a demo link
    //
    // As far as I know this specific Ad is disabled, so this piece of code doesn't
    // actually do anything I am leaving it here, as is, in case we enable it again
    function slideDemoInIfVisible() {
        if (window.jQuery) {
            const intersectionOptions = {
                root: null, // use the viewport
                rootMargin: '-240px',
                threshold: 1.0,
            };

            const target = document.querySelector('.code-block-28');
            const intersectionCallback = (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio >= 1) {
                        window.jQuery('.inline-demo').slideDown(1500);
                        //  jQuery('.crp-list-item-image img').delay(550).fadeIn(1000);
                        observer.unobserve(target);
                    }
                });
            };
            const observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
            observer.observe(target);
        }
    }

    function setWindowProperties(data) {
        // These properties are used by some of our marketing automation tools

        if (data ? .company ? .domain) {
            window.sixDomain = data.company.domain; // chili piper
        }

        if (data ? .company ? .industry) {
            window.sixIndustry = data.company.industry; // VWO for testing personalizations
        }

        if (data ? .segments ? .names) {
            window.sixSegments = data.segments.names; // ??
        }

        if (data ? .company ? .name) {
            window.sixName = data.company.name; // ??
        }
    }

    /**
     * Add 6sense information as window properties, then send them to our analytics destinations
     *
     * This function can be used wherever a {@link SixSenseCompanyApiCallback} is required
     * @example
     * window.lr_analytics.init({
     *   sixSense: {
     *     enabled: true,
     *     apiKey: 'xyz',
     *     companyDetails: {
     *       enabled: true,
     *       apiKey: 'xyz',
     *       callback: window.lr_analytics.sixSenseCallbacks.sendSegmentEvents
     *     }
     *   }
     *  });
     * @example
     * window.lr_analytics.init({
     *   sixSense: {
     *     enabled: true,
     *     apiKey: 'xyz',
     *     companyDetails: {
     *       enabled: true,
     *       apiKey: 'xyz',
     *       callback: (response) => {
     *         window.lr_analytics.sixSenseCallbacks.sendSegmentEvents(response);
     *         // do something else with the response
     *       }
     *     }
     *   }
     * });
     *
     * @param {string} sixSenseResponse - The 6sense company API response
     */
    function sendSegmentEvents(sixSenseResponse) {
        const data = JSON.parse(sixSenseResponse);

        setWindowProperties(data);

        if (data ? .company ? .domain) {
            track('6sense domain', {
                domain: data.company.domain,
                employees: data.company.employee_count,
                hq: data.company.country,
                industry: data.company.industry,
            });
        }

        if (data ? .segments ? .names) {
            track('6sense segments', {
                segments: data.segments.names.join(','),
            });
        }
    }

    /**
     * Personalizes certain aspects of a blog page using 6sense company information
     *
     * This function can be used wherever a {@link SixSenseCompanyApiCallback} is required
     *
     * @param {string} sixSenseResponse - The 6sense company API response
     *
     * @deprecated use lr_analytics.personalizePage instead
     *
     * @memberof module:lr_analytics.sixSenseCallbacks
     * @alias module:lr_analytics.sixSenseCallbacks.personalizeBlogPost
     */
    async function personalizeBlogPost(sixSenseResponse) {
        sendSegmentEvents(sixSenseResponse);
        const data = JSON.parse(sixSenseResponse);
        const demoButton = document.getElementById('blog-personalized-demo-link');
        const thumbnail = document.getElementById('blog-personalized-demo-thumbnail');
        const companyName = document.getElementById('personalized-company-account-name');

        const skipPersonalization = () =>
            !data ? .company ? .domain ||
            window.location.pathname === '/' ||
            window.location.href.includes('product-management') ||
            !demoButton ||
            !thumbnail ||
            !companyName;

        const getPersonalizationURL = (domain) =>
            'https://us-central1-logrocket-com.cloudfunctions.net' +
            `/findPersonalization?targetDomain=${domain}`;

        if (skipPersonalization()) {
            window.dispatchEvent(new Event('personalization-skipped'));
        } else {
            const url = getPersonalizationURL(data.company.domain);

            try {
                const response = await fetch(url);
                const {
                    image_url: img,
                    link_url: link
                } = await response.json();
                if (!img || img.includes('not-found')) {
                    return;
                }

                if (!link || link.includes('not-found')) {
                    return;
                }

                thumbnail.src = img;
                demoButton.href = link;
                companyName.innerHTML = data.company.name;

                if (window.analytics) {
                    window.analytics.track('Personalization-deployed-blog', {
                        Domain: data.company.domain,
                    });
                }

                slideDemoInIfVisible();

                const event = new CustomEvent('personalization-success', {
                    detail: data
                });
                window.dispatchEvent(event);
            } catch (err) {
                if (window.analytics) {
                    window.analytics.track('personalization-failed');
                }
                throw err;
            }
        }
    }

    /**
     * Send an identify event to segment & LogRocket
     *
     * @param {string} userID - A unique identifier for this user
     * @param {object} traits - A dictionary of traits you know about the user
     */
    function identify(userID, traits) {
        if (window.analytics) {
            window.analytics.identify(userID, traits);
        }

        if (window.LogRocket) {
            window.LogRocket.identify(userID, traits);
        } else {
            // queue it
            window.lr_analytics.logrocket &&
                window.lr_analytics.logrocket.call_queue &&
                window.lr_analytics.logrocket.call_queue.push({
                    name: 'identify',
                    args: [userID, traits],
                });
        }
    }

    /**
     * Personalize the page.
     *
     * This is done by using the options object as a blueprint for what attributes to set on which DOM nodes.
     *
     * @example Set a `src` attribute on an `img` tag
     *
     * window.lr_analytics.personalizePage({
     *   items: [
     *     {
     *       selector: 'img',
     *       attribute: 'src',
     *       source: 'https://example.org/img'
     *     }
     *   ]
     * });
     *
     * @example Remove the `hidden` attribute on a DOM node
     * window.lr_analytics.personalizePage({
     *   items: [
     *     {
     *       selector: 'div',
     *       attribute: 'hidden',
     *       source: false
     *     }
     *   ]
     * });
     *
     * @example Add a css class to a DOM node after modifying it
     * window.lr_analytics.personalizePage({
     *   items: [
     *     {
     *       selector: '#personalize-link',
     *       attribute: 'href',
     *       source: 'https://some-new-link.com',
     *       addClass: ['highlight']
     *     }
     *   ]
     * });
     *
     *
     * @param {Object} options - Object specifying how to personalize the page.
     * @param {Object[]} options.items - List of DOM nodes whose content we want to swap out.
     * @param {string} options.items[].selector - CSS selector for the node
     * @param {*} options.items[].source - The value to set the attribute to. If it is a function, it will be evaluated and the result will be used
     * @param {string} options.items[].attribute - The name of the node attribute to set (e.g. `src` for images and scripts).
     * @param {string[]} options.items[].addClass - List of css classes to add to the node.
     * @param {string[]} options.items[].removeClass - List of css classes to remove from the node.
     */
    function personalizePage({
        items
    }) {
        if (!items) {
            throw new Error('`options.items` is required');
        }

        if (!Array.isArray(items)) {
            throw new Error('`options.items` must be an array');
        }

        // see the eslint no-prototype-builtin rule for the reason behind calling `hasOwnProperty` in
        // such an odd manner
        if (!(
                items.every((x) => Object.prototype.hasOwnProperty.call(x, 'selector')) &&
                items.every((x) => Object.prototype.hasOwnProperty.call(x, 'source')) &&
                items.every((x) => Object.prototype.hasOwnProperty.call(x, 'attribute'))
            )) {
            throw new Error('one of the objects is `options.items` has an invalid shape');
        }

        items.forEach((item) => {
            // This will only throw if the selector is invalid.
            const node = document.querySelector(item.selector);

            if (!node) {
                // skip personalization if we can't find the node
                return;
            }

            if (typeof item.source === 'function') {
                node[item.attribute] = item.source();
            } else {
                node[item.attribute] = item.source;
            }

            const {
                addClass = [], removeClass = []
            } = item;

            // Personalizing a page sometimes invovles adding/removing css classes to indicate
            // that a node has been personalized
            node.classList.add(...addClass);
            node.classList.remove(...removeClass);
        });
    }

    /**
     * Fetches the specified custom fields from an outreach account
     *
     * @example
     * window.lr_analytics.fetchOutreachAccountCustomFields({
     *   domain: 'logrocket.com',
     *   fields: [17, 18],
     * });
     *
     * @param {Object} options
     * @param {string} options.domain - The domain name of the account
     * @param {number[]} options.fields - The custom field numbers to fetch
     *
     * @returns {Object} A javascript object with a property for every custom field
     * that was requested. The properties are named `custom{field_number}`. So if
     * you requested `fields: [17, 18]`, you would get a object that looks like
     * this:
     *
     * ```json
     * {
     *   "custom17": "Whatever custom17 is set to",
     *   "custom18": "Whatever custom18 is set to"
     * }
     * ```
     */
    async function fetchOutreachAccountCustomFields({
        domain,
        fields
    }) {
        if (!domain) {
            throw new Error('`options.domain` is required');
        }

        if (!Array.isArray(fields)) {
            throw new Error('`options.fields` is not an array');
        }

        const custom = fields.filter((i) => Number.isInteger(i)).join(',');

        const customFieldURL =
            'https://us-central1-lr-marketing-and-sales-ops.cloudfunctions.net/' +
            'getOutreachAccountCustomField' +
            `?domain=${domain}&custom=${custom}`;

        const res = await fetch(customFieldURL);
        const resText = await res.text();

        if (!res.ok) {
            throw new Error(resText);
        }

        return JSON.parse(resText);
    }

    /**
     * Industry-specific customization values
     *
     * @example
     * window.lr_analytics.INDUSTRY_LOOKUP['Test Industry']
     *
     * @memberof module:lr_analytics
     * @alias module:lr_analytics.INDUSTRY_LOOKUP
     */
    const INDUSTRY_LOOKUP = {
        'Test Industry': {
            demoLink: 'https://logrocket.com/demo/logrocket',
            customText: 'Hello, Software Folks',
            customThumbnail: 'https://storage.googleapis.com/logrocket-com/gifs/affirm.com.gif',
        },
        'Software and Technology': {
            g2ReviewLink: 'https://www2.logrocket.com/rs/740-LKM-263/images/g2_homepage_saas.png',
        },
    };

    /**
     * Employee count-specific customization values
     *
     * @example
     * window.lr_analytics.EMPLOYEE_SIZE_LOOKUP['50 - 100']
     *
     * @memberof module:lr_analytics
     * @alias module:lr_analytics.EMPLOYEE_SIZE_LOOKUP
     */
    const EMPLOYEE_SIZE_LOOKUP = {
        'Test Range': {
            demoLink: 'https://logrocket.com/demo/logrocket',
            customText: 'Hello, small company',
            customThumbnail: 'https://storage.googleapis.com/logrocket-com/gifs/affirm.com.gif',
        },
    };

    /**
     * The main purpose of this module is to package all the analytics script snippets
     * (e.g. vwo, reddit, 6sense) into one function call: {@link module:lr_analytics.init init()}.
     *
     * Other utility functions like {@link module:lr_analytics.track track()} and
     * {@link module:lr_analytics.identify identify()} are also provided
     *
     * @module lr_analytics
     */

    // Helper function to throw when undefined arguments are given when a paramter is required
    function requiredParam(argName) {
        throw new Error(`${argName} is required`);
    }

    // Helper function to evaluate a flag
    // A flag can either be a boolean or a function returning a boolean
    function evaluateFlag(obj, prop) {
        const value = obj[prop];

        // If the value is undefined or null, treat it as false
        if (value === undefined || value === null) {
            return false;
        }

        // If the value is a boolean, return it.
        if (typeof value === 'boolean') {
            return value;
        }

        // If it is a function, evaluate it.
        if (typeof value === 'function') {
            try {
                return !!value();
            } catch (err) {
                // Evaluating the flag should not stop other code from executing if it throws, so swallow the error.
                // Print it out for debugging purposes.
                console.error(`[lr-analytics] evaluating ${prop} as a function threw an error`, err);
                return false;
            }
        }

        throw new Error(`flag ${value} is neither a boolean nor a function`);
    }

    // Wraps errors originating from `func` in a new Error instance with a new name.
    function withErrorName(func, errorName) {
        try {
            func();
        } catch (err) {
            const e = new Error('', {
                cause: err
            });
            e.name = errorName;
            throw e;
        }
    }

    /**
     * The expected shape of a function that accepts the result of the 6sense company details API call.
     * @static
     * @callback SixSenseCompanyApiCallback
     * @param {string} sixSenseResponse - The result of the 6sense company API call. Can be parsed using `JSON.parse`
     */

    /**
     * Functions to be used with the 6sense company API response
     *
     */
    const sixSenseCallbacks = {
        sendSegmentEvents,
        personalizeBlogPost,
    };

    const __helper = {
        withErrorName,
        evaluateFlag,
    };

    /**
     * Initializes analytics and trackers.
     *
     * The options object given to this function acts as a blueprint for what trackers to enable.
     *
     *
     * @example
     * window.lr_analytics.init({
     *   analyticsProxy : { enabled: true },
     *   segment: {
     *     enabled: true,
     *     writeKey: 'abc',
     *     load: true,
     *   },
     *   sixSense: {
     *     enabled: true,
     *     apiKey: 'xyz',
     *   }
     * });
     *
     * @param {Object} options - Options object specifying what analytics/trackers to set up.
     * @param {Object} [options.analyticsProxy] - Options for setting up the analytics proxy.
     * @param {(boolean|function)} options.analyticsProxy.enabled - Enable the analytics proxy
     * @param {string[]} [options.analyticsProxy.hostnames] - Additional hostnames to proxy
     * @param {string[]} [options.analyticsProxy.wordsToMask] - Additional words to mask
     * @param {Object} [options.segment] - Options for seting up segment snippet
     * @param {(boolean|function)} options.segment.enabled - Enable segment
     * @param {string} [options.segment.writeKey] - The segment api key
     * @param {boolean} [options.segment.load] - Makes the `window.analytics.load()` after executing the snippet. Defaults to false.
     * @param {Object} [options.sixSense] -- Options for setting up 6sense & 6signal snippet
     * @param {(boolean|function)} options.sixSense.enabled - Enable 6sense
     * @param {string} options.sixSense.apiKey - 6sense api key
     * @param {boolean} [options.sixSense.qa] - Send data to the QA/test endpoint instead of production
     * @param {Object} [options.sixSense.companyDetails] - Options relating to the 6sense company details API
     * @param {(boolean|function)} options.sixSense.companyDetails.enabled - Enable the 6sense company details API
     * @param {string} options.sixSense.companyDetails.apiKey - The company details API api key
     * @param {SixSenseCompanyApiCallback} options.sixSense.companyDetails.callback - function to run after we receive a response from the 6sense company details API
     * @param {Object} [options.vwo] - Options for setting up the vwo snippet
     * @param {(boolean|function)} options.vwo.enabled - Enable vwo
     * @param {number} options.vwo.accountId - VWO account ID
     * @param {Object} [options.redditPixel] - Options for setting up the reddit pixel snippet
     * @param {(boolean|function)} options.redditPixel.enabled - Enable the redit pixel
     * @param {string} options.redditPixel.accountId - Reddit adds advertiser id prefixed by
     * @param {Object} [options.clearbitReveal] - Options for setting up Clearbit reveal
     * @param {(boolean|function)} options.clearbitReveal.enabled - Enable clearbit reveal
     * @param {string} options.clearbitReveal.apiKey - Public api key for clearbit reveal. starts with pk_
     * @param {function} options.clearbitReveal.callback - Function to be called with result of clearbit reveal
     * @param {Object} [options.utmMediumHash] - Options for utm_medium URL hash
     * @param {(boolean|function)} options.utmMediumHash.enabled - Enable putting the utm_medium query param in the hash
     * @param {Object} options.logrocket - Options for setting up the logrocket snippet
     * @param {(boolean|function)} options.logrocket.enabled - Enable LogRocket
     * @param {boolean} options.logrocket.callInit - Makes the `LogRocket.init()` call once the script has been loaded.
     * @param {string} options.logrocket.appSlug - LogRocket appslug. Will be passed to `LogRocket.init()` if it is called
     * @param {Object} options.logrocket.initOptions - Options to pass as-is to `LogRocket.Init()`
     */

    function init({
        analyticsProxy = {},
        segment = {},
        sixSense = {},
        vwo = {},
        redditPixel = {},
        clearbitReveal = {},
        utmMediumHash = {},
        logrocket = {},
    }) {
        if (evaluateFlag(analyticsProxy, 'enabled')) {
            const {
                hostnames = [], wordsToMask = []
            } = analyticsProxy;

            const defaultHostnames = [
                'cdn.segment.com',
                'cdn.heapanalytics.com',
                'marketo.net',
                'api.segment.io',
                'heapanalytics.com',
                'visualwebsiteoptimizer.com',
                'mktoresp.com',
                'intercom.io',
                'linkedin.com',
                'licdn.com',
            ];

            const defaultWordsToMask = [
                'visitWebPage',
                'clickLink',
                'associateLead',
                'analytics',
                'heap',
                '.gif',
            ];
            withErrorName(
                () =>
                initAnalyticsProxy({
                    hostnames: [...defaultHostnames, ...hostnames],
                    wordsToMask: [...defaultWordsToMask, ...wordsToMask],
                }),
                'InitAnalyticsProxyError'
            );
        }

        if (evaluateFlag(segment, 'enabled')) {
            // It is valid to have an undefined write key. When this happens, the
            // segment snippet will be executed, but the segment library won't be
            // loaded
            const {
                writeKey,
                load = false
            } = segment;

            withErrorName(() => initSegment({
                writeKey,
                load
            }), 'InitSegmentError');
        }

        if (evaluateFlag(sixSense, 'enabled')) {
            const {
                apiKey = requiredParam('sixSense.apiKey'), companyDetails = {}, qa = false
            } = sixSense;
            let options = {
                apiKey,
                qa
            };

            if (evaluateFlag(companyDetails, 'enabled')) {
                const {
                    apiKey: cdApiKey = requiredParam('sixSense.companyDetails.apiKey'),
                    callback = requiredParam('sixSense.companyDetails.callback'),
                } = companyDetails;
                options = { ...options,
                    companyDetails: {
                        apiKey: cdApiKey,
                        callback
                    }
                };
            }

            withErrorName(() => initSixSense(options), 'InitSixSenseError');
        }

        if (evaluateFlag(logrocket, 'enabled')) {
            const {
                callInit = false, appSlug = '', initOptions = {}
            } = logrocket;
            withErrorName(() => initLogRocket({
                callInit,
                appSlug,
                initOptions
            }), 'InitLogRocketError');
        }

        if (evaluateFlag(vwo, 'enabled')) {
            const {
                accountId = requiredParam('vwo.account_id')
            } = vwo;

            withErrorName(() => initVwo({
                accountId
            }), 'InitVwoError');
        }

        if (evaluateFlag(redditPixel, 'enabled')) {
            const {
                accountId = requiredParam('redditPixel.account_id')
            } = redditPixel;

            withErrorName(() => initRedditPixel({
                accountId
            }), 'InitRedditPixelError');
        }

        if (evaluateFlag(clearbitReveal, 'enabled')) {
            const {
                apiKey,
                callback
            } = clearbitReveal;

            withErrorName(() => initClearbitReveal({
                apiKey,
                callback
            }), 'InitClearbitRevealError');
        }

        if (evaluateFlag(utmMediumHash, 'enabled')) {
            withErrorName(() => initUtmMediumHash(), 'InitUtmMediumHashError');
        }
    }

    exports.EMPLOYEE_SIZE_LOOKUP = EMPLOYEE_SIZE_LOOKUP;
    exports.INDUSTRY_LOOKUP = INDUSTRY_LOOKUP;
    exports.__helper = __helper;
    exports.fetchOutreachAccountCustomFields = fetchOutreachAccountCustomFields;
    exports.identify = identify;
    exports.init = init;
    exports.personalizePage = personalizePage;
    exports.sixSenseCallbacks = sixSenseCallbacks;
    exports.track = track;

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

}));