/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
(window.Modernizr = (function (a, b, c) {
    function z(a) {
        j.cssText = a;
    }
    function A(a, b) {
        return z(m.join(a + ";") + (b || ""));
    }
    function B(a, b) {
        return typeof a === b;
    }
    function C(a, b) {
        return !!~("" + a).indexOf(b);
    }
    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
        }
        return !1;
    }
    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f;
        }
        return !1;
    }
    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined")
            ? D(e, b)
            : ((e = (a + " " + p.join(d + " ") + d).split(" ")), E(e, b, c));
    }
    var d = "2.6.2",
        e = {},
        f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k,
        l = {}.toString,
        m = " -webkit- -moz- -o- -ms- ".split(" "),
        n = "Webkit Moz O ms",
        o = n.split(" "),
        p = n.toLowerCase().split(" "),
        q = {},
        r = {},
        s = {},
        t = [],
        u = t.slice,
        v,
        w = function (a, c, d, e) {
            var f,
                i,
                j,
                k,
                l = b.createElement("div"),
                m = b.body,
                n = m || b.createElement("body");
            if (parseInt(d, 10))
                while (d--)
                    (j = b.createElement("div")),
                        (j.id = e ? e[d] : h + (d + 1)),
                        l.appendChild(j);
            return (
                (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(
                    ""
                )),
                (l.id = h),
                ((m ? l : n).innerHTML += f),
                n.appendChild(l),
                m ||
                    ((n.style.background = ""),
                    (n.style.overflow = "hidden"),
                    (k = g.style.overflow),
                    (g.style.overflow = "hidden"),
                    g.appendChild(n)),
                (i = c(l, a)),
                m
                    ? l.parentNode.removeChild(l)
                    : (n.parentNode.removeChild(n), (g.style.overflow = k)),
                !!i
            );
        },
        x = {}.hasOwnProperty,
        y;
    !B(x, "undefined") && !B(x.call, "undefined")
        ? (y = function (a, b) {
              return x.call(a, b);
          })
        : (y = function (a, b) {
              return b in a && B(a.constructor.prototype[b], "undefined");
          }),
        Function.prototype.bind ||
            (Function.prototype.bind = function (b) {
                var c = this;
                if (typeof c != "function") throw new TypeError();
                var d = u.call(arguments, 1),
                    e = function () {
                        if (this instanceof e) {
                            var a = function () {};
                            a.prototype = c.prototype;
                            var f = new a(),
                                g = c.apply(f, d.concat(u.call(arguments)));
                            return Object(g) === g ? g : f;
                        }
                        return c.apply(b, d.concat(u.call(arguments)));
                    };
                return e;
            }),
        (q.csstransforms = function () {
            return !!F("transform");
        }),
        (q.csstransforms3d = function () {
            var a = !!F("perspective");
            return (
                a &&
                    "webkitPerspective" in g.style &&
                    w(
                        "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
                        function (b, c) {
                            a = b.offsetLeft === 9 && b.offsetHeight === 3;
                        }
                    ),
                a
            );
        }),
        (q.csstransitions = function () {
            return F("transition");
        });
    for (var G in q)
        y(q, G) &&
            ((v = G.toLowerCase()),
            (e[v] = q[G]()),
            t.push((e[v] ? "" : "no-") + v));
    return (
        (e.addTest = function (a, b) {
            if (typeof a == "object")
                for (var d in a) y(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                (b = typeof b == "function" ? b() : b),
                    typeof f != "undefined" &&
                        f &&
                        (g.className += " " + (b ? "" : "no-") + a),
                    (e[a] = b);
            }
            return e;
        }),
        z(""),
        (i = k = null),
        (function (a, b) {
            function k(a, b) {
                var c = a.createElement("p"),
                    d = a.getElementsByTagName("head")[0] || a.documentElement;
                return (
                    (c.innerHTML = "x<style>" + b + "</style>"),
                    d.insertBefore(c.lastChild, d.firstChild)
                );
            }
            function l() {
                var a = r.elements;
                return typeof a == "string" ? a.split(" ") : a;
            }
            function m(a) {
                var b = i[a[g]];
                return b || ((b = {}), h++, (a[g] = h), (i[h] = b)), b;
            }
            function n(a, c, f) {
                c || (c = b);
                if (j) return c.createElement(a);
                f || (f = m(c));
                var g;
                return (
                    f.cache[a]
                        ? (g = f.cache[a].cloneNode())
                        : e.test(a)
                        ? (g = (f.cache[a] = f.createElem(a)).cloneNode())
                        : (g = f.createElem(a)),
                    g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                );
            }
            function o(a, c) {
                a || (a = b);
                if (j) return a.createDocumentFragment();
                c = c || m(a);
                var d = c.frag.cloneNode(),
                    e = 0,
                    f = l(),
                    g = f.length;
                for (; e < g; e++) d.createElement(f[e]);
                return d;
            }
            function p(a, b) {
                b.cache ||
                    ((b.cache = {}),
                    (b.createElem = a.createElement),
                    (b.createFrag = a.createDocumentFragment),
                    (b.frag = b.createFrag())),
                    (a.createElement = function (c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c);
                    }),
                    (a.createDocumentFragment = Function(
                        "h,f",
                        "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                            l()
                                .join()
                                .replace(/\w+/g, function (a) {
                                    return (
                                        b.createElem(a),
                                        b.frag.createElement(a),
                                        'c("' + a + '")'
                                    );
                                }) +
                            ");return n}"
                    )(r, b.frag));
            }
            function q(a) {
                a || (a = b);
                var c = m(a);
                return (
                    r.shivCSS &&
                        !f &&
                        !c.hasCSS &&
                        (c.hasCSS = !!k(
                            a,
                            "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
                        )),
                    j || p(a, c),
                    a
                );
            }
            var c = a.html5 || {},
                d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                f,
                g = "_html5shiv",
                h = 0,
                i = {},
                j;
            (function () {
                try {
                    var a = b.createElement("a");
                    (a.innerHTML = "<xyz></xyz>"),
                        (f = "hidden" in a),
                        (j =
                            a.childNodes.length == 1 ||
                            (function () {
                                b.createElement("a");
                                var a = b.createDocumentFragment();
                                return (
                                    typeof a.cloneNode == "undefined" ||
                                    typeof a.createDocumentFragment ==
                                        "undefined" ||
                                    typeof a.createElement == "undefined"
                                );
                            })());
                } catch (c) {
                    (f = !0), (j = !0);
                }
            })();
            var r = {
                elements:
                    c.elements ||
                    "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                shivCSS: c.shivCSS !== !1,
                supportsUnknownElements: j,
                shivMethods: c.shivMethods !== !1,
                type: "default",
                shivDocument: q,
                createElement: n,
                createDocumentFragment: o,
            };
            (a.html5 = r), q(b);
        })(this, b),
        (e._version = d),
        (e._prefixes = m),
        (e._domPrefixes = p),
        (e._cssomPrefixes = o),
        (e.testProp = function (a) {
            return D([a]);
        }),
        (e.testAllProps = F),
        (e.testStyles = w),
        (e.prefixed = function (a, b, c) {
            return b ? F(a, b, c) : F(a, "pfx");
        }),
        (g.className =
            g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
            (f ? " js " + t.join(" ") : "")),
        e
    );
})(this, this.document)),
    (function (a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a);
        }
        function e(a) {
            return "string" == typeof a;
        }
        function f() {}
        function g(a) {
            return (
                !a || "loaded" == a || "complete" == a || "uninitialized" == a
            );
        }
        function h() {
            var a = p.shift();
            (q = 1),
                a
                    ? a.t
                        ? m(function () {
                              ("c" == a.t
                                  ? B.injectCss
                                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                          }, 0)
                        : (a(), h())
                    : (q = 0);
        }
        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (
                    !o &&
                    g(l.readyState) &&
                    ((u.r = o = 1),
                    !q && h(),
                    (l.onload = l.onreadystatechange = null),
                    b)
                ) {
                    "img" != a &&
                        m(function () {
                            t.removeChild(l);
                        }, 50);
                    for (var d in y[c])
                        y[c].hasOwnProperty(d) && y[c][d].onload();
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = { t: d, s: c, e: f, a: i, x: j };
            1 === y[c] && ((r = 1), (y[c] = [])),
                "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
                (l.width = l.height = "0"),
                (l.onerror = l.onload = l.onreadystatechange = function () {
                    k.call(this, r);
                }),
                p.splice(e, 0, u),
                "img" != a &&
                    (r || 2 === y[c]
                        ? (t.insertBefore(l, s ? null : n), m(k, j))
                        : y[c].push(l));
        }
        function j(a, b, c, d, f) {
            return (
                (q = 0),
                (b = b || "j"),
                e(a)
                    ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
                    : (p.splice(this.i++, 0, a), 1 == p.length && h()),
                this
            );
        }
        function k() {
            var a = B;
            return (a.loader = { load: j, i: 0 }), a;
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w =
                Array.isArray ||
                function (a) {
                    return "[object Array]" == o.call(a);
                },
            x = [],
            y = {},
            z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a;
                },
            },
            A,
            B;
        (B = function (a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = { url: c, origUrl: c, prefixes: a },
                    e,
                    f,
                    g;
                for (f = 0; f < d; f++)
                    (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c;
            }
            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(),
                    i.bypass ||
                        (e &&
                            (e = d(e)
                                ? e
                                : e[a] ||
                                  e[g] ||
                                  e[a.split("/").pop().split("?")[0]]),
                        i.instead
                            ? i.instead(a, e, f, g, h)
                            : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                              f.load(
                                  i.url,
                                  i.forceCSS ||
                                      (!i.forceJS &&
                                          "css" ==
                                              i.url
                                                  .split(".")
                                                  .pop()
                                                  .split("?")
                                                  .shift())
                                      ? "c"
                                      : c,
                                  i.noexec,
                                  i.attrs,
                                  i.timeout
                              ),
                              (d(e) || d(j)) &&
                                  f.load(function () {
                                      k(),
                                          e && e(i.origUrl, h, g),
                                          j && j(i.origUrl, h, g),
                                          (y[i.url] = 2);
                                  })));
            }
            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a))
                            c ||
                                (j = function () {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l();
                                }),
                                g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in ((m = (function () {
                                var b = 0,
                                    c;
                                for (c in a) a.hasOwnProperty(c) && b++;
                                return b;
                            })()),
                            a))
                                a.hasOwnProperty(n) &&
                                    (!c &&
                                        !--m &&
                                        (d(j)
                                            ? (j = function () {
                                                  var a = [].slice.call(
                                                      arguments
                                                  );
                                                  k.apply(this, a), l();
                                              })
                                            : (j[n] = (function (a) {
                                                  return function () {
                                                      var b = [].slice.call(
                                                          arguments
                                                      );
                                                      a && a.apply(this, b),
                                                          l();
                                                  };
                                              })(k[n]))),
                                    g(a[n], j, b, n, h));
                    } else !c && l();
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m,
                    n;
                c(h ? a.yep : a.nope, !!i), i && c(i);
            }
            var i,
                j,
                l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++)
                    (j = a[i]),
                        e(j)
                            ? g(j, 0, l, 0)
                            : w(j)
                            ? B(j)
                            : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l);
        }),
            (B.addPrefix = function (a, b) {
                z[a] = b;
            }),
            (B.addFilter = function (a) {
                x.push(a);
            }),
            (B.errorTimeout = 1e4),
            null == b.readyState &&
                b.addEventListener &&
                ((b.readyState = "loading"),
                b.addEventListener(
                    "DOMContentLoaded",
                    (A = function () {
                        b.removeEventListener("DOMContentLoaded", A, 0),
                            (b.readyState = "complete");
                    }),
                    0
                )),
            (a.yepnope = k()),
            (a.yepnope.executeStack = h),
            (a.yepnope.injectJs = function (a, c, d, e, i, j) {
                var k = b.createElement("script"),
                    l,
                    o,
                    e = e || B.errorTimeout;
                k.src = a;
                for (o in d) k.setAttribute(o, d[o]);
                (c = j ? h : c || f),
                    (k.onreadystatechange = k.onload = function () {
                        !l &&
                            g(k.readyState) &&
                            ((l = 1),
                            c(),
                            (k.onload = k.onreadystatechange = null));
                    }),
                    m(function () {
                        l || ((l = 1), c(1));
                    }, e),
                    i ? k.onload() : n.parentNode.insertBefore(k, n);
            }),
            (a.yepnope.injectCss = function (a, c, d, e, g, i) {
                var e = b.createElement("link"),
                    j,
                    c = i ? h : c || f;
                (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
                for (j in d) e.setAttribute(j, d[j]);
                g || (n.parentNode.insertBefore(e, n), m(c, 0));
            });
    })(this, document),
    (Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0));
    });



var map = AmCharts.makeChart('chartdiv', {
    type: 'map',
    colorSteps: 10,
    //panEventsEnabled: true,
    colorSteps: 10,
    dragMap: false,
    zoomOnDoubleClick: false,

    dataProvider: {
        map: 'usaLow',
        areas: [
            {
                id: 'US-AL',
                value: 4447100,
                color: '#35792a',
            },
            {
                id: 'US-AK',
                value: 626932,
                color: '#35792a',
            },
            {
                id: 'US-AZ',
                value: 5130632,
                color: '#35792a',
            },
            {
                id: 'US-AR',
                value: 2673400,
                color: '#35792a',
            },
            {
                id: 'US-CA',
                value: 33871648,
                color: '#35792a',
            },
            {
                id: 'US-CO',
                value: 4301261,
                color: '#35792a',
            },
            {
                id: 'US-CT',
                value: 3405565,
                color: '#35792a',
            },
            {
                id: 'US-DE',
                value: 783600,
                color: '#35792a',
            },
            {
                id: 'US-FL',
                value: 15982378,
                color: '#35792a',
            },
            {
                id: 'US-GA',
                value: 8186453,
                color: '#35792a',
            },
            {
                id: 'US-HI',
                value: 1211537,
                color: '#35792a',
            },
            {
                id: 'US-ID',
                value: 1293953,
                color: '#35792a',
            },
            {
                id: 'US-IL',
                value: 12419293,
                color: '#35792a',
            },
            {
                id: 'US-IN',
                value: 6080485,
                color: '#35792a',
            },
            {
                id: 'US-IA',
                value: 2926324,
                color: '#35792a',
            },
            {
                id: 'US-KS',
                value: 2688418,
                color: '#35792a',
            },
            {
                id: 'US-KY',
                value: 4041769,
                color: '#35792a',
            },
            {
                id: 'US-LA',
                value: 4468976,
                color: '#35792a',
            },
            {
                id: 'US-ME',
                value: 1274923,
                color: '#35792a',
            },
            {
                id: 'US-MD',
                value: 5296486,
                color: '#35792a',
            },
            {
                id: 'US-MA',
                value: 6349097,
                color: '#35792a',
            },
            {
                id: 'US-MI',
                value: 9938444,
                color: '#35792a',
            },
            {
                id: 'US-MN',
                value: 4919479,
                color: '#35792a',
            },
            {
                id: 'US-MS',
                value: 2844658,
                color: '#35792a',
            },
            {
                id: 'US-MO',
                value: 5595211,
                color: '#35792a',
            },
            {
                id: 'US-MT',
                value: 902195,
                color: '#35792a',
            },
            {
                id: 'US-NE',
                value: 1711263,
                color: '#35792a',
            },
            {
                id: 'US-NV',
                value: 1998257,
                color: '#35792a',
            },
            {
                id: 'US-NH',
                value: 1235786,
                color: '#35792a',
            },
            {
                id: 'US-NJ',
                value: 8414350,
                color: '#35792a',
            },
            {
                id: 'US-NM',
                value: 1819046,
                color: '#35792a',
            },
            {
                id: 'US-NY',
                value: 18976457,
                color: '#35792a',
            },
            {
                id: 'US-NC',
                value: 8049313,
                color: '#35792a',
            },
            {
                id: 'US-ND',
                value: 642200,
                color: '#35792a',
            },
            {
                id: 'US-OH',
                value: 11353140,
                color: '#35792a',
            },
            {
                id: 'US-OK',
                value: 3450654,
                color: '#35792a',
            },
            {
                id: 'US-OR',
                value: 3421399,
                color: '#35792a',
            },
            {
                id: 'US-PA',
                value: 12281054,
                color: '#35792a',
            },
            {
                id: 'US-RI',
                value: 1048319,
                color: '#35792a',
            },
            {
                id: 'US-SC',
                value: 4012012,
                color: '#35792a',
            },
            {
                id: 'US-SD',
                value: 754844,
                color: '#35792a',
            },
            {
                id: 'US-TN',
                value: 5689283,
                color: '#35792a',
            },
            {
                id: 'US-TX',
                value: 20851820,
                color: '#35792a',
            },
            {
                id: 'US-UT',
                value: 2233169,
                color: '#35792a',
            },
            {
                id: 'US-VT',
                value: 608827,
                color: '#35792a',
            },
            {
                id: 'US-VA',
                value: 7078515,
                color: '#35792a',
            },
            {
                id: 'US-WA',
                value: 5894121,
                color: '#35792a',
            },
            {
                id: 'US-WV',
                value: 1808344,
                color: '#35792a',
            },
            {
                id: 'US-WI',
                value: 5363675,
                color: '#35792a',
            },
            {
                id: 'US-WY',
                value: 493782,
                color: '#35792a',
            },
        ],
    },
    areasSettings: {
        autoZoom: false,
        selectable: true,
        color: '#232325',
        colorSolid: '#5EB7DE',
        selectedColor: '#C6D52F',
        outlineColor: '#FFFFFF', // "#034c1f",
        selectedOutlineColor: '#FFFFFF', // "#034c1f",
        outlineThickness: 1,
        rollOverColor: '#C6D52F',
        rollOverOutlineColor: '#FFFFFF',
        useHandCursorOnClickableOjects: true,
        tabIndex: -1,
    },

    // "smallMap": {},

    zoomControl: {
        panControlEnabled: false,
        zoomControlEnabled: false,
        homeButtonEnabled: false,
    },

    responsive: {
        enabled: true,
    },

    imagesSettings: {
        labelPosition: 'middle',
        labelFontSize: 14,
        labelColor: '#FFFFFF', // "#034c1f",
        labelRollOverColor: '#232325', // "#034c1f",
        selectedLabelColor: '#232325', // "#034c1f",
        tabIndex: -1,
    },

    export: {
        enabled: true,
    },
});

map.addListener('init', function () {
    //alert('hi');
    // set up a longitude exceptions for certain areas
    var longitude = {
        'US-CA': -130,
        'US-FL': 120,
        'US-TX': 1,
        'US-LA': 40,
    };

    var latitude = {
        'US-AK': -85,
    };

    setTimeout(function () {
        // iterate through areas and put a label over center of each
        map.dataProvider.images = [];
        for (x in map.dataProvider.areas) {
            var area = map.dataProvider.areas[x];
            area.groupId = area.id;

            var image = new AmCharts.MapImage();
            image.latitude =
                latitude[area.id] || map.getAreaCenterLatitude(area);
            image.longitude =
                longitude[area.id] || map.getAreaCenterLongitude(area);
            image.label = area.id.split('-').pop();
            image.title = area.title;
            image.id = area.id;
            image.groupId = area.id;
            image.linkToObject = image.id;

            if ($(window).width() > 1400) {

                if (area.id == 'US-MI') {
                    image.labelShiftX = 40;
                    image.labelShiftY = 30;
                }
                if (area.id == 'US-VA') {
                    image.labelShiftX = 20;
                    image.labelShiftY = 0;
                }
                if (area.id == 'US-WV') {
                    image.labelShiftX = -15;
                    image.labelShiftY = 5;
                }
                if (area.id == 'US-AK') {
                    image.labelShiftX = 0;
                    image.labelShiftY = -60;
                }
            } else if ($(window).width() < 480) {
                image.labelFontSize = 8;
                if (area.id == 'US-MI') {
                    image.labelShiftX = 11;
                    image.labelShiftY = 08;
                }
                if (area.id == 'US-ID') {
                    image.labelShiftX = -3;
                    image.labelShiftY = 10;
                }
                if (area.id == 'US-MN') {
                    image.labelShiftX = -6;
                    image.labelShiftY = 1;
                }
                if (area.id == 'US-VA') {
                    image.labelShiftX = 6;
                    image.labelShiftY = 0;
                }
                if (area.id == 'US-AK') {
                    image.labelShiftX = -3;
                    image.labelShiftY = -17;
                }
                if (area.id == 'US-OK') {
                    image.labelShiftX = 10;
                    image.labelShiftY = 0;
                }
                if (area.id == 'US-WV') {
                    image.labelFontSize = 6;
                    image.labelShiftX = -5;
                    image.labelShiftY = 3;
                }
                if (area.id == 'US-SC') {
                    image.labelShiftX = 5;
                    image.labelShiftY = -2;
                }
            } else {
                if (area.id == 'US-MI') {
                    image.labelShiftX = 25;
                    image.labelShiftY = 20;
                }
                /*if (area.id == "US-ID") {
                    image.labelShiftX = -25;
                    image.labelShiftY = 25;
                }
                if (area.id == "US-MN") {
                    image.labelShiftX = -15;
                    image.labelShiftY = 15;
                }*/
                if (area.id == 'US-VA') {
                    image.labelShiftX = 10;
                    image.labelShiftY = 5;
                }
                if (area.id == 'US-AK') {
                    image.labelShiftX = 0;
                    image.labelShiftY = -40;
                }
                if (area.id == 'US-OK') {
                    image.labelShiftX = 20;
                    image.labelShiftY = 0;
                }

                if (area.id == 'US-WV') {
                    image.labelShiftX = -10;
                    image.labelShiftY = 5;
                }

                if (area.id == 'US-SC') {
                    image.labelShiftX = 10;
                    image.labelShiftY = -5;
                }
            }

            if (area.id == 'US-HI') {
                // image.labelFontSize = 9;
                image.labelColor = '#35792a';
                image.labelPosition = 'left';
            }

            if (area.id == 'US-LA') {
                image.labelShiftX = 10;
                image.labelShiftY = 5;
            }

            if (area.id == 'US-KY') {
                image.labelShiftX = 10;
                image.labelShiftY = 0;
            }

            if (area.id == 'US-NV') {
                image.labelShiftX = 0;
                image.labelShiftY = -15;
            }
            if (
                area.id == 'US-NH' ||
                area.id == 'US-VT' ||
                area.id == 'US-MA' ||
                area.id == 'US-RI' ||
                area.id == 'US-CT' ||
                area.id == 'US-CT' ||
                area.id == 'US-NJ' ||
                area.id == 'US-DE' ||
                area.id == 'US-MD'
            ) {
                image.labelFontSize = 0;
                image.labelColor = '#FFFFFF';
            }

            if ($(window).width() > 480) {
                if (area.id == 'US-ID') {
                    image.labelShiftX = -10;
                    image.labelShiftY = 25;
                }
                if (area.id == 'US-MN') {
                    image.labelShiftX = -15;
                }
            }

            map.dataProvider.images.push(image);
        }
        map.selectObject(map.dataProvider);
    }, 200);
});

map.addListener('clickMapObject', function (event) {
    var stateid = event.mapObject.id;
    var valClick = 0;
    $('#txtstateId').val(stateid);
    passInfo(stateid, valClick);
});

function legendClick(stateid1, statename) {
    var stateid;
    stateid = idTransfer_(stateid1);
    var valClick = 0;
    passInfo(stateid, valClick);
}

function GetSelectedTextValue() {
    var e = document.querySelector(".state-select .current-selected");
    if (e.dataset.val && e.dataset.val !== '') {
        var stateid = e.dataset.val == "SelectAnOption" ? '' : e.dataset.val;
        var statename = e.textContent;
    }
    legendClick(stateid, statename);

}
function idTransfer_(stateid) {
    return stateid.indexOf('-') == -1 && stateid != "" ? stateid.slice(0,2) + '-' + stateid.slice(2) : stateid;
}
function idTransfer(stateid) {
    return stateid.indexOf('-') != -1 ?  stateid.slice(0,2) + stateid.slice(3) : stateid;
}

function passInfo(stateid1, valClick) {
    let stateid = idTransfer_(stateid1);
    GetOptionsvalues(stateid, valClick);
    $('#ddlselectstate').val(stateid);
    $('#ddlselectstate')[0].dispatchEvent(
        new CustomEvent('state-change', { detail: { value: stateid }, bubbles: true })
        );
        setSelectedMaArea(stateid);
        stateid = idTransfer(stateid1);
        $('.legend_ul li').removeClass('selected');
        var legendLink = stateid && $('a#' + stateid);
        legendLink && legendLink.parent("li").addClass('selected')
    }
    
    function GetOptionsvalues(stateid, valClick) {
    if (!stateid) {
        $('.js__slide_top').css('display', 'none');
        $('#ddlselectstate').removeClass('selected');
        return;
    }
    else {
        $('.js__slide_top').css('display', 'block');
        $('#ddlselectstate').addClass('selected');
    }
    $('#txtstateId').val(stateid);
    $('.first_head').text('00.0');
    $('.first_slid_SlideFirstDiff').html('0.0');


    var currentState = drugMisuseData[stateid];
    var opt = currentState;
    //For First Slide
    $('#txtConsistentval').val(opt.d_SlideFirstConsistent);
    $('#txtInConsistentval').val(opt.d_SlideFirstInconsistent);

    if (opt.IsRelevantData == '1') {
        firstChart(
            opt.d_SlideFirstConsistent,
            opt.d_SlideFirstInconsistent
        );
        $('.state_name').html(
            opt.str_StateName + '<span class="astrik"></span>'
        );

        //For Heading Astrik
        if (opt.b_IsRegion == 1) {
            $('.astrik').text(''); // $('.astrik').text("*"); // commented on 290817
            $('.first_slid_bottom_desc').text(''); // $('.first_slid_bottom_desc').text(opt.str_RegionBottomContent); // commented on 290817
        } else {
            $('.astrik').text('');
            $('.first_slid_bottom_desc').text('');
        }
        $('.first_head').text(opt.d_SlideFirstInconsistent);
        $('.first_slid_desc').html(opt.str_SlideFirstContent);
        $('.first_slid_SlideFirstDiff').html(opt.SlideFirstDiff);
        $('.first_slid_SlideFirstlastyear').html(
            opt.SlideFirstlastyear
        );
        $('.percent1').text('%');

        //  alert('content');
        $('.IfNoContentDiv').css('display', 'none');
        $('.map-info-slides.swiper').css('display', 'block');

        if (opt.SlideFirstupdown == '1') {
            $('.first_slid_SlideFirstupdown').attr(
                'src',
                '/etc.clientlibs/corporate/clientlibs/map-files/resources/arrow_up.png'
            );
            $('.first_slid_SlideFirstupdown').attr(
                'alt', 'increase of'
            );
            $('.DiffDiv').css('display', 'block');
        } else if (opt.SlideFirstupdown == '0') {
            $('.first_slid_SlideFirstupdown').attr(
                'src',
                '/etc.clientlibs/corporate/clientlibs/map-files/resources/arrow_down.png'
            );
            $('.first_slid_SlideFirstupdown').attr(
                'alt', 'decrease of'
            );
            $('.DiffDiv').css('display', 'block');
        } else if (opt.SlideFirstupdown == '2') {
            $('.DiffDiv').css('display', 'none');
        } else {
            $('.DiffDiv').css('display', 'block');
        }
        secondChart(
            opt.d_SlideSecondAdditionalDrugs,
            opt.d_SlideSecondDifferentDrugs,
            opt.d_SlideSecondNoDrugs
        );
        $('#txtAdditional').val(opt.d_SlideSecondAdditionalDrugs);
        $('#txtDifferent').val(opt.d_SlideSecondDifferentDrugs);
        $('#txtNo').val(opt.d_SlideSecondNoDrugs);

        $('.second_head').html(
            'Of the <span class="percent">' +
            opt.d_SlideFirstInconsistent +
            '%</span> with inconsistent results...'
        );


        $('.second_first .counter').text(opt.d_SlideSecondAdditionalDrugs);
        $('.second_first p').html(
            opt.str_SlideSecondAdditionalDrugsContent
        );

        $('.second_second .counter').text(opt.d_SlideSecondDifferentDrugs);
        $('.second_second p').html(
            opt.str_SlideSecondDifferentDrugsContent
        );

        $('.second_third .counter').text(opt.d_SlideSecondNoDrugs);
        $('.second_third p').html(opt.str_SlideSecondNoDrugsContent);

        $('.third_head').text(opt.str_SlideThreeHeading);
        $('.third_slid_desc ').text(opt.str_SlideThreeContent);
        if (opt.str_SlideThreeFollowedBy2 == '') {
            $('.followed_drug').html(
                '<b>' + opt.str_SlideThreeFollowedBy1 + '</b>'
            );
        } else {
            $('.followed_drug').html(
                '<b>' +
                opt.str_SlideThreeFollowedBy1 +
                '</b> and <b>' +
                opt.str_SlideThreeFollowedBy2 +
                '</b>'
            );
        }

        $(".map-info-slides.swiper")[0].swiper.update();
        $(".map-info-slides.swiper")[0].swiper.slideTo(1);
    } else {
        $('.state_name').html(
            opt.str_StateName + '<span class="astrik"></span>'
        );
        $('.IfNoContentDiv').css('display', 'block');
        $('.map-info-slides.swiper').css('display', 'none');
    }
}

function exist(json, modulid) {
    var ret = 0;
    $(json).each(function (index, data) {
        if (data.modulId == modulid) ret++;
    });
    return ret > 0;
}

//For Set Selected State Highlighted
function setSelectedMaArea(stateid) {
    // alert(stateid);
    for (var i = 0; i < map.dataProvider.areas.length; i++) {
        var area = map.dataProvider.areas[i];
        if (area.id == stateid) {
            area.showAsSelected = true;
            //area.selectedColor = "#35792a";
            //area.outlineColor = "#034c1f";
            //area.color = "#FFFFF";
        } else {
            area.showAsSelected = false;
        }
    }
    map.validateData();

}

function firstChart(val1, val2) {
    $('.piechartdiv').html('')
    var data1 = [
        { text: 'Consistent', value: parseInt(val1), color: '#35792a' },
        { text: 'Inconsistent', value: parseInt(val2), color: '#c6d52f' },
    ];
    $('.piechartdiv').each((index, item)=>{
        let el = document.createElement('canvas');
        el.id = `firstCursorLayer${index+1}`;
        el.width = $('.piechartdiv:first').width();
        el.height = $('.piechartdiv:first').width();
        item.appendChild(el);
        let ctx = el.getContext('2d');
        new Chart(ctx).Doughnut(data1, {
            "animation": true,
            "percentageInnerCutout": 67,
            "segmentStrokeColor": "#ffffff",
            "segmentShowStroke": true,
        });
    })
}

function secondChart(val1, val2, val3) {
    $('#piechartdiv1').html('');
    var data2 = [
        { text: 'Additional', value: parseInt(val1), color: '#c6d52f' },
        { text: 'Different', value: parseInt(val2), color: '#80276C' },
        { text: 'No', value: parseInt(val3), color: '#35792A' },
    ];
    var el1 = document.createElement('canvas');
    el1.id = 'secondCursorLayer';
    el1.width = 150;
    el1.height = 150;
    el1.style.position = 'relative';
    el1.style.styleFloat = 'left';

    $('#piechartdiv1')[0].appendChild(el1);
    var ctx1 = el1.getContext('2d');
    var userStrengthsChart1;
    //userStrengthsChart1 = new Chart(ctx1).Doughnut(data2);
    switch (2) {
        case 1:
            userStrengthsChart1 = new Chart(ctx1).Pie(data2);
            break;
        case 2:
            userStrengthsChart1 = new Chart(ctx1).Doughnut(data2, {
                "animation": true,
                "percentageInnerCutout": 67,
                "segmentStrokeColor": "#ffffff",
                "segmentShowStroke": true,
            });
            break;
    }
}
function checkDropdownState() {
    if(sessionStorage.getItem('mapState') && sessionStorage.getItem('mapState') != 'undefined') {
        legendClick(sessionStorage.getItem('mapState'), '');
    }
}
window.onpageshow = function (ev) {
    checkDropdownState();
    //passInfo("", 0);
}
