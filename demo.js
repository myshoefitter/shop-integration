(function() {
	const M = document.createElement("link").relList;
	if (M && M.supports && M.supports("modulepreload")) return;
	for (const h of document.querySelectorAll('link[rel="modulepreload"]')) C(h);
	new MutationObserver(h => {
	  for (const b of h)
		if (b.type === "childList")
		  for (const S of b.addedNodes) S.tagName === "LINK" && S.rel === "modulepreload" && C(S)
	}).observe(document, {
	  childList: !0,
	  subtree: !0
	});
  
	function T(h) {
	  const b = {};
	  return h.integrity && (b.integrity = h.integrity), h.referrerPolicy && (b.referrerPolicy = h.referrerPolicy), h.crossOrigin === "use-credentials" ? b.credentials = "include" : h.crossOrigin === "anonymous" ? b.credentials = "omit" : b.credentials = "same-origin", b
	}
  
	function C(h) {
	  if (h.ep) return;
	  h.ep = !0;
	  const b = T(h);
	  fetch(h.href, b)
	}
  })();
  let N = null;
  class P {}
  P.render = function(E, M) {
	N(E, M)
  };
  self.QrCreator = P;
  (function(E) {
	function M(g, i, r, d) {
	  var t = {},
		e = E(r, i);
	  e.u(g), e.J(), d = d || 0;
	  var a = e.h(),
		n = e.h() + 2 * d;
	  return t.text = g, t.level = i, t.version = r, t.O = n, t.a = function(l, y) {
		return l -= d, y -= d, 0 > l || l >= a || 0 > y || y >= a ? !1 : e.a(l, y)
	  }, t
	}
  
	function T(g, i, r, d, t, e, a, n, l, y) {
	  function w(f, u, o, s, p, v, x) {
		f ? (g.lineTo(u + v, o + x), g.arcTo(u, o, s, p, e)) : g.lineTo(u, o)
	  }
	  a ? g.moveTo(i + e, r) : g.moveTo(i, r), w(n, d, r, d, t, -e, 0), w(l, d, t, i, t, 0, -e), w(y, i, t, i, r, e, 0), w(a, i, r, d, r, 0, e)
	}
  
	function C(g, i, r, d, t, e, a, n, l, y) {
	  function w(f, u, o, s) {
		g.moveTo(f + o, u), g.lineTo(f, u), g.lineTo(f, u + s), g.arcTo(f, u, f + o, u, e)
	  }
	  a && w(i, r, e, e), n && w(d, r, -e, e), l && w(d, t, -e, -e), y && w(i, t, e, -e)
	}
  
	function h(g, i) {
	  var r = i.fill;
	  if (typeof r == "string") g.fillStyle = r;
	  else {
		var d = r.type,
		  t = r.colorStops;
		if (r = r.position.map(a => Math.round(a * i.size)), d === "linear-gradient") var e = g.createLinearGradient.apply(g, r);
		else if (d === "radial-gradient") e = g.createRadialGradient.apply(g, r);
		else throw Error("Unsupported fill");
		t.forEach(([a, n]) => {
		  e.addColorStop(a, n)
		}), g.fillStyle = e
	  }
	}
  
	function b(g, i) {
	  t: {
		var r = i.text,
		  d = i.v,
		  t = i.N,
		  e = i.K,
		  a = i.P;
		for (t = Math.max(1, t || 1), e = Math.min(40, e || 40); t <= e; t += 1) try {
		  var n = M(r, d, t, a);
		  break t
		} catch {}
		n = void 0
	  }
	  if (!n) return null;
	  for (r = g.getContext("2d"), i.background && (r.fillStyle = i.background, r.fillRect(i.left, i.top, i.size, i.size)), d = n.O, e = i.size / d, r.beginPath(), a = 0; a < d; a += 1)
		for (t = 0; t < d; t += 1) {
		  var l = r,
			y = i.left + t * e,
			w = i.top + a * e,
			f = a,
			u = t,
			o = n.a,
			s = y + e,
			p = w + e,
			v = f - 1,
			x = f + 1,
			m = u - 1,
			c = u + 1,
			L = Math.floor(Math.min(.5, Math.max(0, i.R)) * e),
			F = o(f, u),
			I = o(v, m),
			H = o(v, u);
		  v = o(v, c);
		  var R = o(f, c);
		  c = o(x, c), u = o(x, u), x = o(x, m), f = o(f, m), y = Math.round(y), w = Math.round(w), s = Math.round(s), p = Math.round(p), F ? T(l, y, w, s, p, L, !H && !f, !H && !R, !u && !R, !u && !f) : C(l, y, w, s, p, L, H && f && I, H && R && v, u && R && c, u && f && x)
		}
	  return h(r, i),
	  r.fill(),
	  g
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
	  radius: .5,
	  quiet: 0
	};
	N = function(g, i) {
	  var r = {};
	  Object.assign(r, S, g), r.N = r.minVersion, r.K = r.maxVersion, r.v = r.ecLevel, r.left = r.left, r.top = r.top, r.size = r.size, r.fill = r.fill, r.background = r.background, r.text = r.text, r.R = r.radius, r.P = r.quiet, i instanceof HTMLCanvasElement ? ((i.width !== r.size || i.height !== r.size) && (i.width = r.size, i.height = r.size), i.getContext("2d").clearRect(0, 0, i.width, i.height), b(i, r)) : (g = document.createElement("canvas"), g.width = r.size, g.height = r.size, r = b(g, r), i.appendChild(r))
	}
  })(function() {
	function E(i) {
	  var r = T.s(i);
	  return {
		S: function() {
		  return 4
		},
		b: function() {
		  return r.length
		},
		write: function(d) {
		  for (var t = 0; t < r.length; t += 1) d.put(r[t], 8)
		}
	  }
	}
  
	function M() {
	  var i = [],
		r = 0,
		d = {
		  B: function() {
			return i
		  },
		  c: function(t) {
			return (i[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1
		  },
		  put: function(t, e) {
			for (var a = 0; a < e; a += 1) d.m((t >>> e - a - 1 & 1) == 1)
		  },
		  f: function() {
			return r
		  },
		  m: function(t) {
			var e = Math.floor(r / 8);
			i.length <= e && i.push(0), t && (i[e] |= 128 >>> r % 8), r += 1
		  }
		};
	  return d
	}
  
	function T(i, r) {
	  function d(f, u) {
		for (var o = -1; 7 >= o; o += 1)
		  if (!(-1 >= f + o || n <= f + o))
			for (var s = -1; 7 >= s; s += 1) - 1 >= u + s || n <= u + s || (a[f + o][u + s] = 0 <= o && 6 >= o && (s == 0 || s == 6) || 0 <= s && 6 >= s && (o == 0 || o == 6) || 2 <= o && 4 >= o && 2 <= s && 4 >= s)
	  }
  
	  function t(f, u) {
		for (var o = n = 4 * i + 17, s = Array(o), p = 0; p < o; p += 1) {
		  s[p] = Array(o);
		  for (var v = 0; v < o; v += 1) s[p][v] = null
		}
		for (a = s, d(0, 0), d(n - 7, 0), d(0, n - 7), o = b.G(i), s = 0; s < o.length; s += 1)
		  for (p = 0; p < o.length; p += 1) {
			v = o[s];
			var x = o[p];
			if (a[v][x] == null)
			  for (var m = -2; 2 >= m; m += 1)
				for (var c = -2; 2 >= c; c += 1) a[v + m][x + c] = m == -2 || m == 2 || c == -2 || c == 2 || m == 0 && c == 0
		  }
		for (o = 8; o < n - 8; o += 1) a[o][6] == null && (a[o][6] = o % 2 == 0);
		for (o = 8; o < n - 8; o += 1) a[6][o] == null && (a[6][o] = o % 2 == 0);
		for (o = b.w(e << 3 | u), s = 0; 15 > s; s += 1) p = !f && (o >> s & 1) == 1, a[6 > s ? s : 8 > s ? s + 1 : n - 15 + s][8] = p, a[8][8 > s ? n - s - 1 : 9 > s ? 15 - s : 14 - s] = p;
		if (a[n - 8][8] = !f, 7 <= i) {
		  for (o = b.A(i), s = 0; 18 > s; s += 1) p = !f && (o >> s & 1) == 1, a[Math.floor(s / 3)][s % 3 + n - 8 - 3] = p;
		  for (s = 0; 18 > s; s += 1) p = !f && (o >> s & 1) == 1, a[s % 3 + n - 8 - 3][Math.floor(s / 3)] = p
		}
		if (l == null) {
		  for (f = g.I(i, e), o = M(), s = 0; s < y.length; s += 1) p = y[s], o.put(4, 4), o.put(p.b(), b.f(4, i)), p.write(o);
		  for (s = p = 0; s < f.length; s += 1) p += f[s].j;
		  if (o.f() > 8 * p) throw Error("code length overflow. (" + o.f() + ">" + 8 * p + ")");
		  for (o.f() + 4 <= 8 * p && o.put(0, 4); o.f() % 8 != 0;) o.m(!1);
		  for (; !(o.f() >= 8 * p) && (o.put(236, 8), !(o.f() >= 8 * p));) o.put(17, 8);
		  var L = 0;
		  for (p = s = 0, v = Array(f.length), x = Array(f.length), m = 0; m < f.length; m += 1) {
			var F = f[m].j,
			  I = f[m].o - F;
			for (s = Math.max(s, F), p = Math.max(p, I), v[m] = Array(F), c = 0; c < v[m].length; c += 1) v[m][c] = 255 & o.B()[c + L];
			for (L += F, c = b.C(I), F = C(v[m], c.b() - 1).l(c), x[m] = Array(c.b() - 1), c = 0; c < x[m].length; c += 1) I = c + F.b() - x[m].length, x[m][c] = 0 <= I ? F.c(I) : 0
		  }
		  for (c = o = 0; c < f.length; c += 1) o += f[c].o;
		  for (o = Array(o), c = L = 0; c < s; c += 1)
			for (m = 0; m < f.length; m += 1) c < v[m].length && (o[L] = v[m][c], L += 1);
		  for (c = 0; c < p; c += 1)
			for (m = 0; m < f.length; m += 1) c < x[m].length && (o[L] = x[m][c], L += 1);
		  l = o
		}
		for (f = l, o = -1, s = n - 1, p = 7, v = 0, u = b.F(u), x = n - 1; 0 < x; x -= 2)
		  for (x == 6 && --x;;) {
			for (m = 0; 2 > m; m += 1) a[s][x - m] == null && (c = !1, v < f.length && (c = (f[v] >>> p & 1) == 1), u(s, x - m) && (c = !c), a[s][x - m] = c, --p, p == -1 && (v += 1, p = 7));
			if (s += o, 0 > s || n <= s) {
			  s -= o, o = -o;
			  break
			}
		  }
	  }
	  var e = h[r],
		a = null,
		n = 0,
		l = null,
		y = [],
		w = {
		  u: function(f) {
			f = E(f), y.push(f), l = null
		  },
		  a: function(f, u) {
			if (0 > f || n <= f || 0 > u || n <= u) throw Error(f + "," + u);
			return a[f][u]
		  },
		  h: function() {
			return n
		  },
		  J: function() {
			for (var f = 0, u = 0, o = 0; 8 > o; o += 1) {
			  t(!0, o);
			  var s = b.D(w);
			  (o == 0 || f > s) && (f = s, u = o)
			}
			t(!1, u)
		  }
		};
	  return w
	}
  
	function C(i, r) {
	  if (typeof i.length > "u") throw Error(i.length + "/" + r);
	  var d = function() {
		  for (var e = 0; e < i.length && i[e] == 0;) e += 1;
		  for (var a = Array(i.length - e + r), n = 0; n < i.length - e; n += 1) a[n] = i[n + e];
		  return a
		}(),
		t = {
		  c: function(e) {
			return d[e]
		  },
		  b: function() {
			return d.length
		  },
		  multiply: function(e) {
			for (var a = Array(t.b() + e.b() - 1), n = 0; n < t.b(); n += 1)
			  for (var l = 0; l < e.b(); l += 1) a[n + l] ^= S.i(S.g(t.c(n)) + S.g(e.c(l)));
			return C(a, 0)
		  },
		  l: function(e) {
			if (0 > t.b() - e.b()) return t;
			for (var a = S.g(t.c(0)) - S.g(e.c(0)), n = Array(t.b()), l = 0; l < t.b(); l += 1) n[l] = t.c(l);
			for (l = 0; l < e.b(); l += 1) n[l] ^= S.i(S.g(e.c(l)) + a);
			return C(n, 0).l(e)
		  }
		};
	  return t
	}
	T.s = function(i) {
	  for (var r = [], d = 0; d < i.length; d++) {
		var t = i.charCodeAt(d);
		128 > t ? r.push(t) : 2048 > t ? r.push(192 | t >> 6, 128 | t & 63) : 55296 > t || 57344 <= t ? r.push(224 | t >> 12, 128 | t >> 6 & 63, 128 | t & 63) : (d++, t = 65536 + ((t & 1023) << 10 | i.charCodeAt(d) & 1023), r.push(240 | t >> 18, 128 | t >> 12 & 63, 128 | t >> 6 & 63, 128 | t & 63))
	  }
	  return r
	};
	var h = {
		L: 1,
		M: 0,
		Q: 3,
		H: 2
	  },
	  b = function() {
		function i(t) {
		  for (var e = 0; t != 0;) e += 1, t >>>= 1;
		  return e
		}
		var r = [
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
			[6, 30, 58, 86, 114, 142, 170]
		  ],
		  d = {
			w: function(t) {
			  for (var e = t << 10; 0 <= i(e) - i(1335);) e ^= 1335 << i(e) - i(1335);
			  return (t << 10 | e) ^ 21522
			},
			A: function(t) {
			  for (var e = t << 12; 0 <= i(e) - i(7973);) e ^= 7973 << i(e) - i(7973);
			  return t << 12 | e
			},
			G: function(t) {
			  return r[t - 1]
			},
			F: function(t) {
			  switch (t) {
				case 0:
				  return function(e, a) {
					return (e + a) % 2 == 0
				  };
				case 1:
				  return function(e) {
					return e % 2 == 0
				  };
				case 2:
				  return function(e, a) {
					return a % 3 == 0
				  };
				case 3:
				  return function(e, a) {
					return (e + a) % 3 == 0
				  };
				case 4:
				  return function(e, a) {
					return (Math.floor(e / 2) + Math.floor(a / 3)) % 2 == 0
				  };
				case 5:
				  return function(e, a) {
					return e * a % 2 + e * a % 3 == 0
				  };
				case 6:
				  return function(e, a) {
					return (e * a % 2 + e * a % 3) % 2 == 0
				  };
				case 7:
				  return function(e, a) {
					return (e * a % 3 + (e + a) % 2) % 2 == 0
				  };
				default:
				  throw Error("bad maskPattern:" + t)
			  }
			},
			C: function(t) {
			  for (var e = C([1], 0), a = 0; a < t; a += 1) e = e.multiply(C([1, S.i(a)], 0));
			  return e
			},
			f: function(t, e) {
			  if (t != 4 || 1 > e || 40 < e) throw Error("mode: " + t + "; type: " + e);
			  return 10 > e ? 8 : 16
			},
			D: function(t) {
			  for (var e = t.h(), a = 0, n = 0; n < e; n += 1)
				for (var l = 0; l < e; l += 1) {
				  for (var y = 0, w = t.a(n, l), f = -1; 1 >= f; f += 1)
					if (!(0 > n + f || e <= n + f))
					  for (var u = -1; 1 >= u; u += 1) 0 > l + u || e <= l + u || (f != 0 || u != 0) && w == t.a(n + f, l + u) && (y += 1);
				  5 < y && (a += 3 + y - 5)
				}
			  for (n = 0; n < e - 1; n += 1)
				for (l = 0; l < e - 1; l += 1) y = 0, t.a(n, l) && (y += 1), t.a(n + 1, l) && (y += 1), t.a(n, l + 1) && (y += 1), t.a(n + 1, l + 1) && (y += 1), (y == 0 || y == 4) && (a += 3);
			  for (n = 0; n < e; n += 1)
				for (l = 0; l < e - 6; l += 1) t.a(n, l) && !t.a(n, l + 1) && t.a(n, l + 2) && t.a(n, l + 3) && t.a(n, l + 4) && !t.a(n, l + 5) && t.a(n, l + 6) && (a += 40);
			  for (l = 0; l < e; l += 1)
				for (n = 0; n < e - 6; n += 1) t.a(n, l) && !t.a(n + 1, l) && t.a(n + 2, l) && t.a(n + 3, l) && t.a(n + 4, l) && !t.a(n + 5, l) && t.a(n + 6, l) && (a += 40);
			  for (l = y = 0; l < e; l += 1)
				for (n = 0; n < e; n += 1) t.a(n, l) && (y += 1);
			  return a += Math.abs(100 * y / e / e - 50) / 5 * 10
			}
		  };
		return d
	  }(),
	  S = function() {
		for (var i = Array(256), r = Array(256), d = 0; 8 > d; d += 1) i[d] = 1 << d;
		for (d = 8; 256 > d; d += 1) i[d] = i[d - 4] ^ i[d - 5] ^ i[d - 6] ^ i[d - 8];
		for (d = 0; 255 > d; d += 1) r[i[d]] = d;
		return {
		  g: function(t) {
			if (1 > t) throw Error("glog(" + t + ")");
			return r[t]
		  },
		  i: function(t) {
			for (; 0 > t;) t += 255;
			for (; 256 <= t;) t -= 255;
			return i[t]
		  }
		}
	  }(),
	  g = function() {
		function i(t, e) {
		  switch (e) {
			case h.L:
			  return r[4 * (t - 1)];
			case h.M:
			  return r[4 * (t - 1) + 1];
			case h.Q:
			  return r[4 * (t - 1) + 2];
			case h.H:
			  return r[4 * (t - 1) + 3]
		  }
		}
		var r = [
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
			[20, 45, 15, 61, 46, 16]
		  ],
		  d = {
			I: function(t, e) {
			  var a = i(t, e);
			  if (typeof a > "u") throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
			  t = a.length / 3, e = [];
			  for (var n = 0; n < t; n += 1)
				for (var l = a[3 * n], y = a[3 * n + 1], w = a[3 * n + 2], f = 0; f < l; f += 1) {
				  var u = w,
					o = {};
				  o.o = y, o.j = u, e.push(o)
				}
			  return e
			}
		  };
		return d
	  }();
	return T
  }());
  const K = QrCreator,
	j = new WebSocket("wss://ws.postman-echo.com/raw");
  j.onopen = function() {
	j.send("WSS:hello world!")
  };
  j.onmessage = function(E) {
	console.log(E.data), j.close()
  };
  var U = .5,
	W = "H",
	D = "#333333",
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
  var A = document.createElement("div");
  document.body.appendChild(A);
  A.id = "myModal";
  A.style.display = "none";
  z.onclick = function() {
	A.style.display = "flex", V()
  };
  var Q = document.createElement("button");
  document.getElementById("myModal").appendChild(Q);
  Q.id = "close";
  A.innerHTML = `
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
  </style>
  
  <div id="myModal" class="modal" onclick="document.getElementById('myModal').style.display='none'">
	<table class="modal-content" onclick="event.stopPropagation()">
	  <tbody>
		<tr>
		  <td>
			<img style="position: relative;z-index: 1;" src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/627137e6fd5e54d4f660aff5_mySHOEFITTER-logo.svg" alt="mySHOEFITTER Logo" class="myshoefitter-logo-icon" width="150px">
		  </td>
		  <td colspan="2">
			<span colspan="2" onclick="document.getElementById('myModal').style.display='none'" class="close">&times;</span>
		  </td>
		</tr>
		<tr>
		  <td>
			<div border="1" class="inner-content" id="inner-content">
			  <div id="left half">
			  <img style="width:350px;position:absolute" src="./background.png" alt="mySHOEFITTER background" class="myshoefitter-background"></img>
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
  document.querySelector("#submitBtn").onclick = function() {
	var E = document.querySelector("#idField"),
	  M = document.querySelector("#emailField"),
	  T = E.value,
	  C = M.value;
	T != "" && (_(), console.log("ID submitted!")), C != "" && ($(C), console.log("Email submitted!"))
  };
  
  function _() {
	var E = new Headers;
	E.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"), E.append("Content-Type", "application/json");
	var M = JSON.stringify({
		code: "test"
	  }),
	  T = {
		method: "POST",
		headers: E,
		body: M,
		redirect: "follow"
	  };
	fetch("https://admin.myshoefitter.com/flows/trigger/c7a5aa72-8ff2-4398-b910-a88994aeab4c", T).then(C => C.json()).then(C => {
	  const h = C[0].id;
	  console.log(h)
	}).catch(C => console.log("error", C))
  }
  
  function V() {
	var E = document.querySelector("#inner-content");
	if (A.style.display != "none") {
	  document.querySelector("#qr-code").innerHTML = "";
	  var M = E.clientWidth * .75;
	  K.render({
		text: "https://myshoefitter.com",
		radius: U,
		ecLevel: W,
		fill: D,
		background: null,
		size: M
	  }, document.querySelector("#qr-code"))
	}
  }
  
  function $(E) {
	var M = new Headers;
	M.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"), M.append("Content-Type", "application/json");
	var T = JSON.stringify({
		email: E
	  }),
	  C = {
		method: "POST",
		headers: M,
		body: T,
		redirect: "follow"
	  };
	fetch("https://admin.myshoefitter.com/flows/trigger/bc96cffb-f215-4b8e-ba65-481d8c29e910", C).then(h => h.json()).then(h => console.log(h)).catch(h => console.log("error", h))
  }
  var B = document.createElement("button");
  document.body.appendChild(B);
  B.textContent = "FirstModal Test";
  B.id = "firstButton";
  B.class = "firstButton";
  B.style.backgroundColor = "#ff7d4f";
  B.style.padding = "12px";
  B.style.fontFamily = "'Circular Std', sans-serif";
  B.style.fontSize = "16px";
  B.style.color = "#ffffff";
  B.style.borderRadius = "10px";
  B.style.border = "1px solid #ff7d4f";
  B.style.left = "40%";
  B.style.top = "50%";
  B.style.position = "absolute";
  var O = document.createElement("div");
  document.body.appendChild(O);
  O.id = "firstModal";
  O.style.display = "none";
  B.onclick = function() {
	O.style.display = "flex"
  };
  var G = document.createElement("button");
  document.getElementById("firstModal").appendChild(G);
  G.id = "firstclose";
  var J = document.createElement("button");
  document.getElementById("firstModal").appendChild(J);
  J.id = "continueBtn";
  document.querySelector("#continueBtn").addEventListener("onclick", X);
  
  function X() {
	document.getElementById("firstModal").style.display = "none", document.getElementById("myModal").style.display = "flex", V()
  }
  O.innerHTML = `
  <style>
  @import url('https://fonts.cdnfonts.com/css/circular-std');
  
	.firstclose {
	  color: #aaaaaa;
	  float: right;
	  font-size: 28px;
	  font-weight: bold;
	  margin-top: -35px;
	  margin-left: -20px;
	}
  
	.firstclose:hover,
	.firstclose:focus {
	  color: #000;
	  text-decoration: none;
	  cursor: pointer;
	}
  
	.firstModal {
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
  
	.firstmodal-content {
	  width:1000px;
	  background-image: linear-gradient(to right, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffdfc9, #ffe6d5, #ffede2, #fff4ee);
	  margin-top: auto;
	  margin-bottom: auto;
	  margin-left: auto;
	  margin-right: auto;
	  padding: 30px;
	  padding-right:50px;
	  padding-left:50px;
	  border: 1px;
	  border-radius: 20px;
	  box-sizing: content-box;
	  font-family: 'Circular std',sans-serif;
	  color: #333333;
	}
  
	.continueBtn {
	  width: 90%;
	  background-color: #ff7d4f;
	  padding: 12px;
	  font-family: 'Circular std',sans-serif;
	  font-size: 14px;
	  color: #ffffff;
	  border-radius: 20px;
	  border: 1px solid #ff7d4f;
	}
  
	.continueBtn:hover {
	  background-color: white;
	  border:1px solid #fff;
	  box-shadow: 0px 0px 32px 0 #f8f8f850;
	  color: #ff7d4f;
	  transition-duration: 250ms;
	}
  
  </style>
  
  <div id="firstModal" class="firstModal" onclick="document.getElementById('firstModal').style.display='none'">
	<table class="firstmodal-content" onclick="event.stopPropagation()">
	  <tbody>
		<tr>
		  <td>
			<img style="position: relative;z-index: 1;" src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/627137e6fd5e54d4f660aff5_mySHOEFITTER-logo.svg" alt="mySHOEFITTER Logo" class="myshoefitter-logo-icon" width="150px">
		  </td>
		  <td colspan="4">
			<span colspan="4" onclick="document.getElementById('firstModal').style.display='none'" class="firstclose">&times;</span>
		  </td>
		</tr>
  
		<tr>
		  <td>
			<p style="position:relative;z-index:1;font-family: 'Circular std',sans-serif;" align="top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro voluptas nihil ipsam labore sunt maxime incidunt officiis aspernatur non praesentium iusto veritatis, exercitationem delectus velit reiciendis cupiditate eos accusamus.</p>
		  </td>
  
		  <td>
			<hr style="width:0px;height:350px;margin-left:50px;margin-right:50px;border:1px solid #ff7d4f;border-radius:50%;" />
		  </td>
  
		  <td>
			<p style="position:relative;z-index:1;font-family: 'Circular std',sans-serif;" align="top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro voluptas nihil ipsam labore sunt maxime incidunt officiis aspernatur non praesentium iusto veritatis, exercitationem delectus velit reiciendis cupiditate eos accusamus.</p>
		  </td>
  
		  <td>
			<hr style="width:0px;height:350px;margin-left:50px;margin-right:50px;border:1px solid #ff7d4f;border-radius:50%;" />
		  </td>
  
		  <td>
			<p style="position:relative;z-index:1;font-family: 'Circular std',sans-serif;" align="top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro voluptas nihil ipsam labore sunt maxime incidunt officiis aspernatur non praesentium iusto veritatis, exercitationem delectus velit reiciendis cupiditate eos accusamus.</p>
		  </td>
		</tr>
			
		   tr>
		   <td></td><td></td>
			<td colspan="5" style = "display: flex;justify-content: center;width:100%" >
			  <button id="continueBtn" class="continueBtn" onclick="return X();">Fortfahren</button>
			</td>
			<td></td><td></td>
		  </tr>
  
	  </tbody>
	</table>
  </div>
  `;
  