"use strict";
(self.webpackChunk_segment_analytics_next = self.webpackChunk_segment_analytics_next || []).push([
    [493], {
        9254: function(n, e, t) {
            function i(n, e) {
                var t, i;
                return "boolean" == typeof(null == e ? void 0 : e.enabled) ? e.enabled : null === (i = null === (t = null == n ? void 0 : n.__default) || void 0 === t ? void 0 : t.enabled) || void 0 === i || i
            }
            t.d(e, {
                n: function() {
                    return i
                }
            })
        },
        5081: function(n, e, t) {
            t.r(e), t.d(e, {
                schemaFilter: function() {
                    return o
                }
            });
            var i = t(5163),
                r = t(9254);

            function o(n, e) {
                function t(t) {
                    var o = n,
                        u = t.event.event;
                    if (o && u) {
                        var a = o[u];
                        if (!(0, r.n)(o, a)) return t.updateEvent("integrations", (0, i.pi)((0, i.pi)({}, t.event.integrations), {
                            All: !1,
                            "Segment.io": !0
                        })), t;
                        var s = function(n, e) {
                            var t, i;
                            if (!n || !Object.keys(n)) return {};
                            var r = n.integrations ? Object.keys(n.integrations).filter((function(e) {
                                    return !1 === n.integrations[e]
                                })) : [],
                                o = [];
                            return (null !== (t = e.remotePlugins) && void 0 !== t ? t : []).forEach((function(n) {
                                r.forEach((function(e) {
                                    n.creationName == e && o.push(n.name)
                                }))
                            })), (null !== (i = e.remotePlugins) && void 0 !== i ? i : []).reduce((function(n, e) {
                                return e.settings.subscriptions && o.includes(e.name) && e.settings.subscriptions.forEach((function(t) {
                                    return n["".concat(e.name, " ").concat(t.partnerAction)] = !1
                                })), n
                            }), {})
                        }(a, e);
                        t.updateEvent("integrations", (0, i.pi)((0, i.pi)((0, i.pi)({}, t.event.integrations), null == a ? void 0 : a.integrations), s))
                    }
                    return t
                }
                return {
                    name: "Schema Filter",
                    version: "0.1.0",
                    isLoaded: function() {
                        return !0
                    },
                    load: function() {
                        return Promise.resolve()
                    },
                    type: "before",
                    page: t,
                    alias: t,
                    track: t,
                    identify: t,
                    group: t
                }
            }
        }
    }
]);
//# sourceMappingURL=schemaFilter.bundle.5c2661f67b4b71a6d9bd.js.map