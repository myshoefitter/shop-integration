(function() {
	const e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
	new MutationObserver(s => {
	  for (const l of s)
		if (l.type === "childList")
		  for (const m of l.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && r(m)
	}).observe(document, {
	  childList: !0,
	  subtree: !0
	});
  
	function t(s) {
	  const l = {};
	  return s.integrity && (l.integrity = s.integrity), s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? l.credentials = "include" : s.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
	}
  
	function r(s) {
	  if (s.ep) return;
	  s.ep = !0;
	  const l = t(s);
	  fetch(s.href, l)
	}
  })();
  let we = null;
  class Ee {}
  Ee.render = function(n, e) {
	we(n, e)
  };
  self.QrCreator = Ee;
  (function(n) {
	function e(v, a, c, p) {
	  var o = {},
		i = n(c, a);
	  i.u(v), i.J(), p = p || 0;
	  var h = i.h(),
		f = i.h() + 2 * p;
	  return o.text = v, o.level = a, o.version = c, o.O = f, o.a = function(y, _) {
		return y -= p, _ -= p, 0 > y || y >= h || 0 > _ || _ >= h ? !1 : i.a(y, _)
	  }, o
	}
  
	function t(v, a, c, p, o, i, h, f, y, _) {
	  function A(g, b, u, d, w, S, B) {
		g ? (v.lineTo(b + S, u + B), v.arcTo(b, u, d, w, i)) : v.lineTo(b, u)
	  }
	  h ? v.moveTo(a + i, c) : v.moveTo(a, c), A(f, p, c, p, o, -i, 0), A(y, p, o, a, o, 0, -i), A(_, a, o, a, c, i, 0), A(h, a, c, p, c, 0, i)
	}
  
	function r(v, a, c, p, o, i, h, f, y, _) {
	  function A(g, b, u, d) {
		v.moveTo(g + u, b), v.lineTo(g, b), v.lineTo(g, b + d), v.arcTo(g, b, g + u, b, i)
	  }
	  h && A(a, c, i, i), f && A(p, c, -i, i), y && A(p, o, -i, -i), _ && A(a, o, i, -i)
	}
  
	function s(v, a) {
	  var c = a.fill;
	  if (typeof c == "string") v.fillStyle = c;
	  else {
		var p = c.type,
		  o = c.colorStops;
		if (c = c.position.map(h => Math.round(h * a.size)), p === "linear-gradient") var i = v.createLinearGradient.apply(v, c);
		else if (p === "radial-gradient") i = v.createRadialGradient.apply(v, c);
		else throw Error("Unsupported fill");
		o.forEach(([h, f]) => {
		  i.addColorStop(h, f)
		}), v.fillStyle = i
	  }
	}
  
	function l(v, a) {
	  e: {
		var c = a.text,
		  p = a.v,
		  o = a.N,
		  i = a.K,
		  h = a.P;
		for (o = Math.max(1, o || 1), i = Math.min(40, i || 40); o <= i; o += 1) try {
		  var f = e(c, p, o, h);
		  break e
		} catch {}
		f = void 0
	  }
	  if (!f) return null;
	  for (c = v.getContext("2d"), a.background && (c.fillStyle = a.background, c.fillRect(a.left, a.top, a.size, a.size)), p = f.O, i = a.size / p, c.beginPath(), h = 0; h < p; h += 1)
		for (o = 0; o < p; o += 1) {
		  var y = c,
			_ = a.left + o * i,
			A = a.top + h * i,
			g = h,
			b = o,
			u = f.a,
			d = _ + i,
			w = A + i,
			S = g - 1,
			B = g + 1,
			E = b - 1,
			x = b + 1,
			N = Math.floor(Math.min(.5, Math.max(0, a.R)) * i),
			I = u(g, b),
			F = u(S, E),
			U = u(S, b);
		  S = u(S, x);
		  var K = u(g, x);
		  x = u(B, x), b = u(B, b), B = u(B, E), g = u(g, E), _ = Math.round(_), A = Math.round(A), d = Math.round(d), w = Math.round(w), I ? t(y, _, A, d, w, N, !U && !g, !U && !K, !b && !K, !b && !g) : r(y, _, A, d, w, N, U && g && F, U && K && S, b && K && x, b && g && B)
		}
	  return s(c, a),
	  c.fill(),
	  v
	}
	var m = {
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
	we = function(v, a) {
	  var c = {};
	  Object.assign(c, m, v), c.N = c.minVersion, c.K = c.maxVersion, c.v = c.ecLevel, c.left = c.left, c.top = c.top, c.size = c.size, c.fill = c.fill, c.background = c.background, c.text = c.text, c.R = c.radius, c.P = c.quiet, a instanceof HTMLCanvasElement ? ((a.width !== c.size || a.height !== c.size) && (a.width = c.size, a.height = c.size), a.getContext("2d").clearRect(0, 0, a.width, a.height), l(a, c)) : (v = document.createElement("canvas"), v.width = c.size, v.height = c.size, c = l(v, c), a.appendChild(c))
	}
  })(function() {
	function n(a) {
	  var c = t.s(a);
	  return {
		S: function() {
		  return 4
		},
		b: function() {
		  return c.length
		},
		write: function(p) {
		  for (var o = 0; o < c.length; o += 1) p.put(c[o], 8)
		}
	  }
	}
  
	function e() {
	  var a = [],
		c = 0,
		p = {
		  B: function() {
			return a
		  },
		  c: function(o) {
			return (a[Math.floor(o / 8)] >>> 7 - o % 8 & 1) == 1
		  },
		  put: function(o, i) {
			for (var h = 0; h < i; h += 1) p.m((o >>> i - h - 1 & 1) == 1)
		  },
		  f: function() {
			return c
		  },
		  m: function(o) {
			var i = Math.floor(c / 8);
			a.length <= i && a.push(0), o && (a[i] |= 128 >>> c % 8), c += 1
		  }
		};
	  return p
	}
  
	function t(a, c) {
	  function p(g, b) {
		for (var u = -1; 7 >= u; u += 1)
		  if (!(-1 >= g + u || f <= g + u))
			for (var d = -1; 7 >= d; d += 1) - 1 >= b + d || f <= b + d || (h[g + u][b + d] = 0 <= u && 6 >= u && (d == 0 || d == 6) || 0 <= d && 6 >= d && (u == 0 || u == 6) || 2 <= u && 4 >= u && 2 <= d && 4 >= d)
	  }
  
	  function o(g, b) {
		for (var u = f = 4 * a + 17, d = Array(u), w = 0; w < u; w += 1) {
		  d[w] = Array(u);
		  for (var S = 0; S < u; S += 1) d[w][S] = null
		}
		for (h = d, p(0, 0), p(f - 7, 0), p(0, f - 7), u = l.G(a), d = 0; d < u.length; d += 1)
		  for (w = 0; w < u.length; w += 1) {
			S = u[d];
			var B = u[w];
			if (h[S][B] == null)
			  for (var E = -2; 2 >= E; E += 1)
				for (var x = -2; 2 >= x; x += 1) h[S + E][B + x] = E == -2 || E == 2 || x == -2 || x == 2 || E == 0 && x == 0
		  }
		for (u = 8; u < f - 8; u += 1) h[u][6] == null && (h[u][6] = u % 2 == 0);
		for (u = 8; u < f - 8; u += 1) h[6][u] == null && (h[6][u] = u % 2 == 0);
		for (u = l.w(i << 3 | b), d = 0; 15 > d; d += 1) w = !g && (u >> d & 1) == 1, h[6 > d ? d : 8 > d ? d + 1 : f - 15 + d][8] = w, h[8][8 > d ? f - d - 1 : 9 > d ? 15 - d : 14 - d] = w;
		if (h[f - 8][8] = !g, 7 <= a) {
		  for (u = l.A(a), d = 0; 18 > d; d += 1) w = !g && (u >> d & 1) == 1, h[Math.floor(d / 3)][d % 3 + f - 8 - 3] = w;
		  for (d = 0; 18 > d; d += 1) w = !g && (u >> d & 1) == 1, h[d % 3 + f - 8 - 3][Math.floor(d / 3)] = w
		}
		if (y == null) {
		  for (g = v.I(a, i), u = e(), d = 0; d < _.length; d += 1) w = _[d], u.put(4, 4), u.put(w.b(), l.f(4, a)), w.write(u);
		  for (d = w = 0; d < g.length; d += 1) w += g[d].j;
		  if (u.f() > 8 * w) throw Error("code length overflow. (" + u.f() + ">" + 8 * w + ")");
		  for (u.f() + 4 <= 8 * w && u.put(0, 4); u.f() % 8 != 0;) u.m(!1);
		  for (; !(u.f() >= 8 * w) && (u.put(236, 8), !(u.f() >= 8 * w));) u.put(17, 8);
		  var N = 0;
		  for (w = d = 0, S = Array(g.length), B = Array(g.length), E = 0; E < g.length; E += 1) {
			var I = g[E].j,
			  F = g[E].o - I;
			for (d = Math.max(d, I), w = Math.max(w, F), S[E] = Array(I), x = 0; x < S[E].length; x += 1) S[E][x] = 255 & u.B()[x + N];
			for (N += I, x = l.C(F), I = r(S[E], x.b() - 1).l(x), B[E] = Array(x.b() - 1), x = 0; x < B[E].length; x += 1) F = x + I.b() - B[E].length, B[E][x] = 0 <= F ? I.c(F) : 0
		  }
		  for (x = u = 0; x < g.length; x += 1) u += g[x].o;
		  for (u = Array(u), x = N = 0; x < d; x += 1)
			for (E = 0; E < g.length; E += 1) x < S[E].length && (u[N] = S[E][x], N += 1);
		  for (x = 0; x < w; x += 1)
			for (E = 0; E < g.length; E += 1) x < B[E].length && (u[N] = B[E][x], N += 1);
		  y = u
		}
		for (g = y, u = -1, d = f - 1, w = 7, S = 0, b = l.F(b), B = f - 1; 0 < B; B -= 2)
		  for (B == 6 && --B;;) {
			for (E = 0; 2 > E; E += 1) h[d][B - E] == null && (x = !1, S < g.length && (x = (g[S] >>> w & 1) == 1), b(d, B - E) && (x = !x), h[d][B - E] = x, --w, w == -1 && (S += 1, w = 7));
			if (d += u, 0 > d || f <= d) {
			  d -= u, u = -u;
			  break
			}
		  }
	  }
	  var i = s[c],
		h = null,
		f = 0,
		y = null,
		_ = [],
		A = {
		  u: function(g) {
			g = n(g), _.push(g), y = null
		  },
		  a: function(g, b) {
			if (0 > g || f <= g || 0 > b || f <= b) throw Error(g + "," + b);
			return h[g][b]
		  },
		  h: function() {
			return f
		  },
		  J: function() {
			for (var g = 0, b = 0, u = 0; 8 > u; u += 1) {
			  o(!0, u);
			  var d = l.D(A);
			  (u == 0 || g > d) && (g = d, b = u)
			}
			o(!1, b)
		  }
		};
	  return A
	}
  
	function r(a, c) {
	  if (typeof a.length > "u") throw Error(a.length + "/" + c);
	  var p = function() {
		  for (var i = 0; i < a.length && a[i] == 0;) i += 1;
		  for (var h = Array(a.length - i + c), f = 0; f < a.length - i; f += 1) h[f] = a[f + i];
		  return h
		}(),
		o = {
		  c: function(i) {
			return p[i]
		  },
		  b: function() {
			return p.length
		  },
		  multiply: function(i) {
			for (var h = Array(o.b() + i.b() - 1), f = 0; f < o.b(); f += 1)
			  for (var y = 0; y < i.b(); y += 1) h[f + y] ^= m.i(m.g(o.c(f)) + m.g(i.c(y)));
			return r(h, 0)
		  },
		  l: function(i) {
			if (0 > o.b() - i.b()) return o;
			for (var h = m.g(o.c(0)) - m.g(i.c(0)), f = Array(o.b()), y = 0; y < o.b(); y += 1) f[y] = o.c(y);
			for (y = 0; y < i.b(); y += 1) f[y] ^= m.i(m.g(i.c(y)) + h);
			return r(f, 0).l(i)
		  }
		};
	  return o
	}
	t.s = function(a) {
	  for (var c = [], p = 0; p < a.length; p++) {
		var o = a.charCodeAt(p);
		128 > o ? c.push(o) : 2048 > o ? c.push(192 | o >> 6, 128 | o & 63) : 55296 > o || 57344 <= o ? c.push(224 | o >> 12, 128 | o >> 6 & 63, 128 | o & 63) : (p++, o = 65536 + ((o & 1023) << 10 | a.charCodeAt(p) & 1023), c.push(240 | o >> 18, 128 | o >> 12 & 63, 128 | o >> 6 & 63, 128 | o & 63))
	  }
	  return c
	};
	var s = {
		L: 1,
		M: 0,
		Q: 3,
		H: 2
	  },
	  l = function() {
		function a(o) {
		  for (var i = 0; o != 0;) i += 1, o >>>= 1;
		  return i
		}
		var c = [
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
		  p = {
			w: function(o) {
			  for (var i = o << 10; 0 <= a(i) - a(1335);) i ^= 1335 << a(i) - a(1335);
			  return (o << 10 | i) ^ 21522
			},
			A: function(o) {
			  for (var i = o << 12; 0 <= a(i) - a(7973);) i ^= 7973 << a(i) - a(7973);
			  return o << 12 | i
			},
			G: function(o) {
			  return c[o - 1]
			},
			F: function(o) {
			  switch (o) {
				case 0:
				  return function(i, h) {
					return (i + h) % 2 == 0
				  };
				case 1:
				  return function(i) {
					return i % 2 == 0
				  };
				case 2:
				  return function(i, h) {
					return h % 3 == 0
				  };
				case 3:
				  return function(i, h) {
					return (i + h) % 3 == 0
				  };
				case 4:
				  return function(i, h) {
					return (Math.floor(i / 2) + Math.floor(h / 3)) % 2 == 0
				  };
				case 5:
				  return function(i, h) {
					return i * h % 2 + i * h % 3 == 0
				  };
				case 6:
				  return function(i, h) {
					return (i * h % 2 + i * h % 3) % 2 == 0
				  };
				case 7:
				  return function(i, h) {
					return (i * h % 3 + (i + h) % 2) % 2 == 0
				  };
				default:
				  throw Error("bad maskPattern:" + o)
			  }
			},
			C: function(o) {
			  for (var i = r([1], 0), h = 0; h < o; h += 1) i = i.multiply(r([1, m.i(h)], 0));
			  return i
			},
			f: function(o, i) {
			  if (o != 4 || 1 > i || 40 < i) throw Error("mode: " + o + "; type: " + i);
			  return 10 > i ? 8 : 16
			},
			D: function(o) {
			  for (var i = o.h(), h = 0, f = 0; f < i; f += 1)
				for (var y = 0; y < i; y += 1) {
				  for (var _ = 0, A = o.a(f, y), g = -1; 1 >= g; g += 1)
					if (!(0 > f + g || i <= f + g))
					  for (var b = -1; 1 >= b; b += 1) 0 > y + b || i <= y + b || (g != 0 || b != 0) && A == o.a(f + g, y + b) && (_ += 1);
				  5 < _ && (h += 3 + _ - 5)
				}
			  for (f = 0; f < i - 1; f += 1)
				for (y = 0; y < i - 1; y += 1) _ = 0, o.a(f, y) && (_ += 1), o.a(f + 1, y) && (_ += 1), o.a(f, y + 1) && (_ += 1), o.a(f + 1, y + 1) && (_ += 1), (_ == 0 || _ == 4) && (h += 3);
			  for (f = 0; f < i; f += 1)
				for (y = 0; y < i - 6; y += 1) o.a(f, y) && !o.a(f, y + 1) && o.a(f, y + 2) && o.a(f, y + 3) && o.a(f, y + 4) && !o.a(f, y + 5) && o.a(f, y + 6) && (h += 40);
			  for (y = 0; y < i; y += 1)
				for (f = 0; f < i - 6; f += 1) o.a(f, y) && !o.a(f + 1, y) && o.a(f + 2, y) && o.a(f + 3, y) && o.a(f + 4, y) && !o.a(f + 5, y) && o.a(f + 6, y) && (h += 40);
			  for (y = _ = 0; y < i; y += 1)
				for (f = 0; f < i; f += 1) o.a(f, y) && (_ += 1);
			  return h += Math.abs(100 * _ / i / i - 50) / 5 * 10
			}
		  };
		return p
	  }(),
	  m = function() {
		for (var a = Array(256), c = Array(256), p = 0; 8 > p; p += 1) a[p] = 1 << p;
		for (p = 8; 256 > p; p += 1) a[p] = a[p - 4] ^ a[p - 5] ^ a[p - 6] ^ a[p - 8];
		for (p = 0; 255 > p; p += 1) c[a[p]] = p;
		return {
		  g: function(o) {
			if (1 > o) throw Error("glog(" + o + ")");
			return c[o]
		  },
		  i: function(o) {
			for (; 0 > o;) o += 255;
			for (; 256 <= o;) o -= 255;
			return a[o]
		  }
		}
	  }(),
	  v = function() {
		function a(o, i) {
		  switch (i) {
			case s.L:
			  return c[4 * (o - 1)];
			case s.M:
			  return c[4 * (o - 1) + 1];
			case s.Q:
			  return c[4 * (o - 1) + 2];
			case s.H:
			  return c[4 * (o - 1) + 3]
		  }
		}
		var c = [
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
		  p = {
			I: function(o, i) {
			  var h = a(o, i);
			  if (typeof h > "u") throw Error("bad rs block @ typeNumber:" + o + "/errorCorrectLevel:" + i);
			  o = h.length / 3, i = [];
			  for (var f = 0; f < o; f += 1)
				for (var y = h[3 * f], _ = h[3 * f + 1], A = h[3 * f + 2], g = 0; g < y; g += 1) {
				  var b = A,
					u = {};
				  u.o = _, u.j = b, i.push(u)
				}
			  return i
			}
		  };
		return p
	  }();
	return t
  }());
  const Ke = QrCreator,
	M = Object.create(null);
  M.open = "0";
  M.close = "1";
  M.ping = "2";
  M.pong = "3";
  M.message = "4";
  M.upgrade = "5";
  M.noop = "6";
  const Y = Object.create(null);
  Object.keys(M).forEach(n => {
	Y[M[n]] = n
  });
  const We = {
	  type: "error",
	  data: "parser error"
	},
	$e = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
	je = typeof ArrayBuffer == "function",
	Ye = n => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer,
	ke = ({
	  type: n,
	  data: e
	}, t, r) => $e && e instanceof Blob ? t ? r(e) : fe(e, r) : je && (e instanceof ArrayBuffer || Ye(e)) ? t ? r(e) : fe(new Blob([e]), r) : r(M[n] + (e || "")),
	fe = (n, e) => {
	  const t = new FileReader;
	  return t.onload = function() {
		const r = t.result.split(",")[1];
		e("b" + (r || ""))
	  }, t.readAsDataURL(n)
	},
	he = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	H = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (let n = 0; n < he.length; n++) H[he.charCodeAt(n)] = n;
  const Je = n => {
	  let e = n.length * .75,
		t = n.length,
		r, s = 0,
		l, m, v, a;
	  n[n.length - 1] === "=" && (e--, n[n.length - 2] === "=" && e--);
	  const c = new ArrayBuffer(e),
		p = new Uint8Array(c);
	  for (r = 0; r < t; r += 4) l = H[n.charCodeAt(r)], m = H[n.charCodeAt(r + 1)], v = H[n.charCodeAt(r + 2)], a = H[n.charCodeAt(r + 3)], p[s++] = l << 2 | m >> 4, p[s++] = (m & 15) << 4 | v >> 2, p[s++] = (v & 3) << 6 | a & 63;
	  return c
	},
	Qe = typeof ArrayBuffer == "function",
	_e = (n, e) => {
	  if (typeof n != "string") return {
		type: "message",
		data: Se(n, e)
	  };
	  const t = n.charAt(0);
	  return t === "b" ? {
		type: "message",
		data: Xe(n.substring(1), e)
	  } : Y[t] ? n.length > 1 ? {
		type: Y[t],
		data: n.substring(1)
	  } : {
		type: Y[t]
	  } : We
	},
	Xe = (n, e) => {
	  if (Qe) {
		const t = Je(n);
		return Se(t, e)
	  } else return {
		base64: !0,
		data: n
	  }
	},
	Se = (n, e) => {
	  switch (e) {
		case "blob":
		  return n instanceof ArrayBuffer ? new Blob([n]) : n;
		case "arraybuffer":
		default:
		  return n
	  }
	},
	Be = String.fromCharCode(30),
	Ge = (n, e) => {
	  const t = n.length,
		r = new Array(t);
	  let s = 0;
	  n.forEach((l, m) => {
		ke(l, !1, v => {
		  r[m] = v, ++s === t && e(r.join(Be))
		})
	  })
	},
	Ze = (n, e) => {
	  const t = n.split(Be),
		r = [];
	  for (let s = 0; s < t.length; s++) {
		const l = _e(t[s], e);
		if (r.push(l), l.type === "error") break
	  }
	  return r
	},
	Ae = 4;
  
  function C(n) {
	if (n) return et(n)
  }
  
  function et(n) {
	for (var e in C.prototype) n[e] = C.prototype[e];
	return n
  }
  C.prototype.on = C.prototype.addEventListener = function(n, e) {
	return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(e), this
  };
  C.prototype.once = function(n, e) {
	function t() {
	  this.off(n, t), e.apply(this, arguments)
	}
	return t.fn = e, this.on(n, t), this
  };
  C.prototype.off = C.prototype.removeListener = C.prototype.removeAllListeners = C.prototype.removeEventListener = function(n, e) {
	if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
	var t = this._callbacks["$" + n];
	if (!t) return this;
	if (arguments.length == 1) return delete this._callbacks["$" + n], this;
	for (var r, s = 0; s < t.length; s++)
	  if (r = t[s], r === e || r.fn === e) {
		t.splice(s, 1);
		break
	  } return t.length === 0 && delete this._callbacks["$" + n], this
  };
  C.prototype.emit = function(n) {
	this._callbacks = this._callbacks || {};
	for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + n], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
	if (t) {
	  t = t.slice(0);
	  for (var r = 0, s = t.length; r < s; ++r) t[r].apply(this, e)
	}
	return this
  };
  C.prototype.emitReserved = C.prototype.emit;
  C.prototype.listeners = function(n) {
	return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || []
  };
  C.prototype.hasListeners = function(n) {
	return !!this.listeners(n).length
  };
  const O = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
  
  function Ce(n, ...e) {
	return e.reduce((t, r) => (n.hasOwnProperty(r) && (t[r] = n[r]), t), {})
  }
  const tt = O.setTimeout,
	nt = O.clearTimeout;
  
  function Q(n, e) {
	e.useNativeTimers ? (n.setTimeoutFn = tt.bind(O), n.clearTimeoutFn = nt.bind(O)) : (n.setTimeoutFn = O.setTimeout.bind(O), n.clearTimeoutFn = O.clearTimeout.bind(O))
  }
  const rt = 1.33;
  
  function it(n) {
	return typeof n == "string" ? st(n) : Math.ceil((n.byteLength || n.size) * rt)
  }
  
  function st(n) {
	let e = 0,
	  t = 0;
	for (let r = 0, s = n.length; r < s; r++) e = n.charCodeAt(r), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (r++, t += 4);
	return t
  }
  class ot extends Error {
	constructor(e, t, r) {
	  super(e), this.description = t, this.context = r, this.type = "TransportError"
	}
  }
  class Te extends C {
	constructor(e) {
	  super(), this.writable = !1, Q(this, e), this.opts = e, this.query = e.query, this.socket = e.socket
	}
	onError(e, t, r) {
	  return super.emitReserved("error", new ot(e, t, r)), this
	}
	open() {
	  return this.readyState = "opening", this.doOpen(), this
	}
	close() {
	  return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
	}
	send(e) {
	  this.readyState === "open" && this.write(e)
	}
	onOpen() {
	  this.readyState = "open", this.writable = !0, super.emitReserved("open")
	}
	onData(e) {
	  const t = _e(e, this.socket.binaryType);
	  this.onPacket(t)
	}
	onPacket(e) {
	  super.emitReserved("packet", e)
	}
	onClose(e) {
	  this.readyState = "closed", super.emitReserved("close", e)
	}
	pause(e) {}
  }
  const Oe = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
	ne = 64,
	at = {};
  let de = 0,
	W = 0,
	pe;
  
  function me(n) {
	let e = "";
	do e = Oe[n % ne] + e, n = Math.floor(n / ne); while (n > 0);
	return e
  }
  
  function Re() {
	const n = me(+new Date);
	return n !== pe ? (de = 0, pe = n) : n + "." + me(de++)
  }
  for (; W < ne; W++) at[Oe[W]] = W;
  
  function Ne(n) {
	let e = "";
	for (let t in n) n.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
	return e
  }
  
  function ct(n) {
	let e = {},
	  t = n.split("&");
	for (let r = 0, s = t.length; r < s; r++) {
	  let l = t[r].split("=");
	  e[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
	}
	return e
  }
  let Le = !1;
  try {
	Le = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
  } catch {}
  const lt = Le;
  
  function Me(n) {
	const e = n.xdomain;
	try {
	  if (typeof XMLHttpRequest < "u" && (!e || lt)) return new XMLHttpRequest
	} catch {}
	if (!e) try {
	  return new O[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
	} catch {}
  }
  
  function ut() {}
  const ft = function() {
	return new Me({
	  xdomain: !1
	}).responseType != null
  }();
  class ht extends Te {
	constructor(e) {
	  if (super(e), this.polling = !1, typeof location < "u") {
		const r = location.protocol === "https:";
		let s = location.port;
		s || (s = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || s !== e.port, this.xs = e.secure !== r
	  }
	  const t = e && e.forceBase64;
	  this.supportsBinary = ft && !t
	}
	get name() {
	  return "polling"
	}
	doOpen() {
	  this.poll()
	}
	pause(e) {
	  this.readyState = "pausing";
	  const t = () => {
		this.readyState = "paused", e()
	  };
	  if (this.polling || !this.writable) {
		let r = 0;
		this.polling && (r++, this.once("pollComplete", function() {
		  --r || t()
		})), this.writable || (r++, this.once("drain", function() {
		  --r || t()
		}))
	  } else t()
	}
	poll() {
	  this.polling = !0, this.doPoll(), this.emitReserved("poll")
	}
	onData(e) {
	  const t = r => {
		if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close") return this.onClose({
		  description: "transport closed by the server"
		}), !1;
		this.onPacket(r)
	  };
	  Ze(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll())
	}
	doClose() {
	  const e = () => {
		this.write([{
		  type: "close"
		}])
	  };
	  this.readyState === "open" ? e() : this.once("open", e)
	}
	write(e) {
	  this.writable = !1, Ge(e, t => {
		this.doWrite(t, () => {
		  this.writable = !0, this.emitReserved("drain")
		})
	  })
	}
	uri() {
	  let e = this.query || {};
	  const t = this.opts.secure ? "https" : "http";
	  let r = "";
	  this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = Re()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.opts.port && (t === "https" && Number(this.opts.port) !== 443 || t === "http" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port);
	  const s = Ne(e),
		l = this.opts.hostname.indexOf(":") !== -1;
	  return t + "://" + (l ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (s.length ? "?" + s : "")
	}
	request(e = {}) {
	  return Object.assign(e, {
		xd: this.xd,
		xs: this.xs
	  }, this.opts), new L(this.uri(), e)
	}
	doWrite(e, t) {
	  const r = this.request({
		method: "POST",
		data: e
	  });
	  r.on("success", t), r.on("error", (s, l) => {
		this.onError("xhr post error", s, l)
	  })
	}
	doPoll() {
	  const e = this.request();
	  e.on("data", this.onData.bind(this)), e.on("error", (t, r) => {
		this.onError("xhr poll error", t, r)
	  }), this.pollXhr = e
	}
  }
  class L extends C {
	constructor(e, t) {
	  super(), Q(this, t), this.opts = t, this.method = t.method || "GET", this.uri = e, this.async = t.async !== !1, this.data = t.data !== void 0 ? t.data : null, this.create()
	}
	create() {
	  const e = Ce(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
	  e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
	  const t = this.xhr = new Me(e);
	  try {
		t.open(this.method, this.uri, this.async);
		try {
		  if (this.opts.extraHeaders) {
			t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
			for (let r in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(r) && t.setRequestHeader(r, this.opts.extraHeaders[r])
		  }
		} catch {}
		if (this.method === "POST") try {
		  t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
		} catch {}
		try {
		  t.setRequestHeader("Accept", "*/*")
		} catch {}
		"withCredentials" in t && (t.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout), t.onreadystatechange = () => {
		  t.readyState === 4 && (t.status === 200 || t.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
			this.onError(typeof t.status == "number" ? t.status : 0)
		  }, 0))
		}, t.send(this.data)
	  } catch (r) {
		this.setTimeoutFn(() => {
		  this.onError(r)
		}, 0);
		return
	  }
	  typeof document < "u" && (this.index = L.requestsCount++, L.requests[this.index] = this)
	}
	onError(e) {
	  this.emitReserved("error", e, this.xhr), this.cleanup(!0)
	}
	cleanup(e) {
	  if (!(typeof this.xhr > "u" || this.xhr === null)) {
		if (this.xhr.onreadystatechange = ut, e) try {
		  this.xhr.abort()
		} catch {}
		typeof document < "u" && delete L.requests[this.index], this.xhr = null
	  }
	}
	onLoad() {
	  const e = this.xhr.responseText;
	  e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup())
	}
	abort() {
	  this.cleanup()
	}
  }
  L.requestsCount = 0;
  L.requests = {};
  if (typeof document < "u") {
	if (typeof attachEvent == "function") attachEvent("onunload", ye);
	else if (typeof addEventListener == "function") {
	  const n = "onpagehide" in O ? "pagehide" : "unload";
	  addEventListener(n, ye, !1)
	}
  }
  
  function ye() {
	for (let n in L.requests) L.requests.hasOwnProperty(n) && L.requests[n].abort()
  }
  const Ie = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, t) => t(e, 0))(),
	$ = O.WebSocket || O.MozWebSocket,
	ge = !0,
	dt = "arraybuffer",
	ve = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
  class pt extends Te {
	constructor(e) {
	  super(e), this.supportsBinary = !e.forceBase64
	}
	get name() {
	  return "websocket"
	}
	doOpen() {
	  if (!this.check()) return;
	  const e = this.uri(),
		t = this.opts.protocols,
		r = ve ? {} : Ce(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
	  this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
	  try {
		this.ws = ge && !ve ? t ? new $(e, t) : new $(e) : new $(e, t, r)
	  } catch (s) {
		return this.emitReserved("error", s)
	  }
	  this.ws.binaryType = this.socket.binaryType || dt, this.addEventListeners()
	}
	addEventListeners() {
	  this.ws.onopen = () => {
		this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
	  }, this.ws.onclose = e => this.onClose({
		description: "websocket connection closed",
		context: e
	  }), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError("websocket error", e)
	}
	write(e) {
	  this.writable = !1;
	  for (let t = 0; t < e.length; t++) {
		const r = e[t],
		  s = t === e.length - 1;
		ke(r, this.supportsBinary, l => {
		  const m = {};
		  try {
			ge && this.ws.send(l)
		  } catch {}
		  s && Ie(() => {
			this.writable = !0, this.emitReserved("drain")
		  }, this.setTimeoutFn)
		})
	  }
	}
	doClose() {
	  typeof this.ws < "u" && (this.ws.close(), this.ws = null)
	}
	uri() {
	  let e = this.query || {};
	  const t = this.opts.secure ? "wss" : "ws";
	  let r = "";
	  this.opts.port && (t === "wss" && Number(this.opts.port) !== 443 || t === "ws" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port), this.opts.timestampRequests && (e[this.opts.timestampParam] = Re()), this.supportsBinary || (e.b64 = 1);
	  const s = Ne(e),
		l = this.opts.hostname.indexOf(":") !== -1;
	  return t + "://" + (l ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (s.length ? "?" + s : "")
	}
	check() {
	  return !!$
	}
  }
  const mt = {
	  websocket: pt,
	  polling: ht
	},
	yt = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
	gt = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
  
  function re(n) {
	const e = n,
	  t = n.indexOf("["),
	  r = n.indexOf("]");
	t != -1 && r != -1 && (n = n.substring(0, t) + n.substring(t, r).replace(/:/g, ";") + n.substring(r, n.length));
	let s = yt.exec(n || ""),
	  l = {},
	  m = 14;
	for (; m--;) l[gt[m]] = s[m] || "";
	return t != -1 && r != -1 && (l.source = e, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"), l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), l.ipv6uri = !0), l.pathNames = vt(l, l.path), l.queryKey = bt(l, l.query), l
  }
  
  function vt(n, e) {
	const t = /\/{2,9}/g,
	  r = e.replace(t, "/").split("/");
	return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r
  }
  
  function bt(n, e) {
	const t = {};
	return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, s, l) {
	  s && (t[s] = l)
	}), t
  }
  let Pe = class z extends C {
	constructor(e, t = {}) {
	  super(), this.writeBuffer = [], e && typeof e == "object" && (t = e, e = null), e ? (e = re(e), t.hostname = e.host, t.secure = e.protocol === "https" || e.protocol === "wss", t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = re(t.host).host), Q(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
		path: "/engine.io",
		agent: !1,
		withCredentials: !1,
		upgrade: !0,
		timestampParam: "t",
		rememberUpgrade: !1,
		addTrailingSlash: !0,
		rejectUnauthorized: !0,
		perMessageDeflate: {
		  threshold: 1024
		},
		transportOptions: {},
		closeOnBeforeunload: !0
	  }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = ct(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
		this.transport && (this.transport.removeAllListeners(), this.transport.close())
	  }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
		this.onClose("transport close", {
		  description: "network connection lost"
		})
	  }, addEventListener("offline", this.offlineEventListener, !1))), this.open()
	}
	createTransport(e) {
	  const t = Object.assign({}, this.opts.query);
	  t.EIO = Ae, t.transport = e, this.id && (t.sid = this.id);
	  const r = Object.assign({}, this.opts.transportOptions[e], this.opts, {
		query: t,
		socket: this,
		hostname: this.hostname,
		secure: this.secure,
		port: this.port
	  });
	  return new mt[e](r)
	}
	open() {
	  let e;
	  if (this.opts.rememberUpgrade && z.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) e = "websocket";
	  else if (this.transports.length === 0) {
		this.setTimeoutFn(() => {
		  this.emitReserved("error", "No transports available")
		}, 0);
		return
	  } else e = this.transports[0];
	  this.readyState = "opening";
	  try {
		e = this.createTransport(e)
	  } catch {
		this.transports.shift(), this.open();
		return
	  }
	  e.open(), this.setTransport(e)
	}
	setTransport(e) {
	  this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", t => this.onClose("transport close", t))
	}
	probe(e) {
	  let t = this.createTransport(e),
		r = !1;
	  z.priorWebsocketSuccess = !1;
	  const s = () => {
		r || (t.send([{
		  type: "ping",
		  data: "probe"
		}]), t.once("packet", o => {
		  if (!r)
			if (o.type === "pong" && o.data === "probe") {
			  if (this.upgrading = !0, this.emitReserved("upgrading", t), !t) return;
			  z.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
				r || this.readyState !== "closed" && (p(), this.setTransport(t), t.send([{
				  type: "upgrade"
				}]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush())
			  })
			} else {
			  const i = new Error("probe error");
			  i.transport = t.name, this.emitReserved("upgradeError", i)
			}
		}))
	  };
  
	  function l() {
		r || (r = !0, p(), t.close(), t = null)
	  }
	  const m = o => {
		const i = new Error("probe error: " + o);
		i.transport = t.name, l(), this.emitReserved("upgradeError", i)
	  };
  
	  function v() {
		m("transport closed")
	  }
  
	  function a() {
		m("socket closed")
	  }
  
	  function c(o) {
		t && o.name !== t.name && l()
	  }
	  const p = () => {
		t.removeListener("open", s), t.removeListener("error", m), t.removeListener("close", v), this.off("close", a), this.off("upgrading", c)
	  };
	  t.once("open", s), t.once("error", m), t.once("close", v), this.once("close", a), this.once("upgrading", c), t.open()
	}
	onOpen() {
	  if (this.readyState = "open", z.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
		let e = 0;
		const t = this.upgrades.length;
		for (; e < t; e++) this.probe(this.upgrades[e])
	  }
	}
	onPacket(e) {
	  if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
		case "open":
		  this.onHandshake(JSON.parse(e.data));
		  break;
		case "ping":
		  this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
		  break;
		case "error":
		  const t = new Error("server error");
		  t.code = e.data, this.onError(t);
		  break;
		case "message":
		  this.emitReserved("data", e.data), this.emitReserved("message", e.data);
		  break
	  }
	}
	onHandshake(e) {
	  this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout()
	}
	resetPingTimeout() {
	  this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
		this.onClose("ping timeout")
	  }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
	}
	onDrain() {
	  this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
	}
	flush() {
	  if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
		const e = this.getWritablePackets();
		this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush")
	  }
	}
	getWritablePackets() {
	  if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
	  let t = 1;
	  for (let r = 0; r < this.writeBuffer.length; r++) {
		const s = this.writeBuffer[r].data;
		if (s && (t += it(s)), r > 0 && t > this.maxPayload) return this.writeBuffer.slice(0, r);
		t += 2
	  }
	  return this.writeBuffer
	}
	write(e, t, r) {
	  return this.sendPacket("message", e, t, r), this
	}
	send(e, t, r) {
	  return this.sendPacket("message", e, t, r), this
	}
	sendPacket(e, t, r, s) {
	  if (typeof t == "function" && (s = t, t = void 0), typeof r == "function" && (s = r, r = null), this.readyState === "closing" || this.readyState === "closed") return;
	  r = r || {}, r.compress = r.compress !== !1;
	  const l = {
		type: e,
		data: t,
		options: r
	  };
	  this.emitReserved("packetCreate", l), this.writeBuffer.push(l), s && this.once("flush", s), this.flush()
	}
	close() {
	  const e = () => {
		  this.onClose("forced close"), this.transport.close()
		},
		t = () => {
		  this.off("upgrade", t), this.off("upgradeError", t), e()
		},
		r = () => {
		  this.once("upgrade", t), this.once("upgradeError", t)
		};
	  return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
		this.upgrading ? r() : e()
	  }) : this.upgrading ? r() : e()), this
	}
	onError(e) {
	  z.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e)
	}
	onClose(e, t) {
	  (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0)
	}
	filterUpgrades(e) {
	  const t = [];
	  let r = 0;
	  const s = e.length;
	  for (; r < s; r++) ~this.transports.indexOf(e[r]) && t.push(e[r]);
	  return t
	}
  };
  Pe.protocol = Ae;
  
  function xt(n, e = "", t) {
	let r = n;
	t = t || typeof location < "u" && location, n == null && (n = t.protocol + "//" + t.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = t.protocol + n : n = t.host + n), /^(https?|wss?):\/\//.test(n) || (typeof t < "u" ? n = t.protocol + "//" + n : n = "https://" + n), r = re(n)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
	const l = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
	return r.id = r.protocol + "://" + l + ":" + r.port + e, r.href = r.protocol + "://" + l + (t && t.port === r.port ? "" : ":" + r.port), r
  }
  const wt = typeof ArrayBuffer == "function",
	Et = n => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer,
	Fe = Object.prototype.toString,
	kt = typeof Blob == "function" || typeof Blob < "u" && Fe.call(Blob) === "[object BlobConstructor]",
	_t = typeof File == "function" || typeof File < "u" && Fe.call(File) === "[object FileConstructor]";
  
  function ae(n) {
	return wt && (n instanceof ArrayBuffer || Et(n)) || kt && n instanceof Blob || _t && n instanceof File
  }
  
  function J(n, e) {
	if (!n || typeof n != "object") return !1;
	if (Array.isArray(n)) {
	  for (let t = 0, r = n.length; t < r; t++)
		if (J(n[t])) return !0;
	  return !1
	}
	if (ae(n)) return !0;
	if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1) return J(n.toJSON(), !0);
	for (const t in n)
	  if (Object.prototype.hasOwnProperty.call(n, t) && J(n[t])) return !0;
	return !1
  }
  
  function St(n) {
	const e = [],
	  t = n.data,
	  r = n;
	return r.data = ie(t, e), r.attachments = e.length, {
	  packet: r,
	  buffers: e
	}
  }
  
  function ie(n, e) {
	if (!n) return n;
	if (ae(n)) {
	  const t = {
		_placeholder: !0,
		num: e.length
	  };
	  return e.push(n), t
	} else if (Array.isArray(n)) {
	  const t = new Array(n.length);
	  for (let r = 0; r < n.length; r++) t[r] = ie(n[r], e);
	  return t
	} else if (typeof n == "object" && !(n instanceof Date)) {
	  const t = {};
	  for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = ie(n[r], e));
	  return t
	}
	return n
  }
  
  function Bt(n, e) {
	return n.data = se(n.data, e), delete n.attachments, n
  }
  
  function se(n, e) {
	if (!n) return n;
	if (n && n._placeholder === !0) {
	  if (typeof n.num == "number" && n.num >= 0 && n.num < e.length) return e[n.num];
	  throw new Error("illegal attachments")
	} else if (Array.isArray(n))
	  for (let t = 0; t < n.length; t++) n[t] = se(n[t], e);
	else if (typeof n == "object")
	  for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (n[t] = se(n[t], e));
	return n
  }
  const At = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"],
	Ct = 5;
  var k;
  (function(n) {
	n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK"
  })(k || (k = {}));
  class Tt {
	constructor(e) {
	  this.replacer = e
	}
	encode(e) {
	  return (e.type === k.EVENT || e.type === k.ACK) && J(e) ? this.encodeAsBinary({
		type: e.type === k.EVENT ? k.BINARY_EVENT : k.BINARY_ACK,
		nsp: e.nsp,
		data: e.data,
		id: e.id
	  }) : [this.encodeAsString(e)]
	}
	encodeAsString(e) {
	  let t = "" + e.type;
	  return (e.type === k.BINARY_EVENT || e.type === k.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t
	}
	encodeAsBinary(e) {
	  const t = St(e),
		r = this.encodeAsString(t.packet),
		s = t.buffers;
	  return s.unshift(r), s
	}
  }
  
  function be(n) {
	return Object.prototype.toString.call(n) === "[object Object]"
  }
  class ce extends C {
	constructor(e) {
	  super(), this.reviver = e
	}
	add(e) {
	  let t;
	  if (typeof e == "string") {
		if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
		t = this.decodeString(e);
		const r = t.type === k.BINARY_EVENT;
		r || t.type === k.BINARY_ACK ? (t.type = r ? k.EVENT : k.ACK, this.reconstructor = new Ot(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t)
	  } else if (ae(e) || e.base64)
		if (this.reconstructor) t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved("decoded", t));
		else throw new Error("got binary data when not reconstructing a packet");
	  else throw new Error("Unknown type: " + e)
	}
	decodeString(e) {
	  let t = 0;
	  const r = {
		type: Number(e.charAt(0))
	  };
	  if (k[r.type] === void 0) throw new Error("unknown packet type " + r.type);
	  if (r.type === k.BINARY_EVENT || r.type === k.BINARY_ACK) {
		const l = t + 1;
		for (; e.charAt(++t) !== "-" && t != e.length;);
		const m = e.substring(l, t);
		if (m != Number(m) || e.charAt(t) !== "-") throw new Error("Illegal attachments");
		r.attachments = Number(m)
	  }
	  if (e.charAt(t + 1) === "/") {
		const l = t + 1;
		for (; ++t && !(e.charAt(t) === "," || t === e.length););
		r.nsp = e.substring(l, t)
	  } else r.nsp = "/";
	  const s = e.charAt(t + 1);
	  if (s !== "" && Number(s) == s) {
		const l = t + 1;
		for (; ++t;) {
		  const m = e.charAt(t);
		  if (m == null || Number(m) != m) {
			--t;
			break
		  }
		  if (t === e.length) break
		}
		r.id = Number(e.substring(l, t + 1))
	  }
	  if (e.charAt(++t)) {
		const l = this.tryParse(e.substr(t));
		if (ce.isPayloadValid(r.type, l)) r.data = l;
		else throw new Error("invalid payload")
	  }
	  return r
	}
	tryParse(e) {
	  try {
		return JSON.parse(e, this.reviver)
	  } catch {
		return !1
	  }
	}
	static isPayloadValid(e, t) {
	  switch (e) {
		case k.CONNECT:
		  return be(t);
		case k.DISCONNECT:
		  return t === void 0;
		case k.CONNECT_ERROR:
		  return typeof t == "string" || be(t);
		case k.EVENT:
		case k.BINARY_EVENT:
		  return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && At.indexOf(t[0]) === -1);
		case k.ACK:
		case k.BINARY_ACK:
		  return Array.isArray(t)
	  }
	}
	destroy() {
	  this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
	}
  }
  class Ot {
	constructor(e) {
	  this.packet = e, this.buffers = [], this.reconPack = e
	}
	takeBinaryData(e) {
	  if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
		const t = Bt(this.reconPack, this.buffers);
		return this.finishedReconstruction(), t
	  }
	  return null
	}
	finishedReconstruction() {
	  this.reconPack = null, this.buffers = []
	}
  }
  const Rt = Object.freeze(Object.defineProperty({
	__proto__: null,
	Decoder: ce,
	Encoder: Tt,
	get PacketType() {
	  return k
	},
	protocol: Ct
  }, Symbol.toStringTag, {
	value: "Module"
  }));
  
  function R(n, e, t) {
	return n.on(e, t),
	  function() {
		n.off(e, t)
	  }
  }
  const Nt = Object.freeze({
	connect: 1,
	connect_error: 1,
	disconnect: 1,
	disconnecting: 1,
	newListener: 1,
	removeListener: 1
  });
  class ze extends C {
	constructor(e, t, r) {
	  super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open()
	}
	get disconnected() {
	  return !this.connected
	}
	subEvents() {
	  if (this.subs) return;
	  const e = this.io;
	  this.subs = [R(e, "open", this.onopen.bind(this)), R(e, "packet", this.onpacket.bind(this)), R(e, "error", this.onerror.bind(this)), R(e, "close", this.onclose.bind(this))]
	}
	get active() {
	  return !!this.subs
	}
	connect() {
	  return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
	}
	open() {
	  return this.connect()
	}
	send(...e) {
	  return e.unshift("message"), this.emit.apply(this, e), this
	}
	emit(e, ...t) {
	  if (Nt.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
	  if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(t), this;
	  const r = {
		type: k.EVENT,
		data: t
	  };
	  if (r.options = {}, r.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
		const m = this.ids++,
		  v = t.pop();
		this._registerAckCallback(m, v), r.id = m
	  }
	  const s = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
	  return this.flags.volatile && (!s || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(r), this.packet(r)) : this.sendBuffer.push(r)), this.flags = {}, this
	}
	_registerAckCallback(e, t) {
	  var r;
	  const s = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
	  if (s === void 0) {
		this.acks[e] = t;
		return
	  }
	  const l = this.io.setTimeoutFn(() => {
		delete this.acks[e];
		for (let m = 0; m < this.sendBuffer.length; m++) this.sendBuffer[m].id === e && this.sendBuffer.splice(m, 1);
		t.call(this, new Error("operation has timed out"))
	  }, s);
	  this.acks[e] = (...m) => {
		this.io.clearTimeoutFn(l), t.apply(this, [null, ...m])
	  }
	}
	emitWithAck(e, ...t) {
	  const r = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
	  return new Promise((s, l) => {
		t.push((m, v) => r ? m ? l(m) : s(v) : s(m)), this.emit(e, ...t)
	  })
	}
	_addToQueue(e) {
	  let t;
	  typeof e[e.length - 1] == "function" && (t = e.pop());
	  const r = {
		id: this._queueSeq++,
		tryCount: 0,
		pending: !1,
		args: e,
		flags: Object.assign({
		  fromQueue: !0
		}, this.flags)
	  };
	  e.push((s, ...l) => r !== this._queue[0] ? void 0 : (s !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), t && t(s)) : (this._queue.shift(), t && t(null, ...l)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue()
	}
	_drainQueue(e = !1) {
	  if (!this.connected || this._queue.length === 0) return;
	  const t = this._queue[0];
	  t.pending && !e || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args))
	}
	packet(e) {
	  e.nsp = this.nsp, this.io._packet(e)
	}
	onopen() {
	  typeof this.auth == "function" ? this.auth(e => {
		this._sendConnectPacket(e)
	  }) : this._sendConnectPacket(this.auth)
	}
	_sendConnectPacket(e) {
	  this.packet({
		type: k.CONNECT,
		data: this._pid ? Object.assign({
		  pid: this._pid,
		  offset: this._lastOffset
		}, e) : e
	  })
	}
	onerror(e) {
	  this.connected || this.emitReserved("connect_error", e)
	}
	onclose(e, t) {
	  this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t)
	}
	onpacket(e) {
	  if (e.nsp === this.nsp) switch (e.type) {
		case k.CONNECT:
		  e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
		  break;
		case k.EVENT:
		case k.BINARY_EVENT:
		  this.onevent(e);
		  break;
		case k.ACK:
		case k.BINARY_ACK:
		  this.onack(e);
		  break;
		case k.DISCONNECT:
		  this.ondisconnect();
		  break;
		case k.CONNECT_ERROR:
		  this.destroy();
		  const r = new Error(e.data.message);
		  r.data = e.data.data, this.emitReserved("connect_error", r);
		  break
	  }
	}
	onevent(e) {
	  const t = e.data || [];
	  e.id != null && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
	}
	emitEvent(e) {
	  if (this._anyListeners && this._anyListeners.length) {
		const t = this._anyListeners.slice();
		for (const r of t) r.apply(this, e)
	  }
	  super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
	}
	ack(e) {
	  const t = this;
	  let r = !1;
	  return function(...s) {
		r || (r = !0, t.packet({
		  type: k.ACK,
		  id: e,
		  data: s
		}))
	  }
	}
	onack(e) {
	  const t = this.acks[e.id];
	  typeof t == "function" && (t.apply(this, e.data), delete this.acks[e.id])
	}
	onconnect(e, t) {
	  this.id = e, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
	}
	emitBuffered() {
	  this.receiveBuffer.forEach(e => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach(e => {
		this.notifyOutgoingListeners(e), this.packet(e)
	  }), this.sendBuffer = []
	}
	ondisconnect() {
	  this.destroy(), this.onclose("io server disconnect")
	}
	destroy() {
	  this.subs && (this.subs.forEach(e => e()), this.subs = void 0), this.io._destroy(this)
	}
	disconnect() {
	  return this.connected && this.packet({
		type: k.DISCONNECT
	  }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
	}
	close() {
	  return this.disconnect()
	}
	compress(e) {
	  return this.flags.compress = e, this
	}
	get volatile() {
	  return this.flags.volatile = !0, this
	}
	timeout(e) {
	  return this.flags.timeout = e, this
	}
	onAny(e) {
	  return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
	}
	prependAny(e) {
	  return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
	}
	offAny(e) {
	  if (!this._anyListeners) return this;
	  if (e) {
		const t = this._anyListeners;
		for (let r = 0; r < t.length; r++)
		  if (e === t[r]) return t.splice(r, 1), this
	  } else this._anyListeners = [];
	  return this
	}
	listenersAny() {
	  return this._anyListeners || []
	}
	onAnyOutgoing(e) {
	  return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
	}
	prependAnyOutgoing(e) {
	  return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
	}
	offAnyOutgoing(e) {
	  if (!this._anyOutgoingListeners) return this;
	  if (e) {
		const t = this._anyOutgoingListeners;
		for (let r = 0; r < t.length; r++)
		  if (e === t[r]) return t.splice(r, 1), this
	  } else this._anyOutgoingListeners = [];
	  return this
	}
	listenersAnyOutgoing() {
	  return this._anyOutgoingListeners || []
	}
	notifyOutgoingListeners(e) {
	  if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
		const t = this._anyOutgoingListeners.slice();
		for (const r of t) r.apply(this, e.data)
	  }
	}
  }
  
  function D(n) {
	n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0
  }
  D.prototype.duration = function() {
	var n = this.ms * Math.pow(this.factor, this.attempts++);
	if (this.jitter) {
	  var e = Math.random(),
		t = Math.floor(e * this.jitter * n);
	  n = Math.floor(e * 10) & 1 ? n + t : n - t
	}
	return Math.min(n, this.max) | 0
  };
  D.prototype.reset = function() {
	this.attempts = 0
  };
  D.prototype.setMin = function(n) {
	this.ms = n
  };
  D.prototype.setMax = function(n) {
	this.max = n
  };
  D.prototype.setJitter = function(n) {
	this.jitter = n
  };
  class oe extends C {
	constructor(e, t) {
	  var r;
	  super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Q(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : .5), this.backoff = new D({
		min: this.reconnectionDelay(),
		max: this.reconnectionDelayMax(),
		jitter: this.randomizationFactor()
	  }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
	  const s = t.parser || Rt;
	  this.encoder = new s.Encoder, this.decoder = new s.Decoder, this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open()
	}
	reconnection(e) {
	  return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
	}
	reconnectionAttempts(e) {
	  return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
	}
	reconnectionDelay(e) {
	  var t;
	  return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (t = this.backoff) === null || t === void 0 || t.setMin(e), this)
	}
	randomizationFactor(e) {
	  var t;
	  return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (t = this.backoff) === null || t === void 0 || t.setJitter(e), this)
	}
	reconnectionDelayMax(e) {
	  var t;
	  return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (t = this.backoff) === null || t === void 0 || t.setMax(e), this)
	}
	timeout(e) {
	  return arguments.length ? (this._timeout = e, this) : this._timeout
	}
	maybeReconnectOnOpen() {
	  !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
	}
	open(e) {
	  if (~this._readyState.indexOf("open")) return this;
	  this.engine = new Pe(this.uri, this.opts);
	  const t = this.engine,
		r = this;
	  this._readyState = "opening", this.skipReconnect = !1;
	  const s = R(t, "open", function() {
		  r.onopen(), e && e()
		}),
		l = R(t, "error", m => {
		  r.cleanup(), r._readyState = "closed", this.emitReserved("error", m), e ? e(m) : r.maybeReconnectOnOpen()
		});
	  if (this._timeout !== !1) {
		const m = this._timeout;
		m === 0 && s();
		const v = this.setTimeoutFn(() => {
		  s(), t.close(), t.emit("error", new Error("timeout"))
		}, m);
		this.opts.autoUnref && v.unref(), this.subs.push(function() {
		  clearTimeout(v)
		})
	  }
	  return this.subs.push(s), this.subs.push(l), this
	}
	connect(e) {
	  return this.open(e)
	}
	onopen() {
	  this.cleanup(), this._readyState = "open", this.emitReserved("open");
	  const e = this.engine;
	  this.subs.push(R(e, "ping", this.onping.bind(this)), R(e, "data", this.ondata.bind(this)), R(e, "error", this.onerror.bind(this)), R(e, "close", this.onclose.bind(this)), R(this.decoder, "decoded", this.ondecoded.bind(this)))
	}
	onping() {
	  this.emitReserved("ping")
	}
	ondata(e) {
	  try {
		this.decoder.add(e)
	  } catch (t) {
		this.onclose("parse error", t)
	  }
	}
	ondecoded(e) {
	  Ie(() => {
		this.emitReserved("packet", e)
	  }, this.setTimeoutFn)
	}
	onerror(e) {
	  this.emitReserved("error", e)
	}
	socket(e, t) {
	  let r = this.nsps[e];
	  return r ? this._autoConnect && !r.active && r.connect() : (r = new ze(this, e, t), this.nsps[e] = r), r
	}
	_destroy(e) {
	  const t = Object.keys(this.nsps);
	  for (const r of t)
		if (this.nsps[r].active) return;
	  this._close()
	}
	_packet(e) {
	  const t = this.encoder.encode(e);
	  for (let r = 0; r < t.length; r++) this.engine.write(t[r], e.options)
	}
	cleanup() {
	  this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy()
	}
	_close() {
	  this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
	}
	disconnect() {
	  return this._close()
	}
	onclose(e, t) {
	  this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect()
	}
	reconnect() {
	  if (this._reconnecting || this.skipReconnect) return this;
	  const e = this;
	  if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
	  else {
		const t = this.backoff.duration();
		this._reconnecting = !0;
		const r = this.setTimeoutFn(() => {
		  e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open(s => {
			s ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", s)) : e.onreconnect()
		  }))
		}, t);
		this.opts.autoUnref && r.unref(), this.subs.push(function() {
		  clearTimeout(r)
		})
	  }
	}
	onreconnect() {
	  const e = this.backoff.attempts;
	  this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
	}
  }
  const V = {};
  
  function X(n, e) {
	typeof n == "object" && (e = n, n = void 0), e = e || {};
	const t = xt(n, e.path || "/socket.io"),
	  r = t.source,
	  s = t.id,
	  l = t.path,
	  m = V[s] && l in V[s].nsps,
	  v = e.forceNew || e["force new connection"] || e.multiplex === !1 || m;
	let a;
	return v ? a = new oe(r, e) : (V[s] || (V[s] = new oe(r, e)), a = V[s]), t.query && !e.query && (e.query = t.queryKey), a.socket(t.path, e)
  }
  Object.assign(X, {
	Manager: oe,
	Socket: ze,
	io: X,
	connect: X
  });
  let j;
  const Lt = new Uint8Array(16);
  
  function Mt() {
	if (!j && (j = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !j)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return j(Lt)
  }
  const T = [];
  for (let n = 0; n < 256; ++n) T.push((n + 256).toString(16).slice(1));
  
  function It(n, e = 0) {
	return (T[n[e + 0]] + T[n[e + 1]] + T[n[e + 2]] + T[n[e + 3]] + "-" + T[n[e + 4]] + T[n[e + 5]] + "-" + T[n[e + 6]] + T[n[e + 7]] + "-" + T[n[e + 8]] + T[n[e + 9]] + "-" + T[n[e + 10]] + T[n[e + 11]] + T[n[e + 12]] + T[n[e + 13]] + T[n[e + 14]] + T[n[e + 15]]).toLowerCase()
  }
  let xe, G, Z = 0,
	ee = 0;
  
  function Pt(n, e, t) {
	let r = e && t || 0;
	const s = e || new Array(16);
	n = n || {};
	let l = n.node || xe,
	  m = n.clockseq !== void 0 ? n.clockseq : G;
	if (l == null || m == null) {
	  const i = n.random || (n.rng || Mt)();
	  l == null && (l = xe = [i[0] | 1, i[1], i[2], i[3], i[4], i[5]]), m == null && (m = G = (i[6] << 8 | i[7]) & 16383)
	}
	let v = n.msecs !== void 0 ? n.msecs : Date.now(),
	  a = n.nsecs !== void 0 ? n.nsecs : ee + 1;
	const c = v - Z + (a - ee) / 1e4;
	if (c < 0 && n.clockseq === void 0 && (m = m + 1 & 16383), (c < 0 || v > Z) && n.nsecs === void 0 && (a = 0), a >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
	Z = v, ee = a, G = m, v += 122192928e5;
	const p = ((v & 268435455) * 1e4 + a) % 4294967296;
	s[r++] = p >>> 24 & 255, s[r++] = p >>> 16 & 255, s[r++] = p >>> 8 & 255, s[r++] = p & 255;
	const o = v / 4294967296 * 1e4 & 268435455;
	s[r++] = o >>> 8 & 255, s[r++] = o & 255, s[r++] = o >>> 24 & 15 | 16, s[r++] = o >>> 16 & 255, s[r++] = m >>> 8 | 128, s[r++] = m & 255;
	for (let i = 0; i < 6; ++i) s[r + i] = l[i];
	return e || It(s)
  }
  var P = !1,
	qe = !1,
	De;
  screen.width <= 768 ? (P = !0, console.log("MOBILE DEVICE VIEW"), De = "mobile") : (console.log("DESKTOP DEVICE VIEW"), P = !1);
  var Ft = .8,
	zt = "H",
	qt = "#333333",
	le, Dt = window.location.protocol + "//" + window.location.host,
	Vt = Pt();
  const mySF = function() {
	function setvalues(e, t, r) {
	  Ut(r, e, t)
	}
	return {
	  setvalues: setvalues
	}
  }();
  
  function Ut(n, e, t) {
	const s = JSON.stringify({
	  uid: Vt,
	  host: Dt,
	  shop: n,
	  manufacturer: e,
	  model: t,
	  client: De
	});
	le = `https://mysf.vercel.app/?hash=${btoa(s)}`
  }
  var ue = document.createElement("div");
  document.body.appendChild(ue);
  ue.id = "mySF_User_Modal";
  ue.style.display = "none";
  var Ve = document.createElement("button");
  document.getElementById("mySF_User_Modal").appendChild(Ve);
  Ve.id = "close";
  var q = document.createElement("div");
  document.body.appendChild(q);
  q.id = "firstModal";
  q.style.display = "none";
  var He = document.createElement("button");
  document.getElementById("firstModal").appendChild(He);
  He.id = "firstclose";
  var Ue = document.createElement("button");
  document.getElementById("firstModal").appendChild(Ue);
  Ue.id = "continueBtn";
  P ? q.innerHTML = `
  <style>
	@import url('https://fonts.cdnfonts.com/css/montserrat');
  
	  th,
	  td {
		border: 0px !important;
	  }
  
	  .firstclose {
		color: #aaaaaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
		margin-top: -10px;
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
		font-family: 'Montserrat', sans-serif;
	  }
  
	  .firstmodal-content {
		width: 70%;
		background-color:white;
		background-image: url('https://drive.google.com/file/d/1Iy0CAhHPxLxudZtxkr35WW7UxMuQfAHb/view?usp=sharing');
		background-repeat: no-repeat;
		background-size: 100%;      margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		margin-right: auto;
		padding: 2em;
		padding-right: 2em;
		padding-left: 2em;
		border: 0px;
		border-radius: 20px;
		box-sizing: content-box;
		font-family: 'Montserrat', sans-serif;
		color: #333333;
		display: flex;
		flex-direction: column;
	  }
  
	  .continueBtn2 {
		width: 100%;
		background-color: #ff7d4f;
		padding: 12px;
		font-family: 'Montserrat', sans-serif;
		font-size: 14px;
		color: #ffffff;
		border-radius: 20px;
		border: 1px solid #ff7d4f;
	  }
  
	  .continueBtn {
		width: 100%;
		background-color: transparent;
		padding: 12px;
		font-family: 'Montserrat', sans-serif;
		font-size: 14px;
		color: #ff7d4f;
		border-radius: 20px;
		border: 1px solid #ff7d4f;
	  }
  
	  .continueBtn2:hover {
		background-color: white;
		box-shadow: 0px 0px 32px 0 #f8f8f850;
		color: #ff7d4f;
		transition-duration: 250ms;
	  }
  
	</style>
  
  <div id="firstModal" class="firstModal" onclick="document.getElementById('firstModal').style.display='none'">
  
  <div class="modal-content" onclick="event.stopPropagation()">
	<div>
	  <img style="position: relative;z-index: 1;" src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/6458f00e1462140aca5e9f19_mySHOEFITTER%20Logo-p-800.png" width="150px">
	  <span colspan="2" onclick="{document.getElementById('firstModal').style.display='none';document.getElementById('mysf_input').style.display='none';document.getElementById('mysf_mob').style.display='block'}" class="close">×</span>
	</div>
	<br>
	  <div id="mysf_input" style="display:none">
		<div class="Form" id="Form">
		  <div style="display:flex;flex-direction:row;border:1px solid #d2d9e4;padding:1px; border-radius:20px;background:#fff;">
		  <input type="text" id="idField" name="idFormField" placeholder="Enter your ID" style="font-family: 'Montserrat',sans-serif;">
		  <input type="text" id="emailField" name="emailField" placeholder="Enter your Email" style="display:none;font-family: 'Montserrat',sans-serif;">
		  <button id="submitBtn" class="submitBtn">Senden</button>
		</div>
		  <div style="background-color: transparent;;width:100%;margin-top:.5em ;margin-bottom:1em">
			<a style="cursor:pointer;float:right; color:grey;" id="forgotButton">ID vergessen?</a>
			<p style="margin: 0;float:left; color:grey;  text-decoration: none;" id="infoText"></p>
		  </div>
		</div>
		</div>
  
	<div id="mysf_mob">
	<h4>Deine perfekte Schuhgröße wartet schon auf dich! 🚀</h4>
	<p>Wenn du schon eine <b>ID</b> hast, kannst du sie unten <b>eingeben</b> und kommst so direkt zu deiner perfekten Größe, <b>oder</b> falls du noch keine Messung durchgeführt hast, klicke auf <b>"Jetzt Fuß vermessen"</b> und folge den Anweisungen.</p>  <br>
	  <button id="continueBtn2" class="continueBtn2" style="display: block; margin: 0 auto;">Jetzt Fuß vermessen</button>
	  <br>
	  <button id="continueBtn" class="continueBtn" style="display: block; margin: 0 auto;">ID eingeben</button>
	</div>
  </div>
  
  
  </div>
  
  
  <style>
	@import url('https://fonts.cdnfonts.com/css/montserrat');
  
	.close {
	  color: #aaaaaa;
	  float: right;
	  font-size: 28px;
	  font-weight: bold;
	  margin-top: -10px;
	}
  
	.close:hover,
	.close:focus {
	  color: #000;
	  text-decoration: none;
	  cursor: pointer;
	}
  
	.modal-content {
	  width: fit-content;
	  background-color:white;
	  background-image: url('https://drive.google.com/file/d/1Iy0CAhHPxLxudZtxkr35WW7UxMuQfAHb/view?usp=sharing');
	  background-repeat: no-repeat;
	  background-size: 100%;    margin-top: auto;
	  margin-bottom: auto;
	  margin-left: auto;
	  margin-right: auto;
	  padding: 30px;
	  border: 0px;
	  border-radius: 20px;
	  box-sizing: content-box;
	  font-family: 'Montserrat', sans-serif;
	  color: #333333;
	  width: 70%;
	  display: flex;
	  flex-direction: column;
	}
  
	.inner-content {
	  align-items: center;
	  justify-content: space-between;
	  font-family: 'Montserrat', sans-serif;
	  margin: auto;
	}
  
	.Form {
	  position: relative;
	  font-family: 'Montserrat', sans-serif;
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: center;
	}
  
	.submitBtn {
	  background-color: #ff7d4f;
	  font-family: 'Montserrat',sans-serif;
	  font-size: 14px;
	  color: #ffffff;
	  border-radius: 20px;
	  border: 1px solid #ff7d4f;
	}
  
	.submitBtn:hover {
	  background-color: white;
	  border:1px solid #ff7d4f;
	  box-shadow: 0px 0px 32px 0 #f8f8f850;
	  color: #ff7d4f;
	  transition-duration: 250ms;
	}
  
	input {
	  border:none;
	  width: -webkit-fill-available;
	  padding-top: 12px;
	  padding-bottom: 12px;
	  padding-left: 16px;
	  border-radius: 20px;
	  background-color: transparent;
	  font-family: 'Montserrat',sans-serif;
	}
  
	input:focus {
	  outline: none;
	  background-color: transparent;
	}
  
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus {
	  -webkit-box-shadow: 0 0 0px 1000px white inset;
	  -webkit-text-fill-color: #333;
	}
  
	input:-moz-autofill {
	  -moz-box-shadow: 0 0 0px 1000px white inset;
	  -moz-text-fill-color: #333;
	}
  
  
	input:-ms-input-placeholder {
	  background-color: transparent !important;
	}
  </style>
  ` : q.innerHTML = `
	<style>
	@import url('https://fonts.cdnfonts.com/css/montserrat');
  
	th, td{
	  border: 0px !important;
	  }
  
	  .firstclose {
		color: #aaaaaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
		margin-top: -10px;
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
		font-family: 'Montserrat',sans-serif;
	  }
	
	  .firstmodal-content {
		display:flex;
		flex-direction: column;
		align-items: center;
		width:1000px;
		background-color:white;
		background-image: url('https://drive.google.com/file/d/1Iy0CAhHPxLxudZtxkr35WW7UxMuQfAHb/view?usp=sharing');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		margin-right: auto;
		padding: 30px;
		padding-right:50px;
		padding-left:50px;
		border: 0px !important;
		border-radius: 20px;
		box-sizing: content-box;
		font-family: 'Montserrat',sans-serif;
		color: #333333;
	  }
	
	  .continueBtn {
		width: 50%;
		background-color: #ff7d4f;
		padding: 12px;
		font-family: 'Montserrat',sans-serif;
		font-size: 14px;
		color: #ffffff;
		border-radius: 20px;
		border: 1px solid #ff7d4f;
	  }
	
	  .continueBtn:hover {
		background-color: white;
		border:1px solid;
		box-shadow: 0px 0px 32px 0 #f8f8f850;
		color: #ff7d4f;
		transition-duration: 250ms;
	  }
	
	</style>
	
  
  
  
	<div id="firstModal" class="firstModal" onclick="document.getElementById('firstModal').style.display='none'">
  
	<div class="modal-content" onclick="event.stopPropagation()" style="display:none;">
	<div style="width: -webkit-fill-available;">
	  <img style="margin-left:30px;position: relative;z-index: 1;" src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/6458f00e1462140aca5e9f19_mySHOEFITTER%20Logo-p-800.png" alt="mySHOEFITTER Logo" class="myshoefitter-logo-icon" width="150px">
	  <span colspan="2" onclick="document.getElementById('firstModal').style.display='none'" class="close">&times;</span>
	</div>
	<br>
	<div class="inner-content" id="inner-content">
	  <div style="width:33.3%;display: flex;flex-direction: column;justify-content: space-around;align-items: center;">
	  <h4>Deine perfekte Schuhgröße wartet schon auf dich! 🚀</h4>
	  <p>Wenn du schon eine <b>ID</b> hast, kannst du sie unten <b>eingeben</b> und kommst so direkt zu deiner perfekten Größe. Falls du noch keine Messung durchgeführt hast, <b>scanne den QR-Code</b> und folge den Anweisungen. <br> <br> Falls du deine <b>ID vergessen</b> hast, kannst du sie über deine Mail herausfinden. </p>
	  <div class="Form" id="Form">
		
		<div style="display:flex;flex-direction:row;width:-webkit-fill-available;border:1px solid #d2d9e4;padding:1px; border-radius:20px;background:#fff;">
		  <input type="text" id="idField" name="idFormField" placeholder="Enter your ID" style="font-family: 'Montserrat',sans-serif;">
		  <input type="text" id="emailField" name="emailField" placeholder="Enter your Email" style="display:none;font-family: 'Montserrat',sans-serif;">
		  <button id="submitBtn" class="submitBtn">Senden</button>
		</div>
		  <div style="background-color: transparent;;width:100%;margin-top:.5em ;margin-bottom:1em">
			<a style="cursor:pointer;float:right; color:grey;" id="forgotButton">ID vergessen?</a>
			<p style="margin: 0;float:left; color:grey;  text-decoration: none;" id="infoText"></p>
		  </div>
	  </div>
	  </div>
	  <div>
		<hr style="width:0px;height:350px;border:1px solid #ff7d4f;border-radius:50%;" />
	  </div>
	  <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
	  <div id="qr-code" class="qr-code"> </div>
	  <center style="color:black;font-size:16 px;margin-top:8px; font-family:'Montserrat',sans-serif;">Scan mich mit deinem Smartphone :-)</center>
	</div>
	</div>
  
  
  
	</div>
  
	<style>
	@import url('https://fonts.cdnfonts.com/css/montserrat');
	
	  th, td{
	  border: 0px !important;
	  }
  
	  .close {
		color: #aaaaaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
		margin-top: -10px;
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
		font-family: 'Montserrat',sans-serif;
	  }
	
	  .modal-content {
		display:flex;
		flex-direction: column;
		align-items: center;
		width: fit-content;
		background-color:white;
		background-image: url('https://drive.google.com/file/d/1Iy0CAhHPxLxudZtxkr35WW7UxMuQfAHb/view?usp=sharing');
		background-repeat: no-repeat;
		background-size: 100%;
		margin: auto;
		padding: 30px;
		border-radius: 20px;
		font-family: 'Montserrat',sans-serif;
		color: #333333;
	  }
	
	  .inner-content {
		font-family: 'Montserrat',sans-serif;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin: auto;
		width: 1000px;
	  }
	
	  .qr-code {
  
	  }
	
	  .Form {
		position:relative;
		width:100%;
		margin-bottom:25px;
		font-family: 'Montserrat',sans-serif;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	  }
	
	  .submitBtn {
		background-color: #ff7d4f;
		font-family: 'Montserrat',sans-serif;
		font-size: 14px;
		color: #ffffff;
		border-radius: 20px;
		border: 1px solid #ff7d4f;
	  }
	
	  .submitBtn:hover {
		background-color: white;
		border:1px solid #ff7d4f;
		box-shadow: 0px 0px 32px 0 #f8f8f850;
		color: #ff7d4f;
		transition-duration: 250ms;
	  }
	
	  input {
		border:none;
		width: -webkit-fill-available;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 16px;
		border-radius: 20px;
		background-color: transparent;
		font-family: 'Montserrat',sans-serif;
	  }
  
	  input:focus {
		outline: none;
		background-color: transparent;
	  }
  
	  input:-webkit-autofill,
	  input:-webkit-autofill:hover,
	  input:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0px 1000px white inset;
		-webkit-text-fill-color: #333;
	  }
  
	  input:-moz-autofill {
		-moz-box-shadow: 0 0 0px 1000px white inset;
		-moz-text-fill-color: #333;
	  }
  
  
	  input:-ms-input-placeholder {
		background-color: transparent !important;
	  }
	</style>
	`;
  document.querySelector("#mySF_Widget_Button").onclick = function() {
	q.style.display = "flex", document.querySelector(".modal-content").style.display = "flex", P || $t()
  };
  document.querySelector("#submitBtn").onclick = function() {
	var n = document.querySelector("#idField"),
	  e = document.querySelector("#emailField"),
	  t = n.value,
	  r = e.value;
	t != "" && (Kt(t), console.log("ID submitted!")), r != "" && (Wt(r), console.log("Email submitted!")), qe && (document.getElementById("forgotButton").textContent = "ID vergessen?", document.getElementById("emailField").style.display = "none", document.getElementById("idField").style.display = "flex")
  };
  P && (document.querySelector("#continueBtn2").onclick = function() {
	window.open(le, "_blank")
  }, document.querySelector("#continueBtn").onclick = function() {
	document.getElementById("mysf_mob").style.display = "none", document.getElementById("mysf_input").style.display = "block"
  });
  var te = !1;
  document.querySelector("#forgotButton").onclick = function() {
	te ? (document.querySelector("#emailField").style.display = "none", document.querySelector("#idField").style.display = "flex", document.querySelector("#forgotButton").textContent = "ID vergessen?", document.querySelector("#infoText").textContent = " ", te = !1) : (document.querySelector("#emailField").style.display = "flex", document.querySelector("#idField").style.display = "none", document.querySelector("#forgotButton").textContent = "ID eingeben", document.querySelector("#infoText").textContent = " ", te = !0, qe = !0)
  };
  document.querySelector("#idField").onclick = function() {
	document.querySelector("#infoText").textContent = " "
  };
  window.addEventListener("resize", function() {
	screen.width <= 768 ? (P = !0, console.log("MOBILE DEVICE VIEW")) : (console.log("DESKTOP DEVICE VIEW"), P = !1)
  });
  
  function Kt(n) {
	var e = new Headers;
	e.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"), e.append("Content-Type", "application/json");
	var t = JSON.stringify({
		code: n
	  }),
	  r = {
		method: "POST",
		headers: e,
		body: t,
		redirect: "follow"
	  };
	fetch("https://admin.myshoefitter.com/flows/trigger/c7a5aa72-8ff2-4398-b910-a88994aeab4c", r).then(s => s.json()).then(s => {
	  console.log(s);
	  const l = s[0].size;
	  console.log(l), document.querySelector("#infoText").textContent = "ID gesendet!"
	}).catch(s => {
	  console.log("error", s), document.querySelector("#infoText").textContent = "Dieser Code exisitert nicht!"
	})
  }
  
  function Wt(n) {
	var e = new Headers;
	e.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"), e.append("Content-Type", "application/json");
	var t = JSON.stringify({
		email: n
	  }),
	  r = {
		method: "POST",
		headers: e,
		body: t,
		redirect: "follow"
	  };
	fetch("https://admin.myshoefitter.com/flows/trigger/bc96cffb-f215-4b8e-ba65-481d8c29e910", r).then(s => s.json()).then(s => {
	  console.log(s)
	}).catch(s => {
	  console.log("error", s), document.querySelector("#infoText").textContent = "Email nicht gefunden"
	})
  }
  
  function $t() {
	var n = document.querySelector("#inner-content");
	if (!P) {
	  document.querySelector("#qr-code").innerHTML = "";
	  var e = n.clientWidth * .333;
	  Ke.render({
		text: le,
		radius: Ft,
		ecLevel: zt,
		fill: qt,
		background: null,
		size: e
	  }, document.querySelector("#qr-code"))
	}
  };