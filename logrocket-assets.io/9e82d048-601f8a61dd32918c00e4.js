"use strict";
(self.webpackChunklogrocket_web = self.webpackChunklogrocket_web || []).push([
    [365], {
        15662: function(t, e, r) {
            r.r(e), r.d(e, {
                Authentication: function() {
                    return pn
                },
                Management: function() {
                    return cn
                },
                WebAuth: function() {
                    return sn
                },
                version: function() {
                    return Ce
                }
            });
            r(65743), r(8628), r(17727);
            var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {};

            function o(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports
            }
            var i = o((function(t) {
                    var e, r;
                    e = n, r = function() {
                        return function() {
                            return function(t) {
                                var e = [];
                                if (0 === t.length) return "";
                                if ("string" != typeof t[0]) throw new TypeError("Url must be a string. Received " + t[0]);
                                if (t[0].match(/^[^/:]+:\/*$/) && t.length > 1) {
                                    var r = t.shift();
                                    t[0] = r + t[0]
                                }
                                t[0].match(/^file:\/\/\//) ? t[0] = t[0].replace(/^([^/:]+):\/*/, "$1:///") : t[0] = t[0].replace(/^([^/:]+):\/*/, "$1://");
                                for (var n = 0; n < t.length; n++) {
                                    var o = t[n];
                                    if ("string" != typeof o) throw new TypeError("Url must be a string. Received " + o);
                                    "" !== o && (n > 0 && (o = o.replace(/^[\/]+/, "")), o = n < t.length - 1 ? o.replace(/[\/]+$/, "") : o.replace(/[\/]+$/, "/"), e.push(o))
                                }
                                var i = e.join("/"),
                                    s = (i = i.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
                                return s.shift() + (s.length > 0 ? "?" : "") + s.join("&")
                            }("object" == typeof arguments[0] ? arguments[0] : [].slice.call(arguments))
                        }
                    }, t.exports ? t.exports = r() : e.urljoin = r()
                })),
                s = n.Symbol,
                a = Array.prototype.slice,
                u = Object.prototype.toString,
                p = Function.prototype.bind || function(t) {
                    var e = this;
                    if ("function" != typeof e || "[object Function]" !== u.call(e)) throw new TypeError("Function.prototype.bind called on incompatible " + e);
                    for (var r, n = a.call(arguments, 1), o = Math.max(0, e.length - n.length), i = [], s = 0; s < o; s++) i.push("$" + s);
                    if (r = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this,arguments); }")((function() {
                            if (this instanceof r) {
                                var o = e.apply(this, n.concat(a.call(arguments)));
                                return Object(o) === o ? o : this
                            }
                            return e.apply(t, n.concat(a.call(arguments)))
                        })), e.prototype) {
                        var p = function() {};
                        p.prototype = e.prototype, r.prototype = new p, p.prototype = null
                    }
                    return r
                },
                c = p.call(Function.call, Object.prototype.hasOwnProperty),
                l = SyntaxError,
                h = Function,
                f = TypeError,
                d = function(t) {
                    try {
                        return h('"use strict"; return (' + t + ").constructor;")()
                    } catch (cr) {}
                },
                y = Object.getOwnPropertyDescriptor;
            if (y) try {
                y({}, "")
            } catch (cr) {
                y = null
            }
            var m = function() {
                    throw new f
                },
                g = y ? function() {
                    try {
                        return m
                    } catch (t) {
                        try {
                            return y(arguments, "callee").get
                        } catch (e) {
                            return m
                        }
                    }
                }() : m,
                v = "function" == typeof s && "function" == typeof Symbol && "symbol" == typeof s("foo") && "symbol" == typeof Symbol("bar") && function() {
                    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                    if ("symbol" == typeof Symbol.iterator) return !0;
                    var t = {},
                        e = Symbol("test"),
                        r = Object(e);
                    if ("string" == typeof e) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                    for (e in t[e] = 42, t) return !1;
                    if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                    if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                    var n = Object.getOwnPropertySymbols(t);
                    if (1 !== n.length || n[0] !== e) return !1;
                    if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                    if ("function" == typeof Object.getOwnPropertyDescriptor) {
                        var o = Object.getOwnPropertyDescriptor(t, e);
                        if (42 !== o.value || !0 !== o.enumerable) return !1
                    }
                    return !0
                }(),
                b = Object.getPrototypeOf || function(t) {
                    return t.__proto__
                },
                w = {},
                _ = "undefined" == typeof Uint8Array ? void 0 : b(Uint8Array),
                O = {
                    "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
                    "%ArrayIteratorPrototype%": v ? b([][Symbol.iterator]()) : void 0,
                    "%AsyncFromSyncIteratorPrototype%": void 0,
                    "%AsyncFunction%": w,
                    "%AsyncGenerator%": w,
                    "%AsyncGeneratorFunction%": w,
                    "%AsyncIteratorPrototype%": w,
                    "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
                    "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
                    "%Boolean%": Boolean,
                    "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": Error,
                    "%eval%": eval,
                    "%EvalError%": EvalError,
                    "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
                    "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
                    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
                    "%Function%": h,
                    "%GeneratorFunction%": w,
                    "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
                    "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
                    "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": v ? b(b([][Symbol.iterator]())) : void 0,
                    "%JSON%": "object" == typeof JSON ? JSON : void 0,
                    "%Map%": "undefined" == typeof Map ? void 0 : Map,
                    "%MapIteratorPrototype%": "undefined" != typeof Map && v ? b((new Map)[Symbol.iterator]()) : void 0,
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
                    "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
                    "%RangeError%": RangeError,
                    "%ReferenceError%": ReferenceError,
                    "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": "undefined" == typeof Set ? void 0 : Set,
                    "%SetIteratorPrototype%": "undefined" != typeof Set && v ? b((new Set)[Symbol.iterator]()) : void 0,
                    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": v ? b("" [Symbol.iterator]()) : void 0,
                    "%Symbol%": v ? Symbol : void 0,
                    "%SyntaxError%": l,
                    "%ThrowTypeError%": g,
                    "%TypedArray%": _,
                    "%TypeError%": f,
                    "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
                    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
                    "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
                    "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
                    "%URIError%": URIError,
                    "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
                    "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
                    "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet
                },
                T = {
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                k = p.call(Function.call, Array.prototype.concat),
                S = p.call(Function.apply, Array.prototype.splice),
                A = p.call(Function.call, String.prototype.replace),
                j = p.call(Function.call, String.prototype.slice),
                x = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                E = /\\(\\)?/g,
                C = function(t, e) {
                    if ("string" != typeof t || 0 === t.length) throw new f("intrinsic name must be a non-empty string");
                    if (arguments.length > 1 && "boolean" != typeof e) throw new f('"allowMissing" argument must be a boolean');
                    var r = function(t) {
                            var e = j(t, 0, 1),
                                r = j(t, -1);
                            if ("%" === e && "%" !== r) throw new l("invalid intrinsic syntax, expected closing `%`");
                            if ("%" === r && "%" !== e) throw new l("invalid intrinsic syntax, expected opening `%`");
                            var n = [];
                            return A(t, x, (function(t, e, r, o) {
                                n[n.length] = r ? A(o, E, "$1") : e || t
                            })), n
                        }(t),
                        n = r.length > 0 ? r[0] : "",
                        o = function(t, e) {
                            var r, n = t;
                            if (c(T, n) && (n = "%" + (r = T[n])[0] + "%"), c(O, n)) {
                                var o = O[n];
                                if (o === w && (o = function t(e) {
                                        var r;
                                        if ("%AsyncFunction%" === e) r = d("async function () {}");
                                        else if ("%GeneratorFunction%" === e) r = d("function* () {}");
                                        else if ("%AsyncGeneratorFunction%" === e) r = d("async function* () {}");
                                        else if ("%AsyncGenerator%" === e) {
                                            var n = t("%AsyncGeneratorFunction%");
                                            n && (r = n.prototype)
                                        } else if ("%AsyncIteratorPrototype%" === e) {
                                            var o = t("%AsyncGenerator%");
                                            o && (r = b(o.prototype))
                                        }
                                        return O[e] = r, r
                                    }(n)), void 0 === o && !e) throw new f("intrinsic " + t + " exists, but is not available. Please file an issue!");
                                return {
                                    alias: r,
                                    name: n,
                                    value: o
                                }
                            }
                            throw new l("intrinsic " + t + " does not exist!")
                        }("%" + n + "%", e),
                        i = o.name,
                        s = o.value,
                        a = !1,
                        u = o.alias;
                    u && (n = u[0], S(r, k([0, 1], u)));
                    for (var p = 1, h = !0; p < r.length; p += 1) {
                        var m = r[p],
                            g = j(m, 0, 1),
                            v = j(m, -1);
                        if (('"' === g || "'" === g || "`" === g || '"' === v || "'" === v || "`" === v) && g !== v) throw new l("property names with quotes must have matching quotes");
                        if ("constructor" !== m && h || (a = !0), c(O, i = "%" + (n += "." + m) + "%")) s = O[i];
                        else if (null != s) {
                            if (!(m in s)) {
                                if (!e) throw new f("base intrinsic for " + t + " exists, but the property is not available.");
                                return
                            }
                            if (y && p + 1 >= r.length) {
                                var _ = y(s, m);
                                s = (h = !!_) && "get" in _ && !("originalValue" in _.get) ? _.get : s[m]
                            } else h = c(s, m), s = s[m];
                            h && !a && (O[i] = s)
                        }
                    }
                    return s
                },
                D = o((function(t) {
                    var e = C("%Function.prototype.apply%"),
                        r = C("%Function.prototype.call%"),
                        n = C("%Reflect.apply%", !0) || p.call(r, e),
                        o = C("%Object.getOwnPropertyDescriptor%", !0),
                        i = C("%Object.defineProperty%", !0),
                        s = C("%Math.max%");
                    if (i) try {
                        i({}, "a", {
                            value: 1
                        })
                    } catch (cr) {
                        i = null
                    }
                    t.exports = function(t) {
                        var e = n(p, r, arguments);
                        o && i && (o(e, "length").configurable && i(e, "length", {
                            value: 1 + s(0, t.length - (arguments.length - 1))
                        }));
                        return e
                    };
                    var a = function() {
                        return n(p, e, arguments)
                    };
                    i ? i(t.exports, "apply", {
                        value: a
                    }) : t.exports.apply = a
                })),
                I = (D.apply, D(C("String.prototype.indexOf"))),
                P = function(t, e) {
                    var r = C(t, !!e);
                    return "function" == typeof r && I(t, ".prototype.") > -1 ? D(r) : r
                },
                R = function(t) {
                    return t && t.default || t
                }(Object.freeze({
                    __proto__: null,
                    default: {}
                })),
                q = "function" == typeof Map && Map.prototype,
                U = Object.getOwnPropertyDescriptor && q ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                M = q && U && "function" == typeof U.get ? U.get : null,
                L = q && Map.prototype.forEach,
                B = "function" == typeof Set && Set.prototype,
                N = Object.getOwnPropertyDescriptor && B ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                H = B && N && "function" == typeof N.get ? N.get : null,
                F = B && Set.prototype.forEach,
                W = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                z = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                V = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                J = Boolean.prototype.valueOf,
                $ = Object.prototype.toString,
                G = Function.prototype.toString,
                X = String.prototype.match,
                Q = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                Z = Object.getOwnPropertySymbols,
                K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
                Y = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                tt = Object.prototype.propertyIsEnumerable,
                et = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
                    return t.__proto__
                } : null),
                rt = R.custom,
                nt = rt && pt(rt) ? rt : null,
                ot = "function" == typeof Symbol && void 0 !== Symbol.toStringTag ? Symbol.toStringTag : null,
                it = function t(e, r, n, o) {
                    var i = r || {};
                    if (lt(i, "quoteStyle") && "single" !== i.quoteStyle && "double" !== i.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                    if (lt(i, "maxStringLength") && ("number" == typeof i.maxStringLength ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : null !== i.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                    var s = !lt(i, "customInspect") || i.customInspect;
                    if ("boolean" != typeof s && "symbol" !== s) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                    if (lt(i, "indent") && null !== i.indent && "\t" !== i.indent && !(parseInt(i.indent, 10) === i.indent && i.indent > 0)) throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
                    if (void 0 === e) return "undefined";
                    if (null === e) return "null";
                    if ("boolean" == typeof e) return e ? "true" : "false";
                    if ("string" == typeof e) return function t(e, r) {
                        if (e.length > r.maxStringLength) {
                            var n = e.length - r.maxStringLength,
                                o = "... " + n + " more character" + (n > 1 ? "s" : "");
                            return t(e.slice(0, r.maxStringLength), r) + o
                        }
                        return st(e.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, dt), "single", r)
                    }(e, i);
                    if ("number" == typeof e) return 0 === e ? 1 / 0 / e > 0 ? "0" : "-0" : String(e);
                    if ("bigint" == typeof e) return String(e) + "n";
                    var a = void 0 === i.depth ? 5 : i.depth;
                    if (void 0 === n && (n = 0), n >= a && a > 0 && "object" == typeof e) return ut(e) ? "[Array]" : "[Object]";
                    var u = function(t, e) {
                        var r;
                        if ("\t" === t.indent) r = "\t";
                        else {
                            if (!("number" == typeof t.indent && t.indent > 0)) return null;
                            r = Array(t.indent + 1).join(" ")
                        }
                        return {
                            base: r,
                            prev: Array(e + 1).join(r)
                        }
                    }(i, n);
                    if (void 0 === o) o = [];
                    else if (ft(o, e) >= 0) return "[Circular]";

                    function p(e, r, s) {
                        if (r && (o = o.slice()).push(r), s) {
                            var a = {
                                depth: i.depth
                            };
                            return lt(i, "quoteStyle") && (a.quoteStyle = i.quoteStyle), t(e, a, n + 1, o)
                        }
                        return t(e, i, n + 1, o)
                    }
                    if ("function" == typeof e) {
                        var c = function(t) {
                                if (t.name) return t.name;
                                var e = X.call(G.call(t), /^function\s*([\w$]+)/);
                                return e ? e[1] : null
                            }(e),
                            l = bt(e, p);
                        return "[Function" + (c ? ": " + c : " (anonymous)") + "]" + (l.length > 0 ? " { " + l.join(", ") + " }" : "")
                    }
                    if (pt(e)) {
                        var h = Y ? String(e).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : K.call(e);
                        return "object" != typeof e || Y ? h : yt(h)
                    }
                    if (function(t) {
                            return !(!t || "object" != typeof t) && ("undefined" != typeof HTMLElement && t instanceof HTMLElement || "string" == typeof t.nodeName && "function" == typeof t.getAttribute)
                        }(e)) {
                        for (var f = "<" + String(e.nodeName).toLowerCase(), d = e.attributes || [], y = 0; y < d.length; y++) f += " " + d[y].name + "=" + st(at(d[y].value), "double", i);
                        return f += ">", e.childNodes && e.childNodes.length && (f += "..."), f + "</" + String(e.nodeName).toLowerCase() + ">"
                    }
                    if (ut(e)) {
                        if (0 === e.length) return "[]";
                        var m = bt(e, p);
                        return u && ! function(t) {
                            for (var e = 0; e < t.length; e++)
                                if (ft(t[e], "\n") >= 0) return !1;
                            return !0
                        }(m) ? "[" + vt(m, u) + "]" : "[ " + m.join(", ") + " ]"
                    }
                    if (function(t) {
                            return !("[object Error]" !== ht(t) || ot && "object" == typeof t && ot in t)
                        }(e)) {
                        var g = bt(e, p);
                        return 0 === g.length ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + g.join(", ") + " }"
                    }
                    if ("object" == typeof e && s) {
                        if (nt && "function" == typeof e[nt]) return e[nt]();
                        if ("symbol" !== s && "function" == typeof e.inspect) return e.inspect()
                    }
                    if (function(t) {
                            if (!M || !t || "object" != typeof t) return !1;
                            try {
                                M.call(t);
                                try {
                                    H.call(t)
                                } catch (f) {
                                    return !0
                                }
                                return t instanceof Map
                            } catch (cr) {}
                            return !1
                        }(e)) {
                        var v = [];
                        return L.call(e, (function(t, r) {
                            v.push(p(r, e, !0) + " => " + p(t, e))
                        })), gt("Map", M.call(e), v, u)
                    }
                    if (function(t) {
                            if (!H || !t || "object" != typeof t) return !1;
                            try {
                                H.call(t);
                                try {
                                    M.call(t)
                                } catch (kr) {
                                    return !0
                                }
                                return t instanceof Set
                            } catch (cr) {}
                            return !1
                        }(e)) {
                        var b = [];
                        return F.call(e, (function(t) {
                            b.push(p(t, e))
                        })), gt("Set", H.call(e), b, u)
                    }
                    if (function(t) {
                            if (!W || !t || "object" != typeof t) return !1;
                            try {
                                W.call(t, W);
                                try {
                                    z.call(t, z)
                                } catch (f) {
                                    return !0
                                }
                                return t instanceof WeakMap
                            } catch (cr) {}
                            return !1
                        }(e)) return mt("WeakMap");
                    if (function(t) {
                            if (!z || !t || "object" != typeof t) return !1;
                            try {
                                z.call(t, z);
                                try {
                                    W.call(t, W)
                                } catch (f) {
                                    return !0
                                }
                                return t instanceof WeakSet
                            } catch (cr) {}
                            return !1
                        }(e)) return mt("WeakSet");
                    if (function(t) {
                            if (!V || !t || "object" != typeof t) return !1;
                            try {
                                return V.call(t), !0
                            } catch (cr) {}
                            return !1
                        }(e)) return mt("WeakRef");
                    if (function(t) {
                            return !("[object Number]" !== ht(t) || ot && "object" == typeof t && ot in t)
                        }(e)) return yt(p(Number(e)));
                    if (function(t) {
                            if (!t || "object" != typeof t || !Q) return !1;
                            try {
                                return Q.call(t), !0
                            } catch (cr) {}
                            return !1
                        }(e)) return yt(p(Q.call(e)));
                    if (function(t) {
                            return !("[object Boolean]" !== ht(t) || ot && "object" == typeof t && ot in t)
                        }(e)) return yt(J.call(e));
                    if (function(t) {
                            return !("[object String]" !== ht(t) || ot && "object" == typeof t && ot in t)
                        }(e)) return yt(p(String(e)));
                    if (! function(t) {
                            return !("[object Date]" !== ht(t) || ot && "object" == typeof t && ot in t)
                        }(e) && ! function(t) {
                            return !("[object RegExp]" !== ht(t) || ot && "object" == typeof t && ot in t)
                        }(e)) {
                        var w = bt(e, p),
                            _ = et ? et(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                            O = e instanceof Object ? "" : "null prototype",
                            T = !_ && ot && Object(e) === e && ot in e ? ht(e).slice(8, -1) : O ? "Object" : "",
                            k = (_ || "function" != typeof e.constructor ? "" : e.constructor.name ? e.constructor.name + " " : "") + (T || O ? "[" + [].concat(T || [], O || []).join(": ") + "] " : "");
                        return 0 === w.length ? k + "{}" : u ? k + "{" + vt(w, u) + "}" : k + "{ " + w.join(", ") + " }"
                    }
                    return String(e)
                };

            function st(t, e, r) {
                var n = "double" === (r.quoteStyle || e) ? '"' : "'";
                return n + t + n
            }

            function at(t) {
                return String(t).replace(/"/g, "&quot;")
            }

            function ut(t) {
                return !("[object Array]" !== ht(t) || ot && "object" == typeof t && ot in t)
            }

            function pt(t) {
                if (Y) return t && "object" == typeof t && t instanceof Symbol;
                if ("symbol" == typeof t) return !0;
                if (!t || "object" != typeof t || !K) return !1;
                try {
                    return K.call(t), !0
                } catch (cr) {}
                return !1
            }
            var ct = Object.prototype.hasOwnProperty || function(t) {
                return t in this
            };

            function lt(t, e) {
                return ct.call(t, e)
            }

            function ht(t) {
                return $.call(t)
            }

            function ft(t, e) {
                if (t.indexOf) return t.indexOf(e);
                for (var r = 0, n = t.length; r < n; r++)
                    if (t[r] === e) return r;
                return -1
            }

            function dt(t) {
                var e = t.charCodeAt(0),
                    r = {
                        8: "b",
                        9: "t",
                        10: "n",
                        12: "f",
                        13: "r"
                    }[e];
                return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + e.toString(16).toUpperCase()
            }

            function yt(t) {
                return "Object(" + t + ")"
            }

            function mt(t) {
                return t + " { ? }"
            }

            function gt(t, e, r, n) {
                return t + " (" + e + ") {" + (n ? vt(r, n) : r.join(", ")) + "}"
            }

            function vt(t, e) {
                if (0 === t.length) return "";
                var r = "\n" + e.prev + e.base;
                return r + t.join("," + r) + "\n" + e.prev
            }

            function bt(t, e) {
                var r = ut(t),
                    n = [];
                if (r) {
                    n.length = t.length;
                    for (var o = 0; o < t.length; o++) n[o] = lt(t, o) ? e(t[o], t) : ""
                }
                var i, s = "function" == typeof Z ? Z(t) : [];
                if (Y) {
                    i = {};
                    for (var a = 0; a < s.length; a++) i["$" + s[a]] = s[a]
                }
                for (var u in t) lt(t, u) && (r && String(Number(u)) === u && u < t.length || Y && i["$" + u] instanceof Symbol || (/[^\w$]/.test(u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));
                if ("function" == typeof Z)
                    for (var p = 0; p < s.length; p++) tt.call(t, s[p]) && n.push("[" + e(s[p]) + "]: " + e(t[s[p]], t));
                return n
            }
            var wt = C("%TypeError%"),
                _t = C("%WeakMap%", !0),
                Ot = C("%Map%", !0),
                Tt = P("WeakMap.prototype.get", !0),
                kt = P("WeakMap.prototype.set", !0),
                St = P("WeakMap.prototype.has", !0),
                At = P("Map.prototype.get", !0),
                jt = P("Map.prototype.set", !0),
                xt = P("Map.prototype.has", !0),
                Et = function(t, e) {
                    for (var r, n = t; null !== (r = n.next); n = r)
                        if (r.key === e) return n.next = r.next, r.next = t.next, t.next = r, r
                },
                Ct = function() {
                    var t, e, r, n = {
                        assert: function(t) {
                            if (!n.has(t)) throw new wt("Side channel does not contain " + it(t))
                        },
                        get: function(n) {
                            if (_t && n && ("object" == typeof n || "function" == typeof n)) {
                                if (t) return Tt(t, n)
                            } else if (Ot) {
                                if (e) return At(e, n)
                            } else if (r) return function(t, e) {
                                var r = Et(t, e);
                                return r && r.value
                            }(r, n)
                        },
                        has: function(n) {
                            if (_t && n && ("object" == typeof n || "function" == typeof n)) {
                                if (t) return St(t, n)
                            } else if (Ot) {
                                if (e) return xt(e, n)
                            } else if (r) return function(t, e) {
                                return !!Et(t, e)
                            }(r, n);
                            return !1
                        },
                        set: function(n, o) {
                            _t && n && ("object" == typeof n || "function" == typeof n) ? (t || (t = new _t), kt(t, n, o)) : Ot ? (e || (e = new Ot), jt(e, n, o)) : (r || (r = {
                                key: {},
                                next: null
                            }), function(t, e, r) {
                                var n = Et(t, e);
                                n ? n.value = r : t.next = {
                                    key: e,
                                    next: t.next,
                                    value: r
                                }
                            }(r, n, o))
                        }
                    };
                    return n
                },
                Dt = String.prototype.replace,
                It = /%20/g,
                Pt = "RFC3986",
                Rt = {
                    default: Pt,
                    formatters: {
                        RFC1738: function(t) {
                            return Dt.call(t, It, "+")
                        },
                        RFC3986: function(t) {
                            return String(t)
                        }
                    },
                    RFC1738: "RFC1738",
                    RFC3986: Pt
                },
                qt = Object.prototype.hasOwnProperty,
                Ut = Array.isArray,
                Mt = function() {
                    for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
                    return t
                }(),
                Lt = function(t, e) {
                    for (var r = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n) void 0 !== t[n] && (r[n] = t[n]);
                    return r
                },
                Bt = {
                    arrayToObject: Lt,
                    assign: function(t, e) {
                        return Object.keys(e).reduce((function(t, r) {
                            return t[r] = e[r], t
                        }), t)
                    },
                    combine: function(t, e) {
                        return [].concat(t, e)
                    },
                    compact: function(t) {
                        for (var e = [{
                                obj: {
                                    o: t
                                },
                                prop: "o"
                            }], r = [], n = 0; n < e.length; ++n)
                            for (var o = e[n], i = o.obj[o.prop], s = Object.keys(i), a = 0; a < s.length; ++a) {
                                var u = s[a],
                                    p = i[u];
                                "object" == typeof p && null !== p && -1 === r.indexOf(p) && (e.push({
                                    obj: i,
                                    prop: u
                                }), r.push(p))
                            }
                        return function(t) {
                            for (; t.length > 1;) {
                                var e = t.pop(),
                                    r = e.obj[e.prop];
                                if (Ut(r)) {
                                    for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                                    e.obj[e.prop] = n
                                }
                            }
                        }(e), t
                    },
                    decode: function(t, e, r) {
                        var n = t.replace(/\+/g, " ");
                        if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                        try {
                            return decodeURIComponent(n)
                        } catch (cr) {
                            return n
                        }
                    },
                    encode: function(t, e, r, n, o) {
                        if (0 === t.length) return t;
                        var i = t;
                        if ("symbol" == typeof t ? i = Symbol.prototype.toString.call(t) : "string" != typeof t && (i = String(t)), "iso-8859-1" === r) return escape(i).replace(/%u[0-9a-f]{4}/gi, (function(t) {
                            return "%26%23" + parseInt(t.slice(2), 16) + "%3B"
                        }));
                        for (var s = "", a = 0; a < i.length; ++a) {
                            var u = i.charCodeAt(a);
                            45 === u || 46 === u || 95 === u || 126 === u || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || o === Rt.RFC1738 && (40 === u || 41 === u) ? s += i.charAt(a) : u < 128 ? s += Mt[u] : u < 2048 ? s += Mt[192 | u >> 6] + Mt[128 | 63 & u] : u < 55296 || u >= 57344 ? s += Mt[224 | u >> 12] + Mt[128 | u >> 6 & 63] + Mt[128 | 63 & u] : (a += 1, u = 65536 + ((1023 & u) << 10 | 1023 & i.charCodeAt(a)), s += Mt[240 | u >> 18] + Mt[128 | u >> 12 & 63] + Mt[128 | u >> 6 & 63] + Mt[128 | 63 & u])
                        }
                        return s
                    },
                    isBuffer: function(t) {
                        return !(!t || "object" != typeof t || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)))
                    },
                    isRegExp: function(t) {
                        return "[object RegExp]" === Object.prototype.toString.call(t)
                    },
                    maybeMap: function(t, e) {
                        if (Ut(t)) {
                            for (var r = [], n = 0; n < t.length; n += 1) r.push(e(t[n]));
                            return r
                        }
                        return e(t)
                    },
                    merge: function t(e, r, n) {
                        if (!r) return e;
                        if ("object" != typeof r) {
                            if (Ut(e)) e.push(r);
                            else {
                                if (!e || "object" != typeof e) return [e, r];
                                (n && (n.plainObjects || n.allowPrototypes) || !qt.call(Object.prototype, r)) && (e[r] = !0)
                            }
                            return e
                        }
                        if (!e || "object" != typeof e) return [e].concat(r);
                        var o = e;
                        return Ut(e) && !Ut(r) && (o = Lt(e, n)), Ut(e) && Ut(r) ? (r.forEach((function(r, o) {
                            if (qt.call(e, o)) {
                                var i = e[o];
                                i && "object" == typeof i && r && "object" == typeof r ? e[o] = t(i, r, n) : e.push(r)
                            } else e[o] = r
                        })), e) : Object.keys(r).reduce((function(e, o) {
                            var i = r[o];
                            return qt.call(e, o) ? e[o] = t(e[o], i, n) : e[o] = i, e
                        }), o)
                    }
                },
                Nt = Object.prototype.hasOwnProperty,
                Ht = {
                    brackets: function(t) {
                        return t + "[]"
                    },
                    comma: "comma",
                    indices: function(t, e) {
                        return t + "[" + e + "]"
                    },
                    repeat: function(t) {
                        return t
                    }
                },
                Ft = Array.isArray,
                Wt = Array.prototype.push,
                zt = function(t, e) {
                    Wt.apply(t, Ft(e) ? e : [e])
                },
                Vt = Date.prototype.toISOString,
                Jt = Rt.default,
                $t = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encoder: Bt.encode,
                    encodeValuesOnly: !1,
                    format: Jt,
                    formatter: Rt.formatters[Jt],
                    indices: !1,
                    serializeDate: function(t) {
                        return Vt.call(t)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                Gt = function t(e, r, n, o, i, s, a, u, p, c, l, h, f, d, y) {
                    var m = e;
                    if (y.has(e)) throw new RangeError("Cyclic object value");
                    if ("function" == typeof a ? m = a(r, m) : m instanceof Date ? m = c(m) : "comma" === n && Ft(m) && (m = Bt.maybeMap(m, (function(t) {
                            return t instanceof Date ? c(t) : t
                        }))), null === m) {
                        if (o) return s && !f ? s(r, $t.encoder, d, "key", l) : r;
                        m = ""
                    }
                    if (function(t) {
                            return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || "symbol" == typeof t || "bigint" == typeof t
                        }(m) || Bt.isBuffer(m)) return s ? [h(f ? r : s(r, $t.encoder, d, "key", l)) + "=" + h(s(m, $t.encoder, d, "value", l))] : [h(r) + "=" + h(String(m))];
                    var g, v = [];
                    if (void 0 === m) return v;
                    if ("comma" === n && Ft(m)) g = [{
                        value: m.length > 0 ? m.join(",") || null : void 0
                    }];
                    else if (Ft(a)) g = a;
                    else {
                        var b = Object.keys(m);
                        g = u ? b.sort(u) : b
                    }
                    for (var w = 0; w < g.length; ++w) {
                        var _ = g[w],
                            O = "object" == typeof _ && void 0 !== _.value ? _.value : m[_];
                        if (!i || null !== O) {
                            var T = Ft(m) ? "function" == typeof n ? n(r, _) : r : r + (p ? "." + _ : "[" + _ + "]");
                            y.set(e, !0);
                            var k = Ct();
                            zt(v, t(O, T, n, o, i, s, a, u, p, c, l, h, f, d, k))
                        }
                    }
                    return v
                },
                Xt = Object.prototype.hasOwnProperty,
                Qt = Array.isArray,
                Zt = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    allowSparse: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decoder: Bt.decode,
                    delimiter: "&",
                    depth: 5,
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                Kt = function(t) {
                    return t.replace(/&#(\d+);/g, (function(t, e) {
                        return String.fromCharCode(parseInt(e, 10))
                    }))
                },
                Yt = function(t, e) {
                    return t && "string" == typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
                },
                te = function(t, e, r, n) {
                    if (t) {
                        var o = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                            i = /(\[[^[\]]*])/g,
                            s = r.depth > 0 && /(\[[^[\]]*])/.exec(o),
                            a = s ? o.slice(0, s.index) : o,
                            u = [];
                        if (a) {
                            if (!r.plainObjects && Xt.call(Object.prototype, a) && !r.allowPrototypes) return;
                            u.push(a)
                        }
                        for (var p = 0; r.depth > 0 && null !== (s = i.exec(o)) && p < r.depth;) {
                            if (p += 1, !r.plainObjects && Xt.call(Object.prototype, s[1].slice(1, -1)) && !r.allowPrototypes) return;
                            u.push(s[1])
                        }
                        return s && u.push("[" + o.slice(s.index) + "]"),
                            function(t, e, r, n) {
                                for (var o = n ? e : Yt(e, r), i = t.length - 1; i >= 0; --i) {
                                    var s, a = t[i];
                                    if ("[]" === a && r.parseArrays) s = [].concat(o);
                                    else {
                                        s = r.plainObjects ? Object.create(null) : {};
                                        var u = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                                            p = parseInt(u, 10);
                                        r.parseArrays || "" !== u ? !isNaN(p) && a !== u && String(p) === u && p >= 0 && r.parseArrays && p <= r.arrayLimit ? (s = [])[p] = o : s[u] = o : s = {
                                            0: o
                                        }
                                    }
                                    o = s
                                }
                                return o
                            }(u, e, r, n)
                    }
                },
                ee = function(t, e) {
                    var r, n = t,
                        o = function(t) {
                            if (!t) return $t;
                            if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
                            var e = t.charset || $t.charset;
                            if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                            var r = Rt.default;
                            if (void 0 !== t.format) {
                                if (!Nt.call(Rt.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                                r = t.format
                            }
                            var n = Rt.formatters[r],
                                o = $t.filter;
                            return ("function" == typeof t.filter || Ft(t.filter)) && (o = t.filter), {
                                addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : $t.addQueryPrefix,
                                allowDots: void 0 === t.allowDots ? $t.allowDots : !!t.allowDots,
                                charset: e,
                                charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : $t.charsetSentinel,
                                delimiter: void 0 === t.delimiter ? $t.delimiter : t.delimiter,
                                encode: "boolean" == typeof t.encode ? t.encode : $t.encode,
                                encoder: "function" == typeof t.encoder ? t.encoder : $t.encoder,
                                encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : $t.encodeValuesOnly,
                                filter: o,
                                format: r,
                                formatter: n,
                                serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : $t.serializeDate,
                                skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : $t.skipNulls,
                                sort: "function" == typeof t.sort ? t.sort : null,
                                strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : $t.strictNullHandling
                            }
                        }(e);
                    "function" == typeof o.filter ? n = (0, o.filter)("", n) : Ft(o.filter) && (r = o.filter);
                    var i, s = [];
                    if ("object" != typeof n || null === n) return "";
                    i = e && e.arrayFormat in Ht ? e.arrayFormat : e && "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
                    var a = Ht[i];
                    r || (r = Object.keys(n)), o.sort && r.sort(o.sort);
                    for (var u = Ct(), p = 0; p < r.length; ++p) {
                        var c = r[p];
                        o.skipNulls && null === n[c] || zt(s, Gt(n[c], c, a, o.strictNullHandling, o.skipNulls, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, u))
                    }
                    var l = s.join(o.delimiter),
                        h = !0 === o.addQueryPrefix ? "?" : "";
                    return o.charsetSentinel && ("iso-8859-1" === o.charset ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), l.length > 0 ? h + l : ""
                },
                re = o((function(t) {
                    function e(t) {
                        if (t) return function(t) {
                            for (var r in e.prototype) t[r] = e.prototype[r];
                            return t
                        }(t)
                    }
                    t.exports = e, e.prototype.on = e.prototype.addEventListener = function(t, e) {
                        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
                    }, e.prototype.once = function(t, e) {
                        function r() {
                            this.off(t, r), e.apply(this, arguments)
                        }
                        return r.fn = e, this.on(t, r), this
                    }, e.prototype.off = e.prototype.removeListener = e.prototype.removeAllListeners = e.prototype.removeEventListener = function(t, e) {
                        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                        var r, n = this._callbacks["$" + t];
                        if (!n) return this;
                        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                        for (var o = 0; o < n.length; o++)
                            if ((r = n[o]) === e || r.fn === e) {
                                n.splice(o, 1);
                                break
                            }
                        return 0 === n.length && delete this._callbacks["$" + t], this
                    }, e.prototype.emit = function(t) {
                        this._callbacks = this._callbacks || {};
                        for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        if (r) {
                            n = 0;
                            for (var o = (r = r.slice(0)).length; n < o; ++n) r[n].apply(this, e)
                        }
                        return this
                    }, e.prototype.listeners = function(t) {
                        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
                    }, e.prototype.hasListeners = function(t) {
                        return !!this.listeners(t).length
                    }
                })),
                ne = se;
            se.default = se, se.stable = ue, se.stableStringify = ue;
            var oe = [],
                ie = [];

            function se(t, e, r) {
                var n;
                for (function t(e, r, n, o) {
                        var i;
                        if ("object" == typeof e && null !== e) {
                            for (i = 0; i < n.length; i++)
                                if (n[i] === e) {
                                    var s = Object.getOwnPropertyDescriptor(o, r);
                                    return void(void 0 !== s.get ? s.configurable ? (Object.defineProperty(o, r, {
                                        value: "[Circular]"
                                    }), oe.push([o, r, e, s])) : ie.push([e, r]) : (o[r] = "[Circular]", oe.push([o, r, e])))
                                }
                            if (n.push(e), Array.isArray(e))
                                for (i = 0; i < e.length; i++) t(e[i], i, n, e);
                            else {
                                var a = Object.keys(e);
                                for (i = 0; i < a.length; i++) {
                                    var u = a[i];
                                    t(e[u], u, n, e)
                                }
                            }
                            n.pop()
                        }
                    }(t, "", [], void 0), n = 0 === ie.length ? JSON.stringify(t, e, r) : JSON.stringify(t, pe(e), r); 0 !== oe.length;) {
                    var o = oe.pop();
                    4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
                }
                return n
            }

            function ae(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }

            function ue(t, e, r) {
                var n, o = function t(e, r, n, o) {
                    var i;
                    if ("object" == typeof e && null !== e) {
                        for (i = 0; i < n.length; i++)
                            if (n[i] === e) {
                                var s = Object.getOwnPropertyDescriptor(o, r);
                                return void(void 0 !== s.get ? s.configurable ? (Object.defineProperty(o, r, {
                                    value: "[Circular]"
                                }), oe.push([o, r, e, s])) : ie.push([e, r]) : (o[r] = "[Circular]", oe.push([o, r, e])))
                            }
                        if ("function" == typeof e.toJSON) return;
                        if (n.push(e), Array.isArray(e))
                            for (i = 0; i < e.length; i++) t(e[i], i, n, e);
                        else {
                            var a = {},
                                u = Object.keys(e).sort(ae);
                            for (i = 0; i < u.length; i++) {
                                var p = u[i];
                                t(e[p], p, n, e), a[p] = e[p]
                            }
                            if (void 0 === o) return a;
                            oe.push([o, r, e]), o[r] = a
                        }
                        n.pop()
                    }
                }(t, "", [], void 0) || t;
                for (n = 0 === ie.length ? JSON.stringify(o, e, r) : JSON.stringify(o, pe(e), r); 0 !== oe.length;) {
                    var i = oe.pop();
                    4 === i.length ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2]
                }
                return n
            }

            function pe(t) {
                return t = void 0 !== t ? t : function(t, e) {
                        return e
                    },
                    function(e, r) {
                        if (ie.length > 0)
                            for (var n = 0; n < ie.length; n++) {
                                var o = ie[n];
                                if (o[1] === e && o[0] === r) {
                                    r = "[Circular]", ie.splice(n, 1);
                                    break
                                }
                            }
                        return t.call(this, e, r)
                    }
            }

            function ce(t) {
                return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var le = function(t) {
                return null !== t && "object" === ce(t)
            };

            function he(t) {
                return (he = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var fe = de;

            function de(t) {
                if (t) return function(t) {
                    for (var e in de.prototype) Object.prototype.hasOwnProperty.call(de.prototype, e) && (t[e] = de.prototype[e]);
                    return t
                }(t)
            }
            de.prototype.clearTimeout = function() {
                return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this
            }, de.prototype.parse = function(t) {
                return this._parser = t, this
            }, de.prototype.responseType = function(t) {
                return this._responseType = t, this
            }, de.prototype.serialize = function(t) {
                return this._serializer = t, this
            }, de.prototype.timeout = function(t) {
                if (!t || "object" !== he(t)) return this._timeout = t, this._responseTimeout = 0, this._uploadTimeout = 0, this;
                for (var e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) switch (e) {
                        case "deadline":
                            this._timeout = t.deadline;
                            break;
                        case "response":
                            this._responseTimeout = t.response;
                            break;
                        case "upload":
                            this._uploadTimeout = t.upload;
                            break;
                        default:
                            console.warn("Unknown timeout option", e)
                    }
                return this
            }, de.prototype.retry = function(t, e) {
                return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = e, this
            };
            var ye = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
            de.prototype._shouldRetry = function(t, e) {
                if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
                if (this._retryCallback) try {
                    var r = this._retryCallback(t, e);
                    if (!0 === r) return !0;
                    if (!1 === r) return !1
                } catch (n) {
                    console.error(n)
                }
                if (e && e.status && e.status >= 500 && 501 !== e.status) return !0;
                if (t) {
                    if (t.code && ye.includes(t.code)) return !0;
                    if (t.timeout && "ECONNABORTED" === t.code) return !0;
                    if (t.crossDomain) return !0
                }
                return !1
            }, de.prototype._retry = function() {
                return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this.timedoutError = null, this._end()
            }, de.prototype.then = function(t, e) {
                var r = this;
                if (!this._fullfilledPromise) {
                    var n = this;
                    this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise((function(t, e) {
                        n.on("abort", (function() {
                            if (!(r._maxRetries && r._maxRetries > r._retries))
                                if (r.timedout && r.timedoutError) e(r.timedoutError);
                                else {
                                    var t = new Error("Aborted");
                                    t.code = "ABORTED", t.status = r.status, t.method = r.method, t.url = r.url, e(t)
                                }
                        })), n.end((function(r, n) {
                            r ? e(r) : t(n)
                        }))
                    }))
                }
                return this._fullfilledPromise.then(t, e)
            }, de.prototype.catch = function(t) {
                return this.then(void 0, t)
            }, de.prototype.use = function(t) {
                return t(this), this
            }, de.prototype.ok = function(t) {
                if ("function" != typeof t) throw new Error("Callback required");
                return this._okCallback = t, this
            }, de.prototype._isResponseOK = function(t) {
                return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
            }, de.prototype.get = function(t) {
                return this._header[t.toLowerCase()]
            }, de.prototype.getHeader = de.prototype.get, de.prototype.set = function(t, e) {
                if (le(t)) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.set(r, t[r]);
                    return this
                }
                return this._header[t.toLowerCase()] = e, this.header[t] = e, this
            }, de.prototype.unset = function(t) {
                return delete this._header[t.toLowerCase()], delete this.header[t], this
            }, de.prototype.field = function(t, e) {
                if (null == t) throw new Error(".field(name, val) name can not be empty");
                if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
                if (le(t)) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.field(r, t[r]);
                    return this
                }
                if (Array.isArray(e)) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && this.field(t, e[n]);
                    return this
                }
                if (null == e) throw new Error(".field(name, val) val can not be empty");
                return "boolean" == typeof e && (e = String(e)), this._getFormData().append(t, e), this
            }, de.prototype.abort = function() {
                return this._aborted || (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort")), this
            }, de.prototype._auth = function(t, e, r, n) {
                switch (r.type) {
                    case "basic":
                        this.set("Authorization", "Basic ".concat(n("".concat(t, ":").concat(e))));
                        break;
                    case "auto":
                        this.username = t, this.password = e;
                        break;
                    case "bearer":
                        this.set("Authorization", "Bearer ".concat(t))
                }
                return this
            }, de.prototype.withCredentials = function(t) {
                return void 0 === t && (t = !0), this._withCredentials = t, this
            }, de.prototype.redirects = function(t) {
                return this._maxRedirects = t, this
            }, de.prototype.maxResponseSize = function(t) {
                if ("number" != typeof t) throw new TypeError("Invalid argument");
                return this._maxResponseSize = t, this
            }, de.prototype.toJSON = function() {
                return {
                    method: this.method,
                    url: this.url,
                    data: this._data,
                    headers: this._header
                }
            }, de.prototype.send = function(t) {
                var e = le(t),
                    r = this._header["content-type"];
                if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
                if (e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
                else if (t && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
                if (e && le(this._data))
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (this._data[n] = t[n]);
                else "string" == typeof t ? (r || this.type("form"), r = this._header["content-type"], this._data = "application/x-www-form-urlencoded" === r ? this._data ? "".concat(this._data, "&").concat(t) : t : (this._data || "") + t) : this._data = t;
                return !e || this._isHost(t) || r || this.type("json"), this
            }, de.prototype.sortQuery = function(t) {
                return this._sort = void 0 === t || t, this
            }, de.prototype._finalizeQueryString = function() {
                var t = this._query.join("&");
                if (t && (this.url += (this.url.includes("?") ? "&" : "?") + t), this._query.length = 0, this._sort) {
                    var e = this.url.indexOf("?");
                    if (e >= 0) {
                        var r = this.url.slice(e + 1).split("&");
                        "function" == typeof this._sort ? r.sort(this._sort) : r.sort(), this.url = this.url.slice(0, e) + "?" + r.join("&")
                    }
                }
            }, de.prototype._appendQueryString = function() {
                console.warn("Unsupported")
            }, de.prototype._timeoutError = function(t, e, r) {
                if (!this._aborted) {
                    var n = new Error("".concat(t + e, "ms exceeded"));
                    n.timeout = e, n.code = "ECONNABORTED", n.errno = r, this.timedout = !0, this.timedoutError = n, this.abort(), this.callback(n)
                }
            }, de.prototype._setTimeouts = function() {
                var t = this;
                this._timeout && !this._timer && (this._timer = setTimeout((function() {
                    t._timeoutError("Timeout of ", t._timeout, "ETIME")
                }), this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout((function() {
                    t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
                }), this._responseTimeout))
            };
            var me = ge;

            function ge(t) {
                if (t) return function(t) {
                    for (var e in ge.prototype) Object.prototype.hasOwnProperty.call(ge.prototype, e) && (t[e] = ge.prototype[e]);
                    return t
                }(t)
            }

            function ve(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function be() {
                this._defaults = []
            }
            ge.prototype.get = function(t) {
                return this.header[t.toLowerCase()]
            }, ge.prototype._setHeaderProperties = function(t) {
                var e = t["content-type"] || "";
                this.type = e.split(/ *; */).shift();
                var r = function(t) {
                    return t.split(/ *; */).reduce((function(t, e) {
                        var r = e.split(/ *= */),
                            n = r.shift(),
                            o = r.shift();
                        return n && o && (t[n] = o), t
                    }), {})
                }(e);
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (this[n] = r[n]);
                this.links = {};
                try {
                    t.link && (this.links = function(t) {
                        return t.split(/ *, */).reduce((function(t, e) {
                            var r = e.split(/ *; */),
                                n = r[0].slice(1, -1);
                            return t[r[1].split(/ *= */)[1].slice(1, -1)] = n, t
                        }), {})
                    }(t.link))
                } catch (o) {}
            }, ge.prototype._setStatusProperties = function(t) {
                var e = t / 100 | 0;
                this.statusCode = t, this.status = this.statusCode, this.statusType = e, this.info = 1 === e, this.ok = 2 === e, this.redirect = 3 === e, this.clientError = 4 === e, this.serverError = 5 === e, this.error = (4 === e || 5 === e) && this.toError(), this.created = 201 === t, this.accepted = 202 === t, this.noContent = 204 === t, this.badRequest = 400 === t, this.unauthorized = 401 === t, this.notAcceptable = 406 === t, this.forbidden = 403 === t, this.notFound = 404 === t, this.unprocessableEntity = 422 === t
            }, ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach((function(t) {
                be.prototype[t] = function() {
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return this._defaults.push({
                        fn: t,
                        args: r
                    }), this
                }
            })), be.prototype._setDefaults = function(t) {
                this._defaults.forEach((function(e) {
                    t[e.fn].apply(t, function(t) {
                        return function(t) {
                            if (Array.isArray(t)) return ve(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                        }(t) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return ve(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ve(t, e) : void 0
                            }
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }(e.args))
                }))
            };
            for (var we = be, _e = o((function(t, e) {
                    function r(t) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }
                    var n;

                    function o() {}
                    "undefined" != typeof window ? n = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), n = void 0) : n = self, t.exports = function(t, r) {
                        return "function" == typeof r ? new e.Request("GET", t).end(r) : 1 === arguments.length ? new e.Request("GET", t) : new e.Request(t, r)
                    };
                    var i = e = t.exports;
                    e.Request = h, i.getXHR = function() {
                        if (n.XMLHttpRequest && (!n.location || "file:" !== n.location.protocol || !n.ActiveXObject)) return new XMLHttpRequest;
                        try {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        } catch (t) {}
                        try {
                            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                        } catch (e) {}
                        try {
                            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                        } catch (r) {}
                        try {
                            return new ActiveXObject("Msxml2.XMLHTTP")
                        } catch (o) {}
                        throw new Error("Browser-only version of superagent could not find XHR")
                    };
                    var s = "".trim ? function(t) {
                        return t.trim()
                    } : function(t) {
                        return t.replace(/(^\s*|\s*$)/g, "")
                    };

                    function a(t) {
                        if (!le(t)) return t;
                        var e = [];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && u(e, r, t[r]);
                        return e.join("&")
                    }

                    function u(t, e, r) {
                        if (void 0 !== r)
                            if (null !== r)
                                if (Array.isArray(r)) r.forEach((function(r) {
                                    u(t, e, r)
                                }));
                                else if (le(r))
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && u(t, "".concat(e, "[").concat(n, "]"), r[n]);
                        else t.push(encodeURI(e) + "=" + encodeURIComponent(r));
                        else t.push(encodeURI(e))
                    }

                    function p(t) {
                        for (var e, r, n = {}, o = t.split("&"), i = 0, s = o.length; i < s; ++i) - 1 === (r = (e = o[i]).indexOf("=")) ? n[decodeURIComponent(e)] = "" : n[decodeURIComponent(e.slice(0, r))] = decodeURIComponent(e.slice(r + 1));
                        return n
                    }

                    function c(t) {
                        return /[/+]json($|[^-\w])/.test(t)
                    }

                    function l(t) {
                        this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
                        var e = this.xhr.status;
                        1223 === e && (e = 204), this._setStatusProperties(e), this.headers = function(t) {
                            for (var e, r, n, o, i = t.split(/\r?\n/), a = {}, u = 0, p = i.length; u < p; ++u) - 1 !== (e = (r = i[u]).indexOf(":")) && (n = r.slice(0, e).toLowerCase(), o = s(r.slice(e + 1)), a[n] = o);
                            return a
                        }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
                    }

                    function h(t, e) {
                        var r = this;
                        this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", (function() {
                            var t, e = null,
                                n = null;
                            try {
                                n = new l(r)
                            } catch (o) {
                                return (e = new Error("Parser is unable to parse the response")).parse = !0, e.original = o, r.xhr ? (e.rawResponse = void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response, e.status = r.xhr.status ? r.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, e.status = null), r.callback(e)
                            }
                            r.emit("response", n);
                            try {
                                r._isResponseOK(n) || (t = new Error(n.statusText || n.text || "Unsuccessful HTTP response"))
                            } catch (o) {
                                t = o
                            }
                            t ? (t.original = e, t.response = n, t.status = n.status, r.callback(t, n)) : r.callback(null, n)
                        }))
                    }

                    function f(t, e, r) {
                        var n = i("DELETE", t);
                        return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
                    }
                    i.serializeObject = a, i.parseString = p, i.types = {
                        html: "text/html",
                        json: "application/json",
                        xml: "text/xml",
                        urlencoded: "application/x-www-form-urlencoded",
                        form: "application/x-www-form-urlencoded",
                        "form-data": "application/x-www-form-urlencoded"
                    }, i.serialize = {
                        "application/x-www-form-urlencoded": a,
                        "application/json": ne
                    }, i.parse = {
                        "application/x-www-form-urlencoded": p,
                        "application/json": JSON.parse
                    }, me(l.prototype), l.prototype._parseBody = function(t) {
                        var e = i.parse[this.type];
                        return this.req._parser ? this.req._parser(this, t) : (!e && c(this.type) && (e = i.parse["application/json"]), e && t && (t.length > 0 || t instanceof Object) ? e(t) : null)
                    }, l.prototype.toError = function() {
                        var t = this.req,
                            e = t.method,
                            r = t.url,
                            n = "cannot ".concat(e, " ").concat(r, " (").concat(this.status, ")"),
                            o = new Error(n);
                        return o.status = this.status, o.method = e, o.url = r, o
                    }, i.Response = l, re(h.prototype), fe(h.prototype), h.prototype.type = function(t) {
                        return this.set("Content-Type", i.types[t] || t), this
                    }, h.prototype.accept = function(t) {
                        return this.set("Accept", i.types[t] || t), this
                    }, h.prototype.auth = function(t, e, n) {
                        1 === arguments.length && (e = ""), "object" === r(e) && null !== e && (n = e, e = ""), n || (n = {
                            type: "function" == typeof btoa ? "basic" : "auto"
                        });
                        return this._auth(t, e, n, (function(t) {
                            if ("function" == typeof btoa) return btoa(t);
                            throw new Error("Cannot use basic auth, btoa is not a function")
                        }))
                    }, h.prototype.query = function(t) {
                        return "string" != typeof t && (t = a(t)), t && this._query.push(t), this
                    }, h.prototype.attach = function(t, e, r) {
                        if (e) {
                            if (this._data) throw new Error("superagent can't mix .send() and .attach()");
                            this._getFormData().append(t, e, r || e.name)
                        }
                        return this
                    }, h.prototype._getFormData = function() {
                        return this._formData || (this._formData = new n.FormData), this._formData
                    }, h.prototype.callback = function(t, e) {
                        if (this._shouldRetry(t, e)) return this._retry();
                        var r = this._callback;
                        this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), r(t, e)
                    }, h.prototype.crossDomainError = function() {
                        var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
                        t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
                    }, h.prototype.agent = function() {
                        return console.warn("This is not supported in browser version of superagent"), this
                    }, h.prototype.ca = h.prototype.agent, h.prototype.buffer = h.prototype.ca, h.prototype.write = function() {
                        throw new Error("Streaming is not supported in browser version of superagent")
                    }, h.prototype.pipe = h.prototype.write, h.prototype._isHost = function(t) {
                        return t && "object" === r(t) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
                    }, h.prototype.end = function(t) {
                        this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || o, this._finalizeQueryString(), this._end()
                    }, h.prototype._setUploadTimeout = function() {
                        var t = this;
                        this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout((function() {
                            t._timeoutError("Upload timeout of ", t._uploadTimeout, "ETIMEDOUT")
                        }), this._uploadTimeout))
                    }, h.prototype._end = function() {
                        if (this._aborted) return this.callback(new Error("The request has been aborted even before .end() was called"));
                        var t = this;
                        this.xhr = i.getXHR();
                        var e = this.xhr,
                            r = this._formData || this._data;
                        this._setTimeouts(), e.onreadystatechange = function() {
                            var r = e.readyState;
                            if (r >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 === r) {
                                var n;
                                try {
                                    n = e.status
                                } catch (o) {
                                    n = 0
                                }
                                if (!n) {
                                    if (t.timedout || t._aborted) return;
                                    return t.crossDomainError()
                                }
                                t.emit("end")
                            }
                        };
                        var n = function(e, r) {
                            r.total > 0 && (r.percent = r.loaded / r.total * 100, 100 === r.percent && clearTimeout(t._uploadTimeoutTimer)), r.direction = e, t.emit("progress", r)
                        };
                        if (this.hasListeners("progress")) try {
                            e.addEventListener("progress", n.bind(null, "download")), e.upload && e.upload.addEventListener("progress", n.bind(null, "upload"))
                        } catch (u) {}
                        e.upload && this._setUploadTimeout();
                        try {
                            this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
                        } catch (p) {
                            return this.callback(p)
                        }
                        if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof r && !this._isHost(r)) {
                            var o = this._header["content-type"],
                                s = this._serializer || i.serialize[o ? o.split(";")[0] : ""];
                            !s && c(o) && (s = i.serialize["application/json"]), s && (r = s(r))
                        }
                        for (var a in this.header) null !== this.header[a] && Object.prototype.hasOwnProperty.call(this.header, a) && e.setRequestHeader(a, this.header[a]);
                        this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 === r ? null : r)
                    }, i.agent = function() {
                        return new we
                    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach((function(t) {
                        we.prototype[t.toLowerCase()] = function(e, r) {
                            var n = new i.Request(t, e);
                            return this._setDefaults(n), r && n.end(r), n
                        }
                    })), we.prototype.del = we.prototype.delete, i.get = function(t, e, r) {
                        var n = i("GET", t);
                        return "function" == typeof e && (r = e, e = null), e && n.query(e), r && n.end(r), n
                    }, i.head = function(t, e, r) {
                        var n = i("HEAD", t);
                        return "function" == typeof e && (r = e, e = null), e && n.query(e), r && n.end(r), n
                    }, i.options = function(t, e, r) {
                        var n = i("OPTIONS", t);
                        return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
                    }, i.del = f, i.delete = f, i.patch = function(t, e, r) {
                        var n = i("PATCH", t);
                        return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
                    }, i.post = function(t, e, r) {
                        var n = i("POST", t);
                        return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
                    }, i.put = function(t, e, r) {
                        var n = i("PUT", t);
                        return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
                    }
                })), Oe = (_e.Request, []), Te = [], ke = ("undefined" != typeof Uint8Array && Uint8Array, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), Se = 0; Se < 64; ++Se) Oe[Se] = ke[Se], Te[ke.charCodeAt(Se)] = Se;

            function Ae(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("=");
                return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
            }

            function je(t, e, r) {
                for (var n, o, i = [], s = e; s < r; s += 3) n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), i.push(Oe[(o = n) >> 18 & 63] + Oe[o >> 12 & 63] + Oe[o >> 6 & 63] + Oe[63 & o]);
                return i.join("")
            }
            Te["-".charCodeAt(0)] = 62, Te["_".charCodeAt(0)] = 63;
            var xe = function(t) {
                    for (var e, r = t.length, n = r % 3, o = [], i = 0, s = r - n; i < s; i += 16383) o.push(je(t, i, i + 16383 > s ? s : i + 16383));
                    return 1 === n ? (e = t[r - 1], o.push(Oe[e >> 2] + Oe[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], o.push(Oe[e >> 10] + Oe[e >> 4 & 63] + Oe[e << 2 & 63] + "=")), o.join("")
                },
                Ee = function(t) {
                    return xe(function(t) {
                        for (var e = new Array(t.length), r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                        return e
                    }(t)).replace(/\+/g, "-").replace(/\//g, "_")
                },
                Ce = {
                    raw: "9.19.0"
                },
                De = Object.prototype.toString;

            function Ie(t, e, r, n) {
                if (r = "array" === r ? "object" : r, t && typeof t[e] !== r) throw new Error(n)
            }

            function Pe(t, e, r) {
                if (typeof t !== e) throw new Error(r)
            }

            function Re(t, e, r) {
                if (-1 === e.indexOf(t)) throw new Error(r)
            }
            var qe = {
                check: function(t, e, r) {
                    if (e.optional && !t || Pe(t, e.type, e.message), "object" === e.type && r)
                        for (var n = Object.keys(r), o = 0; o < n.length; o++) {
                            var i = n[o];
                            r[i].optional && !t[i] || r[i].condition && !r[i].condition(t) || (Ie(t, i, r[i].type, r[i].message), r[i].values && Re(t[i], r[i].values, r[i].value_message))
                        }
                },
                attribute: Ie,
                variable: Pe,
                value: Re,
                isArray: function(t) {
                    return this.supportsIsArray() ? Array.isArray(t) : "[object Array]" === De.call(t)
                },
                supportsIsArray: function() {
                    return null != Array.isArray
                }
            };

            function Ue(t) {
                if (null == t) throw new TypeError("Cannot convert first argument to object");
                for (var e = Object(t), r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    if (null != n)
                        for (var o = Object.keys(Object(n)), i = 0, s = o.length; i < s; i++) {
                            var a = o[i],
                                u = Object.getOwnPropertyDescriptor(n, a);
                            void 0 !== u && u.enumerable && (e[a] = n[a])
                        }
                }
                return e
            }
            var Me = {
                get: function() {
                    return Object.assign ? Object.assign : Ue
                },
                objectAssignPolyfill: Ue
            };

            function Le(t, e) {
                return e.reduce((function(e, r) {
                    return t[r] && (e[r] = t[r]), e
                }), {})
            }

            function Be() {
                var t = function(t) {
                    var e = [];
                    for (var r in t) e.push(t[r]);
                    return e
                }(arguments);
                return t.unshift({}), Me.get().apply(void 0, t)
            }

            function Ne(t) {
                var e = t.match(/^(https?:|file:|chrome-extension:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
                return e && {
                    href: t,
                    protocol: e[1],
                    host: e[2],
                    hostname: e[3],
                    port: e[4],
                    pathname: e[5],
                    search: e[6],
                    hash: e[7]
                }
            }

            function He(t, e) {
                var r = Be(t);
                return t[e] && (r[e] = t[e].trim()), r
            }
            var Fe = {
                toSnakeCase: function t(e, r) {
                    return "object" != typeof e || qe.isArray(e) || null === e ? e : (r = r || [], Object.keys(e).reduce((function(n, o) {
                        return n[-1 === r.indexOf(o) ? function(t) {
                            for (var e, r = "", n = 0, o = !0, i = !0; n < t.length;) e = t.charCodeAt(n), !i && e >= 65 && e <= 90 || !o && e >= 48 && e <= 57 ? (r += "_", r += t[n].toLowerCase()) : r += t[n].toLowerCase(), o = e >= 48 && e <= 57, i = e >= 65 && e <= 90, n++;
                            return r
                        }(o) : o] = t(e[o]), n
                    }), {}))
                },
                toCamelCase: function t(e, r, n) {
                    return "object" != typeof e || qe.isArray(e) || null === e ? e : (r = r || [], n = n || {}, Object.keys(e).reduce((function(o, i) {
                        var s, a = -1 === r.indexOf(i) ? (s = i.split("_")).reduce((function(t, e) {
                            return t + e.charAt(0).toUpperCase() + e.slice(1)
                        }), s.shift()) : i;
                        return o[a] = t(e[a] || e[i], [], n), n.keepOriginal && (o[i] = t(e[i], [], n)), o
                    }), {}))
                },
                blacklist: function(t, e) {
                    return Object.keys(t).reduce((function(r, n) {
                        return -1 === e.indexOf(n) && (r[n] = t[n]), r
                    }), {})
                },
                merge: function(t, e) {
                    return {
                        base: e ? Le(t, e) : t,
                        with: function(t, e) {
                            return t = e ? Le(t, e) : t, Be(this.base, t)
                        }
                    }
                },
                pick: Le,
                getKeysNotIn: function(t, e) {
                    var r = [];
                    for (var n in t) - 1 === e.indexOf(n) && r.push(n);
                    return r
                },
                extend: Be,
                getOriginFromUrl: function(t) {
                    if (t) {
                        var e = Ne(t);
                        if (!e) return null;
                        var r = e.protocol + "//" + e.hostname;
                        return e.port && (r += ":" + e.port), r
                    }
                },
                getLocationFromUrl: Ne,
                trimUserDetails: function(t) {
                    return function(t, e) {
                        return ["username", "email", "phoneNumber"].reduce(He, t)
                    }(t)
                },
                updatePropertyOn: function t(e, r, n) {
                    "string" == typeof r && (r = r.split("."));
                    var o = r[0];
                    e.hasOwnProperty(o) && (1 === r.length ? e[o] = n : t(e[o], r.slice(1), n))
                }
            };

            function We(t) {
                this.request = t, this.method = t.method, this.url = t.url, this.body = t._data, this.headers = t._header
            }

            function ze(t) {
                this.request = t
            }

            function Ve(t) {
                this._sendTelemetry = !1 !== t._sendTelemetry || t._sendTelemetry, this._telemetryInfo = t._telemetryInfo || null, this._timesToRetryFailedRequests = t._timesToRetryFailedRequests, this.headers = t.headers || {}, this._universalLoginPage = t.universalLoginPage
            }

            function Je() {
                return window
            }
            We.prototype.abort = function() {
                this.request.abort()
            }, We.prototype.getMethod = function() {
                return this.method
            }, We.prototype.getBody = function() {
                return this.body
            }, We.prototype.getUrl = function() {
                return this.url
            }, We.prototype.getHeaders = function() {
                return this.headers
            }, ze.prototype.set = function(t, e) {
                return this.request = this.request.set(t, e), this
            }, ze.prototype.send = function(t) {
                return this.request = this.request.send(Fe.trimUserDetails(t)), this
            }, ze.prototype.withCredentials = function() {
                return this.request = this.request.withCredentials(), this
            }, ze.prototype.end = function(t) {
                return this.request.end(t), new We(this.request)
            }, Ve.prototype.setCommonConfiguration = function(t, e) {
                if (e = e || {}, this._timesToRetryFailedRequests > 0 && (t = t.retry(this._timesToRetryFailedRequests)), e.noHeaders) return t;
                var r = this.headers;
                t = t.set("Content-Type", "application/json"), e.xRequestLanguage && (t = t.set("X-Request-Language", e.xRequestLanguage));
                for (var n = Object.keys(this.headers), o = 0; o < n.length; o++) t = t.set(n[o], r[n[o]]);
                return this._sendTelemetry && (t = t.set("Auth0-Client", this.getTelemetryData())), t
            }, Ve.prototype.getTelemetryData = function() {
                var t = this._universalLoginPage ? "auth0.js-ulp" : "auth0.js",
                    e = {
                        name: t,
                        version: Ce.raw
                    };
                this._telemetryInfo && ((e = Fe.extend({}, this._telemetryInfo)).env = Fe.extend({}, this._telemetryInfo.env), e.env[t] = Ce.raw);
                var r = JSON.stringify(e);
                return Ee(r)
            }, Ve.prototype.get = function(t, e) {
                return new ze(this.setCommonConfiguration(_e.get(t), e))
            }, Ve.prototype.post = function(t, e) {
                return new ze(this.setCommonConfiguration(_e.post(t), e))
            }, Ve.prototype.patch = function(t, e) {
                return new ze(this.setCommonConfiguration(_e.patch(t), e))
            };
            var $e = {
                redirect: function(t) {
                    Je().location = t
                },
                getDocument: function() {
                    return Je().document
                },
                getWindow: Je,
                getOrigin: function() {
                    var t = Je().location,
                        e = t.origin;
                    return e || (e = Fe.getOriginFromUrl(t.href)), e
                }
            };

            function Ge() {}
            Ge.prototype.getItem = function() {
                return null
            }, Ge.prototype.removeItem = function() {}, Ge.prototype.setItem = function() {};
            var Xe = o((function(t, e) {
                var r;
                r = function() {
                    function t() {
                        for (var t = 0, e = {}; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) e[n] = r[n]
                        }
                        return e
                    }

                    function e(t) {
                        return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                    }
                    return function r(n) {
                        function o() {}

                        function i(e, r, i) {
                            if ("undefined" != typeof document) {
                                "number" == typeof(i = t({
                                    path: "/"
                                }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                                try {
                                    var s = JSON.stringify(r);
                                    /^[\{\[]/.test(s) && (r = s)
                                } catch (cr) {}
                                r = n.write ? n.write(r, e) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                var a = "";
                                for (var u in i) i[u] && (a += "; " + u, !0 !== i[u] && (a += "=" + i[u].split(";")[0]));
                                return document.cookie = e + "=" + r + a
                            }
                        }

                        function s(t, r) {
                            if ("undefined" != typeof document) {
                                for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], s = 0; s < i.length; s++) {
                                    var a = i[s].split("="),
                                        u = a.slice(1).join("=");
                                    r || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                                    try {
                                        var p = e(a[0]);
                                        if (u = (n.read || n)(u, p) || e(u), r) try {
                                            u = JSON.parse(u)
                                        } catch (cr) {}
                                        if (o[p] = u, t === p) break
                                    } catch (cr) {}
                                }
                                return t ? o[t] : o
                            }
                        }
                        return o.set = i, o.get = function(t) {
                            return s(t, !1)
                        }, o.getJSON = function(t) {
                            return s(t, !0)
                        }, o.remove = function(e, r) {
                            i(e, "", t(r, {
                                expires: -1
                            }))
                        }, o.defaults = {}, o.withConverter = r, o
                    }((function() {}))
                }, t.exports = r()
            }));

            function Qe(t) {
                return "_" + t + "_compat"
            }

            function Ze(t) {
                this._options = t || {}
            }

            function Ke(t) {
                this.disableWarnings = t.disableWarnings
            }

            function Ye(t) {
                if (this.warn = new Ke({}), this.storage = new Ze(t), !0 === t.__tryLocalStorageFirst) try {
                    var e = $e.getWindow().localStorage;
                    e && (this.storage = e)
                } catch (cr) {
                    this.warn.warning(cr), this.warn.warning("Can't use localStorage. Using CookieStorage instead.")
                }
            }

            function tr(t) {
                this.handler = new Ye(t)
            }

            function er(t) {
                this.storage = new tr(t)
            }

            function rr(t, e) {
                return {
                    error: t,
                    errorDescription: e
                }
            }
            Ze.prototype.getItem = function(t) {
                return Xe.get(t) || Xe.get(Qe(t))
            }, Ze.prototype.removeItem = function(t) {
                Xe.remove(t), Xe.remove(Qe(t))
            }, Ze.prototype.setItem = function(t, e, r) {
                var n = Fe.extend({
                    expires: 1
                }, r);
                if ("https:" === $e.getWindow().location.protocol && (n.secure = !0, n.sameSite = "none", this._options.legacySameSiteCookie)) {
                    var o = Fe.blacklist(n, ["sameSite"]);
                    Xe.set(Qe(t), e, o)
                }
                Xe.set(t, e, n)
            }, Ke.prototype.warning = function(t) {
                this.disableWarnings || console.warn(t)
            }, Ye.prototype.failover = function() {
                this.storage instanceof Ge ? this.warn.warning("DummyStorage: ignore failover") : this.storage instanceof Ze ? (this.warn.warning("CookieStorage: failing over DummyStorage"), this.storage = new Ge) : (this.warn.warning("LocalStorage: failing over CookieStorage"), this.storage = new Ze)
            }, Ye.prototype.getItem = function(t) {
                try {
                    return this.storage.getItem(t)
                } catch (cr) {
                    return this.warn.warning(cr), this.failover(), this.getItem(t)
                }
            }, Ye.prototype.removeItem = function(t) {
                try {
                    return this.storage.removeItem(t)
                } catch (cr) {
                    return this.warn.warning(cr), this.failover(), this.removeItem(t)
                }
            }, Ye.prototype.setItem = function(t, e, r) {
                try {
                    return this.storage.setItem(t, e, r)
                } catch (cr) {
                    return this.warn.warning(cr), this.failover(), this.setItem(t, e, r)
                }
            }, tr.prototype.getItem = function(t) {
                var e = this.handler.getItem(t);
                try {
                    return JSON.parse(e)
                } catch (Cr) {
                    return e
                }
            }, tr.prototype.removeItem = function(t) {
                return this.handler.removeItem(t)
            }, tr.prototype.setItem = function(t, e, r) {
                var n = JSON.stringify(e);
                return this.handler.setItem(t, n, r)
            }, er.prototype.set = function(t, e) {
                var r = {
                    lastUsedConnection: t,
                    lastUsedSub: e
                };
                this.storage.setItem("auth0.ssodata", JSON.stringify(r))
            }, er.prototype.get = function() {
                var t = this.storage.getItem("auth0.ssodata");
                if (t) return JSON.parse(t)
            };
            var nr = {
                buildResponse: rr,
                invalidToken: function(t) {
                    return rr("invalid_token", t)
                }
            };

            function or(t, e) {
                return (e = e || {}).ignoreCasing = !!e.ignoreCasing && e.ignoreCasing,
                    function(r, n) {
                        var o;
                        return r || n ? (!r && n.err && (r = n.err, n = null), !r && n.error && (r = n, n = null), r ? (o = {
                            original: r
                        }, Fe.updatePropertyOn(o, "original.response.req._data.password", "*****"), r.response && r.response.statusCode && (o.statusCode = r.response.statusCode), r.response && r.response.statusText && (o.statusText = r.response.statusText), r.response && r.response.body && (r = r.response.body), r.err && (r = r.err), o.code = r.code || r.error || r.error_code || r.status || null, o.description = r.errorDescription || r.error_description || r.description || r.error || r.details || r.err || null, e.forceLegacyError && (o.error = o.code, o.error_description = o.description), r.error_codes && r.error_details && (o.errorDetails = {
                            codes: r.error_codes,
                            details: r.error_details
                        }), r.name && (o.name = r.name), r.policy && (o.policy = r.policy), t(o)) : !n.type || "text/html" !== n.type && "text/plain" !== n.type ? e.ignoreCasing ? t(null, n.body || n) : t(null, Fe.toCamelCase(n.body || n, [], {
                            keepOriginal: e.keepOriginalCasing
                        })) : t(null, n.text)) : t(nr.buildResponse("generic_error", "Something went wrong"))
                    }
            }
            var ir = ["realm", "audience", "otp", "client_id", "client_secret", "redirect_uri", "scope", "code", "grant_type", "username", "password", "refresh_token", "assertion", "client_assertion", "client_assertion_type", "code_verifier"],
                sr = ["connection", "connection_scope", "auth0Client", "owp", "device", "realm", "organization", "invitation", "protocol", "_csrf", "_intstate", "login_ticket", "client_id", "response_type", "response_mode", "redirect_uri", "audience", "scope", "state", "nonce", "display", "prompt", "screen_hint", "max_age", "ui_locales", "claims_locales", "id_token_hint", "login_hint", "acr_values", "claims", "registration", "request", "request_uri", "code_challenge", "code_challenge_method", "access_type", "display"],
                ar = function(t, e) {
                    return Fe.pick(e, ir)
                },
                ur = function(t, e) {
                    var r = Fe.getKeysNotIn(e, sr);
                    return r.length > 0 && t.warning("Following parameters are not allowed on the `/authorize` endpoint: [" + r.join(",") + "]"), e
                },
                pr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {};

            function cr(t) {
                var e = {
                    exports: {}
                };
                return t(e, e.exports), e.exports
            }
            var lr = cr((function(t, e) {
                    t.exports = function() {
                        function t(t) {
                            return "function" == typeof t
                        }
                        var e = Array.isArray ? Array.isArray : function(t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            },
                            r = 0,
                            n = void 0,
                            o = void 0,
                            i = function(t, e) {
                                h[r] = t, h[r + 1] = e, 2 === (r += 2) && (o ? o(f) : v())
                            },
                            s = "undefined" != typeof window ? window : void 0,
                            a = s || {},
                            u = a.MutationObserver || a.WebKitMutationObserver,
                            p = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                            c = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                        function l() {
                            var t = setTimeout;
                            return function() {
                                return t(f, 1)
                            }
                        }
                        var h = new Array(1e3);

                        function f() {
                            for (var t = 0; t < r; t += 2)(0, h[t])(h[t + 1]), h[t] = void 0, h[t + 1] = void 0;
                            r = 0
                        }
                        var d, y, m, g, v = void 0;

                        function b(t, e) {
                            var r = this,
                                n = new this.constructor(O);
                            void 0 === n[_] && P(n);
                            var o = r._state;
                            if (o) {
                                var s = arguments[o - 1];
                                i((function() {
                                    return D(o, n, s, r._result)
                                }))
                            } else E(r, n, t, e);
                            return n
                        }

                        function w(t) {
                            if (t && "object" == typeof t && t.constructor === this) return t;
                            var e = new this(O);
                            return S(e, t), e
                        }
                        v = p ? function() {
                            return process.nextTick(f)
                        } : u ? (y = 0, m = new u(f), g = document.createTextNode(""), m.observe(g, {
                            characterData: !0
                        }), function() {
                            g.data = y = ++y % 2
                        }) : c ? ((d = new MessageChannel).port1.onmessage = f, function() {
                            return d.port2.postMessage(0)
                        }) : void 0 === s ? function() {
                            try {
                                var t = Function("return this")().require("vertx");
                                return void 0 !== (n = t.runOnLoop || t.runOnContext) ? function() {
                                    n(f)
                                } : l()
                            } catch (t) {
                                return l()
                            }
                        }() : l();
                        var _ = Math.random().toString(36).substring(2);

                        function O() {}
                        var T = void 0;

                        function k(e, r, n) {
                            r.constructor === e.constructor && n === b && r.constructor.resolve === w ? function(t, e) {
                                1 === e._state ? j(t, e._result) : 2 === e._state ? x(t, e._result) : E(e, void 0, (function(e) {
                                    return S(t, e)
                                }), (function(e) {
                                    return x(t, e)
                                }))
                            }(e, r) : void 0 === n ? j(e, r) : t(n) ? function(t, e, r) {
                                i((function(t) {
                                    var n = !1,
                                        o = function(r, o, i, s) {
                                            try {
                                                r.call(o, (function(r) {
                                                    n || (n = !0, e !== r ? S(t, r) : j(t, r))
                                                }), (function(e) {
                                                    n || (n = !0, x(t, e))
                                                }))
                                            } catch (t) {
                                                return t
                                            }
                                        }(r, e);
                                    !n && o && (n = !0, x(t, o))
                                }), t)
                            }(e, r, n) : j(e, r)
                        }

                        function S(t, e) {
                            if (t === e) x(t, new TypeError("You cannot resolve a promise with itself"));
                            else if (o = typeof(n = e), null === n || "object" !== o && "function" !== o) j(t, e);
                            else {
                                var r = void 0;
                                try {
                                    r = e.then
                                } catch (e) {
                                    return void x(t, e)
                                }
                                k(t, e, r)
                            }
                            var n, o
                        }

                        function A(t) {
                            t._onerror && t._onerror(t._result), C(t)
                        }

                        function j(t, e) {
                            t._state === T && (t._result = e, t._state = 1, 0 !== t._subscribers.length && i(C, t))
                        }

                        function x(t, e) {
                            t._state === T && (t._state = 2, t._result = e, i(A, t))
                        }

                        function E(t, e, r, n) {
                            var o = t._subscribers,
                                s = o.length;
                            t._onerror = null, o[s] = e, o[s + 1] = r, o[s + 2] = n, 0 === s && t._state && i(C, t)
                        }

                        function C(t) {
                            var e = t._subscribers,
                                r = t._state;
                            if (0 !== e.length) {
                                for (var n = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) o = e[s + r], (n = e[s]) ? D(r, n, o, i) : o(i);
                                t._subscribers.length = 0
                            }
                        }

                        function D(e, r, n, o) {
                            var i = t(n),
                                s = void 0,
                                a = void 0,
                                u = !0;
                            if (i) {
                                try {
                                    s = n(o)
                                } catch (e) {
                                    u = !1, a = e
                                }
                                if (r === s) return void x(r, new TypeError("A promises callback cannot return that same promise."))
                            } else s = o;
                            r._state !== T || (i && u ? S(r, s) : !1 === u ? x(r, a) : 1 === e ? j(r, s) : 2 === e && x(r, s))
                        }
                        var I = 0;

                        function P(t) {
                            t[_] = I++, t._state = void 0, t._result = void 0, t._subscribers = []
                        }
                        var R = function() {
                                function t(t, r) {
                                    this._instanceConstructor = t, this.promise = new t(O), this.promise[_] || P(this.promise), e(r) ? (this.length = r.length, this._remaining = r.length, this._result = new Array(this.length), 0 === this.length ? j(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(r), 0 === this._remaining && j(this.promise, this._result))) : x(this.promise, new Error("Array Methods must be provided an Array"))
                                }
                                return t.prototype._enumerate = function(t) {
                                    for (var e = 0; this._state === T && e < t.length; e++) this._eachEntry(t[e], e)
                                }, t.prototype._eachEntry = function(t, e) {
                                    var r = this._instanceConstructor,
                                        n = r.resolve;
                                    if (n === w) {
                                        var o = void 0,
                                            i = void 0,
                                            s = !1;
                                        try {
                                            o = t.then
                                        } catch (t) {
                                            s = !0, i = t
                                        }
                                        if (o === b && t._state !== T) this._settledAt(t._state, e, t._result);
                                        else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                                        else if (r === q) {
                                            var a = new r(O);
                                            s ? x(a, i) : k(a, t, o), this._willSettleAt(a, e)
                                        } else this._willSettleAt(new r((function(e) {
                                            return e(t)
                                        })), e)
                                    } else this._willSettleAt(n(t), e)
                                }, t.prototype._settledAt = function(t, e, r) {
                                    var n = this.promise;
                                    n._state === T && (this._remaining--, 2 === t ? x(n, r) : this._result[e] = r), 0 === this._remaining && j(n, this._result)
                                }, t.prototype._willSettleAt = function(t, e) {
                                    var r = this;
                                    E(t, void 0, (function(t) {
                                        return r._settledAt(1, e, t)
                                    }), (function(t) {
                                        return r._settledAt(2, e, t)
                                    }))
                                }, t
                            }(),
                            q = function() {
                                function e(t) {
                                    this[_] = I++, this._result = this._state = void 0, this._subscribers = [], O !== t && ("function" != typeof t && function() {
                                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                    }(), this instanceof e ? function(t, e) {
                                        try {
                                            e((function(e) {
                                                S(t, e)
                                            }), (function(e) {
                                                x(t, e)
                                            }))
                                        } catch (e) {
                                            x(t, e)
                                        }
                                    }(this, t) : function() {
                                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                    }())
                                }
                                return e.prototype.catch = function(t) {
                                    return this.then(null, t)
                                }, e.prototype.finally = function(e) {
                                    var r = this,
                                        n = r.constructor;
                                    return t(e) ? r.then((function(t) {
                                        return n.resolve(e()).then((function() {
                                            return t
                                        }))
                                    }), (function(t) {
                                        return n.resolve(e()).then((function() {
                                            throw t
                                        }))
                                    })) : r.then(e, e)
                                }, e
                            }();
                        return q.prototype.then = b, q.all = function(t) {
                            return new R(this, t).promise
                        }, q.race = function(t) {
                            var r = this;
                            return e(t) ? new r((function(e, n) {
                                for (var o = t.length, i = 0; i < o; i++) r.resolve(t[i]).then(e, n)
                            })) : new r((function(t, e) {
                                return e(new TypeError("You must pass an array to race."))
                            }))
                        }, q.resolve = w, q.reject = function(t) {
                            var e = new this(O);
                            return x(e, t), e
                        }, q._setScheduler = function(t) {
                            o = t
                        }, q._setAsap = function(t) {
                            i = t
                        }, q._asap = i, q.polyfill = function() {
                            var t = void 0;
                            if (void 0 !== pr) t = pr;
                            else if ("undefined" != typeof self) t = self;
                            else try {
                                t = Function("return this")()
                            } catch (pr) {
                                throw new Error("polyfill failed because global object is unavailable in this environment")
                            }
                            var e = t.Promise;
                            if (e) {
                                var r = null;
                                try {
                                    r = Object.prototype.toString.call(e.resolve())
                                } catch (pr) {}
                                if ("[object Promise]" === r && !e.cast) return
                            }
                            t.Promise = q
                        }, q.Promise = q, q
                    }()
                })),
                hr = {
                    __proto__: null,
                    default: {}
                },
                fr = cr((function(t, e) {
                    var r;
                    t.exports = r = r || function(t, e) {
                        var r;
                        if ("undefined" != typeof window && window.crypto && (r = window.crypto), "undefined" != typeof self && self.crypto && (r = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (r = globalThis.crypto), !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto), !r && void 0 !== pr && pr.crypto && (r = pr.crypto), !r) try {
                            r = hr
                        } catch (pr) {}
                        var n = function() {
                                if (r) {
                                    if ("function" == typeof r.getRandomValues) try {
                                        return r.getRandomValues(new Uint32Array(1))[0]
                                    } catch (pr) {}
                                    if ("function" == typeof r.randomBytes) try {
                                        return r.randomBytes(4).readInt32LE()
                                    } catch (pr) {}
                                }
                                throw new Error("Native crypto module could not be used to get secure random number.")
                            },
                            o = Object.create || function() {
                                function t() {}
                                return function(e) {
                                    var r;
                                    return t.prototype = e, r = new t, t.prototype = null, r
                                }
                            }(),
                            i = {},
                            s = i.lib = {},
                            a = s.Base = {
                                extend: function(t) {
                                    var e = o(this);
                                    return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                                        e.$super.init.apply(this, arguments)
                                    }), e.init.prototype = e, e.$super = this, e
                                },
                                create: function() {
                                    var t = this.extend();
                                    return t.init.apply(t, arguments), t
                                },
                                init: function() {},
                                mixIn: function(t) {
                                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                                },
                                clone: function() {
                                    return this.init.prototype.extend(this)
                                }
                            },
                            u = s.WordArray = a.extend({
                                init: function(t, e) {
                                    t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length
                                },
                                toString: function(t) {
                                    return (t || c).stringify(this)
                                },
                                concat: function(t) {
                                    var e = this.words,
                                        r = t.words,
                                        n = this.sigBytes,
                                        o = t.sigBytes;
                                    if (this.clamp(), n % 4)
                                        for (var i = 0; i < o; i++) e[n + i >>> 2] |= (r[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (n + i) % 4 * 8;
                                    else
                                        for (var s = 0; s < o; s += 4) e[n + s >>> 2] = r[s >>> 2];
                                    return this.sigBytes += o, this
                                },
                                clamp: function() {
                                    var e = this.words,
                                        r = this.sigBytes;
                                    e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, e.length = t.ceil(r / 4)
                                },
                                clone: function() {
                                    var t = a.clone.call(this);
                                    return t.words = this.words.slice(0), t
                                },
                                random: function(t) {
                                    for (var e = [], r = 0; r < t; r += 4) e.push(n());
                                    return new u.init(e, t)
                                }
                            }),
                            p = i.enc = {},
                            c = p.Hex = {
                                stringify: function(t) {
                                    for (var e = t.words, r = t.sigBytes, n = [], o = 0; o < r; o++) {
                                        var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                        n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16))
                                    }
                                    return n.join("")
                                },
                                parse: function(t) {
                                    for (var e = t.length, r = [], n = 0; n < e; n += 2) r[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
                                    return new u.init(r, e / 2)
                                }
                            },
                            l = p.Latin1 = {
                                stringify: function(t) {
                                    for (var e = t.words, r = t.sigBytes, n = [], o = 0; o < r; o++) n.push(String.fromCharCode(e[o >>> 2] >>> 24 - o % 4 * 8 & 255));
                                    return n.join("")
                                },
                                parse: function(t) {
                                    for (var e = t.length, r = [], n = 0; n < e; n++) r[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
                                    return new u.init(r, e)
                                }
                            },
                            h = p.Utf8 = {
                                stringify: function(t) {
                                    try {
                                        return decodeURIComponent(escape(l.stringify(t)))
                                    } catch (t) {
                                        throw new Error("Malformed UTF-8 data")
                                    }
                                },
                                parse: function(t) {
                                    return l.parse(unescape(encodeURIComponent(t)))
                                }
                            },
                            f = s.BufferedBlockAlgorithm = a.extend({
                                reset: function() {
                                    this._data = new u.init, this._nDataBytes = 0
                                },
                                _append: function(t) {
                                    "string" == typeof t && (t = h.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                                },
                                _process: function(e) {
                                    var r, n = this._data,
                                        o = n.words,
                                        i = n.sigBytes,
                                        s = this.blockSize,
                                        a = i / (4 * s),
                                        p = (a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * s,
                                        c = t.min(4 * p, i);
                                    if (p) {
                                        for (var l = 0; l < p; l += s) this._doProcessBlock(o, l);
                                        r = o.splice(0, p), n.sigBytes -= c
                                    }
                                    return new u.init(r, c)
                                },
                                clone: function() {
                                    var t = a.clone.call(this);
                                    return t._data = this._data.clone(), t
                                },
                                _minBufferSize: 0
                            });
                        s.Hasher = f.extend({
                            cfg: a.extend(),
                            init: function(t) {
                                this.cfg = this.cfg.extend(t), this.reset()
                            },
                            reset: function() {
                                f.reset.call(this), this._doReset()
                            },
                            update: function(t) {
                                return this._append(t), this._process(), this
                            },
                            finalize: function(t) {
                                return t && this._append(t), this._doFinalize()
                            },
                            blockSize: 16,
                            _createHelper: function(t) {
                                return function(e, r) {
                                    return new t.init(r).finalize(e)
                                }
                            },
                            _createHmacHelper: function(t) {
                                return function(e, r) {
                                    return new d.HMAC.init(t, r).finalize(e)
                                }
                            }
                        });
                        var d = i.algo = {};
                        return i
                    }(Math)
                })),
                dr = cr((function(t, e) {
                    var r;
                    t.exports = (r = fr, function(t) {
                        var e = r,
                            n = e.lib,
                            o = n.WordArray,
                            i = n.Hasher,
                            s = e.algo,
                            a = [],
                            u = [];
                        ! function() {
                            function e(e) {
                                for (var r = t.sqrt(e), n = 2; n <= r; n++)
                                    if (!(e % n)) return !1;
                                return !0
                            }

                            function r(t) {
                                return 4294967296 * (t - (0 | t)) | 0
                            }
                            for (var n = 2, o = 0; o < 64;) e(n) && (o < 8 && (a[o] = r(t.pow(n, .5))), u[o] = r(t.pow(n, 1 / 3)), o++), n++
                        }();
                        var p = [],
                            c = s.SHA256 = i.extend({
                                _doReset: function() {
                                    this._hash = new o.init(a.slice(0))
                                },
                                _doProcessBlock: function(t, e) {
                                    for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], s = r[3], a = r[4], c = r[5], l = r[6], h = r[7], f = 0; f < 64; f++) {
                                        if (f < 16) p[f] = 0 | t[e + f];
                                        else {
                                            var d = p[f - 15],
                                                y = p[f - 2];
                                            p[f] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + p[f - 7] + ((y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10) + p[f - 16]
                                        }
                                        var m = n & o ^ n & i ^ o & i,
                                            g = h + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & c ^ ~a & l) + u[f] + p[f];
                                        h = l, l = c, c = a, a = s + g | 0, s = i, i = o, o = n, n = g + (((n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22)) + m) | 0
                                    }
                                    r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + i | 0, r[3] = r[3] + s | 0, r[4] = r[4] + a | 0, r[5] = r[5] + c | 0, r[6] = r[6] + l | 0, r[7] = r[7] + h | 0
                                },
                                _doFinalize: function() {
                                    var e = this._data,
                                        r = e.words,
                                        n = 8 * this._nDataBytes,
                                        o = 8 * e.sigBytes;
                                    return r[o >>> 5] |= 128 << 24 - o % 32, r[14 + (o + 64 >>> 9 << 4)] = t.floor(n / 4294967296), r[15 + (o + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * r.length, this._process(), this._hash
                                },
                                clone: function() {
                                    var t = i.clone.call(this);
                                    return t._hash = this._hash.clone(), t
                                }
                            });
                        e.SHA256 = i._createHelper(c), e.HmacSHA256 = i._createHmacHelper(c)
                    }(Math), r.SHA256)
                })),
                yr = cr((function(t, e) {
                    var r, n;
                    t.exports = (n = (r = fr).lib.WordArray, r.enc.Base64 = {
                        stringify: function(t) {
                            var e = t.words,
                                r = t.sigBytes,
                                n = this._map;
                            t.clamp();
                            for (var o = [], i = 0; i < r; i += 3)
                                for (var s = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < r; a++) o.push(n.charAt(s >>> 6 * (3 - a) & 63));
                            var u = n.charAt(64);
                            if (u)
                                for (; o.length % 4;) o.push(u);
                            return o.join("")
                        },
                        parse: function(t) {
                            var e = t.length,
                                r = this._map,
                                o = this._reverseMap;
                            if (!o) {
                                o = this._reverseMap = [];
                                for (var i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i
                            }
                            var s = r.charAt(64);
                            if (s) {
                                var a = t.indexOf(s); - 1 !== a && (e = a)
                            }
                            return function(t, e, r) {
                                for (var o = [], i = 0, s = 0; s < e; s++)
                                    if (s % 4) {
                                        var a = r[t.charCodeAt(s - 1)] << s % 4 * 2,
                                            u = r[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                                        o[i >>> 2] |= (a | u) << 24 - i % 4 * 8, i++
                                    }
                                return n.create(o, i)
                            }(t, e, o)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }, r.enc.Base64)
                })),
                mr = cr((function(t, e) {
                    t.exports = fr.enc.Hex
                })),
                gr = cr((function(t, e) {
                    (function() {
                        var e;

                        function r(t, e, r) {
                            null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : this.fromString(t, null == e && "string" != typeof t ? 256 : e))
                        }

                        function n() {
                            return new r(null)
                        }
                        var o = "undefined" != typeof navigator;
                        o && "Microsoft Internet Explorer" == navigator.appName ? (r.prototype.am = function(t, e, r, n, o, i) {
                            for (var s = 32767 & e, a = e >> 15; --i >= 0;) {
                                var u = 32767 & this[t],
                                    p = this[t++] >> 15,
                                    c = a * u + p * s;
                                o = ((u = s * u + ((32767 & c) << 15) + r[n] + (1073741823 & o)) >>> 30) + (c >>> 15) + a * p + (o >>> 30), r[n++] = 1073741823 & u
                            }
                            return o
                        }, e = 30) : o && "Netscape" != navigator.appName ? (r.prototype.am = function(t, e, r, n, o, i) {
                            for (; --i >= 0;) {
                                var s = e * this[t++] + r[n] + o;
                                o = Math.floor(s / 67108864), r[n++] = 67108863 & s
                            }
                            return o
                        }, e = 26) : (r.prototype.am = function(t, e, r, n, o, i) {
                            for (var s = 16383 & e, a = e >> 14; --i >= 0;) {
                                var u = 16383 & this[t],
                                    p = this[t++] >> 14,
                                    c = a * u + p * s;
                                o = ((u = s * u + ((16383 & c) << 14) + r[n] + o) >> 28) + (c >> 14) + a * p, r[n++] = 268435455 & u
                            }
                            return o
                        }, e = 28), r.prototype.DB = e, r.prototype.DM = (1 << e) - 1, r.prototype.DV = 1 << e, r.prototype.FV = Math.pow(2, 52), r.prototype.F1 = 52 - e, r.prototype.F2 = 2 * e - 52;
                        var i, s, a = new Array;
                        for (i = "0".charCodeAt(0), s = 0; s <= 9; ++s) a[i++] = s;
                        for (i = "a".charCodeAt(0), s = 10; s < 36; ++s) a[i++] = s;
                        for (i = "A".charCodeAt(0), s = 10; s < 36; ++s) a[i++] = s;

                        function u(t) {
                            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
                        }

                        function p(t, e) {
                            var r = a[t.charCodeAt(e)];
                            return null == r ? -1 : r
                        }

                        function c(t) {
                            var e = n();
                            return e.fromInt(t), e
                        }

                        function l(t) {
                            var e, r = 1;
                            return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r
                        }

                        function h(t) {
                            this.m = t
                        }

                        function f(t) {
                            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
                        }

                        function d(t, e) {
                            return t & e
                        }

                        function y(t, e) {
                            return t | e
                        }

                        function m(t, e) {
                            return t ^ e
                        }

                        function g(t, e) {
                            return t & ~e
                        }

                        function v(t) {
                            if (0 == t) return -1;
                            var e = 0;
                            return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
                        }

                        function b(t) {
                            for (var e = 0; 0 != t;) t &= t - 1, ++e;
                            return e
                        }

                        function w() {}

                        function _(t) {
                            return t
                        }

                        function O(t) {
                            this.r2 = n(), this.q3 = n(), r.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
                        }
                        h.prototype.convert = function(t) {
                            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                        }, h.prototype.revert = function(t) {
                            return t
                        }, h.prototype.reduce = function(t) {
                            t.divRemTo(this.m, null, t)
                        }, h.prototype.mulTo = function(t, e, r) {
                            t.multiplyTo(e, r), this.reduce(r)
                        }, h.prototype.sqrTo = function(t, e) {
                            t.squareTo(e), this.reduce(e)
                        }, f.prototype.convert = function(t) {
                            var e = n();
                            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(r.ZERO) > 0 && this.m.subTo(e, e), e
                        }, f.prototype.revert = function(t) {
                            var e = n();
                            return t.copyTo(e), this.reduce(e), e
                        }, f.prototype.reduce = function(t) {
                            for (; t.t <= this.mt2;) t[t.t++] = 0;
                            for (var e = 0; e < this.m.t; ++e) {
                                var r = 32767 & t[e],
                                    n = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                                for (t[r = e + this.m.t] += this.m.am(0, n, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
                            }
                            t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                        }, f.prototype.mulTo = function(t, e, r) {
                            t.multiplyTo(e, r), this.reduce(r)
                        }, f.prototype.sqrTo = function(t, e) {
                            t.squareTo(e), this.reduce(e)
                        }, r.prototype.copyTo = function(t) {
                            for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                            t.t = this.t, t.s = this.s
                        }, r.prototype.fromInt = function(t) {
                            this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                        }, r.prototype.fromString = function(t, e) {
                            var n;
                            if (16 == e) n = 4;
                            else if (8 == e) n = 3;
                            else if (256 == e) n = 8;
                            else if (2 == e) n = 1;
                            else if (32 == e) n = 5;
                            else {
                                if (4 != e) return void this.fromRadix(t, e);
                                n = 2
                            }
                            this.t = 0, this.s = 0;
                            for (var o = t.length, i = !1, s = 0; --o >= 0;) {
                                var a = 8 == n ? 255 & t[o] : p(t, o);
                                a < 0 ? "-" == t.charAt(o) && (i = !0) : (i = !1, 0 == s ? this[this.t++] = a : s + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += n) >= this.DB && (s -= this.DB))
                            }
                            8 == n && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), i && r.ZERO.subTo(this, this)
                        }, r.prototype.clamp = function() {
                            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
                        }, r.prototype.dlShiftTo = function(t, e) {
                            var r;
                            for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
                            for (r = t - 1; r >= 0; --r) e[r] = 0;
                            e.t = this.t + t, e.s = this.s
                        }, r.prototype.drShiftTo = function(t, e) {
                            for (var r = t; r < this.t; ++r) e[r - t] = this[r];
                            e.t = Math.max(this.t - t, 0), e.s = this.s
                        }, r.prototype.lShiftTo = function(t, e) {
                            var r, n = t % this.DB,
                                o = this.DB - n,
                                i = (1 << o) - 1,
                                s = Math.floor(t / this.DB),
                                a = this.s << n & this.DM;
                            for (r = this.t - 1; r >= 0; --r) e[r + s + 1] = this[r] >> o | a, a = (this[r] & i) << n;
                            for (r = s - 1; r >= 0; --r) e[r] = 0;
                            e[s] = a, e.t = this.t + s + 1, e.s = this.s, e.clamp()
                        }, r.prototype.rShiftTo = function(t, e) {
                            e.s = this.s;
                            var r = Math.floor(t / this.DB);
                            if (r >= this.t) e.t = 0;
                            else {
                                var n = t % this.DB,
                                    o = this.DB - n,
                                    i = (1 << n) - 1;
                                e[0] = this[r] >> n;
                                for (var s = r + 1; s < this.t; ++s) e[s - r - 1] |= (this[s] & i) << o, e[s - r] = this[s] >> n;
                                n > 0 && (e[this.t - r - 1] |= (this.s & i) << o), e.t = this.t - r, e.clamp()
                            }
                        }, r.prototype.subTo = function(t, e) {
                            for (var r = 0, n = 0, o = Math.min(t.t, this.t); r < o;) n += this[r] - t[r], e[r++] = n & this.DM, n >>= this.DB;
                            if (t.t < this.t) {
                                for (n -= t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
                                n += this.s
                            } else {
                                for (n += this.s; r < t.t;) n -= t[r], e[r++] = n & this.DM, n >>= this.DB;
                                n -= t.s
                            }
                            e.s = n < 0 ? -1 : 0, n < -1 ? e[r++] = this.DV + n : n > 0 && (e[r++] = n), e.t = r, e.clamp()
                        }, r.prototype.multiplyTo = function(t, e) {
                            var n = this.abs(),
                                o = t.abs(),
                                i = n.t;
                            for (e.t = i + o.t; --i >= 0;) e[i] = 0;
                            for (i = 0; i < o.t; ++i) e[i + n.t] = n.am(0, o[i], e, i, 0, n.t);
                            e.s = 0, e.clamp(), this.s != t.s && r.ZERO.subTo(e, e)
                        }, r.prototype.squareTo = function(t) {
                            for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0;) t[r] = 0;
                            for (r = 0; r < e.t - 1; ++r) {
                                var n = e.am(r, e[r], t, 2 * r, 0, 1);
                                (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
                            }
                            t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
                        }, r.prototype.divRemTo = function(t, e, o) {
                            var i = t.abs();
                            if (!(i.t <= 0)) {
                                var s = this.abs();
                                if (s.t < i.t) return null != e && e.fromInt(0), void(null != o && this.copyTo(o));
                                null == o && (o = n());
                                var a = n(),
                                    u = this.s,
                                    p = t.s,
                                    c = this.DB - l(i[i.t - 1]);
                                c > 0 ? (i.lShiftTo(c, a), s.lShiftTo(c, o)) : (i.copyTo(a), s.copyTo(o));
                                var h = a.t,
                                    f = a[h - 1];
                                if (0 != f) {
                                    var d = f * (1 << this.F1) + (h > 1 ? a[h - 2] >> this.F2 : 0),
                                        y = this.FV / d,
                                        m = (1 << this.F1) / d,
                                        g = 1 << this.F2,
                                        v = o.t,
                                        b = v - h,
                                        w = null == e ? n() : e;
                                    for (a.dlShiftTo(b, w), o.compareTo(w) >= 0 && (o[o.t++] = 1, o.subTo(w, o)), r.ONE.dlShiftTo(h, w), w.subTo(a, a); a.t < h;) a[a.t++] = 0;
                                    for (; --b >= 0;) {
                                        var _ = o[--v] == f ? this.DM : Math.floor(o[v] * y + (o[v - 1] + g) * m);
                                        if ((o[v] += a.am(0, _, o, b, 0, h)) < _)
                                            for (a.dlShiftTo(b, w), o.subTo(w, o); o[v] < --_;) o.subTo(w, o)
                                    }
                                    null != e && (o.drShiftTo(h, e), u != p && r.ZERO.subTo(e, e)), o.t = h, o.clamp(), c > 0 && o.rShiftTo(c, o), u < 0 && r.ZERO.subTo(o, o)
                                }
                            }
                        }, r.prototype.invDigit = function() {
                            if (this.t < 1) return 0;
                            var t = this[0];
                            if (0 == (1 & t)) return 0;
                            var e = 3 & t;
                            return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
                        }, r.prototype.isEven = function() {
                            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                        }, r.prototype.exp = function(t, e) {
                            if (t > 4294967295 || t < 1) return r.ONE;
                            var o = n(),
                                i = n(),
                                s = e.convert(this),
                                a = l(t) - 1;
                            for (s.copyTo(o); --a >= 0;)
                                if (e.sqrTo(o, i), (t & 1 << a) > 0) e.mulTo(i, s, o);
                                else {
                                    var u = o;
                                    o = i, i = u
                                }
                            return e.revert(o)
                        }, r.prototype.toString = function(t) {
                            if (this.s < 0) return "-" + this.negate().toString(t);
                            var e;
                            if (16 == t) e = 4;
                            else if (8 == t) e = 3;
                            else if (2 == t) e = 1;
                            else if (32 == t) e = 5;
                            else {
                                if (4 != t) return this.toRadix(t);
                                e = 2
                            }
                            var r, n = (1 << e) - 1,
                                o = !1,
                                i = "",
                                s = this.t,
                                a = this.DB - s * this.DB % e;
                            if (s-- > 0)
                                for (a < this.DB && (r = this[s] >> a) > 0 && (o = !0, i = u(r)); s >= 0;) a < e ? (r = (this[s] & (1 << a) - 1) << e - a, r |= this[--s] >> (a += this.DB - e)) : (r = this[s] >> (a -= e) & n, a <= 0 && (a += this.DB, --s)), r > 0 && (o = !0), o && (i += u(r));
                            return o ? i : "0"
                        }, r.prototype.negate = function() {
                            var t = n();
                            return r.ZERO.subTo(this, t), t
                        }, r.prototype.abs = function() {
                            return this.s < 0 ? this.negate() : this
                        }, r.prototype.compareTo = function(t) {
                            var e = this.s - t.s;
                            if (0 != e) return e;
                            var r = this.t;
                            if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
                            for (; --r >= 0;)
                                if (0 != (e = this[r] - t[r])) return e;
                            return 0
                        }, r.prototype.bitLength = function() {
                            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + l(this[this.t - 1] ^ this.s & this.DM)
                        }, r.prototype.mod = function(t) {
                            var e = n();
                            return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(r.ZERO) > 0 && t.subTo(e, e), e
                        }, r.prototype.modPowInt = function(t, e) {
                            var r;
                            return r = t < 256 || e.isEven() ? new h(e) : new f(e), this.exp(t, r)
                        }, r.ZERO = c(0), r.ONE = c(1), w.prototype.convert = _, w.prototype.revert = _, w.prototype.mulTo = function(t, e, r) {
                            t.multiplyTo(e, r)
                        }, w.prototype.sqrTo = function(t, e) {
                            t.squareTo(e)
                        }, O.prototype.convert = function(t) {
                            if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                            if (t.compareTo(this.m) < 0) return t;
                            var e = n();
                            return t.copyTo(e), this.reduce(e), e
                        }, O.prototype.revert = function(t) {
                            return t
                        }, O.prototype.reduce = function(t) {
                            for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
                        }, O.prototype.mulTo = function(t, e, r) {
                            t.multiplyTo(e, r), this.reduce(r)
                        }, O.prototype.sqrTo = function(t, e) {
                            t.squareTo(e), this.reduce(e)
                        };
                        var T, k, S, A = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                            j = (1 << 26) / A[A.length - 1];

                        function x() {
                            var t;
                            t = (new Date).getTime(), k[S++] ^= 255 & t, k[S++] ^= t >> 8 & 255, k[S++] ^= t >> 16 & 255, k[S++] ^= t >> 24 & 255, S >= q && (S -= q)
                        }
                        if (r.prototype.chunkSize = function(t) {
                                return Math.floor(Math.LN2 * this.DB / Math.log(t))
                            }, r.prototype.toRadix = function(t) {
                                if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
                                var e = this.chunkSize(t),
                                    r = Math.pow(t, e),
                                    o = c(r),
                                    i = n(),
                                    s = n(),
                                    a = "";
                                for (this.divRemTo(o, i, s); i.signum() > 0;) a = (r + s.intValue()).toString(t).substr(1) + a, i.divRemTo(o, i, s);
                                return s.intValue().toString(t) + a
                            }, r.prototype.fromRadix = function(t, e) {
                                this.fromInt(0), null == e && (e = 10);
                                for (var n = this.chunkSize(e), o = Math.pow(e, n), i = !1, s = 0, a = 0, u = 0; u < t.length; ++u) {
                                    var c = p(t, u);
                                    c < 0 ? "-" == t.charAt(u) && 0 == this.signum() && (i = !0) : (a = e * a + c, ++s >= n && (this.dMultiply(o), this.dAddOffset(a, 0), s = 0, a = 0))
                                }
                                s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(a, 0)), i && r.ZERO.subTo(this, this)
                            }, r.prototype.fromNumber = function(t, e, n) {
                                if ("number" == typeof e)
                                    if (t < 2) this.fromInt(1);
                                    else
                                        for (this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(r.ONE.shiftLeft(t - 1), y, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(r.ONE.shiftLeft(t - 1), this);
                                else {
                                    var o = new Array,
                                        i = 7 & t;
                                    o.length = 1 + (t >> 3), e.nextBytes(o), i > 0 ? o[0] &= (1 << i) - 1 : o[0] = 0, this.fromString(o, 256)
                                }
                            }, r.prototype.bitwiseTo = function(t, e, r) {
                                var n, o, i = Math.min(t.t, this.t);
                                for (n = 0; n < i; ++n) r[n] = e(this[n], t[n]);
                                if (t.t < this.t) {
                                    for (o = t.s & this.DM, n = i; n < this.t; ++n) r[n] = e(this[n], o);
                                    r.t = this.t
                                } else {
                                    for (o = this.s & this.DM, n = i; n < t.t; ++n) r[n] = e(o, t[n]);
                                    r.t = t.t
                                }
                                r.s = e(this.s, t.s), r.clamp()
                            }, r.prototype.changeBit = function(t, e) {
                                var n = r.ONE.shiftLeft(t);
                                return this.bitwiseTo(n, e, n), n
                            }, r.prototype.addTo = function(t, e) {
                                for (var r = 0, n = 0, o = Math.min(t.t, this.t); r < o;) n += this[r] + t[r], e[r++] = n & this.DM, n >>= this.DB;
                                if (t.t < this.t) {
                                    for (n += t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
                                    n += this.s
                                } else {
                                    for (n += this.s; r < t.t;) n += t[r], e[r++] = n & this.DM, n >>= this.DB;
                                    n += t.s
                                }
                                e.s = n < 0 ? -1 : 0, n > 0 ? e[r++] = n : n < -1 && (e[r++] = this.DV + n), e.t = r, e.clamp()
                            }, r.prototype.dMultiply = function(t) {
                                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
                            }, r.prototype.dAddOffset = function(t, e) {
                                if (0 != t) {
                                    for (; this.t <= e;) this[this.t++] = 0;
                                    for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                                }
                            }, r.prototype.multiplyLowerTo = function(t, e, r) {
                                var n, o = Math.min(this.t + t.t, e);
                                for (r.s = 0, r.t = o; o > 0;) r[--o] = 0;
                                for (n = r.t - this.t; o < n; ++o) r[o + this.t] = this.am(0, t[o], r, o, 0, this.t);
                                for (n = Math.min(t.t, e); o < n; ++o) this.am(0, t[o], r, o, 0, e - o);
                                r.clamp()
                            }, r.prototype.multiplyUpperTo = function(t, e, r) {
                                --e;
                                var n = r.t = this.t + t.t - e;
                                for (r.s = 0; --n >= 0;) r[n] = 0;
                                for (n = Math.max(e - this.t, 0); n < t.t; ++n) r[this.t + n - e] = this.am(e - n, t[n], r, 0, 0, this.t + n - e);
                                r.clamp(), r.drShiftTo(1, r)
                            }, r.prototype.modInt = function(t) {
                                if (t <= 0) return 0;
                                var e = this.DV % t,
                                    r = this.s < 0 ? t - 1 : 0;
                                if (this.t > 0)
                                    if (0 == e) r = this[0] % t;
                                    else
                                        for (var n = this.t - 1; n >= 0; --n) r = (e * r + this[n]) % t;
                                return r
                            }, r.prototype.millerRabin = function(t) {
                                var e = this.subtract(r.ONE),
                                    o = e.getLowestSetBit();
                                if (o <= 0) return !1;
                                var i = e.shiftRight(o);
                                (t = t + 1 >> 1) > A.length && (t = A.length);
                                for (var s = n(), a = 0; a < t; ++a) {
                                    s.fromInt(A[Math.floor(Math.random() * A.length)]);
                                    var u = s.modPow(i, this);
                                    if (0 != u.compareTo(r.ONE) && 0 != u.compareTo(e)) {
                                        for (var p = 1; p++ < o && 0 != u.compareTo(e);)
                                            if (0 == (u = u.modPowInt(2, this)).compareTo(r.ONE)) return !1;
                                        if (0 != u.compareTo(e)) return !1
                                    }
                                }
                                return !0
                            }, r.prototype.clone = function() {
                                var t = n();
                                return this.copyTo(t), t
                            }, r.prototype.intValue = function() {
                                if (this.s < 0) {
                                    if (1 == this.t) return this[0] - this.DV;
                                    if (0 == this.t) return -1
                                } else {
                                    if (1 == this.t) return this[0];
                                    if (0 == this.t) return 0
                                }
                                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                            }, r.prototype.byteValue = function() {
                                return 0 == this.t ? this.s : this[0] << 24 >> 24
                            }, r.prototype.shortValue = function() {
                                return 0 == this.t ? this.s : this[0] << 16 >> 16
                            }, r.prototype.signum = function() {
                                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                            }, r.prototype.toByteArray = function() {
                                var t = this.t,
                                    e = new Array;
                                e[0] = this.s;
                                var r, n = this.DB - t * this.DB % 8,
                                    o = 0;
                                if (t-- > 0)
                                    for (n < this.DB && (r = this[t] >> n) != (this.s & this.DM) >> n && (e[o++] = r | this.s << this.DB - n); t >= 0;) n < 8 ? (r = (this[t] & (1 << n) - 1) << 8 - n, r |= this[--t] >> (n += this.DB - 8)) : (r = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --t)), 0 != (128 & r) && (r |= -256), 0 == o && (128 & this.s) != (128 & r) && ++o, (o > 0 || r != this.s) && (e[o++] = r);
                                return e
                            }, r.prototype.equals = function(t) {
                                return 0 == this.compareTo(t)
                            }, r.prototype.min = function(t) {
                                return this.compareTo(t) < 0 ? this : t
                            }, r.prototype.max = function(t) {
                                return this.compareTo(t) > 0 ? this : t
                            }, r.prototype.and = function(t) {
                                var e = n();
                                return this.bitwiseTo(t, d, e), e
                            }, r.prototype.or = function(t) {
                                var e = n();
                                return this.bitwiseTo(t, y, e), e
                            }, r.prototype.xor = function(t) {
                                var e = n();
                                return this.bitwiseTo(t, m, e), e
                            }, r.prototype.andNot = function(t) {
                                var e = n();
                                return this.bitwiseTo(t, g, e), e
                            }, r.prototype.not = function() {
                                for (var t = n(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                                return t.t = this.t, t.s = ~this.s, t
                            }, r.prototype.shiftLeft = function(t) {
                                var e = n();
                                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
                            }, r.prototype.shiftRight = function(t) {
                                var e = n();
                                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
                            }, r.prototype.getLowestSetBit = function() {
                                for (var t = 0; t < this.t; ++t)
                                    if (0 != this[t]) return t * this.DB + v(this[t]);
                                return this.s < 0 ? this.t * this.DB : -1
                            }, r.prototype.bitCount = function() {
                                for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r) t += b(this[r] ^ e);
                                return t
                            }, r.prototype.testBit = function(t) {
                                var e = Math.floor(t / this.DB);
                                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                            }, r.prototype.setBit = function(t) {
                                return this.changeBit(t, y)
                            }, r.prototype.clearBit = function(t) {
                                return this.changeBit(t, g)
                            }, r.prototype.flipBit = function(t) {
                                return this.changeBit(t, m)
                            }, r.prototype.add = function(t) {
                                var e = n();
                                return this.addTo(t, e), e
                            }, r.prototype.subtract = function(t) {
                                var e = n();
                                return this.subTo(t, e), e
                            }, r.prototype.multiply = function(t) {
                                var e = n();
                                return this.multiplyTo(t, e), e
                            }, r.prototype.divide = function(t) {
                                var e = n();
                                return this.divRemTo(t, e, null), e
                            }, r.prototype.remainder = function(t) {
                                var e = n();
                                return this.divRemTo(t, null, e), e
                            }, r.prototype.divideAndRemainder = function(t) {
                                var e = n(),
                                    r = n();
                                return this.divRemTo(t, e, r), new Array(e, r)
                            }, r.prototype.modPow = function(t, e) {
                                var r, o, i = t.bitLength(),
                                    s = c(1);
                                if (i <= 0) return s;
                                r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, o = i < 8 ? new h(e) : e.isEven() ? new O(e) : new f(e);
                                var a = new Array,
                                    u = 3,
                                    p = r - 1,
                                    d = (1 << r) - 1;
                                if (a[1] = o.convert(this), r > 1) {
                                    var y = n();
                                    for (o.sqrTo(a[1], y); u <= d;) a[u] = n(), o.mulTo(y, a[u - 2], a[u]), u += 2
                                }
                                var m, g, v = t.t - 1,
                                    b = !0,
                                    w = n();
                                for (i = l(t[v]) - 1; v >= 0;) {
                                    for (i >= p ? m = t[v] >> i - p & d : (m = (t[v] & (1 << i + 1) - 1) << p - i, v > 0 && (m |= t[v - 1] >> this.DB + i - p)), u = r; 0 == (1 & m);) m >>= 1, --u;
                                    if ((i -= u) < 0 && (i += this.DB, --v), b) a[m].copyTo(s), b = !1;
                                    else {
                                        for (; u > 1;) o.sqrTo(s, w), o.sqrTo(w, s), u -= 2;
                                        u > 0 ? o.sqrTo(s, w) : (g = s, s = w, w = g), o.mulTo(w, a[m], s)
                                    }
                                    for (; v >= 0 && 0 == (t[v] & 1 << i);) o.sqrTo(s, w), g = s, s = w, w = g, --i < 0 && (i = this.DB - 1, --v)
                                }
                                return o.revert(s)
                            }, r.prototype.modInverse = function(t) {
                                var e = t.isEven();
                                if (this.isEven() && e || 0 == t.signum()) return r.ZERO;
                                for (var n = t.clone(), o = this.clone(), i = c(1), s = c(0), a = c(0), u = c(1); 0 != n.signum();) {
                                    for (; n.isEven();) n.rShiftTo(1, n), e ? (i.isEven() && s.isEven() || (i.addTo(this, i), s.subTo(t, s)), i.rShiftTo(1, i)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                                    for (; o.isEven();) o.rShiftTo(1, o), e ? (a.isEven() && u.isEven() || (a.addTo(this, a), u.subTo(t, u)), a.rShiftTo(1, a)) : u.isEven() || u.subTo(t, u), u.rShiftTo(1, u);
                                    n.compareTo(o) >= 0 ? (n.subTo(o, n), e && i.subTo(a, i), s.subTo(u, s)) : (o.subTo(n, o), e && a.subTo(i, a), u.subTo(s, u))
                                }
                                return 0 != o.compareTo(r.ONE) ? r.ZERO : u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u) : u
                            }, r.prototype.pow = function(t) {
                                return this.exp(t, new w)
                            }, r.prototype.gcd = function(t) {
                                var e = this.s < 0 ? this.negate() : this.clone(),
                                    r = t.s < 0 ? t.negate() : t.clone();
                                if (e.compareTo(r) < 0) {
                                    var n = e;
                                    e = r, r = n
                                }
                                var o = e.getLowestSetBit(),
                                    i = r.getLowestSetBit();
                                if (i < 0) return e;
                                for (o < i && (i = o), i > 0 && (e.rShiftTo(i, e), r.rShiftTo(i, r)); e.signum() > 0;)(o = e.getLowestSetBit()) > 0 && e.rShiftTo(o, e), (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r), e.compareTo(r) >= 0 ? (e.subTo(r, e), e.rShiftTo(1, e)) : (r.subTo(e, r), r.rShiftTo(1, r));
                                return i > 0 && r.lShiftTo(i, r), r
                            }, r.prototype.isProbablePrime = function(t) {
                                var e, r = this.abs();
                                if (1 == r.t && r[0] <= A[A.length - 1]) {
                                    for (e = 0; e < A.length; ++e)
                                        if (r[0] == A[e]) return !0;
                                    return !1
                                }
                                if (r.isEven()) return !1;
                                for (e = 1; e < A.length;) {
                                    for (var n = A[e], o = e + 1; o < A.length && n < j;) n *= A[o++];
                                    for (n = r.modInt(n); e < o;)
                                        if (n % A[e++] == 0) return !1
                                }
                                return r.millerRabin(t)
                            }, r.prototype.square = function() {
                                var t = n();
                                return this.squareTo(t), t
                            }, r.prototype.Barrett = O, null == k) {
                            var E;
                            if (k = new Array, S = 0, "undefined" != typeof window && window.crypto)
                                if (window.crypto.getRandomValues) {
                                    var C = new Uint8Array(32);
                                    for (window.crypto.getRandomValues(C), E = 0; E < 32; ++E) k[S++] = C[E]
                                } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
                                var D = window.crypto.random(32);
                                for (E = 0; E < D.length; ++E) k[S++] = 255 & D.charCodeAt(E)
                            }
                            for (; S < q;) E = Math.floor(65536 * Math.random()), k[S++] = E >>> 8, k[S++] = 255 & E;
                            S = 0, x()
                        }

                        function I() {
                            if (null == T) {
                                for (x(), (T = new R).init(k), S = 0; S < k.length; ++S) k[S] = 0;
                                S = 0
                            }
                            return T.next()
                        }

                        function P() {}

                        function R() {
                            this.i = 0, this.j = 0, this.S = new Array
                        }
                        P.prototype.nextBytes = function(t) {
                            var e;
                            for (e = 0; e < t.length; ++e) t[e] = I()
                        }, R.prototype.init = function(t) {
                            var e, r, n;
                            for (e = 0; e < 256; ++e) this.S[e] = e;
                            for (r = 0, e = 0; e < 256; ++e) n = this.S[e], this.S[e] = this.S[r = r + this.S[e] + t[e % t.length] & 255], this.S[r] = n;
                            this.i = 0, this.j = 0
                        }, R.prototype.next = function() {
                            var t;
                            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
                        };
                        var q = 256;
                        t.exports = {
                            default: r,
                            BigInteger: r,
                            SecureRandom: P
                        }
                    }).call(pr)
                })),
                vr = {
                    sha1: "3021300906052b0e03021a05000414",
                    sha224: "302d300d06096086480165030402040500041c",
                    sha256: "3031300d060960864801650304020105000420",
                    sha384: "3041300d060960864801650304020205000430",
                    sha512: "3051300d060960864801650304020305000440",
                    md2: "3020300c06082a864886f70d020205000410",
                    md5: "3020300c06082a864886f70d020505000410",
                    ripemd160: "3021300906052b2403020105000414"
                },
                br = {
                    sha256: dr
                };

            function wr(t, e) {
                if (this.n = null, this.e = 0, !(null != t && null != e && t.length > 0 && e.length > 0)) throw new Error("Invalid key data");
                this.n = new gr.BigInteger(t, 16), this.e = parseInt(e, 16)
            }
            wr.prototype.verify = function(t, e) {
                e = e.replace(/[^0-9a-f]|[\s\n]]/gi, "");
                var r = new gr.BigInteger(e, 16);
                if (r.bitLength() > this.n.bitLength()) throw new Error("Signature does not match with the key modulus.");
                var n = function(t) {
                    for (var e in vr) {
                        var r = vr[e],
                            n = r.length;
                        if (t.substring(0, n) === r) return {
                            alg: e,
                            hash: t.substring(n)
                        }
                    }
                    return []
                }(r.modPowInt(this.e, this.n).toString(16).replace(/^1f+00/, ""));
                if (0 === n.length) return !1;
                if (!br.hasOwnProperty(n.alg)) throw new Error("Hashing algorithm is not supported.");
                var o = br[n.alg](t).toString();
                return n.hash === o
            };
            for (var _r = [], Or = [], Tr = "undefined" != typeof Uint8Array ? Uint8Array : Array, kr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Sr = 0; Sr < 64; ++Sr) _r[Sr] = kr[Sr], Or[kr.charCodeAt(Sr)] = Sr;
            Or["-".charCodeAt(0)] = 62, Or["_".charCodeAt(0)] = 63;
            var Ar = function(t) {
                var e, r, n = function(t) {
                        var e = t.length;
                        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                        var r = t.indexOf("=");
                        return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
                    }(t),
                    o = n[0],
                    i = n[1],
                    s = new Tr(function(t, e, r) {
                        return 3 * (e + r) / 4 - r
                    }(0, o, i)),
                    a = 0,
                    u = i > 0 ? o - 4 : o;
                for (r = 0; r < u; r += 4) e = Or[t.charCodeAt(r)] << 18 | Or[t.charCodeAt(r + 1)] << 12 | Or[t.charCodeAt(r + 2)] << 6 | Or[t.charCodeAt(r + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
                return 2 === i && (e = Or[t.charCodeAt(r)] << 2 | Or[t.charCodeAt(r + 1)] >> 4, s[a++] = 255 & e), 1 === i && (e = Or[t.charCodeAt(r)] << 10 | Or[t.charCodeAt(r + 1)] << 4 | Or[t.charCodeAt(r + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e), s
            };

            function jr(t) {
                var e = t.length % 4;
                return 0 === e ? t : t + new Array(4 - e + 1).join("=")
            }

            function xr(t) {
                return t = jr(t).replace(/\-/g, "+").replace(/_/g, "/"), decodeURIComponent(function(t) {
                    for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                    return e
                }(Ar(t)).split("").map((function(t) {
                    return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)
                })).join(""))
            }

            function Er(t) {
                return function(t) {
                    for (var e = "", r = 0; r < t.length; r++) {
                        var n = t[r].toString(16);
                        e += 2 === n.length ? n : "0" + n
                    }
                    return e
                }(Ar(jr(t)))
            }
            var Cr = cr((function(t) {
                var e, r;
                e = pr, r = function() {
                    return function() {
                        return function(t) {
                            var e = [];
                            if (0 === t.length) return "";
                            if ("string" != typeof t[0]) throw new TypeError("Url must be a string. Received " + t[0]);
                            if (t[0].match(/^[^/:]+:\/*$/) && t.length > 1) {
                                var r = t.shift();
                                t[0] = r + t[0]
                            }
                            t[0] = t[0].match(/^file:\/\/\//) ? t[0].replace(/^([^/:]+):\/*/, "$1:///") : t[0].replace(/^([^/:]+):\/*/, "$1://");
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                if ("string" != typeof o) throw new TypeError("Url must be a string. Received " + o);
                                "" !== o && (n > 0 && (o = o.replace(/^[\/]+/, "")), o = o.replace(/[\/]+$/, n < t.length - 1 ? "" : "/"), e.push(o))
                            }
                            var i = e.join("/"),
                                s = (i = i.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
                            return s.shift() + (s.length > 0 ? "?" : "") + s.join("&")
                        }("object" == typeof arguments[0] ? arguments[0] : [].slice.call(arguments))
                    }
                }, t.exports ? t.exports = r() : e.urljoin = r()
            }));

            function Dr(t, e) {
                return e = e || {}, new Promise((function(r, n) {
                    var o = new XMLHttpRequest,
                        i = [],
                        s = [],
                        a = {},
                        u = function t() {
                            return {
                                ok: 2 == (o.status / 100 | 0),
                                statusText: o.statusText,
                                status: o.status,
                                url: o.responseURL,
                                text: function() {
                                    return Promise.resolve(o.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(o.responseText).then(JSON.parse)
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([o.response]))
                                },
                                clone: t,
                                headers: {
                                    keys: function() {
                                        return i
                                    },
                                    entries: function() {
                                        return s
                                    },
                                    get: function(t) {
                                        return a[t.toLowerCase()]
                                    },
                                    has: function(t) {
                                        return t.toLowerCase() in a
                                    }
                                }
                            }
                        };
                    for (var p in o.open(e.method || "get", t, !0), o.onload = function() {
                            o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, e, r) {
                                i.push(e = e.toLowerCase()), s.push([e, r]), a[e] = a[e] ? a[e] + "," + r : r
                            })), r(u())
                        }, o.onerror = n, o.withCredentials = "include" == e.credentials, e.headers) o.setRequestHeader(p, e.headers[p]);
                    o.send(e.body || null)
                }))
            }

            function Ir(t) {
                if (t.ok) return t.json();
                var e = new Error(t.statusText);
                return e.response = t, Promise.reject(e)
            }

            function Pr(t) {
                this.name = "ConfigurationError", this.message = t || ""
            }

            function Rr(t) {
                this.name = "TokenValidationError", this.message = t || ""
            }
            Pr.prototype = Error.prototype, Rr.prototype = Error.prototype;
            var qr = function() {
                function t() {}
                var e = t.prototype;
                return e.get = function() {
                    return null
                }, e.has = function() {
                    return null
                }, e.set = function() {
                    return null
                }, t
            }();
            lr.polyfill();
            var Ur = function(t) {
                    return "number" == typeof t
                },
                Mr = function() {
                    return new Date
                };

            function Lr(t) {
                var e = t || {};
                if (this.jwksCache = e.jwksCache || new qr, this.expectedAlg = e.expectedAlg || "RS256", this.issuer = e.issuer, this.audience = e.audience, this.leeway = 0 === e.leeway ? 0 : e.leeway || 60, this.jwksURI = e.jwksURI, this.maxAge = e.maxAge, this.__clock = "function" == typeof e.__clock ? e.__clock : Mr, this.leeway < 0 || this.leeway > 300) throw new Pr("The leeway should be positive and lower than five minutes.");
                if ("RS256" !== this.expectedAlg) throw new Pr('Signature algorithm of "' + this.expectedAlg + '" is not supported. Expected the ID token to be signed with "RS256".')
            }

            function Br(t, e) {
                this.plugins = e;
                for (var r = 0; r < this.plugins.length; r++) {
                    if (this.plugins[r].version !== Ce.raw) {
                        var n = "";
                        throw this.plugins[r].constructor && this.plugins[r].constructor.name && (n = this.plugins[r].constructor.name), new Error("Plugin " + n + " version (" + this.plugins[r].version + ") is not compatible with the SDK version (" + Ce.raw + ")")
                    }
                    this.plugins[r].setWebAuth(t)
                }
            }
            Lr.prototype.verify = function(t, e, r) {
                if (!r && e && "function" == typeof e && (r = e, e = void 0), !t) return r(new Rr("ID token is required but missing"), null);
                var n = this.decode(t);
                if (n instanceof Error) return r(new Rr("ID token could not be decoded"), null);
                var o = n.encoded.header + "." + n.encoded.payload,
                    i = Er(n.encoded.signature),
                    s = n.header.alg,
                    a = n.header.kid,
                    u = n.payload.aud,
                    p = n.payload.sub,
                    c = n.payload.iss,
                    l = n.payload.exp,
                    h = n.payload.nbf,
                    f = n.payload.iat,
                    d = n.payload.azp,
                    y = n.payload.auth_time,
                    m = n.payload.nonce,
                    g = this.__clock(),
                    v = this;
                if (v.expectedAlg !== s) return r(new Rr('Signature algorithm of "' + s + '" is not supported. Expected the ID token to be signed with "RS256".'), null);
                this.getRsaVerifier(c, a, (function(t, s) {
                    if (t) return r(t, null);
                    if (!s.verify(o, i)) return r(new Rr("Invalid ID token signature."), null);
                    if (!c || "string" != typeof c) return r(new Rr("Issuer (iss) claim must be a string present in the ID token"), null);
                    if (v.issuer !== c) return r(new Rr('Issuer (iss) claim mismatch in the ID token, expected "' + v.issuer + '", found "' + c + '"'), null);
                    if (!p || "string" != typeof p) return r(new Rr("Subject (sub) claim must be a string present in the ID token"), null);
                    if (!u || "string" != typeof u && !Array.isArray(u)) return r(new Rr("Audience (aud) claim must be a string or array of strings present in the ID token"), null);
                    if (Array.isArray(u) && !u.includes(v.audience)) return r(new Rr('Audience (aud) claim mismatch in the ID token; expected "' + v.audience + '" but was not one of "' + u.join(", ") + '"'), null);
                    if ("string" == typeof u && v.audience !== u) return r(new Rr('Audience (aud) claim mismatch in the ID token; expected "' + v.audience + '" but found "' + u + '"'), null);
                    if (e) {
                        if (!m || "string" != typeof m) return r(new Rr("Nonce (nonce) claim must be a string present in the ID token"), null);
                        if (m !== e) return r(new Rr('Nonce (nonce) claim value mismatch in the ID token; expected "' + e + '", found "' + m + '"'), null)
                    }
                    if (Array.isArray(u) && u.length > 1) {
                        if (!d || "string" != typeof d) return r(new Rr("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"), null);
                        if (d !== v.audience) return r(new Rr('Authorized Party (azp) claim mismatch in the ID token; expected "' + v.audience + '", found "' + d + '"'), null)
                    }
                    if (!l || !Ur(l)) return r(new Rr("Expiration Time (exp) claim must be a number present in the ID token"), null);
                    if (!f || !Ur(f)) return r(new Rr("Issued At (iat) claim must be a number present in the ID token"), null);
                    var a = l + v.leeway,
                        b = new Date(0);
                    if (b.setUTCSeconds(a), g > b) return r(new Rr('Expiration Time (exp) claim error in the ID token; current time "' + g + '" is after expiration time "' + b + '"'), null);
                    if (h && Ur(h)) {
                        var w = h - v.leeway,
                            _ = new Date(0);
                        if (_.setUTCSeconds(w), g < _) return r(new Rr('Not Before Time (nbf) claim error in the ID token; current time "' + g + '" is before the not before time "' + _ + '"'), null)
                    }
                    if (v.maxAge) {
                        if (!y || !Ur(y)) return r(new Rr("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"), null);
                        var O = y + v.maxAge + v.leeway,
                            T = new Date(0);
                        if (T.setUTCSeconds(O), g > T) return r(new Rr('Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time "' + g + '" is after last auth time at "' + T + '"'), null)
                    }
                    return r(null, n.payload)
                }))
            }, Lr.prototype.getRsaVerifier = function(t, e, r) {
                var n = this,
                    o = t + e;
                Promise.resolve(this.jwksCache.has(o)).then((function(r) {
                    return r ? n.jwksCache.get(o) : (i = {
                        jwksURI: n.jwksURI,
                        iss: t,
                        kid: e
                    }, ("undefined" == typeof fetch ? Dr : fetch)(i.jwksURI || Cr(i.iss, ".well-known", "jwks.json")).then(Ir).then((function(t) {
                        var e, r, n, o = null;
                        for (e = 0; e < t.keys.length && null === o; e++)(r = t.keys[e]).kid === i.kid && (o = r);
                        if (!o) throw new Error('Could not find a public key for Key ID (kid) "' + i.kid + '"');
                        return {
                            modulus: Er((n = o).n),
                            exp: Er(n.e)
                        }
                    })).catch((function(t) {
                        throw t
                    })));
                    var i
                })).then((function(t) {
                    if (!t || !t.modulus || !t.exp) throw new Error("Empty keyInfo in response");
                    return Promise.resolve(n.jwksCache.set(o, t)).then((function() {
                        r && r(null, new wr(t.modulus, t.exp))
                    }))
                })).catch((function(t) {
                    r && r(t)
                }))
            }, Lr.prototype.decode = function(t) {
                var e, r, n = t.split(".");
                if (3 !== n.length) return new Rr("Cannot decode a malformed JWT");
                try {
                    e = JSON.parse(xr(n[0])), r = JSON.parse(xr(n[1]))
                } catch (t) {
                    return new Rr("Token header or payload is not valid JSON")
                }
                return {
                    header: e,
                    payload: r,
                    encoded: {
                        header: n[0],
                        payload: n[1],
                        signature: n[2]
                    }
                }
            }, Lr.prototype.validateAccessToken = function(t, e, r, n) {
                if (this.expectedAlg !== e) return n(new Rr('Signature algorithm of "' + e + '" is not supported. Expected "' + this.expectedAlg + '"'));
                var o, i = dr(t),
                    s = mr.stringify(i),
                    a = s.substring(0, s.length / 2),
                    u = mr.parse(a),
                    p = yr.stringify(u);
                return n((o = {
                    "+": "-",
                    "/": "_",
                    "=": ""
                }, p.replace(/[+/=]/g, (function(t) {
                    return o[t]
                })) !== r ? new Rr("Invalid access_token") : null))
            }, Br.prototype.get = function(t) {
                for (var e = 0; e < this.plugins.length; e++)
                    if (this.plugins[e].supports(t)) return this.plugins[e].init();
                return null
            };
            var Nr = function(t) {
                var e = new Uint8Array(t),
                    r = [],
                    n = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~",
                    o = $e.getWindow().crypto || $e.getWindow().msCrypto;
                if (!o) return null;
                for (var i = o.getRandomValues(e), s = 0; s < i.length; s++) r.push(n[i[s] % 65]);
                return r.join("")
            };

            function Hr(t) {
                var e = t.transaction || {};
                this.namespace = e.namespace || "com.auth0.auth.", this.keyLength = e.keyLength || 32, this.stateExpiration = t.stateExpiration ? t.stateExpiration / 60 / 24 : 1 / 48, this.storage = new tr(t), this.options = t
            }

            function Fr(t) {
                if (this.url = t.url, this.callback = t.callback, this.timeout = t.timeout || 6e4, this.timeoutCallback = t.timeoutCallback || null, this.eventListenerType = t.eventListenerType || "message", this.iframe = null, this.timeoutHandle = null, this._destroyTimeout = null, this.transientMessageEventListener = null, this.proxyEventListener = null, this.eventValidator = t.eventValidator || {
                        isValid: function() {
                            return !0
                        }
                    }, "function" != typeof this.callback) throw new Error("options.callback must be a function")
            }

            function Wr(t) {
                this.webAuth = t, this.warn = new Ke(t.baseOptions)
            }

            function zr(t, e) {
                this.webAuth = t, this.baseOptions = e, this.request = new Ve(e), this.webMessageHandler = new Wr(t), this.storage = new tr(e)
            }

            function Vr(t, e) {
                return ["co/verifier", encodeURIComponent(t), encodeURIComponent(e)].join("/")
            }

            function Jr(t, e) {
                this.webAuth = t, this.baseOptions = e, this.crossOriginAuthentication = new zr(t, this.baseOptions), this.warn = new Ke({
                    disableWarnings: !!e._disableDeprecationWarnings
                })
            }
            Hr.prototype.process = function(t) {
                if (!t.responseType) throw new Error("responseType is required");
                var e = t.realm || t.connection,
                    r = -1 !== t.responseType.indexOf("id_token"),
                    n = this.generateTransaction(t.appState, t.state, t.nonce, e, r, t.organization);
                return t.state || (t.state = n.state), r && !t.nonce && (t.nonce = n.nonce), t
            }, Hr.prototype.generateTransaction = function(t, e, r, n, o, i) {
                if (e = e || Nr(this.keyLength), r = r || (o ? Nr(this.keyLength) : null), $e.getWindow().location.host !== this.options.domain) {
                    var s = {
                        nonce: r,
                        appState: t,
                        state: e,
                        lastUsedConnection: n
                    };
                    i && (s.organization = i), this.storage.setItem(this.namespace + e, s, {
                        expires: this.stateExpiration
                    })
                }
                return {
                    state: e,
                    nonce: r
                }
            }, Hr.prototype.getStoredTransaction = function(t) {
                var e;
                return e = this.storage.getItem(this.namespace + t), this.clearTransaction(t), e
            }, Hr.prototype.clearTransaction = function(t) {
                this.storage.removeItem(this.namespace + t)
            }, Fr.prototype.init = function() {
                var t = this,
                    e = $e.getWindow();
                switch (this.iframe = e.document.createElement("iframe"), this.iframe.style.display = "none", this.proxyEventListener = function(e) {
                    t.eventListener(e)
                }, this.eventListenerType) {
                    case "message":
                        this.eventSourceObject = e;
                        break;
                    case "load":
                        this.eventSourceObject = this.iframe;
                        break;
                    default:
                        throw new Error("Unsupported event listener type: " + this.eventListenerType)
                }
                this.eventSourceObject.addEventListener(this.eventListenerType, this.proxyEventListener, !1), e.document.body.appendChild(this.iframe), this.iframe.src = this.url, this.timeoutHandle = setTimeout((function() {
                    t.timeoutHandler()
                }), this.timeout)
            }, Fr.prototype.eventListener = function(t) {
                var e = {
                    event: t,
                    sourceObject: this.eventSourceObject
                };
                this.eventValidator.isValid(e) && (this.destroy(), this.callback(e))
            }, Fr.prototype.timeoutHandler = function() {
                this.destroy(), this.timeoutCallback && this.timeoutCallback()
            }, Fr.prototype.destroy = function() {
                var t = this;
                clearTimeout(this.timeoutHandle), this._destroyTimeout = setTimeout((function() {
                    t.eventSourceObject.removeEventListener(t.eventListenerType, t.proxyEventListener, !1), t.iframe.parentNode && t.iframe.parentNode.removeChild(t.iframe)
                }), 0)
            }, Wr.prototype.run = function(t, e) {
                var r = this;
                t.responseMode = "web_message", t.prompt = "none";
                var n = $e.getOrigin(),
                    o = Fe.getOriginFromUrl(t.redirectUri);
                if (o && n !== o) return e({
                    error: "origin_mismatch",
                    error_description: "The redirectUri's origin (" + o + ") should match the window's origin (" + n + ")."
                });
                ! function(t, e, r) {
                    new Fr({
                        url: t,
                        eventListenerType: "message",
                        callback: function(t) {
                            r(null, t)
                        },
                        timeout: e.timeout,
                        eventValidator: {
                            isValid: function(t) {
                                return !(!t.event.data || "authorization_response" !== t.event.data.type || e.state !== t.event.data.response.state)
                            }
                        },
                        timeoutCallback: function() {
                            r({
                                error: "timeout",
                                error_description: "Timeout during executing web_message communication",
                                state: e.state
                            })
                        }
                    }).init()
                }(this.webAuth.client.buildAuthorizeUrl(t), t, (function(n, o) {
                    var i = n;
                    if (!n && o.event.data.response.error && (i = o.event.data.response), !i) {
                        var s = o.event.data.response;
                        return r.webAuth.validateAuthenticationResponse(t, s, e)
                    }
                    return "consent_required" === i.error && "localhost" === $e.getWindow().location.hostname && r.warn.warning("Consent Required. Consent can't be skipped on localhost. Read more here: https://auth0.com/docs/api-auth/user-consent#skipping-consent-for-first-party-clients"), r.webAuth.transactionManager.clearTransaction(i.state), e(Fe.pick(i, ["error", "error_description"]))
                }))
            }, zr.prototype.login = function(t, e) {
                var r = this,
                    n = i(this.baseOptions.rootUrl, "/co/authenticate");
                t.username = t.username || t.email, delete t.email;
                var o = {
                    client_id: t.clientID || this.baseOptions.clientID,
                    username: t.username
                };
                t.password && (o.password = t.password), t.otp && (o.otp = t.otp);
                var s = t.realm || this.baseOptions.realm;
                if (s) {
                    var a = t.credentialType || this.baseOptions.credentialType || "http://auth0.com/oauth/grant-type/password-realm";
                    o.realm = s, o.credential_type = a
                } else o.credential_type = "password";
                this.request.post(n).withCredentials().send(o).end((function(n, o) {
                    if (n) {
                        var i = n.response && n.response.body || {
                            error: "request_error",
                            error_description: JSON.stringify(n)
                        };
                        return or(e, {
                            forceLegacyError: !0
                        })(i)
                    }

                    function s() {
                        var n = !0 === t.popup;
                        t = Fe.blacklist(t, ["password", "credentialType", "otp", "popup", "onRedirecting"]);
                        var i = Fe.merge(t).with({
                                loginTicket: o.body.login_ticket
                            }),
                            s = Vr(r.baseOptions.rootUrl, o.body.co_id);
                        r.storage.setItem(s, o.body.co_verifier, {
                            expires: 1 / 96
                        }), n ? r.webMessageHandler.run(i, or(e, {
                            forceLegacyError: !0
                        })) : r.webAuth.authorize(i)
                    }
                    "function" == typeof t.onRedirecting ? t.onRedirecting(s) : s()
                }))
            }, zr.prototype.callback = function() {
                var t = decodeURIComponent(function(t) {
                        var e = ("&" + $e.getWindow().location.hash.substring(1)).split("&origin=");
                        if (2 === e.length) return e.pop().split("&").shift()
                    }()),
                    e = $e.getWindow(),
                    r = this;
                e.addEventListener("message", (function(t) {
                    if ("co_verifier_request" === t.data.type) {
                        var e = Vr(t.origin, t.data.request.id),
                            n = function(t, e) {
                                try {
                                    var r = t.getItem(e);
                                    return t.removeItem(e), r || ""
                                } catch (cr) {
                                    return ""
                                }
                            }(r.storage, e);
                        t.source.postMessage({
                            type: "co_verifier_response",
                            response: {
                                verifier: n
                            }
                        }, t.origin)
                    }
                })), e.parent.postMessage({
                    type: "ready"
                }, t)
            }, Jr.prototype.loginWithCredentials = function(t, e) {
                t.realm = t.realm || t.connection, delete t.connection, this.crossOriginAuthentication.login(t, e)
            }, Jr.prototype.signupAndLogin = function(t, e) {
                var r = this;
                return this.webAuth.client.dbConnection.signup(t, (function(n) {
                    return n ? e(n) : (t.realm = t.realm || t.connection, delete t.connection, r.webAuth.login(t, e))
                }))
            };
            var $r = o((function(t) {
                    var e = function() {
                        function t(t, e, r) {
                            t.attachEvent ? t.attachEvent("on" + e, r) : t.addEventListener && t.addEventListener(e, r, !1)
                        }

                        function e(t, e, r) {
                            t.detachEvent ? t.detachEvent("on" + e, r) : t.removeEventListener && t.removeEventListener(e, r, !1)
                        }

                        function r(t) {
                            /^https?:\/\//.test(t) || (t = window.location.href);
                            var e = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(t);
                            return e ? e[1] : t
                        }
                        var n = function() {
                            if ("undefined" == typeof navigator) return !1;
                            var t = -1,
                                e = navigator.userAgent;
                            return "Microsoft Internet Explorer" === navigator.appName ? null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1)) : e.indexOf("Trident") > -1 && null !== new RegExp("rv:([0-9]{2,2}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1)), t >= 8
                        }();
                        return "undefined" != typeof window && window.JSON && window.JSON.stringify && window.JSON.parse && window.postMessage ? {
                            open: function(o, i) {
                                if (!i) throw "missing required callback argument";
                                var s, a;
                                o.url || (s = "missing required 'url' parameter"), o.relay_url || (s = "missing required 'relay_url' parameter"), s && setTimeout((function() {
                                    i(s)
                                }), 0), o.window_name || (o.window_name = null), o.window_features && ! function() {
                                    try {
                                        var t = navigator.userAgent;
                                        return -1 != t.indexOf("Fennec/") || -1 != t.indexOf("Firefox/") && -1 != t.indexOf("Android")
                                    } catch (cr) {}
                                    return !1
                                }() || (o.window_features = void 0);
                                var u, p = o.origin || r(o.url);
                                if (p !== r(o.relay_url)) return setTimeout((function() {
                                    i("invalid arguments: origin of url and relay_url must match")
                                }), 0);
                                n && ((a = document.createElement("iframe")).setAttribute("src", o.relay_url), a.style.display = "none", a.setAttribute("name", "__winchan_relay_frame"), document.body.appendChild(a), u = a.contentWindow);
                                var c = o.popup || window.open(o.url, o.window_name, o.window_features);
                                o.popup && (c.location.href = o.url), u || (u = c);
                                var l = setInterval((function() {
                                        c && c.closed && (f(), i && (i("User closed the popup window"), i = null))
                                    }), 500),
                                    h = JSON.stringify({
                                        a: "request",
                                        d: o.params
                                    });

                                function f() {
                                    if (a && document.body.removeChild(a), a = void 0, l && (l = clearInterval(l)), e(window, "message", d), e(window, "unload", f), c) try {
                                        c.close()
                                    } catch (t) {
                                        u.postMessage("die", p)
                                    }
                                    c = u = void 0
                                }

                                function d(t) {
                                    if (t.origin === p) {
                                        try {
                                            var e = JSON.parse(t.data)
                                        } catch (s) {
                                            if (i) return i(s);
                                            throw s
                                        }
                                        "ready" === e.a ? u.postMessage(h, p) : "error" === e.a ? (f(), i && (i(e.d), i = null)) : "response" === e.a && (f(), i && (i(null, e.d), i = null))
                                    }
                                }
                                return t(window, "unload", f), t(window, "message", d), {
                                    originalPopup: c,
                                    close: f,
                                    focus: function() {
                                        if (c) try {
                                            c.focus()
                                        } catch (cr) {}
                                    }
                                }
                            },
                            onOpen: function(r) {
                                var o = "*",
                                    i = n ? function() {
                                        for (var t = window.opener.frames, e = t.length - 1; e >= 0; e--) try {
                                            if (t[e].location.protocol === window.location.protocol && t[e].location.host === window.location.host && "__winchan_relay_frame" === t[e].name) return t[e]
                                        } catch (cr) {}
                                    }() : window.opener;
                                if (!i) throw "can't find relay frame";

                                function s(t) {
                                    t = JSON.stringify(t), n ? i.doPost(t, o) : i.postMessage(t, o)
                                }

                                function a(t) {
                                    if ("die" === t.data) try {
                                        window.close()
                                    } catch (e) {}
                                }
                                t(n ? i : window, "message", (function t(n) {
                                    var i;
                                    try {
                                        i = JSON.parse(n.data)
                                    } catch (a) {}
                                    i && "request" === i.a && (e(window, "message", t), o = n.origin, r && setTimeout((function() {
                                        r(o, i.d, (function(t) {
                                            r = void 0, s({
                                                a: "response",
                                                d: t
                                            })
                                        }))
                                    }), 0))
                                })), t(n ? i : window, "message", a);
                                try {
                                    s({
                                        a: "ready"
                                    })
                                } catch (cr) {
                                    t(i, "load", (function(t) {
                                        s({
                                            a: "ready"
                                        })
                                    }))
                                }
                                var u = function() {
                                    try {
                                        e(n ? i : window, "message", a)
                                    } catch (t) {}
                                    r && s({
                                        a: "error",
                                        d: "client closed window"
                                    }), r = void 0;
                                    try {
                                        window.close()
                                    } catch (cr) {}
                                };
                                return t(window, "unload", u), {
                                    detach: function() {
                                        e(window, "unload", u)
                                    }
                                }
                            }
                        } : {
                            open: function(t, e, r, n) {
                                setTimeout((function() {
                                    n("unsupported browser")
                                }), 0)
                            },
                            onOpen: function(t) {
                                setTimeout((function() {
                                    t("unsupported browser")
                                }), 0)
                            }
                        }
                    }();
                    t.exports && (t.exports = e)
                })),
                Gr = function(t) {
                    /^https?:\/\//.test(t) || (t = window.location.href);
                    var e = /^(https?:\/\/[-_a-zA-Z.0-9:]+)/.exec(t);
                    return e ? e[1] : t
                };

            function Xr() {
                this._current_popup = null
            }

            function Qr(t, e) {
                this.baseOptions = e, this.baseOptions.popupOrigin = e.popupOrigin, this.client = t.client, this.webAuth = t, this.transactionManager = new Hr(this.baseOptions), this.crossOriginAuthentication = new zr(t, this.baseOptions), this.warn = new Ke({
                    disableWarnings: !!e._disableDeprecationWarnings
                })
            }

            function Zr(t) {
                this.authenticationUrl = t.authenticationUrl, this.timeout = t.timeout || 6e4, this.handler = null, this.postMessageDataType = t.postMessageDataType || !1, this.postMessageOrigin = t.postMessageOrigin || $e.getWindow().location.origin || $e.getWindow().location.protocol + "//" + $e.getWindow().location.hostname + ($e.getWindow().location.port ? ":" + $e.getWindow().location.port : "")
            }

            function Kr(t) {
                this.baseOptions = t, this.request = new Ve(t), this.transactionManager = new Hr(this.baseOptions)
            }

            function Yr(t, e) {
                this.baseOptions = e, this.client = t, this.baseOptions.universalLoginPage = !0, this.request = new Ve(this.baseOptions), this.warn = new Ke({
                    disableWarnings: !!e._disableDeprecationWarnings
                })
            }
            Xr.prototype.calculatePosition = function(t) {
                var e = t.width || 500,
                    r = t.height || 600,
                    n = $e.getWindow(),
                    o = void 0 !== n.screenX ? n.screenX : n.screenLeft,
                    i = void 0 !== n.screenY ? n.screenY : n.screenTop,
                    s = void 0 !== n.outerWidth ? n.outerWidth : n.document.body.clientWidth,
                    a = void 0 !== n.outerHeight ? n.outerHeight : n.document.body.clientHeight;
                return {
                    width: e,
                    height: r,
                    left: t.left || o + (s - e) / 2,
                    top: t.top || i + (a - r) / 2
                }
            }, Xr.prototype.preload = function(t) {
                var e = this,
                    r = $e.getWindow(),
                    n = this.calculatePosition(t.popupOptions || {}),
                    o = Fe.merge(n).with(t.popupOptions),
                    i = t.url || "about:blank",
                    s = ee(o, {
                        encode: !1,
                        delimiter: ","
                    });
                return this._current_popup && !this._current_popup.closed || (this._current_popup = r.open(i, "auth0_signup_popup", s), this._current_popup.kill = function() {
                    this.close(), e._current_popup = null
                }), this._current_popup
            }, Xr.prototype.load = function(t, e, r, n) {
                var o = this,
                    i = this.calculatePosition(r.popupOptions || {}),
                    s = Fe.merge(i).with(r.popupOptions),
                    a = Fe.merge({
                        url: t,
                        relay_url: e,
                        window_features: ee(s, {
                            delimiter: ",",
                            encode: !1
                        }),
                        popup: this._current_popup
                    }).with(r),
                    u = $r.open(a, (function(t, e) {
                        if (!t || "SyntaxError" !== t.name) return o._current_popup = null, n(t, e)
                    }));
                return u.focus(), u
            }, Qr.prototype.buildPopupHandler = function() {
                var t = this.baseOptions.plugins.get("popup.getPopupHandler");
                return t ? t.getPopupHandler() : new Xr
            }, Qr.prototype.preload = function(t) {
                t = t || {};
                var e = this.buildPopupHandler();
                return e.preload(t), e
            }, Qr.prototype.getPopupHandler = function(t, e) {
                return t.popupHandler ? t.popupHandler : e ? this.preload(t) : this.buildPopupHandler()
            }, Qr.prototype.callback = function(t) {
                var e = this,
                    r = $e.getWindow(),
                    n = (t = t || {}).popupOrigin || this.baseOptions.popupOrigin || $e.getOrigin();
                r.opener ? $r.onOpen((function(r, o, i) {
                    if (r !== n) return i({
                        error: "origin_mismatch",
                        error_description: "The popup's origin (" + r + ") should match the `popupOrigin` parameter (" + n + ")."
                    });
                    e.webAuth.parseHash(t || {}, (function(t, e) {
                        return i(t || e)
                    }))
                })) : r.doPost = function(t) {
                    r.parent && r.parent.postMessage(t, n)
                }
            }, Qr.prototype.authorize = function(t, e) {
                var r, n, o = {},
                    s = this.baseOptions.plugins.get("popup.authorize"),
                    a = Fe.merge(this.baseOptions, ["clientID", "scope", "domain", "audience", "tenant", "responseType", "redirectUri", "_csrf", "state", "_intstate", "nonce", "organization", "invitation"]).with(Fe.blacklist(t, ["popupHandler"]));
                return qe.check(a, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    responseType: {
                        type: "string",
                        message: "responseType option is required"
                    }
                }), n = i(this.baseOptions.rootUrl, "relay.html"), t.owp ? a.owp = !0 : (o.origin = Gr(a.redirectUri), n = a.redirectUri), t.popupOptions && (o.popupOptions = Fe.pick(t.popupOptions, ["width", "height", "top", "left"])), s && (a = s.processParams(a)), (a = this.transactionManager.process(a)).scope = a.scope || "openid profile email", delete a.domain, r = this.client.buildAuthorizeUrl(a), this.getPopupHandler(t).load(r, n, o, or(e, {
                    keepOriginalCasing: !0
                }))
            }, Qr.prototype.loginWithCredentials = function(t, e) {
                t.realm = t.realm || t.connection, t.popup = !0, t = Fe.merge(this.baseOptions, ["redirectUri", "responseType", "state", "nonce"]).with(Fe.blacklist(t, ["popupHandler", "connection"])), t = this.transactionManager.process(t), this.crossOriginAuthentication.login(t, e)
            }, Qr.prototype.passwordlessVerify = function(t, e) {
                var r = this;
                return this.client.passwordless.verify(Fe.blacklist(t, ["popupHandler"]), (function(n) {
                    if (n) return e(n);
                    t.username = t.phoneNumber || t.email, t.password = t.verificationCode, delete t.email, delete t.phoneNumber, delete t.verificationCode, delete t.type, r.client.loginWithResourceOwner(t, e)
                }))
            }, Qr.prototype.signupAndLogin = function(t, e) {
                var r = this;
                return this.client.dbConnection.signup(t, (function(n) {
                    if (n) return e(n);
                    r.loginWithCredentials(t, e)
                }))
            }, Zr.create = function(t) {
                return new Zr(t)
            }, Zr.prototype.login = function(t, e) {
                this.handler = new Fr({
                    auth0: this.auth0,
                    url: this.authenticationUrl,
                    eventListenerType: t ? "message" : "load",
                    callback: this.getCallbackHandler(e, t),
                    timeout: this.timeout,
                    eventValidator: this.getEventValidator(),
                    timeoutCallback: function() {
                        e(null, "#error=timeout&error_description=Timeout+during+authentication+renew.")
                    },
                    usePostMessage: t || !1
                }), this.handler.init()
            }, Zr.prototype.getEventValidator = function() {
                var t = this;
                return {
                    isValid: function(e) {
                        switch (e.event.type) {
                            case "message":
                                return e.event.origin === t.postMessageOrigin && e.event.source === t.handler.iframe.contentWindow && (!1 === t.postMessageDataType || e.event.data.type && e.event.data.type === t.postMessageDataType);
                            case "load":
                                if ("about:" === e.sourceObject.contentWindow.location.protocol) return !1;
                            default:
                                return !0
                        }
                    }
                }
            }, Zr.prototype.getCallbackHandler = function(t, e) {
                return function(r) {
                    var n;
                    n = e ? "object" == typeof r.event.data && r.event.data.hash ? r.event.data.hash : r.event.data : r.sourceObject.contentWindow.location.hash, t(null, n)
                }
            }, Kr.prototype.login = function(t, e) {
                var r, n;
                return r = i(this.baseOptions.rootUrl, "usernamepassword", "login"), t.username = t.username || t.email, t = Fe.blacklist(t, ["email", "onRedirecting"]), n = Fe.merge(this.baseOptions, ["clientID", "redirectUri", "tenant", "responseType", "responseMode", "scope", "audience"]).with(t), n = this.transactionManager.process(n), n = Fe.toSnakeCase(n, ["auth0Client"]), this.request.post(r).send(n).end(or(e))
            }, Kr.prototype.callback = function(t) {
                var e, r = $e.getDocument();
                (e = r.createElement("div")).innerHTML = t, r.body.appendChild(e).children[0].submit()
            }, Yr.prototype.login = function(t, e) {
                if ($e.getWindow().location.host !== this.baseOptions.domain) throw new Error("This method is meant to be used only inside the Universal Login Page.");
                var r, n = Fe.merge(this.baseOptions, ["clientID", "redirectUri", "tenant", "responseType", "responseMode", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(t);
                return qe.check(n, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    responseType: {
                        type: "string",
                        message: "responseType option is required"
                    }
                }), (r = new Kr(this.baseOptions)).login(n, (function(n, o) {
                    if (n) return e(n);

                    function i() {
                        r.callback(o)
                    }
                    if ("function" == typeof t.onRedirecting) return t.onRedirecting((function() {
                        i()
                    }));
                    i()
                }))
            }, Yr.prototype.signupAndLogin = function(t, e) {
                var r = this;
                return r.client.client.dbConnection.signup(t, (function(n) {
                    return n ? e(n) : r.login(t, e)
                }))
            }, Yr.prototype.getSSOData = function(t, e) {
                var r, n = "";
                return "function" == typeof t && (e = t, t = !1), qe.check(t, {
                    type: "boolean",
                    message: "withActiveDirectories parameter is not valid"
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), t && (n = "?" + ee({
                    ldaps: 1,
                    client_id: this.baseOptions.clientID
                })), r = i(this.baseOptions.rootUrl, "user", "ssodata", n), this.request.get(r, {
                    noHeaders: !0
                }).withCredentials().end(or(e))
            };
            var tn = function() {},
                en = {
                    lang: "en",
                    templates: {
                        auth0: function(t) {
                            var e = "code" === t.type ? "Enter the code shown above" : "Solve the formula shown above";
                            return '<div class="captcha-challenge">\n  <img src="' + t.image + '" />\n  <button type="button" class="captcha-reload">↺</button>\n</div>\n<input type="text" name="captcha"\n  class="form-control captcha-control"\n  placeholder="' + e + '" />'
                        },
                        recaptcha_v2: function() {
                            return '<div class="recaptcha" ></div><input type="hidden" name="captcha" />'
                        },
                        recaptcha_enterprise: function() {
                            return '<div class="recaptcha" ></div><input type="hidden" name="captcha" />'
                        },
                        error: function() {
                            return '<div class="error" style="color: red;">Error getting the bot detection challenge. Please contact the system administrator.</div>'
                        }
                    }
                };

            function rn(t) {
                switch (t) {
                    case "recaptcha_v2":
                        return window.grecaptcha;
                    case "recaptcha_enterprise":
                        return window.grecaptcha.enterprise;
                    default:
                        throw new Error("Unknown captcha provider")
                }
            }
            var nn = function(t, e, r, n) {
                function o(n) {
                    n = n || tn, t.getChallenge((function(t, i) {
                        return t ? (e.innerHTML = r.templates.error(t), n(t)) : i.required ? (e.style.display = "", "auth0" === i.provider ? function(t, e, r, n) {
                            t.innerHTML = e.templates[r.provider](r), t.querySelector(".captcha-reload").addEventListener("click", (function(t) {
                                t.preventDefault(), n()
                            }))
                        }(e, r, i, o) : "recaptcha_v2" !== i.provider && "recaptcha_enterprise" !== i.provider || function(t, e, r) {
                            var n = t.hasAttribute("data-wid") && t.getAttribute("data-wid");

                            function o(e) {
                                t.querySelector('input[name="captcha"]').value = e || ""
                            }
                            if (n) return o(), void rn(r.provider).reset(n);
                            t.innerHTML = e.templates[r.provider](r);
                            var i = t.querySelector(".recaptcha");
                            ! function(t, e, r) {
                                var n = "recaptchaCallback_" + Math.floor(1000001 * Math.random());
                                window[n] = function() {
                                    delete window[n], r()
                                };
                                var o = window.document.createElement("script");
                                o.src = function(t, e, r) {
                                    switch (t) {
                                        case "recaptcha_v2":
                                            return "https://www.recaptcha.net/recaptcha/api.js?hl=" + e + "&onload=" + r;
                                        case "recaptcha_enterprise":
                                            return "https://www.recaptcha.net/recaptcha/enterprise.js?render=explicit&hl=" + e + "&onload=" + r;
                                        default:
                                            throw new Error("Unknown captcha provider")
                                    }
                                }(e.provider, e.lang, n), o.async = !0, window.document.body.appendChild(o)
                            }(0, {
                                lang: e.lang,
                                provider: r.provider
                            }, (function() {
                                var e = rn(r.provider);
                                n = e.render(i, {
                                    callback: o,
                                    "expired-callback": function() {
                                        o()
                                    },
                                    "error-callback": function() {
                                        o()
                                    },
                                    sitekey: r.siteKey
                                }), t.setAttribute("data-wid", n)
                            }))
                        }(e, r, i), void n()) : (e.style.display = "none", void(e.innerHTML = ""))
                    }))
                }
                return r = Fe.merge(en).with(r || {}), o(n), {
                    reload: o,
                    getValue: function() {
                        var t = e.querySelector('input[name="captcha"]');
                        if (t) return t.value
                    }
                }
            };

            function on() {
                return new Date
            }

            function sn(t) {
                qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    domain: {
                        type: "string",
                        message: "domain option is required"
                    },
                    clientID: {
                        type: "string",
                        message: "clientID option is required"
                    },
                    responseType: {
                        optional: !0,
                        type: "string",
                        message: "responseType is not valid"
                    },
                    responseMode: {
                        optional: !0,
                        type: "string",
                        message: "responseMode is not valid"
                    },
                    redirectUri: {
                        optional: !0,
                        type: "string",
                        message: "redirectUri is not valid"
                    },
                    scope: {
                        optional: !0,
                        type: "string",
                        message: "scope is not valid"
                    },
                    audience: {
                        optional: !0,
                        type: "string",
                        message: "audience is not valid"
                    },
                    popupOrigin: {
                        optional: !0,
                        type: "string",
                        message: "popupOrigin is not valid"
                    },
                    leeway: {
                        optional: !0,
                        type: "number",
                        message: "leeway is not valid"
                    },
                    plugins: {
                        optional: !0,
                        type: "array",
                        message: "plugins is not valid"
                    },
                    maxAge: {
                        optional: !0,
                        type: "number",
                        message: "maxAge is not valid"
                    },
                    stateExpiration: {
                        optional: !0,
                        type: "number",
                        message: "stateExpiration is not valid"
                    },
                    legacySameSiteCookie: {
                        optional: !0,
                        type: "boolean",
                        message: "legacySameSiteCookie option is not valid"
                    },
                    _disableDeprecationWarnings: {
                        optional: !0,
                        type: "boolean",
                        message: "_disableDeprecationWarnings option is not valid"
                    },
                    _sendTelemetry: {
                        optional: !0,
                        type: "boolean",
                        message: "_sendTelemetry option is not valid"
                    },
                    _telemetryInfo: {
                        optional: !0,
                        type: "object",
                        message: "_telemetryInfo option is not valid"
                    },
                    _timesToRetryFailedRequests: {
                        optional: !0,
                        type: "number",
                        message: "_timesToRetryFailedRequests option is not valid"
                    }
                }), t.overrides && qe.check(t.overrides, {
                    type: "object",
                    message: "overrides option is not valid"
                }, {
                    __tenant: {
                        optional: !0,
                        type: "string",
                        message: "__tenant option is required"
                    },
                    __token_issuer: {
                        optional: !0,
                        type: "string",
                        message: "__token_issuer option is required"
                    },
                    __jwks_uri: {
                        optional: !0,
                        type: "string",
                        message: "__jwks_uri is required"
                    }
                }), this.baseOptions = t, this.baseOptions.plugins = new Br(this, this.baseOptions.plugins || []), this.baseOptions._sendTelemetry = !1 !== this.baseOptions._sendTelemetry || this.baseOptions._sendTelemetry, this.baseOptions._timesToRetryFailedRequests = t._timesToRetryFailedRequests ? parseInt(t._timesToRetryFailedRequests) : 0, this.baseOptions.tenant = this.baseOptions.overrides && this.baseOptions.overrides.__tenant || this.baseOptions.domain.split(".")[0], this.baseOptions.token_issuer = this.baseOptions.overrides && this.baseOptions.overrides.__token_issuer || "https://" + this.baseOptions.domain + "/", this.baseOptions.jwksURI = this.baseOptions.overrides && this.baseOptions.overrides.__jwks_uri, !1 !== t.legacySameSiteCookie && (this.baseOptions.legacySameSiteCookie = !0), this.transactionManager = new Hr(this.baseOptions), this.client = new pn(this.baseOptions), this.redirect = new Jr(this, this.baseOptions), this.popup = new Qr(this, this.baseOptions), this.crossOriginAuthentication = new zr(this, this.baseOptions), this.webMessageHandler = new Wr(this), this._universalLogin = new Yr(this, this.baseOptions), this.ssodataStorage = new er(this.baseOptions)
            }

            function an(t, e) {
                this.baseOptions = e, this.request = t
            }

            function un(t, e) {
                this.baseOptions = e, this.request = t
            }

            function pn(t, e) {
                2 === arguments.length ? this.auth0 = t : e = t, qe.check(e, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    domain: {
                        type: "string",
                        message: "domain option is required"
                    },
                    clientID: {
                        type: "string",
                        message: "clientID option is required"
                    },
                    responseType: {
                        optional: !0,
                        type: "string",
                        message: "responseType is not valid"
                    },
                    responseMode: {
                        optional: !0,
                        type: "string",
                        message: "responseMode is not valid"
                    },
                    redirectUri: {
                        optional: !0,
                        type: "string",
                        message: "redirectUri is not valid"
                    },
                    scope: {
                        optional: !0,
                        type: "string",
                        message: "scope is not valid"
                    },
                    audience: {
                        optional: !0,
                        type: "string",
                        message: "audience is not valid"
                    },
                    _disableDeprecationWarnings: {
                        optional: !0,
                        type: "boolean",
                        message: "_disableDeprecationWarnings option is not valid"
                    },
                    _sendTelemetry: {
                        optional: !0,
                        type: "boolean",
                        message: "_sendTelemetry option is not valid"
                    },
                    _telemetryInfo: {
                        optional: !0,
                        type: "object",
                        message: "_telemetryInfo option is not valid"
                    }
                }), this.baseOptions = e, this.baseOptions._sendTelemetry = !1 !== this.baseOptions._sendTelemetry || this.baseOptions._sendTelemetry, this.baseOptions.rootUrl = this.baseOptions.domain && 0 === this.baseOptions.domain.toLowerCase().indexOf("http") ? this.baseOptions.domain : "https://" + this.baseOptions.domain, this.request = new Ve(this.baseOptions), this.passwordless = new an(this.request, this.baseOptions), this.dbConnection = new un(this.request, this.baseOptions), this.warn = new Ke({
                    disableWarnings: !!e._disableDeprecationWarnings
                }), this.ssodataStorage = new er(this.baseOptions)
            }

            function cn(t) {
                qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    domain: {
                        type: "string",
                        message: "domain option is required"
                    },
                    token: {
                        type: "string",
                        message: "token option is required"
                    },
                    _sendTelemetry: {
                        optional: !0,
                        type: "boolean",
                        message: "_sendTelemetry option is not valid"
                    },
                    _telemetryInfo: {
                        optional: !0,
                        type: "object",
                        message: "_telemetryInfo option is not valid"
                    }
                }), this.baseOptions = t, this.baseOptions.headers = {
                    Authorization: "Bearer " + this.baseOptions.token
                }, this.request = new Ve(this.baseOptions), this.baseOptions.rootUrl = i("https://" + this.baseOptions.domain, "api", "v2")
            }
            sn.prototype.parseHash = function(t, e) {
                var r, n;
                e || "function" != typeof t ? t = t || {} : (e = t, t = {});
                var o = void 0 === t.hash ? $e.getWindow().location.hash : t.hash;
                if ((r = function(t, e) {
                        var r = function(t) {
                            if (!t) return Zt;
                            if (null !== t.decoder && void 0 !== t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
                            if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                            var e = void 0 === t.charset ? Zt.charset : t.charset;
                            return {
                                allowDots: void 0 === t.allowDots ? Zt.allowDots : !!t.allowDots,
                                allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : Zt.allowPrototypes,
                                allowSparse: "boolean" == typeof t.allowSparse ? t.allowSparse : Zt.allowSparse,
                                arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : Zt.arrayLimit,
                                charset: e,
                                charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : Zt.charsetSentinel,
                                comma: "boolean" == typeof t.comma ? t.comma : Zt.comma,
                                decoder: "function" == typeof t.decoder ? t.decoder : Zt.decoder,
                                delimiter: "string" == typeof t.delimiter || Bt.isRegExp(t.delimiter) ? t.delimiter : Zt.delimiter,
                                depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : Zt.depth,
                                ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                                interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : Zt.interpretNumericEntities,
                                parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : Zt.parameterLimit,
                                parseArrays: !1 !== t.parseArrays,
                                plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : Zt.plainObjects,
                                strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : Zt.strictNullHandling
                            }
                        }(e);
                        if ("" === t || null == t) return r.plainObjects ? Object.create(null) : {};
                        for (var n = "string" == typeof t ? function(t, e) {
                                var r, n = {},
                                    o = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                                    i = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
                                    s = o.split(e.delimiter, i),
                                    a = -1,
                                    u = e.charset;
                                if (e.charsetSentinel)
                                    for (r = 0; r < s.length; ++r) 0 === s[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === s[r] ? u = "utf-8" : "utf8=%26%2310003%3B" === s[r] && (u = "iso-8859-1"), a = r, r = s.length);
                                for (r = 0; r < s.length; ++r)
                                    if (r !== a) {
                                        var p, c, l = s[r],
                                            h = l.indexOf("]="),
                                            f = -1 === h ? l.indexOf("=") : h + 1; - 1 === f ? (p = e.decoder(l, Zt.decoder, u, "key"), c = e.strictNullHandling ? null : "") : (p = e.decoder(l.slice(0, f), Zt.decoder, u, "key"), c = Bt.maybeMap(Yt(l.slice(f + 1), e), (function(t) {
                                            return e.decoder(t, Zt.decoder, u, "value")
                                        }))), c && e.interpretNumericEntities && "iso-8859-1" === u && (c = Kt(c)), l.indexOf("[]=") > -1 && (c = Qt(c) ? [c] : c), Xt.call(n, p) ? n[p] = Bt.combine(n[p], c) : n[p] = c
                                    }
                                return n
                            }(t, r) : t, o = r.plainObjects ? Object.create(null) : {}, i = Object.keys(n), s = 0; s < i.length; ++s) {
                            var a = i[s],
                                u = te(a, n[a], r, "string" == typeof t);
                            o = Bt.merge(o, u, r)
                        }
                        return !0 === r.allowSparse ? o : Bt.compact(o)
                    }(o = o.replace(/^#?\/?/, ""))).hasOwnProperty("error")) return n = nr.buildResponse(r.error, r.error_description), r.state && (n.state = r.state), e(n);
                if (!r.hasOwnProperty("access_token") && !r.hasOwnProperty("id_token") && !r.hasOwnProperty("refresh_token")) return e(null, null);
                var i = (this.baseOptions.responseType || t.responseType || "").split(" ");
                return i.length > 0 && -1 !== i.indexOf("token") && !r.hasOwnProperty("access_token") ? e(nr.buildResponse("invalid_hash", "response_type contains `token`, but the parsed hash does not contain an `access_token` property")) : i.length > 0 && -1 !== i.indexOf("id_token") && !r.hasOwnProperty("id_token") ? e(nr.buildResponse("invalid_hash", "response_type contains `id_token`, but the parsed hash does not contain an `id_token` property")) : this.validateAuthenticationResponse(t, r, e)
            }, sn.prototype.validateAuthenticationResponse = function(t, e, r) {
                var n = this;
                t.__enableIdPInitiatedLogin = t.__enableIdPInitiatedLogin || t.__enableImpersonation;
                var o = e.state,
                    i = this.transactionManager.getStoredTransaction(o),
                    s = t.state || i && i.state || null,
                    a = s === o;
                if ((o || s || !t.__enableIdPInitiatedLogin) && !a) return r({
                    error: "invalid_token",
                    errorDescription: "`state` does not match."
                });
                var u = t.nonce || i && i.nonce || null,
                    p = i && i.organization,
                    c = t.state || i && i.appState || null,
                    l = function(t, o) {
                        return t ? r(t) : (i && i.lastUsedConnection && (o && (s = o.sub), n.ssodataStorage.set(i.lastUsedConnection, s)), r(null, function(t, e, r) {
                            return {
                                accessToken: t.access_token || null,
                                idToken: t.id_token || null,
                                idTokenPayload: r || null,
                                appState: e || null,
                                refreshToken: t.refresh_token || null,
                                state: t.state || null,
                                expiresIn: t.expires_in ? parseInt(t.expires_in, 10) : null,
                                tokenType: t.token_type || null,
                                scope: t.scope || null
                            }
                        }(e, c, o)));
                        var s
                    };
                return e.id_token ? this.validateToken(e.id_token, u, (function(t, r) {
                    if (!t) {
                        if (p) {
                            if (!r.org_id) return l(nr.invalidToken("Organization Id (org_id) claim must be a string present in the ID token"));
                            if (r.org_id !== p) return l(nr.invalidToken('Organization Id (org_id) claim value mismatch in the ID token; expected "' + p + '", found "' + r.org_id + '"'))
                        }
                        return e.access_token && r.at_hash ? (new Lr).validateAccessToken(e.access_token, "RS256", r.at_hash, (function(t) {
                            return t ? l(nr.invalidToken(t.message)) : l(null, r)
                        })) : l(null, r)
                    }
                    if ("invalid_token" !== t.error || t.errorDescription && t.errorDescription.indexOf("Nonce (nonce) claim value mismatch in the ID token") > -1) return l(t);
                    var o = (new Lr).decode(e.id_token);
                    return "HS256" !== o.header.alg ? l(t) : (o.payload.nonce || null) !== u ? l({
                        error: "invalid_token",
                        errorDescription: 'Nonce (nonce) claim value mismatch in the ID token; expected "' + u + '", found "' + o.payload.nonce + '"'
                    }) : e.access_token ? n.client.userInfo(e.access_token, (function(t, e) {
                        return t ? l(t) : l(null, e)
                    })) : l({
                        error: "invalid_token",
                        description: "The id_token cannot be validated because it was signed with the HS256 algorithm and public clients (like a browser) can’t store secrets. Please read the associated doc for possible ways to fix this. Read more: https://auth0.com/docs/errors/libraries/auth0-js/invalid-token#parsing-an-hs256-signed-id-token-without-an-access-token"
                    })
                })) : l(null, null)
            }, sn.prototype.validateToken = function(t, e, r) {
                new Lr({
                    issuer: this.baseOptions.token_issuer,
                    jwksURI: this.baseOptions.jwksURI,
                    audience: this.baseOptions.clientID,
                    leeway: this.baseOptions.leeway || 60,
                    maxAge: this.baseOptions.maxAge,
                    __clock: this.baseOptions.__clock || on
                }).verify(t, e, (function(t, e) {
                    if (t) return r(nr.invalidToken(t.message));
                    r(null, e)
                }))
            }, sn.prototype.renewAuth = function(t, e) {
                var r = !!t.usePostMessage,
                    n = t.postMessageDataType || !1,
                    o = t.postMessageOrigin || $e.getWindow().origin,
                    i = t.timeout,
                    s = this,
                    a = Fe.merge(this.baseOptions, ["clientID", "redirectUri", "responseType", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(t);
                a.responseType = a.responseType || "token", a.responseMode = a.responseMode || "fragment", a = this.transactionManager.process(a), qe.check(a, {
                    type: "object",
                    message: "options parameter is not valid"
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), a.prompt = "none", a = Fe.blacklist(a, ["usePostMessage", "tenant", "postMessageDataType", "postMessageOrigin"]), Zr.create({
                    authenticationUrl: this.client.buildAuthorizeUrl(a),
                    postMessageDataType: n,
                    postMessageOrigin: o,
                    timeout: i
                }).login(r, (function(t, r) {
                    if ("object" == typeof r) return e(t, r);
                    s.parseHash({
                        hash: r
                    }, e)
                }))
            }, sn.prototype.checkSession = function(t, e) {
                var r = Fe.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(t);
                return "code" === r.responseType ? e({
                    error: "error",
                    error_description: "responseType can't be `code`"
                }) : (t.nonce || (r = this.transactionManager.process(r)), r.redirectUri ? (qe.check(r, {
                    type: "object",
                    message: "options parameter is not valid"
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), r = Fe.blacklist(r, ["usePostMessage", "tenant", "postMessageDataType"]), void this.webMessageHandler.run(r, or(e, {
                    forceLegacyError: !0,
                    ignoreCasing: !0
                }))) : e({
                    error: "error",
                    error_description: "redirectUri can't be empty"
                }))
            }, sn.prototype.changePassword = function(t, e) {
                return this.client.dbConnection.changePassword(t, e)
            }, sn.prototype.passwordlessStart = function(t, e) {
                var r = Fe.merge(this.baseOptions, ["responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(t.authParams);
                return t.authParams = this.transactionManager.process(r), this.client.passwordless.start(t, e)
            }, sn.prototype.signup = function(t, e) {
                return this.client.dbConnection.signup(t, e)
            }, sn.prototype.authorize = function(t) {
                var e = Fe.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "organization", "invitation"]).with(t);
                qe.check(e, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    responseType: {
                        type: "string",
                        message: "responseType option is required"
                    }
                }), (e = this.transactionManager.process(e)).scope = e.scope || "openid profile email", $e.redirect(this.client.buildAuthorizeUrl(e))
            }, sn.prototype.signupAndAuthorize = function(t, e) {
                var r = this;
                return this.client.dbConnection.signup(Fe.blacklist(t, ["popupHandler"]), (function(n) {
                    if (n) return e(n);
                    t.realm = t.connection, t.username || (t.username = t.email), r.client.login(t, e)
                }))
            }, sn.prototype.login = function(t, e) {
                var r = Fe.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "onRedirecting", "organization", "invitation"]).with(t);
                r = this.transactionManager.process(r), $e.getWindow().location.host === this.baseOptions.domain ? (r.connection = r.realm, delete r.realm, this._universalLogin.login(r, e)) : this.crossOriginAuthentication.login(r, e)
            }, sn.prototype.passwordlessLogin = function(t, e) {
                var r = Fe.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "onRedirecting"]).with(t);
                if (r = this.transactionManager.process(r), $e.getWindow().location.host === this.baseOptions.domain) this.passwordlessVerify(r, e);
                else {
                    var n = Fe.extend({
                        credentialType: "http://auth0.com/oauth/grant-type/passwordless/otp",
                        realm: r.connection,
                        username: r.email || r.phoneNumber,
                        otp: r.verificationCode
                    }, Fe.blacklist(r, ["connection", "email", "phoneNumber", "verificationCode"]));
                    this.crossOriginAuthentication.login(n, e)
                }
            }, sn.prototype.crossOriginAuthenticationCallback = function() {
                this.crossOriginVerification()
            }, sn.prototype.crossOriginVerification = function() {
                this.crossOriginAuthentication.callback()
            }, sn.prototype.logout = function(t) {
                $e.redirect(this.client.buildLogoutUrl(t))
            }, sn.prototype.passwordlessVerify = function(t, e) {
                var r = this,
                    n = Fe.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "onRedirecting"]).with(t);
                return qe.check(n, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    responseType: {
                        type: "string",
                        message: "responseType option is required"
                    }
                }), n = this.transactionManager.process(n), this.client.passwordless.verify(n, (function(o) {
                    if (o) return e(o);

                    function i() {
                        $e.redirect(r.client.passwordless.buildVerifyUrl(n))
                    }
                    if ("function" == typeof t.onRedirecting) return t.onRedirecting((function() {
                        i()
                    }));
                    i()
                }))
            }, sn.prototype.renderCaptcha = function(t, e, r) {
                return nn(this.client, t, e, r)
            }, an.prototype.buildVerifyUrl = function(t) {
                var e, r;
                return qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    connection: {
                        type: "string",
                        message: "connection option is required"
                    },
                    verificationCode: {
                        type: "string",
                        message: "verificationCode option is required"
                    },
                    phoneNumber: {
                        optional: !1,
                        type: "string",
                        message: "phoneNumber option is required",
                        condition: function(t) {
                            return !t.email
                        }
                    },
                    email: {
                        optional: !1,
                        type: "string",
                        message: "email option is required",
                        condition: function(t) {
                            return !t.phoneNumber
                        }
                    }
                }), e = Fe.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "protocol", "nonce"]).with(t), this.baseOptions._sendTelemetry && (e.auth0Client = this.request.getTelemetryData()), e = Fe.toSnakeCase(e, ["auth0Client"]), r = ee(e), i(this.baseOptions.rootUrl, "passwordless", "verify_redirect", "?" + r)
            }, an.prototype.start = function(t, e) {
                var r, n;
                qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    connection: {
                        type: "string",
                        message: "connection option is required"
                    },
                    send: {
                        type: "string",
                        message: "send option is required",
                        values: ["link", "code"],
                        value_message: "send is not valid ([link, code])"
                    },
                    phoneNumber: {
                        optional: !0,
                        type: "string",
                        message: "phoneNumber option is required",
                        condition: function(t) {
                            return "code" === t.send || !t.email
                        }
                    },
                    email: {
                        optional: !0,
                        type: "string",
                        message: "email option is required",
                        condition: function(t) {
                            return "link" === t.send || !t.phoneNumber
                        }
                    },
                    authParams: {
                        optional: !0,
                        type: "object",
                        message: "authParams option is required"
                    }
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), r = i(this.baseOptions.rootUrl, "passwordless", "start");
                var o = t.xRequestLanguage;
                delete t.xRequestLanguage, (n = Fe.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope"]).with(t)).scope && (n.authParams = n.authParams || {}, n.authParams.scope = n.authParams.scope || n.scope), n.redirectUri && (n.authParams = n.authParams || {}, n.authParams.redirect_uri = n.authParams.redirectUri || n.redirectUri), n.responseType && (n.authParams = n.authParams || {}, n.authParams.response_type = n.authParams.responseType || n.responseType), delete n.redirectUri, delete n.responseType, delete n.scope, n = Fe.toSnakeCase(n, ["auth0Client", "authParams"]);
                var s = o ? {
                    xRequestLanguage: o
                } : void 0;
                return this.request.post(r, s).send(n).end(or(e))
            }, an.prototype.verify = function(t, e) {
                var r, n;
                return qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    connection: {
                        type: "string",
                        message: "connection option is required"
                    },
                    verificationCode: {
                        type: "string",
                        message: "verificationCode option is required"
                    },
                    phoneNumber: {
                        optional: !1,
                        type: "string",
                        message: "phoneNumber option is required",
                        condition: function(t) {
                            return !t.email
                        }
                    },
                    email: {
                        optional: !1,
                        type: "string",
                        message: "email option is required",
                        condition: function(t) {
                            return !t.phoneNumber
                        }
                    }
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), n = Fe.pick(t, ["connection", "verificationCode", "phoneNumber", "email", "auth0Client", "clientID"]), n = Fe.toSnakeCase(n, ["auth0Client"]), r = i(this.baseOptions.rootUrl, "passwordless", "verify"), this.request.post(r).send(n).end(or(e))
            }, un.prototype.signup = function(t, e) {
                var r, n, o;
                return qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    connection: {
                        type: "string",
                        message: "connection option is required"
                    },
                    email: {
                        type: "string",
                        message: "email option is required"
                    },
                    password: {
                        type: "string",
                        message: "password option is required"
                    }
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), r = i(this.baseOptions.rootUrl, "dbconnections", "signup"), o = (n = Fe.merge(this.baseOptions, ["clientID", "state"]).with(t)).user_metadata || n.userMetadata, n = Fe.blacklist(n, ["scope", "userMetadata", "user_metadata"]), n = Fe.toSnakeCase(n, ["auth0Client"]), o && (n.user_metadata = o), this.request.post(r).send(n).end(or(e))
            }, un.prototype.changePassword = function(t, e) {
                var r, n;
                return qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    connection: {
                        type: "string",
                        message: "connection option is required"
                    },
                    email: {
                        type: "string",
                        message: "email option is required"
                    }
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), r = i(this.baseOptions.rootUrl, "dbconnections", "change_password"), n = Fe.merge(this.baseOptions, ["clientID"]).with(t, ["email", "connection"]), n = Fe.toSnakeCase(n, ["auth0Client"]), this.request.post(r).send(n).end(or(e))
            }, pn.prototype.buildAuthorizeUrl = function(t) {
                var e, r;
                return qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }), e = Fe.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience"]).with(t), qe.check(e, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    clientID: {
                        type: "string",
                        message: "clientID option is required"
                    },
                    redirectUri: {
                        optional: !0,
                        type: "string",
                        message: "redirectUri option is required"
                    },
                    responseType: {
                        type: "string",
                        message: "responseType option is required"
                    },
                    nonce: {
                        type: "string",
                        message: "nonce option is required",
                        condition: function(t) {
                            return -1 === t.responseType.indexOf("code") && -1 !== t.responseType.indexOf("id_token")
                        }
                    },
                    scope: {
                        optional: !0,
                        type: "string",
                        message: "scope option is required"
                    },
                    audience: {
                        optional: !0,
                        type: "string",
                        message: "audience option is required"
                    }
                }), this.baseOptions._sendTelemetry && (e.auth0Client = this.request.getTelemetryData()), e.connection_scope && qe.isArray(e.connection_scope) && (e.connection_scope = e.connection_scope.join(",")), e = Fe.blacklist(e, ["username", "popupOptions", "domain", "tenant", "timeout", "appState"]), e = Fe.toSnakeCase(e, ["auth0Client"]), e = ur(this.warn, e), r = ee(e), i(this.baseOptions.rootUrl, "authorize", "?" + r)
            }, pn.prototype.buildLogoutUrl = function(t) {
                var e, r;
                return qe.check(t, {
                    optional: !0,
                    type: "object",
                    message: "options parameter is not valid"
                }), e = Fe.merge(this.baseOptions, ["clientID"]).with(t || {}), this.baseOptions._sendTelemetry && (e.auth0Client = this.request.getTelemetryData()), e = Fe.toSnakeCase(e, ["auth0Client", "returnTo"]), r = ee(Fe.blacklist(e, ["federated"])), t && void 0 !== t.federated && !1 !== t.federated && "false" !== t.federated && (r += "&federated"), i(this.baseOptions.rootUrl, "v2", "logout", "?" + r)
            }, pn.prototype.loginWithDefaultDirectory = function(t, e) {
                return qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    username: {
                        type: "string",
                        message: "username option is required"
                    },
                    password: {
                        type: "string",
                        message: "password option is required"
                    },
                    scope: {
                        optional: !0,
                        type: "string",
                        message: "scope option is required"
                    },
                    audience: {
                        optional: !0,
                        type: "string",
                        message: "audience option is required"
                    }
                }), t.grantType = "password", this.oauthToken(t, e)
            }, pn.prototype.login = function(t, e) {
                return qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    username: {
                        type: "string",
                        message: "username option is required"
                    },
                    password: {
                        type: "string",
                        message: "password option is required"
                    },
                    realm: {
                        type: "string",
                        message: "realm option is required"
                    },
                    scope: {
                        optional: !0,
                        type: "string",
                        message: "scope option is required"
                    },
                    audience: {
                        optional: !0,
                        type: "string",
                        message: "audience option is required"
                    }
                }), t.grantType = "http://auth0.com/oauth/grant-type/password-realm", this.oauthToken(t, e)
            }, pn.prototype.oauthToken = function(t, e) {
                var r, n;
                return qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), r = i(this.baseOptions.rootUrl, "oauth", "token"), n = Fe.merge(this.baseOptions, ["clientID", "scope", "audience"]).with(t), qe.check(n, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    clientID: {
                        type: "string",
                        message: "clientID option is required"
                    },
                    grantType: {
                        type: "string",
                        message: "grantType option is required"
                    },
                    scope: {
                        optional: !0,
                        type: "string",
                        message: "scope option is required"
                    },
                    audience: {
                        optional: !0,
                        type: "string",
                        message: "audience option is required"
                    }
                }), n = Fe.toSnakeCase(n, ["auth0Client"]), n = ar(this.warn, n), this.request.post(r).send(n).end(or(e))
            }, pn.prototype.loginWithResourceOwner = function(t, e) {
                var r, n;
                return qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    username: {
                        type: "string",
                        message: "username option is required"
                    },
                    password: {
                        type: "string",
                        message: "password option is required"
                    },
                    connection: {
                        type: "string",
                        message: "connection option is required"
                    },
                    scope: {
                        optional: !0,
                        type: "string",
                        message: "scope option is required"
                    }
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), r = i(this.baseOptions.rootUrl, "oauth", "ro"), n = Fe.merge(this.baseOptions, ["clientID", "scope"]).with(t, ["username", "password", "scope", "connection", "device"]), (n = Fe.toSnakeCase(n, ["auth0Client"])).grant_type = n.grant_type || "password", this.request.post(r).send(n).end(or(e))
            }, pn.prototype.getSSOData = function(t, e) {
                if (this.auth0 || (this.auth0 = new sn(this.baseOptions)), $e.getWindow().location.host === this.baseOptions.domain) return this.auth0._universalLogin.getSSOData(t, e);
                "function" == typeof t && (e = t), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                });
                var r = this.baseOptions.clientID,
                    n = this.ssodataStorage.get() || {};
                this.auth0.checkSession({
                    responseType: "token id_token",
                    scope: "openid profile email",
                    connection: n.lastUsedConnection,
                    timeout: 5e3
                }, (function(t, o) {
                    return t ? "login_required" === t.error ? e(null, {
                        sso: !1
                    }) : ("consent_required" === t.error && (t.error_description = "Consent required. When using `getSSOData`, the user has to be authenticated with the following scope: `openid profile email`."), e(t, {
                        sso: !1
                    })) : n.lastUsedSub && n.lastUsedSub !== o.idTokenPayload.sub ? e(t, {
                        sso: !1
                    }) : e(null, {
                        lastUsedConnection: {
                            name: n.lastUsedConnection
                        },
                        lastUsedUserID: o.idTokenPayload.sub,
                        lastUsedUsername: o.idTokenPayload.email || o.idTokenPayload.name,
                        lastUsedClientID: r,
                        sessionClients: [r],
                        sso: !0
                    })
                }))
            }, pn.prototype.userInfo = function(t, e) {
                var r;
                return qe.check(t, {
                    type: "string",
                    message: "accessToken parameter is not valid"
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), r = i(this.baseOptions.rootUrl, "userinfo"), this.request.get(r).set("Authorization", "Bearer " + t).end(or(e, {
                    ignoreCasing: !0
                }))
            }, pn.prototype.getChallenge = function(t) {
                if (qe.check(t, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), !this.baseOptions.state) return t();
                var e = i(this.baseOptions.rootUrl, "usernamepassword", "challenge");
                return this.request.post(e).send({
                    state: this.baseOptions.state
                }).end(or(t, {
                    ignoreCasing: !0
                }))
            }, pn.prototype.delegation = function(t, e) {
                var r, n;
                return qe.check(t, {
                    type: "object",
                    message: "options parameter is not valid"
                }, {
                    grant_type: {
                        type: "string",
                        message: "grant_type option is required"
                    }
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), r = i(this.baseOptions.rootUrl, "delegation"), n = Fe.merge(this.baseOptions, ["clientID"]).with(t), n = Fe.toSnakeCase(n, ["auth0Client"]), this.request.post(r).send(n).end(or(e))
            }, pn.prototype.getUserCountry = function(t) {
                var e;
                return qe.check(t, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), e = i(this.baseOptions.rootUrl, "user", "geoloc", "country"), this.request.get(e).end(or(t))
            }, cn.prototype.getUser = function(t, e) {
                var r;
                return qe.check(t, {
                    type: "string",
                    message: "userId parameter is not valid"
                }), qe.check(e, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), r = i(this.baseOptions.rootUrl, "users", t), this.request.get(r).end(or(e, {
                    ignoreCasing: !0
                }))
            }, cn.prototype.patchUserMetadata = function(t, e, r) {
                var n;
                return qe.check(t, {
                    type: "string",
                    message: "userId parameter is not valid"
                }), qe.check(e, {
                    type: "object",
                    message: "userMetadata parameter is not valid"
                }), qe.check(r, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), n = i(this.baseOptions.rootUrl, "users", t), this.request.patch(n).send({
                    user_metadata: e
                }).end(or(r, {
                    ignoreCasing: !0
                }))
            }, cn.prototype.patchUserAttributes = function(t, e, r) {
                var n;
                return qe.check(t, {
                    type: "string",
                    message: "userId parameter is not valid"
                }), qe.check(e, {
                    type: "object",
                    message: "user parameter is not valid"
                }), qe.check(r, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), n = i(this.baseOptions.rootUrl, "users", t), this.request.patch(n).send(e).end(or(r, {
                    ignoreCasing: !0
                }))
            }, cn.prototype.linkUser = function(t, e, r) {
                var n;
                return qe.check(t, {
                    type: "string",
                    message: "userId parameter is not valid"
                }), qe.check(e, {
                    type: "string",
                    message: "secondaryUserToken parameter is not valid"
                }), qe.check(r, {
                    type: "function",
                    message: "cb parameter is not valid"
                }), n = i(this.baseOptions.rootUrl, "users", t, "identities"), this.request.post(n).send({
                    link_with: e
                }).end(or(r, {
                    ignoreCasing: !0
                }))
            };
            var ln = {
                Authentication: pn,
                Management: cn,
                WebAuth: sn,
                version: Ce
            };
            e.default = ln
        }
    }
]);
//# sourceMappingURL=9e82d048-601f8a61dd32918c00e4.js.map