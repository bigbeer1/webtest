!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("path"), require("fs"), require("crypto")) : "function" == typeof define && define.amd ? define(["path", "fs", "crypto"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).path, e.fs, e.crypto$1)
}(this, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && "object" == typeof e && "default" in e ? e : {default: e}
    }

    var qt = n(e), Jt = n(t), Yt = n(r), o = function (e) {
        var t, m, B, N, O, j, i, L, W = e = {exports: {}}, y = void 0 !== y ? y : {}, z = Object.assign({}, y),
            V = "./this.program", H = "object" == typeof window, c = "function" == typeof importScripts,
            X = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
            r = "", G = (X ? (r = c ? qt.default.dirname(r) + "/" : __dirname + "/", j = () => {
                O || (N = Jt.default, O = qt.default)
            }, t = function (e, t) {
                return j(), e = O.normalize(e), N.readFileSync(e, t ? void 0 : "utf8")
            }, B = e => {
                e = t(e, !0);
                return e = e.buffer ? e : new Uint8Array(e)
            }, m = (e, r, n) => {
                j(), e = O.normalize(e), N.readFile(e, function (e, t) {
                    e ? n(e) : r(t.buffer)
                })
            }, 1 < process.argv.length && (V = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), W.exports = y, process.on("uncaughtException", function (e) {
                if (!(e instanceof pe)) throw e
            }), process.on("unhandledRejection", function (e) {
                throw e
            }), y.inspect = function () {
                return "[Emscripten Module object]"
            }) : (H || c) && (c ? r = self.location.href : "undefined" != typeof document && document.currentScript && (r = document.currentScript.src), r = 0 !== r.indexOf("blob:") ? r.substr(0, r.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", t = e => {
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1), t.send(null), t.responseText
            }, c && (B = e => {
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
            }), m = (e, t, r) => {
                var n = new XMLHttpRequest;
                n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = () => {
                    200 == n.status || 0 == n.status && n.response ? t(n.response) : r()
                }, n.onerror = r, n.send(null)
            }), y.print || console.log.bind(console)), s = y.printErr || console.warn.bind(console),
            q = (Object.assign(y, z), z = null, y.arguments, y.thisProgram && (V = y.thisProgram), y.quit, y.wasmBinary && (i = y.wasmBinary), y.noExitRuntime, "object" != typeof WebAssembly && w("no native wasm support detected"), !1);

        function J(e, t) {
            e || w(t)
        }

        var Y, d, f, u, K, l, p, Q, Z, ee, te = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

        function a(e, t, r) {
            for (var n = t + r, o = t; e[o] && !(n <= o);) ++o;
            if (16 < o - t && e.buffer && te) return te.decode(e.subarray(t, o));
            for (var i = ""; t < o;) {
                var a, s, u = e[t++];
                128 & u ? (a = 63 & e[t++], 192 != (224 & u) ? (s = 63 & e[t++], (u = 224 == (240 & u) ? (15 & u) << 12 | a << 6 | s : (7 & u) << 18 | a << 12 | s << 6 | 63 & e[t++]) < 65536 ? i += String.fromCharCode(u) : (s = u - 65536, i += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s))) : i += String.fromCharCode((31 & u) << 6 | a)) : i += String.fromCharCode(u)
            }
            return i
        }

        function re(e, t) {
            return e ? a(f, e, t) : ""
        }

        function ne(e, t, r, n) {
            if (!(0 < n)) return 0;
            for (var o = r, i = r + n - 1, a = 0; a < e.length; ++a) {
                var s = e.charCodeAt(a);
                if ((s = 55296 <= s && s <= 57343 ? 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++a) : s) <= 127) {
                    if (i <= r) break;
                    t[r++] = s
                } else if (s <= 2047) {
                    if (i <= r + 1) break;
                    t[r++] = 192 | s >> 6, t[r++] = 128 | 63 & s
                } else if (s <= 65535) {
                    if (i <= r + 2) break;
                    t[r++] = 224 | s >> 12, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | 63 & s
                } else {
                    if (i <= r + 3) break;
                    t[r++] = 240 | s >> 18, t[r++] = 128 | s >> 12 & 63, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | 63 & s
                }
            }
            return t[r] = 0, r - o
        }

        function oe(e) {
            for (var t = 0, r = 0; r < e.length; ++r) {
                var n = e.charCodeAt(r);
                n <= 127 ? t++ : n <= 2047 ? t += 2 : 55296 <= n && n <= 57343 ? (t += 4, ++r) : t += 3
            }
            return t
        }

        y.INITIAL_MEMORY;
        var h, g, v, ie = [], ae = [], se = [], n = 0, o = null;

        function ue() {
            n++, y.monitorRunDependencies && y.monitorRunDependencies(n)
        }

        function le() {
            var e;
            n--, y.monitorRunDependencies && y.monitorRunDependencies(n), 0 == n && o && (e = o, o = null, e())
        }

        function w(e) {
            throw y.onAbort && y.onAbort(e), s(e = "Aborted(" + e + ")"), q = !0, e += ". Build with -sASSERTIONS for more info.", new WebAssembly.RuntimeError(e)
        }

        function ce(e) {
            return e.startsWith("data:application/octet-stream;base64,")
        }

        function de(e) {
            return e.startsWith("file://")
        }

        function fe(e) {
            try {
                if (e == h && i) return new Uint8Array(i);
                if (B) return B(e);
                throw"both async and sync fetching of the wasm failed"
            } catch (e) {
                w(e)
            }
        }

        function pe(e) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
        }

        function he(e) {
            for (; 0 < e.length;) e.shift()(y)
        }

        function me(e) {
            this.excPtr = e, this.ptr = e - 24, this.set_type = function (e) {
                p[this.ptr + 4 >> 2] = e
            }, this.get_type = function () {
                return p[this.ptr + 4 >> 2]
            }, this.set_destructor = function (e) {
                p[this.ptr + 8 >> 2] = e
            }, this.get_destructor = function () {
                return p[this.ptr + 8 >> 2]
            }, this.set_refcount = function (e) {
                l[this.ptr >> 2] = e
            }, this.set_caught = function (e) {
                d[this.ptr + 12 >> 0] = e = e ? 1 : 0
            }, this.get_caught = function () {
                return 0 != d[this.ptr + 12 >> 0]
            }, this.set_rethrown = function (e) {
                d[this.ptr + 13 >> 0] = e = e ? 1 : 0
            }, this.get_rethrown = function () {
                return 0 != d[this.ptr + 13 >> 0]
            }, this.init = function (e, t) {
                this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
            }, this.add_ref = function () {
                var e = l[this.ptr >> 2];
                l[this.ptr >> 2] = e + 1
            }, this.release_ref = function () {
                var e = l[this.ptr >> 2];
                return l[this.ptr >> 2] = e - 1, 1 === e
            }, this.set_adjusted_ptr = function (e) {
                p[this.ptr + 16 >> 2] = e
            }, this.get_adjusted_ptr = function () {
                return p[this.ptr + 16 >> 2]
            }, this.get_exception_ptr = function () {
                if (Xt(this.get_type())) return p[this.excPtr >> 2];
                var e = this.get_adjusted_ptr();
                return 0 !== e ? e : this.excPtr
            }
        }

        ce(h = "decoder-pro-simd.wasm") || (h = function (e) {
            return y.locateFile ? y.locateFile(e, r) : r + e
        }(h));
        var E = {
            isAbs: e => "/" === e.charAt(0),
            splitPath: e => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
            normalizeArray: (e, t) => {
                for (var r = 0, n = e.length - 1; 0 <= n; n--) {
                    var o = e[n];
                    "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--)
                }
                if (t) for (; r; r--) e.unshift("..");
                return e
            },
            normalize: e => {
                var t = E.isAbs(e), r = "/" === e.substr(-1);
                return (e = (e = E.normalizeArray(e.split("/").filter(e => !!e), !t).join("/")) || t ? e : ".") && r && (e += "/"), (t ? "/" : "") + e
            },
            dirname: e => {
                var e = E.splitPath(e), t = e[0], e = e[1];
                return t || e ? t + (e = e && e.substr(0, e.length - 1)) : "."
            },
            basename: e => {
                if ("/" === e) return "/";
                var t = (e = (e = E.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                return -1 === t ? e : e.substr(t + 1)
            },
            join: function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return E.normalize(e.join("/"))
            },
            join2: (e, t) => E.normalize(e + "/" + t)
        }, b = {
            resolve: function () {
                for (var e = "", t = !1, r = arguments.length - 1; -1 <= r && !t; r--) {
                    var n = 0 <= r ? arguments[r] : k.cwd();
                    if ("string" != typeof n) throw new TypeError("Arguments to path.resolve must be strings");
                    if (!n) return "";
                    e = n + "/" + e, t = E.isAbs(n)
                }
                return (t ? "/" : "") + E.normalizeArray(e.split("/").filter(e => !!e), !t).join("/") || "."
            }, relative: (e, t) => {
                function r(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++) ;
                    for (var r = e.length - 1; 0 <= r && "" === e[r]; r--) ;
                    return r < t ? [] : e.slice(t, r - t + 1)
                }

                e = b.resolve(e).substr(1), t = b.resolve(t).substr(1);
                for (var n = r(e.split("/")), o = r(t.split("/")), i = Math.min(n.length, o.length), a = i, s = 0; s < i; s++) if (n[s] !== o[s]) {
                    a = s;
                    break
                }
                for (var u = [], s = a; s < n.length; s++) u.push("..");
                return (u = u.concat(o.slice(a))).join("/")
            }
        };

        function ye(e, t, r) {
            r = 0 < r ? r : oe(e) + 1, r = new Array(r), e = ne(e, r, 0, r.length);
            return t && (r.length = e), r
        }

        var _ = {
            ttys: [], init: function () {
            }, shutdown: function () {
            }, register: function (e, t) {
                _.ttys[e] = {input: [], output: [], ops: t}, k.registerDevice(e, _.stream_ops)
            }, stream_ops: {
                open: function (e) {
                    var t = _.ttys[e.node.rdev];
                    if (!t) throw new k.ErrnoError(43);
                    e.tty = t, e.seekable = !1
                }, close: function (e) {
                    e.tty.ops.flush(e.tty)
                }, flush: function (e) {
                    e.tty.ops.flush(e.tty)
                }, read: function (e, t, r, n, o) {
                    if (!e.tty || !e.tty.ops.get_char) throw new k.ErrnoError(60);
                    for (var i, a = 0, s = 0; s < n; s++) {
                        try {
                            i = e.tty.ops.get_char(e.tty)
                        } catch (e) {
                            throw new k.ErrnoError(29)
                        }
                        if (void 0 === i && 0 === a) throw new k.ErrnoError(6);
                        if (null == i) break;
                        a++, t[r + s] = i
                    }
                    return a && (e.node.timestamp = Date.now()), a
                }, write: function (e, t, r, n, o) {
                    if (!e.tty || !e.tty.ops.put_char) throw new k.ErrnoError(60);
                    try {
                        for (var i = 0; i < n; i++) e.tty.ops.put_char(e.tty, t[r + i])
                    } catch (e) {
                        throw new k.ErrnoError(29)
                    }
                    return n && (e.node.timestamp = Date.now()), i
                }
            }, default_tty_ops: {
                get_char: function (e) {
                    if (!e.input.length) {
                        var t = null;
                        if (X) {
                            var r = Buffer.alloc(256), n = 0;
                            try {
                                n = N.readSync(process.stdin.fd, r, 0, 256, -1)
                            } catch (e) {
                                if (!e.toString().includes("EOF")) throw e;
                                n = 0
                            }
                            t = 0 < n ? r.slice(0, n).toString("utf-8") : null
                        } else "undefined" != typeof window && "function" == typeof window.prompt ? null !== (t = window.prompt("Input: ")) && (t += "\n") : "function" == typeof readline && null !== (t = readline()) && (t += "\n");
                        if (!t) return null;
                        e.input = ye(t, !0)
                    }
                    return e.input.shift()
                }, put_char: function (e, t) {
                    null === t || 10 === t ? (G(a(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                }, flush: function (e) {
                    e.output && 0 < e.output.length && (G(a(e.output, 0)), e.output = [])
                }
            }, default_tty1_ops: {
                put_char: function (e, t) {
                    null === t || 10 === t ? (s(a(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                }, flush: function (e) {
                    e.output && 0 < e.output.length && (s(a(e.output, 0)), e.output = [])
                }
            }
        };

        function ge(e) {
            t = e, e = 65536 * Math.ceil(t / 65536);
            var t = Ht(65536, e);
            return t ? (e = e, f.fill(0, t, t + e), t) : 0
        }

        var T = {
            ops_table: null, mount: function (e) {
                return T.createNode(null, "/", 16895, 0)
            }, createNode: function (e, t, r, n) {
                if (k.isBlkdev(r) || k.isFIFO(r)) throw new k.ErrnoError(63);
                T.ops_table || (T.ops_table = {
                    dir: {
                        node: {
                            getattr: T.node_ops.getattr,
                            setattr: T.node_ops.setattr,
                            lookup: T.node_ops.lookup,
                            mknod: T.node_ops.mknod,
                            rename: T.node_ops.rename,
                            unlink: T.node_ops.unlink,
                            rmdir: T.node_ops.rmdir,
                            readdir: T.node_ops.readdir,
                            symlink: T.node_ops.symlink
                        }, stream: {llseek: T.stream_ops.llseek}
                    },
                    file: {
                        node: {getattr: T.node_ops.getattr, setattr: T.node_ops.setattr},
                        stream: {
                            llseek: T.stream_ops.llseek,
                            read: T.stream_ops.read,
                            write: T.stream_ops.write,
                            allocate: T.stream_ops.allocate,
                            mmap: T.stream_ops.mmap,
                            msync: T.stream_ops.msync
                        }
                    },
                    link: {
                        node: {
                            getattr: T.node_ops.getattr,
                            setattr: T.node_ops.setattr,
                            readlink: T.node_ops.readlink
                        }, stream: {}
                    },
                    chrdev: {
                        node: {getattr: T.node_ops.getattr, setattr: T.node_ops.setattr},
                        stream: k.chrdev_stream_ops
                    }
                });
                r = k.createNode(e, t, r, n);
                return k.isDir(r.mode) ? (r.node_ops = T.ops_table.dir.node, r.stream_ops = T.ops_table.dir.stream, r.contents = {}) : k.isFile(r.mode) ? (r.node_ops = T.ops_table.file.node, r.stream_ops = T.ops_table.file.stream, r.usedBytes = 0, r.contents = null) : k.isLink(r.mode) ? (r.node_ops = T.ops_table.link.node, r.stream_ops = T.ops_table.link.stream) : k.isChrdev(r.mode) && (r.node_ops = T.ops_table.chrdev.node, r.stream_ops = T.ops_table.chrdev.stream), r.timestamp = Date.now(), e && (e.contents[t] = r, e.timestamp = r.timestamp), r
            }, getFileDataAsTypedArray: function (e) {
                return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
            }, expandFileStorage: function (e, t) {
                var r = e.contents ? e.contents.length : 0;
                t <= r || (t = Math.max(t, r * (r < 1048576 ? 2 : 1.125) >>> 0), 0 != r && (t = Math.max(t, 256)), r = e.contents, e.contents = new Uint8Array(t), 0 < e.usedBytes && e.contents.set(r.subarray(0, e.usedBytes), 0))
            }, resizeFileStorage: function (e, t) {
                var r;
                e.usedBytes != t && (0 == t ? (e.contents = null, e.usedBytes = 0) : (r = e.contents, e.contents = new Uint8Array(t), r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t))
            }, node_ops: {
                getattr: function (e) {
                    var t = {};
                    return t.dev = k.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, k.isDir(e.mode) ? t.size = 4096 : k.isFile(e.mode) ? t.size = e.usedBytes : k.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t
                }, setattr: function (e, t) {
                    void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && T.resizeFileStorage(e, t.size)
                }, lookup: function (e, t) {
                    throw k.genericErrors[44]
                }, mknod: function (e, t, r, n) {
                    return T.createNode(e, t, r, n)
                }, rename: function (e, t, r) {
                    if (k.isDir(e.mode)) {
                        var n;
                        try {
                            n = k.lookupNode(t, r)
                        } catch (e) {
                        }
                        if (n) for (var o in n.contents) throw new k.ErrnoError(55)
                    }
                    delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = r, t.contents[r] = e, t.timestamp = e.parent.timestamp, e.parent = t
                }, unlink: function (e, t) {
                    delete e.contents[t], e.timestamp = Date.now()
                }, rmdir: function (e, t) {
                    for (var r in k.lookupNode(e, t).contents) throw new k.ErrnoError(55);
                    delete e.contents[t], e.timestamp = Date.now()
                }, readdir: function (e) {
                    var t, r = [".", ".."];
                    for (t in e.contents) e.contents.hasOwnProperty(t) && r.push(t);
                    return r
                }, symlink: function (e, t, r) {
                    e = T.createNode(e, t, 41471, 0);
                    return e.link = r, e
                }, readlink: function (e) {
                    if (k.isLink(e.mode)) return e.link;
                    throw new k.ErrnoError(28)
                }
            }, stream_ops: {
                read: function (e, t, r, n, o) {
                    var i = e.node.contents;
                    if (o >= e.node.usedBytes) return 0;
                    var a = Math.min(e.node.usedBytes - o, n);
                    if (8 < a && i.subarray) t.set(i.subarray(o, o + a), r); else for (var s = 0; s < a; s++) t[r + s] = i[o + s];
                    return a
                }, write: function (e, t, r, n, o, i) {
                    if (!n) return 0;
                    var a = e.node;
                    if (a.timestamp = Date.now(), t.subarray && (!a.contents || a.contents.subarray)) {
                        if (i) return a.contents = t.subarray(r, r + n), a.usedBytes = n;
                        if (0 === a.usedBytes && 0 === o) return a.contents = t.slice(r, r + n), a.usedBytes = n;
                        if (o + n <= a.usedBytes) return a.contents.set(t.subarray(r, r + n), o), n
                    }
                    if (T.expandFileStorage(a, o + n), a.contents.subarray && t.subarray) a.contents.set(t.subarray(r, r + n), o); else for (var s = 0; s < n; s++) a.contents[o + s] = t[r + s];
                    return a.usedBytes = Math.max(a.usedBytes, o + n), n
                }, llseek: function (e, t, r) {
                    if (1 === r ? t += e.position : 2 === r && k.isFile(e.node.mode) && (t += e.node.usedBytes), t < 0) throw new k.ErrnoError(28);
                    return t
                }, allocate: function (e, t, r) {
                    T.expandFileStorage(e.node, t + r), e.node.usedBytes = Math.max(e.node.usedBytes, t + r)
                }, mmap: function (e, t, r, n, o) {
                    if (!k.isFile(e.node.mode)) throw new k.ErrnoError(43);
                    var i, a, e = e.node.contents;
                    if (2 & o || e.buffer !== Y) {
                        if ((0 < r || r + t < e.length) && (e = e.subarray ? e.subarray(r, r + t) : Array.prototype.slice.call(e, r, r + t)), a = !0, !(i = ge(t))) throw new k.ErrnoError(48);
                        d.set(e, i)
                    } else a = !1, i = e.byteOffset;
                    return {ptr: i, allocated: a}
                }, msync: function (e, t, r, n, o) {
                    if (k.isFile(e.node.mode)) return 2 & o || T.stream_ops.write(e, t, 0, n, r, !1), 0;
                    throw new k.ErrnoError(43)
                }
            }
        }, k = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: "/",
            initialized: !1,
            ignorePermissions: !0,
            ErrnoError: null,
            genericErrors: {},
            filesystems: null,
            syncFSRequests: 0,
            lookupPath: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (!(e = b.resolve(k.cwd(), e))) return {path: "", node: null};
                if (8 < (t = Object.assign({
                    follow_mount: !0,
                    recurse_count: 0
                }, t)).recurse_count) throw new k.ErrnoError(32);
                for (var r = E.normalizeArray(e.split("/").filter(e => !!e), !1), n = k.root, o = "/", i = 0; i < r.length; i++) {
                    var a = i === r.length - 1;
                    if (a && t.parent) break;
                    if (n = k.lookupNode(n, r[i]), o = E.join2(o, r[i]), !k.isMountpoint(n) || a && !t.follow_mount || (n = n.mounted.root), !a || t.follow) for (var s = 0; k.isLink(n.mode);) {
                        var u = k.readlink(o), o = b.resolve(E.dirname(o), u),
                            n = k.lookupPath(o, {recurse_count: t.recurse_count + 1}).node;
                        if (40 < s++) throw new k.ErrnoError(32)
                    }
                }
                return {path: o, node: n}
            },
            getPath: e => {
                for (var t, r; ;) {
                    if (k.isRoot(e)) return r = e.mount.mountpoint, t ? "/" !== r[r.length - 1] ? r + "/" + t : r + t : r;
                    t = t ? e.name + "/" + t : e.name, e = e.parent
                }
            },
            hashName: (e, t) => {
                for (var r = 0, n = 0; n < t.length; n++) r = (r << 5) - r + t.charCodeAt(n) | 0;
                return (e + r >>> 0) % k.nameTable.length
            },
            hashAddNode: e => {
                var t = k.hashName(e.parent.id, e.name);
                e.name_next = k.nameTable[t], k.nameTable[t] = e
            },
            hashRemoveNode: e => {
                var t = k.hashName(e.parent.id, e.name);
                if (k.nameTable[t] === e) k.nameTable[t] = e.name_next; else for (var r = k.nameTable[t]; r;) {
                    if (r.name_next === e) {
                        r.name_next = e.name_next;
                        break
                    }
                    r = r.name_next
                }
            },
            lookupNode: (e, t) => {
                var r = k.mayLookup(e);
                if (r) throw new k.ErrnoError(r, e);
                for (var r = k.hashName(e.id, t), n = k.nameTable[r]; n; n = n.name_next) {
                    var o = n.name;
                    if (n.parent.id === e.id && o === t) return n
                }
                return k.lookup(e, t)
            },
            createNode: (e, t, r, n) => {
                e = new k.FSNode(e, t, r, n);
                return k.hashAddNode(e), e
            },
            destroyNode: e => {
                k.hashRemoveNode(e)
            },
            isRoot: e => e === e.parent,
            isMountpoint: e => !!e.mounted,
            isFile: e => 32768 == (61440 & e),
            isDir: e => 16384 == (61440 & e),
            isLink: e => 40960 == (61440 & e),
            isChrdev: e => 8192 == (61440 & e),
            isBlkdev: e => 24576 == (61440 & e),
            isFIFO: e => 4096 == (61440 & e),
            isSocket: e => 49152 == (49152 & e),
            flagModes: {r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090},
            modeStringToFlags: e => {
                var t = k.flagModes[e];
                if (void 0 === t) throw new Error("Unknown file open mode: " + e);
                return t
            },
            flagsToPermissionString: e => {
                var t = ["r", "w", "rw"][3 & e];
                return 512 & e && (t += "w"), t
            },
            nodePermissions: (e, t) => k.ignorePermissions || (!t.includes("r") || 292 & e.mode) && (!t.includes("w") || 146 & e.mode) && (!t.includes("x") || 73 & e.mode) ? 0 : 2,
            mayLookup: e => {
                return k.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2)
            },
            mayCreate: (e, t) => {
                try {
                    return k.lookupNode(e, t), 20
                } catch (e) {
                }
                return k.nodePermissions(e, "wx")
            },
            mayDelete: (e, t, r) => {
                var n;
                try {
                    n = k.lookupNode(e, t)
                } catch (e) {
                    return e.errno
                }
                t = k.nodePermissions(e, "wx");
                if (t) return t;
                if (r) {
                    if (!k.isDir(n.mode)) return 54;
                    if (k.isRoot(n) || k.getPath(n) === k.cwd()) return 10
                } else if (k.isDir(n.mode)) return 31;
                return 0
            },
            mayOpen: (e, t) => e ? k.isLink(e.mode) ? 32 : k.isDir(e.mode) && ("r" !== k.flagsToPermissionString(t) || 512 & t) ? 31 : k.nodePermissions(e, k.flagsToPermissionString(t)) : 44,
            MAX_OPEN_FDS: 4096,
            nextfd: function () {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : k.MAX_OPEN_FDS, r = e; r <= t; r++) if (!k.streams[r]) return r;
                throw new k.ErrnoError(33)
            },
            getStream: e => k.streams[e],
            createStream: (e, t, r) => {
                k.FSStream || (k.FSStream = function () {
                    this.shared = {}
                }, k.FSStream.prototype = {}, Object.defineProperties(k.FSStream.prototype, {
                    object: {
                        get: function () {
                            return this.node
                        }, set: function (e) {
                            this.node = e
                        }
                    }, isRead: {
                        get: function () {
                            return 1 != (2097155 & this.flags)
                        }
                    }, isWrite: {
                        get: function () {
                            return 0 != (2097155 & this.flags)
                        }
                    }, isAppend: {
                        get: function () {
                            return 1024 & this.flags
                        }
                    }, flags: {
                        get: function () {
                            return this.shared.flags
                        }, set: function (e) {
                            this.shared.flags = e
                        }
                    }, position: {
                        get: function () {
                            return this.shared.position
                        }, set: function (e) {
                            this.shared.position = e
                        }
                    }
                })), e = Object.assign(new k.FSStream, e);
                t = k.nextfd(t, r);
                return e.fd = t, k.streams[t] = e
            },
            closeStream: e => {
                k.streams[e] = null
            },
            chrdev_stream_ops: {
                open: e => {
                    var t = k.getDevice(e.node.rdev);
                    e.stream_ops = t.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
                }, llseek: () => {
                    throw new k.ErrnoError(70)
                }
            },
            major: e => e >> 8,
            minor: e => 255 & e,
            makedev: (e, t) => e << 8 | t,
            registerDevice: (e, t) => {
                k.devices[e] = {stream_ops: t}
            },
            getDevice: e => k.devices[e],
            getMounts: e => {
                for (var t = [], r = [e]; r.length;) {
                    var n = r.pop();
                    t.push(n), r.push.apply(r, n.mounts)
                }
                return t
            },
            syncfs: (t, r) => {
                "function" == typeof t && (r = t, t = !1), k.syncFSRequests++, 1 < k.syncFSRequests && s("warning: " + k.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                var n = k.getMounts(k.root.mount), o = 0;

                function i(e) {
                    return k.syncFSRequests--, r(e)
                }

                function a(e) {
                    if (e) return a.errored ? void 0 : (a.errored = !0, i(e));
                    ++o >= n.length && i(null)
                }

                n.forEach(e => {
                    if (!e.type.syncfs) return a(null);
                    e.type.syncfs(e, t, a)
                })
            },
            mount: (e, t, r) => {
                var n, o = "/" === r, i = !r;
                if (o && k.root) throw new k.ErrnoError(10);
                if (!o && !i) {
                    i = k.lookupPath(r, {follow_mount: !1});
                    if (r = i.path, n = i.node, k.isMountpoint(n)) throw new k.ErrnoError(10);
                    if (!k.isDir(n.mode)) throw new k.ErrnoError(54)
                }
                i = {type: e, opts: t, mountpoint: r, mounts: []}, t = e.mount(i);
                return (t.mount = i).root = t, o ? k.root = t : n && (n.mounted = i, n.mount && n.mount.mounts.push(i)), t
            },
            unmount: e => {
                e = k.lookupPath(e, {follow_mount: !1});
                if (!k.isMountpoint(e.node)) throw new k.ErrnoError(28);
                var e = e.node, t = e.mounted, n = k.getMounts(t), t = (Object.keys(k.nameTable).forEach(e => {
                    for (var t = k.nameTable[e]; t;) {
                        var r = t.name_next;
                        n.includes(t.mount) && k.destroyNode(t), t = r
                    }
                }), e.mounted = null, e.mount.mounts.indexOf(t));
                e.mount.mounts.splice(t, 1)
            },
            lookup: (e, t) => e.node_ops.lookup(e, t),
            mknod: (e, t, r) => {
                var n = k.lookupPath(e, {parent: !0}).node, e = E.basename(e);
                if (!e || "." === e || ".." === e) throw new k.ErrnoError(28);
                var o = k.mayCreate(n, e);
                if (o) throw new k.ErrnoError(o);
                if (n.node_ops.mknod) return n.node_ops.mknod(n, e, t, r);
                throw new k.ErrnoError(63)
            },
            create: (e, t) => k.mknod(e, t = (t = void 0 !== t ? t : 438) & 4095 | 32768, 0),
            mkdir: (e, t) => k.mknod(e, t = (t = void 0 !== t ? t : 511) & 1023 | 16384, 0),
            mkdirTree: (e, t) => {
                for (var r = e.split("/"), n = "", o = 0; o < r.length; ++o) if (r[o]) {
                    n += "/" + r[o];
                    try {
                        k.mkdir(n, t)
                    } catch (e) {
                        if (20 != e.errno) throw e
                    }
                }
            },
            mkdev: (e, t, r) => (void 0 === r && (r = t, t = 438), k.mknod(e, t |= 8192, r)),
            symlink: (e, t) => {
                if (!b.resolve(e)) throw new k.ErrnoError(44);
                var r = k.lookupPath(t, {parent: !0}).node;
                if (!r) throw new k.ErrnoError(44);
                var t = E.basename(t), n = k.mayCreate(r, t);
                if (n) throw new k.ErrnoError(n);
                if (r.node_ops.symlink) return r.node_ops.symlink(r, t, e);
                throw new k.ErrnoError(63)
            },
            rename: (e, t) => {
                var r = E.dirname(e), n = E.dirname(t), o = E.basename(e), i = E.basename(t),
                    a = k.lookupPath(e, {parent: !0}).node, s = k.lookupPath(t, {parent: !0}).node;
                if (!a || !s) throw new k.ErrnoError(44);
                if (a.mount !== s.mount) throw new k.ErrnoError(75);
                var u, l = k.lookupNode(a, o);
                if ("." !== b.relative(e, n).charAt(0)) throw new k.ErrnoError(28);
                if ("." !== b.relative(t, r).charAt(0)) throw new k.ErrnoError(55);
                try {
                    u = k.lookupNode(s, i)
                } catch (e) {
                }
                if (l !== u) {
                    n = k.isDir(l.mode), t = k.mayDelete(a, o, n);
                    if (t) throw new k.ErrnoError(t);
                    if (t = u ? k.mayDelete(s, i, n) : k.mayCreate(s, i)) throw new k.ErrnoError(t);
                    if (!a.node_ops.rename) throw new k.ErrnoError(63);
                    if (k.isMountpoint(l) || u && k.isMountpoint(u)) throw new k.ErrnoError(10);
                    if (s !== a && (t = k.nodePermissions(a, "w"))) throw new k.ErrnoError(t);
                    k.hashRemoveNode(l);
                    try {
                        a.node_ops.rename(l, s, i)
                    } catch (e) {
                        throw e
                    } finally {
                        k.hashAddNode(l)
                    }
                }
            },
            rmdir: e => {
                var t = k.lookupPath(e, {parent: !0}).node, e = E.basename(e), r = k.lookupNode(t, e),
                    n = k.mayDelete(t, e, !0);
                if (n) throw new k.ErrnoError(n);
                if (!t.node_ops.rmdir) throw new k.ErrnoError(63);
                if (k.isMountpoint(r)) throw new k.ErrnoError(10);
                t.node_ops.rmdir(t, e), k.destroyNode(r)
            },
            readdir: e => {
                e = k.lookupPath(e, {follow: !0}).node;
                if (e.node_ops.readdir) return e.node_ops.readdir(e);
                throw new k.ErrnoError(54)
            },
            unlink: e => {
                var t = k.lookupPath(e, {parent: !0}).node;
                if (!t) throw new k.ErrnoError(44);
                var e = E.basename(e), r = k.lookupNode(t, e), n = k.mayDelete(t, e, !1);
                if (n) throw new k.ErrnoError(n);
                if (!t.node_ops.unlink) throw new k.ErrnoError(63);
                if (k.isMountpoint(r)) throw new k.ErrnoError(10);
                t.node_ops.unlink(t, e), k.destroyNode(r)
            },
            readlink: e => {
                e = k.lookupPath(e).node;
                if (!e) throw new k.ErrnoError(44);
                if (e.node_ops.readlink) return b.resolve(k.getPath(e.parent), e.node_ops.readlink(e));
                throw new k.ErrnoError(28)
            },
            stat: (e, t) => {
                e = k.lookupPath(e, {follow: !t}).node;
                if (!e) throw new k.ErrnoError(44);
                if (e.node_ops.getattr) return e.node_ops.getattr(e);
                throw new k.ErrnoError(63)
            },
            lstat: e => k.stat(e, !0),
            chmod: (e, t, r) => {
                r = "string" == typeof e ? k.lookupPath(e, {follow: !r}).node : e;
                if (!r.node_ops.setattr) throw new k.ErrnoError(63);
                r.node_ops.setattr(r, {mode: 4095 & t | -4096 & r.mode, timestamp: Date.now()})
            },
            lchmod: (e, t) => {
                k.chmod(e, t, !0)
            },
            fchmod: (e, t) => {
                e = k.getStream(e);
                if (!e) throw new k.ErrnoError(8);
                k.chmod(e.node, t)
            },
            chown: (e, t, r, n) => {
                n = "string" == typeof e ? k.lookupPath(e, {follow: !n}).node : e;
                if (!n.node_ops.setattr) throw new k.ErrnoError(63);
                n.node_ops.setattr(n, {timestamp: Date.now()})
            },
            lchown: (e, t, r) => {
                k.chown(e, t, r, !0)
            },
            fchown: (e, t, r) => {
                e = k.getStream(e);
                if (!e) throw new k.ErrnoError(8);
                k.chown(e.node, t, r)
            },
            truncate: (e, t) => {
                if (t < 0) throw new k.ErrnoError(28);
                e = "string" == typeof e ? k.lookupPath(e, {follow: !0}).node : e;
                if (!e.node_ops.setattr) throw new k.ErrnoError(63);
                if (k.isDir(e.mode)) throw new k.ErrnoError(31);
                if (!k.isFile(e.mode)) throw new k.ErrnoError(28);
                var r = k.nodePermissions(e, "w");
                if (r) throw new k.ErrnoError(r);
                e.node_ops.setattr(e, {size: t, timestamp: Date.now()})
            },
            ftruncate: (e, t) => {
                e = k.getStream(e);
                if (!e) throw new k.ErrnoError(8);
                if (0 == (2097155 & e.flags)) throw new k.ErrnoError(28);
                k.truncate(e.node, t)
            },
            utime: (e, t, r) => {
                e = k.lookupPath(e, {follow: !0}).node;
                e.node_ops.setattr(e, {timestamp: Math.max(t, r)})
            },
            open: (e, t, r) => {
                if ("" === e) throw new k.ErrnoError(44);
                var n;
                if (r = void 0 === r ? 438 : r, r = 64 & (t = "string" == typeof t ? k.modeStringToFlags(t) : t) ? 4095 & r | 32768 : 0, "object" == typeof e) n = e; else {
                    e = E.normalize(e);
                    try {
                        n = k.lookupPath(e, {follow: !(131072 & t)}).node
                    } catch (e) {
                    }
                }
                var o = !1;
                if (64 & t) if (n) {
                    if (128 & t) throw new k.ErrnoError(20)
                } else n = k.mknod(e, r, 0), o = !0;
                if (!n) throw new k.ErrnoError(44);
                if (k.isChrdev(n.mode) && (t &= -513), 65536 & t && !k.isDir(n.mode)) throw new k.ErrnoError(54);
                if (!o) {
                    r = k.mayOpen(n, t);
                    if (r) throw new k.ErrnoError(r)
                }
                512 & t && !o && k.truncate(n, 0), t &= -131713;
                r = k.createStream({
                    node: n,
                    path: k.getPath(n),
                    flags: t,
                    seekable: !0,
                    position: 0,
                    stream_ops: n.stream_ops,
                    ungotten: [],
                    error: !1
                });
                return r.stream_ops.open && r.stream_ops.open(r), !y.logReadFiles || 1 & t || (k.readFiles || (k.readFiles = {}), e in k.readFiles || (k.readFiles[e] = 1)), r
            },
            close: e => {
                if (k.isClosed(e)) throw new k.ErrnoError(8);
                e.getdents && (e.getdents = null);
                try {
                    e.stream_ops.close && e.stream_ops.close(e)
                } catch (e) {
                    throw e
                } finally {
                    k.closeStream(e.fd)
                }
                e.fd = null
            },
            isClosed: e => null === e.fd,
            llseek: (e, t, r) => {
                if (k.isClosed(e)) throw new k.ErrnoError(8);
                if (!e.seekable || !e.stream_ops.llseek) throw new k.ErrnoError(70);
                if (0 != r && 1 != r && 2 != r) throw new k.ErrnoError(28);
                return e.position = e.stream_ops.llseek(e, t, r), e.ungotten = [], e.position
            },
            read: (e, t, r, n, o) => {
                if (n < 0 || o < 0) throw new k.ErrnoError(28);
                if (k.isClosed(e)) throw new k.ErrnoError(8);
                if (1 == (2097155 & e.flags)) throw new k.ErrnoError(8);
                if (k.isDir(e.node.mode)) throw new k.ErrnoError(31);
                if (!e.stream_ops.read) throw new k.ErrnoError(28);
                var i = void 0 !== o;
                if (i) {
                    if (!e.seekable) throw new k.ErrnoError(70)
                } else o = e.position;
                t = e.stream_ops.read(e, t, r, n, o);
                return i || (e.position += t), t
            },
            write: (e, t, r, n, o, i) => {
                if (n < 0 || o < 0) throw new k.ErrnoError(28);
                if (k.isClosed(e)) throw new k.ErrnoError(8);
                if (0 == (2097155 & e.flags)) throw new k.ErrnoError(8);
                if (k.isDir(e.node.mode)) throw new k.ErrnoError(31);
                if (!e.stream_ops.write) throw new k.ErrnoError(28);
                e.seekable && 1024 & e.flags && k.llseek(e, 0, 2);
                var a = void 0 !== o;
                if (a) {
                    if (!e.seekable) throw new k.ErrnoError(70)
                } else o = e.position;
                t = e.stream_ops.write(e, t, r, n, o, i);
                return a || (e.position += t), t
            },
            allocate: (e, t, r) => {
                if (k.isClosed(e)) throw new k.ErrnoError(8);
                if (t < 0 || r <= 0) throw new k.ErrnoError(28);
                if (0 == (2097155 & e.flags)) throw new k.ErrnoError(8);
                if (!k.isFile(e.node.mode) && !k.isDir(e.node.mode)) throw new k.ErrnoError(43);
                if (!e.stream_ops.allocate) throw new k.ErrnoError(138);
                e.stream_ops.allocate(e, t, r)
            },
            mmap: (e, t, r, n, o) => {
                if (0 != (2 & n) && 0 == (2 & o) && 2 != (2097155 & e.flags)) throw new k.ErrnoError(2);
                if (1 == (2097155 & e.flags)) throw new k.ErrnoError(2);
                if (e.stream_ops.mmap) return e.stream_ops.mmap(e, t, r, n, o);
                throw new k.ErrnoError(43)
            },
            msync: (e, t, r, n, o) => e && e.stream_ops.msync ? e.stream_ops.msync(e, t, r, n, o) : 0,
            munmap: e => 0,
            ioctl: (e, t, r) => {
                if (e.stream_ops.ioctl) return e.stream_ops.ioctl(e, t, r);
                throw new k.ErrnoError(59)
            },
            readFile: function (e) {
                let t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", "utf8" !== t.encoding && "binary" !== t.encoding) throw new Error('Invalid encoding type "' + t.encoding + '"');
                var r, n = k.open(e, t.flags), e = k.stat(e).size, o = new Uint8Array(e);
                return k.read(n, o, 0, e, 0), "utf8" === t.encoding ? r = a(o, 0) : "binary" === t.encoding && (r = o), k.close(n), r
            },
            writeFile: function (e, t) {
                let r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                r.flags = r.flags || 577;
                e = k.open(e, r.flags, r.mode);
                if ("string" == typeof t) {
                    var n = new Uint8Array(oe(t) + 1), o = ne(t, n, 0, n.length);
                    k.write(e, n, 0, o, void 0, r.canOwn)
                } else {
                    if (!ArrayBuffer.isView(t)) throw new Error("Unsupported data type");
                    k.write(e, t, 0, t.byteLength, void 0, r.canOwn)
                }
                k.close(e)
            },
            cwd: () => k.currentPath,
            chdir: e => {
                e = k.lookupPath(e, {follow: !0});
                if (null === e.node) throw new k.ErrnoError(44);
                if (!k.isDir(e.node.mode)) throw new k.ErrnoError(54);
                var t = k.nodePermissions(e.node, "x");
                if (t) throw new k.ErrnoError(t);
                k.currentPath = e.path
            },
            createDefaultDirectories: () => {
                k.mkdir("/tmp"), k.mkdir("/home"), k.mkdir("/home/web_user")
            },
            createDefaultDevices: () => {
                k.mkdir("/dev"), k.registerDevice(k.makedev(1, 3), {
                    read: () => 0,
                    write: (e, t, r, n, o) => n
                }), k.mkdev("/dev/null", k.makedev(1, 3)), _.register(k.makedev(5, 0), _.default_tty_ops), _.register(k.makedev(6, 0), _.default_tty1_ops), k.mkdev("/dev/tty", k.makedev(5, 0)), k.mkdev("/dev/tty1", k.makedev(6, 0));
                var e = function () {
                    var e;
                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return e = new Uint8Array(1), () => (crypto.getRandomValues(e), e[0]);
                    if (X) try {
                        var t = Yt.default;
                        return () => t.randomBytes(1)[0]
                    } catch (e) {
                    }
                    return () => w("randomDevice")
                }();
                k.createDevice("/dev", "random", e), k.createDevice("/dev", "urandom", e), k.mkdir("/dev/shm"), k.mkdir("/dev/shm/tmp")
            },
            createSpecialDirectories: () => {
                k.mkdir("/proc");
                var t = k.mkdir("/proc/self");
                k.mkdir("/proc/self/fd"), k.mount({
                    mount: () => {
                        var e = k.createNode(t, "fd", 16895, 73);
                        return e.node_ops = {
                            lookup: (e, t) => {
                                var r = k.getStream(+t);
                                if (!r) throw new k.ErrnoError(8);
                                t = {parent: null, mount: {mountpoint: "fake"}, node_ops: {readlink: () => r.path}};
                                return t.parent = t
                            }
                        }, e
                    }
                }, {}, "/proc/self/fd")
            },
            createStandardStreams: () => {
                y.stdin ? k.createDevice("/dev", "stdin", y.stdin) : k.symlink("/dev/tty", "/dev/stdin"), y.stdout ? k.createDevice("/dev", "stdout", null, y.stdout) : k.symlink("/dev/tty", "/dev/stdout"), y.stderr ? k.createDevice("/dev", "stderr", null, y.stderr) : k.symlink("/dev/tty1", "/dev/stderr"), k.open("/dev/stdin", 0), k.open("/dev/stdout", 1), k.open("/dev/stderr", 1)
            },
            ensureErrnoError: () => {
                k.ErrnoError || (k.ErrnoError = function (e, t) {
                    this.node = t, this.setErrno = function (e) {
                        this.errno = e
                    }, this.setErrno(e), this.message = "FS error"
                }, k.ErrnoError.prototype = new Error, k.ErrnoError.prototype.constructor = k.ErrnoError, [44].forEach(e => {
                    k.genericErrors[e] = new k.ErrnoError(e), k.genericErrors[e].stack = "<generic error, no stack>"
                }))
            },
            staticInit: () => {
                k.ensureErrnoError(), k.nameTable = new Array(4096), k.mount(T, {}, "/"), k.createDefaultDirectories(), k.createDefaultDevices(), k.createSpecialDirectories(), k.filesystems = {MEMFS: T}
            },
            init: (e, t, r) => {
                k.init.initialized = !0, k.ensureErrnoError(), y.stdin = e || y.stdin, y.stdout = t || y.stdout, y.stderr = r || y.stderr, k.createStandardStreams()
            },
            quit: () => {
                k.init.initialized = !1;
                for (var e = 0; e < k.streams.length; e++) {
                    var t = k.streams[e];
                    t && k.close(t)
                }
            },
            getMode: (e, t) => {
                var r = 0;
                return e && (r |= 365), t && (r |= 146), r
            },
            findObject: (e, t) => {
                e = k.analyzePath(e, t);
                return e.exists ? e.object : null
            },
            analyzePath: (e, t) => {
                try {
                    e = (n = k.lookupPath(e, {follow: !t})).path
                } catch (e) {
                }
                var r = {
                    isRoot: !1,
                    exists: !1,
                    error: 0,
                    name: null,
                    path: null,
                    object: null,
                    parentExists: !1,
                    parentPath: null,
                    parentObject: null
                };
                try {
                    var n = k.lookupPath(e, {parent: !0});
                    r.parentExists = !0, r.parentPath = n.path, r.parentObject = n.node, r.name = E.basename(e), n = k.lookupPath(e, {follow: !t}), r.exists = !0, r.path = n.path, r.object = n.node, r.name = n.node.name, r.isRoot = "/" === n.path
                } catch (e) {
                    r.error = e.errno
                }
                return r
            },
            createPath: (e, t, r, n) => {
                e = "string" == typeof e ? e : k.getPath(e);
                for (var o = t.split("/").reverse(); o.length;) {
                    var i = o.pop();
                    if (i) {
                        var a = E.join2(e, i);
                        try {
                            k.mkdir(a)
                        } catch (e) {
                        }
                        e = a
                    }
                }
                return a
            },
            createFile: (e, t, r, n, o) => {
                e = E.join2("string" == typeof e ? e : k.getPath(e), t), t = k.getMode(n, o);
                return k.create(e, t)
            },
            createDataFile: (e, t, r, n, o, i) => {
                var a = t,
                    t = (e && (e = "string" == typeof e ? e : k.getPath(e), a = t ? E.join2(e, t) : e), k.getMode(n, o)),
                    e = k.create(a, t);
                if (r) {
                    if ("string" == typeof r) {
                        for (var s = new Array(r.length), u = 0, l = r.length; u < l; ++u) s[u] = r.charCodeAt(u);
                        r = s
                    }
                    k.chmod(e, 146 | t);
                    n = k.open(e, 577);
                    k.write(n, r, 0, r.length, 0, i), k.close(n), k.chmod(e, t)
                }
                return e
            },
            createDevice: (e, t, u, a) => {
                var e = E.join2("string" == typeof e ? e : k.getPath(e), t), t = k.getMode(!!u, !!a),
                    r = (k.createDevice.major || (k.createDevice.major = 64), k.makedev(k.createDevice.major++, 0));
                return k.registerDevice(r, {
                    open: e => {
                        e.seekable = !1
                    }, close: e => {
                        a && a.buffer && a.buffer.length && a(10)
                    }, read: (e, t, r, n, o) => {
                        for (var i, a = 0, s = 0; s < n; s++) {
                            try {
                                i = u()
                            } catch (e) {
                                throw new k.ErrnoError(29)
                            }
                            if (void 0 === i && 0 === a) throw new k.ErrnoError(6);
                            if (null == i) break;
                            a++, t[r + s] = i
                        }
                        return a && (e.node.timestamp = Date.now()), a
                    }, write: (e, t, r, n, o) => {
                        for (var i = 0; i < n; i++) try {
                            a(t[r + i])
                        } catch (e) {
                            throw new k.ErrnoError(29)
                        }
                        return n && (e.node.timestamp = Date.now()), i
                    }
                }), k.mkdev(e, t, r)
            },
            forceLoadFile: e => {
                if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                if (!t) throw new Error("Cannot load without read() or XMLHttpRequest.");
                try {
                    e.contents = ye(t(e.url), !0), e.usedBytes = e.contents.length
                } catch (e) {
                    throw new k.ErrnoError(29)
                }
            },
            createLazyFile: (e, t, a, r, n) => {
                function o() {
                    this.lengthKnown = !1, this.chunks = []
                }

                if (o.prototype.get = function (e) {
                    var t;
                    if (!(e > this.length - 1 || e < 0)) return t = e % this.chunkSize, e = e / this.chunkSize | 0, this.getter(e)[t]
                }, o.prototype.setDataGetter = function (e) {
                    this.getter = e
                }, o.prototype.cacheLength = function () {
                    var e = new XMLHttpRequest;
                    if (e.open("HEAD", a, !1), e.send(null), !(200 <= e.status && e.status < 300 || 304 === e.status)) throw new Error("Couldn't load " + a + ". Status: " + e.status);
                    var t, n = Number(e.getResponseHeader("Content-length")),
                        r = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
                        e = (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t, o = 1048576,
                        i = (r || (o = n), this);
                    i.setDataGetter(e => {
                        var t = e * o, r = (e + 1) * o - 1, r = Math.min(r, n - 1);
                        if (void 0 === i.chunks[e] && (i.chunks[e] = ((e, t) => {
                            if (t < e) throw new Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
                            if (n - 1 < t) throw new Error("only " + n + " bytes available! programmer error!");
                            var r = new XMLHttpRequest;
                            if (r.open("GET", a, !1), n !== o && r.setRequestHeader("Range", "bytes=" + e + "-" + t), r.responseType = "arraybuffer", r.overrideMimeType && r.overrideMimeType("text/plain; charset=x-user-defined"), r.send(null), 200 <= r.status && r.status < 300 || 304 === r.status) return void 0 !== r.response ? new Uint8Array(r.response || []) : ye(r.responseText || "", !0);
                            throw new Error("Couldn't load " + a + ". Status: " + r.status)
                        })(t, r)), void 0 === i.chunks[e]) throw new Error("doXHR failed!");
                        return i.chunks[e]
                    }), !e && n || (o = n = 1, n = this.getter(0).length, o = n, G("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = n, this._chunkSize = o, this.lengthKnown = !0
                }, "undefined" != typeof XMLHttpRequest) {
                    if (!c) throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    var i = new o, i = (Object.defineProperties(i, {
                        length: {
                            get: function () {
                                return this.lengthKnown || this.cacheLength(), this._length
                            }
                        }, chunkSize: {
                            get: function () {
                                return this.lengthKnown || this.cacheLength(), this._chunkSize
                            }
                        }
                    }), {isDevice: !1, contents: i})
                } else i = {isDevice: !1, url: a};
                var s = k.createFile(e, t, i, r, n),
                    u = (i.contents ? s.contents = i.contents : i.url && (s.contents = null, s.url = i.url), Object.defineProperties(s, {
                        usedBytes: {
                            get: function () {
                                return this.contents.length
                            }
                        }
                    }), {});

                function l(e, t, r, n, o) {
                    var i = e.node.contents;
                    if (o >= i.length) return 0;
                    var a = Math.min(i.length - o, n);
                    if (i.slice) for (var s = 0; s < a; s++) t[r + s] = i[o + s]; else for (s = 0; s < a; s++) t[r + s] = i.get(o + s);
                    return a
                }

                return Object.keys(s.stream_ops).forEach(e => {
                    var t = s.stream_ops[e];
                    u[e] = function () {
                        return k.forceLoadFile(s), t.apply(null, arguments)
                    }
                }), u.read = (e, t, r, n, o) => (k.forceLoadFile(s), l(e, t, r, n, o)), u.mmap = (e, t, r, n, o) => {
                    k.forceLoadFile(s);
                    var i = ge(t);
                    if (i) return l(e, d, i, t, r), {ptr: i, allocated: !0};
                    throw new k.ErrnoError(48)
                }, s.stream_ops = u, s
            },
            createPreloadedFile: (r, n, e, o, i, a, s, u, l, c) => {
                var t, d, f, p = n ? b.resolve(E.join2(r, n)) : r;

                function h(e) {
                    function t(e) {
                        c && c(), u || k.createDataFile(r, n, e, o, i, l), a && a(), le()
                    }

                    Browser.handledByPreloadPlugin(e, p, t, () => {
                        s && s(), le()
                    }) || t(e)
                }

                ue(), "string" == typeof e ? (d = s, f = "al " + (t = e), m(t, e => {
                    J(e, 'Loading data file "' + t + '" failed (no arrayBuffer).'), h(new Uint8Array(e)), f && le()
                }, e => {
                    if (!d) throw'Loading data file "' + t + '" failed.';
                    d()
                }), f && ue()) : h(e)
            },
            indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
            DB_NAME: () => "EM_FS_" + window.location.pathname,
            DB_VERSION: 20,
            DB_STORE_NAME: "FILE_DATA",
            saveFilesToDB: (a, s, u) => {
                s = s || (() => {
                }), u = u || (() => {
                });
                var e = k.indexedDB();
                try {
                    var l = e.open(k.DB_NAME(), k.DB_VERSION)
                } catch (a) {
                    return u(a)
                }
                l.onupgradeneeded = () => {
                    G("creating db"), l.result.createObjectStore(k.DB_STORE_NAME)
                }, l.onsuccess = () => {
                    var e = l.result.transaction([k.DB_STORE_NAME], "readwrite"), t = e.objectStore(k.DB_STORE_NAME),
                        r = 0, n = 0, o = a.length;

                    function i() {
                        (0 == n ? s : u)()
                    }

                    a.forEach(e => {
                        e = t.put(k.analyzePath(e).object.contents, e);
                        e.onsuccess = () => {
                            ++r + n == o && i()
                        }, e.onerror = () => {
                            r + ++n == o && i()
                        }
                    }), e.onerror = u
                }, l.onerror = u
            },
            loadFilesFromDB: (s, u, l) => {
                u = u || (() => {
                }), l = l || (() => {
                });
                var e = k.indexedDB();
                try {
                    var c = e.open(k.DB_NAME(), k.DB_VERSION)
                } catch (s) {
                    return l(s)
                }
                c.onupgradeneeded = l, c.onsuccess = () => {
                    var e = c.result;
                    try {
                        var t = e.transaction([k.DB_STORE_NAME], "readonly")
                    } catch (e) {
                        return void l(e)
                    }
                    var r = t.objectStore(k.DB_STORE_NAME), n = 0, o = 0, i = s.length;

                    function a() {
                        (0 == o ? u : l)()
                    }

                    s.forEach(e => {
                        var t = r.get(e);
                        t.onsuccess = () => {
                            k.analyzePath(e).exists && k.unlink(e), k.createDataFile(E.dirname(e), E.basename(e), t.result, !0, !0, !0), ++n + o == i && a()
                        }, t.onerror = () => {
                            n + ++o == i && a()
                        }
                    }), t.onerror = l
                }, c.onerror = l
            }
        }, A = {
            DEFAULT_POLLMASK: 5, calculateAt: function (e, t, r) {
                if (E.isAbs(t)) return t;
                var n;
                if (-100 === e) n = k.cwd(); else {
                    e = k.getStream(e);
                    if (!e) throw new k.ErrnoError(8);
                    n = e.path
                }
                if (0 != t.length) return E.join2(n, t);
                if (r) return n;
                throw new k.ErrnoError(44)
            }, doStat: function (e, t, r) {
                try {
                    var n = e(t)
                } catch (e) {
                    if (e && e.node && E.normalize(t) !== E.normalize(k.getPath(e.node))) return -54;
                    throw e
                }
                return l[r >> 2] = n.dev, l[r + 4 >> 2] = 0, l[r + 8 >> 2] = n.ino, l[r + 12 >> 2] = n.mode, l[r + 16 >> 2] = n.nlink, l[r + 20 >> 2] = n.uid, l[r + 24 >> 2] = n.gid, l[r + 28 >> 2] = n.rdev, l[r + 32 >> 2] = 0, v = [n.size >>> 0, (g = n.size, 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], l[r + 40 >> 2] = v[0], l[r + 44 >> 2] = v[1], l[r + 48 >> 2] = 4096, l[r + 52 >> 2] = n.blocks, v = [Math.floor(n.atime.getTime() / 1e3) >>> 0, (g = Math.floor(n.atime.getTime() / 1e3), 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], l[r + 56 >> 2] = v[0], l[r + 60 >> 2] = v[1], l[r + 64 >> 2] = 0, v = [Math.floor(n.mtime.getTime() / 1e3) >>> 0, (g = Math.floor(n.mtime.getTime() / 1e3), 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], l[r + 72 >> 2] = v[0], l[r + 76 >> 2] = v[1], l[r + 80 >> 2] = 0, v = [Math.floor(n.ctime.getTime() / 1e3) >>> 0, (g = Math.floor(n.ctime.getTime() / 1e3), 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], l[r + 88 >> 2] = v[0], l[r + 92 >> 2] = v[1], l[r + 96 >> 2] = 0, v = [n.ino >>> 0, (g = n.ino, 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], l[r + 104 >> 2] = v[0], l[r + 108 >> 2] = v[1], 0
            }, doMsync: function (e, t, r, n, o) {
                e = f.slice(e, e + r);
                k.msync(t, e, o, r, n)
            }, varargs: void 0, get: function () {
                return A.varargs += 4, l[A.varargs - 4 >> 2]
            }, getStr: function (e) {
                return re(e)
            }, getStreamFromFD: function (e) {
                e = k.getStream(e);
                if (e) return e;
                throw new k.ErrnoError(8)
            }
        };

        function ve(e) {
            switch (e) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError("Unknown type size: " + e)
            }
        }

        var we = void 0;

        function D(e) {
            for (var t = "", r = e; f[r];) t += we[f[r++]];
            return t
        }

        var C = {}, P = {}, Ee = {};

        function be(e) {
            if (void 0 === e) return "_unknown";
            var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return 48 <= t && t <= 57 ? "_" + e : e
        }

        function _e(e, t) {
            return e = be(e), new Function("body", "return function " + e + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)
        }

        function Te(e, t) {
            var r = _e(t, function (e) {
                this.name = t, this.message = e;
                e = new Error(e).stack;
                void 0 !== e && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""))
            });
            return r.prototype = Object.create(e.prototype), (r.prototype.constructor = r).prototype.toString = function () {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }, r
        }

        var S = void 0;

        function F(e) {
            throw new S(e)
        }

        var ke = void 0;

        function Ae(e) {
            throw new ke(e)
        }

        function De(n, t, o) {
            function r(e) {
                var t = o(e);
                t.length !== n.length && Ae("Mismatched type converter count");
                for (var r = 0; r < n.length; ++r) R(n[r], t[r])
            }

            n.forEach(function (e) {
                Ee[e] = t
            });
            var i = new Array(t.length), a = [], s = 0;
            t.forEach((e, t) => {
                P.hasOwnProperty(e) ? i[t] = P[e] : (a.push(e), C.hasOwnProperty(e) || (C[e] = []), C[e].push(() => {
                    i[t] = P[e], ++s === a.length && r(i)
                }))
            }), 0 === a.length && r(i)
        }

        function R(e, t, r) {
            r = 2 < arguments.length && void 0 !== r ? r : {};
            if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var n = t.name;
            if (e || F('type "' + n + '" must have a positive integer typeid pointer'), P.hasOwnProperty(e)) {
                if (r.ignoreDuplicateRegistrations) return;
                F("Cannot register type '" + n + "' twice")
            }
            P[e] = t, delete Ee[e], C.hasOwnProperty(e) && (r = C[e], delete C[e], r.forEach(e => e()))
        }

        function Ce(e) {
            if (!(this instanceof M)) return !1;
            if (!(e instanceof M)) return !1;
            for (var t = this.$$.ptrType.registeredClass, r = this.$$.ptr, n = e.$$.ptrType.registeredClass, o = e.$$.ptr; t.baseClass;) r = t.upcast(r), t = t.baseClass;
            for (; n.baseClass;) o = n.upcast(o), n = n.baseClass;
            return t === n && r === o
        }

        function Pe(e) {
            F(e.$$.ptrType.registeredClass.name + " instance already deleted")
        }

        var Se = !1;

        function Fe(e) {
        }

        function Re(e) {
            --e.count.value, 0 === e.count.value && ((e = e).smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr))
        }

        function Me(e, t, r) {
            if (t === r) return e;
            if (void 0 === r.baseClass) return null;
            e = Me(e, t, r.baseClass);
            return null === e ? null : r.downcast(e)
        }

        var xe = {};

        function Ie() {
            return Object.keys(je).length
        }

        function Ue() {
            var e, t = [];
            for (e in je) je.hasOwnProperty(e) && t.push(je[e]);
            return t
        }

        var $e = [];

        function Be() {
            for (; $e.length;) {
                var e = $e.pop();
                e.$$.deleteScheduled = !1, e.delete()
            }
        }

        var Ne = void 0;

        function Oe(e) {
            Ne = e, $e.length && Ne && Ne(Be)
        }

        var je = {};

        function Le(e, t) {
            return t = function (e, t) {
                for (void 0 === t && F("ptr should not be undefined"); e.baseClass;) t = e.upcast(t), e = e.baseClass;
                return t
            }(e, t), je[t]
        }

        function We(e, t) {
            return t.ptrType && t.ptr || Ae("makeClassHandle requires ptr and ptrType"), !!t.smartPtrType != !!t.smartPtr && Ae("Both smartPtrType and smartPtr must be specified"), t.count = {value: 1}, Ve(Object.create(e, {$$: {value: t}}))
        }

        function ze(e) {
            var t = this.getPointee(e);
            if (!t) return this.destructor(e), null;
            var r = Le(this.registeredClass, t);
            if (void 0 !== r) {
                if (0 === r.$$.count.value) return r.$$.ptr = t, r.$$.smartPtr = e, r.clone();
                r = r.clone();
                return this.destructor(e), r
            }

            function n() {
                return this.isSmartPointer ? We(this.registeredClass.instancePrototype, {
                    ptrType: this.pointeeType,
                    ptr: t,
                    smartPtrType: this,
                    smartPtr: e
                }) : We(this.registeredClass.instancePrototype, {ptrType: this, ptr: e})
            }

            r = this.registeredClass.getActualType(t), r = xe[r];
            if (!r) return n.call(this);
            var r = this.isConst ? r.constPointerType : r.pointerType,
                o = Me(t, this.registeredClass, r.registeredClass);
            return null === o ? n.call(this) : this.isSmartPointer ? We(r.registeredClass.instancePrototype, {
                ptrType: r,
                ptr: o,
                smartPtrType: this,
                smartPtr: e
            }) : We(r.registeredClass.instancePrototype, {ptrType: r, ptr: o})
        }

        function Ve(e) {
            return "undefined" == typeof FinalizationRegistry ? (Ve = e => e, e) : (Se = new FinalizationRegistry(e => {
                Re(e.$$)
            }), Fe = e => Se.unregister(e), (Ve = e => {
                var t = e.$$;
                return t.smartPtr && Se.register(e, {$$: t}, e), e
            })(e))
        }

        function He() {
            if (this.$$.ptr || Pe(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
            var e = Ve(Object.create(Object.getPrototypeOf(this), {
                $$: {
                    value: {
                        count: (e = this.$$).count,
                        deleteScheduled: e.deleteScheduled,
                        preservePointerOnDelete: e.preservePointerOnDelete,
                        ptr: e.ptr,
                        ptrType: e.ptrType,
                        smartPtr: e.smartPtr,
                        smartPtrType: e.smartPtrType
                    }
                }
            }));
            return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e
        }

        function Xe() {
            this.$$.ptr || Pe(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && F("Object already scheduled for deletion"), Fe(this), Re(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0)
        }

        function Ge() {
            return !this.$$.ptr
        }

        function qe() {
            return this.$$.ptr || Pe(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && F("Object already scheduled for deletion"), $e.push(this), 1 === $e.length && Ne && Ne(Be), this.$$.deleteScheduled = !0, this
        }

        function M() {
        }

        function Je(e, t, r) {
            var n;
            void 0 === e[t].overloadTable && (n = e[t], e[t] = function () {
                return e[t].overloadTable.hasOwnProperty(arguments.length) || F("Function '" + r + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!"), e[t].overloadTable[arguments.length].apply(this, arguments)
            }, e[t].overloadTable = [], e[t].overloadTable[n.argCount] = n)
        }

        function Ye(e, t, r, n, o, i, a, s) {
            this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = o, this.getActualType = i, this.upcast = a, this.downcast = s, this.pureVirtualFunctions = []
        }

        function Ke(e, t, r) {
            for (; t !== r;) t.upcast || F("Expected null or instance of " + r.name + ", got an instance of " + t.name), e = t.upcast(e), t = t.baseClass;
            return e
        }

        function Qe(e, t) {
            if (null === t) return this.isReference && F("null is not a valid " + this.name), 0;
            t.$$ || F('Cannot pass "' + Et(t) + '" as a ' + this.name), t.$$.ptr || F("Cannot pass deleted object as a pointer of type " + this.name);
            var r = t.$$.ptrType.registeredClass;
            return Ke(t.$$.ptr, r, this.registeredClass)
        }

        function Ze(e, t) {
            if (null === t) return this.isReference && F("null is not a valid " + this.name), this.isSmartPointer ? (n = this.rawConstructor(), null !== e && e.push(this.rawDestructor, n), n) : 0;
            t.$$ || F('Cannot pass "' + Et(t) + '" as a ' + this.name), t.$$.ptr || F("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && t.$$.ptrType.isConst && F("Cannot convert argument of type " + (t.$$.smartPtrType || t.$$.ptrType).name + " to parameter type " + this.name);
            var r, n, o = t.$$.ptrType.registeredClass;
            if (n = Ke(t.$$.ptr, o, this.registeredClass), this.isSmartPointer) switch (void 0 === t.$$.smartPtr && F("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
                case 0:
                    t.$$.smartPtrType === this ? n = t.$$.smartPtr : F("Cannot convert argument of type " + (t.$$.smartPtrType || t.$$.ptrType).name + " to parameter type " + this.name);
                    break;
                case 1:
                    n = t.$$.smartPtr;
                    break;
                case 2:
                    t.$$.smartPtrType === this ? n = t.$$.smartPtr : (r = t.clone(), n = this.rawShare(n, wt.toHandle(function () {
                        r.delete()
                    })), null !== e && e.push(this.rawDestructor, n));
                    break;
                default:
                    F("Unsupporting sharing policy")
            }
            return n
        }

        function et(e, t) {
            if (null === t) return this.isReference && F("null is not a valid " + this.name), 0;
            t.$$ || F('Cannot pass "' + Et(t) + '" as a ' + this.name), t.$$.ptr || F("Cannot pass deleted object as a pointer of type " + this.name), t.$$.ptrType.isConst && F("Cannot convert argument of type " + t.$$.ptrType.name + " to parameter type " + this.name);
            var r = t.$$.ptrType.registeredClass;
            return Ke(t.$$.ptr, r, this.registeredClass)
        }

        function tt(e) {
            return this.fromWireType(l[e >> 2])
        }

        function rt(e) {
            return e = this.rawGetPointee ? this.rawGetPointee(e) : e
        }

        function nt(e) {
            this.rawDestructor && this.rawDestructor(e)
        }

        function ot(e) {
            null !== e && e.delete()
        }

        function x(e, t, r, n, o, i, a, s, u, l, c) {
            this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = n, this.isSmartPointer = o, this.pointeeType = i, this.sharingPolicy = a, this.rawGetPointee = s, this.rawConstructor = u, this.rawShare = l, this.rawDestructor = c, o || void 0 !== t.baseClass ? this.toWireType = Ze : (this.toWireType = n ? Qe : et, this.destructorFunction = null)
        }

        var it = [];

        function at(e) {
            var t = it[e];
            return t || (e >= it.length && (it.length = e + 1), it[e] = t = ee.get(e)), t
        }

        function st(e, t, r) {
            return e.includes("j") ? (n = t, e = y["dynCall_" + e], r && r.length ? e.apply(null, [n].concat(r)) : e.call(null, n)) : at(t).apply(null, r);
            var n
        }

        function I(e, t) {
            var r, n, o, i = (e = D(e)).includes("j") ? (r = e, n = t, o = [], function () {
                return o.length = 0, Object.assign(o, arguments), st(r, n, o)
            }) : at(t);
            return "function" != typeof i && F("unknown function pointer with signature " + e + ": " + t), i
        }

        var ut = void 0;

        function lt(e) {
            var e = zt(e), t = D(e);
            return $(e), t
        }

        function ct(e, t) {
            var r = [], n = {};
            throw t.forEach(function e(t) {
                n[t] || P[t] || (Ee[t] ? Ee[t].forEach(e) : (r.push(t), n[t] = !0))
            }), new ut(e + ": " + r.map(lt).join([", "]))
        }

        function dt(e, t) {
            for (var r = [], n = 0; n < e; n++) r.push(p[t + 4 * n >> 2]);
            return r
        }

        function ft(e) {
            for (; e.length;) {
                var t = e.pop();
                e.pop()(t)
            }
        }

        function pt(e, t) {
            if (!(e instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function");
            var r = _e(e.name || "unknownFunctionName", function () {
            }), r = (r.prototype = e.prototype, new r), e = e.apply(r, t);
            return e instanceof Object ? e : r
        }

        function ht(e, t, r, n, o) {
            var i = t.length;
            i < 2 && F("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var r = null !== t[1] && null !== r, a = !1, s = 1; s < t.length; ++s) if (null !== t[s] && void 0 === t[s].destructorFunction) {
                a = !0;
                break
            }
            for (var u = "void" !== t[0].name, l = "", c = "", s = 0; s < i - 2; ++s) l += (0 !== s ? ", " : "") + "arg" + s, c += (0 !== s ? ", " : "") + "arg" + s + "Wired";
            var d = "return function " + be(e) + "(" + l + ") {\nif (arguments.length !== " + (i - 2) + ") {\nthrowBindingError('function " + e + " called with ' + arguments.length + ' arguments, expected " + (i - 2) + " args!');\n}\n",
                f = (a && (d += "var destructors = [];\n"), a ? "destructors" : "null"),
                p = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                h = [F, n, o, ft, t[0], t[1]];
            for (r && (d += "var thisWired = classParam.toWireType(" + f + ", this);\n"), s = 0; s < i - 2; ++s) d += "var arg" + s + "Wired = argType" + s + ".toWireType(" + f + ", arg" + s + "); // " + t[s + 2].name + "\n", p.push("argType" + s), h.push(t[s + 2]);
            if (d += (u ? "var rv = " : "") + "invoker(fn" + (0 < (c = r ? "thisWired" + (0 < c.length ? ", " : "") + c : c).length ? ", " : "") + c + ");\n", a) d += "runDestructors(destructors);\n"; else for (s = r ? 1 : 2; s < t.length; ++s) {
                var m = 1 === s ? "thisWired" : "arg" + (s - 2) + "Wired";
                null !== t[s].destructorFunction && (d += m + "_dtor(" + m + "); // " + t[s].name + "\n", p.push(m + "_dtor"), h.push(t[s].destructorFunction))
            }
            return u && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p.push(d += "}\n"), pt(Function, p).apply(null, h)
        }

        var mt = [], U = [{}, {value: void 0}, {value: null}, {value: !0}, {value: !1}];

        function yt(e) {
            4 < e && 0 == --U[e].refcount && (U[e] = void 0, mt.push(e))
        }

        function gt() {
            for (var e = 0, t = 5; t < U.length; ++t) void 0 !== U[t] && ++e;
            return e
        }

        function vt() {
            for (var e = 5; e < U.length; ++e) if (void 0 !== U[e]) return U[e];
            return null
        }

        var wt = {
            toValue: e => (e || F("Cannot use deleted val. handle = " + e), U[e].value), toHandle: e => {
                switch (e) {
                    case void 0:
                        return 1;
                    case null:
                        return 2;
                    case!0:
                        return 3;
                    case!1:
                        return 4;
                    default:
                        var t = mt.length ? mt.pop() : U.length;
                        return U[t] = {refcount: 1, value: e}, t
                }
            }
        };

        function Et(e) {
            if (null === e) return "null";
            var t = typeof e;
            return "object" == t || "array" == t || "function" == t ? e.toString() : "" + e
        }

        function bt(e, t) {
            switch (t) {
                case 2:
                    return function (e) {
                        return this.fromWireType(Q[e >> 2])
                    };
                case 3:
                    return function (e) {
                        return this.fromWireType(Z[e >> 3])
                    };
                default:
                    throw new TypeError("Unknown float type: " + e)
            }
        }

        function _t(e, t, r) {
            switch (t) {
                case 0:
                    return r ? function (e) {
                        return d[e]
                    } : function (e) {
                        return f[e]
                    };
                case 1:
                    return r ? function (e) {
                        return u[e >> 1]
                    } : function (e) {
                        return K[e >> 1]
                    };
                case 2:
                    return r ? function (e) {
                        return l[e >> 2]
                    } : function (e) {
                        return p[e >> 2]
                    };
                default:
                    throw new TypeError("Unknown integer type: " + e)
            }
        }

        var Tt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

        function kt(e, t) {
            for (var r, n = e >> 1, o = n + t / 2; !(o <= n) && K[n];) ++n;
            if (32 < (r = n << 1) - e && Tt) return Tt.decode(f.subarray(e, r));
            for (var i = "", a = 0; !(t / 2 <= a); ++a) {
                var s = u[e + 2 * a >> 1];
                if (0 == s) break;
                i += String.fromCharCode(s)
            }
            return i
        }

        function At(e, t, r) {
            if ((r = void 0 === r ? 2147483647 : r) < 2) return 0;
            for (var n = t, o = (r -= 2) < 2 * e.length ? r / 2 : e.length, i = 0; i < o; ++i) {
                var a = e.charCodeAt(i);
                u[t >> 1] = a, t += 2
            }
            return u[t >> 1] = 0, t - n
        }

        function Dt(e) {
            return 2 * e.length
        }

        function Ct(e, t) {
            for (var r = 0, n = ""; !(t / 4 <= r);) {
                var o, i = l[e + 4 * r >> 2];
                if (0 == i) break;
                ++r, 65536 <= i ? (o = i - 65536, n += String.fromCharCode(55296 | o >> 10, 56320 | 1023 & o)) : n += String.fromCharCode(i)
            }
            return n
        }

        function Pt(e, t, r) {
            if ((r = void 0 === r ? 2147483647 : r) < 4) return 0;
            for (var n = t, o = n + r - 4, i = 0; i < e.length; ++i) {
                var a = e.charCodeAt(i);
                if (55296 <= a && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++i)), l[t >> 2] = a, (t += 4) + 4 > o) break
            }
            return l[t >> 2] = 0, t - n
        }

        function St(e) {
            for (var t = 0, r = 0; r < e.length; ++r) {
                var n = e.charCodeAt(r);
                55296 <= n && n <= 57343 && ++r, t += 4
            }
            return t
        }

        var Ft = {}, Rt = [], Mt = [], xt = {};

        function It() {
            if (!It.strings) {
                var e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: V || "./this.program"
                };
                for (t in xt) void 0 === xt[t] ? delete e[t] : e[t] = xt[t];
                var t, r = [];
                for (t in e) r.push(t + "=" + e[t]);
                It.strings = r
            }
            return It.strings
        }

        function Ut(e, t, r, n) {
            e = e || this, this.parent = e, this.mount = e.mount, this.mounted = null, this.id = k.nextInode++, this.name = t, this.mode = r, this.node_ops = {}, this.stream_ops = {}, this.rdev = n
        }

        var $t = 365, Bt = 146;
        Object.defineProperties(Ut.prototype, {
            read: {
                get: function () {
                    return 365 == (365 & this.mode)
                }, set: function (e) {
                    e ? this.mode |= 365 : this.mode &= -366
                }
            }, write: {
                get: function () {
                    return 146 == (146 & this.mode)
                }, set: function (e) {
                    e ? this.mode |= 146 : this.mode &= -147
                }
            }, isFolder: {
                get: function () {
                    return k.isDir(this.mode)
                }
            }, isDevice: {
                get: function () {
                    return k.isChrdev(this.mode)
                }
            }
        }), k.FSNode = Ut, k.staticInit();
        for (var Nt = new Array(256), Ot = 0; Ot < 256; ++Ot) Nt[Ot] = String.fromCharCode(Ot);
        we = Nt, S = y.BindingError = Te(Error, "BindingError"), ke = y.InternalError = Te(Error, "InternalError"), M.prototype.isAliasOf = Ce, M.prototype.clone = He, M.prototype.delete = Xe, M.prototype.isDeleted = Ge, M.prototype.deleteLater = qe, y.getInheritedInstanceCount = Ie, y.getLiveInheritedInstances = Ue, y.flushPendingDeletes = Be, y.setDelayFunction = Oe, x.prototype.getPointee = rt, x.prototype.destructor = nt, x.prototype.argPackAdvance = 8, x.prototype.readValueFromPointer = tt, x.prototype.deleteObject = ot, x.prototype.fromWireType = ze, ut = y.UnboundTypeError = Te(Error, "UnboundTypeError"), y.count_emval_handles = gt, y.get_first_emval = vt;
        var jt = {
            s: function (e) {
                return Lt(e + 24) + 24
            }, r: function (e, t, r) {
                throw new me(e).init(t, r), e
            }, C: function (e, t, r) {
                A.varargs = r;
                try {
                    var n = A.getStreamFromFD(e);
                    switch (t) {
                        case 0:
                            return (o = A.get()) < 0 ? -28 : k.createStream(n, o).fd;
                        case 1:
                        case 2:
                        case 6:
                        case 7:
                            return 0;
                        case 3:
                            return n.flags;
                        case 4:
                            var o = A.get();
                            return n.flags |= o, 0;
                        case 5:
                            return o = A.get(), u[o + 0 >> 1] = 2, 0;
                        case 16:
                        case 8:
                        default:
                            return -28;
                        case 9:
                            return l[Wt() >> 2] = 28, -1
                    }
                } catch (e) {
                    if (void 0 !== k && e instanceof k.ErrnoError) return -e.errno;
                    throw e
                }
            }, v: function (e, t, r, n) {
                A.varargs = n;
                try {
                    t = A.getStr(t), t = A.calculateAt(e, t);
                    var o = n ? A.get() : 0;
                    return k.open(t, r, o).fd
                } catch (e) {
                    if (void 0 !== k && e instanceof k.ErrnoError) return -e.errno;
                    throw e
                }
            }, u: function (e, t, r, n, o) {
            }, E: function (e, r, n, o, i) {
                var a = ve(n);
                R(e, {
                    name: r = D(r), fromWireType: function (e) {
                        return !!e
                    }, toWireType: function (e, t) {
                        return t ? o : i
                    }, argPackAdvance: 8, readValueFromPointer: function (e) {
                        var t;
                        if (1 === n) t = d; else if (2 === n) t = u; else {
                            if (4 !== n) throw new TypeError("Unknown boolean type size: " + r);
                            t = l
                        }
                        return this.fromWireType(t[e >> a])
                    }, destructorFunction: null
                })
            }, m: function (u, e, t, l, r, c, n, d, o, f, p, i, h) {
                p = D(p), c = I(r, c), d = d && I(n, d), f = f && I(o, f), h = I(i, h);
                var a, m = be(p);
                r = m, n = function () {
                    ct("Cannot construct " + p + " due to unbound types", [l])
                }, y.hasOwnProperty(r) ? (F("Cannot register public name '" + r + "' twice"), Je(y, r, r), y.hasOwnProperty(a) && F("Cannot register multiple overloads of a function with the same number of arguments (" + a + ")!"), y[r].overloadTable[a] = n) : y[r] = n, De([u, e, t], l ? [l] : [], function (e) {
                    e = e[0], e = l ? (a = e.registeredClass).instancePrototype : M.prototype;
                    var t, r, n = _e(m, function () {
                            if (Object.getPrototypeOf(this) !== o) throw new S("Use 'new' to construct " + p);
                            if (void 0 === i.constructor_body) throw new S(p + " has no accessible constructor");
                            var e = i.constructor_body[arguments.length];
                            if (void 0 === e) throw new S("Tried to invoke ctor of " + p + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(i.constructor_body).toString() + ") parameters instead!");
                            return e.apply(this, arguments)
                        }), o = Object.create(e, {constructor: {value: n}}),
                        i = (n.prototype = o, new Ye(p, n, o, h, a, c, d, f)), e = new x(p, i, !0, !1, !1),
                        a = new x(p + "*", i, !1, !1, !1), s = new x(p + " const*", i, !1, !0, !1);
                    return xe[u] = {
                        pointerType: a,
                        constPointerType: s
                    }, t = m, n = n, y.hasOwnProperty(t) || Ae("Replacing nonexistant public symbol"), y[t].overloadTable, y[t] = n, y[t].argCount = r, [e, a, s]
                })
            }, l: function (e, n, t, r, o, i) {
                J(0 < n);
                var a = dt(n, t);
                o = I(r, o), De([], [e], function (t) {
                    var r = "constructor " + (t = t[0]).name;
                    if (void 0 === t.registeredClass.constructor_body && (t.registeredClass.constructor_body = []), void 0 !== t.registeredClass.constructor_body[n - 1]) throw new S("Cannot register multiple constructors with identical number of parameters (" + (n - 1) + ") for class '" + t.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                    return t.registeredClass.constructor_body[n - 1] = () => {
                        ct("Cannot construct " + t.name + " due to unbound types", a)
                    }, De([], a, function (e) {
                        return e.splice(1, 0, null), t.registeredClass.constructor_body[n - 1] = ht(r, e, null, o, i), []
                    }), []
                })
            }, d: function (e, i, a, t, r, s, u, l) {
                var c = dt(a, t);
                i = D(i), s = I(r, s), De([], [e], function (t) {
                    var r = (t = t[0]).name + "." + i;

                    function e() {
                        ct("Cannot call " + r + " due to unbound types", c)
                    }

                    i.startsWith("@@") && (i = Symbol[i.substring(2)]), l && t.registeredClass.pureVirtualFunctions.push(i);
                    var n = t.registeredClass.instancePrototype, o = n[i];
                    return void 0 === o || void 0 === o.overloadTable && o.className !== t.name && o.argCount === a - 2 ? (e.argCount = a - 2, e.className = t.name, n[i] = e) : (Je(n, i, r), n[i].overloadTable[a - 2] = e), De([], c, function (e) {
                        e = ht(r, e, t, s, u);
                        return void 0 === n[i].overloadTable ? (e.argCount = a - 2, n[i] = e) : n[i].overloadTable[a - 2] = e, []
                    }), []
                })
            }, D: function (e, t) {
                R(e, {
                    name: t = D(t), fromWireType: function (e) {
                        var t = wt.toValue(e);
                        return yt(e), t
                    }, toWireType: function (e, t) {
                        return wt.toHandle(t)
                    }, argPackAdvance: 8, readValueFromPointer: tt, destructorFunction: null
                })
            }, o: function (e, t, r) {
                r = ve(r);
                R(e, {
                    name: t = D(t), fromWireType: function (e) {
                        return e
                    }, toWireType: function (e, t) {
                        return t
                    }, argPackAdvance: 8, readValueFromPointer: bt(t, r), destructorFunction: null
                })
            }, c: function (e, t, r, n, o) {
                t = D(t);
                var i, a = ve(r), s = e => e,
                    r = (0 === n && (i = 32 - 8 * r, s = e => e << i >>> i), t.includes("unsigned"));
                R(e, {
                    name: t, fromWireType: s, toWireType: r ? function (e, t) {
                        return this.name, t >>> 0
                    } : function (e, t) {
                        return this.name, t
                    }, argPackAdvance: 8, readValueFromPointer: _t(t, a, 0 !== n), destructorFunction: null
                })
            }, b: function (e, t, r) {
                var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];

                function o(e) {
                    var t = p, r = t[e >>= 2], t = t[e + 1];
                    return new n(Y, t, r)
                }

                R(e, {
                    name: r = D(r),
                    fromWireType: o,
                    argPackAdvance: 8,
                    readValueFromPointer: o
                }, {ignoreDuplicateRegistrations: !0})
            }, p: function (e, t) {
                var l = "std::string" === (t = D(t));
                R(e, {
                    name: t, fromWireType: function (e) {
                        var t, r = p[e >> 2], n = e + 4;
                        if (l) for (var o = n, i = 0; i <= r; ++i) {
                            var a, s = n + i;
                            i != r && 0 != f[s] || (a = re(o, s - o), void 0 === t ? t = a : t = t + String.fromCharCode(0) + a, o = s + 1)
                        } else {
                            for (var u = new Array(r), i = 0; i < r; ++i) u[i] = String.fromCharCode(f[n + i]);
                            t = u.join("")
                        }
                        return $(e), t
                    }, toWireType: function (e, t) {
                        var r, n = "string" == typeof (t = t instanceof ArrayBuffer ? new Uint8Array(t) : t),
                            o = (n || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || F("Cannot pass non-string to std::string"), r = l && n ? oe(t) : t.length, Lt(4 + r + 1)),
                            i = o + 4;
                        if (p[o >> 2] = r, l && n) ne(t, f, i, r + 1); else if (n) for (var a = 0; a < r; ++a) {
                            var s = t.charCodeAt(a);
                            255 < s && ($(i), F("String has UTF-16 code units that do not fit in 8 bits")), f[i + a] = s
                        } else for (a = 0; a < r; ++a) f[i + a] = t[a];
                        return null !== e && e.push($, o), o
                    }, argPackAdvance: 8, readValueFromPointer: tt, destructorFunction: function (e) {
                        $(e)
                    }
                })
            }, k: function (e, u, o) {
                var l, i, c, a, d;
                o = D(o), 2 === u ? (l = kt, i = At, a = Dt, c = () => K, d = 1) : 4 === u && (l = Ct, i = Pt, a = St, c = () => p, d = 2), R(e, {
                    name: o,
                    fromWireType: function (e) {
                        for (var t, r = p[e >> 2], n = c(), o = e + 4, i = 0; i <= r; ++i) {
                            var a, s = e + 4 + i * u;
                            i != r && 0 != n[s >> d] || (a = l(o, s - o), void 0 === t ? t = a : t = t + String.fromCharCode(0) + a, o = s + u)
                        }
                        return $(e), t
                    },
                    toWireType: function (e, t) {
                        "string" != typeof t && F("Cannot pass non-string to C++ string type " + o);
                        var r = a(t), n = Lt(4 + r + u);
                        return p[n >> 2] = r >> d, i(t, n + 4, r + u), null !== e && e.push($, n), n
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: tt,
                    destructorFunction: function (e) {
                        $(e)
                    }
                })
            }, q: function (e, t) {
                R(e, {
                    isVoid: !0, name: t = D(t), argPackAdvance: 0, fromWireType: function () {
                    }, toWireType: function (e, t) {
                    }
                })
            }, j: function () {
                return Date.now()
            }, g: function (e, t, r, n) {
                (e = Rt[e])(t = wt.toValue(t), r = void 0 === (t = Ft[e = r]) ? D(e) : t, null, n)
            }, e: yt, f: function (e, t) {
                var r = function (e, t) {
                    for (var r, n, o = new Array(e), i = 0; i < e; ++i) o[i] = (r = p[t + 4 * i >> 2], void 0 === (n = P[r]) && F("parameter " + i + " has unknown type " + lt(r)), n);
                    return o
                }(e, t), t = r[0], n = t.name + "_$" + r.slice(1).map(function (e) {
                    return e.name
                }).join("_") + "$", o = Mt[n];
                if (void 0 !== o) return o;
                for (var i = ["retType"], a = [t], s = "", u = 0; u < e - 1; ++u) s += (0 !== u ? ", " : "") + "arg" + u, i.push("argType" + u), a.push(r[1 + u]);
                for (var l = "return function " + be("methodCaller_" + n) + "(handle, name, destructors, args) {\n", c = 0, u = 0; u < e - 1; ++u) l += "    var arg" + u + " = argType" + u + ".readValueFromPointer(args" + (c ? "+" + c : "") + ");\n", c += r[u + 1].argPackAdvance;
                for (l += "    var rv = handle[name](" + s + ");\n", u = 0; u < e - 1; ++u) r[u + 1].deleteObject && (l += "    argType" + u + ".deleteObject(arg" + u + ");\n");
                t.isVoid || (l += "    return retType.toWireType(destructors, rv);\n"), i.push(l += "};\n");
                var t = pt(Function, i).apply(null, a), d = Rt.length;
                return Rt.push(t), Mt[n] = o = d
            }, a: function () {
                w("")
            }, z: function (e, t, r) {
                f.copyWithin(e, t, t + r)
            }, i: function (e) {
                f.length, w("OOM")
            }, x: function (a, s) {
                var u = 0;
                return It().forEach(function (e, t) {
                    for (var r = s + u, n = (p[a + 4 * t >> 2] = r, e), o = r, i = 0; i < n.length; ++i) d[o++ >> 0] = n.charCodeAt(i);
                    d[o >> 0] = 0, u += e.length + 1
                }), 0
            }, y: function (e, t) {
                var r = It(), n = (p[e >> 2] = r.length, 0);
                return r.forEach(function (e) {
                    n += e.length + 1
                }), p[t >> 2] = n, 0
            }, n: function (e) {
                try {
                    var t = A.getStreamFromFD(e);
                    return k.close(t), 0
                } catch (e) {
                    if (void 0 !== k && e instanceof k.ErrnoError) return e.errno;
                    throw e
                }
            }, w: function (e, t) {
                try {
                    var r = A.getStreamFromFD(e), n = r.tty ? 2 : k.isDir(r.mode) ? 3 : k.isLink(r.mode) ? 7 : 4;
                    return d[t >> 0] = n, 0
                } catch (e) {
                    if (void 0 !== k && e instanceof k.ErrnoError) return e.errno;
                    throw e
                }
            }, B: function (e, t, r, n) {
                try {
                    var o = function (e, t, r) {
                        for (var n = 0, o = 0; o < r; o++) {
                            var i = p[t >> 2], a = p[t + 4 >> 2], i = (t += 8, k.read(e, d, i, a, void 0));
                            if (i < 0) return -1;
                            if (n += i, i < a) break
                        }
                        return n
                    }(A.getStreamFromFD(e), t, r);
                    return l[n >> 2] = o, 0
                } catch (e) {
                    if (void 0 !== k && e instanceof k.ErrnoError) return e.errno;
                    throw e
                }
            }, t: function (e, t, r, n, o) {
                try {
                    var i = r + 2097152 >>> 0 < 4194305 - !!t ? (t >>> 0) + 4294967296 * r : NaN;
                    if (isNaN(i)) return 61;
                    var a = A.getStreamFromFD(e);
                    return k.llseek(a, i, n), v = [a.position >>> 0, (g = a.position, 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], l[o >> 2] = v[0], l[o + 4 >> 2] = v[1], a.getdents && 0 === i && 0 === n && (a.getdents = null), 0
                } catch (e) {
                    if (void 0 !== k && e instanceof k.ErrnoError) return e.errno;
                    throw e
                }
            }, A: function (e, t, r, n) {
                try {
                    var o = function (e, t, r) {
                        for (var n = 0, o = 0; o < r; o++) {
                            var i = p[t >> 2], a = p[t + 4 >> 2], i = (t += 8, k.write(e, d, i, a, void 0));
                            if (i < 0) return -1;
                            n += i
                        }
                        return n
                    }(A.getStreamFromFD(e), t, r);
                    return p[n >> 2] = o, 0
                } catch (e) {
                    if (void 0 !== k && e instanceof k.ErrnoError) return e.errno;
                    throw e
                }
            }, h: function (e) {
            }
        }, $ = (function () {
            var t = {a: jt};

            function r(e, t) {
                var e = e.exports;
                y.asm = e, e = (L = y.asm.F).buffer, Y = e, y.HEAP8 = d = new Int8Array(e), y.HEAP16 = u = new Int16Array(e), y.HEAP32 = l = new Int32Array(e), y.HEAPU8 = f = new Uint8Array(e), y.HEAPU16 = K = new Uint16Array(e), y.HEAPU32 = p = new Uint32Array(e), y.HEAPF32 = Q = new Float32Array(e), y.HEAPF64 = Z = new Float64Array(e), ee = y.asm.J, e = y.asm.G, ae.unshift(e), le()
            }

            function n(e) {
                r(e.instance)
            }

            function o(e) {
                return function () {
                    if (!i && (H || c)) {
                        if ("function" == typeof fetch && !de(h)) return fetch(h, {credentials: "same-origin"}).then(function (e) {
                            if (e.ok) return e.arrayBuffer();
                            throw"failed to load wasm binary file at '" + h + "'"
                        }).catch(function () {
                            return fe(h)
                        });
                        if (m) return new Promise(function (t, e) {
                            m(h, function (e) {
                                t(new Uint8Array(e))
                            }, e)
                        })
                    }
                    return Promise.resolve().then(function () {
                        return fe(h)
                    })
                }().then(function (e) {
                    return WebAssembly.instantiate(e, t)
                }).then(function (e) {
                    return e
                }).then(e, function (e) {
                    s("failed to asynchronously prepare wasm: " + e), w(e)
                })
            }

            if (ue(), y.instantiateWasm) try {
                return y.instantiateWasm(t, r)
            } catch (t) {
                return s("Module.instantiateWasm callback failed with error: " + t)
            }
            i || "function" != typeof WebAssembly.instantiateStreaming || ce(h) || de(h) || X || "function" != typeof fetch ? o(n) : fetch(h, {credentials: "same-origin"}).then(function (e) {
                return WebAssembly.instantiateStreaming(e, t).then(n, function (e) {
                    return s("wasm streaming compile failed: " + e), s("falling back to ArrayBuffer instantiation"), o(n)
                })
            })
        }(), y.___wasm_call_ctors = function () {
            return (y.___wasm_call_ctors = y.asm.G).apply(null, arguments)
        }, y._free = function () {
            return ($ = y._free = y.asm.H).apply(null, arguments)
        }), Lt = y._malloc = function () {
            return (Lt = y._malloc = y.asm.I).apply(null, arguments)
        }, Wt = y.___errno_location = function () {
            return (Wt = y.___errno_location = y.asm.K).apply(null, arguments)
        }, zt = y.___getTypeName = function () {
            return (zt = y.___getTypeName = y.asm.L).apply(null, arguments)
        };
        y.___embind_register_native_and_builtin_types = function () {
            return (y.___embind_register_native_and_builtin_types = y.asm.M).apply(null, arguments)
        };
        var Vt, Ht = y._emscripten_builtin_memalign = function () {
            return (Ht = y._emscripten_builtin_memalign = y.asm.N).apply(null, arguments)
        }, Xt = y.___cxa_is_pointer_type = function () {
            return (Xt = y.___cxa_is_pointer_type = y.asm.O).apply(null, arguments)
        };

        function Gt() {
            function e() {
                if (!Vt && (Vt = !0, y.calledRun = !0, !q)) {
                    if (y.noFSInit || k.init.initialized || k.init(), k.ignorePermissions = !1, he(ae), y.onRuntimeInitialized && y.onRuntimeInitialized(), y.postRun) for ("function" == typeof y.postRun && (y.postRun = [y.postRun]); y.postRun.length;) e = y.postRun.shift(), se.unshift(e);
                    var e;
                    he(se)
                }
            }

            if (!(0 < n)) {
                if (y.preRun) for ("function" == typeof y.preRun && (y.preRun = [y.preRun]); y.preRun.length;) t = y.preRun.shift(), ie.unshift(t);
                var t;
                he(ie), 0 < n || (y.setStatus ? (y.setStatus("Running..."), setTimeout(function () {
                    setTimeout(function () {
                        y.setStatus("")
                    }, 1), e()
                }, 1)) : e())
            }
        }

        if (y.dynCall_viiijj = function () {
            return (y.dynCall_viiijj = y.asm.P).apply(null, arguments)
        }, y.dynCall_jij = function () {
            return (y.dynCall_jij = y.asm.Q).apply(null, arguments)
        }, y.dynCall_jii = function () {
            return (y.dynCall_jii = y.asm.R).apply(null, arguments)
        }, y.dynCall_jiji = function () {
            return (y.dynCall_jiji = y.asm.S).apply(null, arguments)
        }, y._ff_h264_cabac_tables = 215484, o = function e() {
            Vt || Gt(), Vt || (o = e)
        }, y.preInit) for ("function" == typeof y.preInit && (y.preInit = [y.preInit]); 0 < y.preInit.length;) y.preInit.pop()();
        return Gt(), W.exports = y, e.exports
    }();
    const k = "player", A = "playbackTF", D = {
            playType: k,
            container: "",
            videoBuffer: 1e3,
            videoBufferDelay: 1e3,
            networkDelay: 5e3,
            isResize: !0,
            isFullResize: !1,
            isFlv: !1,
            isHls: !1,
            isWebrtc: !1,
            debug: !1,
            hotKey: !1,
            loadingTimeout: 10,
            heartTimeout: 10,
            timeout: 10,
            loadingTimeoutReplay: !0,
            heartTimeoutReplay: !0,
            loadingTimeoutReplayTimes: 3,
            heartTimeoutReplayTimes: 3,
            supportDblclickFullscreen: !1,
            showBandwidth: !1,
            keepScreenOn: !1,
            isNotMute: !1,
            hasAudio: !0,
            hasVideo: !0,
            operateBtns: {
                fullscreen: !1,
                screenshot: !1,
                play: !1,
                audio: !1,
                record: !1,
                ptz: !1,
                quality: !1,
                zoom: !1,
                close: !1,
                fullscreenFn: null,
                fullscreenExitFn: null,
                screenshotFn: null,
                playFn: null,
                pauseFn: null,
                recordFn: null,
                recordStopFn: null
            },
            watermarkConfig: {},
            controlAutoHide: !1,
            hasControl: !1,
            loadingText: "",
            background: "",
            decoder: "decoder-pro.js",
            url: "",
            rotate: 0,
            mirrorRotate: "none",
            playbackConfig: {playList: [], fps: ""},
            qualityConfig: [],
            forceNoOffscreen: !0,
            hiddenAutoPause: !1,
            protocol: 2,
            demuxType: "flv",
            useWasm: !1,
            useWCS: !1,
            useSIMD: !1,
            wcsUseVideoRender: !0,
            wasmUseVideoRender: !1,
            mseUseCanvasRender: !1,
            useMSE: !1,
            useOffscreen: !1,
            autoWasm: !0,
            wasmDecodeErrorReplay: !0,
            openWebglAlignment: !1,
            wasmDecodeAudioSyncVideo: !0,
            playbackDelayTime: 1e3,
            playbackFps: 25,
            playbackForwardMaxRateDecodeIFrame: 4,
            playbackCurrentTimeMove: !0,
            useVideoRender: !1,
            useCanvasRender: !1
        }, C = "initVideo", P = "render", S = "playAudio", F = "workerFetch", R = "init", M = "streamSuccess",
        x = "fetchError";

    function I() {
        return (new Date).getTime()
    }

    function U() {
        return (performance && "function" == typeof performance.now ? performance : Date).now()
    }

    try {
        if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
            var i = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
            if (i instanceof WebAssembly.Module) new WebAssembly.Instance(i), WebAssembly.Instance
        }
    } catch (e) {
    }
    const a = [[Uint8Array, Int8Array], [Uint16Array, Int16Array], [Uint32Array, Int32Array, Float32Array], [Float64Array]],
        s = Symbol(32), u = Symbol(16), l = Symbol(8), c = new Map;
    a.forEach((e, t) => e.forEach(e => c.set(e, t)));

    class ${constructor(e){this.g=e,this.consumed=0,e&&(this.need=e.next().value)}
    fillFromReader

    (r)
    {
        return e = this, u = function* () {
            var {done: e, value: t} = yield r.read();
            return e ? void this.close() : (this.write(t), this.fillFromReader(r))
        }, new (s = (s = a = void 0) || Promise)(function (r, t) {
            function n(e) {
                try {
                    i(u.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function o(e) {
                try {
                    i(u.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function i(e) {
                var t;
                e.done ? r(e.value) : ((t = e.value) instanceof s ? t : new s(function (e) {
                    e(t)
                })).then(n, o)
            }

            i((u = u.apply(e, a || [])).next())
        });
        var e, a, s, u
    }
    consume()
    {
        this.buffer && this.consumed && (this.buffer.copyWithin(0, this.consumed), this.buffer = this.buffer.subarray(0, this.buffer.length - this.consumed), this.consumed = 0)
    }
    demand(e, t)
    {
        return t && this.consume(), this.need = e, this.flush()
    }
    read(r)
    {
        return new Promise((t, e) => {
            if (this.resolve) return e("last read not complete yet");
            this.resolve = e => {
                delete this.resolve, delete this.need, t(e)
            }, this.demand(r, !0)
        })
    }
    readU32()
    {
        return this.read(s)
    }
    readU16()
    {
        return this.read(u)
    }
    readU8()
    {
        return this.read(l)
    }
    close()
    {
        this.g && this.g.return()
    }
    flush()
    {
        if (this.buffer && this.need) {
            let e = null;
            const n = this.buffer.subarray(this.consumed);
            let t = 0;
            var r = e => n.length < (t = e);
            if ("number" == typeof this.need) {
                if (r(this.need)) return;
                e = n.subarray(0, t)
            } else if (this.need instanceof ArrayBuffer) {
                if (r(this.need.byteLength)) return;
                new Uint8Array(this.need).set(n.subarray(0, t)), e = this.need
            } else if (this.need === s) {
                if (r(4)) return;
                e = n[0] << 24 | n[1] << 16 | n[2] << 8 | n[3]
            } else if (this.need === u) {
                if (r(2)) return;
                e = n[0] << 8 | n[1]
            } else if (this.need === l) {
                if (r(1)) return;
                e = n[0]
            } else if (c.has(this.need.constructor)) {
                if (r(this.need.length << c.get(this.need.constructor))) return;
                new Uint8Array(this.need.buffer, this.need.byteOffset).set(n.subarray(0, t)), e = this.need
            } else if (this.g) return void this.g.throw(new Error("Unsupported type"));
            return this.consumed += t, this.g ? this.demand(this.g.next(e).value, !0) : this.resolve && this.resolve(e), e
        }
    }
    write(e)
    {
        e instanceof ArrayBuffer ? this.malloc(e.byteLength).set(new Uint8Array(e)) : this.malloc(e.byteLength).set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), (this.g || this.resolve) && this.flush()
    }
    writeU32(e)
    {
        this.malloc(4).set([e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]), this.flush()
    }
    writeU16(e)
    {
        this.malloc(2).set([e >> 8 & 255, 255 & e]), this.flush()
    }
    writeU8(e)
    {
        this.malloc(1)[0] = e, this.flush()
    }
    malloc(e)
    {
        if (this.buffer) {
            var t = this.buffer.length, r = t + e;
            if (r <= this.buffer.buffer.byteLength - this.buffer.byteOffset) this.buffer = new Uint8Array(this.buffer.buffer, this.buffer.byteOffset, r); else {
                const e = new Uint8Array(r);
                e.set(this.buffer), this.buffer = e
            }
            return this.buffer.subarray(t, r)
        }
        return this.buffer = new Uint8Array(e), this.buffer
    }
}

function d(s) {
    function r() {
        i && (i.abort(), i = null)
    }

    let n = [], u = [], o = {}, i = new AbortController, a = null, l = null, e = null, c = null, d = null, f = null,
        p = !1, h = !1, m = !1, y = null, g = null, v = [], w = 0, E = 0, b = ("VideoEncoder" in self && (o = {
            hasInit: !1,
            isEmitInfo: !1,
            offscreenCanvas: null,
            offscreenCanvasCtx: null,
            decoder: new VideoDecoder({
                output: function (t) {
                    var e;
                    o.isEmitInfo || (b.opt.debug && console.log("Jessibuca: [worker] Webcodecs Video Decoder initSize"), postMessage({
                        cmd: C,
                        w: t.codedWidth,
                        h: t.codedHeight
                    }), o.isEmitInfo = !0, o.offscreenCanvas = new OffscreenCanvas(t.codedWidth, t.codedHeight), o.offscreenCanvasCtx = o.offscreenCanvas.getContext("2d")), "function" == typeof t.createImageBitmap ? t.createImageBitmap().then(e => {
                        o.offscreenCanvasCtx.drawImage(e, 0, 0, t.codedWidth, t.codedHeight);
                        e = o.offscreenCanvas.transferToImageBitmap();
                        postMessage({cmd: P, buffer: e, delay: b.delay, ts: 0}, [e]), setTimeout(function () {
                            t.close ? t.close() : t.destroy()
                        }, 100)
                    }) : (o.offscreenCanvasCtx.drawImage(t, 0, 0, t.codedWidth, t.codedHeight), e = o.offscreenCanvas.transferToImageBitmap(), postMessage({
                        cmd: P,
                        buffer: e,
                        delay: b.delay,
                        ts: 0
                    }, [e]), setTimeout(function () {
                        t.close ? t.close() : t.destroy()
                    }, 100))
                }, error: function (e) {
                    console.error(e)
                }
            }),
            decode: function (e, t) {
                const r = e[0] >> 4 == 1;
                if (o.hasInit) {
                    t = new EncodedVideoChunk({data: e.slice(5), timestamp: t, type: r ? "key" : "delta"});
                    o.decoder.decode(t)
                } else if (r && 0 === e[1]) {
                    const t = 15 & e[0], r = (b.setVideoCodec(t), function (e) {
                        let r = e.subarray(1, 4), n = "avc1.";
                        for (let t = 0; t < 3; t++) {
                            let e = r[t].toString(16);
                            e.length < 2 && (e = "0" + e), n += e
                        }
                        return {codec: n, description: e}
                    }(e.slice(5)));
                    o.decoder.configure(r), o.hasInit = !0
                }
            },
            reset() {
                o.hasInit = !1, o.isEmitInfo = !1, o.offscreenCanvas = null, o.offscreenCanvasCtx = null
            }
        }), {
            opt: {
                debug: D.debug,
                useOffscreen: D.useOffscreen,
                useWCS: D.useWCS,
                videoBuffer: D.videoBuffer,
                videoBufferDelay: D.videoBufferDelay,
                openWebglAlignment: D.openWebglAlignment,
                playType: D.playType,
                hasAudio: D.hasAudio,
                hasVideo: D.hasVideo,
                playbackRate: 1,
                playbackForwardMaxRateDecodeIFrame: D.playbackForwardMaxRateDecodeIFrame,
                sampleRate: 0,
                networkDelay: D.networkDelay,
                visibility: !0
            }, startStreamRateInterval: function () {
                b.stopStreamRateInterval(), e = setInterval(() => {
                    l && l(0)
                }, 1e3)
            }, stopStreamRateInterval: function () {
                e && (clearInterval(e), e = null)
            }, useOffscreen: function () {
                return b.opt.useOffscreen && "undefined" != typeof OffscreenCanvas
            }, getDelay: function (e) {
                return e ? (this.firstTimestamp ? e && (t = Date.now() - this.startTimestamp, r = e - this.firstTimestamp, this.delay = r <= t ? t - r : r - t) : (this.firstTimestamp = e, this.startTimestamp = Date.now(), this.delay = -1), this.delay) : -1;
                var t, r
            }, resetDelay: function () {
                this.firstTimestamp = null, this.startTimestamp = null, this.delay = -1
            }, doDecode: function (e) {
                b.opt.useWCS && b.useOffscreen() && 2 === e.type && o.decode ? o.decode(e.payload, e.ts) : e.decoder.decode(e.payload, e.ts, e.isIFrame)
            }, init: function () {
                b.opt.debug && console.log("Jessibuca: [worker] init"), this.stopId = setInterval(() => {
                    let e = null;
                    if (n.length) if (this.dropping) {
                        for (b.opt.debug && console.log("Jessibuca: [worker]: loop is dropping"), 1 === (e = n.shift()).type && 0 === e.payload[1] && b.doDecode(e); !e.isIFrame && n.length;) b.opt.debug && console.log("Jessibuca: [worker]: loop is dropping = true, isIFrame is", e.isIFrame), 1 === (e = n.shift()).type && 0 === e.payload[1] && b.doDecode(e);
                        e.isIFrame && b.getDelay(e.ts) <= Math.min(b.opt.videoBuffer, 200) && (this.dropping = !1, b.doDecode(e))
                    } else if (e = n[0], -1 === b.getDelay(e.ts)) b.opt.debug && console.log("Jessibuca: [worker]: common dumex delay is -1 ,data.ts is", e.ts), n.shift(), b.doDecode(e); else if (b.delay > b.opt.videoBuffer + b.opt.videoBufferDelay * b.opt.playbackRate) b.opt.debug && console.log("Jessibuca: [worker]:", `delay is ${this.delay}, set dropping is true`), this.resetDelay(), this.dropping = !0; else for (; n.length;) e = n[0], b.getDelay(e.ts) > b.opt.videoBuffer && (n.shift(), b.doDecode(e))
                }, 10)
            }, close: function () {
                b.opt.debug && console.log("Jessibuca: [worker]: close"), b.stopStreamRateInterval(), clearInterval(this.stopId), this.stopId = null, _.clear && _.clear(), T.clear && T.clear(), _ = null, T = null, o.reset && o.reset(), this.firstTimestamp = null, this.startTimestamp = null, this.delay = -1, this.dropping = !1, this.webglObj && (this.webglObj.destroy(), this.offscreenCanvas = null, this.offscreenCanvasGL = null, this.offscreenCanvasCtx = null), n = [], u = [], i = null, c = null, a && (a.close(), a = null), d = null, f = null, p = !1, h = !1, m = !1, v = [], w = 0, E = 0, y = null, g = null, delete b.playAudioPlanar, delete b.draw, delete b.demuxFlv
            }, pushBuffer: function (e, t) {
                b.getDelay(t.ts) > b.opt.videoBuffer + b.opt.videoBufferDelay * b.opt.playbackRate && this.dropBuffer(), 1 === t.type ? n.push({
                    ts: t.ts,
                    payload: e,
                    decoder: {decode: b.decodeAudio},
                    type: 1,
                    isIFrame: !1
                }) : 2 === t.type && n.push({
                    ts: t.ts,
                    payload: e,
                    decoder: {decode: b.decodeVideo},
                    type: 2,
                    isIFrame: t.isIFrame
                })
            }, fetchStream: function (e, t) {
                b.opt.debug && console.log("Jessibuca: [worker]: fetchStream, url is " + e, "options:", t), l = function (r) {
                    let n = 0, o = U();
                    return e => {
                        var t;
                        "[object Number]" === Object.prototype.toString.call(e) && (n += e, 1e3 <= (t = (e = U()) - o) && (r(n / t * 1e3), o = e, n = 0))
                    }
                }(e => {
                    postMessage({cmd: F, type: "streamRate", value: e})
                }), b.startStreamRateInterval(), 2 === t.protocol ? (c = new $(b.demuxFlv()), fetch(e, {signal: i.signal}).then(e => {
                    postMessage({cmd: F, type: M}), e.body.pipeTo(new WritableStream({
                        write: e => {
                            l(e.byteLength), c.write(e)
                        }, close: () => {
                            c = null
                        }, abort: e => {
                            c = null, postMessage({cmd: F, type: x, value: e.toString()}), r()
                        }
                    }))
                }).catch(e => {
                    postMessage({cmd: F, type: x, value: e.toString()}), r()
                })) : 1 === t.protocol && (t.isFlv && (c = new $(b.demuxFlv())), (a = new WebSocket(e)).binaryType = "arraybuffer", a.onopen = () => {
                    b.opt.debug && console.log("Jessibuca: [worker]: fetchStream, WebsocketStream  socket open"), postMessage({
                        cmd: F,
                        type: M
                    })
                }, a.onclose = () => {
                    b.opt.debug && console.log("Jessibuca: [worker]: fetchStream, WebsocketStream  socket close"), c = null, postMessage({
                        cmd: F,
                        type: "streamEnd"
                    })
                }, a.onerror = e => {
                    b.opt.debug && console.log("Jessibuca: [worker]: fetchStream, WebsocketStream  socket error"), c = null, postMessage({
                        cmd: F,
                        type: "websocketError",
                        value: e.toString()
                    })
                }, a.onmessage = e => {
                    l(e.data.byteLength), t.isFlv ? c.write(e.data) : b.demuxM7s(e.data)
                })
            }, demuxFlv: function* () {
                yield 9;
                const t = new ArrayBuffer(4), r = new Uint8Array(t), n = new Uint32Array(t);
                for (; ;) {
                    r[3] = 0;
                    const t = yield 15, a = t[4];
                    r[0] = t[7], r[1] = t[6], r[2] = t[5];
                    var o = n[0];
                    r[0] = t[10], r[1] = t[9], r[2] = t[8];
                    let e = n[0];
                    16777215 === e && (r[3] = t[11], e = n[0]);
                    var i = (yield o).slice();
                    switch (a) {
                        case 8:
                            b.decode(i, {type: 1, ts: e});
                            break;
                        case 9:
                            if (0 < i.byteLength) {
                                const t = i[0] >> 4 == 1;
                                b.calcNetworkDelay(e), b.decode(i, {type: 2, ts: e, isIFrame: t})
                            }
                    }
                }
            }, decode: function (e, t) {
                var r = b.opt.playType;
                1 === t.type ? b.opt.hasAudio && (postMessage({
                    cmd: F,
                    type: "streamAbps",
                    value: e.byteLength
                }), r === k ? b.pushBuffer(e, {
                    type: t.type,
                    ts: t.ts
                }) : r === A && _.decode(e, t.ts)) : 2 === t.type && b.opt.hasVideo && (postMessage({
                    cmd: F,
                    type: "streamVbps",
                    value: e.byteLength
                }), r === k ? b.pushBuffer(e, {
                    type: t.type,
                    ts: t.ts,
                    isIFrame: t.isIFrame
                }) : r === A && (b.opt.playbackRate >= b.opt.playbackForwardMaxRateDecodeIFrame ? t.isIFrame && b.decodeVideo(e, t.ts, t.isIFrame) : b.pushBuffer(e, {
                    type: t.type,
                    ts: t.ts,
                    isIFrame: t.isIFrame
                })))
            }, setCodecAudio: function (e) {
                var t = e[0] >> 4;
                (10 == t && 0 === e[1] || 7 == t || 8 == t) && (e = 10 == t ? e.slice(2) : e.slice(1), _.setCodec(t, b.opt.sampleRate, e), h = !0)
            }, decodeAudio: function (e, t) {
                var r = e[0] >> 4;
                h ? _.decode(10 == r ? e.slice(2) : e.slice(1), t) : b.setCodecAudio(e)
            }, setCodecVideo: function (e) {
                var t = 15 & e[0];
                e[0] >> 4 != 1 || 0 !== e[1] || 7 != t && 12 != t || (p = !0, e = e.slice(5), T.setCodec(t, e))
            }, decodeVideo: function (e, t, r) {
                p ? (m = !m && r ? !0 : m) ? T.decode(e.slice(5), r ? 1 : 0, t) : b.opt.debug && console.error("Jessibuca: [worker]: decodeVideo: first frame is not iframe") : b.setCodecVideo(e)
            }, clearBuffer: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                b.opt.debug && console.log(`Jessibuca: [worker]: clearBuffer,bufferList length is ${n.length}, need clear is ` + e), e && (n = []), this.resetDelay(), this.dropping = !0
            }, dropBuffer: function () {
                for (; 0 < n.length;) {
                    var e = n[0];
                    if (1 === e.type && 0 === e.payload[1] && (b.doDecode(e), n.shift()), e.isIFrame && b.getDelay(e.ts) <= Math.min(b.opt.videoBuffer, 200)) {
                        b.opt.debug && console.log("Jessibuca: [worker]: dropBuffer and delay is " + b.delay);
                        break
                    }
                    b.opt.debug && console.log("Jessibuca: [worker]: dropBuffer is dropping"), n.shift()
                }
            }, demuxM7s: function (e) {
                const t = new DataView(e), r = (t.getUint8(0), t.getUint32(1, !1));
                switch (n) {
                    case 1:
                        const n = new Uint8Array(e, 5);
                        b.decode(n, {type: 1, ts: r});
                        break;
                    case 2:
                        if (5 < t.byteLength) {
                            const n = new Uint8Array(e, 5), o = t.getUint8(5) >> 4 == 1;
                            b.calcNetworkDelay(r), b.decode(n, {type: 2, ts: r, isIFrame: o})
                        }
                }
            }, calcNetworkDelay: function (e) {
                var t, r, n;
                p && (null === y && (y = e, g = I()), (n = (t = e - y) < (r = I() - g) ? r - t : 0) > b.opt.networkDelay && b.opt.debug && console.warn("Jessibuca: [worker]: ", `demuxFlv now dts:${e}, vs start is ${t},local diff is ${r} ,delay is ` + n), postMessage({
                    cmd: F,
                    type: "netBuf",
                    value: n
                }))
            }, videoInfo: function (e, t, r) {
                function n(e, t) {
                    var r = i.createTexture();
                    return i.bindTexture(i.TEXTURE_2D, r), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.bindTexture(i.TEXTURE_2D, null), i.uniform1i(i.getUniformLocation(o, e), t), r
                }

                var i, o, a, s, u, l, c;
                postMessage({cmd: "videoCode", code: e}), postMessage({
                    cmd: C,
                    w: t,
                    h: r
                }), d = t, f = r, b.useOffscreen() && (this.offscreenCanvas = new OffscreenCanvas(t, r), this.offscreenCanvasGL = this.offscreenCanvas.getContext("webgl"), this.webglObj = (i = this.offscreenCanvasGL, e = b.opt.openWebglAlignment, t = ["attribute vec4 vertexPos;", "attribute vec4 texturePos;", "varying vec2 textureCoord;", "void main()", "{", "gl_Position = vertexPos;", "textureCoord = texturePos.xy;", "}"].join("\n"), r = ["precision highp float;", "varying highp vec2 textureCoord;", "uniform sampler2D ySampler;", "uniform sampler2D uSampler;", "uniform sampler2D vSampler;", "const mat4 YUV2RGB = mat4", "(", "1.1643828125, 0, 1.59602734375, -.87078515625,", "1.1643828125, -.39176171875, -.81296875, .52959375,", "1.1643828125, 2.017234375, 0, -1.081390625,", "0, 0, 0, 1", ");", "void main(void) {", "highp float y = texture2D(ySampler,  textureCoord).r;", "highp float u = texture2D(uSampler,  textureCoord).r;", "highp float v = texture2D(vSampler,  textureCoord).r;", "gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;", "}"].join("\n"), e && i.pixelStorei(i.UNPACK_ALIGNMENT, 1), e = i.createShader(i.VERTEX_SHADER), i.shaderSource(e, t), i.compileShader(e), i.getShaderParameter(e, i.COMPILE_STATUS) || (console.log("Vertex shader failed to compile: " + i.getShaderInfoLog(e)), i.deleteShader(e)), t = i.createShader(i.FRAGMENT_SHADER), i.shaderSource(t, r), i.compileShader(t), i.getShaderParameter(t, i.COMPILE_STATUS) || (console.log("Fragment shader failed to compile: " + i.getShaderInfoLog(t)), i.deleteShader(t)), o = i.createProgram(), i.attachShader(o, e), i.attachShader(o, t), i.linkProgram(o), i.getProgramParameter(o, i.LINK_STATUS) || console.log("Program failed to compile: " + i.getProgramInfoLog(o)), i.useProgram(o), a = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, a), i.bufferData(i.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), i.STATIC_DRAW), r = i.getAttribLocation(o, "vertexPos"), i.enableVertexAttribArray(r), i.vertexAttribPointer(r, 2, i.FLOAT, !1, 0, 0), s = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, s), i.bufferData(i.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), i.STATIC_DRAW), e = i.getAttribLocation(o, "texturePos"), i.enableVertexAttribArray(e), i.vertexAttribPointer(e, 2, i.FLOAT, !1, 0, 0), u = n("ySampler", 0), l = n("uSampler", 1), c = n("vSampler", 2), {
                    render: function (e, t, r, n, o) {
                        i.viewport(0, 0, e, t), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, u), i.texImage2D(i.TEXTURE_2D, 0, i.LUMINANCE, e, t, 0, i.LUMINANCE, i.UNSIGNED_BYTE, r), i.activeTexture(i.TEXTURE1), i.bindTexture(i.TEXTURE_2D, l), i.texImage2D(i.TEXTURE_2D, 0, i.LUMINANCE, e / 2, t / 2, 0, i.LUMINANCE, i.UNSIGNED_BYTE, n), i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, c), i.texImage2D(i.TEXTURE_2D, 0, i.LUMINANCE, e / 2, t / 2, 0, i.LUMINANCE, i.UNSIGNED_BYTE, o), i.drawArrays(i.TRIANGLE_STRIP, 0, 4)
                    }, renderYUV: function (e, t, r) {
                        var n = r.slice(0, e * t), o = r.slice(e * t, e * t * 5 / 4),
                            r = r.slice(e * t * 5 / 4, e * t * 3 / 2);
                        i.viewport(0, 0, e, t), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, u), i.texImage2D(i.TEXTURE_2D, 0, i.LUMINANCE, e, t, 0, i.LUMINANCE, i.UNSIGNED_BYTE, n), i.activeTexture(i.TEXTURE1), i.bindTexture(i.TEXTURE_2D, l), i.texImage2D(i.TEXTURE_2D, 0, i.LUMINANCE, e / 2, t / 2, 0, i.LUMINANCE, i.UNSIGNED_BYTE, o), i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, c), i.texImage2D(i.TEXTURE_2D, 0, i.LUMINANCE, e / 2, t / 2, 0, i.LUMINANCE, i.UNSIGNED_BYTE, r), i.drawArrays(i.TRIANGLE_STRIP, 0, 4)
                    }, destroy: function () {
                        try {
                            i.deleteProgram(o), i.deleteBuffer(a), i.deleteBuffer(s), i.deleteTexture(u), i.deleteTexture(l), i.deleteBuffer(c)
                        } catch (e) {
                        }
                    }
                }))
            }, audioInfo: function (e, t, r) {
                postMessage({cmd: "audioCode", code: e}), postMessage({cmd: "initAudio", sampleRate: t, channels: r}), E = r
            }, yuvData: function (e, t) {
                var r = d * f * 3 / 2, e = s.HEAPU8.subarray(e, e + r), r = new Uint8Array(e);
                b.useOffscreen() ? (this.webglObj.renderYUV(d, f, r), e = this.offscreenCanvas.transferToImageBitmap(), postMessage({
                    cmd: P,
                    buffer: e,
                    delay: this.delay,
                    ts: t
                }, [e])) : postMessage({cmd: P, output: r, delay: this.delay, ts: t}, [r.buffer])
            }, pcmData: function (t, e, r) {
                let n = e, o = [], i = 0;
                for (let e = 0; e < 2; e++) {
                    var a = s.HEAPU32[(t >> 2) + e] >> 2;
                    o[e] = s.HEAPF32.subarray(a, a + n)
                }
                if (w) {
                    if (!(n >= (e = 1024 - w))) return w += n, u[0] = Float32Array.of(...u[0], ...o[0]), void (2 == E && (u[1] = Float32Array.of(...u[1], ...o[1])));
                    v[0] = Float32Array.of(...u[0], ...o[0].subarray(0, e)), 2 == E && (v[1] = Float32Array.of(...u[1], ...o[1].subarray(0, e))), postMessage({
                        cmd: S,
                        buffer: v,
                        ts: r
                    }, v.map(e => e.buffer)), i = e, n -= e
                }
                for (w = n; 1024 <= w; w -= 1024) v[0] = o[0].slice(i, i += 1024), 2 == E && (v[1] = o[1].slice(i - 1024, i)), postMessage({
                    cmd: S,
                    buffer: v,
                    ts: r
                }, v.map(e => e.buffer));
                w && (u[0] = o[0].slice(i), 2 == E && (u[1] = o[1].slice(i)))
            }, timeEnd: function () {
                postMessage({cmd: "workerEnd"})
            }
        }), _ = new s.AudioDecoder(b), T = new s.VideoDecoder(b);
    postMessage({cmd: R}), self.onmessage = function (e) {
        var t = e.data;
        switch (t.cmd) {
            case R:
                try {
                    b.opt = Object.assign(b.opt, JSON.parse(t.opt))
                } catch (e) {
                }
                b.init();
                break;
            case"decode":
                b.pushBuffer(t.buffer, t.options);
                break;
            case"audioDecode":
                b.decodeAudio(t.buffer, t.ts);
                break;
            case"videoDecode":
                b.decodeVideo(t.buffer, t.ts, t.isIFrame);
                break;
            case"clearBuffer":
                b.clearBuffer(t.needClear);
                break;
            case"fetchStream":
                b.fetchStream(t.url, JSON.parse(t.opt));
                break;
            case"close":
                b.close();
                break;
            case"updateConfig":
                b.opt[t.key] = t.value
        }
    }
}

$.U32 = s, $.U16 = u, $.U8 = l, Date.now || (Date.now = function () {
    return (new Date).getTime()
}), o.postRun = function () {
    d(o)
}
})
;
