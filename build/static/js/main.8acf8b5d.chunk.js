(this.webpackJsonpdester = this.webpackJsonpdester || []).push([
    [0], {
        162: function(e) {
            e.exports = JSON.parse('{"a":"1"}')
        },
        231: function(e, t, a) {},
        233: function(e, t, a) {},
        234: function(e, t, a) {},
        235: function(e, t, a) {},
        236: function(e, t, a) {},
        239: function(e, t, a) {},
        240: function(e, t, a) {},
        241: function(e, t, a) {},
        242: function(e, t, a) {},
        244: function(e, t, a) {},
        245: function(e, t, a) {},
        246: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(3),
                r = a(0),
                i = a.n(r),
                o = a(28),
                s = a.n(o),
                c = a(20),
                l = a(34),
                d = a(303),
                u = a(318),
                h = a(10),
                p = a(11),
                m = a(7),
                j = a(13),
                b = a(14),
                g = a(285),
                O = a(185),
                f = a(290),
                v = a(291),
                x = a(163),
                y = a.n(x),
                w = (a(56), a(1)),
                S = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            menuAnchor: !1
                        }, n.handleClick = n.handleClick.bind(Object(m.a)(n)), n.handleClose = n.handleClose.bind(Object(m.a)(n)), n
                    }
                    return Object(p.a)(a, [{
                        key: "handleClick",
                        value: function(e) {
                            this.setState({
                                menuAnchor: e.currentTarget
                            })
                        }
                    }, {
                        key: "handleClose",
                        value: function(e) {
                            this.setState({
                                menuAnchor: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.accounts,
                                a = e.ui_config,
                                n = Object(w.jsx)(y.a, {});
                            return t && t.pic && (t.pic.includes("http") || t.pic.includes("www")) && (n = Object(w.jsx)("img", {
                                src: t.pic,
                                width: "32px",
                                alt: "profile-pic"
                            })), Object(w.jsxs)("div", {
                                className: "AccountMenu",
                                children: [Object(w.jsx)(g.a, {
                                    "aria-label": "more",
                                    "aria-controls": "account-menu",
                                    "aria-haspopup": "true",
                                    onClick: this.handleClick,
                                    children: n
                                }), Object(w.jsxs)(O.a, {
                                    id: "account-menu",
                                    anchorEl: this.state.menuAnchor,
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    keepMounted: !0,
                                    open: Boolean(this.state.menuAnchor),
                                    onClose: this.handleClose,
                                    children: [(a.custom_button || {}).text ? Object(w.jsxs)("div", {
                                        children: [Object(w.jsx)(f.a, {}), Object(w.jsx)("a", {
                                            href: a.custom_button.url,
                                            target: "__blank",
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                onClick: this.handleClose,
                                                children: a.custom_button.text
                                            })
                                        })]
                                    }) : null, Object(w.jsx)(c.b, {
                                        to: "/settings",
                                        className: "no_decoration_link",
                                        children: Object(w.jsx)(v.a, {
                                            onClick: this.handleClose,
                                            children: "Configura\xe7\xf5es"
                                        })
                                    }), Object(w.jsx)(c.b, {
                                        to: "/logout",
                                        className: "no_decoration_link",
                                        children: Object(w.jsx)(v.a, {
                                            onClick: this.handleClose,
                                            children: "Sair"
                                        })
                                    })]
                                })]
                            })
                        }
                    }]), a
                }(r.Component),
                C = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            auth: window.sessionStorage.getItem("auth") || window.localStorage.getItem("auth"),
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server")
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            window.localStorage.getItem("_VERSION") || window.localStorage.setItem("_VERSION", Gt.a), window.localStorage.getItem("_VERSION") !== Gt.a && ("caches" in window && (caches.keys().then((function(e) {
                                e.forEach((function(e) {
                                    caches.delete(e)
                                }))
                            })), window.location.reload(!0)), window.localStorage.setItem("_VERSION", Gt.a))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.auth,
                                a = e.server;
                            return t && a ? Object(w.jsx)(l.a, {
                                to: "/browse"
                            }, Ne()) : Object(w.jsx)(l.a, {
                                to: "/login"
                            }, Ne())
                        }
                    }]), a
                }(r.Component),
                k = a(16),
                _ = a(27),
                N = a.n(_),
                I = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            auth: window.sessionStorage.getItem("auth") || window.localStorage.getItem("auth") || "0",
                            isLoaded: !1,
                            metadata: {},
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin,
                            starred_lists: JSON.parse(window.localStorage.getItem("starred_lists") || "[]"),
                            ui_config: JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}")
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.auth,
                                n = t.server,
                                r = t.starred_lists,
                                i = t.ui_config;
                            a && n || this.props.history.push("/logout");
                            var o = "".concat(n, "/api/v1/metadata"),
                                s = "?a=".concat(a, "&r=0:").concat(i.range || "12", "&s=random&date-des&rmdup=true");
                            N.a.get(o + s).then((function(t) {
                                for (var a = t.data.content, n = r.length - 1; n >= 0; n--) r[n].categoryInfo.pinned && a.unshift(r[n]);
                                e.setState({
                                    isLoaded: !0,
                                    metadata: a
                                })
                            })).catch((function(t) {
                                if (console.error(t), t.response) {
                                    var a = t.response.data;
                                    401 === a.code ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Login",
                                        confirmButtonColor: Ft.palette.success.main
                                    }).then((function(t) {
                                        t.isConfirmed && e.props.history.push("/logout")
                                    })) : n ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Logout",
                                        confirmButtonColor: Ft.palette.success.main,
                                        cancelButtonText: "Retry",
                                        cancelButtonColor: Ft.palette.error.main,
                                        showCancelButton: !0
                                    }).then((function(t) {
                                        t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                    })) : e.props.history.push("/logout")
                                } else t.request && (n ? k.a.fire({
                                    title: "Error!",
                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                    icon: "error",
                                    confirmButtonText: "Sair",
                                    confirmButtonColor: Ft.palette.success.main,
                                    cancelButtonText: "Tente Novamente",
                                    cancelButtonColor: Ft.palette.error.main,
                                    showCancelButton: !0
                                }).then((function(t) {
                                    t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                })) : e.props.history.push("/logout"))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.isLoaded,
                                a = e.metadata;
                            return t ? Object(w.jsxs)("div", {
                                className: "Browse",
                                children: [Object(w.jsx)(He, Object(n.a)({}, this.props)), Object(w.jsx)(Oe, {
                                    metadata: a
                                }), Object(w.jsx)(ke, {})]
                            }) : Object(w.jsx)(Re, {})
                        }
                    }]), a
                }(r.Component),
                B = a(169),
                T = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            menuAnchor: !1
                        }, n.handleClick = n.handleClick.bind(Object(m.a)(n)), n.handleClose = n.handleClose.bind(Object(m.a)(n)), n
                    }
                    return Object(p.a)(a, [{
                        key: "handleClick",
                        value: function(e) {
                            this.setState({
                                menuAnchor: e.currentTarget
                            })
                        }
                    }, {
                        key: "handleClose",
                        value: function(e) {
                            this.setState({
                                menuAnchor: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.categories,
                                a = JSON.parse(window.localStorage.getItem("starred_lists") || "[]");
                            return Object(w.jsxs)("div", {
                                className: "Browse",
                                style: {
                                    marginRight: "15px"
                                },
                                children: [Object(w.jsxs)(B.a, {
                                    variant: "primary",
                                    "aria-controls": "browse-menu",
                                    "aria-haspopup": "true",
                                    onClick: this.handleClick,
                                    children: ["Menu \xa0", Object(w.jsx)("i", {
                                        class: "bi bi-caret-down-fill"
                                    })]
                                }), Object(w.jsxs)(O.a, {
                                    id: "browse-menu",
                                    PaperProps: {
                                        style: {
                                            marginTop: "10px"
                                        }
                                    },
                                    anchorEl: this.state.menuAnchor,
                                    keepMounted: !0,
                                    getContentAnchorEl: null,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    open: Boolean(this.state.menuAnchor),
                                    onClose: this.handleClose,
                                    children: [Object(w.jsx)(c.b, {
                                        to: "/",
                                        className: "no_decoration_link",
                                        children: Object(w.jsx)(v.a, {
                                            onClick: this.handleClose,
                                            children: "Pagina Inicial"
                                        })
                                    }), Object(w.jsx)(f.a, {}), t.length ? t.map((function(t) {
                                        return Object(w.jsx)(c.b, {
                                            to: "/browse/".concat(t.name),
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                onClick: e.handleClose,
                                                children: t.name
                                            })
                                        }, Ne())
                                    })) : null, a.length ? Object(w.jsxs)("div", {
                                        children: [Object(w.jsx)(f.a, {}), Object(w.jsx)(c.b, {
                                            to: "/starred",
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                onClick: this.handleClose,
                                                children: "Starred Lists"
                                            })
                                        })]
                                    }) : null]
                                })]
                            })
                        }
                    }]), a
                }(r.Component),
                D = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var r;
                        return Object(h.a)(this, a), (r = t.call(this, e)).state = Object(n.a)({
                            menuAnchor: !1
                        }, e.state), r.handleClick = r.handleClick.bind(Object(m.a)(r)), r.handleClose = r.handleClose.bind(Object(m.a)(r)), r.handleSeason = r.handleSeason.bind(Object(m.a)(r)), r
                    }
                    return Object(p.a)(a, [{
                        key: "handleClick",
                        value: function(e) {
                            this.setState({
                                menuAnchor: e.currentTarget
                            })
                        }
                    }, {
                        key: "handleClose",
                        value: function() {
                            this.setState({
                                menuAnchor: !1
                            })
                        }
                    }, {
                        key: "handleSeason",
                        value: function(e) {
                            e.preventDefault();
                            for (var t = this.state, a = t.auth, n = t.metadata, r = t.server, i = 0; i < n.children.length; i++) {
                                var o = "".concat(r, "/api/v1/redirectdownload/").concat(encodeURIComponent(n.children[i].name)),
                                    s = "?a=".concat(a, "&id=").concat(n.children[i].id);
                                window.open(o + s)
                            }
                            this.setState({
                                menuAnchor: e.currentTarget
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.menuAnchor,
                                n = t.videos;
                            return Object(w.jsxs)("div", {
                                className: "info__button",
                                children: [Object(w.jsxs)(B.a, {
                                    variant: "primary",
                                    "aria-controls": "download-menu",
                                    "aria-haspopup": "true",
                                    onClick: this.handleClick,
                                    children: [Object(w.jsx)("i", {
                                        className: "bi bi-cloud-arrow-down-fill"
                                    }), "Download"]
                                }), Object(w.jsxs)(O.a, {
                                    id: "download-menu",
                                    anchorEl: a,
                                    keepMounted: !0,
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    open: Boolean(a),
                                    onClose: this.handleClose,
                                    children: [n.length ? n.map((function(t, a) {
                                        return Object(w.jsxs)("div", {
                                            children: [Object(w.jsx)("a", {
                                                href: encodeURI(t.url),
                                                className: "no_decoration_link",
                                                children: Object(w.jsx)(v.a, {
                                                    onClick: e.handleClose,
                                                    children: t.name
                                                })
                                            }), Object(w.jsx)("div", {
                                                children: 0 == a && n.length > 1 ? Object(w.jsx)(f.a, {}) : null
                                            })]
                                        }, Ne())
                                    })) : null, this.props.tv ? Object(w.jsxs)("div", {
                                        children: [Object(w.jsx)(f.a, {}), Object(w.jsx)(v.a, {
                                            onClick: this.handleSeason,
                                            children: "Entire Season"
                                        })]
                                    }) : null]
                                })]
                            })
                        }
                    }]), a
                }(r.Component),
                E = a(330),
                A = a(103),
                L = a(329),
                M = a(295),
                R = a(299),
                P = a(175),
                U = a.n(P),
                q = a(174),
                J = a.n(q),
                F = a(173),
                W = a.n(F),
                V = a(172),
                K = a.n(V),
                z = a(323),
                G = a(300),
                H = a(320),
                X = a(292),
                Y = a(293),
                Z = a(294),
                Q = (a(229), a(177)),
                $ = a.n(Q),
                ee = a(142),
                te = a.n(ee),
                ae = a(144),
                ne = a(170),
                re = a(289),
                ie = a(247),
                oe = a(298),
                se = a(296),
                ce = a(297),
                le = a(176),
                de = a.n(le),
                ue = (a(231), a(328)),
                he = (a.p, a.p + "static/media/logo-full.529bd27b.svg"),
                pe = a.p + "static/media/rectangle-poster.ffcc8a5b.svg",
                me = a.p + "static/media/rectangle-backdrop.08364072.svg",
                je = he,
                be = pe,
                ge = me,
                Oe = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            currentEditing: null,
                            hide: e.hide || !1,
                            isAndroid: /(android)/i.test(navigator.userAgent || navigator.vendor || window.opera),
                            isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream,
                            isEditOpen: !1,
                            metadata: n.props.metadata,
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin,
                            star: e.star
                        }, n.handleStar = n.handleStar.bind(Object(m.a)(n)), n.handleStarReset = n.handleStarReset.bind(Object(m.a)(n)), n.handleStarImport = n.handleStarImport.bind(Object(m.a)(n)), n.handleStarExport = n.handleStarExport.bind(Object(m.a)(n)), n.handlePin = n.handlePin.bind(Object(m.a)(n)), n.handleEditOpen = n.handleEditOpen.bind(Object(m.a)(n)), n.handleEditClose = n.handleEditClose.bind(Object(m.a)(n)), n.handleEditDrop = n.handleEditDrop.bind(Object(m.a)(n)), n.handleEditSave = n.handleEditSave.bind(Object(m.a)(n)), n
                    }
                    return Object(p.a)(a, [{
                        key: "handleStar",
                        value: function(e, t) {
                            var a = this.state.metadata,
                                n = JSON.parse(window.localStorage.getItem("starred_lists") || "[]");
                            try {
                                var r = n.findIndex((function(e) {
                                        return e.id == t.id
                                    })),
                                    i = n[r].children.findIndex((function(t) {
                                        return t.id == e.id
                                    })),
                                    o = a.findIndex((function(e) {
                                        return e.id == t.id
                                    })),
                                    s = a[o].children.findIndex((function(t) {
                                        return t.id == e.id
                                    }));
                                n[r].children.splice(i, 1), a[o].children.splice(s, 1), window.localStorage.setItem("starred_lists", JSON.stringify(n)), this.setState({
                                    metadata: a
                                })
                            } catch (c) {
                                k.a.fire({
                                    title: "Error!",
                                    text: "Your starred list seems to be corrupted!",
                                    icon: "error",
                                    confirmButtonText: "Reset",
                                    confirmButtonColor: Ft.palette.success.main,
                                    cancelButtonText: "Ignore",
                                    cancelButtonColor: Ft.palette.error.main,
                                    showCancelButton: !0
                                }).then((function(e) {
                                    e.isConfirmed && (window.localStorage.setItem("starred_lists", "[]"), location.reload())
                                }))
                            }
                        }
                    }, {
                        key: "handleStarReset",
                        value: function(e) {
                            var t = this,
                                a = this.state.metadata;
                            k.a.fire({
                                title: "Warning!",
                                text: "Are you sure you want to delete this starred list?",
                                icon: "warning",
                                confirmButtonText: "Delete",
                                confirmButtonColor: Ft.palette.success.main,
                                cancelButtonText: "No",
                                cancelButtonColor: Ft.palette.error.main,
                                showCancelButton: !0
                            }).then((function(n) {
                                if (n.isConfirmed) {
                                    var r = JSON.parse(window.localStorage.getItem("starred_lists") || "[]");
                                    1 == r.length ? (r.shift(), a.shift()) : (r.splice(e, 1), a.splice(e, 1)), window.localStorage.setItem("starred_lists", JSON.stringify(r)), t.setState({
                                        metadata: a
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "handleStarImport",
                        value: function(e) {
                            var t = this;
                            if (e.target.files.length) {
                                var a = e.target.files[0],
                                    n = new FileReader;
                                n.onload = function(a) {
                                    var n = JSON.parse(window.localStorage.getItem("starred_lists") || "[]"),
                                        r = JSON.parse(a.target.result),
                                        i = parseInt(e.target.id.replace("file-input-", ""));
                                    n[i].children = r.children, window.localStorage.setItem("starred_lists", JSON.stringify(n));
                                    var o = t.state.metadata;
                                    o.length && "Starred" == o[i].type && (o[i].children = r.children, t.setState({
                                        metadata: o
                                    }))
                                }, n.readAsText(a)
                            }
                        }
                    }, {
                        key: "handleStarExport",
                        value: function(e) {
                            var t = JSON.parse(window.localStorage.getItem("starred_lists") || "[]")[e],
                                a = new Blob([JSON.stringify(t)], {
                                    type: "application/json"
                                }),
                                n = document.createElement("a");
                            n.href = window.URL.createObjectURL(a), n.download = "libdrive-starred-".concat(t.name, "-").concat(+new Date, ".json"), n.click()
                        }
                    }, {
                        key: "handlePin",
                        value: function(e, t) {
                            var a = JSON.parse(window.localStorage.getItem("starred_lists") || "[]");
                            t ? (a[e].categoryInfo.pinned = !1, window.localStorage.setItem("starred_lists", JSON.stringify(a)), this.setState({
                                metadata: a
                            })) : (a[e].categoryInfo.pinned = !1, window.localStorage.setItem("starred_lists", JSON.stringify(a)), this.setState({
                                metadata: a
                            }))
                        }
                    }, {
                        key: "handleEditOpen",
                        value: function(e) {
                            this.setState({
                                currentEditing: e,
                                isEditOpen: !0
                            })
                        }
                    }, {
                        key: "handleEditClose",
                        value: function() {
                            var e = JSON.parse(window.localStorage.getItem("starred_lists") || "[]");
                            this.setState({
                                currentEditing: null,
                                isEditOpen: !1,
                                metadata: e
                            })
                        }
                    }, {
                        key: "handleEditDrop",
                        value: function(e) {
                            var t = e.removedIndex,
                                a = e.addedIndex,
                                n = this.state,
                                r = n.metadata,
                                i = n.currentEditing,
                                o = r[i].children;
                            r[i].children = Object(ne.a)(o, t, a), this.setState({
                                metadata: r
                            })
                        }
                    }, {
                        key: "handleEditSave",
                        value: function() {
                            var e = this.state.metadata;
                            window.localStorage.setItem("starred_lists", JSON.stringify(e)), this.setState({
                                currentEditing: null,
                                isEditOpen: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.currentEditing,
                                n = t.hide,
                                r = t.isAndroid,
                                i = t.isIOS,
                                o = t.isEditOpen,
                                s = t.metadata,
                                l = t.server,
                                d = t.star;
                            return H.a.use([X.a, Y.a, Z.a]), d ? Object(w.jsxs)("div", {
                                className: "Carousel",
                                style: {
                                    paddingTop: "3%"
                                },
                                children: [s.length ? s.map((function(t, a) {
                                    return t.children.length || !n ? Object(w.jsxs)("div", {
                                        className: "carousel__category",
                                        style: {
                                            margin: "0 auto 0 auto"
                                        },
                                        children: [Object(w.jsx)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            children: Object(w.jsxs)("div", {
                                                style: {
                                                    width: "100%"
                                                },
                                                children: [Object(w.jsxs)("div", {
                                                    style: {
                                                        float: "left",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    },
                                                    children: [Object(w.jsx)(c.b, {
                                                        id: "".concat(t.categoryInfo.name),
                                                        to: "#".concat(t.categoryInfo.name),
                                                        className: "carousel__category__title no_decoration_link",
                                                        children: t.categoryInfo.name
                                                    }), Object(w.jsx)(E.a, {
                                                        title: "Edit",
                                                        placement: "top",
                                                        children: Object(w.jsx)(g.a, {
                                                            color: "primary",
                                                            onClick: function() {
                                                                return e.handleEditOpen(a)
                                                            },
                                                            style: {
                                                                marginLeft: "20px"
                                                            },
                                                            children: Object(w.jsx)(K.a, {})
                                                        })
                                                    }), Object(w.jsx)(E.a, {
                                                        title: "Delete",
                                                        placement: "top",
                                                        children: Object(w.jsx)(g.a, {
                                                            color: "primary",
                                                            onClick: function() {
                                                                return e.handleStarReset(a)
                                                            },
                                                            children: Object(w.jsx)(W.a, {})
                                                        })
                                                    })]
                                                }), Object(w.jsxs)("div", {
                                                    style: {
                                                        float: "right",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    },
                                                    children: [Object(w.jsx)("input", {
                                                        id: "file-input-".concat(a),
                                                        hidden: !0,
                                                        onChange: e.handleStarImport,
                                                        type: "file"
                                                    }), Object(w.jsx)("label", {
                                                        htmlFor: "file-input-".concat(a),
                                                        children: Object(w.jsx)(E.a, {
                                                            title: "Upload",
                                                            placement: "top",
                                                            children: Object(w.jsx)(g.a, {
                                                                color: "primary",
                                                                children: Object(w.jsx)(J.a, {})
                                                            })
                                                        })
                                                    }), Object(w.jsx)(E.a, {
                                                        title: "Export",
                                                        placement: "top",
                                                        children: Object(w.jsx)(g.a, {
                                                            color: "primary",
                                                            onClick: function() {
                                                                return e.handleStarExport(a)
                                                            },
                                                            children: Object(w.jsx)(U.a, {})
                                                        })
                                                    }), t.categoryInfo.pinned ? Object(w.jsx)(E.a, {
                                                        title: "Unpin",
                                                        placement: "top",
                                                        children: Object(w.jsx)(g.a, {
                                                            color: "primary",
                                                            onClick: function() {
                                                                return e.handlePin(a, !1)
                                                            },
                                                            children: Object(w.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                enableBackground: "new 0 0 24 24",
                                                                height: "24px",
                                                                viewBox: "0 0 24 24",
                                                                width: "24px",
                                                                fill: Ft.palette.primary.main,
                                                                children: [Object(w.jsx)("g", {
                                                                    children: Object(w.jsx)("rect", {
                                                                        fill: "none",
                                                                        height: "24",
                                                                        width: "24"
                                                                    })
                                                                }), Object(w.jsx)("g", {
                                                                    children: Object(w.jsx)("path", {
                                                                        d: "M16,9V4l1,0c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v0 c0,0.55,0.45,1,1,1l1,0v5c0,1.66-1.34,3-3,3h0v2h5.97v7l1,1l1-1v-7H19v-2h0C17.34,12,16,10.66,16,9z",
                                                                        fillRule: "evenodd"
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    }) : Object(w.jsx)(E.a, {
                                                        title: "Pin",
                                                        placement: "top",
                                                        children: Object(w.jsx)(g.a, {
                                                            color: "primary",
                                                            onClick: function() {
                                                                return e.handlePin(a, !0)
                                                            },
                                                            children: Object(w.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                enableBackground: "new 0 0 24 24",
                                                                height: "24px",
                                                                viewBox: "0 0 24 24",
                                                                width: "24px",
                                                                fill: Ft.palette.primary.main,
                                                                children: [Object(w.jsx)("g", {
                                                                    children: Object(w.jsx)("rect", {
                                                                        fill: "none",
                                                                        height: "24",
                                                                        width: "24"
                                                                    })
                                                                }), Object(w.jsx)("g", {
                                                                    children: Object(w.jsx)("path", {
                                                                        d: "M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z"
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), Object(w.jsx)("div", {
                                            className: "carousel__items",
                                            children: t.children.length ? t.children.map((function(a) {
                                                return Object(w.jsx)("div", {
                                                    children: Object(w.jsxs)("figure", {
                                                        className: "carousel__item__figure",
                                                        children: [Object(w.jsx)(c.b, {
                                                            to: "/view/".concat(a.id),
                                                            children: Object(w.jsx)("img", {
                                                                src: a.posterPath || "".concat(l, "/api/v1/image/poster?text=").concat(a.title, "&extention=jpeg"),
                                                                className: "carousel__item__poster",
                                                                alt: a.title
                                                            }, Ne())
                                                        }, Ne()), Object(w.jsx)(A.a, {
                                                            className: "carousel__item__title",
                                                            children: a.title
                                                        }), Object(w.jsx)("div", {
                                                            style: {
                                                                display: "flex",
                                                                justifyContent: "center"
                                                            },
                                                            children: Object(w.jsx)(g.a, {
                                                                style: {
                                                                    padding: "2px"
                                                                },
                                                                onClick: function() {
                                                                    return e.handleStar(a, t)
                                                                },
                                                                children: Object(w.jsx)(te.a, {})
                                                            })
                                                        })]
                                                    }, Ne())
                                                })
                                            })) : null
                                        })]
                                    }, Ne()) : null
                                })) : null, o ? Object(w.jsxs)(L.a, {
                                    onClose: this.handleEditClose,
                                    "aria-labelledby": "simple-dialog-title",
                                    fullWidth: !0,
                                    maxWidth: "md",
                                    open: o || !1,
                                    children: [Object(w.jsx)(M.a, {
                                        id: "simple-dialog-title",
                                        children: s[a].categoryInfo.name
                                    }), Object(w.jsx)(re.a, {
                                        children: Object(w.jsxs)(ae.Container, {
                                            dragHandleSelector: ".drag-handle",
                                            lockAxis: "y",
                                            onDrop: this.handleEditDrop,
                                            children: [s[a].children.map((function(e) {
                                                var t = e.id,
                                                    a = e.title;
                                                return Object(w.jsx)(ae.Draggable, {
                                                    children: Object(w.jsxs)(ie.a, {
                                                        divider: !0,
                                                        children: [Object(w.jsx)(se.a, {
                                                            primary: a
                                                        }), Object(w.jsx)(ce.a, {
                                                            children: Object(w.jsx)(oe.a, {
                                                                className: "drag-handle",
                                                                children: Object(w.jsx)(de.a, {})
                                                            })
                                                        })]
                                                    })
                                                }, t)
                                            })), Object(w.jsx)(R.a, {
                                                variant: "contained",
                                                color: "primary",
                                                style: {
                                                    width: "135px",
                                                    margin: "30px 0 15px 15px"
                                                },
                                                onClick: this.handleEditSave,
                                                startIcon: Object(w.jsx)($.a, {}),
                                                children: "Save"
                                            })]
                                        })
                                    })]
                                }) : null]
                            }) : Object(w.jsx)("div", {
                                className: "Carousel",
                                children: s.length ? s.map((function(e) {
                                    return e.children.length || !n ? Object(w.jsxs)("div", {
                                        className: "carousel__category",
                                        children: [Object(w.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            children: [Object(w.jsx)("div", {
                                                style: {
                                                    display: "flex",
                                                    flexShrink: "0"
                                                },
                                                children: Object(w.jsx)(c.b, {
                                                    id: "".concat(e.categoryInfo.name),
                                                    to: "Starred" == e.categoryInfo.type ? "/starred#".concat(e.categoryInfo.name) : "/browse/".concat(e.categoryInfo.name),
                                                    className: "carousel__category__title no_decoration_link",
                                                    children: e.categoryInfo.name
                                                }, Ne())
                                            }), r || i ? null : Object(w.jsx)("div", {
                                                style: {
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "space-between"
                                                }
                                            })]
                                        }), Object(w.jsx)(z.a, {
                                            className: "sslider sslider-landscape p-2",
                                            navigation: !0,
                                            breakpoints: {
                                                240: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 10
                                                },
                                                470: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 10
                                                },
                                                740: {
                                                    slidesPerView: 4,
                                                    spaceBetween: 20
                                                },
                                                1194: {
                                                    slidesPerView: 6,
                                                    spaceBetween: 20
                                                }
                                            },
                                            children: e.children.length ? e.children.map((function(e) {
                                                return Object(w.jsx)(G.a, {
                                                    className: "sslider-slide",
                                                    children: Object(w.jsx)(c.b, {
                                                        to: "/view/".concat("file" == e.type ? "m" : "tb", "/").concat(e.id),
                                                        children: Object(w.jsxs)(ue.a, {
                                                            className: "show-hover-hidden",
                                                            children: [Object(w.jsx)("div", {
                                                                className: "card-img",
                                                                children: Object(w.jsx)(ue.a.Image, {
                                                                    className: "collection-bg-image rounded",
                                                                    src: e.posterPath || "".concat(l, "/api/v1/image/poster?text=").concat(e.title, "&extention=jpeg"),
                                                                    onError: function(e) {
                                                                        e.target.onerror = null, e.target.src = be
                                                                    },
                                                                    alt: e.title
                                                                })
                                                            }), Object(w.jsx)(ue.a.Caption, {
                                                                children: Object(w.jsx)("h6", {
                                                                    children: e.title
                                                                })
                                                            })]
                                                        })
                                                    }, Ne())
                                                }, Ne())
                                            })) : null
                                        })]
                                    }, Ne()) : null
                                })) : null
                            })
                        }
                    }]), a
                }(r.Component),
                fe = a(42),
                ve = a.n(fe),
                xe = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            auth: window.sessionStorage.getItem("auth") || window.localStorage.getItem("auth") || "0",
                            category: n.props.match.params.category,
                            genre: ve.a.parse(n.props.location.search).genre || "",
                            isLoaded: !1,
                            metadata: {},
                            page: parseInt(ve.a.parse(n.props.location.search).page) || 1,
                            range: "".concat(void 0 === ve.a.parse(n.props.location.search).page ? "0:".concat(JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}").range || "60") : "".concat((parseInt(ve.a.parse(n.props.location.search).page) - 1) * parseInt(JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}").range || "60"), ":").concat(parseInt(ve.a.parse(n.props.location.search).page) * parseInt(JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}").range || "60"))),
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin,
                            sort: ve.a.parse(n.props.location.search).sort || "popularity-des",
                            ui_config: JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}")
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.auth,
                                n = t.category,
                                r = t.genre,
                                i = t.range,
                                o = t.server,
                                s = t.sort,
                                c = t.ui_config;
                            a && o || this.props.history.push("/logout"), window.scrollTo(0, 0);
                            var l = "".concat(o, "/api/v1/metadata"),
                                d = "?a=".concat(a, "&c=").concat(encodeURIComponent(n), "&g=").concat(encodeURIComponent(r), "&r=").concat(i, "&s=").concat(s);
                            N.a.get(l + d).then((function(t) {
                                e.setState({
                                    isLoaded: !0,
                                    metadata: t.data.content,
                                    pages: Math.ceil(t.data.content[0].length / parseInt(c.range || "60")) || 1
                                })
                            })).catch((function(t) {
                                if (console.error(t), t.response) {
                                    var a = t.response.data;
                                    401 === a.code ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Login",
                                        confirmButtonColor: Ft.palette.success.main
                                    }).then((function(t) {
                                        t.isConfirmed && e.props.history.push("/logout")
                                    })) : o ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Logout",
                                        confirmButtonColor: Ft.palette.success.main,
                                        cancelButtonText: "Retry",
                                        cancelButtonColor: Ft.palette.error.main,
                                        showCancelButton: !0
                                    }).then((function(t) {
                                        t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                    })) : e.props.history.push("/logout")
                                } else t.request && (o ? k.a.fire({
                                    title: "Error!",
                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                    icon: "error",
                                    confirmButtonText: "Sair",
                                    confirmButtonColor: Ft.palette.success.main,
                                    cancelButtonText: "Tente Novamente",
                                    cancelButtonColor: Ft.palette.error.main,
                                    showCancelButton: !0
                                }).then((function(t) {
                                    t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                })) : e.props.history.push("/logout"))
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            ht()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.genre,
                                a = e.isLoaded,
                                r = e.metadata,
                                i = e.page,
                                o = e.pages,
                                s = e.sort,
                                c = e.ui_config;
                            return a && ht({
                                title: "".concat(c.title || "libDrive", " - ").concat(r[0].categoryInfo.name),
                                description: "Browse ".concat(r[0].categoryInfo.name, " on ").concat(c.title || "libDrive", "!")
                            }), a ? Object(w.jsxs)("div", {
                                className: "CategoryBrowse",
                                children: [Object(w.jsx)(He, Object(n.a)({}, this.props)), Object(w.jsx)(Kt, {
                                    metadata: r
                                }), Object(w.jsx)(at, {
                                    state: {
                                        genre: t,
                                        page: i,
                                        pages: o,
                                        sort: s
                                    },
                                    props: this.props
                                }), Object(w.jsx)(Ct, {
                                    state: {
                                        genre: t,
                                        sort: s
                                    },
                                    props: this.props
                                }), Object(w.jsx)(ke, {})]
                            }) : Object(w.jsx)(Re, {})
                        }
                    }]), a
                }(r.Component),
                ye = a(301),
                we = (a(233), function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var r;
                        return Object(h.a)(this, a), (r = t.call(this, e)).state = Object(n.a)({
                            menuAnchor: !1
                        }, e.state), r
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state.metadata;
                            return Object(w.jsxs)("div", {
                                children: [Object(w.jsx)("h4", {
                                    children: "Temporadas"
                                }), Object(w.jsx)("div", {
                                    className: "season-container",
                                    children: t.children.length ? t.children.map((function(t) {
                                        if ("directory" == t.type) return Object(w.jsx)(c.b, {
                                            to: "/view/ts/".concat(t.id, "?q=0"),
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)("h4", {
                                                children: Object(w.jsx)(ye.a, {
                                                    variant: "dark",
                                                    className: "season-single",
                                                    onClick: e.handleClose,
                                                    children: t.name
                                                })
                                            })
                                        }, Ne())
                                    })) : null
                                })]
                            })
                        }
                    }]), a
                }(r.Component));
            var Se = a(8),
                Ce = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a() {
                        return Object(h.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.classes;
                            return Object(w.jsx)("div", {
                                style: {
                                    paddingTop: "75px"
                                },
                                children: Object(w.jsxs)("footer", {
                                    className: e.footer__container,
                                    id: "footer__container",
                                    children: [Object(w.jsx)("a", {
                                        href: "#",
                                        children: Object(w.jsx)("img", {
                                            src: "/images/github.gif",
                                            className: "footer__github",
                                            height: "64px",
                                            alt: "github-logo"
                                        })
                                    }), Object(w.jsx)("a", {
                                        className: "no_decoration_link footer__text",
                                        href: "#",
                                        children: "\xa9 2023.".concat(Gt.a, " - CineDrive")
                                    })]
                                })
                            })
                        }
                    }]), a
                }(r.Component),
                ke = Object(Se.a)((function(e) {
                    return {
                        footer__container: {
                            width: "100%",
                            height: "75px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "20px"
                        }
                    }
                }), {
                    withTheme: !0
                })(Ce),
                _e = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            auth: window.sessionStorage.getItem("auth") || window.localStorage.getItem("auth") || "0",
                            genre: ve.a.parse(n.props.location.search).genre || "",
                            isLoaded: !1,
                            metadata: {},
                            page: parseInt(ve.a.parse(n.props.location.search).page) || 1,
                            range: "".concat(void 0 === ve.a.parse(n.props.location.search).page ? "0:12" : "".concat(12 * (parseInt(ve.a.parse(n.props.location.search).page) - 1), ":").concat(12 * parseInt(ve.a.parse(n.props.location.search).page))),
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin,
                            sort: ve.a.parse(n.props.location.search).sort || "",
                            ui_config: JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}")
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.auth,
                                n = t.genre,
                                r = t.range,
                                i = t.server,
                                o = t.sort;
                            a && i || this.props.history.push("/logout");
                            var s = "".concat(i, "/api/v1/metadata"),
                                c = "?a=".concat(a, "&g=").concat(encodeURIComponent(n), "&r=").concat(r, "&s=").concat(o);
                            N.a.get(s + c).then((function(t) {
                                e.setState({
                                    isLoaded: !0,
                                    metadata: t.data.content,
                                    pages: Math.ceil(t.data.content[0].length / 12) || 1
                                })
                            })).catch((function(t) {
                                if (console.error(t), t.response) {
                                    var a = t.response.data;
                                    401 === a.code ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Login",
                                        confirmButtonColor: Ft.palette.success.main
                                    }).then((function(t) {
                                        t.isConfirmed && e.props.history.push("/logout")
                                    })) : i ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Logout",
                                        confirmButtonColor: Ft.palette.success.main,
                                        cancelButtonText: "Retry",
                                        cancelButtonColor: Ft.palette.error.main,
                                        showCancelButton: !0
                                    }).then((function(t) {
                                        t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                    })) : e.props.history.push("/logout")
                                } else t.request && (i ? k.a.fire({
                                    title: "Error!",
                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                    icon: "error",
                                    confirmButtonText: "Sair",
                                    confirmButtonColor: Ft.palette.success.main,
                                    cancelButtonText: "Tente Novamente",
                                    cancelButtonColor: Ft.palette.error.main,
                                    showCancelButton: !0
                                }).then((function(t) {
                                    t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                })) : e.props.history.push("/logout"))
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            ht()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.genre,
                                a = e.isLoaded,
                                r = e.metadata,
                                i = e.page,
                                o = e.pages,
                                s = e.sort,
                                c = e.ui_config;
                            return a && ht({
                                title: "".concat(c.title || "libDrive").concat(t ? " - ".concat(t) : ""),
                                description: "Browse ".concat(t ? "the ".concat(t, " genre") : "genres", " on ").concat(c.title || "libDrive", "!")
                            }), a ? Object(w.jsxs)("div", {
                                className: "CategoryBrowse",
                                children: [Object(w.jsx)(He, Object(n.a)({}, this.props)), Object(w.jsx)(Kt, {
                                    metadata: r
                                }), Object(w.jsx)(at, {
                                    state: {
                                        genre: t,
                                        page: i,
                                        pages: o,
                                        sort: s
                                    },
                                    props: this.props
                                }), Object(w.jsx)(Ct, {
                                    state: {
                                        genre: t,
                                        sort: s
                                    },
                                    props: this.props
                                }), Object(w.jsx)(ke, {})]
                            }) : Object(w.jsx)(Re, {})
                        }
                    }]), a
                }(r.Component);

            function Ne() {
                function e(e) {
                    var t = (Math.random().toString(16) + "000000000").substr(2, 8);
                    return e ? "-" + t.substr(0, 4) + "-" + t.substr(4, 4) : t
                }
                return e() + e(!0) + e(!0) + e()
            }
            var Ie = a(302),
                Be = a(331),
                Te = a(109),
                De = a.n(Te),
                Ee = a(322),
                Ae = (a(234), function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            auth: "",
                            error: "",
                            page: !1,
                            password: "",
                            signup: !1,
                            server: window.location.origin,
                            username: ""
                        }, n.handleTempServerChange = n.handleTempServerChange.bind(Object(m.a)(n)), n.handlePassChange = n.handlePassChange.bind(Object(m.a)(n)), n.handleUserChange = n.handleUserChange.bind(Object(m.a)(n)), n.handleServerSubmit = n.handleServerSubmit.bind(Object(m.a)(n)), n.handleSubmit = n.handleSubmit.bind(Object(m.a)(n)), n.handleSignup = n.handleSignup.bind(Object(m.a)(n)), n.dismissError = n.dismissError.bind(Object(m.a)(n)), n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.state.server,
                                a = "".concat(t, "/api/v1/auth");
                            N.a.get(a + "?rules=signup").then((function(a) {
                                var n = a.data;
                                200 === n.code ? (window.localStorage.setItem("auth", "0"), window.localStorage.setItem("server", t), window.localStorage.setItem("ui_config", JSON.stringify(n.content.ui_config)), window.sessionStorage.setItem("auth", "0"), window.sessionStorage.setItem("server", t), window.sessionStorage.setItem("ui_config", JSON.stringify(n.content.ui_config)), e.props.history.push("/browse")) : !0 === n.content ? e.setState({
                                    signup: !0,
                                    page: !0
                                }) : !1 === n.content && e.setState({
                                    signup: !1,
                                    page: !0
                                })
                            }))
                        }
                    }, {
                        key: "dismissError",
                        value: function() {
                            this.setState({
                                error: ""
                            })
                        }
                    }, {
                        key: "handleServerSubmit",
                        value: function(e) {
                            var t = this;
                            e.preventDefault();
                            var a = this.state.server;
                            if (!a) return this.setState({
                                error: "Server is required"
                            });
                            a.startsWith("http") || (a = "https://".concat(a));
                            var n = "".concat(a, "/api/v1/auth");
                            N.a.get(n + "?rules=signup").then((function(e) {
                                var n = e.data;
                                200 === n.code ? (window.localStorage.setItem("auth", "0"), window.localStorage.setItem("server", a), window.localStorage.setItem("ui_config", JSON.stringify(n.content.ui_config)), window.sessionStorage.setItem("auth", "0"), window.sessionStorage.setItem("server", a), window.sessionStorage.setItem("ui_config", JSON.stringify(n.content.ui_config)), t.props.history.push("/browse")) : !0 === n.content ? t.setState({
                                    server: a,
                                    signup: !0,
                                    page: !0
                                }) : !1 === n.content && t.setState({
                                    server: a,
                                    signup: !1,
                                    page: !0
                                })
                            })).catch((function(e) {
                                console.error(e);
                                try {
                                    var t = response.data;
                                    k.a.fire({
                                        title: "Error!",
                                        text: t.message,
                                        icon: "error",
                                        confirmButtonText: "OK",
                                        confirmButtonColor: Ft.palette.success.main
                                    })
                                } catch (a) {
                                    k.a.fire({
                                        title: "Error!",
                                        text: "Voc\xea n\xe3o conseguiu se comunicar com o servidor.",
                                        icon: "error",
                                        confirmButtonText: "OK",
                                        confirmButtonColor: Ft.palette.success.main
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "handleSubmit",
                        value: function(e) {
                            var t = this;
                            e.preventDefault();
                            var a = this.state,
                                n = a.password,
                                r = a.server,
                                i = a.username,
                                o = "".concat(r, "/api/v1/auth"),
                                s = "?u=".concat(encodeURIComponent(i), "&p=").concat(encodeURIComponent(n));
                            return N.a.get(o + s).then((function(e) {
                                var a = e.data;
                                window.localStorage.setItem("server", r), window.sessionStorage.setItem("server", r), window.localStorage.setItem("ui_config", JSON.stringify(a.content.ui_config)), window.localStorage.setItem("auth", a.content.auth), window.sessionStorage.setItem("auth", a.content.auth), window.sessionStorage.setItem("ui_config", JSON.stringify(a.content.ui_config)), t.props.history.push("/")
                            })).catch((function(e) {
                                console.error(e);
                                try {
                                    var t = response.data;
                                    k.a.fire({
                                        title: "Error!",
                                        text: t.message,
                                        icon: "error",
                                        confirmButtonText: "OK",
                                        confirmButtonColor: Ft.palette.success.main
                                    })
                                } catch (a) {
                                    k.a.fire({
                                        title: "Error!",
                                        text: "The username and or password was incorrect!",
                                        icon: "error",
                                        confirmButtonText: "OK",
                                        confirmButtonColor: Ft.palette.success.main
                                    })
                                }
                            })), this.setState({
                                error: ""
                            })
                        }
                    }, {
                        key: "handleSignup",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.password,
                                n = t.server,
                                r = t.username;
                            if (!r) return this.setState({
                                error: "Username is required"
                            });
                            if (!a) return this.setState({
                                error: "Password is required"
                            });
                            var i = "".concat(n, "/api/v1/signup"),
                                o = "?u=".concat(encodeURIComponent(r), "&p=").concat(encodeURIComponent(a));
                            return N.a.get(i + o).then((function(t) {
                                var a = t.data;
                                window.localStorage.setItem("server", n), window.sessionStorage.setItem("server", n), window.localStorage.setItem("auth", a.content.auth), window.sessionStorage.setItem("auth", a.content.auth), e.props.history.push("/")
                            })).catch((function(e) {
                                console.error(e);
                                var t = e.response;
                                try {
                                    k.a.fire({
                                        title: "Error!",
                                        text: t.message,
                                        icon: "error",
                                        confirmButtonText: "OK",
                                        confirmButtonColor: Ft.palette.success.main
                                    })
                                } catch (a) {
                                    k.a.fire({
                                        title: "Error!",
                                        text: "Algo deu errado ao se comunicar com o servidor.",
                                        icon: "error",
                                        confirmButtonText: "OK",
                                        confirmButtonColor: Ft.palette.success.main
                                    })
                                }
                            })), this.setState({
                                error: ""
                            })
                        }
                    }, {
                        key: "handleTempServerChange",
                        value: function(e) {
                            this.setState({
                                server: e.target.value
                            })
                        }
                    }, {
                        key: "handleUserChange",
                        value: function(e) {
                            this.setState({
                                username: e.target.value
                            })
                        }
                    }, {
                        key: "handlePassChange",
                        value: function(e) {
                            this.setState({
                                password: e.target.value
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.error,
                                a = e.password,
                                n = e.page,
                                r = e.server,
                                i = e.username,
                                o = this.props.classes;
                            return n ? Object(w.jsxs)("div", {
                                className: "Login-form",
                                children: [Object(w.jsxs)(Ie.a, {
                                    className: "Login-form-container",
                                    component: "main",
                                    maxWidth: "xs",
                                    children: [Object(w.jsx)(d.a, {}), Object(w.jsxs)("div", {
                                        className: o.paper,
                                        children: [Object(w.jsx)(Be.a, {
                                            className: o.avatar,
                                            children: Object(w.jsx)(De.a, {})
                                        }), Object(w.jsx)(A.a, {
                                            variant: "h5",
                                            children: "Servidor - Entrar"
                                        }), Object(w.jsxs)("form", {
                                            className: o.form,
                                            onSubmit: this.handleSubmit,
                                            noValidate: !0,
                                            children: [t && Object(w.jsx)("div", {
                                                style: {},
                                                children: Object(w.jsxs)("h3", {
                                                    "data-test": "error",
                                                    onClick: this.dismissError,
                                                    children: [Object(w.jsx)("button", {
                                                        onClick: this.dismissError,
                                                        children: "\u2716"
                                                    }), t]
                                                })
                                            }), Object(w.jsxs)(Ee.a.Group, {
                                                className: "mb-3",
                                                children: [Object(w.jsx)(Ee.a.Label, {
                                                    children: "Server"
                                                }), Object(w.jsx)(Ee.a.Control, {
                                                    disabled: !0,
                                                    placeholder: r,
                                                    onChange: this.handleTempServerChange
                                                })]
                                            }), Object(w.jsxs)(Ee.a.Group, {
                                                className: "mb-3",
                                                children: [Object(w.jsx)(Ee.a.Label, {
                                                    children: "Username"
                                                }), Object(w.jsx)(Ee.a.Control, {
                                                    placeholder: "Username",
                                                    value: i,
                                                    onChange: this.handleUserChange
                                                })]
                                            }), Object(w.jsxs)(Ee.a.Group, {
                                                className: "mb-3",
                                                children: [Object(w.jsx)(Ee.a.Label, {
                                                    children: "Password"
                                                }), Object(w.jsx)(Ee.a.Control, {
                                                    type: "password",
                                                    placeholder: "Password",
                                                    value: a,
                                                    onChange: this.handlePassChange
                                                })]
                                            }), Object(w.jsx)(B.a, {
                                                type: "submit",
                                                style: {
                                                    width: "100%"
                                                },
                                                variant: "primary",
                                                className: o.submit,
                                                children: "Aviso: A Busca não está Funcionando"
                                            }), this.state.signup ? Object(w.jsxs)("div", {
                                                className: "Signup",
                                                style: {
                                                    textAlign: "center"
                                                },
                                                children: [Object(w.jsx)(B.a, {
                                                    type: "button",
                                                    onClick: this.handleSignup,
                                                    fullWidth: !0,
                                                    variant: "primary",
                                                    style: {
                                                        marginTop: 0
                                                    },
                                                    className: o.submit,
                                                    children: "Sign Up"
                                                }), Object(w.jsx)(A.a, {
                                                    variant: "body1",
                                                    children: "Be aware that the owner of this server can view your credentials!"
                                                })]
                                            }) : Object(w.jsx)("div", {
                                                className: "Signup"
                                            })]
                                        })]
                                    })]
                                }), Object(w.jsx)(ke, {})]
                            }) : Object(w.jsxs)("div", {
                                className: "Login-form",
                                children: [Object(w.jsxs)(Ie.a, {
                                    className: "Login-form-container",
                                    component: "main",
                                    maxWidth: "xs",
                                    children: [Object(w.jsx)(d.a, {}), Object(w.jsxs)("div", {
                                        className: o.paper,
                                        children: [Object(w.jsx)(Be.a, {
                                            className: o.avatar,
                                            children: Object(w.jsx)(De.a, {})
                                        }), Object(w.jsx)(A.a, {
                                            variant: "h5",
                                            children: "Servidor - Entrar"
                                        }), Object(w.jsxs)("form", {
                                            className: o.form,
                                            onSubmit: this.handleServerSubmit,
                                            noValidate: !0,
                                            children: [t && Object(w.jsx)("div", {
                                                style: {},
                                                children: Object(w.jsxs)("h3", {
                                                    "data-test": "error",
                                                    onClick: this.dismissError,
                                                    children: [Object(w.jsx)("button", {
                                                        onClick: this.dismissError,
                                                        children: "\u2716"
                                                    }), t]
                                                })
                                            }), Object(w.jsxs)(Ee.a.Group, {
                                                className: "mb-3",
                                                controlId: "exampleForm.ControlInput1",
                                                children: [Object(w.jsx)(Ee.a.Label, {
                                                    children: "Servidor"
                                                }), Object(w.jsx)(Ee.a.Control, {
                                                    placeholder: r,
                                                    onChange: this.handleTempServerChange
                                                })]
                                            }), Object(w.jsx)(B.a, {
                                                style: {
                                                    width: "100%"
                                                },
                                                type: "submit",
                                                variant: "primary",
                                                className: o.submit,
                                                children: "Iniciar"
                                            })]
                                        })]
                                    })]
                                }), Object(w.jsx)(ke, {})]
                            })
                        }
                    }]), a
                }(r.Component)),
                Le = Object(Se.a)((function(e) {
                    return {
                        paper: {
                            marginTop: e.spacing(8),
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        avatar: {
                            margin: e.spacing(1),
                            backgroundColor: e.palette.secondary.main
                        },
                        form: {
                            width: "100%",
                            marginTop: e.spacing(1)
                        },
                        submit: {
                            margin: e.spacing(3, 0, 2)
                        }
                    }
                }), {
                    withTheme: !0
                })(Ae),
                Me = (a(235), function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a() {
                        return Object(h.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            return Object(w.jsx)("div", {
                                className: "loader-container",
                                children: Object(w.jsxs)("div", {
                                    className: "loader",
                                    children: [Object(w.jsx)("div", {
                                        className: "square one"
                                    }), Object(w.jsx)("div", {
                                        className: "square two"
                                    })]
                                })
                            })
                        }
                    }]), a
                }(r.Component)),
                Re = Me,
                Pe = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            isLoaded: !1
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            window.localStorage.clear(), window.sessionStorage.clear(), setTimeout((function() {
                                return e.setState({
                                    isLoaded: !0
                                })
                            }), 500)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isLoaded ? Object(w.jsx)(l.a, {
                                to: "/login"
                            }, Ne()) : Object(w.jsx)(Re, {})
                        }
                    }]), a
                }(r.Component),
                Ue = a(21),
                qe = a(321),
                Je = a(304),
                Fe = a(324),
                We = (a(236), a(319)),
                Ve = a(180),
                Ke = a.n(Ve),
                ze = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            menuAnchor: !1,
                            ui_config: e.ui_config
                        }, n.handleClick = n.handleClick.bind(Object(m.a)(n)), n.handleClose = n.handleClose.bind(Object(m.a)(n)), n.handleTheme = n.handleTheme.bind(Object(m.a)(n)), n
                    }
                    return Object(p.a)(a, [{
                        key: "handleClick",
                        value: function(e) {
                            this.setState({
                                menuAnchor: e.currentTarget
                            })
                        }
                    }, {
                        key: "handleClose",
                        value: function(e) {
                            this.setState({
                                menuAnchor: !1
                            })
                        }
                    }, {
                        key: "handleTheme",
                        value: function(e) {
                            this.setState({
                                menuAnchor: !1
                            }), window.localStorage.setItem("theme", e), window.sessionStorage.setItem("theme", e), window.location.reload()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state;
                            t.menuAnchor, t.ui_config;
                            return Object(w.jsx)("div", {
                                className: "ThemeMenu",
                                children: Object(w.jsxs)(We.a, {
                                    children: [Object(w.jsx)(We.a.Toggle, {
                                        id: "dropdown-basic",
                                        children: Object(w.jsx)(Ke.a, {})
                                    }), Object(w.jsx)(We.a.Menu, {
                                        children: Object(w.jsx)(We.a.Item, {
                                            onClick: function() {
                                                return e.handleTheme("dark")
                                            },
                                            children: "Dark"
                                        })
                                    })]
                                })
                            })
                        }
                    }]), a
                }(r.Component),
                Ge = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var r;
                        return Object(h.a)(this, a), (r = t.call(this, e)).state = Object(n.a)(Object(n.a)({}, e.state), {}, {
                            ui_config: JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}")
                        }), r.searchChange = r.searchChange.bind(Object(m.a)(r)), r.searchSubmit = r.searchSubmit.bind(Object(m.a)(r)), r.onMouseOver = r.onMouseOver.bind(Object(m.a)(r)), r.onMouseOut = r.onMouseOut.bind(Object(m.a)(r)), r
                    }
                    return Object(p.a)(a, [{
                        key: "searchChange",
                        value: function(e) {
                            this.setState({
                                search: e.target.value
                            })
                        }
                    }, {
                        key: "searchSubmit",
                        value: function(e) {
                            e.preventDefault(), "" != this.state.search && null != this.state.search && this.props.history.push({
                                pathname: "/search/".concat(this.state.search),
                                key: Ne()
                            })
                        }
                    }, {
                        key: "onMouseOver",
                        value: function(e) {
                            e.target.style.width = "20vw"
                        }
                    }, {
                        key: "onMouseOut",
                        value: function(e) {
                            e.target.style.width = "15vw"
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.accounts,
                                a = e.categories,
                                n = (e.query, e.search, e.ui_config);
                            this.props.classes;
                            return Object(w.jsx)(qe.a, {
                                expand: "lg",
                                variant: "dark",
                                children: Object(w.jsxs)(Je.a, {
                                    fluid: !0,
                                    className: "d-container",
                                    children: [Object(w.jsx)(qe.a.Brand, {
                                        as: c.b,
                                        to: "/",
                                        children: Object(w.jsx)("img", {
                                            src: je,
                                            width: "180",
                                            className: "logo-full d-inline-block align-top",
                                            alt: "Dester Logo-Full"
                                        })
                                    }), Object(w.jsx)(qe.a.Toggle, {
                                        "aria-controls": "basic-navbar-nav"
                                    }), Object(w.jsxs)(qe.a.Collapse, {
                                        id: "basic-navbar-nav",
                                        children: [Object(w.jsxs)(Fe.a, {
                                            className: "me-auto",
                                            children: [Object(w.jsxs)(Fe.a.Link, {
                                                as: c.b,
                                                to: "/",
                                                children: [Object(w.jsx)("i", {
                                                    className: "icon-navbar color-1 gg-home-alt"
                                                }), "Inicio"]
                                            }), Object(w.jsxs)(Fe.a.Link, {
                                                as: c.b,
                                                to: "/search",
                                                children: [Object(w.jsx)("i", {
                                                    className: "icon-navbar color-2 gg-search"
                                                }), "Procurar"]
                                            })]
                                        }), Object(w.jsx)(T, {
                                            categories: a
                                        }), Object(w.jsx)(S, {
                                            accounts: t,
                                            ui_config: n
                                        }), Object(w.jsx)(ze, {
                                            ui_config: n
                                        })]
                                    })]
                                })
                            })
                        }
                    }]), a
                }(r.Component),
                He = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            accounts: {},
                            auth: window.sessionStorage.getItem("auth") || window.localStorage.getItem("auth") || "0",
                            categories: [],
                            isLoaded: !1,
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin,
                            ui_config: {}
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.auth,
                                n = t.server,
                                r = "".concat(n, "/api/v1/environment"),
                                i = "?a=".concat(a);
                            N.a.get(r + i).then((function(t) {
                                var a = t.data;
                                e.setState({
                                    accounts: a.content.account_list,
                                    categories: a.content.category_list,
                                    isLoaded: !0,
                                    ui_config: a.content.ui_config
                                }), "object" == typeof a.content.ui_config && (window.localStorage.setItem("ui_config", JSON.stringify(a.content.ui_config)), window.sessionStorage.setItem("ui_config", JSON.stringify(a.content.ui_config)))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.accounts,
                                a = e.categories,
                                r = e.isLoaded;
                            return r || r ? Object(w.jsx)("div", {
                                className: "Nav",
                                children: Object(w.jsx)(Ge, Object(n.a)({
                                    state: {
                                        accounts: t,
                                        categories: a,
                                        query: this.props.query
                                    }
                                }, this.props))
                            }) : Object(w.jsx)(Ge, Object(n.a)({
                                state: {
                                    accounts: [],
                                    categories: [],
                                    query: this.props.query
                                }
                            }, this.props))
                        }
                    }]), a
                }(r.Component),
                Xe = a(305),
                Ye = a(145),
                Ze = a.n(Ye),
                Qe = (r.Component, a(239), function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a() {
                        return Object(h.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            return Object(w.jsxs)("div", {
                                className: "NotFound",
                                children: [Object(w.jsx)(He, Object(n.a)({}, this.props)), Object(w.jsx)("div", {
                                    className: "nf",
                                    children: Object(w.jsx)("div", {
                                        className: "fof",
                                        children: Object(w.jsx)("h1", {
                                            children: "Error 404: Not Found"
                                        })
                                    })
                                })]
                            })
                        }
                    }]), a
                }(r.Component)),
                $e = a(337),
                et = a(327),
                tt = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = e.state, n
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.genre,
                                r = t.page,
                                i = t.pages,
                                o = t.sort,
                                s = this.props.classes;
                            return r > i ? Object(w.jsx)(l.a, {
                                to: {
                                    pathname: this.props.props.location.pathname,
                                    search: "?page=".concat(i, "&genre=").concat(a, "&sort=").concat(o)
                                }
                            }, Ne()) : Object(w.jsx)("div", {
                                className: s.root,
                                children: Object(w.jsx)($e.a, {
                                    page: r,
                                    count: i,
                                    variant: "outlined",
                                    size: window.innerWidth >= 600 ? "large" : window.innerWidth >= 390 ? "medium" : "small",
                                    color: "primary",
                                    renderItem: function(t) {
                                        return t.page ? Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: e.props.props.location.pathname,
                                                search: "?page=".concat(t.page, "&genre=").concat(a, "&sort=").concat(o)
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(et.a, Object(n.a)({}, t))
                                        }, Ne()) : Object(w.jsx)(et.a, Object(n.a)({}, t))
                                    }
                                })
                            })
                        }
                    }]), a
                }(r.Component),
                at = Object(Se.a)((function(e) {
                    return {
                        root: {
                            "& > *": {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "20px"
                            }
                        }
                    }
                }), {
                    withTheme: !0
                })(tt),
                nt = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var r;
                        return Object(h.a)(this, a), (r = t.call(this, e)).state = Object(n.a)({
                            menuAnchor: !1
                        }, e.state), r.handleClick = r.handleClick.bind(Object(m.a)(r)), r.handleClose = r.handleClose.bind(Object(m.a)(r)), r
                    }
                    return Object(p.a)(a, [{
                        key: "handleClick",
                        value: function(e) {
                            this.setState({
                                menuAnchor: e.currentTarget
                            })
                        }
                    }, {
                        key: "handleClose",
                        value: function(e) {
                            this.setState({
                                menuAnchor: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.state,
                                a = t.auth,
                                n = t.id,
                                r = t.isAndroid,
                                i = t.isIOS,
                                o = t.metadata,
                                s = t.server,
                                c = new URL("".concat(s, "/api/v1/redirectdownload/").concat(encodeURIComponent(o.name), "?a=").concat(a, "&id=").concat(n));
                            if (r) {
                                var l = c.protocol.slice(0, -1);
                                c.hash = "Intent;action=android.intent.action.VIEW;scheme=".concat(l, ";type=").concat(o.mimeType, ";S.title=").concat(encodeURIComponent(o.name), ";end"), c.protocol = "intent", e = c.toString()
                            } else i && (c.host = "x-callback-url", c.port = "", c.pathname = "stream", c.search = "url=".concat(s, "/api/v1/redirectdownload/").concat(encodeURIComponent(o.name), "?a=").concat(a, "&id=").concat(n), c.protocol = "vlc-x-callback", e = c.toString());
                            return Object(w.jsxs)("div", {
                                className: "info__button",
                                children: [Object(w.jsxs)(B.a, {
                                    variant: "primary",
                                    "aria-controls": "player-menu",
                                    "aria-haspopup": "true",
                                    onClick: this.handleClick,
                                    children: [Object(w.jsx)("i", {
                                        className: "bi bi-play-fill"
                                    }), "Player Externo"]
                                }), Object(w.jsxs)(O.a, {
                                    id: "player-menu",
                                    anchorEl: this.state.menuAnchor,
                                    keepMounted: !0,
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    open: Boolean(this.state.menuAnchor),
                                    onClose: this.handleClose,
                                    children: [r || i ? Object(w.jsxs)("div", {
                                        children: [Object(w.jsx)("a", {
                                            href: e,
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                onClick: this.handleClose,
                                                children: r ? "Player Android" : i ? "IOS selector" : null
                                            })
                                        }), Object(w.jsx)(f.a, {})]
                                    }) : Object(w.jsx)("div", {
                                        children: Object(w.jsx)("a", {
                                            href: "vlc://".concat(s, "/api/v1/redirectdownload/").concat(encodeURIComponent(o.name), "?a=").concat(a, "&id=").concat(n),
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                onClick: this.handleClose,
                                                children: "VLC Player"
                                            })
                                        })
                                    }), Object(w.jsx)(f.a, {})]
                                })]
                            })
                        }
                    }]), a
                }(r.Component),
                rt = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = e.state, n.handleClick = n.handleClick.bind(Object(m.a)(n)), n
                    }
                    return Object(p.a)(a, [{
                        key: "handleClick",
                        value: function(e) {
                            for (var t = this.state, a = t.auth, n = t.metadata, r = t.server, i = "#EXTM3U\n#EXTENC: UTF-8\n#PLAYLIST: ".concat(n.name, "\n"), o = 0; o < n.children.length; o++) i += "#EXTINF:0, ".concat(n.children[o].name, "\n").concat(r, "/api/v1/redirectdownload/").concat(encodeURI(n.children[o].name), "?a=").concat(a, "&id=").concat(n.children[o].id, "\n");
                            var s = document.createElement("a");
                            s.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(i)), s.setAttribute("download", "PlayList".concat(n.name, ".m3u8")), s.style.display = "true", document.body.appendChild(s), s.click(), document.body.removeChild(s)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(w.jsx)("div", {
                                className: "info__button"
                            })
                        }
                    }]), a
                }(r.Component),
                it = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a() {
                        return Object(h.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidUpdate",
                        value: function(e) {
                            this.props.location !== e.location && window.scrollTo(0, 0)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.children
                        }
                    }]), a
                }(r.Component),
                ot = it,
                st = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            auth: window.sessionStorage.getItem("auth") || window.localStorage.getItem("auth") || "0",
                            isLoaded: !1,
                            metadata: [],
                            query: n.props.match.params.q,
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin,
                            ui_config: JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}")
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.auth,
                                n = t.query,
                                r = t.server,
                                i = t.ui_config;
                            a && r || this.props.history.push("/logout"), ht({
                                title: "".concat(i.title || "libDrive", " - ").concat(n),
                                description: "Find ".concat(n, " on ").concat(i.title || "libDrive", "!")
                            });
                            var o = "".concat(r, "/api/v1/metadata"),
                                s = "?a=".concat(a, "&q=").concat(encodeURIComponent(n));
                            N.a.get(o + s).then((function(t) {
                                return e.setState({
                                    isLoaded: !0,
                                    metadata: t.data.content
                                })
                            })).catch((function(t) {
                                if (console.error(t), t.response) {
                                    var a = t.response.data;
                                    401 === a.code ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Login",
                                        confirmButtonColor: Ft.palette.success.main
                                    }).then((function(t) {
                                        t.isConfirmed && e.props.history.push("/logout")
                                    })) : r ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Logout",
                                        confirmButtonColor: Ft.palette.success.main,
                                        cancelButtonText: "Retry",
                                        cancelButtonColor: Ft.palette.error.main,
                                        showCancelButton: !0
                                    }).then((function(t) {
                                        t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                    })) : e.props.history.push("/logout")
                                } else t.request && (r ? k.a.fire({
                                    title: "Error!",
                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                    icon: "error",
                                    confirmButtonText: "Sair",
                                    confirmButtonColor: Ft.palette.success.main,
                                    cancelButtonText: "Tente Novamente",
                                    cancelButtonColor: Ft.palette.error.main,
                                    showCancelButton: !0
                                }).then((function(t) {
                                    t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                })) : e.props.history.push("/logout"))
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            ht()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.isLoaded,
                                a = e.metadata,
                                r = e.query;
                            return t ? Object(w.jsxs)("div", {
                                className: "Search",
                                children: [Object(w.jsx)(He, Object(n.a)(Object(n.a)({}, this.props), {}, {
                                    query: r
                                })), Object(w.jsx)(Oe, {
                                    metadata: a,
                                    hide: !0
                                }), Object(w.jsx)(ke, {})]
                            }) : Object(w.jsx)(Re, {})
                        }
                    }]), a
                }(r.Component),
                ct = (a(24), a(306)),
                lt = a(178),
                dt = (a(240), function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var r;
                        return Object(h.a)(this, a), (r = t.call(this, e)).state = Object(n.a)(Object(n.a)({}, e.state), {}, {
                            ui_config: JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}")
                        }), r.searchChange = r.searchChange.bind(Object(m.a)(r)), r.searchSubmit = r.searchSubmit.bind(Object(m.a)(r)), r
                    }
                    return Object(p.a)(a, [{
                        key: "searchChange",
                        value: function(e) {
                            this.setState({
                                search: e.target.value
                            })
                        }
                    }, {
                        key: "searchSubmit",
                        value: function(e) {
                            e.preventDefault(), "" != this.state.search && null != this.state.search && this.props.history.push({
                                pathname: "/search/".concat(this.state.search),
                                key: Ne()
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state;
                            e.accounts, e.categories, e.query, e.search, e.ui_config, this.props.classes;
                            return Object(w.jsxs)("div", {
                                children: [Object(w.jsx)(He, Object(n.a)({}, this.props)), Object(w.jsx)("div", {
                                    className: "search-wrapper",
                                    children: Object(w.jsx)("form", {
                                        onSubmit: this.searchSubmit,
                                        children: Object(w.jsxs)(ct.a, {
                                            className: "mb-3 sugoi-search-bar",
                                            children: [Object(w.jsx)(ct.a.Text, {
                                                id: "inputGroup-sizing-default",
                                                children: Object(w.jsx)("i", {
                                                    className: "color-2 gg-search"
                                                })
                                            }), Object(w.jsx)(lt.a, {
                                                placeholder: "Procurar...",
                                                "aria-label": "Default",
                                                "aria-describedby": "inputGroup-sizing-default",
                                                onChange: this.searchChange
                                            })]
                                        })
                                    })
                                })]
                            })
                        }
                    }]), a
                }(r.Component)),
                ut = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            accounts: {},
                            auth: window.sessionStorage.getItem("auth") || window.localStorage.getItem("auth") || "0",
                            categories: [],
                            isLoaded: !1,
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin,
                            ui_config: {}
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.auth,
                                n = t.server,
                                r = "".concat(n, "/api/v1/environment"),
                                i = "?a=".concat(a);
                            N.a.get(r + i).then((function(t) {
                                var a = t.data;
                                e.setState({
                                    accounts: a.content.account_list,
                                    categories: a.content.category_list,
                                    isLoaded: !0,
                                    ui_config: a.content.ui_config
                                }), "object" == typeof a.content.ui_config && (window.localStorage.setItem("ui_config", JSON.stringify(a.content.ui_config)), window.sessionStorage.setItem("ui_config", JSON.stringify(a.content.ui_config)))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.accounts,
                                a = e.categories,
                                r = e.isLoaded;
                            return r || r ? Object(w.jsx)("div", {
                                className: "Nav",
                                children: Object(w.jsx)(dt, Object(n.a)({
                                    state: {
                                        accounts: t,
                                        categories: a,
                                        query: this.props.query
                                    }
                                }, this.props))
                            }) : Object(w.jsx)(dt, Object(n.a)({
                                state: {
                                    accounts: [],
                                    categories: [],
                                    query: this.props.query
                                }
                            }, this.props))
                        }
                    }]), a
                }(r.Component);

            function ht() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}");
                e.title = e.title || t.title || "libDrive", e.description = e.description || "libDrive is a Google Drive media library manager and indexer, similar to Plex, that organizes Google Drive media to offer an intuitive and user-friendly experience.", e.image = e.image || t.icon || "/images/icons/icon-512x512.png", e.type = e.type || "website", document.title = e.title || t.title, document.querySelector('meta[property="og:title"]').setAttribute("content", e.title), document.querySelector('meta[name="description"]').setAttribute("content", e.description), document.querySelector('meta[property="og:description"]').setAttribute("content", e.description), document.querySelector('meta[property="og:image"]').setAttribute("content", e.image), document.querySelector('meta[property="og:type"]').setAttribute("content", e.type)
            }
            var pt, mt, jt = a(332),
                bt = a(335),
                gt = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            auth: window.sessionStorage.getItem("auth") || window.localStorage.getItem("auth") || "0",
                            error: "",
                            isLoaded: !1,
                            secret: window.sessionStorage.getItem("secret"),
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin
                        }, n.dismissError = n.dismissError.bind(Object(m.a)(n)), n.handleSubmit = n.handleSubmit.bind(Object(m.a)(n)), n.handleChange = n.handleChange.bind(Object(m.a)(n)), n.handleRestart = n.handleRestart.bind(Object(m.a)(n)), n.handleKillSwitch = n.handleKillSwitch.bind(Object(m.a)(n)), n.handleRebuild = n.handleRebuild.bind(Object(m.a)(n)), n.handleFileBrowser = n.handleFileBrowser.bind(Object(m.a)(n)), n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.secret,
                                r = t.server,
                                i = Object(n.a)({}, this.props);
                            if (i.classes = {}, null == window.sessionStorage.getItem("secret")) this.props.history.push("/settings/login");
                            else {
                                var o = "".concat(r, "/api/v1/config"),
                                    s = "?secret=".concat(encodeURIComponent(a));
                                N.a.get(o + s).then((function(t) {
                                    return e.setState({
                                        config: JSON.stringify(t.data.content, null, 4),
                                        isLoaded: !0,
                                        navProps: i,
                                        tempSecret: t.data.content.secret_key
                                    })
                                })).catch((function(t) {
                                    if (console.error(t), t.response) {
                                        var a = t.response.data;
                                        401 === a.code ? k.a.fire({
                                            title: "Error!",
                                            text: a.message,
                                            icon: "error",
                                            confirmButtonText: "Login",
                                            confirmButtonColor: Ft.palette.success.main
                                        }).then((function(t) {
                                            t.isConfirmed && e.props.history.push("/logout")
                                        })) : r ? k.a.fire({
                                            title: "Error!",
                                            text: a.message,
                                            icon: "error",
                                            confirmButtonText: "Logout",
                                            confirmButtonColor: Ft.palette.success.main,
                                            cancelButtonText: "Retry",
                                            cancelButtonColor: Ft.palette.error.main,
                                            showCancelButton: !0
                                        }).then((function(t) {
                                            t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                        })) : e.props.history.push("/logout")
                                    } else t.request && (r ? k.a.fire({
                                        title: "Error!",
                                        text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                        icon: "error",
                                        confirmButtonText: "Sair",
                                        confirmButtonColor: Ft.palette.success.main,
                                        cancelButtonText: "Tente Novamente",
                                        cancelButtonColor: Ft.palette.error.main,
                                        showCancelButton: !0
                                    }).then((function(t) {
                                        t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                    })) : e.props.history.push("/logout"))
                                }))
                            }
                        }
                    }, {
                        key: "dismissError",
                        value: function() {
                            this.setState({
                                error: ""
                            })
                        }
                    }, {
                        key: "handleRestart",
                        value: function(e) {
                            e.preventDefault();
                            var t = this.state,
                                a = t.secret,
                                n = t.server,
                                r = "".concat(n, "/api/v1/restart"),
                                i = "?secret=".concat(encodeURIComponent(a));
                            N.a.get(r + i).then((function(e) {
                                k.a.fire({
                                    title: "Success!",
                                    text: e.data.message,
                                    icon: "success",
                                    confirmButtonText: "OK",
                                    confirmButtonColor: Ft.palette.success.main
                                })
                            })).catch((function(e) {
                                console.error(e), k.a.fire({
                                    title: "Success!",
                                    text: "MeuDrive est\xe1 sendo reiniciado, isso pode levar algum tempo, ent\xe3o o aplicativo n\xe3o ser\xe1 carregado",
                                    icon: "success",
                                    confirmButtonText: "OK",
                                    confirmButtonColor: Ft.palette.success.main
                                })
                            }))
                        }
                    }, {
                        key: "handleSubmit",
                        value: function(e) {
                            var t = this;
                            e.preventDefault();
                            var a = this.state,
                                n = a.secret,
                                r = a.server,
                                i = "".concat(r, "/api/v1/config"),
                                o = "?secret=".concat(encodeURIComponent(n));
                            N.a.post(i + o, JSON.parse(this.state.config)).then((function(e) {
                                k.a.fire({
                                    title: "Success!",
                                    text: e.data.message,
                                    icon: "success",
                                    confirmButtonText: "OK",
                                    confirmButtonColor: Ft.palette.success.main
                                })
                            })).catch((function(e) {
                                if (console.error(e), e.response) {
                                    var a = e.response.data;
                                    401 === a.code ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Logout",
                                        confirmButtonColor: Ft.palette.success.main
                                    }).then((function(e) {
                                        e.isConfirmed && (window.sessionStorage.removeItem("secret"), t.props.history.push("/settings/login"))
                                    })) : k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Logout",
                                        confirmButtonColor: Ft.palette.success.main,
                                        cancelButtonText: "Retry",
                                        cancelButtonColor: Ft.palette.error.main,
                                        showCancelButton: !0
                                    }).then((function(e) {
                                        e.isConfirmed ? t.props.history.push("/logout") : e.isDismissed && location.reload()
                                    }))
                                } else e.request && k.a.fire({
                                    title: "Error!",
                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                    icon: "error",
                                    confirmButtonText: "Logout",
                                    confirmButtonColor: Ft.palette.success.main,
                                    cancelButtonText: "Retry",
                                    cancelButtonColor: Ft.palette.error.main,
                                    showCancelButton: !0
                                }).then((function(e) {
                                    e.isConfirmed ? t.props.history.push("/logout") : e.isDismissed && location.reload()
                                }))
                            }))
                        }
                    }, {
                        key: "handleChange",
                        value: function(e) {
                            this.setState({
                                config: e.target.value
                            })
                        }
                    }, {
                        key: "handleKillSwitch",
                        value: function(e) {
                            var t = JSON.parse(this.state.config);
                            t.kill_switch = e.target.checked, this.setState({
                                config: JSON.stringify(t, null, 4)
                            }), this.handleSubmit(e)
                        }
                    }, {
                        key: "handleRebuild",
                        value: function(e) {
                            var t = this,
                                a = this.state,
                                n = a.secret,
                                r = a.server,
                                i = "".concat(r, "/api/v1/rebuild"),
                                o = "?secret=".concat(encodeURIComponent(n));
                            N.a.get(i + o).then((function(e) {
                                return k.a.fire({
                                    title: "Success!",
                                    text: "libDrive's metadata is being rebuilt...",
                                    icon: "success",
                                    confirmButtonText: "OK",
                                    confirmButtonColor: Ft.palette.success.main
                                })
                            })).catch((function(e) {
                                console.error(e), null == auth || null == r ? t.props.history.push("/login") : e.response ? 401 === e.response.status ? k.a.fire({
                                    title: "Error!",
                                    text: "Your credentials are invalid!",
                                    icon: "error",
                                    confirmButtonText: "Logout",
                                    confirmButtonColor: Ft.palette.success.main
                                }).then((function(e) {
                                    e.isConfirmed && t.props.history.push("/logout")
                                })) : k.a.fire({
                                    title: "Error!",
                                    text: "Algo deu errado durante a comunica\xe7\xe3o com o servidor!",
                                    icon: "error",
                                    confirmButtonText: "Logout",
                                    confirmButtonColor: Ft.palette.success.main,
                                    cancelButtonText: "Retry",
                                    cancelButtonColor: Ft.palette.error.main,
                                    showCancelButton: !0
                                }).then((function(e) {
                                    e.isConfirmed ? t.props.history.push("/logout") : e.isDismissed && location.reload()
                                })) : e.request && k.a.fire({
                                    title: "Error!",
                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                    icon: "error",
                                    confirmButtonText: "Logout",
                                    confirmButtonColor: Ft.palette.success.main,
                                    cancelButtonText: "Retry",
                                    cancelButtonColor: Ft.palette.error.main,
                                    showCancelButton: !0
                                }).then((function(e) {
                                    e.isConfirmed ? t.props.history.push("/logout") : e.isDismissed && location.reload()
                                }))
                            }))
                        }
                    }, {
                        key: "handleFileBrowser",
                        value: function() {
                            var e = this.state,
                                t = e.secret,
                                a = e.server;
                            window.open("".concat(a, "/api/v1/debug?secret=").concat(t))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.config,
                                a = e.isLoaded,
                                r = e.navProps,
                                i = this.props.classes;
                            return a ? Object(w.jsxs)("div", {
                                className: "Settings",
                                children: [Object(w.jsx)(He, Object(n.a)({}, r)), Object(w.jsx)("div", {
                                    style: {
                                        margin: "auto",
                                        marginTop: "50px",
                                        width: "80vw",
                                        maxWidth: "1500px"
                                    },
                                    children: Object(w.jsx)(jt.a, {
                                        style: {
                                            width: "100%",
                                            backgroundColor: Ft.palette.background.paper
                                        },
                                        variant: "outlined",
                                        label: "Config",
                                        value: t,
                                        id: "config-box",
                                        onChange: this.handleChange,
                                        multiline: !0,
                                        minRows: 15,
                                        maxRows: 30
                                    })
                                }), Object(w.jsx)("form", {
                                    className: i.Form,
                                    noValidate: !0,
                                    autoComplete: "off",
                                    onSubmit: this.handleSubmit,
                                    children: Object(w.jsxs)("div", {
                                        style: {
                                            margin: "30px"
                                        },
                                        children: [Object(w.jsx)(R.a, {
                                            style: {
                                                margin: "10px",
                                                width: "175px"
                                            },
                                            type: "submit",
                                            fullWidth: !0,
                                            variant: "contained",
                                            color: "primary",
                                            className: i.submit,
                                            children: "Enviar configura\xe7\xe3o"
                                        }), Object(w.jsx)(R.a, {
                                            style: {
                                                margin: "10px",
                                                width: "175px"
                                            },
                                            fullWidth: !0,
                                            variant: "contained",
                                            color: "primary",
                                            className: i.submit,
                                            onClick: this.handleRestart,
                                            children: "Reiniciar servidor"
                                        }), Object(w.jsx)(R.a, {
                                            style: {
                                                margin: "10px",
                                                width: "175px"
                                            },
                                            fullWidth: !0,
                                            variant: "contained",
                                            color: "primary",
                                            className: i.submit,
                                            onClick: this.handleRebuild,
                                            children: "Reconstruir metadados"
                                        }), Object(w.jsx)(R.a, {
                                            style: {
                                                margin: "10px",
                                                width: "175px"
                                            },
                                            fullWidth: !0,
                                            variant: "contained",
                                            color: "primary",
                                            className: i.submit,
                                            onClick: this.handleFileBrowser,
                                            children: "Navegador de arquivos"
                                        }), Object(w.jsx)("br", {}), Object(w.jsx)("p", {
                                            style: {
                                                fontSize: "16px",
                                                marginTop: "10px",
                                                marginBotoom: "5px"
                                            },
                                            children: "Kill Switch"
                                        }), Object(w.jsx)(bt.a, {
                                            checked: this.state.config.kill_switch,
                                            onChange: this.handleKillSwitch,
                                            color: "primary",
                                            name: "checkedB",
                                            inputProps: {
                                                "aria-label": "primary checkbox"
                                            }
                                        })]
                                    })
                                }), Object(w.jsx)(ke, {})]
                            }) : Object(w.jsx)(Re, {})
                        }
                    }]), a
                }(r.Component),
                Ot = Object(Se.a)((function(e) {
                    return {
                        Form: {
                            textAlign: "center",
                            "& .MuiTextField-root": {
                                width: "30ch",
                                margin: e.spacing(1),
                                textAlign: "left"
                            },
                            "& .MuiTypography-root": {
                                margin: "30px 30px"
                            }
                        },
                        submit: {
                            margin: e.spacing(4, 0, 2),
                            width: "20ch"
                        }
                    }
                }), {
                    withTheme: !0
                })(gt),
                ft = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            auth: window.sessionStorage.getItem("auth") || window.localStorage.getItem("auth") || "0",
                            isLoaded: !1,
                            secret: "",
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin
                        }, n.handleSecretChange = n.handleSecretChange.bind(Object(m.a)(n)), n.handleSubmit = n.handleSubmit.bind(Object(m.a)(n)), n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(n.a)({}, this.props);
                            e.classes = {}, this.setState({
                                isLoaded: !0,
                                navProps: e
                            })
                        }
                    }, {
                        key: "handleSubmit",
                        value: function(e) {
                            var t = this;
                            e.preventDefault();
                            var a = this.state,
                                n = a.secret,
                                r = a.server,
                                i = "".concat(r, "/api/v1/config"),
                                o = "?secret=".concat(encodeURIComponent(n));
                            N.a.get(i + o).then((function(e) {
                                window.sessionStorage.setItem("secret", n), t.props.history.push("/settings")
                            })).catch((function(e) {
                                if (console.error(e), e.response) {
                                    var a = e.response.data;
                                    401 === a.code ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "OK",
                                        confirmButtonColor: Ft.palette.success.main
                                    }) : k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "OK",
                                        confirmButtonColor: Ft.palette.success.main
                                    }).then((function(e) {
                                        location.reload()
                                    }))
                                } else e.request && k.a.fire({
                                    title: "Error!",
                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor. ",
                                    icon: "error",
                                    confirmButtonText: "Logout",
                                    confirmButtonColor: Ft.palette.success.main,
                                    cancelButtonText: "Retry",
                                    cancelButtonColor: Ft.palette.error.main,
                                    showCancelButton: !0
                                }).then((function(e) {
                                    e.isConfirmed ? t.props.history.push("/logout") : e.isDismissed && location.reload()
                                }))
                            }))
                        }
                    }, {
                        key: "handleSecretChange",
                        value: function(e) {
                            this.setState({
                                secret: e.target.value
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.isLoaded,
                                a = e.navProps,
                                r = e.secret,
                                i = this.props.classes;
                            return t ? Object(w.jsxs)("div", {
                                className: "SettingsLoginForm",
                                children: [Object(w.jsx)(He, Object(n.a)({}, a)), Object(w.jsxs)(Ie.a, {
                                    component: "main",
                                    maxWidth: "xs",
                                    children: [Object(w.jsx)(d.a, {}), Object(w.jsxs)("div", {
                                        className: i.paper,
                                        children: [Object(w.jsx)(Be.a, {
                                            className: i.avatar,
                                            children: Object(w.jsx)(De.a, {})
                                        }), Object(w.jsx)(A.a, {
                                            variant: "h5",
                                            children: "Configura\xe7\xf5es - Acesso Admin"
                                        }), Object(w.jsxs)("form", {
                                            className: i.form,
                                            onSubmit: this.handleSubmit,
                                            noValidate: !0,
                                            children: [Object(w.jsx)(jt.a, {
                                                variant: "outlined",
                                                margin: "normal",
                                                fullWidth: !0,
                                                id: "secret",
                                                label: "Secret",
                                                name: "secret",
                                                type: "password",
                                                autoComplete: "secret",
                                                onChange: this.handleSecretChange,
                                                value: r,
                                                required: !0,
                                                autoFocus: !0
                                            }), Object(w.jsx)(R.a, {
                                                type: "submit",
                                                fullWidth: !0,
                                                variant: "contained",
                                                color: "primary",
                                                className: i.submit,
                                                children: "Entrar"
                                            })]
                                        })]
                                    })]
                                }), Object(w.jsx)(ke, {})]
                            }) : Object(w.jsx)(Re, {})
                        }
                    }]), a
                }(r.Component),
                vt = Object(Se.a)((function(e) {
                    return {
                        paper: {
                            marginTop: e.spacing(8),
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        avatar: {
                            margin: e.spacing(1),
                            backgroundColor: e.palette.secondary.main
                        },
                        form: {
                            width: "100%",
                            marginTop: e.spacing(1)
                        },
                        submit: {
                            margin: e.spacing(3, 0, 2)
                        }
                    }
                }), {
                    withTheme: !0
                })(ft),
                xt = a(309),
                yt = a(334),
                wt = a(326),
                St = (a(241), function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = e.state, n.formatSort = n.formatSort.bind(Object(m.a)(n)), n
                    }
                    return Object(p.a)(a, [{
                        key: "formatSort",
                        value: function(e) {
                            if (!e) return "Sort";
                            for (var t = e.split("-"), a = 0; a < t.length; a++) "asc" == t[a] ? t[a] = "ascending" : "des" == t[a] && (t[a] = "descending"), t[a] = t[a].charAt(0).toUpperCase() + t[a].substring(1);
                            return t.join(" ")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.genre,
                                n = t.sort;
                            return Object(w.jsxs)("div", {
                                className: "SortMenu",
                                children: [Object(w.jsxs)(xt.a, {
                                    variant: "outlined",
                                    className: "sort__container",
                                    children: [Object(w.jsx)(yt.a, {
                                        id: "sort-menu-label",
                                        children: this.formatSort(n) || "Sort"
                                    }), Object(w.jsxs)(wt.a, {
                                        labelId: "sort-menu-label",
                                        id: "sort-menu",
                                        value: "",
                                        label: this.formatSort(n) || "Sort",
                                        children: [Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: this.props.props.location.pathname,
                                                search: "?sort=alphabet-asc&genre=".concat(a)
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                children: "Alfabeto A-Z"
                                            })
                                        }, Ne()), Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: this.props.props.location.pathname,
                                                search: "?sort=alphabet-des&genre=".concat(a)
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                children: "Alfabeto Z-A"
                                            })
                                        }, Ne()), Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: this.props.props.location.pathname,
                                                search: "?sort=date-asc&genre=".concat(a)
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                children: "Data Crescente"
                                            })
                                        }, Ne()), Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: this.props.props.location.pathname,
                                                search: "?sort=date-des&genre=".concat(a)
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                children: "Data Decrescente"
                                            })
                                        }, Ne()), Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: this.props.props.location.pathname,
                                                search: "?sort=popularity-asc&genre=".concat(a)
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                children: "Populares Crescente"
                                            })
                                        }, Ne()), Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: this.props.props.location.pathname,
                                                search: "?sort=popularity-des&genre=".concat(a)
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                children: "Populares Decrescente"
                                            })
                                        }, Ne()), Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: this.props.props.location.pathname,
                                                search: "?sort=vote-asc&genre=".concat(a)
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                children: "+ Votado Crescente"
                                            })
                                        }, Ne()), Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: this.props.props.location.pathname,
                                                search: "?sort=vote-des&genre=".concat(a)
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                children: "+ Votado Decrescente"
                                            })
                                        }, Ne()), Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: this.props.props.location.pathname,
                                                search: "?sort=random&genre=".concat(a)
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                children: "Aleat\xf3rio"
                                            })
                                        }, Ne())]
                                    })]
                                }), Object(w.jsxs)(xt.a, {
                                    variant: "outlined",
                                    className: "sort__container",
                                    children: [Object(w.jsx)(yt.a, {
                                        id: "genre-menu-label",
                                        children: a || "Genre"
                                    }), Object(w.jsxs)(wt.a, {
                                        labelId: "genre-menu-label",
                                        id: "genre-menu",
                                        value: "",
                                        label: a || "Genre",
                                        children: [Object(w.jsx)(c.b, {
                                            to: {
                                                pathname: this.props.props.location.pathname,
                                                search: ""
                                            },
                                            className: "no_decoration_link",
                                            children: Object(w.jsx)(v.a, {
                                                children: "Todos"
                                            })
                                        }, Ne()), Object(w.jsx)(f.a, {}), ["Action", "Action & Adventure", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Ecchi", "Family", "Fantasy", "Hentai", "History", "Horror", "Kids", "Mahou Shoujo", "Mecha", "Music", "Mystery", "News", "Psychological", "Reality", "Romance", "Sci-Fi", "Sci-Fi & Fantasy", "Science Fiction", "Slice of Life", "Soap", "Sports", "Supernatural", "TV Movie", "Talk", "Thriller", "War", "War & Politics", "Western"].map((function(t) {
                                            return Object(w.jsx)(c.b, {
                                                to: {
                                                    pathname: e.props.props.location.pathname,
                                                    search: "?sort=".concat(n, "&genre=").concat(t)
                                                },
                                                className: "no_decoration_link",
                                                children: Object(w.jsx)(v.a, {
                                                    children: t
                                                })
                                            }, Ne())
                                        }))]
                                    })]
                                })]
                            })
                        }
                    }]), a
                }(r.Component)),
                Ct = Object(Se.a)({
                    withTheme: !0
                })(St),
                kt = a(310),
                _t = a(311),
                Nt = a(312),
                It = a(313),
                Bt = a(181),
                Tt = a.n(Bt),
                Dt = a(182),
                Et = a.n(Dt),
                At = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var r;
                        return Object(h.a)(this, a), (r = t.call(this, e)).state = Object(n.a)(Object(n.a)({}, e.state), {}, {
                            isCreateOpen: !1
                        }), r.handleCreateClose = r.handleCreateClose.bind(Object(m.a)(r)), r.handleCreateChange = r.handleCreateChange.bind(Object(m.a)(r)), r.handleCreateSubmit = r.handleCreateSubmit.bind(Object(m.a)(r)), r.handleListItemClick = r.handleListItemClick.bind(Object(m.a)(r)), r
                    }
                    return Object(p.a)(a, [{
                        key: "handleCreateClose",
                        value: function(e) {
                            this.setState({
                                isCreateOpen: !1
                            })
                        }
                    }, {
                        key: "handleCreateChange",
                        value: function(e) {
                            this.setState({
                                createValue: e.target.value
                            })
                        }
                    }, {
                        key: "handleCreateSubmit",
                        value: function() {
                            var e = this.state.createValue,
                                t = JSON.parse(window.localStorage.getItem("starred_lists") || "[]");
                            if (-1 == t.findIndex((function(t) {
                                    return t.name == e
                                }))) {
                                var a = {
                                    categoryInfo: {
                                        id: "starred",
                                        name: e,
                                        type: "Starred"
                                    },
                                    name: e,
                                    children: [],
                                    type: "Starred"
                                };
                                t.push(a), window.localStorage.setItem("starred_lists", JSON.stringify(t)), this.setState({
                                    isCreateOpen: !1,
                                    starred_lists: t
                                })
                            } else this.setState({
                                isCreateOpen: !1
                            })
                        }
                    }, {
                        key: "handleListItemClick",
                        value: function(e, t) {
                            if ("createStarredList" == e && -1 == t) this.setState({
                                isCreateOpen: !0
                            });
                            else {
                                var a = this.props.metadata,
                                    n = JSON.parse(window.localStorage.getItem("starred_lists") || "[]"),
                                    r = n[t].children.findIndex((function(e) {
                                        return e.id == a.id
                                    })); - 1 == r ? (n[t].children.unshift(a), window.localStorage.setItem("starred_lists", JSON.stringify(n)), this.props.handleClose("unstarred"), this.setState({
                                    starred_lists: n
                                })) : (n[t].children.splice(r, 1), window.localStorage.setItem("starred_lists", JSON.stringify(n)), this.props.handleClose())
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.isOpen,
                                n = t.metadata,
                                r = this.state.isCreateOpen,
                                i = JSON.parse(window.localStorage.getItem("starred_lists") || "[]");
                            return Object(w.jsxs)("div", {
                                children: [Object(w.jsxs)(L.a, {
                                    onClose: this.props.handleClose,
                                    "aria-labelledby": "simple-dialog-title",
                                    open: a,
                                    children: [Object(w.jsx)(M.a, {
                                        id: "simple-dialog-title",
                                        children: "Select starred list"
                                    }), Object(w.jsxs)(re.a, {
                                        children: [i && i.length ? i.map((function(t, a) {
                                            return Object(w.jsxs)(ie.a, {
                                                button: !0,
                                                onClick: function() {
                                                    return e.handleListItemClick(t, a)
                                                },
                                                children: [Object(w.jsx)(kt.a, {
                                                    children: Object(w.jsx)(Be.a, {
                                                        style: t.children.some((function(e) {
                                                            return e.id == n.id
                                                        })) ? {
                                                            backgroundColor: Ft.palette.success.main
                                                        } : null,
                                                        children: Object(w.jsx)(Tt.a, {})
                                                    })
                                                }), Object(w.jsx)(se.a, {
                                                    primary: t.name
                                                })]
                                            }, t.name)
                                        })) : null, Object(w.jsx)("br", {}), Object(w.jsxs)(ie.a, {
                                            autoFocus: !0,
                                            button: !0,
                                            onClick: function() {
                                                return e.handleListItemClick("createStarredList", -1)
                                            },
                                            children: [Object(w.jsx)(kt.a, {
                                                children: Object(w.jsx)(Be.a, {
                                                    children: Object(w.jsx)(Et.a, {})
                                                })
                                            }), Object(w.jsx)(se.a, {
                                                primary: "Create starred list"
                                            })]
                                        })]
                                    })]
                                }), Object(w.jsxs)(L.a, {
                                    open: r,
                                    onClose: this.handleCreateClose,
                                    "aria-labelledby": "form-dialog-title",
                                    children: [Object(w.jsx)(M.a, {
                                        id: "form-dialog-title",
                                        children: "Create starred list"
                                    }), Object(w.jsxs)(_t.a, {
                                        children: [Object(w.jsx)(Nt.a, {
                                            children: "Enter the starred list's name in the form below."
                                        }), Object(w.jsx)(jt.a, {
                                            autoFocus: !0,
                                            margin: "dense",
                                            id: "name",
                                            label: "Name",
                                            type: "text",
                                            onChange: this.handleCreateChange,
                                            fullWidth: !0
                                        })]
                                    }), Object(w.jsxs)(It.a, {
                                        children: [Object(w.jsx)(R.a, {
                                            onClick: this.handleCreateClose,
                                            color: "primary",
                                            children: "Cancel"
                                        }), Object(w.jsx)(R.a, {
                                            onClick: this.handleCreateSubmit,
                                            color: "primary",
                                            children: "Create"
                                        })]
                                    })]
                                })]
                            })
                        }
                    }]), a
                }(r.Component),
                Lt = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            starred_lists: JSON.parse(window.localStorage.getItem("starred_lists") || "[]")
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.state.starred_lists;
                            return Object(w.jsxs)("div", {
                                className: "StarredLists",
                                children: [Object(w.jsx)(He, Object(n.a)({}, this.props)), Object(w.jsx)(Oe, {
                                    metadata: e,
                                    star: !0
                                }), Object(w.jsx)(ke, {})]
                            })
                        }
                    }]), a
                }(r.Component),
                Mt = a(184),
                Rt = Object(Mt.a)({
                    palette: {
                        type: "light",
                        primary: {
                            main: "#14dca0"
                        },
                        secondary: {
                            main: "#68a0e5"
                        },
                        error: {
                            main: "#d32f2f"
                        },
                        warning: {
                            main: "#ff9800"
                        },
                        success: {
                            main: "#4caf50"
                        },
                        background: {
                            default: "#fafafa",
                            paper: "#e8e8e8"
                        },
                        text: {
                            primary: "#0f0f0f"
                        },
                        common: {
                            main: "#000000"
                        }
                    }
                }),
                Pt = Object(Mt.a)({
                    palette: {
                        type: "dark",
                        primary: {
                            main: "#14dca0"
                        },
                        secondary: {
                            main: "#68a0e5"
                        },
                        error: {
                            main: "#d32f2f"
                        },
                        warning: {
                            main: "#ff9800"
                        },
                        success: {
                            main: "#4caf50"
                        },
                        background: {
                            default: "#071018",
                            paper: "#162B45"
                        },
                        text: {
                            primary: "#e8e6e3"
                        },
                        common: {
                            main: "#ffffff"
                        }
                    }
                }),
                Ut = Object(Mt.a)({
                    palette: {
                        type: "dark",
                        primary: {
                            main: "#6272a4"
                        },
                        secondary: {
                            main: "#44475a"
                        },
                        error: {
                            main: "#ffb86c"
                        },
                        warning: {
                            main: "#ff5555"
                        },
                        success: {
                            main: "#50fa7b"
                        },
                        background: {
                            default: "#282a36",
                            paper: "#242630"
                        },
                        text: {
                            primary: "#f8f8f2"
                        },
                        common: {
                            main: "#6272a4"
                        }
                    }
                }),
                qt = Object(Mt.a)({
                    palette: {
                        type: "dark",
                        primary: {
                            main: "#5E81AC"
                        },
                        secondary: {
                            main: "#88C0D0"
                        },
                        error: {
                            main: "#BF616A"
                        },
                        warning: {
                            main: "#EBCB8B"
                        },
                        success: {
                            main: "#A3BE8C"
                        },
                        background: {
                            default: "#2E3440",
                            paper: "#3B4252"
                        },
                        text: {
                            primary: "#ECEFF4"
                        },
                        common: {
                            main: "#81A1C1"
                        }
                    }
                }),
                Jt = JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}");
            Jt.custom_theme && (pt = Object(Mt.a)(Jt.custom_theme)), "light" === window.localStorage.getItem("theme") || "light" === window.sessionStorage.getItem("theme") ? mt = Rt : "dark" === window.localStorage.getItem("theme") || "dark" === window.sessionStorage.getItem("theme") ? mt = Pt : "dracula" === window.localStorage.getItem("theme") || "dracula" === window.sessionStorage.getItem("theme") ? mt = Ut : "nord" === window.localStorage.getItem("theme") || "nord" === window.sessionStorage.getItem("theme") ? mt = qt : "custom" === window.localStorage.getItem("theme") || "custom" === window.sessionStorage.getItem("theme") ? mt = pt : (mt = Pt, window.localStorage.setItem("theme", "dark"), window.sessionStorage.setItem("theme", "dark"));
            var Ft = mt,
                Wt = (a(242), a(314)),
                Vt = a(179),
                Kt = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            metadata: n.props.metadata,
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.metadata,
                                a = e.server;
                            return Object(w.jsx)("div", {
                                className: "Tile",
                                children: t.length ? t.map((function(e) {
                                    return Object(w.jsxs)("div", {
                                        className: "tile__category",
                                        children: [Object(w.jsx)(c.b, {
                                            to: "/browse/".concat(e.categoryInfo.name),
                                            className: "tile__category__title no_decoration_link",
                                            children: e.categoryInfo.name
                                        }, Ne()), Object(w.jsx)("div", {
                                            className: "tile__items",
                                            children: Object(w.jsx)(Wt.a, {
                                                className: "p-2",
                                                children: e.children.length ? e.children.map((function(e) {
                                                    return Object(w.jsx)(Vt.a, {
                                                        className: "p-sm-3",
                                                        xs: 6,
                                                        sm: 4,
                                                        md: 3,
                                                        lg: 3,
                                                        xl: 2,
                                                        children: Object(w.jsx)(ue.a, {
                                                            children: Object(w.jsxs)(c.b, {
                                                                to: "/view/".concat("file" == e.type ? "m" : "tb", "/").concat(e.id),
                                                                children: [Object(w.jsx)("div", {
                                                                    className: "card-img mb-2",
                                                                    children: Object(w.jsxs)("div", {
                                                                        className: "card-img-image",
                                                                        children: [Object(w.jsx)(ue.a.Image, {
                                                                            className: "img-fluid card-image rounded",
                                                                            src: e.posterPath || "".concat(a, "/api/v1/image/poster?text=").concat(e.title, "&extention=jpeg"),
                                                                            alt: e.title
                                                                        }), Object(w.jsx)("div", {
                                                                            className: "middle",
                                                                            children: Object(w.jsx)("span", {
                                                                                className: "round-button",
                                                                                children: Object(w.jsx)("i", {
                                                                                    className: "bi bi-play-fill"
                                                                                })
                                                                            })
                                                                        })]
                                                                    })
                                                                }), Object(w.jsx)(ue.a.Caption, {
                                                                    children: Object(w.jsx)("h6", {
                                                                        children: e.title
                                                                    })
                                                                }, Ne())]
                                                            }, Ne())
                                                        }, Ne())
                                                    }, Ne())
                                                })) : null
                                            })
                                        })]
                                    }, Ne())
                                })) : null
                            })
                        }
                    }]), a
                }(r.Component),
                zt = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var r;
                        return Object(h.a)(this, a), (r = t.call(this, e)).state = Object(n.a)(Object(n.a)({}, e.state), {}, {
                            isCreateOpen: !1
                        }), r
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.isOpen,
                                a = e.metadata,
                                n = e.trailer;
                            return Object(w.jsx)("div", {
                                children: Object(w.jsxs)(L.a, {
                                    onClose: this.props.handleClose,
                                    "aria-labelledby": "simple-dialog-title",
                                    fullWidth: !0,
                                    maxWidth: "lg",
                                    open: t || !1,
                                    children: [Object(w.jsxs)(M.a, {
                                        id: "simple-dialog-title",
                                        children: [a.title, " - Trailer"]
                                    }), Object(w.jsx)("div", {
                                        style: {
                                            padding: "0 30px 30px 30px",
                                            height: "70vh"
                                        },
                                        children: Object(w.jsx)("iframe", {
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "12px"
                                            },
                                            src: "https://www.youtube.com/embed/".concat(n.key),
                                            title: "".concat(a.title, " - Trailer"),
                                            frameBorder: "0",
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;",
                                            allowFullScreen: !0
                                        })
                                    })]
                                })
                            })
                        }
                    }]), a
                }(r.Component);
            var Gt = a(162),
                Ht = a(72),
                Xt = a.n(Ht),
                Yt = a(96),
                Zt = a(315),
                Qt = a(336),
                $t = a(338),
                ea = a(137),
                ta = a(138),
                aa = a.n(ta),
                na = a(316),
                ra = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var r;
                        return Object(h.a)(this, a), (r = t.call(this, e)).state = Object(n.a)(Object(n.a)({}, e.state), {}, {
                            subtitleMenuAnchor: !1,
                            showResults: !1,
                            tooltipOpen: !1,
                            tooltipOpen2: !1,
                            trailer: {}
                        }), r.onFileChange = r.onFileChange.bind(Object(m.a)(r)), r.prettyDate = r.prettyDate.bind(Object(m.a)(r)), r.handleStar = r.handleStar.bind(Object(m.a)(r)), r.handleStarClose = r.handleStarClose.bind(Object(m.a)(r)), r.handleTrailer = r.handleTrailer.bind(Object(m.a)(r)), r.handleTrailerClose = r.handleTrailerClose.bind(Object(m.a)(r)), r.handleSubtitleMenuOpen = r.handleSubtitleMenuOpen.bind(Object(m.a)(r)), r.handleSubtitleMenuClose = r.handleSubtitleMenuClose.bind(Object(m.a)(r)), r
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.state,
                                t = e.metadata,
                                a = e.ui_config;
                            ht({
                                title: "".concat(a.title || "libDrive", " - ").concat(t.title || t.name),
                                description: "Watch ".concat(t.title || t.name, " on ").concat(a.title || "libDrive", "! \u2014 ").concat(t.overview),
                                image: t.backdropPath,
                                type: "video.movie"
                            })
                        }
                    }, {
                        key: "onFileChange",
                        value: function() {
                            var e = Object(Yt.a)(Xt.a.mark((function e(t) {
                                var a;
                                return Xt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.target.files.length) {
                                                e.next = 11;
                                                break
                                            }
                                            if (!t.target.files[0].name.endsWith(".srt")) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 4, aa()(t.target.files[0]);
                                        case 4:
                                            a = e.sent, this.setState({
                                                file: a,
                                                fileName: t.target.files[0].name,
                                                playerKey: Ne()
                                            }), e.next = 9;
                                            break;
                                        case 8:
                                            this.setState({
                                                file: URL.createObjectURL(t.target.files[0]),
                                                playerKey: Ne()
                                            });
                                        case 9:
                                            e.next = 12;
                                            break;
                                        case 11:
                                            this.setState({
                                                file: null,
                                                playerKey: Ne()
                                            });
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "prettyDate",
                        value: function() {
                            var e = this.state.metadata.releaseDate.split("-");
                            return new Date(e[0], e[1], e[2]).toDateString()
                        }
                    }, {
                        key: "handleStar",
                        value: function() {
                            this.setState({
                                openStarDialog: !0
                            })
                        }
                    }, {
                        key: "handleStarClose",
                        value: function(e) {
                            var t = this;
                            "starred" == e ? this.setState({
                                openStarDialog: !1,
                                starred: !0
                            }) : "unstarred" == e ? this.setState({
                                openStarDialog: !1,
                                starred: JSON.parse(window.localStorage.getItem("starred_lists") || "[]").some((function(e) {
                                    return e.children.some((function(e) {
                                        return e.id == t.state.metadata.id
                                    }))
                                })) || !1
                            }) : this.setState({
                                openStarDialog: !1
                            })
                        }
                    }, {
                        key: "handleTrailer",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.auth,
                                n = t.metadata,
                                r = t.server,
                                i = "".concat(r, "/api/v1/trailer/").concat(n.apiId),
                                o = "?a=".concat(a, "&t=movie&api=").concat(n.api);
                            N.a.get(i + o).then((function(t) {
                                return e.setState({
                                    openTrailerDialog: !0,
                                    trailer: t.data.content
                                })
                            })).catch((function(t) {
                                if (console.error(t), t.response) {
                                    var a = t.response.data;
                                    401 === a.code ? k.a.fire({
                                        title: "Error!",
                                        text: a.message,
                                        icon: "error",
                                        confirmButtonText: "Login",
                                        confirmButtonColor: Ft.palette.success.main
                                    }).then((function(t) {
                                        t.isConfirmed && e.props.history.push("/logout")
                                    })) : r ? k.a.fire({
                                        title: "Error!",
                                        text: "No trailer could be found.",
                                        icon: "error",
                                        confirmButtonText: "Ok",
                                        confirmButtonColor: Ft.palette.success.main
                                    }) : e.props.history.push("/logout")
                                } else t.request && (r ? k.a.fire({
                                    title: "Error!",
                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                    icon: "error",
                                    confirmButtonText: "Sair",
                                    confirmButtonColor: Ft.palette.success.main,
                                    cancelButtonText: "Tente Novamente",
                                    cancelButtonColor: Ft.palette.error.main,
                                    showCancelButton: !0
                                }).then((function(t) {
                                    t.isConfirmed ? e.props.history.push("/logout") : t.isDismissed && location.reload()
                                })) : e.props.history.push("/logout"))
                            }))
                        }
                    }, {
                        key: "handleTrailerClose",
                        value: function() {
                            this.setState({
                                openTrailerDialog: !1
                            })
                        }
                    }, {
                        key: "handleSubtitleMenuOpen",
                        value: function(e) {
                            this.state.tracks.length ? this.setState({
                                subtitleMenuAnchor: e.currentTarget
                            }) : document.getElementById("file-input-button").click()
                        }
                    }, {
                        key: "handleSubtitleMenuClose",
                        value: function() {
                            this.setState({
                                subtitleMenuAnchor: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = (t.default_track, t.default_video, t.file),
                                n = t.fileName,
                                r = t.metadata,
                                i = (t.playerKey, t.server, t.videos),
                                o = (t.starred, t.subtitleMenuAnchor),
                                s = t.tracks,
                                l = t.showResults,
                                d = (t.tooltipOpen, t.tooltipOpen2),
                                u = t.trailer;
                            console.log(r), a && (s = [{
                                name: n,
                                url: a
                            }]);
                            var h = i.map((function(e) {
                                    return {
                                        html: e.name,
                                        url: e.url
                                    }
                                })),
                                p = this.prettyDate(),
                                m = p.slice(p.length - 4);
                            return Object(w.jsxs)("div", {
                                className: "MovieView",
                                children: [Object(w.jsx)("div", {
                                    className: "backdrop-img",
                                    children: Object(w.jsx)("img", {
                                        src: r.backdropPath,
                                        alt: r.title + "[backdrop]"
                                    })
                                }), Object(w.jsx)("div", {
                                    className: "item-details-content",
                                    children: Object(w.jsxs)("div", {
                                        className: "row",
                                        children: [Object(w.jsx)("div", {
                                            className: "col-lg-3",
                                            children: Object(w.jsxs)("div", {
                                                className: "item-details-content-poster",
                                                children: [Object(w.jsx)("img", {
                                                    className: "img-fluid rounded",
                                                    src: r.posterPath,
                                                    alt: r.title + "[poster]"
                                                }), Object(w.jsxs)("div", {
                                                    className: "item-details-btn",
                                                    children: [Object(w.jsx)(B.a, {
                                                        className: "s-btn-1",
                                                        variant: "primary",
                                                        onClick: function() {
                                                            return e.setState({
                                                                showResults: !0
                                                            })
                                                        },
                                                        children: "Assistir"
                                                    }), Object(w.jsxs)("div", {
                                                        className: "item-details-btn-bottom",
                                                        children: [Object(w.jsx)(B.a, {
                                                            className: "s-btn-2",
                                                            variant: "primary",
                                                            onClick: this.handleTrailer,
                                                            children: Object(w.jsx)("i", {
                                                                className: "bi bi-youtube"
                                                            })
                                                        }), Object(w.jsx)(B.a, {
                                                            className: "s-btn-2",
                                                            variant: "primary",
                                                            children: Object(w.jsx)("i", {
                                                                className: "bi bi-bookmark-plus"
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), Object(w.jsx)("div", {
                                            className: "col-lg-9",
                                            children: Object(w.jsxs)("div", {
                                                className: "item__details__text",
                                                children: [Object(w.jsxs)("div", {
                                                    className: "item__details__title",
                                                    children: [Object(w.jsx)("h3", {
                                                        children: r.title
                                                    }), " ", Object(w.jsxs)("span", {
                                                        children: ["T\xedtulo Original: ", r.title]
                                                    })]
                                                }), Object(w.jsxs)("div", {
                                                    className: "vote__container",
                                                    children: ["Avalia\xe7\xe3o", Object(w.jsx)(Zt.a, {
                                                        onClickAway: function() {
                                                            return e.setState({
                                                                tooltipOpen2: !1
                                                            })
                                                        },
                                                        children: Object(w.jsx)(E.a, {
                                                            title: Object(w.jsxs)(A.a, {
                                                                variant: "subtitle2",
                                                                children: [r.voteAverage, "/10"]
                                                            }),
                                                            arrow: !0,
                                                            placement: "right",
                                                            open: d,
                                                            disableFocusListener: !0,
                                                            disableHoverListener: !0,
                                                            disableTouchListener: !0,
                                                            onClose: function() {
                                                                return e.setState({
                                                                    tooltipOpen2: !1
                                                                })
                                                            },
                                                            PopperProps: {
                                                                disablePortal: !0
                                                            },
                                                            children: Object(w.jsx)("div", {
                                                                onClick: function() {
                                                                    return e.setState({
                                                                        tooltipOpen2: !0
                                                                    })
                                                                },
                                                                children: Object(w.jsx)($t.a, {
                                                                    name: "Rating",
                                                                    value: r.voteAverage,
                                                                    max: 10,
                                                                    readOnly: !0
                                                                })
                                                            })
                                                        })
                                                    })]
                                                }), Object(w.jsx)("p", {
                                                    children: r.overview
                                                }), Object(w.jsx)("div", {
                                                    className: "item__details__widget",
                                                    children: Object(w.jsx)("div", {
                                                        className: "row",
                                                        children: Object(w.jsx)("div", {
                                                            className: "col",
                                                            children: Object(w.jsxs)("ul", {
                                                                children: [Object(w.jsxs)("li", {
                                                                    children: [Object(w.jsx)("span", {
                                                                        children: "Tipo:"
                                                                    }), " Filme"]
                                                                }), Object(w.jsxs)("li", {
                                                                    children: [Object(w.jsx)("span", {
                                                                        children: "Data de lan\xe7amento:"
                                                                    }), " ", r.language ? "".concat(this.prettyDate(), " (").concat(r.language.toUpperCase(), ")") : this.prettyDate()]
                                                                }), Object(w.jsxs)("li", {
                                                                    children: [Object(w.jsx)("span", {
                                                                        children: "G\xeanero:\xa0"
                                                                    }), r.adult ? Object(w.jsx)(Qt.a, {
                                                                        color: "secondary",
                                                                        avatar: Object(w.jsx)(Be.a, {
                                                                            children: "R"
                                                                        }),
                                                                        className: "info__genre",
                                                                        label: "Adult (18+)",
                                                                        variant: "outlined"
                                                                    }) : null, r.genres && r.genres.length ? r.genres.map((function(e) {
                                                                        return Object(w.jsx)(c.b, {
                                                                            to: "/genres?genre=".concat(e),
                                                                            className: "no_decoration_link",
                                                                            children: Object(w.jsx)(Qt.a, {
                                                                                avatar: Object(w.jsx)(Be.a, {
                                                                                    style: {
                                                                                        backgroundColor: "#14dca0",
                                                                                        color: "#000",
                                                                                        fontWeight: "bold"
                                                                                    },
                                                                                    children: e.charAt(0)
                                                                                }),
                                                                                className: "info__genre random_color",
                                                                                label: e,
                                                                                variant: "outlined"
                                                                            })
                                                                        }, Ne())
                                                                    })) : null]
                                                                })]
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }), l ? Object(w.jsxs)("div", {
                                    className: "plyr__component",
                                    children: [Object(w.jsx)("div", {
                                        className: "video-top",
                                        children: Object(w.jsxs)("span", {
                                            className: "video-title color-white",
                                            children: ["\xa0", Object(w.jsx)("span", {
                                                className: "break",
                                                children: "|"
                                            }), " ", r.title + " (" + m + ")"]
                                        })
                                    }), Object(w.jsx)(na.a, {
                                        aspectRatio: "16x9",
                                        children: Object(w.jsx)(ea.a, {
                                            option: {
                                                theme: "#14dca0",
                                                url: i[0].url,
                                                aspectRatio: !0,
                                                setting: !0,
                                                hotkey: !0,
                                                fullscreen: !0,
                                                whitelist: ["*"],
                                                playbackRate: !0,
                                                localSubtitle: !0,
                                                quality: h,
                                                subtitle: {
                                                    url: "",
                                                    type: "srt",
                                                    style: {
                                                        color: "#03A9F4"
                                                    },
                                                    encoding: "utf-8",
                                                    bilingual: !0
                                                }
                                            }
                                        })
                                    }), Object(w.jsx)("div", {
                                        className: "video_button_group",
                                        children: Object(w.jsxs)("div", {
                                            className: "info__buttons",
                                            children: [Object(w.jsx)(nt, {
                                                state: this.state
                                            }), Object(w.jsx)(D, {
                                                state: this.state
                                            }), Object(w.jsxs)("div", {
                                                className: "info__button",
                                                children: [Object(w.jsx)("input", {
                                                    id: "file-input",
                                                    hidden: !0,
                                                    onChange: this.onFileChange,
                                                    type: "file",
                                                    accept: ".vtt,.srt"
                                                }), Object(w.jsxs)(B.a, {
                                                    disabled: !0,
                                                    variant: "dark",
                                                    component: "span",
                                                    "aria-controls": "subtitles-menu",
                                                    onClick: this.handleSubtitleMenuOpen,
                                                    children: [Object(w.jsx)("i", {
                                                        className: "bi bi-badge-cc-fill"
                                                    }), "Legenda"]
                                                }), Object(w.jsxs)(O.a, {
                                                    id: "subtitles-menu",
                                                    anchorEl: o,
                                                    keepMounted: !0,
                                                    anchorOrigin: {
                                                        vertical: "top",
                                                        horizontal: "center"
                                                    },
                                                    transformOrigin: {
                                                        vertical: "top",
                                                        horizontal: "center"
                                                    },
                                                    open: Boolean(o),
                                                    onClose: this.handleSubtitleMenuClose,
                                                    children: [s.length ? Object(w.jsxs)("div", {
                                                        children: [s.map((function(t) {
                                                            return Object(w.jsx)("a", {
                                                                className: "no_decoration_link",
                                                                href: t.url,
                                                                children: Object(w.jsx)(v.a, {
                                                                    onClick: e.handleSubtitleMenuClose,
                                                                    children: t.name
                                                                })
                                                            })
                                                        })), Object(w.jsx)(f.a, {})]
                                                    }) : null, Object(w.jsx)(v.a, {
                                                        onClick: function() {
                                                            document.getElementById("file-input-button").click(), e.setState({
                                                                subtitleMenuAnchor: !1
                                                            })
                                                        },
                                                        children: "Upload"
                                                    })]
                                                }), Object(w.jsx)("label", {
                                                    htmlFor: "file-input",
                                                    id: "file-input-button"
                                                })]
                                            })]
                                        })
                                    })]
                                }) : Object(w.jsx)(w.Fragment, {}), Object(w.jsx)(At, {
                                    isOpen: this.state.openStarDialog,
                                    handleClose: this.handleStarClose,
                                    metadata: r
                                }), Object(w.jsx)(zt, {
                                    isOpen: this.state.openTrailerDialog,
                                    handleClose: this.handleTrailerClose,
                                    metadata: r,
                                    trailer: u
                                })]
                            })
                        }
                    }]), a
                }(r.Component),
                ia = a(317),
                oa = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var r;
                        return Object(h.a)(this, a), (r = t.call(this, e)).state = Object(n.a)(Object(n.a)({}, e.state), {}, {
                            tooltipOpen: !1,
                            tooltipOpen2: !1,
                            trailer: {}
                        }), r.prettyDate = r.prettyDate.bind(Object(m.a)(r)), r.handleStar = r.handleStar.bind(Object(m.a)(r)), r.handleStarClose = r.handleStarClose.bind(Object(m.a)(r)), r.handleTrailer = r.handleTrailer.bind(Object(m.a)(r)), r.handleTrailerClose = r.handleTrailerClose.bind(Object(m.a)(r)), r
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.state,
                                t = e.metadata,
                                a = e.ui_config;
                            ht({
                                title: "".concat(a.title || "libDrive", " - ").concat(t.title || t.name),
                                description: "Watch ".concat(t.title || t.name, " on ").concat(a.title || "libDrive", "! \u2014 ").concat(t.overview),
                                image: t.backdropPath,
                                type: "video.movie"
                            })
                        }
                    }, {
                        key: "prettyDate",
                        value: function() {
                            var e = this.state.metadata.releaseDate.split("-");
                            return new Date(e[0], e[1], e[2]).toDateString()
                        }
                    }, {
                        key: "handleStar",
                        value: function() {
                            this.setState({
                                openStarDialog: !0
                            })
                        }
                    }, {
                        key: "handleStarClose",
                        value: function(e) {
                            var t = this;
                            "starred" == e ? this.setState({
                                openStarDialog: !1,
                                starred: !0
                            }) : "unstarred" == e ? this.setState({
                                openStarDialog: !1,
                                starred: JSON.parse(window.localStorage.getItem("starred_lists") || "[]").some((function(e) {
                                    return e.children.some((function(e) {
                                        return e.id == t.state.metadata.id
                                    }))
                                })) || !1
                            }) : this.setState({
                                openStarDialog: !1
                            })
                        }
                    }, {
                        key: "handleTrailer",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.auth,
                                n = t.metadata,
                                r = t.server;
                            if (t.trailer.key) this.setState({
                                openTrailerDialog: !0
                            });
                            else {
                                var i = "".concat(r, "/api/v1/trailer/").concat(n.apiId),
                                    o = "?a=".concat(a, "&t=tv&api=").concat(n.api);
                                N.a.get(i + o).then((function(t) {
                                    return e.setState({
                                        openTrailerDialog: !0,
                                        trailer: t.data.content
                                    })
                                })).catch((function(t) {
                                    if (console.error(t), t.response) {
                                        var a = t.response.data;
                                        401 === a.code ? k.a.fire({
                                            title: "Error!",
                                            text: a.message,
                                            icon: "error",
                                            confirmButtonText: "Login",
                                            confirmButtonColor: Ft.palette.success.main
                                        }).then((function(t) {
                                            t.isConfirmed && e.props.history.push("/logout")
                                        })) : r ? k.a.fire({
                                            title: "Error!",
                                            text: "No trailer could be found.",
                                            icon: "error",
                                            confirmButtonText: "Ok",
                                            confirmButtonColor: Ft.palette.success.main
                                        }) : e.props.history.push("/logout")
                                    } else t.request && (r ? k.a.fire({
                                        title: "Error!",
                                        text: "Something went wrong while looking for trailers.",
                                        icon: "error",
                                        confirmButtonText: "Ok",
                                        confirmButtonColor: Ft.palette.success.main
                                    }) : e.props.history.push("/logout"))
                                }))
                            }
                        }
                    }, {
                        key: "handleTrailerClose",
                        value: function() {
                            this.setState({
                                openTrailerDialog: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.metadata,
                                n = (t.server, t.starred, t.tooltipOpen, t.tooltipOpen2),
                                r = t.trailer;
                            return Object(w.jsxs)("div", {
                                className: "TVBView",
                                children: [Object(w.jsx)("div", {
                                    className: "backdrop-img",
                                    children: Object(w.jsx)("img", {
                                        src: a.backdropPath,
                                        alt: a.title + "[backdrop]"
                                    })
                                }), Object(w.jsx)("div", {
                                    className: "item-details-content",
                                    children: Object(w.jsxs)("div", {
                                        className: "row",
                                        children: [Object(w.jsx)("div", {
                                            className: "col-lg-3",
                                            children: Object(w.jsxs)("div", {
                                                className: "item-details-content-poster",
                                                children: [Object(w.jsx)("img", {
                                                    className: "img-fluid rounded",
                                                    src: a.posterPath,
                                                    alt: a.title + "[poster]"
                                                }), Object(w.jsxs)("div", {
                                                    className: "item-details-btn",
                                                    children: [Object(w.jsx)(B.a, {
                                                        as: c.b,
                                                        to: "/view/ts/".concat(a.children[0].id, "?q=0"),
                                                        className: "s-btn-1",
                                                        variant: "primary",
                                                        children: "Assistir"
                                                    }), Object(w.jsxs)("div", {
                                                        className: "item-details-btn-bottom",
                                                        children: [Object(w.jsx)(B.a, {
                                                            className: "s-btn-2",
                                                            variant: "primary",
                                                            onClick: this.handleTrailer,
                                                            children: Object(w.jsx)("i", {
                                                                className: "bi bi-youtube"
                                                            })
                                                        }), Object(w.jsx)(B.a, {
                                                            className: "s-btn-2",
                                                            variant: "primary",
                                                            children: Object(w.jsx)("i", {
                                                                className: "bi bi-bookmark-plus"
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), Object(w.jsx)("div", {
                                            className: "col-lg-9",
                                            children: Object(w.jsxs)("div", {
                                                className: "item__details__text",
                                                children: [Object(w.jsxs)("div", {
                                                    className: "item__details__title",
                                                    children: [Object(w.jsx)("h3", {
                                                        children: a.title
                                                    }), " ", Object(w.jsxs)("span", {
                                                        children: ["T\xedtulo Original: ", a.title]
                                                    })]
                                                }), Object(w.jsxs)("div", {
                                                    className: "vote__container",
                                                    children: ["Avalia\xe7\xe3o", Object(w.jsx)(Zt.a, {
                                                        onClickAway: function() {
                                                            return e.setState({
                                                                tooltipOpen2: !1
                                                            })
                                                        },
                                                        children: Object(w.jsx)(E.a, {
                                                            title: Object(w.jsxs)(A.a, {
                                                                variant: "subtitle2",
                                                                children: [a.voteAverage, "/10"]
                                                            }),
                                                            arrow: !0,
                                                            placement: "right",
                                                            open: n,
                                                            disableFocusListener: !0,
                                                            disableHoverListener: !0,
                                                            disableTouchListener: !0,
                                                            onClose: function() {
                                                                return e.setState({
                                                                    tooltipOpen2: !1
                                                                })
                                                            },
                                                            PopperProps: {
                                                                disablePortal: !0
                                                            },
                                                            children: Object(w.jsx)("div", {
                                                                onClick: function() {
                                                                    return e.setState({
                                                                        tooltipOpen2: !0
                                                                    })
                                                                },
                                                                children: Object(w.jsx)($t.a, {
                                                                    name: "Rating",
                                                                    value: a.voteAverage,
                                                                    max: 10,
                                                                    readOnly: !0
                                                                })
                                                            })
                                                        })
                                                    })]
                                                }), Object(w.jsx)("p", {
                                                    children: a.overview
                                                }), Object(w.jsxs)("div", {
                                                    className: "item__details__widget",
                                                    children: [Object(w.jsx)(we, {
                                                        state: this.state
                                                    }), Object(w.jsx)("div", {
                                                        className: "row",
                                                        children: Object(w.jsx)("div", {
                                                            className: "col",
                                                            children: Object(w.jsxs)("ul", {
                                                                children: [Object(w.jsxs)("li", {
                                                                    children: [Object(w.jsx)("span", {
                                                                        children: "Tipo:"
                                                                    }), " ", "Series"]
                                                                }), Object(w.jsxs)("li", {
                                                                    children: [Object(w.jsx)("span", {
                                                                        children: "Data de lan\xe7amento:"
                                                                    }), " ", a.language ? "".concat(this.prettyDate(), " (").concat(a.language.toUpperCase(), ")") : this.prettyDate()]
                                                                }), Object(w.jsxs)("li", {
                                                                    children: [Object(w.jsx)("span", {
                                                                        children: "G\xeanero:"
                                                                    }), a.adult ? Object(w.jsx)(Qt.a, {
                                                                        color: "secondary",
                                                                        avatar: Object(w.jsx)(Be.a, {
                                                                            children: "R"
                                                                        }),
                                                                        className: "info__genre",
                                                                        label: "Adult (18+)",
                                                                        variant: "outlined"
                                                                    }) : null, a.genres && a.genres.length ? a.genres.map((function(e) {
                                                                        return Object(w.jsx)(c.b, {
                                                                            to: "/genres?genre=".concat(e),
                                                                            className: "no_decoration_link",
                                                                            children: Object(w.jsx)(Qt.a, {
                                                                                avatar: Object(w.jsx)(Be.a, {
                                                                                    style: {
                                                                                        backgroundColor: "#14dca0",
                                                                                        color: "#000",
                                                                                        fontWeight: "bold"
                                                                                    },
                                                                                    children: e.charAt(0)
                                                                                }),
                                                                                className: "info__genre random_color",
                                                                                label: e,
                                                                                variant: "outlined"
                                                                            })
                                                                        }, Ne())
                                                                    })) : null]
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(w.jsx)(At, {
                                    isOpen: this.state.openStarDialog,
                                    handleClose: this.handleStarClose,
                                    metadata: a
                                }), Object(w.jsx)(zt, {
                                    isOpen: this.state.openTrailerDialog,
                                    handleClose: this.handleTrailerClose,
                                    metadata: a,
                                    trailer: r
                                })]
                            })
                        }
                    }]), a
                }(r.Component),
                sa = function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var r;
                        return Object(h.a)(this, a), (r = t.call(this, e)).state = Object(n.a)(Object(n.a)({}, e.state), {}, {
                            subtitleMenuAnchor: !1
                        }), r.onFileChange = r.onFileChange.bind(Object(m.a)(r)), r.handleSubtitleMenuOpen = r.handleSubtitleMenuOpen.bind(Object(m.a)(r)), r.handleSubtitleMenuClose = r.handleSubtitleMenuClose.bind(Object(m.a)(r)), r.handleClickImage = r.handleClickImage.bind(Object(m.a)(r)), r.handleCloseDialog = r.handleCloseDialog.bind(Object(m.a)(r)), r.handleParentSeason = r.handleParentSeason.bind(Object(m.a)(r)), r
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.state,
                                t = e.metadata,
                                a = e.q,
                                n = e.ui_config;
                            t.children.length > 0 ? ht({
                                title: "".concat(n.title || "libDrive", " - ").concat(t.children[a].name),
                                description: "Watch ".concat(t.children[a].name, " on ").concat(n.title || "libDrive", "!"),
                                type: "video.episode"
                            }) : ht({
                                title: "".concat(n.title || "libDrive", " - NotFound"),
                                description: "Watch --NotFound-- on ".concat(n.title || "libDrive", "!"),
                                type: "video.episode"
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.state,
                                t = e.id,
                                a = e.q,
                                n = e.watching;
                            n[t] = a, window.localStorage.setItem("watching", JSON.stringify(n))
                        }
                    }, {
                        key: "onFileChange",
                        value: function() {
                            var e = Object(Yt.a)(Xt.a.mark((function e(t) {
                                var a;
                                return Xt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.target.files.length) {
                                                e.next = 11;
                                                break
                                            }
                                            if (!t.target.files[0].name.endsWith(".srt")) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 4, aa()(t.target.files[0]);
                                        case 4:
                                            a = e.sent, this.setState({
                                                file: a,
                                                fileName: t.target.files[0].name,
                                                playerKey: Ne()
                                            }), e.next = 9;
                                            break;
                                        case 8:
                                            this.setState({
                                                file: URL.createObjectURL(t.target.files[0]),
                                                playerKey: Ne()
                                            });
                                        case 9:
                                            e.next = 12;
                                            break;
                                        case 11:
                                            this.setState({
                                                file: null,
                                                playerKey: Ne()
                                            });
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "handleSubtitleMenuOpen",
                        value: function(e) {
                            this.state.tracks.length ? this.setState({
                                subtitleMenuAnchor: e.currentTarget
                            }) : document.getElementById("file-input-button").click()
                        }
                    }, {
                        key: "handleSubtitleMenuClose",
                        value: function() {
                            this.setState({
                                subtitleMenuAnchor: !1
                            })
                        }
                    }, {
                        key: "handleClickImage",
                        value: function(e) {
                            this.setState({
                                image_url: e
                            })
                        }
                    }, {
                        key: "handleCloseDialog",
                        value: function() {
                            this.setState({
                                image_url: null
                            })
                        }
                    }, {
                        key: "handleParentSeason",
                        value: function(e) {
                            var t = this.state,
                                a = t.metadata,
                                n = t.parent_index;
                            e ? a.parent_children[n + 1] && this.props.history.push("/view/ts/".concat(a.parent_children[n + 1].id, "?q=0")) : a.parent_children[n - 1] && this.props.history.push("/view/ts/".concat(a.parent_children[n - 1].id, "?q=0"))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this,
                                a = this.state,
                                r = (a.default_track, a.default_video, a.file),
                                i = a.fileName,
                                o = a.image_url,
                                s = a.metadata,
                                l = a.parent_index,
                                d = (a.playerKey, a.q),
                                u = a.server,
                                h = a.videos,
                                p = a.tracks,
                                m = a.subtitleMenuAnchor;
                            r && (p = [{
                                name: i,
                                url: r
                            }]);
                            var j = h.map((function(e) {
                                return {
                                    html: e.name,
                                    url: e.url
                                }
                            }));
                            return Object(w.jsx)("div", {
                                className: "TVSView",
                                children: s.children.length > 0 ? Object(w.jsxs)(w.Fragment, {
                                    children: [Object(w.jsxs)(L.a, {
                                        onClose: this.handleCloseDialog,
                                        "aria-labelledby": "img-dialog",
                                        open: !!o,
                                        children: [Object(w.jsx)(M.a, {
                                            id: "img-dialog",
                                            children: "Thumbnail"
                                        }), Object(w.jsx)("img", {
                                            src: o,
                                            style: {
                                                padding: "25px"
                                            }
                                        })]
                                    }), Object(w.jsxs)("div", {
                                        className: "plyr__component",
                                        children: [Object(w.jsx)("div", {
                                            className: "video-top",
                                            children: Object(w.jsxs)("span", {
                                                className: "video-title color-white",
                                                children: ["\xa0", Object(w.jsxs)(ye.a, {
                                                    className: "mb-1",
                                                    pill: !0,
                                                    bg: "primary",
                                                    children: ["S-", s.parent_children[l].name.replace(/\D/g, "").replace(/\b(0(?!\b))+/g, ""), ".E-", d + 1]
                                                }), Object(w.jsx)("br", {}), Object(w.jsx)("span", {
                                                    className: "break",
                                                    children: "|"
                                                }), " ", s.children[d].name]
                                            })
                                        }), Object(w.jsx)(na.a, {
                                            aspectRatio: "16x9",
                                            children: Object(w.jsx)(ea.a, {
                                                option: {
                                                    theme: "#14dca0",
                                                    url: h[0].url,
                                                    aspectRatio: !0,
                                                    setting: !0,
                                                    hotkey: !0,
                                                    fullscreen: !0,
                                                    whitelist: ["*"],
                                                    playbackRate: !0,
                                                    localSubtitle: !0,
                                                    quality: j,
                                                    subtitle: {
                                                        url: "",
                                                        type: "srt",
                                                        style: {
                                                            color: "#03A9F4"
                                                        },
                                                        encoding: "utf-8",
                                                        bilingual: !0
                                                    }
                                                }
                                            })
                                        }), Object(w.jsxs)("div", {
                                            className: "d-flex justify-content-between pt-3",
                                            children: [d < 1 ? Object(w.jsx)(B.a, {
                                                disabled: !0,
                                                variant: "dark",
                                                children: "Primeiro epis\xf3dio"
                                            }) : Object(w.jsx)(B.a, {
                                                as: c.b,
                                                to: {
                                                    pathname: window.location.pathname,
                                                    search: "?q=".concat(+d - 1)
                                                },
                                                variant: "primary",
                                                children: "Anterior"
                                            }), d === s.children.length - 1 ? Object(w.jsx)(B.a, {
                                                disabled: !0,
                                                variant: "dark",
                                                children: "\xdaltimo epis\xf3dio"
                                            }) : Object(w.jsx)(B.a, {
                                                as: c.b,
                                                to: {
                                                    pathname: window.location.pathname,
                                                    search: "?q=".concat(+d + 1)
                                                },
                                                variant: "primary",
                                                children: "Pr\xf3ximo"
                                            })]
                                        }), Object(w.jsxs)("div", {
                                            className: "file__info",
                                            style: {
                                                background: Ft.palette.background.paper
                                            },
                                            children: [s.parent_children[l - 1] ? Object(w.jsx)(B.a, (e = {
                                                className: "season-btn"
                                            }, Object(Ue.a)(e, "className", "season-btn"), Object(Ue.a)(e, "onClick", (function() {
                                                return t.handleParentSeason(!1)
                                            })), Object(Ue.a)(e, "variant", "primary"), Object(Ue.a)(e, "children", "Temporada anterior"), e)) : Object(w.jsx)(B.a, {
                                                className: "season-btn",
                                                disabled: !0,
                                                variant: "dark",
                                                children: "Primeira Temporada"
                                            }), Object(w.jsx)("div", {
                                                style: {
                                                    display: "flex",
                                                    width: "100%",
                                                    justifyContent: "center"
                                                },
                                                children: Object(w.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignContent: "center",
                                                        justifyContent: "center",
                                                        flexWrap: "wrap",
                                                        margin: "20px 5px 20px 5px"
                                                    },
                                                    children: [Object(w.jsx)(nt, {
                                                        state: Object(n.a)(Object(n.a)({}, this.state), {}, {
                                                            id: s.children[d].id,
                                                            metadata: s.children[d]
                                                        })
                                                    }), Object(w.jsx)(D, {
                                                        state: this.state,
                                                        tv: !0
                                                    }), Object(w.jsx)(rt, {
                                                        state: this.state
                                                    }), Object(w.jsxs)("div", {
                                                        className: "info__button",
                                                        children: [Object(w.jsx)("input", {
                                                            id: "file-input",
                                                            hidden: !0,
                                                            onChange: this.onFileChange,
                                                            type: "file",
                                                            accept: ".vtt,.srt"
                                                        }), Object(w.jsxs)(B.a, {
                                                            disabled: !0,
                                                            variant: "dark",
                                                            component: "span",
                                                            "aria-controls": "subtitles-menu",
                                                            onClick: this.handleSubtitleMenuOpen,
                                                            children: [Object(w.jsx)("i", {
                                                                className: "bi bi-badge-cc-fill"
                                                            }), "Legenda"]
                                                        }), Object(w.jsxs)(O.a, {
                                                            id: "subtitles-menu",
                                                            anchorEl: m,
                                                            keepMounted: !0,
                                                            anchorOrigin: {
                                                                vertical: "top",
                                                                horizontal: "center"
                                                            },
                                                            transformOrigin: {
                                                                vertical: "top",
                                                                horizontal: "center"
                                                            },
                                                            open: Boolean(m),
                                                            onClose: this.handleSubtitleMenuClose,
                                                            children: [p.length ? Object(w.jsxs)("div", {
                                                                children: [p.map((function(e) {
                                                                    return Object(w.jsx)("a", {
                                                                        className: "no_decoration_link",
                                                                        href: e.url,
                                                                        children: Object(w.jsx)(v.a, {
                                                                            onClick: t.handleSubtitleMenuClose,
                                                                            children: e.name
                                                                        })
                                                                    })
                                                                })), Object(w.jsx)(f.a, {})]
                                                            }) : null, Object(w.jsx)(v.a, {
                                                                onClick: function() {
                                                                    document.getElementById("file-input-button").click(), t.setState({
                                                                        subtitleMenuAnchor: !1
                                                                    })
                                                                },
                                                                children: "Upload"
                                                            })]
                                                        }), Object(w.jsx)("label", {
                                                            htmlFor: "file-input",
                                                            id: "file-input-button"
                                                        })]
                                                    })]
                                                })
                                            }), s.parent_children[l + 1] ? Object(w.jsx)(B.a, {
                                                className: "season-btn",
                                                onClick: function() {
                                                    return t.handleParentSeason(!0)
                                                },
                                                variant: "primary",
                                                children: "Pr\xf3xima temporada"
                                            }) : Object(w.jsx)(B.a, {
                                                className: "season-btn",
                                                disabled: !0,
                                                variant: "dark",
                                                children: "Ultima temporada"
                                            })]
                                        }), Object(w.jsx)(Ie.a, {
                                            fluid: !0,
                                            children: Object(w.jsxs)(Wt.a, {
                                                className: "m-2 pt-2",
                                                children: [Object(w.jsx)("h2", {
                                                    className: "color-white",
                                                    children: "Epis\xf3dios"
                                                }), s.children.length ? s.children.map((function(e, a) {
                                                    return Object(w.jsx)(Vt.a, {
                                                        className: "p-3",
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 4,
                                                        lg: 3,
                                                        xl: 3,
                                                        children: Object(w.jsx)(c.b, {
                                                            to: {
                                                                pathname: window.location.pathname,
                                                                search: "?q=".concat(a)
                                                            },
                                                            children: Object(w.jsxs)(ue.a, {
                                                                children: [Object(w.jsxs)("div", {
                                                                    className: "card-img mb-2",
                                                                    children: [Object(w.jsx)("div", {
                                                                        className: "card-info-episode",
                                                                        children: Object(w.jsx)("h5", {
                                                                            children: Object(w.jsxs)(ye.a, {
                                                                                pill: !0,
                                                                                bg: "dark",
                                                                                children: ["S-", s.parent_children[l].name.replace(/\D/g, "").replace(/\b(0(?!\b))+/g, ""), ".E-", a + 1]
                                                                            })
                                                                        })
                                                                    }), Object(w.jsxs)("div", {
                                                                        className: "card-img-image",
                                                                        children: [Object(w.jsx)(ue.a.Image, {
                                                                            className: "img-fluid card-image rounded",
                                                                            onClick: function() {
                                                                                return t.handleClickImage("".concat(u, "/api/v1/image/thumbnail?id=").concat(e.id))
                                                                            },
                                                                            onError: function(e) {
                                                                                e.target.onerror = null, e.target.src = ge
                                                                            },
                                                                            src: "".concat(u, "/api/v1/image/thumbnail?id=").concat(e.id)
                                                                        }), Object(w.jsx)("div", {
                                                                            className: "middle",
                                                                            children: Object(w.jsx)("span", {
                                                                                className: "round-button",
                                                                                children: Object(w.jsx)("i", {
                                                                                    className: "bi bi-play-fill"
                                                                                })
                                                                            })
                                                                        })]
                                                                    })]
                                                                }), Object(w.jsx)(ue.a.Caption, {
                                                                    children: Object(w.jsx)("span", {
                                                                        children: e.name
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    }, Ne())
                                                })) : null]
                                            })
                                        })]
                                    })]
                                }) : Object(w.jsxs)("div", {
                                    children: [Object(w.jsx)(ia.a, {
                                        className: "m-3",
                                        children: "No Episodes Found"
                                    }), Object(w.jsxs)("div", {
                                        className: "d-flex justify-content-between p-3",
                                        children: [s.parent_children[l - 1] ? Object(w.jsx)(B.a, {
                                            onClick: function() {
                                                return t.handleParentSeason(!1)
                                            },
                                            variant: "primary",
                                            children: "Temporada anterior"
                                        }) : Object(w.jsx)(B.a, {
                                            disabled: !0,
                                            variant: "dark",
                                            children: "Primeira temporada"
                                        }), s.parent_children[l + 1] ? Object(w.jsx)(B.a, {
                                            onClick: function() {
                                                return t.handleParentSeason(!0)
                                            },
                                            variant: "primary",
                                            children: "Pr\xf3xima temporada"
                                        }) : Object(w.jsx)(B.a, {
                                            disabled: !0,
                                            variant: "dark",
                                            children: "Ultima temporada"
                                        })]
                                    })]
                                })
                            })
                        }
                    }]), a
                }(r.Component),
                ca = (a(244), function(e) {
                    Object(j.a)(a, e);
                    var t = Object(b.a)(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                            auth: window.sessionStorage.getItem("auth") || window.localStorage.getItem("auth") || "0",
                            id: n.props.match.params.id,
                            isAndroid: /(android)/i.test(navigator.userAgent || navigator.vendor || window.opera),
                            isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream,
                            isLoaded: !1,
                            metadata: {},
                            openStarDialog: !1,
                            playerKey: Ne(),
                            q: ve.a.parse(n.props.location.search).q || JSON.parse(window.localStorage.getItem("watching") || "{}")[n.props.match.params.id] || 0,
                            server: window.sessionStorage.getItem("server") || window.localStorage.getItem("server") || window.location.origin,
                            videos: [],
                            starred: JSON.parse(window.localStorage.getItem("starred_lists") || "[]").some((function(e) {
                                return e.children.some((function(e) {
                                    return e.id == n.props.match.params.id
                                }))
                            })) || !1,
                            tracks: [{
                                name: null,
                                url: null
                            }],
                            type: n.props.type,
                            ui_config: JSON.parse(window.localStorage.getItem("ui_config") || window.sessionStorage.getItem("ui_config") || "{}"),
                            watching: JSON.parse(window.localStorage.getItem("watching") || "{}")
                        }, n
                    }
                    return Object(p.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(Yt.a)(Xt.a.mark((function e() {
                                var t, a, n, r, i, o, s, c, l, d, u, h, p, m, j, b, g, O = this;
                                return Xt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.state, a = t.auth, n = t.id, r = t.q, i = t.server, o = t.type, r = parseInt(r), a && i || this.props.history.push("/logout"), document.documentElement.style.setProperty("--plyr-color-main", Ft.palette.primary.main), document.documentElement.style.setProperty("--plyr-video-background", Ft.palette.background.default), document.documentElement.style.setProperty("--plyr-menu-background", Ft.palette.background.paper), document.documentElement.style.setProperty("--plyr-menu-color", Ft.palette.text.primary), s = "".concat(i, "/api/v1/metadata"), c = "?a=".concat(a, "&id=").concat(encodeURIComponent(n)), e.next = 11, N.a.get(s + c).catch((function(e) {
                                                if (console.error(e), e.response) {
                                                    var t = e.response.data;
                                                    401 === t.code ? k.a.fire({
                                                        title: "Error!",
                                                        text: t.message,
                                                        icon: "error",
                                                        confirmButtonText: "Login",
                                                        confirmButtonColor: Ft.palette.success.main
                                                    }).then((function(e) {
                                                        e.isConfirmed && O.props.history.push("/logout")
                                                    })) : i ? k.a.fire({
                                                        title: "Error!",
                                                        text: "Algo deu errado durante a comunica\xe7\xe3o com o servidor!",
                                                        icon: "error",
                                                        confirmButtonText: "Logout",
                                                        confirmButtonColor: Ft.palette.success.main,
                                                        cancelButtonText: "Retry",
                                                        cancelButtonColor: Ft.palette.error.main,
                                                        showCancelButton: !0
                                                    }).then((function(e) {
                                                        e.isConfirmed ? O.props.history.push("/logout") : e.isDismissed && location.reload()
                                                    })) : O.props.history.push("/logout")
                                                } else e.request && (i ? k.a.fire({
                                                    title: "Error!",
                                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                                    icon: "error",
                                                    confirmButtonText: "Sair",
                                                    confirmButtonColor: Ft.palette.success.main,
                                                    cancelButtonText: "Tente Novamente",
                                                    cancelButtonColor: Ft.palette.error.main,
                                                    showCancelButton: !0
                                                }).then((function(e) {
                                                    e.isConfirmed ? O.props.history.push("/logout") : e.isDismissed && location.reload()
                                                })) : O.props.history.push("/logout"))
                                            }));
                                        case 11:
                                            if (l = e.sent, d = l.data.content, "m" != o) {
                                                e.next = 21;
                                                break
                                            }
                                            return h = "".concat(i, "/api/v1/streammap"), p = "?a=".concat(a, "&id=").concat(encodeURIComponent(n), "&parent=").concat(d.parents[0], "&name=").concat(encodeURIComponent(d.name), "&t=").concat(d.type, "&server=").concat(encodeURIComponent(i)), e.next = 18, N.a.get(h + p).catch((function(e) {
                                                if (console.error(e), e.response) {
                                                    var t = e.response.data;
                                                    401 === t.code ? k.a.fire({
                                                        title: "Error!",
                                                        text: t.message,
                                                        icon: "error",
                                                        confirmButtonText: "Login",
                                                        confirmButtonColor: Ft.palette.success.main
                                                    }).then((function(e) {
                                                        e.isConfirmed && O.props.history.push("/logout")
                                                    })) : i ? k.a.fire({
                                                        title: "Error!",
                                                        text: "Algo deu errado durante a comunica\xe7\xe3o com o servidor!",
                                                        icon: "error",
                                                        confirmButtonText: "Logout",
                                                        confirmButtonColor: Ft.palette.success.main,
                                                        cancelButtonText: "Retry",
                                                        cancelButtonColor: Ft.palette.error.main,
                                                        showCancelButton: !0
                                                    }).then((function(e) {
                                                        e.isConfirmed ? O.props.history.push("/logout") : e.isDismissed && location.reload()
                                                    })) : O.props.history.push("/logout")
                                                } else e.request && (i ? k.a.fire({
                                                    title: "Error!",
                                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                                    icon: "error",
                                                    confirmButtonText: "Sair",
                                                    confirmButtonColor: Ft.palette.success.main,
                                                    cancelButtonText: "Tente Novamente",
                                                    cancelButtonColor: Ft.palette.error.main,
                                                    showCancelButton: !0
                                                }).then((function(e) {
                                                    e.isConfirmed ? O.props.history.push("/logout") : e.isDismissed && location.reload()
                                                })) : O.props.history.push("/logout"))
                                            }));
                                        case 18:
                                            u = e.sent, e.next = 32;
                                            break;
                                        case 21:
                                            if ("ts" != o) {
                                                e.next = 32;
                                                break
                                            }
                                            if (!d.children.length || !d.children[r]) {
                                                e.next = 31;
                                                break
                                            }
                                            return m = "".concat(i, "/api/v1/streammap"), j = "?a=".concat(a, "&id=").concat(encodeURIComponent(d.children[r].id), "&parent=").concat(n, "&name=").concat(encodeURIComponent(d.children[r].name), "&t=").concat(d.children[r].type, "&server=").concat(encodeURIComponent(i)), console.log(m + j), e.next = 28, N.a.get(m + j).catch((function(e) {
                                                if (console.error(e), e.response) {
                                                    var t = e.response.data;
                                                    401 === t.code ? k.a.fire({
                                                        title: "Error!",
                                                        text: t.message,
                                                        icon: "error",
                                                        confirmButtonText: "Login",
                                                        confirmButtonColor: Ft.palette.success.main
                                                    }).then((function(e) {
                                                        e.isConfirmed && O.props.history.push("/logout")
                                                    })) : i ? k.a.fire({
                                                        title: "Error!",
                                                        text: "Algo deu errado durante a comunica\xe7\xe3o com o servidor!",
                                                        icon: "error",
                                                        confirmButtonText: "Logout",
                                                        confirmButtonColor: Ft.palette.success.main,
                                                        cancelButtonText: "Retry",
                                                        cancelButtonColor: Ft.palette.error.main,
                                                        showCancelButton: !0
                                                    }).then((function(e) {
                                                        e.isConfirmed ? O.props.history.push("/logout") : e.isDismissed && location.reload()
                                                    })) : O.props.history.push("/logout")
                                                } else e.request && (i ? k.a.fire({
                                                    title: "Error!",
                                                    text: "MeuDrive n\xe3o p\xf4de se comunicar com o servidor!",
                                                    icon: "error",
                                                    confirmButtonText: "Sair",
                                                    confirmButtonColor: Ft.palette.success.main,
                                                    cancelButtonText: "Tente Novamente",
                                                    cancelButtonColor: Ft.palette.error.main,
                                                    showCancelButton: !0
                                                }).then((function(e) {
                                                    e.isConfirmed ? O.props.history.push("/logout") : e.isDismissed && location.reload()
                                                })) : O.props.history.push("/logout"))
                                            }));
                                        case 28:
                                            u = e.sent, e.next = 32;
                                            break;
                                        case 31:
                                            u = {
                                                data: {
                                                    content: {
                                                        default_video: 0,
                                                        videos: [],
                                                        subtitles: []
                                                    }
                                                }
                                            };
                                        case 32:
                                            if (d.parent_children)
                                                for (g = 0; g < d.parent_children.length; g++) d.parent_children[g].id == n && (b = g);
                                            "m" == o || "ts" == o ? this.setState({
                                                default_track: u.data.content.default_track,
                                                default_video: u.data.content.default_video,
                                                isLoaded: !0,
                                                metadata: l.data.content,
                                                parent_index: b,
                                                q: r,
                                                type: o,
                                                videos: u.data.content.videos,
                                                tracks: u.data.content.tracks
                                            }) : this.setState({
                                                isLoaded: !0,
                                                metadata: l.data.content,
                                                type: o
                                            });
                                        case 34:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            ht()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.isLoaded,
                                a = e.metadata,
                                r = e.ui_config;
                            return t && ht({
                                title: a.title ? "".concat(r.title || "libDrive", " - ").concat(a.title) : r.title || "libDrive",
                                description: "Watch ".concat(a.title || a.name, " on ").concat(r.title || "libDrive", "!"),
                                image: a.backdropPath
                            }), t && "file" == a.type ? Object(w.jsxs)("div", {
                                className: "View",
                                children: [Object(w.jsx)(He, Object(n.a)({}, this.props)), Object(w.jsx)(ra, {
                                    state: this.state
                                }), Object(w.jsx)(ke, {})]
                            }) : t && "directory" == a.type && a.title ? Object(w.jsxs)("div", {
                                className: "View",
                                children: [Object(w.jsx)(He, Object(n.a)({}, this.props)), Object(w.jsx)(oa, {
                                    state: this.state
                                }), Object(w.jsx)(ke, {})]
                            }) : t && "directory" == a.type ? Object(w.jsxs)("div", {
                                className: "View",
                                children: [Object(w.jsx)(He, Object(n.a)({}, this.props)), Object(w.jsx)(sa, {
                                    state: this.state,
                                    history: this.props.history
                                }), Object(w.jsx)(ke, {})]
                            }) : Object(w.jsx)(Re, {})
                        }
                    }]), a
                }(r.Component));
            a(245);
            s.a.render(Object(w.jsx)(ot, {
                children: Object(w.jsx)(c.a, {
                    children: Object(w.jsxs)(u.a, {
                        theme: Ft,
                        children: [Object(w.jsx)(d.a, {}), Object(w.jsxs)(l.d, {
                            children: [Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/",
                                render: function(e) {
                                    return Object(w.jsx)(C, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/browse",
                                render: function(e) {
                                    return Object(w.jsx)(I, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/browse/:category",
                                render: function(e) {
                                    return Object(w.jsx)(xe, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/starred",
                                render: function(e) {
                                    return Object(w.jsx)(Lt, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/genres",
                                render: function(e) {
                                    return Object(w.jsx)(_e, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/login",
                                render: function(e) {
                                    return Object(w.jsx)(Le, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/logout",
                                render: function(e) {
                                    return Object(w.jsx)(Pe, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/search",
                                render: function(e) {
                                    return Object(w.jsx)(ut, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/search/:q",
                                render: function(e) {
                                    return Object(w.jsx)(st, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/settings",
                                render: function(e) {
                                    return Object(w.jsx)(Ot, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/settings/login",
                                render: function(e) {
                                    return Object(w.jsx)(vt, Object(n.a)({}, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/view/m/:id",
                                render: function(e) {
                                    return Object(w.jsx)(ca, Object(n.a)({
                                        type: "m"
                                    }, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/view/tb/:id",
                                render: function(e) {
                                    return Object(w.jsx)(ca, Object(n.a)({
                                        type: "tb"
                                    }, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                exact: !0,
                                path: "/view/ts/:id",
                                render: function(e) {
                                    return Object(w.jsx)(ca, Object(n.a)({
                                        type: "ts"
                                    }, e), Ne())
                                }
                            }), Object(w.jsx)(l.b, {
                                path: "",
                                render: function(e) {
                                    return Object(w.jsx)(Qe, Object(n.a)({}, e), Ne())
                                }
                            })]
                        })]
                    })
                })
            }), document.getElementById("root"))
        }
    },
    [
        [246, 1, 2]
    ]
]);
//# sourceMappingURL=main.cd252eb0.chunk.js.map - Itens por pagina range||"60"