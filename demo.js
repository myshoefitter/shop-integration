(function () {
	const E = document.createElement("link").relList;
	if (E && E.supports && E.supports("modulepreload")) return;
	for (const y of document.querySelectorAll('link[rel="modulepreload"]')) M(y);
	new MutationObserver((y) => {
	  for (const w of y)
		if (w.type === "childList")
		  for (const T of w.addedNodes)
			T.tagName === "LINK" && T.rel === "modulepreload" && M(T);
	}).observe(document, { childList: !0, subtree: !0 });
	function A(y) {
	  const w = {};
	  return (
		y.integrity && (w.integrity = y.integrity),
		y.referrerPolicy && (w.referrerPolicy = y.referrerPolicy),
		y.crossOrigin === "use-credentials"
		  ? (w.credentials = "include")
		  : y.crossOrigin === "anonymous"
		  ? (w.credentials = "omit")
		  : (w.credentials = "same-origin"),
		w
	  );
	}
	function M(y) {
	  if (y.ep) return;
	  y.ep = !0;
	  const w = A(y);
	  fetch(y.href, w);
	}
  })();
  let N = null;
  class j {}
  j.render = function (S, E) {
	N(S, E);
  };
  self.QrCreator = j;
  (function (S) {
	function E(v, n, e, u) {
	  var r = {},
		t = S(e, n);
	  t.u(v), t.J(), (u = u || 0);
	  var a = t.h(),
		i = t.h() + 2 * u;
	  return (
		(r.text = v),
		(r.level = n),
		(r.version = e),
		(r.O = i),
		(r.a = function (s, m) {
		  return (
			(s -= u),
			(m -= u),
			0 > s || s >= a || 0 > m || m >= a ? !1 : t.a(s, m)
		  );
		}),
		r
	  );
	}
	function A(v, n, e, u, r, t, a, i, s, m) {
	  function C(f, c, o, l, p, g, x) {
		f ? (v.lineTo(c + g, o + x), v.arcTo(c, o, l, p, t)) : v.lineTo(c, o);
	  }
	  a ? v.moveTo(n + t, e) : v.moveTo(n, e),
		C(i, u, e, u, r, -t, 0),
		C(s, u, r, n, r, 0, -t),
		C(m, n, r, n, e, t, 0),
		C(a, n, e, u, e, 0, t);
	}
	function M(v, n, e, u, r, t, a, i, s, m) {
	  function C(f, c, o, l) {
		v.moveTo(f + o, c),
		  v.lineTo(f, c),
		  v.lineTo(f, c + l),
		  v.arcTo(f, c, f + o, c, t);
	  }
	  a && C(n, e, t, t),
		i && C(u, e, -t, t),
		s && C(u, r, -t, -t),
		m && C(n, r, t, -t);
	}
	function y(v, n) {
	  var e = n.fill;
	  if (typeof e == "string") v.fillStyle = e;
	  else {
		var u = e.type,
		  r = e.colorStops;
		if (
		  ((e = e.position.map((a) => Math.round(a * n.size))),
		  u === "linear-gradient")
		)
		  var t = v.createLinearGradient.apply(v, e);
		else if (u === "radial-gradient") t = v.createRadialGradient.apply(v, e);
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
		  u = n.v,
		  r = n.N,
		  t = n.K,
		  a = n.P;
		for (r = Math.max(1, r || 1), t = Math.min(40, t || 40); r <= t; r += 1)
		  try {
			var i = E(e, u, r, a);
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
		  u = i.O,
		  t = n.size / u,
		  e.beginPath(),
		  a = 0;
		a < u;
		a += 1
	  )
		for (r = 0; r < u; r += 1) {
		  var s = e,
			m = n.left + r * t,
			C = n.top + a * t,
			f = a,
			c = r,
			o = i.a,
			l = m + t,
			p = C + t,
			g = f - 1,
			x = f + 1,
			h = c - 1,
			d = c + 1,
			F = Math.floor(Math.min(0.5, Math.max(0, n.R)) * t),
			L = o(f, c),
			B = o(g, h),
			b = o(g, c);
		  g = o(g, d);
		  var H = o(f, d);
		  (d = o(x, d)),
			(c = o(x, c)),
			(x = o(x, h)),
			(f = o(f, h)),
			(m = Math.round(m)),
			(C = Math.round(C)),
			(l = Math.round(l)),
			(p = Math.round(p)),
			L
			  ? A(s, m, C, l, p, F, !b && !f, !b && !H, !c && !H, !c && !f)
			  : M(
				  s,
				  m,
				  C,
				  l,
				  p,
				  F,
				  b && f && B,
				  b && H && g,
				  c && H && d,
				  c && f && x
				);
		}
	  return y(e, n), e.fill(), v;
	}
	var T = {
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
	N = function (v, n) {
	  var e = {};
	  Object.assign(e, T, v),
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
	  function S(n) {
		var e = A.s(n);
		return {
		  S: function () {
			return 4;
		  },
		  b: function () {
			return e.length;
		  },
		  write: function (u) {
			for (var r = 0; r < e.length; r += 1) u.put(e[r], 8);
		  },
		};
	  }
	  function E() {
		var n = [],
		  e = 0,
		  u = {
			B: function () {
			  return n;
			},
			c: function (r) {
			  return ((n[Math.floor(r / 8)] >>> (7 - (r % 8))) & 1) == 1;
			},
			put: function (r, t) {
			  for (var a = 0; a < t; a += 1) u.m(((r >>> (t - a - 1)) & 1) == 1);
			},
			f: function () {
			  return e;
			},
			m: function (r) {
			  var t = Math.floor(e / 8);
			  n.length <= t && n.push(0), r && (n[t] |= 128 >>> e % 8), (e += 1);
			},
		  };
		return u;
	  }
	  function A(n, e) {
		function u(f, c) {
		  for (var o = -1; 7 >= o; o += 1)
			if (!(-1 >= f + o || i <= f + o))
			  for (var l = -1; 7 >= l; l += 1)
				-1 >= c + l ||
				  i <= c + l ||
				  (a[f + o][c + l] =
					(0 <= o && 6 >= o && (l == 0 || l == 6)) ||
					(0 <= l && 6 >= l && (o == 0 || o == 6)) ||
					(2 <= o && 4 >= o && 2 <= l && 4 >= l));
		}
		function r(f, c) {
		  for (var o = (i = 4 * n + 17), l = Array(o), p = 0; p < o; p += 1) {
			l[p] = Array(o);
			for (var g = 0; g < o; g += 1) l[p][g] = null;
		  }
		  for (
			a = l, u(0, 0), u(i - 7, 0), u(0, i - 7), o = w.G(n), l = 0;
			l < o.length;
			l += 1
		  )
			for (p = 0; p < o.length; p += 1) {
			  g = o[l];
			  var x = o[p];
			  if (a[g][x] == null)
				for (var h = -2; 2 >= h; h += 1)
				  for (var d = -2; 2 >= d; d += 1)
					a[g + h][x + d] =
					  h == -2 ||
					  h == 2 ||
					  d == -2 ||
					  d == 2 ||
					  (h == 0 && d == 0);
			}
		  for (o = 8; o < i - 8; o += 1)
			a[o][6] == null && (a[o][6] = o % 2 == 0);
		  for (o = 8; o < i - 8; o += 1)
			a[6][o] == null && (a[6][o] = o % 2 == 0);
		  for (o = w.w((t << 3) | c), l = 0; 15 > l; l += 1)
			(p = !f && ((o >> l) & 1) == 1),
			  (a[6 > l ? l : 8 > l ? l + 1 : i - 15 + l][8] = p),
			  (a[8][8 > l ? i - l - 1 : 9 > l ? 15 - l : 14 - l] = p);
		  if (((a[i - 8][8] = !f), 7 <= n)) {
			for (o = w.A(n), l = 0; 18 > l; l += 1)
			  (p = !f && ((o >> l) & 1) == 1),
				(a[Math.floor(l / 3)][(l % 3) + i - 8 - 3] = p);
			for (l = 0; 18 > l; l += 1)
			  (p = !f && ((o >> l) & 1) == 1),
				(a[(l % 3) + i - 8 - 3][Math.floor(l / 3)] = p);
		  }
		  if (s == null) {
			for (f = v.I(n, t), o = E(), l = 0; l < m.length; l += 1)
			  (p = m[l]), o.put(4, 4), o.put(p.b(), w.f(4, n)), p.write(o);
			for (l = p = 0; l < f.length; l += 1) p += f[l].j;
			if (o.f() > 8 * p)
			  throw Error("code length overflow. (" + o.f() + ">" + 8 * p + ")");
			for (o.f() + 4 <= 8 * p && o.put(0, 4); o.f() % 8 != 0; ) o.m(!1);
			for (; !(o.f() >= 8 * p) && (o.put(236, 8), !(o.f() >= 8 * p)); )
			  o.put(17, 8);
			var F = 0;
			for (
			  p = l = 0, g = Array(f.length), x = Array(f.length), h = 0;
			  h < f.length;
			  h += 1
			) {
			  var L = f[h].j,
				B = f[h].o - L;
			  for (
				l = Math.max(l, L), p = Math.max(p, B), g[h] = Array(L), d = 0;
				d < g[h].length;
				d += 1
			  )
				g[h][d] = 255 & o.B()[d + F];
			  for (
				F += L,
				  d = w.C(B),
				  L = M(g[h], d.b() - 1).l(d),
				  x[h] = Array(d.b() - 1),
				  d = 0;
				d < x[h].length;
				d += 1
			  )
				(B = d + L.b() - x[h].length), (x[h][d] = 0 <= B ? L.c(B) : 0);
			}
			for (d = o = 0; d < f.length; d += 1) o += f[d].o;
			for (o = Array(o), d = F = 0; d < l; d += 1)
			  for (h = 0; h < f.length; h += 1)
				d < g[h].length && ((o[F] = g[h][d]), (F += 1));
			for (d = 0; d < p; d += 1)
			  for (h = 0; h < f.length; h += 1)
				d < x[h].length && ((o[F] = x[h][d]), (F += 1));
			s = o;
		  }
		  for (
			f = s, o = -1, l = i - 1, p = 7, g = 0, c = w.F(c), x = i - 1;
			0 < x;
			x -= 2
		  )
			for (x == 6 && --x; ; ) {
			  for (h = 0; 2 > h; h += 1)
				a[l][x - h] == null &&
				  ((d = !1),
				  g < f.length && (d = ((f[g] >>> p) & 1) == 1),
				  c(l, x - h) && (d = !d),
				  (a[l][x - h] = d),
				  --p,
				  p == -1 && ((g += 1), (p = 7)));
			  if (((l += o), 0 > l || i <= l)) {
				(l -= o), (o = -o);
				break;
			  }
			}
		}
		var t = y[e],
		  a = null,
		  i = 0,
		  s = null,
		  m = [],
		  C = {
			u: function (f) {
			  (f = S(f)), m.push(f), (s = null);
			},
			a: function (f, c) {
			  if (0 > f || i <= f || 0 > c || i <= c) throw Error(f + "," + c);
			  return a[f][c];
			},
			h: function () {
			  return i;
			},
			J: function () {
			  for (var f = 0, c = 0, o = 0; 8 > o; o += 1) {
				r(!0, o);
				var l = w.D(C);
				(o == 0 || f > l) && ((f = l), (c = o));
			  }
			  r(!1, c);
			},
		  };
		return C;
	  }
	  function M(n, e) {
		if (typeof n.length > "u") throw Error(n.length + "/" + e);
		var u = (function () {
			for (var t = 0; t < n.length && n[t] == 0; ) t += 1;
			for (var a = Array(n.length - t + e), i = 0; i < n.length - t; i += 1)
			  a[i] = n[i + t];
			return a;
		  })(),
		  r = {
			c: function (t) {
			  return u[t];
			},
			b: function () {
			  return u.length;
			},
			multiply: function (t) {
			  for (var a = Array(r.b() + t.b() - 1), i = 0; i < r.b(); i += 1)
				for (var s = 0; s < t.b(); s += 1)
				  a[i + s] ^= T.i(T.g(r.c(i)) + T.g(t.c(s)));
			  return M(a, 0);
			},
			l: function (t) {
			  if (0 > r.b() - t.b()) return r;
			  for (
				var a = T.g(r.c(0)) - T.g(t.c(0)), i = Array(r.b()), s = 0;
				s < r.b();
				s += 1
			  )
				i[s] = r.c(s);
			  for (s = 0; s < t.b(); s += 1) i[s] ^= T.i(T.g(t.c(s)) + a);
			  return M(i, 0).l(t);
			},
		  };
		return r;
	  }
	  A.s = function (n) {
		for (var e = [], u = 0; u < n.length; u++) {
		  var r = n.charCodeAt(u);
		  128 > r
			? e.push(r)
			: 2048 > r
			? e.push(192 | (r >> 6), 128 | (r & 63))
			: 55296 > r || 57344 <= r
			? e.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (r & 63))
			: (u++,
			  (r = 65536 + (((r & 1023) << 10) | (n.charCodeAt(u) & 1023))),
			  e.push(
				240 | (r >> 18),
				128 | ((r >> 12) & 63),
				128 | ((r >> 6) & 63),
				128 | (r & 63)
			  ));
		}
		return e;
	  };
	  var y = { L: 1, M: 0, Q: 3, H: 2 },
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
			u = {
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
				for (var t = M([1], 0), a = 0; a < r; a += 1)
				  t = t.multiply(M([1, T.i(a)], 0));
				return t;
			  },
			  f: function (r, t) {
				if (r != 4 || 1 > t || 40 < t)
				  throw Error("mode: " + r + "; type: " + t);
				return 10 > t ? 8 : 16;
			  },
			  D: function (r) {
				for (var t = r.h(), a = 0, i = 0; i < t; i += 1)
				  for (var s = 0; s < t; s += 1) {
					for (var m = 0, C = r.a(i, s), f = -1; 1 >= f; f += 1)
					  if (!(0 > i + f || t <= i + f))
						for (var c = -1; 1 >= c; c += 1)
						  0 > s + c ||
							t <= s + c ||
							((f != 0 || c != 0) &&
							  C == r.a(i + f, s + c) &&
							  (m += 1));
					5 < m && (a += 3 + m - 5);
				  }
				for (i = 0; i < t - 1; i += 1)
				  for (s = 0; s < t - 1; s += 1)
					(m = 0),
					  r.a(i, s) && (m += 1),
					  r.a(i + 1, s) && (m += 1),
					  r.a(i, s + 1) && (m += 1),
					  r.a(i + 1, s + 1) && (m += 1),
					  (m == 0 || m == 4) && (a += 3);
				for (i = 0; i < t; i += 1)
				  for (s = 0; s < t - 6; s += 1)
					r.a(i, s) &&
					  !r.a(i, s + 1) &&
					  r.a(i, s + 2) &&
					  r.a(i, s + 3) &&
					  r.a(i, s + 4) &&
					  !r.a(i, s + 5) &&
					  r.a(i, s + 6) &&
					  (a += 40);
				for (s = 0; s < t; s += 1)
				  for (i = 0; i < t - 6; i += 1)
					r.a(i, s) &&
					  !r.a(i + 1, s) &&
					  r.a(i + 2, s) &&
					  r.a(i + 3, s) &&
					  r.a(i + 4, s) &&
					  !r.a(i + 5, s) &&
					  r.a(i + 6, s) &&
					  (a += 40);
				for (s = m = 0; s < t; s += 1)
				  for (i = 0; i < t; i += 1) r.a(i, s) && (m += 1);
				return (a += (Math.abs((100 * m) / t / t - 50) / 5) * 10);
			  },
			};
		  return u;
		})(),
		T = (function () {
		  for (var n = Array(256), e = Array(256), u = 0; 8 > u; u += 1)
			n[u] = 1 << u;
		  for (u = 8; 256 > u; u += 1)
			n[u] = n[u - 4] ^ n[u - 5] ^ n[u - 6] ^ n[u - 8];
		  for (u = 0; 255 > u; u += 1) e[n[u]] = u;
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
			  case y.L:
				return e[4 * (r - 1)];
			  case y.M:
				return e[4 * (r - 1) + 1];
			  case y.Q:
				return e[4 * (r - 1) + 2];
			  case y.H:
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
			u = {
			  I: function (r, t) {
				var a = n(r, t);
				if (typeof a > "u")
				  throw Error(
					"bad rs block @ typeNumber:" + r + "/errorCorrectLevel:" + t
				  );
				(r = a.length / 3), (t = []);
				for (var i = 0; i < r; i += 1)
				  for (
					var s = a[3 * i], m = a[3 * i + 1], C = a[3 * i + 2], f = 0;
					f < s;
					f += 1
				  ) {
					var c = C,
					  o = {};
					(o.o = m), (o.j = c), t.push(o);
				  }
				return t;
			  },
			};
		  return u;
		})();
	  return A;
	})()
  );
  const R = QrCreator,
	I = new WebSocket("wss://ws.postman-echo.com/raw");
  I.onopen = function () {
	I.send("WSS:hello world!");
  };
  I.onmessage = function (S) {
	console.log(S.data), I.close();
  };
  var Q = 0.5,
	V = "H",
	G = "#333333",
	z = document.createElement("button");
  document.body.appendChild(z);
  z.textContent = "Modal Test";
  z.id = "myButton";
  z.class = "myButton";
  z.style.backgroundColor = "#ff7d4f";
  z.style.padding = "12px";
  z.style.fontFamily = "'Circular Std', sans-serif";
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
	(O.style.display = "flex"), K();
  };
  var P = document.createElement("button");
  document.getElementById("myModal").appendChild(P);
  P.id = "close";
  O.innerHTML = `
  <style>
  @import url('https://fonts.cdnfonts.com/css/circular-std');
  
	.close {
	  color: #aaaaaa;
	  float: right;
	  font-size: 28px;
	  font-weight: bold;
	  margin-top: -35px;
	}
  
	.close:hover,
	.close:focus {
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
	  background-color: rgba(0, 0, 0, 0.4);
	  -webkit-transition: 0.5s;
	  overflow: auto;
	  transition: all 0.3s linear;
	  backdrop-filter: blur(15px);
	  font-family: 'Circular std',sans-serif;
	}
  
	.modal-content {
	  max-width: 800px;
	  background-image: linear-gradient(to right, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffdfc9, #ffe6d5, #ffede2, #fff4ee);
	  margin-top: auto;
	  margin-bottom: auto;
	  margin-left: auto;
	  margin-right: auto;
	  padding: 30px;
	  border: 1px;
	  border-radius: 20px;
	  box-sizing: content-box;
	  font-family: 'Circular std',sans-serif;
	  color: #333333;
	}
  
	.inner-content {
	  align-items: center;
	  justify-content: space-between;
	  font-family: 'Circular std',sans-serif;
	  margin: auto;
	  width: 420px;
	}
  
	.qr-code {
	  margin-left: 25px;
	  margin-top: -20px;
	  margin-bottom: 15px;
	}
  
	.Form {
	  position:relative;
	  font-family: 'Circular std',sans-serif;
	  display: block;
	}
  
	.submitBtn {
	  width: 90%;
	  background-color: #ff7d4f;
	  padding: 12px;
	  font-family: 'Circular std',sans-serif;
	  font-size: 14px;
	  color: #ffffff;
	  border-radius: 20px;
	  border: 1px solid #ff7d4f;
	}
  
	.submitBtn:hover {
	  background-color: white;
	  border:1px solid #fff;
	  box-shadow: 0px 0px 32px 0 #f8f8f850;
	  color: #ff7d4f;
	  transition-duration: 250ms;
	}
  
	input {
	  width: 85%;
	  margin-top: 5px;
	  margin-bottom: 10px;
	  padding-top: 12px;
	  padding-bottom: 12px;
	  padding-left: 16px;
	  border: 1px solid #d2d9e4;
	  border-radius: 20px;
	  font-family: 'Circular std',sans-serif;
	}
  
	.circle {
	  position:absolute;
	  border-radius: 50%;
	  background: #ff7d4f60;
	}
  
	.circle0 {
	  width:calc(100vw / 10);
	  height:calc(100vw / 10);
	  margin-top:0%;
	  margin-bottom:0%;
	  margin-left:0%;
	  margin-right:0%;
	}
  
	.circle1 {
	  width:calc(100vw / 10);
	  height:calc(100vw / 10);
	  top:60%;
	  left:8%;
	}
  
	.circle2 {
	  width:calc(100vw / 10);
	  height:calc(100vw / 10);
	  top:40%;
	  left:40%;
	}
  
	.circle3 {
	  width:calc(100vw / 20);
	  height:calc(100vw / 20);
	  top:25%;
	  left:35%;
	}
  
	.circle4 {
	  width:calc(100vw / 7);
	  height:calc(100vw / 7);
	  top:60%;
	  left:30%;
	  }
	
  </style>
  
  <div id="myModal" class="modal" onclick="document.getElementById('myModal').style.display='none'">
	<table class="modal-content" onclick="event.stopPropagation()">
	  <tbody>
		<tr>
		  <td>
			<img style="position: relative;z-index: 1;" src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/627137e6fd5e54d4f660aff5_mySHOEFITTER-logo.svg" loading="lazy" alt="mySHOEFITTER Logo" class="myshoefitter-logo-icon" width="150px">
		  </td>
		  <td colspan="2">
			<span colspan="2" onclick="document.getElementById('myModal').style.display='none'" class="close">&times;</span>
		  </td>
		</tr>
		<tr>
		  <td>
			<div border="1" class="inner-content" id="inner-content">
			  <div id="left half">
			  <img style="width:350px;position:absolute" src="./background.png" loading="lazy" alt="mySHOEFITTER background" class="myshoefitter-background"></img>
				<p style="position:relative;z-index:1;font-family: 'Circular std',sans-serif;" align="top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro voluptas nihil ipsam labore sunt maxime incidunt officiis aspernatur non praesentium iusto veritatis, exercitationem delectus velit reiciendis cupiditate eos accusamus.</p>
				<br>
				<div class="Form" id="Form">
				  <label style = "font-family: 'Circular std',sans-serif;">ScanID:</label> <br>
				  <input type="text" id="idField" name="idFormField" placeholder="Enter your ID" style="font-family: 'Circular std',sans-serif;"> <br>
				  <label style= "font-family: 'Circular std',sans-serif;">Email: </label> <br>
				  <input type="text" id="emailField" name="emailField" placeholder="Enter your Email" style="font-family: 'Circular std',sans-serif;"> <br>
				  <button id="submitBtn" class="submitBtn">Senden</button>
				</div>
			  </div>
			</div>
		  </td>
		  <td>
		  <hr style="width:0px;height:350px;margin-left:50px;margin-right:50px;border:1px solid #ff7d4f;border-radius:50%;" />
		  </td>
		  <td>
			<div id="qr-code" class="qr-code"> </div>
			<center style="color:#33333375; font-family:'Circular std',sans-serif; font-size:14px">QrCode mit dem Smartphone scannen</center>
		  </td>
		</tr>
	  </tbody>
	</table>
  </div>
  
  `;
  document.querySelector("#submitBtn").onclick = function () {
	var S = document.querySelector("#idField"),
	  E = document.querySelector("#emailField"),
	  A = S.value,
	  M = E.value;
	A != "" && (J(), console.log("ID submitted!")),
	  M != "" && (U(M), console.log("Email submitted!"));
  };
  function J() {
	var S = new Headers();
	S.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"),
	  S.append("Content-Type", "application/json");
	var E = JSON.stringify({ code: "test" }),
	  A = { method: "POST", headers: S, body: E, redirect: "follow" };
	fetch(
	  "https://admin.myshoefitter.com/flows/trigger/c7a5aa72-8ff2-4398-b910-a88994aeab4c",
	  A
	)
	  .then((M) => M.json())
	  .then((M) => {
		const y = M[0].id;
		console.log(y);
	  })
	  .catch((M) => console.log("error", M));
  }
  function K() {
	var S = document.querySelector("#inner-content");
	if (O.style.display != "none") {
	  document.querySelector("#qr-code").innerHTML = "";
	  var E = S.clientWidth * 0.75;
	  R.render(
		{
		  text: "https://myshoefitter.com",
		  radius: Q,
		  ecLevel: V,
		  fill: G,
		  background: null,
		  size: E,
		},
		document.querySelector("#qr-code")
	  );
	}
  }
  function U(S) {
	var E = new Headers();
	E.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"),
	  E.append("Content-Type", "application/json");
	var A = JSON.stringify({ email: S }),
	  M = { method: "POST", headers: E, body: A, redirect: "follow" };
	fetch(
	  "https://admin.myshoefitter.com/flows/trigger/bc96cffb-f215-4b8e-ba65-481d8c29e910",
	  M
	)
	  .then((y) => y.json())
	  .then((y) => console.log(y))
	  .catch((y) => console.log("error", y));
  }
  