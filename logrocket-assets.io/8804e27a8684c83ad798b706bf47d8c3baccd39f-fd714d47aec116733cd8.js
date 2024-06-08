"use strict";
(self.webpackChunklogrocket_web = self.webpackChunklogrocket_web || []).push([
    [507], {
        54667: function(e, n, r) {
            r.d(n, {
                YI: function() {
                    return K
                }
            });
            var t = r(42982);

            function i(e, n) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, n) {
                            if (!e) return;
                            if ("string" == typeof e) return o(e, n);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, n)
                        }(e)) || n && e && "number" == typeof e.length) {
                        r && (e = r);
                        var t = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return t >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[t++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var l, c = !0,
                    u = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        u = !0, l = e
                    },
                    f: function() {
                        try {
                            c || null == r.return || r.return()
                        } finally {
                            if (u) throw l
                        }
                    }
                }
            }

            function o(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function l(e, n) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), r.push.apply(r, t)
                }
                return r
            }

            function c(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? l(Object(r), !0).forEach((function(n) {
                        u(e, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    }))
                }
                return e
            }

            function u(e, n, r) {
                return n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r, e
            }

            function a(e) {
                return "span" === e._type && "text" in e && "string" == typeof e.text && (void 0 === e.marks || Array.isArray(e.marks) && e.marks.every((function(e) {
                    return "string" == typeof e
                })))
            }

            function s(e) {
                return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || Array.isArray(e.markDefs) && e.markDefs.every((function(e) {
                    return "string" == typeof e._key
                }))) && "children" in e && Array.isArray(e.children) && e.children.every((function(e) {
                    return "object" == typeof e && "_type" in e
                }))
            }

            function f(e) {
                return s(e) && "listItem" in e && "string" == typeof e.listItem && (void 0 === e.level || "number" == typeof e.level)
            }

            function d(e) {
                return "@list" === e._type
            }

            function h(e) {
                return "@span" === e._type
            }

            function y(e) {
                return "@text" === e._type
            }
            var p = ["strong", "em", "code", "underline", "strike-through"];

            function v(e, n, r) {
                if (!a(e) || !e.marks) return [];
                if (!e.marks.length) return [];
                var t = e.marks.slice(),
                    i = {};
                return t.forEach((function(e) {
                    i[e] = 1;
                    for (var t = n + 1; t < r.length; t++) {
                        var o = r[t];
                        if (!(o && a(o) && Array.isArray(o.marks) && -1 !== o.marks.indexOf(e))) break;
                        i[e]++
                    }
                })), t.sort((function(e, n) {
                    return function(e, n, r) {
                        var t = e[n],
                            i = e[r];
                        if (t !== i) return i - t;
                        var o = p.indexOf(n),
                            l = p.indexOf(r);
                        if (o !== l) return o - l;
                        return n.localeCompare(r)
                    }(i, e, n)
                }))
            }

            function m(e, n) {
                return (e.level || 1) === n.level && e.listItem === n.listItem
            }

            function k(e, n, r) {
                return {
                    _type: "@list",
                    _key: "".concat(e._key || "".concat(n), "-parent"),
                    mode: r,
                    level: e.level || 1,
                    listItem: e.listItem,
                    children: [e]
                }
            }

            function b(e, n) {
                var r = n.level || 1,
                    t = n.listItem || "normal",
                    i = "string" == typeof n.listItem;
                if (d(e) && (e.level || 1) === r && i && (e.listItem || "normal") === t) return e;
                if ("children" in e) {
                    var o = e.children[e.children.length - 1];
                    return o && !a(o) ? b(o, n) : void 0
                }
            }

            function j(e) {
                var n = "";
                return e.children.forEach((function(e) {
                    y(e) ? n += e.text : h(e) && (n += j(e))
                })), n
            }
            var x = "html",
                g = r(85893),
                O = r(67294),
                I = ["block", "list", "listItem", "marks", "types"],
                w = ["listItem"],
                _ = ["_key"];

            function P(e, n) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), r.push.apply(r, t)
                }
                return r
            }

            function S(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? P(Object(r), !0).forEach((function(n) {
                        A(e, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    }))
                }
                return e
            }

            function A(e, n, r) {
                return n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r, e
            }

            function D(e, n) {
                if (null == e) return {};
                var r, t, i = function(e, n) {
                    if (null == e) return {};
                    var r, t, i = {},
                        o = Object.keys(e);
                    for (t = 0; t < o.length; t++) r = o[t], n.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < o.length; t++) r = o[t], n.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function N(e, n, r) {
                var t = n[r],
                    i = e[r];
                return "function" == typeof t || t && "function" == typeof i ? t : t ? S(S({}, i), t) : i
            }
            var T = {
                    textDecoration: "underline"
                },
                E = function(e, n) {
                    return "[@portabletext/react] Unknown ".concat(e, ", specify a component for it in the `components.").concat(n, "` prop")
                },
                M = function(e) {
                    return E('block type "'.concat(e, '"'), "types")
                };

            function L(e) {
                console.warn(e)
            }
            var B = {
                    display: "none"
                },
                C = {
                    types: {},
                    block: {
                        normal: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("p", {
                                children: n
                            })
                        },
                        blockquote: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("blockquote", {
                                children: n
                            })
                        },
                        h1: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("h1", {
                                children: n
                            })
                        },
                        h2: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("h2", {
                                children: n
                            })
                        },
                        h3: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("h3", {
                                children: n
                            })
                        },
                        h4: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("h4", {
                                children: n
                            })
                        },
                        h5: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("h5", {
                                children: n
                            })
                        },
                        h6: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("h6", {
                                children: n
                            })
                        }
                    },
                    marks: {
                        em: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("em", {
                                children: n
                            })
                        },
                        strong: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("strong", {
                                children: n
                            })
                        },
                        code: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("code", {
                                children: n
                            })
                        },
                        underline: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("span", {
                                style: T,
                                children: n
                            })
                        },
                        "strike-through": function(e) {
                            var n = e.children;
                            return (0, g.jsx)("del", {
                                children: n
                            })
                        },
                        link: function(e) {
                            var n = e.children,
                                r = e.value;
                            return (0, g.jsx)("a", {
                                href: null == r ? void 0 : r.href,
                                children: n
                            })
                        }
                    },
                    list: {
                        number: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("ol", {
                                children: n
                            })
                        },
                        bullet: function(e) {
                            var n = e.children;
                            return (0, g.jsx)("ul", {
                                children: n
                            })
                        }
                    },
                    listItem: function(e) {
                        var n = e.children;
                        return (0, g.jsx)("li", {
                            children: n
                        })
                    },
                    hardBreak: function() {
                        return (0, g.jsx)("br", {})
                    },
                    unknownType: function(e) {
                        var n = e.value,
                            r = e.isInline,
                            t = M(n._type);
                        return r ? (0, g.jsx)("span", {
                            style: B,
                            children: t
                        }) : (0, g.jsx)("div", {
                            style: B,
                            children: t
                        })
                    },
                    unknownMark: function(e) {
                        var n = e.markType,
                            r = e.children;
                        return (0, g.jsx)("span", {
                            className: "unknown__pt__mark__".concat(n),
                            children: r
                        })
                    },
                    unknownList: function(e) {
                        var n = e.children;
                        return (0, g.jsx)("ul", {
                            children: n
                        })
                    },
                    unknownListItem: function(e) {
                        var n = e.children;
                        return (0, g.jsx)("li", {
                            children: n
                        })
                    },
                    unknownBlockStyle: function(e) {
                        var n = e.children;
                        return (0, g.jsx)("p", {
                            children: n
                        })
                    }
                };

            function K(e) {
                var n = e.value,
                    r = e.components,
                    i = e.listNestingMode,
                    o = e.onMissingComponent,
                    l = (void 0 === o ? L : o) || F,
                    u = function(e, n) {
                        for (var r, i = [], o = 0; o < e.length; o++) {
                            var l = e[o];
                            if (l)
                                if (f(l))
                                    if (r)
                                        if (m(l, r)) r.children.push(l);
                                        else if ((l.level || 1) > r.level) {
                                var u = k(l, o, n);
                                if ("html" === n) {
                                    var a = r.children[r.children.length - 1],
                                        s = c(c({}, a), {}, {
                                            children: [].concat((0, t.Z)(a.children), [u])
                                        });
                                    r.children[r.children.length - 1] = s
                                } else r.children.push(u);
                                r = u
                            } else if ((l.level || 1) < r.level) {
                                var d = i[i.length - 1],
                                    h = d && b(d, l);
                                if (h) {
                                    (r = h).children.push(l);
                                    continue
                                }
                                r = k(l, o, n), i.push(r)
                            } else if (l.listItem === r.listItem) console.warn("Unknown state encountered for block", l), i.push(l);
                            else {
                                var y = i[i.length - 1],
                                    p = y && b(y, {
                                        level: l.level || 1
                                    });
                                if (p && p.listItem === l.listItem) {
                                    (r = p).children.push(l);
                                    continue
                                }
                                r = k(l, o, n), i.push(r)
                            } else r = k(l, o, n), i.push(r);
                            else i.push(l), r = void 0
                        }
                        return i
                    }(Array.isArray(n) ? n : [n], i || x),
                    a = (0, O.useMemo)((function() {
                        return r ? function(e, n) {
                            n.block, n.list, n.listItem, n.marks, n.types;
                            var r = D(n, I);
                            return S(S({}, e), {}, {
                                block: N(e, n, "block"),
                                list: N(e, n, "list"),
                                listItem: N(e, n, "listItem"),
                                marks: N(e, n, "marks"),
                                types: N(e, n, "types")
                            }, r)
                        }(C, r) : C
                    }), [r]),
                    s = (0, O.useMemo)((function() {
                        return U(a, l)
                    }), [a, l]),
                    d = u.map((function(e, n) {
                        return s({
                            node: e,
                            index: n,
                            isInline: !1,
                            renderNode: s
                        })
                    }));
                return (0, g.jsx)(g.Fragment, {
                    children: d
                })
            }
            var U = function(e, n) {
                function r(t) {
                    var i = t.node,
                        o = t.index,
                        l = t.isInline,
                        c = i._key || "node-".concat(o);
                    return d(i) ? function(t, i, o) {
                        var l = t.children.map((function(e, n) {
                                return r({
                                    node: e._key ? e : S(S({}, e), {}, {
                                        _key: "li-".concat(i, "-").concat(n)
                                    }),
                                    index: i,
                                    isInline: !1,
                                    renderNode: r
                                })
                            })),
                            c = e.list,
                            u = "function" == typeof c ? c : c[t.listItem],
                            a = u || e.unknownList;
                        if (a === e.unknownList) {
                            var s = t.listItem || "bullet";
                            n(E('list style "'.concat(s, '"'), "list"), {
                                nodeType: "listStyle",
                                type: s
                            })
                        }
                        return (0, g.jsx)(a, {
                            value: t,
                            index: i,
                            isInline: !1,
                            renderNode: r,
                            children: l
                        }, o)
                    }(i, o, c) : f(i) ? function(t, i, o) {
                        var l = q({
                                node: t,
                                index: i,
                                isInline: !1,
                                renderNode: r
                            }),
                            c = e.listItem,
                            u = "function" == typeof c ? c : c[t.listItem],
                            a = u || e.unknownListItem;
                        if (a === e.unknownListItem) {
                            var s = t.listItem || "bullet";
                            n(E('list item style "'.concat(s, '"'), "listItem"), {
                                type: s,
                                nodeType: "listItemStyle"
                            })
                        }
                        var f = l.children;
                        if (t.style && "normal" !== t.style) {
                            t.listItem;
                            f = r({
                                node: D(t, w),
                                index: i,
                                isInline: !1,
                                renderNode: r
                            })
                        }
                        return (0, g.jsx)(a, {
                            value: t,
                            index: i,
                            isInline: !1,
                            renderNode: r,
                            children: f
                        }, o)
                    }(i, o, c) : h(i) ? function(t, i, o) {
                        var l = t.markDef,
                            c = t.markType,
                            u = t.markKey,
                            a = e.marks[c] || e.unknownMark,
                            s = t.children.map((function(e, n) {
                                return r({
                                    node: e,
                                    index: n,
                                    isInline: !0,
                                    renderNode: r
                                })
                            }));
                        a === e.unknownMark && n(function(e) {
                            return E('mark type "'.concat(e, '"'), "marks")
                        }(c), {
                            nodeType: "mark",
                            type: c
                        });
                        return (0, g.jsx)(a, {
                            text: j(t),
                            value: l,
                            markType: c,
                            markKey: u,
                            renderNode: r,
                            children: s
                        }, o)
                    }(i, 0, c) : s(i) ? function(t, i, o, l) {
                        var c = q({
                                node: t,
                                index: i,
                                isInline: l,
                                renderNode: r
                            }),
                            u = (c._key, D(c, _)),
                            a = u.node.style || "normal",
                            s = ("function" == typeof e.block ? e.block : e.block[a]) || e.unknownBlockStyle;
                        s === e.unknownBlockStyle && n(E('block style "'.concat(a, '"'), "block"), {
                            nodeType: "blockStyle",
                            type: a
                        });
                        return (0, g.jsx)(s, S(S({}, u), {}, {
                            value: u.node,
                            renderNode: r
                        }), o)
                    }(i, o, c, l) : y(i) ? function(n, r) {
                        if ("\n" === n.text) {
                            var t = e.hardBreak;
                            return t ? (0, g.jsx)(t, {}, r) : "\n"
                        }
                        return n.text
                    }(i, c) : function(t, i, o, l) {
                        var c = e.types[t._type],
                            u = {
                                value: t,
                                isInline: l,
                                index: i,
                                renderNode: r
                            };
                        if (c) return (0, g.jsx)(c, S({}, u), o);
                        n(M(t._type), {
                            nodeType: "block",
                            type: t._type
                        });
                        var a = e.unknownType;
                        return (0, g.jsx)(a, S({}, u), o)
                    }(i, o, c, l)
                }
                return r
            };

            function q(e) {
                var n = e.node,
                    r = e.index,
                    t = e.isInline,
                    o = e.renderNode,
                    l = function(e) {
                        var n, r = e.children,
                            t = e.markDefs,
                            o = void 0 === t ? [] : t;
                        if (!r || !r.length) return [];
                        for (var l = r.map(v), c = {
                                _type: "@span",
                                children: [],
                                markType: "<unknown>"
                            }, u = [c], s = 0; s < r.length; s++) {
                            var f = r[s];
                            if (f) {
                                var d = l[s] || [],
                                    h = 1;
                                if (u.length > 1)
                                    for (; h < u.length; h++) {
                                        var y = (null == (n = u[h]) ? void 0 : n.markKey) || "",
                                            p = d.indexOf(y);
                                        if (-1 === p) break;
                                        d.splice(p, 1)
                                    }
                                var m = (u = u.slice(0, h))[u.length - 1];
                                if (m) {
                                    var k, b = i(d);
                                    try {
                                        var j = function() {
                                            var e = k.value,
                                                n = o.find((function(n) {
                                                    return n._key === e
                                                })),
                                                r = n ? n._type : e,
                                                t = {
                                                    _type: "@span",
                                                    _key: f._key,
                                                    children: [],
                                                    markDef: n,
                                                    markType: r,
                                                    markKey: e
                                                };
                                            m.children.push(t), u.push(t), m = t
                                        };
                                        for (b.s(); !(k = b.n()).done;) j()
                                    } catch (O) {
                                        b.e(O)
                                    } finally {
                                        b.f()
                                    }
                                    if (a(f)) {
                                        for (var x = f.text.split("\n"), g = x.length; g-- > 1;) x.splice(g, 0, "\n");
                                        m.children = m.children.concat(x.map((function(e) {
                                            return {
                                                _type: "@text",
                                                text: e
                                            }
                                        })))
                                    } else m.children = m.children.concat(f)
                                }
                            }
                        }
                        return c.children
                    }(n),
                    c = l.map((function(e, n) {
                        return o({
                            node: e,
                            isInline: !0,
                            index: n,
                            renderNode: o
                        })
                    }));
                return {
                    _key: n._key || "block-".concat(r),
                    children: c,
                    index: r,
                    isInline: t,
                    node: n
                }
            }

            function F() {}
        }
    }
]);
//# sourceMappingURL=8804e27a8684c83ad798b706bf47d8c3baccd39f-fd714d47aec116733cd8.js.map