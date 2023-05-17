(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
	new MutationObserver(s => {
	  for (const l of s)
		if (l.type === "childList")
		  for (const m of l.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && i(m)
	}).observe(document, {
	  childList: !0,
	  subtree: !0
	});
  
	function e(s) {
	  const l = {};
	  return s.integrity && (l.integrity = s.integrity), s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? l.credentials = "include" : s.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
	}
  
	function i(s) {
	  if (s.ep) return;
	  s.ep = !0;
	  const l = e(s);
	  fetch(s.href, l)
	}
  })();
  let bt = null;
  class xt {}
  xt.render = function(n, t) {
	bt(n, t)
  };
  self.QrCreator = xt;
  (function(n) {
	function t(v, a, c, p) {
	  var o = {},
		r = n(c, a);
	  r.u(v), r.J(), p = p || 0;
	  var u = r.h(),
		d = r.h() + 2 * p;
	  return o.text = v, o.level = a, o.version = c, o.O = d, o.a = function(y, B) {
		return y -= p, B -= p, 0 > y || y >= u || 0 > B || B >= u ? !1 : r.a(y, B)
	  }, o
	}
  
	function e(v, a, c, p, o, r, u, d, y, B) {
	  function T(g, b, f, h, w, _, k) {
		g ? (v.lineTo(b + _, f + k), v.arcTo(b, f, h, w, r)) : v.lineTo(b, f)
	  }
	  u ? v.moveTo(a + r, c) : v.moveTo(a, c), T(d, p, c, p, o, -r, 0), T(y, p, o, a, o, 0, -r), T(B, a, o, a, c, r, 0), T(u, a, c, p, c, 0, r)
	}
  
	function i(v, a, c, p, o, r, u, d, y, B) {
	  function T(g, b, f, h) {
		v.moveTo(g + f, b), v.lineTo(g, b), v.lineTo(g, b + h), v.arcTo(g, b, g + f, b, r)
	  }
	  u && T(a, c, r, r), d && T(p, c, -r, r), y && T(p, o, -r, -r), B && T(a, o, r, -r)
	}
  
	function s(v, a) {
	  var c = a.fill;
	  if (typeof c == "string") v.fillStyle = c;
	  else {
		var p = c.type,
		  o = c.colorStops;
		if (c = c.position.map(u => Math.round(u * a.size)), p === "linear-gradient") var r = v.createLinearGradient.apply(v, c);
		else if (p === "radial-gradient") r = v.createRadialGradient.apply(v, c);
		else throw Error("Unsupported fill");
		o.forEach(([u, d]) => {
		  r.addColorStop(u, d)
		}), v.fillStyle = r
	  }
	}
  
	function l(v, a) {
	  t: {
		var c = a.text,
		  p = a.v,
		  o = a.N,
		  r = a.K,
		  u = a.P;
		for (o = Math.max(1, o || 1), r = Math.min(40, r || 40); o <= r; o += 1) try {
		  var d = t(c, p, o, u);
		  break t
		} catch {}
		d = void 0
	  }
	  if (!d) return null;
	  for (c = v.getContext("2d"), a.background && (c.fillStyle = a.background, c.fillRect(a.left, a.top, a.size, a.size)), p = d.O, r = a.size / p, c.beginPath(), u = 0; u < p; u += 1)
		for (o = 0; o < p; o += 1) {
		  var y = c,
			B = a.left + o * r,
			T = a.top + u * r,
			g = u,
			b = o,
			f = d.a,
			h = B + r,
			w = T + r,
			_ = g - 1,
			k = g + 1,
			E = b - 1,
			x = b + 1,
			N = Math.floor(Math.min(.5, Math.max(0, a.R)) * r),
			P = f(g, b),
			z = f(_, E),
			W = f(_, b);
		  _ = f(_, x);
		  var $ = f(g, x);
		  x = f(k, x), b = f(k, b), k = f(k, E), g = f(g, E), B = Math.round(B), T = Math.round(T), h = Math.round(h), w = Math.round(w), P ? e(y, B, T, h, w, N, !W && !g, !W && !$, !b && !$, !b && !g) : i(y, B, T, h, w, N, W && g && z, W && $ && _, b && $ && x, b && g && k)
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
	bt = function(v, a) {
	  var c = {};
	  Object.assign(c, m, v), c.N = c.minVersion, c.K = c.maxVersion, c.v = c.ecLevel, c.left = c.left, c.top = c.top, c.size = c.size, c.fill = c.fill, c.background = c.background, c.text = c.text, c.R = c.radius, c.P = c.quiet, a instanceof HTMLCanvasElement ? ((a.width !== c.size || a.height !== c.size) && (a.width = c.size, a.height = c.size), a.getContext("2d").clearRect(0, 0, a.width, a.height), l(a, c)) : (v = document.createElement("canvas"), v.width = c.size, v.height = c.size, c = l(v, c), a.appendChild(c))
	}
  })(function() {
	function n(a) {
	  var c = e.s(a);
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
  
	function t() {
	  var a = [],
		c = 0,
		p = {
		  B: function() {
			return a
		  },
		  c: function(o) {
			return (a[Math.floor(o / 8)] >>> 7 - o % 8 & 1) == 1
		  },
		  put: function(o, r) {
			for (var u = 0; u < r; u += 1) p.m((o >>> r - u - 1 & 1) == 1)
		  },
		  f: function() {
			return c
		  },
		  m: function(o) {
			var r = Math.floor(c / 8);
			a.length <= r && a.push(0), o && (a[r] |= 128 >>> c % 8), c += 1
		  }
		};
	  return p
	}
  
	function e(a, c) {
	  function p(g, b) {
		for (var f = -1; 7 >= f; f += 1)
		  if (!(-1 >= g + f || d <= g + f))
			for (var h = -1; 7 >= h; h += 1) - 1 >= b + h || d <= b + h || (u[g + f][b + h] = 0 <= f && 6 >= f && (h == 0 || h == 6) || 0 <= h && 6 >= h && (f == 0 || f == 6) || 2 <= f && 4 >= f && 2 <= h && 4 >= h)
	  }
  
	  function o(g, b) {
		for (var f = d = 4 * a + 17, h = Array(f), w = 0; w < f; w += 1) {
		  h[w] = Array(f);
		  for (var _ = 0; _ < f; _ += 1) h[w][_] = null
		}
		for (u = h, p(0, 0), p(d - 7, 0), p(0, d - 7), f = l.G(a), h = 0; h < f.length; h += 1)
		  for (w = 0; w < f.length; w += 1) {
			_ = f[h];
			var k = f[w];
			if (u[_][k] == null)
			  for (var E = -2; 2 >= E; E += 1)
				for (var x = -2; 2 >= x; x += 1) u[_ + E][k + x] = E == -2 || E == 2 || x == -2 || x == 2 || E == 0 && x == 0
		  }
		for (f = 8; f < d - 8; f += 1) u[f][6] == null && (u[f][6] = f % 2 == 0);
		for (f = 8; f < d - 8; f += 1) u[6][f] == null && (u[6][f] = f % 2 == 0);
		for (f = l.w(r << 3 | b), h = 0; 15 > h; h += 1) w = !g && (f >> h & 1) == 1, u[6 > h ? h : 8 > h ? h + 1 : d - 15 + h][8] = w, u[8][8 > h ? d - h - 1 : 9 > h ? 15 - h : 14 - h] = w;
		if (u[d - 8][8] = !g, 7 <= a) {
		  for (f = l.A(a), h = 0; 18 > h; h += 1) w = !g && (f >> h & 1) == 1, u[Math.floor(h / 3)][h % 3 + d - 8 - 3] = w;
		  for (h = 0; 18 > h; h += 1) w = !g && (f >> h & 1) == 1, u[h % 3 + d - 8 - 3][Math.floor(h / 3)] = w
		}
		if (y == null) {
		  for (g = v.I(a, r), f = t(), h = 0; h < B.length; h += 1) w = B[h], f.put(4, 4), f.put(w.b(), l.f(4, a)), w.write(f);
		  for (h = w = 0; h < g.length; h += 1) w += g[h].j;
		  if (f.f() > 8 * w) throw Error("code length overflow. (" + f.f() + ">" + 8 * w + ")");
		  for (f.f() + 4 <= 8 * w && f.put(0, 4); f.f() % 8 != 0;) f.m(!1);
		  for (; !(f.f() >= 8 * w) && (f.put(236, 8), !(f.f() >= 8 * w));) f.put(17, 8);
		  var N = 0;
		  for (w = h = 0, _ = Array(g.length), k = Array(g.length), E = 0; E < g.length; E += 1) {
			var P = g[E].j,
			  z = g[E].o - P;
			for (h = Math.max(h, P), w = Math.max(w, z), _[E] = Array(P), x = 0; x < _[E].length; x += 1) _[E][x] = 255 & f.B()[x + N];
			for (N += P, x = l.C(z), P = i(_[E], x.b() - 1).l(x), k[E] = Array(x.b() - 1), x = 0; x < k[E].length; x += 1) z = x + P.b() - k[E].length, k[E][x] = 0 <= z ? P.c(z) : 0
		  }
		  for (x = f = 0; x < g.length; x += 1) f += g[x].o;
		  for (f = Array(f), x = N = 0; x < h; x += 1)
			for (E = 0; E < g.length; E += 1) x < _[E].length && (f[N] = _[E][x], N += 1);
		  for (x = 0; x < w; x += 1)
			for (E = 0; E < g.length; E += 1) x < k[E].length && (f[N] = k[E][x], N += 1);
		  y = f
		}
		for (g = y, f = -1, h = d - 1, w = 7, _ = 0, b = l.F(b), k = d - 1; 0 < k; k -= 2)
		  for (k == 6 && --k;;) {
			for (E = 0; 2 > E; E += 1) u[h][k - E] == null && (x = !1, _ < g.length && (x = (g[_] >>> w & 1) == 1), b(h, k - E) && (x = !x), u[h][k - E] = x, --w, w == -1 && (_ += 1, w = 7));
			if (h += f, 0 > h || d <= h) {
			  h -= f, f = -f;
			  break
			}
		  }
	  }
	  var r = s[c],
		u = null,
		d = 0,
		y = null,
		B = [],
		T = {
		  u: function(g) {
			g = n(g), B.push(g), y = null
		  },
		  a: function(g, b) {
			if (0 > g || d <= g || 0 > b || d <= b) throw Error(g + "," + b);
			return u[g][b]
		  },
		  h: function() {
			return d
		  },
		  J: function() {
			for (var g = 0, b = 0, f = 0; 8 > f; f += 1) {
			  o(!0, f);
			  var h = l.D(T);
			  (f == 0 || g > h) && (g = h, b = f)
			}
			o(!1, b)
		  }
		};
	  return T
	}
  
	function i(a, c) {
	  if (typeof a.length > "u") throw Error(a.length + "/" + c);
	  var p = function() {
		  for (var r = 0; r < a.length && a[r] == 0;) r += 1;
		  for (var u = Array(a.length - r + c), d = 0; d < a.length - r; d += 1) u[d] = a[d + r];
		  return u
		}(),
		o = {
		  c: function(r) {
			return p[r]
		  },
		  b: function() {
			return p.length
		  },
		  multiply: function(r) {
			for (var u = Array(o.b() + r.b() - 1), d = 0; d < o.b(); d += 1)
			  for (var y = 0; y < r.b(); y += 1) u[d + y] ^= m.i(m.g(o.c(d)) + m.g(r.c(y)));
			return i(u, 0)
		  },
		  l: function(r) {
			if (0 > o.b() - r.b()) return o;
			for (var u = m.g(o.c(0)) - m.g(r.c(0)), d = Array(o.b()), y = 0; y < o.b(); y += 1) d[y] = o.c(y);
			for (y = 0; y < r.b(); y += 1) d[y] ^= m.i(m.g(r.c(y)) + u);
			return i(d, 0).l(r)
		  }
		};
	  return o
	}
	e.s = function(a) {
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
		  for (var r = 0; o != 0;) r += 1, o >>>= 1;
		  return r
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
			  for (var r = o << 10; 0 <= a(r) - a(1335);) r ^= 1335 << a(r) - a(1335);
			  return (o << 10 | r) ^ 21522
			},
			A: function(o) {
			  for (var r = o << 12; 0 <= a(r) - a(7973);) r ^= 7973 << a(r) - a(7973);
			  return o << 12 | r
			},
			G: function(o) {
			  return c[o - 1]
			},
			F: function(o) {
			  switch (o) {
				case 0:
				  return function(r, u) {
					return (r + u) % 2 == 0
				  };
				case 1:
				  return function(r) {
					return r % 2 == 0
				  };
				case 2:
				  return function(r, u) {
					return u % 3 == 0
				  };
				case 3:
				  return function(r, u) {
					return (r + u) % 3 == 0
				  };
				case 4:
				  return function(r, u) {
					return (Math.floor(r / 2) + Math.floor(u / 3)) % 2 == 0
				  };
				case 5:
				  return function(r, u) {
					return r * u % 2 + r * u % 3 == 0
				  };
				case 6:
				  return function(r, u) {
					return (r * u % 2 + r * u % 3) % 2 == 0
				  };
				case 7:
				  return function(r, u) {
					return (r * u % 3 + (r + u) % 2) % 2 == 0
				  };
				default:
				  throw Error("bad maskPattern:" + o)
			  }
			},
			C: function(o) {
			  for (var r = i([1], 0), u = 0; u < o; u += 1) r = r.multiply(i([1, m.i(u)], 0));
			  return r
			},
			f: function(o, r) {
			  if (o != 4 || 1 > r || 40 < r) throw Error("mode: " + o + "; type: " + r);
			  return 10 > r ? 8 : 16
			},
			D: function(o) {
			  for (var r = o.h(), u = 0, d = 0; d < r; d += 1)
				for (var y = 0; y < r; y += 1) {
				  for (var B = 0, T = o.a(d, y), g = -1; 1 >= g; g += 1)
					if (!(0 > d + g || r <= d + g))
					  for (var b = -1; 1 >= b; b += 1) 0 > y + b || r <= y + b || (g != 0 || b != 0) && T == o.a(d + g, y + b) && (B += 1);
				  5 < B && (u += 3 + B - 5)
				}
			  for (d = 0; d < r - 1; d += 1)
				for (y = 0; y < r - 1; y += 1) B = 0, o.a(d, y) && (B += 1), o.a(d + 1, y) && (B += 1), o.a(d, y + 1) && (B += 1), o.a(d + 1, y + 1) && (B += 1), (B == 0 || B == 4) && (u += 3);
			  for (d = 0; d < r; d += 1)
				for (y = 0; y < r - 6; y += 1) o.a(d, y) && !o.a(d, y + 1) && o.a(d, y + 2) && o.a(d, y + 3) && o.a(d, y + 4) && !o.a(d, y + 5) && o.a(d, y + 6) && (u += 40);
			  for (y = 0; y < r; y += 1)
				for (d = 0; d < r - 6; d += 1) o.a(d, y) && !o.a(d + 1, y) && o.a(d + 2, y) && o.a(d + 3, y) && o.a(d + 4, y) && !o.a(d + 5, y) && o.a(d + 6, y) && (u += 40);
			  for (y = B = 0; y < r; y += 1)
				for (d = 0; d < r; d += 1) o.a(d, y) && (B += 1);
			  return u += Math.abs(100 * B / r / r - 50) / 5 * 10
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
		function a(o, r) {
		  switch (r) {
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
			I: function(o, r) {
			  var u = a(o, r);
			  if (typeof u > "u") throw Error("bad rs block @ typeNumber:" + o + "/errorCorrectLevel:" + r);
			  o = u.length / 3, r = [];
			  for (var d = 0; d < o; d += 1)
				for (var y = u[3 * d], B = u[3 * d + 1], T = u[3 * d + 2], g = 0; g < y; g += 1) {
				  var b = T,
					f = {};
				  f.o = B, f.j = b, r.push(f)
				}
			  return r
			}
		  };
		return p
	  }();
	return e
  }());
  const Kt = QrCreator,
	M = Object.create(null);
  M.open = "0";
  M.close = "1";
  M.ping = "2";
  M.pong = "3";
  M.message = "4";
  M.upgrade = "5";
  M.noop = "6";
  const J = Object.create(null);
  Object.keys(M).forEach(n => {
	J[M[n]] = n
  });
  const Wt = {
	  type: "error",
	  data: "parser error"
	},
	$t = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
	Yt = typeof ArrayBuffer == "function",
	Qt = n => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer,
	wt = ({
	  type: n,
	  data: t
	}, e, i) => $t && t instanceof Blob ? e ? i(t) : ft(t, i) : Yt && (t instanceof ArrayBuffer || Qt(t)) ? e ? i(t) : ft(new Blob([t]), i) : i(M[n] + (t || "")),
	ft = (n, t) => {
	  const e = new FileReader;
	  return e.onload = function() {
		const i = e.result.split(",")[1];
		t("b" + (i || ""))
	  }, e.readAsDataURL(n)
	},
	dt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	K = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (let n = 0; n < dt.length; n++) K[dt.charCodeAt(n)] = n;
  const jt = n => {
	  let t = n.length * .75,
		e = n.length,
		i, s = 0,
		l, m, v, a;
	  n[n.length - 1] === "=" && (t--, n[n.length - 2] === "=" && t--);
	  const c = new ArrayBuffer(t),
		p = new Uint8Array(c);
	  for (i = 0; i < e; i += 4) l = K[n.charCodeAt(i)], m = K[n.charCodeAt(i + 1)], v = K[n.charCodeAt(i + 2)], a = K[n.charCodeAt(i + 3)], p[s++] = l << 2 | m >> 4, p[s++] = (m & 15) << 4 | v >> 2, p[s++] = (v & 3) << 6 | a & 63;
	  return c
	},
	Jt = typeof ArrayBuffer == "function",
	Et = (n, t) => {
	  if (typeof n != "string") return {
		type: "message",
		data: Ct(n, t)
	  };
	  const e = n.charAt(0);
	  return e === "b" ? {
		type: "message",
		data: Xt(n.substring(1), t)
	  } : J[e] ? n.length > 1 ? {
		type: J[e],
		data: n.substring(1)
	  } : {
		type: J[e]
	  } : Wt
	},
	Xt = (n, t) => {
	  if (Jt) {
		const e = jt(n);
		return Ct(e, t)
	  } else return {
		base64: !0,
		data: n
	  }
	},
	Ct = (n, t) => {
	  switch (t) {
		case "blob":
		  return n instanceof ArrayBuffer ? new Blob([n]) : n;
		case "arraybuffer":
		default:
		  return n
	  }
	},
	Bt = String.fromCharCode(30),
	Gt = (n, t) => {
	  const e = n.length,
		i = new Array(e);
	  let s = 0;
	  n.forEach((l, m) => {
		wt(l, !1, v => {
		  i[m] = v, ++s === e && t(i.join(Bt))
		})
	  })
	},
	Zt = (n, t) => {
	  const e = n.split(Bt),
		i = [];
	  for (let s = 0; s < e.length; s++) {
		const l = Et(e[s], t);
		if (i.push(l), l.type === "error") break
	  }
	  return i
	},
	_t = 4;
  
  function A(n) {
	if (n) return te(n)
  }
  
  function te(n) {
	for (var t in A.prototype) n[t] = A.prototype[t];
	return n
  }
  A.prototype.on = A.prototype.addEventListener = function(n, t) {
	return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(t), this
  };
  A.prototype.once = function(n, t) {
	function e() {
	  this.off(n, e), t.apply(this, arguments)
	}
	return e.fn = t, this.on(n, e), this
  };
  A.prototype.off = A.prototype.removeListener = A.prototype.removeAllListeners = A.prototype.removeEventListener = function(n, t) {
	if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
	var e = this._callbacks["$" + n];
	if (!e) return this;
	if (arguments.length == 1) return delete this._callbacks["$" + n], this;
	for (var i, s = 0; s < e.length; s++)
	  if (i = e[s], i === t || i.fn === t) {
		e.splice(s, 1);
		break
	  } return e.length === 0 && delete this._callbacks["$" + n], this
  };
  A.prototype.emit = function(n) {
	this._callbacks = this._callbacks || {};
	for (var t = new Array(arguments.length - 1), e = this._callbacks["$" + n], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
	if (e) {
	  e = e.slice(0);
	  for (var i = 0, s = e.length; i < s; ++i) e[i].apply(this, t)
	}
	return this
  };
  A.prototype.emitReserved = A.prototype.emit;
  A.prototype.listeners = function(n) {
	return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || []
  };
  A.prototype.hasListeners = function(n) {
	return !!this.listeners(n).length
  };
  const R = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
  
  function kt(n, ...t) {
	return t.reduce((e, i) => (n.hasOwnProperty(i) && (e[i] = n[i]), e), {})
  }
  const ee = R.setTimeout,
	ne = R.clearTimeout;
  
  function Z(n, t) {
	t.useNativeTimers ? (n.setTimeoutFn = ee.bind(R), n.clearTimeoutFn = ne.bind(R)) : (n.setTimeoutFn = R.setTimeout.bind(R), n.clearTimeoutFn = R.clearTimeout.bind(R))
  }
  const ie = 1.33;
  
  function re(n) {
	return typeof n == "string" ? se(n) : Math.ceil((n.byteLength || n.size) * ie)
  }
  
  function se(n) {
	let t = 0,
	  e = 0;
	for (let i = 0, s = n.length; i < s; i++) t = n.charCodeAt(i), t < 128 ? e += 1 : t < 2048 ? e += 2 : t < 55296 || t >= 57344 ? e += 3 : (i++, e += 4);
	return e
  }
  class oe extends Error {
	constructor(t, e, i) {
	  super(t), this.description = e, this.context = i, this.type = "TransportError"
	}
  }
  class Tt extends A {
	constructor(t) {
	  super(), this.writable = !1, Z(this, t), this.opts = t, this.query = t.query, this.socket = t.socket
	}
	onError(t, e, i) {
	  return super.emitReserved("error", new oe(t, e, i)), this
	}
	open() {
	  return this.readyState = "opening", this.doOpen(), this
	}
	close() {
	  return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
	}
	send(t) {
	  this.readyState === "open" && this.write(t)
	}
	onOpen() {
	  this.readyState = "open", this.writable = !0, super.emitReserved("open")
	}
	onData(t) {
	  const e = Et(t, this.socket.binaryType);
	  this.onPacket(e)
	}
	onPacket(t) {
	  super.emitReserved("packet", t)
	}
	onClose(t) {
	  this.readyState = "closed", super.emitReserved("close", t)
	}
	pause(t) {}
  }
  const At = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
	it = 64,
	ae = {};
  let ut = 0,
	Y = 0,
	ht;
  
  function pt(n) {
	let t = "";
	do t = At[n % it] + t, n = Math.floor(n / it); while (n > 0);
	return t
  }
  
  function St() {
	const n = pt(+new Date);
	return n !== ht ? (ut = 0, ht = n) : n + "." + pt(ut++)
  }
  for (; Y < it; Y++) ae[At[Y]] = Y;
  
  function Ot(n) {
	let t = "";
	for (let e in n) n.hasOwnProperty(e) && (t.length && (t += "&"), t += encodeURIComponent(e) + "=" + encodeURIComponent(n[e]));
	return t
  }
  
  function ce(n) {
	let t = {},
	  e = n.split("&");
	for (let i = 0, s = e.length; i < s; i++) {
	  let l = e[i].split("=");
	  t[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
	}
	return t
  }
  let Rt = !1;
  try {
	Rt = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
  } catch {}
  const le = Rt;
  
  function Lt(n) {
	const t = n.xdomain;
	try {
	  if (typeof XMLHttpRequest < "u" && (!t || le)) return new XMLHttpRequest
	} catch {}
	if (!t) try {
	  return new R[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
	} catch {}
  }
  
  function fe() {}
  const de = function() {
	return new Lt({
	  xdomain: !1
	}).responseType != null
  }();
  class ue extends Tt {
	constructor(t) {
	  if (super(t), this.polling = !1, typeof location < "u") {
		const i = location.protocol === "https:";
		let s = location.port;
		s || (s = i ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || s !== t.port, this.xs = t.secure !== i
	  }
	  const e = t && t.forceBase64;
	  this.supportsBinary = de && !e
	}
	get name() {
	  return "polling"
	}
	doOpen() {
	  this.poll()
	}
	pause(t) {
	  this.readyState = "pausing";
	  const e = () => {
		this.readyState = "paused", t()
	  };
	  if (this.polling || !this.writable) {
		let i = 0;
		this.polling && (i++, this.once("pollComplete", function() {
		  --i || e()
		})), this.writable || (i++, this.once("drain", function() {
		  --i || e()
		}))
	  } else e()
	}
	poll() {
	  this.polling = !0, this.doPoll(), this.emitReserved("poll")
	}
	onData(t) {
	  const e = i => {
		if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close") return this.onClose({
		  description: "transport closed by the server"
		}), !1;
		this.onPacket(i)
	  };
	  Zt(t, this.socket.binaryType).forEach(e), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll())
	}
	doClose() {
	  const t = () => {
		this.write([{
		  type: "close"
		}])
	  };
	  this.readyState === "open" ? t() : this.once("open", t)
	}
	write(t) {
	  this.writable = !1, Gt(t, e => {
		this.doWrite(e, () => {
		  this.writable = !0, this.emitReserved("drain")
		})
	  })
	}
	uri() {
	  let t = this.query || {};
	  const e = this.opts.secure ? "https" : "http";
	  let i = "";
	  this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = St()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.opts.port && (e === "https" && Number(this.opts.port) !== 443 || e === "http" && Number(this.opts.port) !== 80) && (i = ":" + this.opts.port);
	  const s = Ot(t),
		l = this.opts.hostname.indexOf(":") !== -1;
	  return e + "://" + (l ? "[" + this.opts.hostname + "]" : this.opts.hostname) + i + this.opts.path + (s.length ? "?" + s : "")
	}
	request(t = {}) {
	  return Object.assign(t, {
		xd: this.xd,
		xs: this.xs
	  }, this.opts), new I(this.uri(), t)
	}
	doWrite(t, e) {
	  const i = this.request({
		method: "POST",
		data: t
	  });
	  i.on("success", e), i.on("error", (s, l) => {
		this.onError("xhr post error", s, l)
	  })
	}
	doPoll() {
	  const t = this.request();
	  t.on("data", this.onData.bind(this)), t.on("error", (e, i) => {
		this.onError("xhr poll error", e, i)
	  }), this.pollXhr = t
	}
  }
  class I extends A {
	constructor(t, e) {
	  super(), Z(this, e), this.opts = e, this.method = e.method || "GET", this.uri = t, this.async = e.async !== !1, this.data = e.data !== void 0 ? e.data : null, this.create()
	}
	create() {
	  const t = kt(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
	  t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
	  const e = this.xhr = new Lt(t);
	  try {
		e.open(this.method, this.uri, this.async);
		try {
		  if (this.opts.extraHeaders) {
			e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0);
			for (let i in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(i) && e.setRequestHeader(i, this.opts.extraHeaders[i])
		  }
		} catch {}
		if (this.method === "POST") try {
		  e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
		} catch {}
		try {
		  e.setRequestHeader("Accept", "*/*")
		} catch {}
		"withCredentials" in e && (e.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (e.timeout = this.opts.requestTimeout), e.onreadystatechange = () => {
		  e.readyState === 4 && (e.status === 200 || e.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
			this.onError(typeof e.status == "number" ? e.status : 0)
		  }, 0))
		}, e.send(this.data)
	  } catch (i) {
		this.setTimeoutFn(() => {
		  this.onError(i)
		}, 0);
		return
	  }
	  typeof document < "u" && (this.index = I.requestsCount++, I.requests[this.index] = this)
	}
	onError(t) {
	  this.emitReserved("error", t, this.xhr), this.cleanup(!0)
	}
	cleanup(t) {
	  if (!(typeof this.xhr > "u" || this.xhr === null)) {
		if (this.xhr.onreadystatechange = fe, t) try {
		  this.xhr.abort()
		} catch {}
		typeof document < "u" && delete I.requests[this.index], this.xhr = null
	  }
	}
	onLoad() {
	  const t = this.xhr.responseText;
	  t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup())
	}
	abort() {
	  this.cleanup()
	}
  }
  I.requestsCount = 0;
  I.requests = {};
  if (typeof document < "u") {
	if (typeof attachEvent == "function") attachEvent("onunload", mt);
	else if (typeof addEventListener == "function") {
	  const n = "onpagehide" in R ? "pagehide" : "unload";
	  addEventListener(n, mt, !1)
	}
  }
  
  function mt() {
	for (let n in I.requests) I.requests.hasOwnProperty(n) && I.requests[n].abort()
  }
  const Nt = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? t => Promise.resolve().then(t) : (t, e) => e(t, 0))(),
	Q = R.WebSocket || R.MozWebSocket,
	yt = !0,
	he = "arraybuffer",
	gt = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
  class pe extends Tt {
	constructor(t) {
	  super(t), this.supportsBinary = !t.forceBase64
	}
	get name() {
	  return "websocket"
	}
	doOpen() {
	  if (!this.check()) return;
	  const t = this.uri(),
		e = this.opts.protocols,
		i = gt ? {} : kt(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
	  this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
	  try {
		this.ws = yt && !gt ? e ? new Q(t, e) : new Q(t) : new Q(t, e, i)
	  } catch (s) {
		return this.emitReserved("error", s)
	  }
	  this.ws.binaryType = this.socket.binaryType || he, this.addEventListeners()
	}
	addEventListeners() {
	  this.ws.onopen = () => {
		this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
	  }, this.ws.onclose = t => this.onClose({
		description: "websocket connection closed",
		context: t
	  }), this.ws.onmessage = t => this.onData(t.data), this.ws.onerror = t => this.onError("websocket error", t)
	}
	write(t) {
	  this.writable = !1;
	  for (let e = 0; e < t.length; e++) {
		const i = t[e],
		  s = e === t.length - 1;
		wt(i, this.supportsBinary, l => {
		  const m = {};
		  try {
			yt && this.ws.send(l)
		  } catch {}
		  s && Nt(() => {
			this.writable = !0, this.emitReserved("drain")
		  }, this.setTimeoutFn)
		})
	  }
	}
	doClose() {
	  typeof this.ws < "u" && (this.ws.close(), this.ws = null)
	}
	uri() {
	  let t = this.query || {};
	  const e = this.opts.secure ? "wss" : "ws";
	  let i = "";
	  this.opts.port && (e === "wss" && Number(this.opts.port) !== 443 || e === "ws" && Number(this.opts.port) !== 80) && (i = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = St()), this.supportsBinary || (t.b64 = 1);
	  const s = Ot(t),
		l = this.opts.hostname.indexOf(":") !== -1;
	  return e + "://" + (l ? "[" + this.opts.hostname + "]" : this.opts.hostname) + i + this.opts.path + (s.length ? "?" + s : "")
	}
	check() {
	  return !!Q
	}
  }
  const me = {
	  websocket: pe,
	  polling: ue
	},
	ye = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
	ge = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
  
  function rt(n) {
	const t = n,
	  e = n.indexOf("["),
	  i = n.indexOf("]");
	e != -1 && i != -1 && (n = n.substring(0, e) + n.substring(e, i).replace(/:/g, ";") + n.substring(i, n.length));
	let s = ye.exec(n || ""),
	  l = {},
	  m = 14;
	for (; m--;) l[ge[m]] = s[m] || "";
	return e != -1 && i != -1 && (l.source = t, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"), l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), l.ipv6uri = !0), l.pathNames = ve(l, l.path), l.queryKey = be(l, l.query), l
  }
  
  function ve(n, t) {
	const e = /\/{2,9}/g,
	  i = t.replace(e, "/").split("/");
	return (t.slice(0, 1) == "/" || t.length === 0) && i.splice(0, 1), t.slice(-1) == "/" && i.splice(i.length - 1, 1), i
  }
  
  function be(n, t) {
	const e = {};
	return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, s, l) {
	  s && (e[s] = l)
	}), e
  }
  let It = class D extends A {
	constructor(t, e = {}) {
	  super(), this.writeBuffer = [], t && typeof t == "object" && (e = t, t = null), t ? (t = rt(t), e.hostname = t.host, e.secure = t.protocol === "https" || t.protocol === "wss", e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = rt(e.host).host), Z(this, e), this.secure = e.secure != null ? e.secure : typeof location < "u" && location.protocol === "https:", e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.hostname = e.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = e.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = e.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
	  }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = ce(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
		this.transport && (this.transport.removeAllListeners(), this.transport.close())
	  }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
		this.onClose("transport close", {
		  description: "network connection lost"
		})
	  }, addEventListener("offline", this.offlineEventListener, !1))), this.open()
	}
	createTransport(t) {
	  const e = Object.assign({}, this.opts.query);
	  e.EIO = _t, e.transport = t, this.id && (e.sid = this.id);
	  const i = Object.assign({}, this.opts.transportOptions[t], this.opts, {
		query: e,
		socket: this,
		hostname: this.hostname,
		secure: this.secure,
		port: this.port
	  });
	  return new me[t](i)
	}
	open() {
	  let t;
	  if (this.opts.rememberUpgrade && D.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket";
	  else if (this.transports.length === 0) {
		this.setTimeoutFn(() => {
		  this.emitReserved("error", "No transports available")
		}, 0);
		return
	  } else t = this.transports[0];
	  this.readyState = "opening";
	  try {
		t = this.createTransport(t)
	  } catch {
		this.transports.shift(), this.open();
		return
	  }
	  t.open(), this.setTransport(t)
	}
	setTransport(t) {
	  this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", e => this.onClose("transport close", e))
	}
	probe(t) {
	  let e = this.createTransport(t),
		i = !1;
	  D.priorWebsocketSuccess = !1;
	  const s = () => {
		i || (e.send([{
		  type: "ping",
		  data: "probe"
		}]), e.once("packet", o => {
		  if (!i)
			if (o.type === "pong" && o.data === "probe") {
			  if (this.upgrading = !0, this.emitReserved("upgrading", e), !e) return;
			  D.priorWebsocketSuccess = e.name === "websocket", this.transport.pause(() => {
				i || this.readyState !== "closed" && (p(), this.setTransport(e), e.send([{
				  type: "upgrade"
				}]), this.emitReserved("upgrade", e), e = null, this.upgrading = !1, this.flush())
			  })
			} else {
			  const r = new Error("probe error");
			  r.transport = e.name, this.emitReserved("upgradeError", r)
			}
		}))
	  };
  
	  function l() {
		i || (i = !0, p(), e.close(), e = null)
	  }
	  const m = o => {
		const r = new Error("probe error: " + o);
		r.transport = e.name, l(), this.emitReserved("upgradeError", r)
	  };
  
	  function v() {
		m("transport closed")
	  }
  
	  function a() {
		m("socket closed")
	  }
  
	  function c(o) {
		e && o.name !== e.name && l()
	  }
	  const p = () => {
		e.removeListener("open", s), e.removeListener("error", m), e.removeListener("close", v), this.off("close", a), this.off("upgrading", c)
	  };
	  e.once("open", s), e.once("error", m), e.once("close", v), this.once("close", a), this.once("upgrading", c), e.open()
	}
	onOpen() {
	  if (this.readyState = "open", D.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
		let t = 0;
		const e = this.upgrades.length;
		for (; t < e; t++) this.probe(this.upgrades[t])
	  }
	}
	onPacket(t) {
	  if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
		case "open":
		  this.onHandshake(JSON.parse(t.data));
		  break;
		case "ping":
		  this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
		  break;
		case "error":
		  const e = new Error("server error");
		  e.code = t.data, this.onError(e);
		  break;
		case "message":
		  this.emitReserved("data", t.data), this.emitReserved("message", t.data);
		  break
	  }
	}
	onHandshake(t) {
	  this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout()
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
		const t = this.getWritablePackets();
		this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush")
	  }
	}
	getWritablePackets() {
	  if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
	  let e = 1;
	  for (let i = 0; i < this.writeBuffer.length; i++) {
		const s = this.writeBuffer[i].data;
		if (s && (e += re(s)), i > 0 && e > this.maxPayload) return this.writeBuffer.slice(0, i);
		e += 2
	  }
	  return this.writeBuffer
	}
	write(t, e, i) {
	  return this.sendPacket("message", t, e, i), this
	}
	send(t, e, i) {
	  return this.sendPacket("message", t, e, i), this
	}
	sendPacket(t, e, i, s) {
	  if (typeof e == "function" && (s = e, e = void 0), typeof i == "function" && (s = i, i = null), this.readyState === "closing" || this.readyState === "closed") return;
	  i = i || {}, i.compress = i.compress !== !1;
	  const l = {
		type: t,
		data: e,
		options: i
	  };
	  this.emitReserved("packetCreate", l), this.writeBuffer.push(l), s && this.once("flush", s), this.flush()
	}
	close() {
	  const t = () => {
		  this.onClose("forced close"), this.transport.close()
		},
		e = () => {
		  this.off("upgrade", e), this.off("upgradeError", e), t()
		},
		i = () => {
		  this.once("upgrade", e), this.once("upgradeError", e)
		};
	  return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
		this.upgrading ? i() : t()
	  }) : this.upgrading ? i() : t()), this
	}
	onError(t) {
	  D.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t)
	}
	onClose(t, e) {
	  (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0)
	}
	filterUpgrades(t) {
	  const e = [];
	  let i = 0;
	  const s = t.length;
	  for (; i < s; i++) ~this.transports.indexOf(t[i]) && e.push(t[i]);
	  return e
	}
  };
  It.protocol = _t;
  
  function xe(n, t = "", e) {
	let i = n;
	e = e || typeof location < "u" && location, n == null && (n = e.protocol + "//" + e.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = e.protocol + n : n = e.host + n), /^(https?|wss?):\/\//.test(n) || (typeof e < "u" ? n = e.protocol + "//" + n : n = "https://" + n), i = rt(n)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
	const l = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
	return i.id = i.protocol + "://" + l + ":" + i.port + t, i.href = i.protocol + "://" + l + (e && e.port === i.port ? "" : ":" + i.port), i
  }
  const we = typeof ArrayBuffer == "function",
	Ee = n => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer,
	Mt = Object.prototype.toString,
	Ce = typeof Blob == "function" || typeof Blob < "u" && Mt.call(Blob) === "[object BlobConstructor]",
	Be = typeof File == "function" || typeof File < "u" && Mt.call(File) === "[object FileConstructor]";
  
  function ct(n) {
	return we && (n instanceof ArrayBuffer || Ee(n)) || Ce && n instanceof Blob || Be && n instanceof File
  }
  
  function X(n, t) {
	if (!n || typeof n != "object") return !1;
	if (Array.isArray(n)) {
	  for (let e = 0, i = n.length; e < i; e++)
		if (X(n[e])) return !0;
	  return !1
	}
	if (ct(n)) return !0;
	if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1) return X(n.toJSON(), !0);
	for (const e in n)
	  if (Object.prototype.hasOwnProperty.call(n, e) && X(n[e])) return !0;
	return !1
  }
  
  function _e(n) {
	const t = [],
	  e = n.data,
	  i = n;
	return i.data = st(e, t), i.attachments = t.length, {
	  packet: i,
	  buffers: t
	}
  }
  
  function st(n, t) {
	if (!n) return n;
	if (ct(n)) {
	  const e = {
		_placeholder: !0,
		num: t.length
	  };
	  return t.push(n), e
	} else if (Array.isArray(n)) {
	  const e = new Array(n.length);
	  for (let i = 0; i < n.length; i++) e[i] = st(n[i], t);
	  return e
	} else if (typeof n == "object" && !(n instanceof Date)) {
	  const e = {};
	  for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = st(n[i], t));
	  return e
	}
	return n
  }
  
  function ke(n, t) {
	return n.data = ot(n.data, t), delete n.attachments, n
  }
  
  function ot(n, t) {
	if (!n) return n;
	if (n && n._placeholder === !0) {
	  if (typeof n.num == "number" && n.num >= 0 && n.num < t.length) return t[n.num];
	  throw new Error("illegal attachments")
	} else if (Array.isArray(n))
	  for (let e = 0; e < n.length; e++) n[e] = ot(n[e], t);
	else if (typeof n == "object")
	  for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && (n[e] = ot(n[e], t));
	return n
  }
  const Te = 5;
  var C;
  (function(n) {
	n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK"
  })(C || (C = {}));
  class Ae {
	constructor(t) {
	  this.replacer = t
	}
	encode(t) {
	  return (t.type === C.EVENT || t.type === C.ACK) && X(t) ? this.encodeAsBinary({
		type: t.type === C.EVENT ? C.BINARY_EVENT : C.BINARY_ACK,
		nsp: t.nsp,
		data: t.data,
		id: t.id
	  }) : [this.encodeAsString(t)]
	}
	encodeAsString(t) {
	  let e = "" + t.type;
	  return (t.type === C.BINARY_EVENT || t.type === C.BINARY_ACK) && (e += t.attachments + "-"), t.nsp && t.nsp !== "/" && (e += t.nsp + ","), t.id != null && (e += t.id), t.data != null && (e += JSON.stringify(t.data, this.replacer)), e
	}
	encodeAsBinary(t) {
	  const e = _e(t),
		i = this.encodeAsString(e.packet),
		s = e.buffers;
	  return s.unshift(i), s
	}
  }
  class lt extends A {
	constructor(t) {
	  super(), this.reviver = t
	}
	add(t) {
	  let e;
	  if (typeof t == "string") {
		if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
		e = this.decodeString(t);
		const i = e.type === C.BINARY_EVENT;
		i || e.type === C.BINARY_ACK ? (e.type = i ? C.EVENT : C.ACK, this.reconstructor = new Se(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e)
	  } else if (ct(t) || t.base64)
		if (this.reconstructor) e = this.reconstructor.takeBinaryData(t), e && (this.reconstructor = null, super.emitReserved("decoded", e));
		else throw new Error("got binary data when not reconstructing a packet");
	  else throw new Error("Unknown type: " + t)
	}
	decodeString(t) {
	  let e = 0;
	  const i = {
		type: Number(t.charAt(0))
	  };
	  if (C[i.type] === void 0) throw new Error("unknown packet type " + i.type);
	  if (i.type === C.BINARY_EVENT || i.type === C.BINARY_ACK) {
		const l = e + 1;
		for (; t.charAt(++e) !== "-" && e != t.length;);
		const m = t.substring(l, e);
		if (m != Number(m) || t.charAt(e) !== "-") throw new Error("Illegal attachments");
		i.attachments = Number(m)
	  }
	  if (t.charAt(e + 1) === "/") {
		const l = e + 1;
		for (; ++e && !(t.charAt(e) === "," || e === t.length););
		i.nsp = t.substring(l, e)
	  } else i.nsp = "/";
	  const s = t.charAt(e + 1);
	  if (s !== "" && Number(s) == s) {
		const l = e + 1;
		for (; ++e;) {
		  const m = t.charAt(e);
		  if (m == null || Number(m) != m) {
			--e;
			break
		  }
		  if (e === t.length) break
		}
		i.id = Number(t.substring(l, e + 1))
	  }
	  if (t.charAt(++e)) {
		const l = this.tryParse(t.substr(e));
		if (lt.isPayloadValid(i.type, l)) i.data = l;
		else throw new Error("invalid payload")
	  }
	  return i
	}
	tryParse(t) {
	  try {
		return JSON.parse(t, this.reviver)
	  } catch {
		return !1
	  }
	}
	static isPayloadValid(t, e) {
	  switch (t) {
		case C.CONNECT:
		  return typeof e == "object";
		case C.DISCONNECT:
		  return e === void 0;
		case C.CONNECT_ERROR:
		  return typeof e == "string" || typeof e == "object";
		case C.EVENT:
		case C.BINARY_EVENT:
		  return Array.isArray(e) && e.length > 0;
		case C.ACK:
		case C.BINARY_ACK:
		  return Array.isArray(e)
	  }
	}
	destroy() {
	  this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
	}
  }
  class Se {
	constructor(t) {
	  this.packet = t, this.buffers = [], this.reconPack = t
	}
	takeBinaryData(t) {
	  if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
		const e = ke(this.reconPack, this.buffers);
		return this.finishedReconstruction(), e
	  }
	  return null
	}
	finishedReconstruction() {
	  this.reconPack = null, this.buffers = []
	}
  }
  const Oe = Object.freeze(Object.defineProperty({
	__proto__: null,
	Decoder: lt,
	Encoder: Ae,
	get PacketType() {
	  return C
	},
	protocol: Te
  }, Symbol.toStringTag, {
	value: "Module"
  }));
  
  function L(n, t, e) {
	return n.on(t, e),
	  function() {
		n.off(t, e)
	  }
  }
  const Re = Object.freeze({
	connect: 1,
	connect_error: 1,
	disconnect: 1,
	disconnecting: 1,
	newListener: 1,
	removeListener: 1
  });
  class Pt extends A {
	constructor(t, e, i) {
	  super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = e, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open()
	}
	get disconnected() {
	  return !this.connected
	}
	subEvents() {
	  if (this.subs) return;
	  const t = this.io;
	  this.subs = [L(t, "open", this.onopen.bind(this)), L(t, "packet", this.onpacket.bind(this)), L(t, "error", this.onerror.bind(this)), L(t, "close", this.onclose.bind(this))]
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
	send(...t) {
	  return t.unshift("message"), this.emit.apply(this, t), this
	}
	emit(t, ...e) {
	  if (Re.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
	  if (e.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(e), this;
	  const i = {
		type: C.EVENT,
		data: e
	  };
	  if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof e[e.length - 1] == "function") {
		const m = this.ids++,
		  v = e.pop();
		this._registerAckCallback(m, v), i.id = m
	  }
	  const s = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
	  return this.flags.volatile && (!s || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this
	}
	_registerAckCallback(t, e) {
	  var i;
	  const s = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
	  if (s === void 0) {
		this.acks[t] = e;
		return
	  }
	  const l = this.io.setTimeoutFn(() => {
		delete this.acks[t];
		for (let m = 0; m < this.sendBuffer.length; m++) this.sendBuffer[m].id === t && this.sendBuffer.splice(m, 1);
		e.call(this, new Error("operation has timed out"))
	  }, s);
	  this.acks[t] = (...m) => {
		this.io.clearTimeoutFn(l), e.apply(this, [null, ...m])
	  }
	}
	emitWithAck(t, ...e) {
	  const i = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
	  return new Promise((s, l) => {
		e.push((m, v) => i ? m ? l(m) : s(v) : s(m)), this.emit(t, ...e)
	  })
	}
	_addToQueue(t) {
	  let e;
	  typeof t[t.length - 1] == "function" && (e = t.pop());
	  const i = {
		id: this._queueSeq++,
		tryCount: 0,
		pending: !1,
		args: t,
		flags: Object.assign({
		  fromQueue: !0
		}, this.flags)
	  };
	  t.push((s, ...l) => i !== this._queue[0] ? void 0 : (s !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), e && e(s)) : (this._queue.shift(), e && e(null, ...l)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue()
	}
	_drainQueue(t = !1) {
	  if (!this.connected || this._queue.length === 0) return;
	  const e = this._queue[0];
	  e.pending && !t || (e.pending = !0, e.tryCount++, this.flags = e.flags, this.emit.apply(this, e.args))
	}
	packet(t) {
	  t.nsp = this.nsp, this.io._packet(t)
	}
	onopen() {
	  typeof this.auth == "function" ? this.auth(t => {
		this._sendConnectPacket(t)
	  }) : this._sendConnectPacket(this.auth)
	}
	_sendConnectPacket(t) {
	  this.packet({
		type: C.CONNECT,
		data: this._pid ? Object.assign({
		  pid: this._pid,
		  offset: this._lastOffset
		}, t) : t
	  })
	}
	onerror(t) {
	  this.connected || this.emitReserved("connect_error", t)
	}
	onclose(t, e) {
	  this.connected = !1, delete this.id, this.emitReserved("disconnect", t, e)
	}
	onpacket(t) {
	  if (t.nsp === this.nsp) switch (t.type) {
		case C.CONNECT:
		  t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
		  break;
		case C.EVENT:
		case C.BINARY_EVENT:
		  this.onevent(t);
		  break;
		case C.ACK:
		case C.BINARY_ACK:
		  this.onack(t);
		  break;
		case C.DISCONNECT:
		  this.ondisconnect();
		  break;
		case C.CONNECT_ERROR:
		  this.destroy();
		  const i = new Error(t.data.message);
		  i.data = t.data.data, this.emitReserved("connect_error", i);
		  break
	  }
	}
	onevent(t) {
	  const e = t.data || [];
	  t.id != null && e.push(this.ack(t.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
	}
	emitEvent(t) {
	  if (this._anyListeners && this._anyListeners.length) {
		const e = this._anyListeners.slice();
		for (const i of e) i.apply(this, t)
	  }
	  super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1])
	}
	ack(t) {
	  const e = this;
	  let i = !1;
	  return function(...s) {
		i || (i = !0, e.packet({
		  type: C.ACK,
		  id: t,
		  data: s
		}))
	  }
	}
	onack(t) {
	  const e = this.acks[t.id];
	  typeof e == "function" && (e.apply(this, t.data), delete this.acks[t.id])
	}
	onconnect(t, e) {
	  this.id = t, this.recovered = e && this._pid === e, this._pid = e, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
	}
	emitBuffered() {
	  this.receiveBuffer.forEach(t => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach(t => {
		this.notifyOutgoingListeners(t), this.packet(t)
	  }), this.sendBuffer = []
	}
	ondisconnect() {
	  this.destroy(), this.onclose("io server disconnect")
	}
	destroy() {
	  this.subs && (this.subs.forEach(t => t()), this.subs = void 0), this.io._destroy(this)
	}
	disconnect() {
	  return this.connected && this.packet({
		type: C.DISCONNECT
	  }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
	}
	close() {
	  return this.disconnect()
	}
	compress(t) {
	  return this.flags.compress = t, this
	}
	get volatile() {
	  return this.flags.volatile = !0, this
	}
	timeout(t) {
	  return this.flags.timeout = t, this
	}
	onAny(t) {
	  return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
	}
	prependAny(t) {
	  return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
	}
	offAny(t) {
	  if (!this._anyListeners) return this;
	  if (t) {
		const e = this._anyListeners;
		for (let i = 0; i < e.length; i++)
		  if (t === e[i]) return e.splice(i, 1), this
	  } else this._anyListeners = [];
	  return this
	}
	listenersAny() {
	  return this._anyListeners || []
	}
	onAnyOutgoing(t) {
	  return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this
	}
	prependAnyOutgoing(t) {
	  return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this
	}
	offAnyOutgoing(t) {
	  if (!this._anyOutgoingListeners) return this;
	  if (t) {
		const e = this._anyOutgoingListeners;
		for (let i = 0; i < e.length; i++)
		  if (t === e[i]) return e.splice(i, 1), this
	  } else this._anyOutgoingListeners = [];
	  return this
	}
	listenersAnyOutgoing() {
	  return this._anyOutgoingListeners || []
	}
	notifyOutgoingListeners(t) {
	  if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
		const e = this._anyOutgoingListeners.slice();
		for (const i of e) i.apply(this, t.data)
	  }
	}
  }
  
  function H(n) {
	n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0
  }
  H.prototype.duration = function() {
	var n = this.ms * Math.pow(this.factor, this.attempts++);
	if (this.jitter) {
	  var t = Math.random(),
		e = Math.floor(t * this.jitter * n);
	  n = Math.floor(t * 10) & 1 ? n + e : n - e
	}
	return Math.min(n, this.max) | 0
  };
  H.prototype.reset = function() {
	this.attempts = 0
  };
  H.prototype.setMin = function(n) {
	this.ms = n
  };
  H.prototype.setMax = function(n) {
	this.max = n
  };
  H.prototype.setJitter = function(n) {
	this.jitter = n
  };
  class at extends A {
	constructor(t, e) {
	  var i;
	  super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.opts = e, Z(this, e), this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor((i = e.randomizationFactor) !== null && i !== void 0 ? i : .5), this.backoff = new H({
		min: this.reconnectionDelay(),
		max: this.reconnectionDelayMax(),
		jitter: this.randomizationFactor()
	  }), this.timeout(e.timeout == null ? 2e4 : e.timeout), this._readyState = "closed", this.uri = t;
	  const s = e.parser || Oe;
	  this.encoder = new s.Encoder, this.decoder = new s.Decoder, this._autoConnect = e.autoConnect !== !1, this._autoConnect && this.open()
	}
	reconnection(t) {
	  return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
	}
	reconnectionAttempts(t) {
	  return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
	}
	reconnectionDelay(t) {
	  var e;
	  return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (e = this.backoff) === null || e === void 0 || e.setMin(t), this)
	}
	randomizationFactor(t) {
	  var e;
	  return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (e = this.backoff) === null || e === void 0 || e.setJitter(t), this)
	}
	reconnectionDelayMax(t) {
	  var e;
	  return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (e = this.backoff) === null || e === void 0 || e.setMax(t), this)
	}
	timeout(t) {
	  return arguments.length ? (this._timeout = t, this) : this._timeout
	}
	maybeReconnectOnOpen() {
	  !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
	}
	open(t) {
	  if (~this._readyState.indexOf("open")) return this;
	  this.engine = new It(this.uri, this.opts);
	  const e = this.engine,
		i = this;
	  this._readyState = "opening", this.skipReconnect = !1;
	  const s = L(e, "open", function() {
		  i.onopen(), t && t()
		}),
		l = L(e, "error", m => {
		  i.cleanup(), i._readyState = "closed", this.emitReserved("error", m), t ? t(m) : i.maybeReconnectOnOpen()
		});
	  if (this._timeout !== !1) {
		const m = this._timeout;
		m === 0 && s();
		const v = this.setTimeoutFn(() => {
		  s(), e.close(), e.emit("error", new Error("timeout"))
		}, m);
		this.opts.autoUnref && v.unref(), this.subs.push(function() {
		  clearTimeout(v)
		})
	  }
	  return this.subs.push(s), this.subs.push(l), this
	}
	connect(t) {
	  return this.open(t)
	}
	onopen() {
	  this.cleanup(), this._readyState = "open", this.emitReserved("open");
	  const t = this.engine;
	  this.subs.push(L(t, "ping", this.onping.bind(this)), L(t, "data", this.ondata.bind(this)), L(t, "error", this.onerror.bind(this)), L(t, "close", this.onclose.bind(this)), L(this.decoder, "decoded", this.ondecoded.bind(this)))
	}
	onping() {
	  this.emitReserved("ping")
	}
	ondata(t) {
	  try {
		this.decoder.add(t)
	  } catch (e) {
		this.onclose("parse error", e)
	  }
	}
	ondecoded(t) {
	  Nt(() => {
		this.emitReserved("packet", t)
	  }, this.setTimeoutFn)
	}
	onerror(t) {
	  this.emitReserved("error", t)
	}
	socket(t, e) {
	  let i = this.nsps[t];
	  return i ? this._autoConnect && !i.active && i.connect() : (i = new Pt(this, t, e), this.nsps[t] = i), i
	}
	_destroy(t) {
	  const e = Object.keys(this.nsps);
	  for (const i of e)
		if (this.nsps[i].active) return;
	  this._close()
	}
	_packet(t) {
	  const e = this.encoder.encode(t);
	  for (let i = 0; i < e.length; i++) this.engine.write(e[i], t.options)
	}
	cleanup() {
	  this.subs.forEach(t => t()), this.subs.length = 0, this.decoder.destroy()
	}
	_close() {
	  this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
	}
	disconnect() {
	  return this._close()
	}
	onclose(t, e) {
	  this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, e), this._reconnection && !this.skipReconnect && this.reconnect()
	}
	reconnect() {
	  if (this._reconnecting || this.skipReconnect) return this;
	  const t = this;
	  if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
	  else {
		const e = this.backoff.duration();
		this._reconnecting = !0;
		const i = this.setTimeoutFn(() => {
		  t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open(s => {
			s ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", s)) : t.onreconnect()
		  }))
		}, e);
		this.opts.autoUnref && i.unref(), this.subs.push(function() {
		  clearTimeout(i)
		})
	  }
	}
	onreconnect() {
	  const t = this.backoff.attempts;
	  this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
	}
  }
  const U = {};
  
  function G(n, t) {
	typeof n == "object" && (t = n, n = void 0), t = t || {};
	const e = xe(n, t.path || "/socket.io"),
	  i = e.source,
	  s = e.id,
	  l = e.path,
	  m = U[s] && l in U[s].nsps,
	  v = t.forceNew || t["force new connection"] || t.multiplex === !1 || m;
	let a;
	return v ? a = new at(i, t) : (U[s] || (U[s] = new at(i, t)), a = U[s]), e.query && !t.query && (t.query = e.queryKey), a.socket(e.path, t)
  }
  Object.assign(G, {
	Manager: at,
	Socket: Pt,
	io: G,
	connect: G
  });
  let j;
  const Le = new Uint8Array(16);
  
  function Ne() {
	if (!j && (j = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !j)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return j(Le)
  }
  const S = [];
  for (let n = 0; n < 256; ++n) S.push((n + 256).toString(16).slice(1));
  
  function Ie(n, t = 0) {
	return (S[n[t + 0]] + S[n[t + 1]] + S[n[t + 2]] + S[n[t + 3]] + "-" + S[n[t + 4]] + S[n[t + 5]] + "-" + S[n[t + 6]] + S[n[t + 7]] + "-" + S[n[t + 8]] + S[n[t + 9]] + "-" + S[n[t + 10]] + S[n[t + 11]] + S[n[t + 12]] + S[n[t + 13]] + S[n[t + 14]] + S[n[t + 15]]).toLowerCase()
  }
  let vt, tt, et = 0,
	nt = 0;
  
  function Me(n, t, e) {
	let i = t && e || 0;
	const s = t || new Array(16);
	n = n || {};
	let l = n.node || vt,
	  m = n.clockseq !== void 0 ? n.clockseq : tt;
	if (l == null || m == null) {
	  const r = n.random || (n.rng || Ne)();
	  l == null && (l = vt = [r[0] | 1, r[1], r[2], r[3], r[4], r[5]]), m == null && (m = tt = (r[6] << 8 | r[7]) & 16383)
	}
	let v = n.msecs !== void 0 ? n.msecs : Date.now(),
	  a = n.nsecs !== void 0 ? n.nsecs : nt + 1;
	const c = v - et + (a - nt) / 1e4;
	if (c < 0 && n.clockseq === void 0 && (m = m + 1 & 16383), (c < 0 || v > et) && n.nsecs === void 0 && (a = 0), a >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
	et = v, nt = a, tt = m, v += 122192928e5;
	const p = ((v & 268435455) * 1e4 + a) % 4294967296;
	s[i++] = p >>> 24 & 255, s[i++] = p >>> 16 & 255, s[i++] = p >>> 8 & 255, s[i++] = p & 255;
	const o = v / 4294967296 * 1e4 & 268435455;
	s[i++] = o >>> 8 & 255, s[i++] = o & 255, s[i++] = o >>> 24 & 15 | 16, s[i++] = o >>> 16 & 255, s[i++] = m >>> 8 | 128, s[i++] = m & 255;
	for (let r = 0; r < 6; ++r) s[i + r] = l[r];
	return t || Ie(s)
  }
  const Ft = G("https://mysf.fly.dev/");
  Ft.on("connect", () => {
	console.log("Connected to server")
  });
  Ft.on("disconnect", () => {
	console.log("Disconnected from server")
  });
  var Pe = .5,
	Fe = "H",
	ze = "#333333",
	De = window.location.protocol + "//" + window.location.host,
	qe = "testshop",
	Ve = Me(),
	He = "testmodel",
	Ue = "testManu";
  const Ke = {
	  uid: Ve,
	  host: De,
	  shop: qe,
	  manufacturer: Ue,
	  model: He
	},
	We = JSON.stringify(Ke),
	$e = btoa(We),
	zt = `https://mysf.fly.dev/?hash=${$e}`;
  var F = !1,
	Dt = !1,
	q = document.createElement("div");
  document.body.appendChild(q);
  q.id = "myModal";
  q.style.display = "none";
  var qt = document.createElement("button");
  document.getElementById("myModal").appendChild(qt);
  qt.id = "close";
  var O = document.createElement("button");
  document.body.appendChild(O);
  O.textContent = "Modal Test";
  O.id = "firstButton";
  O.class = "firstButton";
  O.style.backgroundColor = "#ff7d4f";
  O.style.padding = "12px";
  O.style.fontFamily = "'Circular Std', sans-serif";
  O.style.fontSize = "16px";
  O.style.color = "#ffffff";
  O.style.borderRadius = "10px";
  O.style.border = "1px solid #ff7d4f";
  O.style.left = "25%";
  O.style.top = "50%";
  O.style.position = "absolute";
  O.style.width = "50%";
  var V = document.createElement("div");
  document.body.appendChild(V);
  V.id = "firstModal";
  V.style.display = "none";
  var Vt = document.createElement("button");
  document.getElementById("firstModal").appendChild(Vt);
  Vt.id = "firstclose";
  var Ht = document.createElement("button");
  document.getElementById("firstModal").appendChild(Ht);
  Ht.id = "continueBtn";
  screen.width <= 768 ? (F = !0, console.log("MOBILE DEVICE VIEW")) : (console.log("DESKTOP DEVICE VIEW"), F = !1);
  F ? (V.innerHTML = `
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
	  width:70%;
	  background-image: linear-gradient(to right, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffdfc9, #ffe6d5, #ffede2, #fff4ee);
	  margin-top: auto;
	  margin-bottom: auto;
	  margin-left: auto;
	  margin-right: auto;
	  padding: 2em;
	  padding-right:2em;
	  padding-left:2em;
	  border: 1px;
	  border-radius: 20px;
	  box-sizing: content-box;
	  font-family: 'Circular std',sans-serif;
	  color: #333333;
	}
  
	.continueBtn2 {
	  width: 90%;
	  background-color: #ff7d4f;
	  padding: 12px;
	  font-family: 'Circular std',sans-serif;
	  font-size: 14px;
	  color: #ffffff;
	  border-radius: 20px;
	  border: 1px solid #ff7d4f;
	}
	.continueBtn {
	  width: 90%;
	  background-color: transparent;
	  padding: 12px;
	  font-family: 'Circular std',sans-serif;
	  font-size: 14px;
	  color: #ff7d4f;
	  border-radius: 20px;
	  border: 1px solid #ff7d4f;
	}
  
	.continueBtn2:hover {
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
		<tr style="height: 2em;"></tr>
		<tr>
		  <td colspan="6" style="text-align: center;">
			<button id="continueBtn2" class="continueBtn2" style="display: block; margin: 0 auto;">Fortfahren</button>
			<br>
			<button id="continueBtn" class="continueBtn" style="display: block; margin: 0 auto;">ID eingeben</button>
		  </td>
		</tr>
	  </tbody>
	</table>
  </div>
  
  `, q.innerHTML = `
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
	  width: 70%;
	}
  
	.inner-content {
	  align-items: center;
	  justify-content: space-between;
	  font-family: 'Circular std',sans-serif;
	  margin: auto;
	}
  
	.Form {
	  position:relative;
	  font-family: 'Circular std',sans-serif;
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: center;
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
	  width: 86%;
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
			  <span colspan="2" onclick="document.getElementById('myModal').style.display='none'" class="close">×</span>
			</td>
		  </tr>
		  <tr style="height: 2em;"></tr>
		  <tr>
			<td>
			  <div border="1" class="inner-content" id="inner-content">
				<div id="left half">
				  <div class="Form" id="Form">
				  <div style="display: contents;">
				  <input type="text" id="emailField" name="emailField" placeholder="Enter your Email" style="font-family: 'Circular std',sans-serif; display: none;"> 
				  <input type="text" id="idField" name="idFormField" placeholder="Enter your ID" style="font-family: 'Circular std',sans-serif;">
				  </div>
				  <div style="width:85%; margin-bottom:1em">
					<a style="float:right; color:grey;  text-decoration: none;" id="forgotButton">ID vergessen?</a>
					<p style="margin: 0;float:left; color:grey;  text-decoration: none;" id="infoText"></p>
					<br>
					</div>
					<button id="submitBtn" class="submitBtn">Senden</button>
				  </div>
				</div>
			  </div>
			</td>
		  </tr>
		</tbody>
	  </table>
	</div>
  
  `) : (V.innerHTML = `
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
			  
			 <tr>
			 <td></td><td></td>
			  <td colspan="5" style = "display: flex;justify-content: center;width:100%" >
				<button id="continueBtn" class="continueBtn">Fortfahren</button>
			  </td>
			  <td></td><td></td>
			</tr>
	
		</tbody>
	  </table>
	</div>
	`, q.innerHTML = `
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
	
	`);
  O.onclick = function() {
	V.style.display = "flex", F || Ut()
  };
  document.querySelector("#submitBtn").onclick = function() {
	var n = document.querySelector("#idField"),
	  t = document.querySelector("#emailField"),
	  e = n.value,
	  i = t.value;
	e != "" && (Ye(e), console.log("ID submitted!")), i != "" && (Qe(i), console.log("Email submitted!")), Dt && (document.getElementById("infoText").textContent = "Email gesendet!", document.getElementById("forgotButton").textContent = "ID vergessen?", document.getElementById("emailField").style.display = "none", document.getElementById("idField").style.display = "flex")
  };
  document.querySelector("#continueBtn").onclick = function() {
	document.getElementById("firstModal").style.display = "none", document.getElementById("myModal").style.display = "flex", Ut()
  };
  F && (document.querySelector("#continueBtn2").onclick = function() {
	window.open(zt, "_blank")
  }, document.querySelector("#forgotButton").onclick = function() {
	document.getElementById("emailField").style.display = "flex", document.getElementById("idField").style.display = "none", document.getElementById("forgotButton").textContent = " ", document.getElementById("infoText").textContent = " ", Dt = !0
  });
  document.querySelector("#idField").onclick = function() {
	document.getElementById("infoText").textContent = " "
  };
  window.addEventListener("resize", function() {
	screen.width <= 768 ? (F = !0, console.log("MOBILE DEVICE VIEW")) : (console.log("DESKTOP DEVICE VIEW"), F = !1)
  });
  
  function Ye(n) {
	var t = new Headers;
	t.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"), t.append("Content-Type", "application/json");
	var e = JSON.stringify({
		code: n
	  }),
	  i = {
		method: "POST",
		headers: t,
		body: e,
		redirect: "follow"
	  };
	fetch("https://admin.myshoefitter.com/flows/trigger/c7a5aa72-8ff2-4398-b910-a88994aeab4c", i).then(s => s.json()).then(s => {
	  console.log(s);
	  const l = s[0].id;
	  console.log(l), document.getElementById("infoText").textContent = "ID gesendet!"
	}).catch(s => {
	  console.log("error", s), document.getElementById("infoText").textContent = "Dieser Code exisitert nicht!"
	})
  }
  
  function Qe(n) {
	var t = new Headers;
	t.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"), t.append("Content-Type", "application/json");
	var e = JSON.stringify({
		email: n
	  }),
	  i = {
		method: "POST",
		headers: t,
		body: e,
		redirect: "follow"
	  };
	fetch("https://admin.myshoefitter.com/flows/trigger/bc96cffb-f215-4b8e-ba65-481d8c29e910", i).then(s => s.json()).then(s => console.log(s)).catch(s => console.log("error", s))
  }
  
  function Ut() {
	var n = document.querySelector("#inner-content");
	if (!F && q.style.display != "none") {
	  document.querySelector("#qr-code").innerHTML = "";
	  var t = n.clientWidth * .75;
	  Kt.render({
		text: zt,
		radius: Pe,
		ecLevel: Fe,
		fill: ze,
		background: null,
		size: t
	  }, document.querySelector("#qr-code"))
	}
  }
  