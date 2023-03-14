(function () {
	const A = document.createElement("link").relList;
	if (A && A.supports && A.supports("modulepreload")) return;
	for (const m of document.querySelectorAll('link[rel="modulepreload"]')) E(m);
	new MutationObserver((m) => {
		for (const w of m)
			if (w.type === "childList")
				for (const S of w.addedNodes)
					S.tagName === "LINK" && S.rel === "modulepreload" && E(S);
	}).observe(document, { childList: !0, subtree: !0 });
	function T(m) {
		const w = {};
		return (
			m.integrity && (w.integrity = m.integrity),
			m.referrerPolicy && (w.referrerPolicy = m.referrerPolicy),
			m.crossOrigin === "use-credentials"
				? (w.credentials = "include")
				: m.crossOrigin === "anonymous"
				? (w.credentials = "omit")
				: (w.credentials = "same-origin"),
			w
		);
	}
	function E(m) {
		if (m.ep) return;
		m.ep = !0;
		const w = T(m);
		fetch(m.href, w);
	}
})();
let P = null;
class N {}
N.render = function (C, A) {
	P(C, A);
};
self.QrCreator = N;
(function (C) {
	function A(v, n, e, f) {
		var r = {},
			t = C(e, n);
		t.u(v), t.J(), (f = f || 0);
		var a = t.h(),
			i = t.h() + 2 * f;
		return (
			(r.text = v),
			(r.level = n),
			(r.version = e),
			(r.O = i),
			(r.a = function (u, h) {
				return (
					(u -= f),
					(h -= f),
					0 > u || u >= a || 0 > h || h >= a ? !1 : t.a(u, h)
				);
			}),
			r
		);
	}
	function T(v, n, e, f, r, t, a, i, u, h) {
		function M(s, d, o, l, p, g, x) {
			s ? (v.lineTo(d + g, o + x), v.arcTo(d, o, l, p, t)) : v.lineTo(d, o);
		}
		a ? v.moveTo(n + t, e) : v.moveTo(n, e),
			M(i, f, e, f, r, -t, 0),
			M(u, f, r, n, r, 0, -t),
			M(h, n, r, n, e, t, 0),
			M(a, n, e, f, e, 0, t);
	}
	function E(v, n, e, f, r, t, a, i, u, h) {
		function M(s, d, o, l) {
			v.moveTo(s + o, d),
				v.lineTo(s, d),
				v.lineTo(s, d + l),
				v.arcTo(s, d, s + o, d, t);
		}
		a && M(n, e, t, t),
			i && M(f, e, -t, t),
			u && M(f, r, -t, -t),
			h && M(n, r, t, -t);
	}
	function m(v, n) {
		var e = n.fill;
		if (typeof e == "string") v.fillStyle = e;
		else {
			var f = e.type,
				r = e.colorStops;
			if (
				((e = e.position.map((a) => Math.round(a * n.size))),
				f === "linear-gradient")
			)
				var t = v.createLinearGradient.apply(v, e);
			else if (f === "radial-gradient") t = v.createRadialGradient.apply(v, e);
			else throw Error("Unsupported fill");
			r.forEach(([a, i]) => {
				t.addColorStop(a, i);
			}),
				(v.fillStyle = t);
		}
	}
	function w(v, n) {
		r: {
			var e = n.text,
				f = n.v,
				r = n.N,
				t = n.K,
				a = n.P;
			for (r = Math.max(1, r || 1), t = Math.min(40, t || 40); r <= t; r += 1)
				try {
					var i = A(e, f, r, a);
					break r;
				} catch {}
			i = void 0;
		}
		if (!i) return null;
		for (
			e = v.getContext("2d"),
				n.background &&
					((e.fillStyle = n.background),
					e.fillRect(n.left, n.top, n.size, n.size)),
				f = i.O,
				t = n.size / f,
				e.beginPath(),
				a = 0;
			a < f;
			a += 1
		)
			for (r = 0; r < f; r += 1) {
				var u = e,
					h = n.left + r * t,
					M = n.top + a * t,
					s = a,
					d = r,
					o = i.a,
					l = h + t,
					p = M + t,
					g = s - 1,
					x = s + 1,
					y = d - 1,
					c = d + 1,
					L = Math.floor(Math.min(0.5, Math.max(0, n.R)) * t),
					F = o(s, d),
					B = o(g, y),
					H = o(g, d);
				g = o(g, c);
				var I = o(s, c);
				(c = o(x, c)),
					(d = o(x, d)),
					(x = o(x, y)),
					(s = o(s, y)),
					(h = Math.round(h)),
					(M = Math.round(M)),
					(l = Math.round(l)),
					(p = Math.round(p)),
					F
						? T(u, h, M, l, p, L, !H && !s, !H && !I, !d && !I, !d && !s)
						: E(
								u,
								h,
								M,
								l,
								p,
								L,
								H && s && B,
								H && I && g,
								d && I && c,
								d && s && x
						  );
			}
		return m(e, n), e.fill(), v;
	}
	var S = {
		minVersion: 1,
		maxVersion: 40,
		ecLevel: "L",
		left: 0,
		top: 0,
		size: 200,
		fill: "#000",
		background: null,
		text: "no text",
		radius: 0.5,
		quiet: 0,
	};
	P = function (v, n) {
		var e = {};
		Object.assign(e, S, v),
			(e.N = e.minVersion),
			(e.K = e.maxVersion),
			(e.v = e.ecLevel),
			(e.left = e.left),
			(e.top = e.top),
			(e.size = e.size),
			(e.fill = e.fill),
			(e.background = e.background),
			(e.text = e.text),
			(e.R = e.radius),
			(e.P = e.quiet),
			n instanceof HTMLCanvasElement
				? ((n.width !== e.size || n.height !== e.size) &&
						((n.width = e.size), (n.height = e.size)),
				  n.getContext("2d").clearRect(0, 0, n.width, n.height),
				  w(n, e))
				: ((v = document.createElement("canvas")),
				  (v.width = e.size),
				  (v.height = e.size),
				  (e = w(v, e)),
				  n.appendChild(e));
	};
})(
	(function () {
		function C(n) {
			var e = T.s(n);
			return {
				S: function () {
					return 4;
				},
				b: function () {
					return e.length;
				},
				write: function (f) {
					for (var r = 0; r < e.length; r += 1) f.put(e[r], 8);
				},
			};
		}
		function A() {
			var n = [],
				e = 0,
				f = {
					B: function () {
						return n;
					},
					c: function (r) {
						return ((n[Math.floor(r / 8)] >>> (7 - (r % 8))) & 1) == 1;
					},
					put: function (r, t) {
						for (var a = 0; a < t; a += 1) f.m(((r >>> (t - a - 1)) & 1) == 1);
					},
					f: function () {
						return e;
					},
					m: function (r) {
						var t = Math.floor(e / 8);
						n.length <= t && n.push(0), r && (n[t] |= 128 >>> e % 8), (e += 1);
					},
				};
			return f;
		}
		function T(n, e) {
			function f(s, d) {
				for (var o = -1; 7 >= o; o += 1)
					if (!(-1 >= s + o || i <= s + o))
						for (var l = -1; 7 >= l; l += 1)
							-1 >= d + l ||
								i <= d + l ||
								(a[s + o][d + l] =
									(0 <= o && 6 >= o && (l == 0 || l == 6)) ||
									(0 <= l && 6 >= l && (o == 0 || o == 6)) ||
									(2 <= o && 4 >= o && 2 <= l && 4 >= l));
			}
			function r(s, d) {
				for (var o = (i = 4 * n + 17), l = Array(o), p = 0; p < o; p += 1) {
					l[p] = Array(o);
					for (var g = 0; g < o; g += 1) l[p][g] = null;
				}
				for (
					a = l, f(0, 0), f(i - 7, 0), f(0, i - 7), o = w.G(n), l = 0;
					l < o.length;
					l += 1
				)
					for (p = 0; p < o.length; p += 1) {
						g = o[l];
						var x = o[p];
						if (a[g][x] == null)
							for (var y = -2; 2 >= y; y += 1)
								for (var c = -2; 2 >= c; c += 1)
									a[g + y][x + c] =
										y == -2 ||
										y == 2 ||
										c == -2 ||
										c == 2 ||
										(y == 0 && c == 0);
					}
				for (o = 8; o < i - 8; o += 1)
					a[o][6] == null && (a[o][6] = o % 2 == 0);
				for (o = 8; o < i - 8; o += 1)
					a[6][o] == null && (a[6][o] = o % 2 == 0);
				for (o = w.w((t << 3) | d), l = 0; 15 > l; l += 1)
					(p = !s && ((o >> l) & 1) == 1),
						(a[6 > l ? l : 8 > l ? l + 1 : i - 15 + l][8] = p),
						(a[8][8 > l ? i - l - 1 : 9 > l ? 15 - l : 14 - l] = p);
				if (((a[i - 8][8] = !s), 7 <= n)) {
					for (o = w.A(n), l = 0; 18 > l; l += 1)
						(p = !s && ((o >> l) & 1) == 1),
							(a[Math.floor(l / 3)][(l % 3) + i - 8 - 3] = p);
					for (l = 0; 18 > l; l += 1)
						(p = !s && ((o >> l) & 1) == 1),
							(a[(l % 3) + i - 8 - 3][Math.floor(l / 3)] = p);
				}
				if (u == null) {
					for (s = v.I(n, t), o = A(), l = 0; l < h.length; l += 1)
						(p = h[l]), o.put(4, 4), o.put(p.b(), w.f(4, n)), p.write(o);
					for (l = p = 0; l < s.length; l += 1) p += s[l].j;
					if (o.f() > 8 * p)
						throw Error("code length overflow. (" + o.f() + ">" + 8 * p + ")");
					for (o.f() + 4 <= 8 * p && o.put(0, 4); o.f() % 8 != 0; ) o.m(!1);
					for (; !(o.f() >= 8 * p) && (o.put(236, 8), !(o.f() >= 8 * p)); )
						o.put(17, 8);
					var L = 0;
					for (
						p = l = 0, g = Array(s.length), x = Array(s.length), y = 0;
						y < s.length;
						y += 1
					) {
						var F = s[y].j,
							B = s[y].o - F;
						for (
							l = Math.max(l, F), p = Math.max(p, B), g[y] = Array(F), c = 0;
							c < g[y].length;
							c += 1
						)
							g[y][c] = 255 & o.B()[c + L];
						for (
							L += F,
								c = w.C(B),
								F = E(g[y], c.b() - 1).l(c),
								x[y] = Array(c.b() - 1),
								c = 0;
							c < x[y].length;
							c += 1
						)
							(B = c + F.b() - x[y].length), (x[y][c] = 0 <= B ? F.c(B) : 0);
					}
					for (c = o = 0; c < s.length; c += 1) o += s[c].o;
					for (o = Array(o), c = L = 0; c < l; c += 1)
						for (y = 0; y < s.length; y += 1)
							c < g[y].length && ((o[L] = g[y][c]), (L += 1));
					for (c = 0; c < p; c += 1)
						for (y = 0; y < s.length; y += 1)
							c < x[y].length && ((o[L] = x[y][c]), (L += 1));
					u = o;
				}
				for (
					s = u, o = -1, l = i - 1, p = 7, g = 0, d = w.F(d), x = i - 1;
					0 < x;
					x -= 2
				)
					for (x == 6 && --x; ; ) {
						for (y = 0; 2 > y; y += 1)
							a[l][x - y] == null &&
								((c = !1),
								g < s.length && (c = ((s[g] >>> p) & 1) == 1),
								d(l, x - y) && (c = !c),
								(a[l][x - y] = c),
								--p,
								p == -1 && ((g += 1), (p = 7)));
						if (((l += o), 0 > l || i <= l)) {
							(l -= o), (o = -o);
							break;
						}
					}
			}
			var t = m[e],
				a = null,
				i = 0,
				u = null,
				h = [],
				M = {
					u: function (s) {
						(s = C(s)), h.push(s), (u = null);
					},
					a: function (s, d) {
						if (0 > s || i <= s || 0 > d || i <= d) throw Error(s + "," + d);
						return a[s][d];
					},
					h: function () {
						return i;
					},
					J: function () {
						for (var s = 0, d = 0, o = 0; 8 > o; o += 1) {
							r(!0, o);
							var l = w.D(M);
							(o == 0 || s > l) && ((s = l), (d = o));
						}
						r(!1, d);
					},
				};
			return M;
		}
		function E(n, e) {
			if (typeof n.length > "u") throw Error(n.length + "/" + e);
			var f = (function () {
					for (var t = 0; t < n.length && n[t] == 0; ) t += 1;
					for (var a = Array(n.length - t + e), i = 0; i < n.length - t; i += 1)
						a[i] = n[i + t];
					return a;
				})(),
				r = {
					c: function (t) {
						return f[t];
					},
					b: function () {
						return f.length;
					},
					multiply: function (t) {
						for (var a = Array(r.b() + t.b() - 1), i = 0; i < r.b(); i += 1)
							for (var u = 0; u < t.b(); u += 1)
								a[i + u] ^= S.i(S.g(r.c(i)) + S.g(t.c(u)));
						return E(a, 0);
					},
					l: function (t) {
						if (0 > r.b() - t.b()) return r;
						for (
							var a = S.g(r.c(0)) - S.g(t.c(0)), i = Array(r.b()), u = 0;
							u < r.b();
							u += 1
						)
							i[u] = r.c(u);
						for (u = 0; u < t.b(); u += 1) i[u] ^= S.i(S.g(t.c(u)) + a);
						return E(i, 0).l(t);
					},
				};
			return r;
		}
		T.s = function (n) {
			for (var e = [], f = 0; f < n.length; f++) {
				var r = n.charCodeAt(f);
				128 > r
					? e.push(r)
					: 2048 > r
					? e.push(192 | (r >> 6), 128 | (r & 63))
					: 55296 > r || 57344 <= r
					? e.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (r & 63))
					: (f++,
					  (r = 65536 + (((r & 1023) << 10) | (n.charCodeAt(f) & 1023))),
					  e.push(
							240 | (r >> 18),
							128 | ((r >> 12) & 63),
							128 | ((r >> 6) & 63),
							128 | (r & 63)
					  ));
			}
			return e;
		};
		var m = { L: 1, M: 0, Q: 3, H: 2 },
			w = (function () {
				function n(r) {
					for (var t = 0; r != 0; ) (t += 1), (r >>>= 1);
					return t;
				}
				var e = [
						[],
						[6, 18],
						[6, 22],
						[6, 26],
						[6, 30],
						[6, 34],
						[6, 22, 38],
						[6, 24, 42],
						[6, 26, 46],
						[6, 28, 50],
						[6, 30, 54],
						[6, 32, 58],
						[6, 34, 62],
						[6, 26, 46, 66],
						[6, 26, 48, 70],
						[6, 26, 50, 74],
						[6, 30, 54, 78],
						[6, 30, 56, 82],
						[6, 30, 58, 86],
						[6, 34, 62, 90],
						[6, 28, 50, 72, 94],
						[6, 26, 50, 74, 98],
						[6, 30, 54, 78, 102],
						[6, 28, 54, 80, 106],
						[6, 32, 58, 84, 110],
						[6, 30, 58, 86, 114],
						[6, 34, 62, 90, 118],
						[6, 26, 50, 74, 98, 122],
						[6, 30, 54, 78, 102, 126],
						[6, 26, 52, 78, 104, 130],
						[6, 30, 56, 82, 108, 134],
						[6, 34, 60, 86, 112, 138],
						[6, 30, 58, 86, 114, 142],
						[6, 34, 62, 90, 118, 146],
						[6, 30, 54, 78, 102, 126, 150],
						[6, 24, 50, 76, 102, 128, 154],
						[6, 28, 54, 80, 106, 132, 158],
						[6, 32, 58, 84, 110, 136, 162],
						[6, 26, 54, 82, 110, 138, 166],
						[6, 30, 58, 86, 114, 142, 170],
					],
					f = {
						w: function (r) {
							for (var t = r << 10; 0 <= n(t) - n(1335); )
								t ^= 1335 << (n(t) - n(1335));
							return ((r << 10) | t) ^ 21522;
						},
						A: function (r) {
							for (var t = r << 12; 0 <= n(t) - n(7973); )
								t ^= 7973 << (n(t) - n(7973));
							return (r << 12) | t;
						},
						G: function (r) {
							return e[r - 1];
						},
						F: function (r) {
							switch (r) {
								case 0:
									return function (t, a) {
										return (t + a) % 2 == 0;
									};
								case 1:
									return function (t) {
										return t % 2 == 0;
									};
								case 2:
									return function (t, a) {
										return a % 3 == 0;
									};
								case 3:
									return function (t, a) {
										return (t + a) % 3 == 0;
									};
								case 4:
									return function (t, a) {
										return (Math.floor(t / 2) + Math.floor(a / 3)) % 2 == 0;
									};
								case 5:
									return function (t, a) {
										return ((t * a) % 2) + ((t * a) % 3) == 0;
									};
								case 6:
									return function (t, a) {
										return (((t * a) % 2) + ((t * a) % 3)) % 2 == 0;
									};
								case 7:
									return function (t, a) {
										return (((t * a) % 3) + ((t + a) % 2)) % 2 == 0;
									};
								default:
									throw Error("bad maskPattern:" + r);
							}
						},
						C: function (r) {
							for (var t = E([1], 0), a = 0; a < r; a += 1)
								t = t.multiply(E([1, S.i(a)], 0));
							return t;
						},
						f: function (r, t) {
							if (r != 4 || 1 > t || 40 < t)
								throw Error("mode: " + r + "; type: " + t);
							return 10 > t ? 8 : 16;
						},
						D: function (r) {
							for (var t = r.h(), a = 0, i = 0; i < t; i += 1)
								for (var u = 0; u < t; u += 1) {
									for (var h = 0, M = r.a(i, u), s = -1; 1 >= s; s += 1)
										if (!(0 > i + s || t <= i + s))
											for (var d = -1; 1 >= d; d += 1)
												0 > u + d ||
													t <= u + d ||
													((s != 0 || d != 0) &&
														M == r.a(i + s, u + d) &&
														(h += 1));
									5 < h && (a += 3 + h - 5);
								}
							for (i = 0; i < t - 1; i += 1)
								for (u = 0; u < t - 1; u += 1)
									(h = 0),
										r.a(i, u) && (h += 1),
										r.a(i + 1, u) && (h += 1),
										r.a(i, u + 1) && (h += 1),
										r.a(i + 1, u + 1) && (h += 1),
										(h == 0 || h == 4) && (a += 3);
							for (i = 0; i < t; i += 1)
								for (u = 0; u < t - 6; u += 1)
									r.a(i, u) &&
										!r.a(i, u + 1) &&
										r.a(i, u + 2) &&
										r.a(i, u + 3) &&
										r.a(i, u + 4) &&
										!r.a(i, u + 5) &&
										r.a(i, u + 6) &&
										(a += 40);
							for (u = 0; u < t; u += 1)
								for (i = 0; i < t - 6; i += 1)
									r.a(i, u) &&
										!r.a(i + 1, u) &&
										r.a(i + 2, u) &&
										r.a(i + 3, u) &&
										r.a(i + 4, u) &&
										!r.a(i + 5, u) &&
										r.a(i + 6, u) &&
										(a += 40);
							for (u = h = 0; u < t; u += 1)
								for (i = 0; i < t; i += 1) r.a(i, u) && (h += 1);
							return (a += (Math.abs((100 * h) / t / t - 50) / 5) * 10);
						},
					};
				return f;
			})(),
			S = (function () {
				for (var n = Array(256), e = Array(256), f = 0; 8 > f; f += 1)
					n[f] = 1 << f;
				for (f = 8; 256 > f; f += 1)
					n[f] = n[f - 4] ^ n[f - 5] ^ n[f - 6] ^ n[f - 8];
				for (f = 0; 255 > f; f += 1) e[n[f]] = f;
				return {
					g: function (r) {
						if (1 > r) throw Error("glog(" + r + ")");
						return e[r];
					},
					i: function (r) {
						for (; 0 > r; ) r += 255;
						for (; 256 <= r; ) r -= 255;
						return n[r];
					},
				};
			})(),
			v = (function () {
				function n(r, t) {
					switch (t) {
						case m.L:
							return e[4 * (r - 1)];
						case m.M:
							return e[4 * (r - 1) + 1];
						case m.Q:
							return e[4 * (r - 1) + 2];
						case m.H:
							return e[4 * (r - 1) + 3];
					}
				}
				var e = [
						[1, 26, 19],
						[1, 26, 16],
						[1, 26, 13],
						[1, 26, 9],
						[1, 44, 34],
						[1, 44, 28],
						[1, 44, 22],
						[1, 44, 16],
						[1, 70, 55],
						[1, 70, 44],
						[2, 35, 17],
						[2, 35, 13],
						[1, 100, 80],
						[2, 50, 32],
						[2, 50, 24],
						[4, 25, 9],
						[1, 134, 108],
						[2, 67, 43],
						[2, 33, 15, 2, 34, 16],
						[2, 33, 11, 2, 34, 12],
						[2, 86, 68],
						[4, 43, 27],
						[4, 43, 19],
						[4, 43, 15],
						[2, 98, 78],
						[4, 49, 31],
						[2, 32, 14, 4, 33, 15],
						[4, 39, 13, 1, 40, 14],
						[2, 121, 97],
						[2, 60, 38, 2, 61, 39],
						[4, 40, 18, 2, 41, 19],
						[4, 40, 14, 2, 41, 15],
						[2, 146, 116],
						[3, 58, 36, 2, 59, 37],
						[4, 36, 16, 4, 37, 17],
						[4, 36, 12, 4, 37, 13],
						[2, 86, 68, 2, 87, 69],
						[4, 69, 43, 1, 70, 44],
						[6, 43, 19, 2, 44, 20],
						[6, 43, 15, 2, 44, 16],
						[4, 101, 81],
						[1, 80, 50, 4, 81, 51],
						[4, 50, 22, 4, 51, 23],
						[3, 36, 12, 8, 37, 13],
						[2, 116, 92, 2, 117, 93],
						[6, 58, 36, 2, 59, 37],
						[4, 46, 20, 6, 47, 21],
						[7, 42, 14, 4, 43, 15],
						[4, 133, 107],
						[8, 59, 37, 1, 60, 38],
						[8, 44, 20, 4, 45, 21],
						[12, 33, 11, 4, 34, 12],
						[3, 145, 115, 1, 146, 116],
						[4, 64, 40, 5, 65, 41],
						[11, 36, 16, 5, 37, 17],
						[11, 36, 12, 5, 37, 13],
						[5, 109, 87, 1, 110, 88],
						[5, 65, 41, 5, 66, 42],
						[5, 54, 24, 7, 55, 25],
						[11, 36, 12, 7, 37, 13],
						[5, 122, 98, 1, 123, 99],
						[7, 73, 45, 3, 74, 46],
						[15, 43, 19, 2, 44, 20],
						[3, 45, 15, 13, 46, 16],
						[1, 135, 107, 5, 136, 108],
						[10, 74, 46, 1, 75, 47],
						[1, 50, 22, 15, 51, 23],
						[2, 42, 14, 17, 43, 15],
						[5, 150, 120, 1, 151, 121],
						[9, 69, 43, 4, 70, 44],
						[17, 50, 22, 1, 51, 23],
						[2, 42, 14, 19, 43, 15],
						[3, 141, 113, 4, 142, 114],
						[3, 70, 44, 11, 71, 45],
						[17, 47, 21, 4, 48, 22],
						[9, 39, 13, 16, 40, 14],
						[3, 135, 107, 5, 136, 108],
						[3, 67, 41, 13, 68, 42],
						[15, 54, 24, 5, 55, 25],
						[15, 43, 15, 10, 44, 16],
						[4, 144, 116, 4, 145, 117],
						[17, 68, 42],
						[17, 50, 22, 6, 51, 23],
						[19, 46, 16, 6, 47, 17],
						[2, 139, 111, 7, 140, 112],
						[17, 74, 46],
						[7, 54, 24, 16, 55, 25],
						[34, 37, 13],
						[4, 151, 121, 5, 152, 122],
						[4, 75, 47, 14, 76, 48],
						[11, 54, 24, 14, 55, 25],
						[16, 45, 15, 14, 46, 16],
						[6, 147, 117, 4, 148, 118],
						[6, 73, 45, 14, 74, 46],
						[11, 54, 24, 16, 55, 25],
						[30, 46, 16, 2, 47, 17],
						[8, 132, 106, 4, 133, 107],
						[8, 75, 47, 13, 76, 48],
						[7, 54, 24, 22, 55, 25],
						[22, 45, 15, 13, 46, 16],
						[10, 142, 114, 2, 143, 115],
						[19, 74, 46, 4, 75, 47],
						[28, 50, 22, 6, 51, 23],
						[33, 46, 16, 4, 47, 17],
						[8, 152, 122, 4, 153, 123],
						[22, 73, 45, 3, 74, 46],
						[8, 53, 23, 26, 54, 24],
						[12, 45, 15, 28, 46, 16],
						[3, 147, 117, 10, 148, 118],
						[3, 73, 45, 23, 74, 46],
						[4, 54, 24, 31, 55, 25],
						[11, 45, 15, 31, 46, 16],
						[7, 146, 116, 7, 147, 117],
						[21, 73, 45, 7, 74, 46],
						[1, 53, 23, 37, 54, 24],
						[19, 45, 15, 26, 46, 16],
						[5, 145, 115, 10, 146, 116],
						[19, 75, 47, 10, 76, 48],
						[15, 54, 24, 25, 55, 25],
						[23, 45, 15, 25, 46, 16],
						[13, 145, 115, 3, 146, 116],
						[2, 74, 46, 29, 75, 47],
						[42, 54, 24, 1, 55, 25],
						[23, 45, 15, 28, 46, 16],
						[17, 145, 115],
						[10, 74, 46, 23, 75, 47],
						[10, 54, 24, 35, 55, 25],
						[19, 45, 15, 35, 46, 16],
						[17, 145, 115, 1, 146, 116],
						[14, 74, 46, 21, 75, 47],
						[29, 54, 24, 19, 55, 25],
						[11, 45, 15, 46, 46, 16],
						[13, 145, 115, 6, 146, 116],
						[14, 74, 46, 23, 75, 47],
						[44, 54, 24, 7, 55, 25],
						[59, 46, 16, 1, 47, 17],
						[12, 151, 121, 7, 152, 122],
						[12, 75, 47, 26, 76, 48],
						[39, 54, 24, 14, 55, 25],
						[22, 45, 15, 41, 46, 16],
						[6, 151, 121, 14, 152, 122],
						[6, 75, 47, 34, 76, 48],
						[46, 54, 24, 10, 55, 25],
						[2, 45, 15, 64, 46, 16],
						[17, 152, 122, 4, 153, 123],
						[29, 74, 46, 14, 75, 47],
						[49, 54, 24, 10, 55, 25],
						[24, 45, 15, 46, 46, 16],
						[4, 152, 122, 18, 153, 123],
						[13, 74, 46, 32, 75, 47],
						[48, 54, 24, 14, 55, 25],
						[42, 45, 15, 32, 46, 16],
						[20, 147, 117, 4, 148, 118],
						[40, 75, 47, 7, 76, 48],
						[43, 54, 24, 22, 55, 25],
						[10, 45, 15, 67, 46, 16],
						[19, 148, 118, 6, 149, 119],
						[18, 75, 47, 31, 76, 48],
						[34, 54, 24, 34, 55, 25],
						[20, 45, 15, 61, 46, 16],
					],
					f = {
						I: function (r, t) {
							var a = n(r, t);
							if (typeof a > "u")
								throw Error(
									"bad rs block @ typeNumber:" + r + "/errorCorrectLevel:" + t
								);
							(r = a.length / 3), (t = []);
							for (var i = 0; i < r; i += 1)
								for (
									var u = a[3 * i], h = a[3 * i + 1], M = a[3 * i + 2], s = 0;
									s < u;
									s += 1
								) {
									var d = M,
										o = {};
									(o.o = h), (o.j = d), t.push(o);
								}
							return t;
						},
					};
				return f;
			})();
		return T;
	})()
);
const G = QrCreator;
var Q = 0.5,
	V = "H",
	J = "#ff7d4f",
	z = document.createElement("button");
document.body.appendChild(z);
z.textContent = "Modal Test";
z.id = "myButton";
z.class = "myButton";
z.style.backgroundColor = "#ff7d4f";
z.style.padding = "12px";
z.style.fontFamily = "sans-serif";
z.style.fontSize = "16px";
z.style.color = "#ffffff";
z.style.borderRadius = "10px";
z.style.border = "1px solid #ff7d4f";
z.style.left = "50%";
z.style.top = "50%";
z.style.position = "absolute";
var O = document.createElement("div");
document.body.appendChild(O);
O.id = "myModal";
O.style.display = "none";
z.onclick = function () {
	(O.style.display = "flex"), j();
};
var R = document.createElement("button");
document.getElementById("myModal").appendChild(R);
R.id = "close";
O.innerHTML = `
<style>
	.close {
			  color: #aaaaaa;
			  float: right;
			  font-size: 28px;
			  font-weight: bold;
				}
	.close:hover,.close:focus {
			  color: #000;
			  text-decoration: none;
			  cursor: pointer;
				}
	.modal {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    <!--padding-top: 100px;-->
    background-color: black;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-transition: 0.5s;
    overflow: auto;
    transition: all 0.3s linear; 
				}
	.modal-content {
		    max-width:800px;
			  background-image: linear-gradient(#ffd9bc,#fff4ee);
        margin-top: auto;
        margin-bottom: auto;
        margin-left:auto;
        margin-right:auto;
			  padding: 20px;
			  width: 80%;
			  border: 1px  ;
	      border-radius: 20px;
			  box-sizing: content-box;
        font-family: sans-serif;
        color:#333333;
				}
	.inner-content {
	      align-items: center;
		    justify-content: space-between;
			  display: table-cell;
			  margin: auto;
			  width: 90%;
				}
	.qr-code {
				margin-left: 25px;
				}
  .Form {
        display:block;
      }
  .submitBtn  {
    width:90%;
    background-color : #ff7d4f;
    padding : 12px;
    font-size : 14px;
    color : #ffffff;
    border-radius : 20px;
    border : 1px solid #ff7d4f;
  }
  .submitBtn:hover,.submitBtn:focus {
    background-color:transparent;
    color:#ff7d4f;
    transition-duration: 300ms;
  }
  input {
    width:  85%;
    margin-top:5px;
    margin-bottom:10px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;
    border: 1px solid #d2d9e4;
    border-radius: 20px;
    font-family: Poppins,sans-serif;
  }
</style>

<div id="myModal" class="modal" onclick="document.getElementById('myModal').style.display='none'">
  <table class="modal-content" onclick="event.stopPropagation()">
    <tbody>
      <tr>
        <td>
        <img src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/627137e6fd5e54d4f660aff5_mySHOEFITTER-logo.svg" loading="lazy" alt="mySHOEFITTER Logo" class="myshoefitter-logo-icon" width="30%">
        </td>
        <td colspan="2" style="display:flex; flex-direction:row-reverse;">
          <span onclick="document.getElementById('myModal').style.display='none'" class="close">&times;</span>
        </td>
      </tr>
      <tr>
        <td>
          <div border="1" class="inner-content" id="inner-content">
            <div id="left half">
              <p align="top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro voluptas nihil ipsam labore sunt maxime incidunt officiis aspernatur non praesentium iusto veritatis, exercitationem delectus velit reiciendis cupiditate eos accusamus.</p>
              <br>
              <div class="Form" id="Form">
                  <label>ScanID:</label> <br>
                  <input type="text" id="idField" name="idFormField" placeholder="Enter your ID"> <br>
                  <label>Email: </label> <br>
                  <input type="text" id="emailField" name="emailField" placeholder="Enter your Email"> <br>
                <button id="submitBtn" class="submitBtn">Senden</button>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div id="qr-code" class="qr-code"> </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`;
document.querySelector("#Form");
var K = document.querySelector("#idField"),
	U = document.querySelector("#emailField");
K.value;
U.value;
document.querySelector("#submitBtn").onclick = function () {
	D(), console.log("Submitted!");
};
function D() {
	var C = new Headers();
	C.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"),
		C.append("Content-Type", "application/json");
	var A = JSON.stringify({ code: "test" }),
		T = { method: "POST", headers: C, body: A, redirect: "follow" };
	fetch(
		"https://admin.myshoefitter.com/flows/trigger/c7a5aa72-8ff2-4398-b910-a88994aeab4c",
		T
	)
		.then((E) => E.json())
		.then((E) => {
			const m = E[0].id;
			console.log(m);
		})
		.catch((E) => console.log("error", E));
}
window.addEventListener("resize", j);
function j() {
	var C = document.querySelector("#inner-content");
	if (O.style.display != "none") {
		document.querySelector("#qr-code").innerHTML = "";
		var A = C.clientWidth * 0.45;
		G.render(
			{
				text: "https://myshoefitter.com",
				radius: Q,
				ecLevel: V,
				fill: J,
				background: null,
				size: A,
			},
			document.querySelector("#qr-code")
		);
	}
}
