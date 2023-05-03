(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
	new MutationObserver(o => {
	  for (const l of o)
		if (l.type === "childList")
		  for (const y of l.addedNodes) y.tagName === "LINK" && y.rel === "modulepreload" && s(y)
	}).observe(document, {
	  childList: !0,
	  subtree: !0
	});
  
	function e(o) {
	  const l = {};
	  return o.integrity && (l.integrity = o.integrity), o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
	}
  
	function s(o) {
	  if (o.ep) return;
	  o.ep = !0;
	  const l = e(o);
	  fetch(o.href, l)
	}
  })();
  let bt = null;
  class wt {}
  wt.render = function(n, t) {
	bt(n, t)
  };
  self.QrCreator = wt;
  (function(n) {
	function t(v, a, c, p) {
	  var r = {},
		i = n(c, a);
	  i.u(v), i.J(), p = p || 0;
	  var u = i.h(),
		f = i.h() + 2 * p;
	  return r.text = v, r.level = a, r.version = c, r.O = f, r.a = function(m, C) {
		return m -= p, C -= p, 0 > m || m >= u || 0 > C || C >= u ? !1 : i.a(m, C)
	  }, r
	}
  
	function e(v, a, c, p, r, i, u, f, m, C) {
	  function k(g, b, h, d, x, A, T) {
		g ? (v.lineTo(b + A, h + T), v.arcTo(b, h, d, x, i)) : v.lineTo(b, h)
	  }
	  u ? v.moveTo(a + i, c) : v.moveTo(a, c), k(f, p, c, p, r, -i, 0), k(m, p, r, a, r, 0, -i), k(C, a, r, a, c, i, 0), k(u, a, c, p, c, 0, i)
	}
  
	function s(v, a, c, p, r, i, u, f, m, C) {
	  function k(g, b, h, d) {
		v.moveTo(g + h, b), v.lineTo(g, b), v.lineTo(g, b + d), v.arcTo(g, b, g + h, b, i)
	  }
	  u && k(a, c, i, i), f && k(p, c, -i, i), m && k(p, r, -i, -i), C && k(a, r, i, -i)
	}
  
	function o(v, a) {
	  var c = a.fill;
	  if (typeof c == "string") v.fillStyle = c;
	  else {
		var p = c.type,
		  r = c.colorStops;
		if (c = c.position.map(u => Math.round(u * a.size)), p === "linear-gradient") var i = v.createLinearGradient.apply(v, c);
		else if (p === "radial-gradient") i = v.createRadialGradient.apply(v, c);
		else throw Error("Unsupported fill");
		r.forEach(([u, f]) => {
		  i.addColorStop(u, f)
		}), v.fillStyle = i
	  }
	}
  
	function l(v, a) {
	  t: {
		var c = a.text,
		  p = a.v,
		  r = a.N,
		  i = a.K,
		  u = a.P;
		for (r = Math.max(1, r || 1), i = Math.min(40, i || 40); r <= i; r += 1) try {
		  var f = t(c, p, r, u);
		  break t
		} catch {}
		f = void 0
	  }
	  if (!f) return null;
	  for (c = v.getContext("2d"), a.background && (c.fillStyle = a.background, c.fillRect(a.left, a.top, a.size, a.size)), p = f.O, i = a.size / p, c.beginPath(), u = 0; u < p; u += 1)
		for (r = 0; r < p; r += 1) {
		  var m = c,
			C = a.left + r * i,
			k = a.top + u * i,
			g = u,
			b = r,
			h = f.a,
			d = C + i,
			x = k + i,
			A = g - 1,
			T = g + 1,
			E = b - 1,
			w = b + 1,
			M = Math.floor(Math.min(.5, Math.max(0, a.R)) * i),
			F = h(g, b),
			z = h(A, E),
			$ = h(A, b);
		  A = h(A, w);
		  var Y = h(g, w);
		  w = h(T, w), b = h(T, b), T = h(T, E), g = h(g, E), C = Math.round(C), k = Math.round(k), d = Math.round(d), x = Math.round(x), F ? e(m, C, k, d, x, M, !$ && !g, !$ && !Y, !b && !Y, !b && !g) : s(m, C, k, d, x, M, $ && g && z, $ && Y && A, b && Y && w, b && g && T)
		}
	  return o(c, a),
	  c.fill(),
	  v
	}
	var y = {
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
	  Object.assign(c, y, v), c.N = c.minVersion, c.K = c.maxVersion, c.v = c.ecLevel, c.left = c.left, c.top = c.top, c.size = c.size, c.fill = c.fill, c.background = c.background, c.text = c.text, c.R = c.radius, c.P = c.quiet, a instanceof HTMLCanvasElement ? ((a.width !== c.size || a.height !== c.size) && (a.width = c.size, a.height = c.size), a.getContext("2d").clearRect(0, 0, a.width, a.height), l(a, c)) : (v = document.createElement("canvas"), v.width = c.size, v.height = c.size, c = l(v, c), a.appendChild(c))
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
		  for (var r = 0; r < c.length; r += 1) p.put(c[r], 8)
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
		  c: function(r) {
			return (a[Math.floor(r / 8)] >>> 7 - r % 8 & 1) == 1
		  },
		  put: function(r, i) {
			for (var u = 0; u < i; u += 1) p.m((r >>> i - u - 1 & 1) == 1)
		  },
		  f: function() {
			return c
		  },
		  m: function(r) {
			var i = Math.floor(c / 8);
			a.length <= i && a.push(0), r && (a[i] |= 128 >>> c % 8), c += 1
		  }
		};
	  return p
	}
  
	function e(a, c) {
	  function p(g, b) {
		for (var h = -1; 7 >= h; h += 1)
		  if (!(-1 >= g + h || f <= g + h))
			for (var d = -1; 7 >= d; d += 1) - 1 >= b + d || f <= b + d || (u[g + h][b + d] = 0 <= h && 6 >= h && (d == 0 || d == 6) || 0 <= d && 6 >= d && (h == 0 || h == 6) || 2 <= h && 4 >= h && 2 <= d && 4 >= d)
	  }
  
	  function r(g, b) {
		for (var h = f = 4 * a + 17, d = Array(h), x = 0; x < h; x += 1) {
		  d[x] = Array(h);
		  for (var A = 0; A < h; A += 1) d[x][A] = null
		}
		for (u = d, p(0, 0), p(f - 7, 0), p(0, f - 7), h = l.G(a), d = 0; d < h.length; d += 1)
		  for (x = 0; x < h.length; x += 1) {
			A = h[d];
			var T = h[x];
			if (u[A][T] == null)
			  for (var E = -2; 2 >= E; E += 1)
				for (var w = -2; 2 >= w; w += 1) u[A + E][T + w] = E == -2 || E == 2 || w == -2 || w == 2 || E == 0 && w == 0
		  }
		for (h = 8; h < f - 8; h += 1) u[h][6] == null && (u[h][6] = h % 2 == 0);
		for (h = 8; h < f - 8; h += 1) u[6][h] == null && (u[6][h] = h % 2 == 0);
		for (h = l.w(i << 3 | b), d = 0; 15 > d; d += 1) x = !g && (h >> d & 1) == 1, u[6 > d ? d : 8 > d ? d + 1 : f - 15 + d][8] = x, u[8][8 > d ? f - d - 1 : 9 > d ? 15 - d : 14 - d] = x;
		if (u[f - 8][8] = !g, 7 <= a) {
		  for (h = l.A(a), d = 0; 18 > d; d += 1) x = !g && (h >> d & 1) == 1, u[Math.floor(d / 3)][d % 3 + f - 8 - 3] = x;
		  for (d = 0; 18 > d; d += 1) x = !g && (h >> d & 1) == 1, u[d % 3 + f - 8 - 3][Math.floor(d / 3)] = x
		}
		if (m == null) {
		  for (g = v.I(a, i), h = t(), d = 0; d < C.length; d += 1) x = C[d], h.put(4, 4), h.put(x.b(), l.f(4, a)), x.write(h);
		  for (d = x = 0; d < g.length; d += 1) x += g[d].j;
		  if (h.f() > 8 * x) throw Error("code length overflow. (" + h.f() + ">" + 8 * x + ")");
		  for (h.f() + 4 <= 8 * x && h.put(0, 4); h.f() % 8 != 0;) h.m(!1);
		  for (; !(h.f() >= 8 * x) && (h.put(236, 8), !(h.f() >= 8 * x));) h.put(17, 8);
		  var M = 0;
		  for (x = d = 0, A = Array(g.length), T = Array(g.length), E = 0; E < g.length; E += 1) {
			var F = g[E].j,
			  z = g[E].o - F;
			for (d = Math.max(d, F), x = Math.max(x, z), A[E] = Array(F), w = 0; w < A[E].length; w += 1) A[E][w] = 255 & h.B()[w + M];
			for (M += F, w = l.C(z), F = s(A[E], w.b() - 1).l(w), T[E] = Array(w.b() - 1), w = 0; w < T[E].length; w += 1) z = w + F.b() - T[E].length, T[E][w] = 0 <= z ? F.c(z) : 0
		  }
		  for (w = h = 0; w < g.length; w += 1) h += g[w].o;
		  for (h = Array(h), w = M = 0; w < d; w += 1)
			for (E = 0; E < g.length; E += 1) w < A[E].length && (h[M] = A[E][w], M += 1);
		  for (w = 0; w < x; w += 1)
			for (E = 0; E < g.length; E += 1) w < T[E].length && (h[M] = T[E][w], M += 1);
		  m = h
		}
		for (g = m, h = -1, d = f - 1, x = 7, A = 0, b = l.F(b), T = f - 1; 0 < T; T -= 2)
		  for (T == 6 && --T;;) {
			for (E = 0; 2 > E; E += 1) u[d][T - E] == null && (w = !1, A < g.length && (w = (g[A] >>> x & 1) == 1), b(d, T - E) && (w = !w), u[d][T - E] = w, --x, x == -1 && (A += 1, x = 7));
			if (d += h, 0 > d || f <= d) {
			  d -= h, h = -h;
			  break
			}
		  }
	  }
	  var i = o[c],
		u = null,
		f = 0,
		m = null,
		C = [],
		k = {
		  u: function(g) {
			g = n(g), C.push(g), m = null
		  },
		  a: function(g, b) {
			if (0 > g || f <= g || 0 > b || f <= b) throw Error(g + "," + b);
			return u[g][b]
		  },
		  h: function() {
			return f
		  },
		  J: function() {
			for (var g = 0, b = 0, h = 0; 8 > h; h += 1) {
			  r(!0, h);
			  var d = l.D(k);
			  (h == 0 || g > d) && (g = d, b = h)
			}
			r(!1, b)
		  }
		};
	  return k
	}
  
	function s(a, c) {
	  if (typeof a.length > "u") throw Error(a.length + "/" + c);
	  var p = function() {
		  for (var i = 0; i < a.length && a[i] == 0;) i += 1;
		  for (var u = Array(a.length - i + c), f = 0; f < a.length - i; f += 1) u[f] = a[f + i];
		  return u
		}(),
		r = {
		  c: function(i) {
			return p[i]
		  },
		  b: function() {
			return p.length
		  },
		  multiply: function(i) {
			for (var u = Array(r.b() + i.b() - 1), f = 0; f < r.b(); f += 1)
			  for (var m = 0; m < i.b(); m += 1) u[f + m] ^= y.i(y.g(r.c(f)) + y.g(i.c(m)));
			return s(u, 0)
		  },
		  l: function(i) {
			if (0 > r.b() - i.b()) return r;
			for (var u = y.g(r.c(0)) - y.g(i.c(0)), f = Array(r.b()), m = 0; m < r.b(); m += 1) f[m] = r.c(m);
			for (m = 0; m < i.b(); m += 1) f[m] ^= y.i(y.g(i.c(m)) + u);
			return s(f, 0).l(i)
		  }
		};
	  return r
	}
	e.s = function(a) {
	  for (var c = [], p = 0; p < a.length; p++) {
		var r = a.charCodeAt(p);
		128 > r ? c.push(r) : 2048 > r ? c.push(192 | r >> 6, 128 | r & 63) : 55296 > r || 57344 <= r ? c.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | r & 63) : (p++, r = 65536 + ((r & 1023) << 10 | a.charCodeAt(p) & 1023), c.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | r & 63))
	  }
	  return c
	};
	var o = {
		L: 1,
		M: 0,
		Q: 3,
		H: 2
	  },
	  l = function() {
		function a(r) {
		  for (var i = 0; r != 0;) i += 1, r >>>= 1;
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
			w: function(r) {
			  for (var i = r << 10; 0 <= a(i) - a(1335);) i ^= 1335 << a(i) - a(1335);
			  return (r << 10 | i) ^ 21522
			},
			A: function(r) {
			  for (var i = r << 12; 0 <= a(i) - a(7973);) i ^= 7973 << a(i) - a(7973);
			  return r << 12 | i
			},
			G: function(r) {
			  return c[r - 1]
			},
			F: function(r) {
			  switch (r) {
				case 0:
				  return function(i, u) {
					return (i + u) % 2 == 0
				  };
				case 1:
				  return function(i) {
					return i % 2 == 0
				  };
				case 2:
				  return function(i, u) {
					return u % 3 == 0
				  };
				case 3:
				  return function(i, u) {
					return (i + u) % 3 == 0
				  };
				case 4:
				  return function(i, u) {
					return (Math.floor(i / 2) + Math.floor(u / 3)) % 2 == 0
				  };
				case 5:
				  return function(i, u) {
					return i * u % 2 + i * u % 3 == 0
				  };
				case 6:
				  return function(i, u) {
					return (i * u % 2 + i * u % 3) % 2 == 0
				  };
				case 7:
				  return function(i, u) {
					return (i * u % 3 + (i + u) % 2) % 2 == 0
				  };
				default:
				  throw Error("bad maskPattern:" + r)
			  }
			},
			C: function(r) {
			  for (var i = s([1], 0), u = 0; u < r; u += 1) i = i.multiply(s([1, y.i(u)], 0));
			  return i
			},
			f: function(r, i) {
			  if (r != 4 || 1 > i || 40 < i) throw Error("mode: " + r + "; type: " + i);
			  return 10 > i ? 8 : 16
			},
			D: function(r) {
			  for (var i = r.h(), u = 0, f = 0; f < i; f += 1)
				for (var m = 0; m < i; m += 1) {
				  for (var C = 0, k = r.a(f, m), g = -1; 1 >= g; g += 1)
					if (!(0 > f + g || i <= f + g))
					  for (var b = -1; 1 >= b; b += 1) 0 > m + b || i <= m + b || (g != 0 || b != 0) && k == r.a(f + g, m + b) && (C += 1);
				  5 < C && (u += 3 + C - 5)
				}
			  for (f = 0; f < i - 1; f += 1)
				for (m = 0; m < i - 1; m += 1) C = 0, r.a(f, m) && (C += 1), r.a(f + 1, m) && (C += 1), r.a(f, m + 1) && (C += 1), r.a(f + 1, m + 1) && (C += 1), (C == 0 || C == 4) && (u += 3);
			  for (f = 0; f < i; f += 1)
				for (m = 0; m < i - 6; m += 1) r.a(f, m) && !r.a(f, m + 1) && r.a(f, m + 2) && r.a(f, m + 3) && r.a(f, m + 4) && !r.a(f, m + 5) && r.a(f, m + 6) && (u += 40);
			  for (m = 0; m < i; m += 1)
				for (f = 0; f < i - 6; f += 1) r.a(f, m) && !r.a(f + 1, m) && r.a(f + 2, m) && r.a(f + 3, m) && r.a(f + 4, m) && !r.a(f + 5, m) && r.a(f + 6, m) && (u += 40);
			  for (m = C = 0; m < i; m += 1)
				for (f = 0; f < i; f += 1) r.a(f, m) && (C += 1);
			  return u += Math.abs(100 * C / i / i - 50) / 5 * 10
			}
		  };
		return p
	  }(),
	  y = function() {
		for (var a = Array(256), c = Array(256), p = 0; 8 > p; p += 1) a[p] = 1 << p;
		for (p = 8; 256 > p; p += 1) a[p] = a[p - 4] ^ a[p - 5] ^ a[p - 6] ^ a[p - 8];
		for (p = 0; 255 > p; p += 1) c[a[p]] = p;
		return {
		  g: function(r) {
			if (1 > r) throw Error("glog(" + r + ")");
			return c[r]
		  },
		  i: function(r) {
			for (; 0 > r;) r += 255;
			for (; 256 <= r;) r -= 255;
			return a[r]
		  }
		}
	  }(),
	  v = function() {
		function a(r, i) {
		  switch (i) {
			case o.L:
			  return c[4 * (r - 1)];
			case o.M:
			  return c[4 * (r - 1) + 1];
			case o.Q:
			  return c[4 * (r - 1) + 2];
			case o.H:
			  return c[4 * (r - 1) + 3]
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
			I: function(r, i) {
			  var u = a(r, i);
			  if (typeof u > "u") throw Error("bad rs block @ typeNumber:" + r + "/errorCorrectLevel:" + i);
			  r = u.length / 3, i = [];
			  for (var f = 0; f < r; f += 1)
				for (var m = u[3 * f], C = u[3 * f + 1], k = u[3 * f + 2], g = 0; g < m; g += 1) {
				  var b = k,
					h = {};
				  h.o = C, h.j = b, i.push(h)
				}
			  return i
			}
		  };
		return p
	  }();
	return e
  }());
  const Ut = QrCreator,
	I = Object.create(null);
  I.open = "0";
  I.close = "1";
  I.ping = "2";
  I.pong = "3";
  I.message = "4";
  I.upgrade = "5";
  I.noop = "6";
  const j = Object.create(null);
  Object.keys(I).forEach(n => {
	j[I[n]] = n
  });
  const Kt = {
	  type: "error",
	  data: "parser error"
	},
	$t = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
	Yt = typeof ArrayBuffer == "function",
	Wt = n => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer,
	xt = ({
	  type: n,
	  data: t
	}, e, s) => $t && t instanceof Blob ? e ? s(t) : ht(t, s) : Yt && (t instanceof ArrayBuffer || Wt(t)) ? e ? s(t) : ht(new Blob([t]), s) : s(I[n] + (t || "")),
	ht = (n, t) => {
	  const e = new FileReader;
	  return e.onload = function() {
		const s = e.result.split(",")[1];
		t("b" + (s || ""))
	  }, e.readAsDataURL(n)
	},
	ft = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	U = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (let n = 0; n < ft.length; n++) U[ft.charCodeAt(n)] = n;
  const Qt = n => {
	  let t = n.length * .75,
		e = n.length,
		s, o = 0,
		l, y, v, a;
	  n[n.length - 1] === "=" && (t--, n[n.length - 2] === "=" && t--);
	  const c = new ArrayBuffer(t),
		p = new Uint8Array(c);
	  for (s = 0; s < e; s += 4) l = U[n.charCodeAt(s)], y = U[n.charCodeAt(s + 1)], v = U[n.charCodeAt(s + 2)], a = U[n.charCodeAt(s + 3)], p[o++] = l << 2 | y >> 4, p[o++] = (y & 15) << 4 | v >> 2, p[o++] = (v & 3) << 6 | a & 63;
	  return c
	},
	Jt = typeof ArrayBuffer == "function",
	Et = (n, t) => {
	  if (typeof n != "string") return {
		type: "message",
		data: _t(n, t)
	  };
	  const e = n.charAt(0);
	  return e === "b" ? {
		type: "message",
		data: jt(n.substring(1), t)
	  } : j[e] ? n.length > 1 ? {
		type: j[e],
		data: n.substring(1)
	  } : {
		type: j[e]
	  } : Kt
	},
	jt = (n, t) => {
	  if (Jt) {
		const e = Qt(n);
		return _t(e, t)
	  } else return {
		base64: !0,
		data: n
	  }
	},
	_t = (n, t) => {
	  switch (t) {
		case "blob":
		  return n instanceof ArrayBuffer ? new Blob([n]) : n;
		case "arraybuffer":
		default:
		  return n
	  }
	},
	Ct = String.fromCharCode(30),
	Xt = (n, t) => {
	  const e = n.length,
		s = new Array(e);
	  let o = 0;
	  n.forEach((l, y) => {
		xt(l, !1, v => {
		  s[y] = v, ++o === e && t(s.join(Ct))
		})
	  })
	},
	Gt = (n, t) => {
	  const e = n.split(Ct),
		s = [];
	  for (let o = 0; o < e.length; o++) {
		const l = Et(e[o], t);
		if (s.push(l), l.type === "error") break
	  }
	  return s
	},
	At = 4;
  
  function S(n) {
	if (n) return Zt(n)
  }
  
  function Zt(n) {
	for (var t in S.prototype) n[t] = S.prototype[t];
	return n
  }
  S.prototype.on = S.prototype.addEventListener = function(n, t) {
	return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(t), this
  };
  S.prototype.once = function(n, t) {
	function e() {
	  this.off(n, e), t.apply(this, arguments)
	}
	return e.fn = t, this.on(n, e), this
  };
  S.prototype.off = S.prototype.removeListener = S.prototype.removeAllListeners = S.prototype.removeEventListener = function(n, t) {
	if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
	var e = this._callbacks["$" + n];
	if (!e) return this;
	if (arguments.length == 1) return delete this._callbacks["$" + n], this;
	for (var s, o = 0; o < e.length; o++)
	  if (s = e[o], s === t || s.fn === t) {
		e.splice(o, 1);
		break
	  } return e.length === 0 && delete this._callbacks["$" + n], this
  };
  S.prototype.emit = function(n) {
	this._callbacks = this._callbacks || {};
	for (var t = new Array(arguments.length - 1), e = this._callbacks["$" + n], s = 1; s < arguments.length; s++) t[s - 1] = arguments[s];
	if (e) {
	  e = e.slice(0);
	  for (var s = 0, o = e.length; s < o; ++s) e[s].apply(this, t)
	}
	return this
  };
  S.prototype.emitReserved = S.prototype.emit;
  S.prototype.listeners = function(n) {
	return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || []
  };
  S.prototype.hasListeners = function(n) {
	return !!this.listeners(n).length
  };
  const N = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
  
  function Tt(n, ...t) {
	return t.reduce((e, s) => (n.hasOwnProperty(s) && (e[s] = n[s]), e), {})
  }
  const te = N.setTimeout,
	ee = N.clearTimeout;
  
  function Z(n, t) {
	t.useNativeTimers ? (n.setTimeoutFn = te.bind(N), n.clearTimeoutFn = ee.bind(N)) : (n.setTimeoutFn = N.setTimeout.bind(N), n.clearTimeoutFn = N.clearTimeout.bind(N))
  }
  const ne = 1.33;
  
  function se(n) {
	return typeof n == "string" ? ie(n) : Math.ceil((n.byteLength || n.size) * ne)
  }
  
  function ie(n) {
	let t = 0,
	  e = 0;
	for (let s = 0, o = n.length; s < o; s++) t = n.charCodeAt(s), t < 128 ? e += 1 : t < 2048 ? e += 2 : t < 55296 || t >= 57344 ? e += 3 : (s++, e += 4);
	return e
  }
  class re extends Error {
	constructor(t, e, s) {
	  super(t), this.description = e, this.context = s, this.type = "TransportError"
	}
  }
  class kt extends S {
	constructor(t) {
	  super(), this.writable = !1, Z(this, t), this.opts = t, this.query = t.query, this.socket = t.socket
	}
	onError(t, e, s) {
	  return super.emitReserved("error", new re(t, e, s)), this
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
  const St = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
	st = 64,
	oe = {};
  let ut = 0,
	W = 0,
	dt;
  
  function pt(n) {
	let t = "";
	do t = St[n % st] + t, n = Math.floor(n / st); while (n > 0);
	return t
  }
  
  function Bt() {
	const n = pt(+new Date);
	return n !== dt ? (ut = 0, dt = n) : n + "." + pt(ut++)
  }
  for (; W < st; W++) oe[St[W]] = W;
  
  function Rt(n) {
	let t = "";
	for (let e in n) n.hasOwnProperty(e) && (t.length && (t += "&"), t += encodeURIComponent(e) + "=" + encodeURIComponent(n[e]));
	return t
  }
  
  function ae(n) {
	let t = {},
	  e = n.split("&");
	for (let s = 0, o = e.length; s < o; s++) {
	  let l = e[s].split("=");
	  t[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
	}
	return t
  }
  let Ot = !1;
  try {
	Ot = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
  } catch {}
  const ce = Ot;
  
  function Nt(n) {
	const t = n.xdomain;
	try {
	  if (typeof XMLHttpRequest < "u" && (!t || ce)) return new XMLHttpRequest
	} catch {}
	if (!t) try {
	  return new N[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
	} catch {}
  }
  
  function le() {}
  const he = function() {
	return new Nt({
	  xdomain: !1
	}).responseType != null
  }();
  class fe extends kt {
	constructor(t) {
	  if (super(t), this.polling = !1, typeof location < "u") {
		const s = location.protocol === "https:";
		let o = location.port;
		o || (o = s ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || o !== t.port, this.xs = t.secure !== s
	  }
	  const e = t && t.forceBase64;
	  this.supportsBinary = he && !e
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
		let s = 0;
		this.polling && (s++, this.once("pollComplete", function() {
		  --s || e()
		})), this.writable || (s++, this.once("drain", function() {
		  --s || e()
		}))
	  } else e()
	}
	poll() {
	  this.polling = !0, this.doPoll(), this.emitReserved("poll")
	}
	onData(t) {
	  const e = s => {
		if (this.readyState === "opening" && s.type === "open" && this.onOpen(), s.type === "close") return this.onClose({
		  description: "transport closed by the server"
		}), !1;
		this.onPacket(s)
	  };
	  Gt(t, this.socket.binaryType).forEach(e), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll())
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
	  this.writable = !1, Xt(t, e => {
		this.doWrite(e, () => {
		  this.writable = !0, this.emitReserved("drain")
		})
	  })
	}
	uri() {
	  let t = this.query || {};
	  const e = this.opts.secure ? "https" : "http";
	  let s = "";
	  this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Bt()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.opts.port && (e === "https" && Number(this.opts.port) !== 443 || e === "http" && Number(this.opts.port) !== 80) && (s = ":" + this.opts.port);
	  const o = Rt(t),
		l = this.opts.hostname.indexOf(":") !== -1;
	  return e + "://" + (l ? "[" + this.opts.hostname + "]" : this.opts.hostname) + s + this.opts.path + (o.length ? "?" + o : "")
	}
	request(t = {}) {
	  return Object.assign(t, {
		xd: this.xd,
		xs: this.xs
	  }, this.opts), new P(this.uri(), t)
	}
	doWrite(t, e) {
	  const s = this.request({
		method: "POST",
		data: t
	  });
	  s.on("success", e), s.on("error", (o, l) => {
		this.onError("xhr post error", o, l)
	  })
	}
	doPoll() {
	  const t = this.request();
	  t.on("data", this.onData.bind(this)), t.on("error", (e, s) => {
		this.onError("xhr poll error", e, s)
	  }), this.pollXhr = t
	}
  }
  class P extends S {
	constructor(t, e) {
	  super(), Z(this, e), this.opts = e, this.method = e.method || "GET", this.uri = t, this.async = e.async !== !1, this.data = e.data !== void 0 ? e.data : null, this.create()
	}
	create() {
	  const t = Tt(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
	  t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
	  const e = this.xhr = new Nt(t);
	  try {
		e.open(this.method, this.uri, this.async);
		try {
		  if (this.opts.extraHeaders) {
			e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0);
			for (let s in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(s) && e.setRequestHeader(s, this.opts.extraHeaders[s])
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
	  } catch (s) {
		this.setTimeoutFn(() => {
		  this.onError(s)
		}, 0);
		return
	  }
	  typeof document < "u" && (this.index = P.requestsCount++, P.requests[this.index] = this)
	}
	onError(t) {
	  this.emitReserved("error", t, this.xhr), this.cleanup(!0)
	}
	cleanup(t) {
	  if (!(typeof this.xhr > "u" || this.xhr === null)) {
		if (this.xhr.onreadystatechange = le, t) try {
		  this.xhr.abort()
		} catch {}
		typeof document < "u" && delete P.requests[this.index], this.xhr = null
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
  P.requestsCount = 0;
  P.requests = {};
  if (typeof document < "u") {
	if (typeof attachEvent == "function") attachEvent("onunload", yt);
	else if (typeof addEventListener == "function") {
	  const n = "onpagehide" in N ? "pagehide" : "unload";
	  addEventListener(n, yt, !1)
	}
  }
  
  function yt() {
	for (let n in P.requests) P.requests.hasOwnProperty(n) && P.requests[n].abort()
  }
  const Lt = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? t => Promise.resolve().then(t) : (t, e) => e(t, 0))(),
	Q = N.WebSocket || N.MozWebSocket,
	mt = !0,
	ue = "arraybuffer",
	gt = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
  class de extends kt {
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
		s = gt ? {} : Tt(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
	  this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
	  try {
		this.ws = mt && !gt ? e ? new Q(t, e) : new Q(t) : new Q(t, e, s)
	  } catch (o) {
		return this.emitReserved("error", o)
	  }
	  this.ws.binaryType = this.socket.binaryType || ue, this.addEventListeners()
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
		const s = t[e],
		  o = e === t.length - 1;
		xt(s, this.supportsBinary, l => {
		  const y = {};
		  try {
			mt && this.ws.send(l)
		  } catch {}
		  o && Lt(() => {
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
	  let s = "";
	  this.opts.port && (e === "wss" && Number(this.opts.port) !== 443 || e === "ws" && Number(this.opts.port) !== 80) && (s = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = Bt()), this.supportsBinary || (t.b64 = 1);
	  const o = Rt(t),
		l = this.opts.hostname.indexOf(":") !== -1;
	  return e + "://" + (l ? "[" + this.opts.hostname + "]" : this.opts.hostname) + s + this.opts.path + (o.length ? "?" + o : "")
	}
	check() {
	  return !!Q
	}
  }
  const pe = {
	  websocket: de,
	  polling: fe
	},
	ye = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
	me = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
  
  function it(n) {
	const t = n,
	  e = n.indexOf("["),
	  s = n.indexOf("]");
	e != -1 && s != -1 && (n = n.substring(0, e) + n.substring(e, s).replace(/:/g, ";") + n.substring(s, n.length));
	let o = ye.exec(n || ""),
	  l = {},
	  y = 14;
	for (; y--;) l[me[y]] = o[y] || "";
	return e != -1 && s != -1 && (l.source = t, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"), l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), l.ipv6uri = !0), l.pathNames = ge(l, l.path), l.queryKey = ve(l, l.query), l
  }
  
  function ge(n, t) {
	const e = /\/{2,9}/g,
	  s = t.replace(e, "/").split("/");
	return (t.slice(0, 1) == "/" || t.length === 0) && s.splice(0, 1), t.slice(-1) == "/" && s.splice(s.length - 1, 1), s
  }
  
  function ve(n, t) {
	const e = {};
	return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(s, o, l) {
	  o && (e[o] = l)
	}), e
  }
  let Mt = class q extends S {
	constructor(t, e = {}) {
	  super(), this.writeBuffer = [], t && typeof t == "object" && (e = t, t = null), t ? (t = it(t), e.hostname = t.host, e.secure = t.protocol === "https" || t.protocol === "wss", e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = it(e.host).host), Z(this, e), this.secure = e.secure != null ? e.secure : typeof location < "u" && location.protocol === "https:", e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.hostname = e.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = e.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = e.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
	  }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = ae(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
		this.transport && (this.transport.removeAllListeners(), this.transport.close())
	  }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
		this.onClose("transport close", {
		  description: "network connection lost"
		})
	  }, addEventListener("offline", this.offlineEventListener, !1))), this.open()
	}
	createTransport(t) {
	  const e = Object.assign({}, this.opts.query);
	  e.EIO = At, e.transport = t, this.id && (e.sid = this.id);
	  const s = Object.assign({}, this.opts.transportOptions[t], this.opts, {
		query: e,
		socket: this,
		hostname: this.hostname,
		secure: this.secure,
		port: this.port
	  });
	  return new pe[t](s)
	}
	open() {
	  let t;
	  if (this.opts.rememberUpgrade && q.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket";
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
		s = !1;
	  q.priorWebsocketSuccess = !1;
	  const o = () => {
		s || (e.send([{
		  type: "ping",
		  data: "probe"
		}]), e.once("packet", r => {
		  if (!s)
			if (r.type === "pong" && r.data === "probe") {
			  if (this.upgrading = !0, this.emitReserved("upgrading", e), !e) return;
			  q.priorWebsocketSuccess = e.name === "websocket", this.transport.pause(() => {
				s || this.readyState !== "closed" && (p(), this.setTransport(e), e.send([{
				  type: "upgrade"
				}]), this.emitReserved("upgrade", e), e = null, this.upgrading = !1, this.flush())
			  })
			} else {
			  const i = new Error("probe error");
			  i.transport = e.name, this.emitReserved("upgradeError", i)
			}
		}))
	  };
  
	  function l() {
		s || (s = !0, p(), e.close(), e = null)
	  }
	  const y = r => {
		const i = new Error("probe error: " + r);
		i.transport = e.name, l(), this.emitReserved("upgradeError", i)
	  };
  
	  function v() {
		y("transport closed")
	  }
  
	  function a() {
		y("socket closed")
	  }
  
	  function c(r) {
		e && r.name !== e.name && l()
	  }
	  const p = () => {
		e.removeListener("open", o), e.removeListener("error", y), e.removeListener("close", v), this.off("close", a), this.off("upgrading", c)
	  };
	  e.once("open", o), e.once("error", y), e.once("close", v), this.once("close", a), this.once("upgrading", c), e.open()
	}
	onOpen() {
	  if (this.readyState = "open", q.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
	  for (let s = 0; s < this.writeBuffer.length; s++) {
		const o = this.writeBuffer[s].data;
		if (o && (e += se(o)), s > 0 && e > this.maxPayload) return this.writeBuffer.slice(0, s);
		e += 2
	  }
	  return this.writeBuffer
	}
	write(t, e, s) {
	  return this.sendPacket("message", t, e, s), this
	}
	send(t, e, s) {
	  return this.sendPacket("message", t, e, s), this
	}
	sendPacket(t, e, s, o) {
	  if (typeof e == "function" && (o = e, e = void 0), typeof s == "function" && (o = s, s = null), this.readyState === "closing" || this.readyState === "closed") return;
	  s = s || {}, s.compress = s.compress !== !1;
	  const l = {
		type: t,
		data: e,
		options: s
	  };
	  this.emitReserved("packetCreate", l), this.writeBuffer.push(l), o && this.once("flush", o), this.flush()
	}
	close() {
	  const t = () => {
		  this.onClose("forced close"), this.transport.close()
		},
		e = () => {
		  this.off("upgrade", e), this.off("upgradeError", e), t()
		},
		s = () => {
		  this.once("upgrade", e), this.once("upgradeError", e)
		};
	  return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
		this.upgrading ? s() : t()
	  }) : this.upgrading ? s() : t()), this
	}
	onError(t) {
	  q.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t)
	}
	onClose(t, e) {
	  (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0)
	}
	filterUpgrades(t) {
	  const e = [];
	  let s = 0;
	  const o = t.length;
	  for (; s < o; s++) ~this.transports.indexOf(t[s]) && e.push(t[s]);
	  return e
	}
  };
  Mt.protocol = At;
  
  function be(n, t = "", e) {
	let s = n;
	e = e || typeof location < "u" && location, n == null && (n = e.protocol + "//" + e.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = e.protocol + n : n = e.host + n), /^(https?|wss?):\/\//.test(n) || (typeof e < "u" ? n = e.protocol + "//" + n : n = "https://" + n), s = it(n)), s.port || (/^(http|ws)$/.test(s.protocol) ? s.port = "80" : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")), s.path = s.path || "/";
	const l = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
	return s.id = s.protocol + "://" + l + ":" + s.port + t, s.href = s.protocol + "://" + l + (e && e.port === s.port ? "" : ":" + s.port), s
  }
  const we = typeof ArrayBuffer == "function",
	xe = n => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer,
	Pt = Object.prototype.toString,
	Ee = typeof Blob == "function" || typeof Blob < "u" && Pt.call(Blob) === "[object BlobConstructor]",
	_e = typeof File == "function" || typeof File < "u" && Pt.call(File) === "[object FileConstructor]";
  
  function ct(n) {
	return we && (n instanceof ArrayBuffer || xe(n)) || Ee && n instanceof Blob || _e && n instanceof File
  }
  
  function X(n, t) {
	if (!n || typeof n != "object") return !1;
	if (Array.isArray(n)) {
	  for (let e = 0, s = n.length; e < s; e++)
		if (X(n[e])) return !0;
	  return !1
	}
	if (ct(n)) return !0;
	if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1) return X(n.toJSON(), !0);
	for (const e in n)
	  if (Object.prototype.hasOwnProperty.call(n, e) && X(n[e])) return !0;
	return !1
  }
  
  function Ce(n) {
	const t = [],
	  e = n.data,
	  s = n;
	return s.data = rt(e, t), s.attachments = t.length, {
	  packet: s,
	  buffers: t
	}
  }
  
  function rt(n, t) {
	if (!n) return n;
	if (ct(n)) {
	  const e = {
		_placeholder: !0,
		num: t.length
	  };
	  return t.push(n), e
	} else if (Array.isArray(n)) {
	  const e = new Array(n.length);
	  for (let s = 0; s < n.length; s++) e[s] = rt(n[s], t);
	  return e
	} else if (typeof n == "object" && !(n instanceof Date)) {
	  const e = {};
	  for (const s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = rt(n[s], t));
	  return e
	}
	return n
  }
  
  function Ae(n, t) {
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
  var _;
  (function(n) {
	n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK"
  })(_ || (_ = {}));
  class ke {
	constructor(t) {
	  this.replacer = t
	}
	encode(t) {
	  return (t.type === _.EVENT || t.type === _.ACK) && X(t) ? this.encodeAsBinary({
		type: t.type === _.EVENT ? _.BINARY_EVENT : _.BINARY_ACK,
		nsp: t.nsp,
		data: t.data,
		id: t.id
	  }) : [this.encodeAsString(t)]
	}
	encodeAsString(t) {
	  let e = "" + t.type;
	  return (t.type === _.BINARY_EVENT || t.type === _.BINARY_ACK) && (e += t.attachments + "-"), t.nsp && t.nsp !== "/" && (e += t.nsp + ","), t.id != null && (e += t.id), t.data != null && (e += JSON.stringify(t.data, this.replacer)), e
	}
	encodeAsBinary(t) {
	  const e = Ce(t),
		s = this.encodeAsString(e.packet),
		o = e.buffers;
	  return o.unshift(s), o
	}
  }
  class lt extends S {
	constructor(t) {
	  super(), this.reviver = t
	}
	add(t) {
	  let e;
	  if (typeof t == "string") {
		if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
		e = this.decodeString(t);
		const s = e.type === _.BINARY_EVENT;
		s || e.type === _.BINARY_ACK ? (e.type = s ? _.EVENT : _.ACK, this.reconstructor = new Se(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e)
	  } else if (ct(t) || t.base64)
		if (this.reconstructor) e = this.reconstructor.takeBinaryData(t), e && (this.reconstructor = null, super.emitReserved("decoded", e));
		else throw new Error("got binary data when not reconstructing a packet");
	  else throw new Error("Unknown type: " + t)
	}
	decodeString(t) {
	  let e = 0;
	  const s = {
		type: Number(t.charAt(0))
	  };
	  if (_[s.type] === void 0) throw new Error("unknown packet type " + s.type);
	  if (s.type === _.BINARY_EVENT || s.type === _.BINARY_ACK) {
		const l = e + 1;
		for (; t.charAt(++e) !== "-" && e != t.length;);
		const y = t.substring(l, e);
		if (y != Number(y) || t.charAt(e) !== "-") throw new Error("Illegal attachments");
		s.attachments = Number(y)
	  }
	  if (t.charAt(e + 1) === "/") {
		const l = e + 1;
		for (; ++e && !(t.charAt(e) === "," || e === t.length););
		s.nsp = t.substring(l, e)
	  } else s.nsp = "/";
	  const o = t.charAt(e + 1);
	  if (o !== "" && Number(o) == o) {
		const l = e + 1;
		for (; ++e;) {
		  const y = t.charAt(e);
		  if (y == null || Number(y) != y) {
			--e;
			break
		  }
		  if (e === t.length) break
		}
		s.id = Number(t.substring(l, e + 1))
	  }
	  if (t.charAt(++e)) {
		const l = this.tryParse(t.substr(e));
		if (lt.isPayloadValid(s.type, l)) s.data = l;
		else throw new Error("invalid payload")
	  }
	  return s
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
		case _.CONNECT:
		  return typeof e == "object";
		case _.DISCONNECT:
		  return e === void 0;
		case _.CONNECT_ERROR:
		  return typeof e == "string" || typeof e == "object";
		case _.EVENT:
		case _.BINARY_EVENT:
		  return Array.isArray(e) && e.length > 0;
		case _.ACK:
		case _.BINARY_ACK:
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
		const e = Ae(this.reconPack, this.buffers);
		return this.finishedReconstruction(), e
	  }
	  return null
	}
	finishedReconstruction() {
	  this.reconPack = null, this.buffers = []
	}
  }
  const Be = Object.freeze(Object.defineProperty({
	__proto__: null,
	Decoder: lt,
	Encoder: ke,
	get PacketType() {
	  return _
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
  class It extends S {
	constructor(t, e, s) {
	  super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = e, s && s.auth && (this.auth = s.auth), this._opts = Object.assign({}, s), this.io._autoConnect && this.open()
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
	  const s = {
		type: _.EVENT,
		data: e
	  };
	  if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof e[e.length - 1] == "function") {
		const y = this.ids++,
		  v = e.pop();
		this._registerAckCallback(y, v), s.id = y
	  }
	  const o = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
	  return this.flags.volatile && (!o || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)), this.flags = {}, this
	}
	_registerAckCallback(t, e) {
	  var s;
	  const o = (s = this.flags.timeout) !== null && s !== void 0 ? s : this._opts.ackTimeout;
	  if (o === void 0) {
		this.acks[t] = e;
		return
	  }
	  const l = this.io.setTimeoutFn(() => {
		delete this.acks[t];
		for (let y = 0; y < this.sendBuffer.length; y++) this.sendBuffer[y].id === t && this.sendBuffer.splice(y, 1);
		e.call(this, new Error("operation has timed out"))
	  }, o);
	  this.acks[t] = (...y) => {
		this.io.clearTimeoutFn(l), e.apply(this, [null, ...y])
	  }
	}
	emitWithAck(t, ...e) {
	  const s = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
	  return new Promise((o, l) => {
		e.push((y, v) => s ? y ? l(y) : o(v) : o(y)), this.emit(t, ...e)
	  })
	}
	_addToQueue(t) {
	  let e;
	  typeof t[t.length - 1] == "function" && (e = t.pop());
	  const s = {
		id: this._queueSeq++,
		tryCount: 0,
		pending: !1,
		args: t,
		flags: Object.assign({
		  fromQueue: !0
		}, this.flags)
	  };
	  t.push((o, ...l) => s !== this._queue[0] ? void 0 : (o !== null ? s.tryCount > this._opts.retries && (this._queue.shift(), e && e(o)) : (this._queue.shift(), e && e(null, ...l)), s.pending = !1, this._drainQueue())), this._queue.push(s), this._drainQueue()
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
		type: _.CONNECT,
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
		case _.CONNECT:
		  t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
		  break;
		case _.EVENT:
		case _.BINARY_EVENT:
		  this.onevent(t);
		  break;
		case _.ACK:
		case _.BINARY_ACK:
		  this.onack(t);
		  break;
		case _.DISCONNECT:
		  this.ondisconnect();
		  break;
		case _.CONNECT_ERROR:
		  this.destroy();
		  const s = new Error(t.data.message);
		  s.data = t.data.data, this.emitReserved("connect_error", s);
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
		for (const s of e) s.apply(this, t)
	  }
	  super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1])
	}
	ack(t) {
	  const e = this;
	  let s = !1;
	  return function(...o) {
		s || (s = !0, e.packet({
		  type: _.ACK,
		  id: t,
		  data: o
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
		type: _.DISCONNECT
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
		for (let s = 0; s < e.length; s++)
		  if (t === e[s]) return e.splice(s, 1), this
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
		for (let s = 0; s < e.length; s++)
		  if (t === e[s]) return e.splice(s, 1), this
	  } else this._anyOutgoingListeners = [];
	  return this
	}
	listenersAnyOutgoing() {
	  return this._anyOutgoingListeners || []
	}
	notifyOutgoingListeners(t) {
	  if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
		const e = this._anyOutgoingListeners.slice();
		for (const s of e) s.apply(this, t.data)
	  }
	}
  }
  
  function D(n) {
	n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0
  }
  D.prototype.duration = function() {
	var n = this.ms * Math.pow(this.factor, this.attempts++);
	if (this.jitter) {
	  var t = Math.random(),
		e = Math.floor(t * this.jitter * n);
	  n = Math.floor(t * 10) & 1 ? n + e : n - e
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
  class at extends S {
	constructor(t, e) {
	  var s;
	  super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.opts = e, Z(this, e), this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor((s = e.randomizationFactor) !== null && s !== void 0 ? s : .5), this.backoff = new D({
		min: this.reconnectionDelay(),
		max: this.reconnectionDelayMax(),
		jitter: this.randomizationFactor()
	  }), this.timeout(e.timeout == null ? 2e4 : e.timeout), this._readyState = "closed", this.uri = t;
	  const o = e.parser || Be;
	  this.encoder = new o.Encoder, this.decoder = new o.Decoder, this._autoConnect = e.autoConnect !== !1, this._autoConnect && this.open()
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
	  this.engine = new Mt(this.uri, this.opts);
	  const e = this.engine,
		s = this;
	  this._readyState = "opening", this.skipReconnect = !1;
	  const o = L(e, "open", function() {
		  s.onopen(), t && t()
		}),
		l = L(e, "error", y => {
		  s.cleanup(), s._readyState = "closed", this.emitReserved("error", y), t ? t(y) : s.maybeReconnectOnOpen()
		});
	  if (this._timeout !== !1) {
		const y = this._timeout;
		y === 0 && o();
		const v = this.setTimeoutFn(() => {
		  o(), e.close(), e.emit("error", new Error("timeout"))
		}, y);
		this.opts.autoUnref && v.unref(), this.subs.push(function() {
		  clearTimeout(v)
		})
	  }
	  return this.subs.push(o), this.subs.push(l), this
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
	  Lt(() => {
		this.emitReserved("packet", t)
	  }, this.setTimeoutFn)
	}
	onerror(t) {
	  this.emitReserved("error", t)
	}
	socket(t, e) {
	  let s = this.nsps[t];
	  return s ? this._autoConnect && !s.active && s.connect() : (s = new It(this, t, e), this.nsps[t] = s), s
	}
	_destroy(t) {
	  const e = Object.keys(this.nsps);
	  for (const s of e)
		if (this.nsps[s].active) return;
	  this._close()
	}
	_packet(t) {
	  const e = this.encoder.encode(t);
	  for (let s = 0; s < e.length; s++) this.engine.write(e[s], t.options)
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
		const s = this.setTimeoutFn(() => {
		  t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open(o => {
			o ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", o)) : t.onreconnect()
		  }))
		}, e);
		this.opts.autoUnref && s.unref(), this.subs.push(function() {
		  clearTimeout(s)
		})
	  }
	}
	onreconnect() {
	  const t = this.backoff.attempts;
	  this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
	}
  }
  const H = {};
  
  function G(n, t) {
	typeof n == "object" && (t = n, n = void 0), t = t || {};
	const e = be(n, t.path || "/socket.io"),
	  s = e.source,
	  o = e.id,
	  l = e.path,
	  y = H[o] && l in H[o].nsps,
	  v = t.forceNew || t["force new connection"] || t.multiplex === !1 || y;
	let a;
	return v ? a = new at(s, t) : (H[o] || (H[o] = new at(s, t)), a = H[o]), e.query && !t.query && (t.query = e.queryKey), a.socket(e.path, t)
  }
  Object.assign(G, {
	Manager: at,
	Socket: It,
	io: G,
	connect: G
  });
  let J;
  const Oe = new Uint8Array(16);
  
  function Ne() {
	if (!J && (J = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !J)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return J(Oe)
  }
  const B = [];
  for (let n = 0; n < 256; ++n) B.push((n + 256).toString(16).slice(1));
  
  function Le(n, t = 0) {
	return (B[n[t + 0]] + B[n[t + 1]] + B[n[t + 2]] + B[n[t + 3]] + "-" + B[n[t + 4]] + B[n[t + 5]] + "-" + B[n[t + 6]] + B[n[t + 7]] + "-" + B[n[t + 8]] + B[n[t + 9]] + "-" + B[n[t + 10]] + B[n[t + 11]] + B[n[t + 12]] + B[n[t + 13]] + B[n[t + 14]] + B[n[t + 15]]).toLowerCase()
  }
  let vt, tt, et = 0,
	nt = 0;
  
  function Me(n, t, e) {
	let s = t && e || 0;
	const o = t || new Array(16);
	n = n || {};
	let l = n.node || vt,
	  y = n.clockseq !== void 0 ? n.clockseq : tt;
	if (l == null || y == null) {
	  const i = n.random || (n.rng || Ne)();
	  l == null && (l = vt = [i[0] | 1, i[1], i[2], i[3], i[4], i[5]]), y == null && (y = tt = (i[6] << 8 | i[7]) & 16383)
	}
	let v = n.msecs !== void 0 ? n.msecs : Date.now(),
	  a = n.nsecs !== void 0 ? n.nsecs : nt + 1;
	const c = v - et + (a - nt) / 1e4;
	if (c < 0 && n.clockseq === void 0 && (y = y + 1 & 16383), (c < 0 || v > et) && n.nsecs === void 0 && (a = 0), a >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
	et = v, nt = a, tt = y, v += 122192928e5;
	const p = ((v & 268435455) * 1e4 + a) % 4294967296;
	o[s++] = p >>> 24 & 255, o[s++] = p >>> 16 & 255, o[s++] = p >>> 8 & 255, o[s++] = p & 255;
	const r = v / 4294967296 * 1e4 & 268435455;
	o[s++] = r >>> 8 & 255, o[s++] = r & 255, o[s++] = r >>> 24 & 15 | 16, o[s++] = r >>> 16 & 255, o[s++] = y >>> 8 | 128, o[s++] = y & 255;
	for (let i = 0; i < 6; ++i) o[s + i] = l[i];
	return t || Le(o)
  }
  const Ft = G("https://mysf.fly.dev/");
  Ft.on("connect", () => {
	console.log("Connected to server")
  });
  Ft.on("disconnect", () => {
	console.log("Disconnected from server")
  });
  var Pe = .5,
	Ie = "H",
	Fe = "#333333",
	ze = window.location.protocol + "//" + window.location.host,
	qe = "testshop",
	De = Me(),
	Ve = "testmodel",
	He = "testManu";
  const Ue = {
	  uid: De,
	  host: ze,
	  shop: qe,
	  manufacturer: He,
	  model: Ve
	},
	Ke = JSON.stringify(Ue),
	$e = btoa(Ke),
	zt = `https://mysf.fly.dev/?hash=${$e}`;
  console.log(zt);
  var R = document.createElement("button");
  document.body.appendChild(R);
  R.textContent = "Modal Test";
  R.id = "myButton";
  R.class = "myButton";
  R.style.backgroundColor = "#ff7d4f";
  R.style.padding = "12px";
  R.style.fontFamily = "'Circular Std', sans-serif";
  R.style.fontSize = "16px";
  R.style.color = "#ffffff";
  R.style.borderRadius = "10px";
  R.style.border = "1px solid #ff7d4f";
  R.style.left = "50%";
  R.style.top = "50%";
  R.style.position = "absolute";
  var V = document.createElement("div");
  document.body.appendChild(V);
  V.id = "myModal";
  V.style.display = "none";
  R.onclick = function() {
	V.style.display = "flex", Dt()
  };
  var qt = document.createElement("button");
  document.getElementById("myModal").appendChild(qt);
  qt.id = "close";
  V.innerHTML = `
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
	var n = document.querySelector("#idField"),
	  t = document.querySelector("#emailField"),
	  e = n.value,
	  s = t.value;
	e != "" && (Ye(), console.log("ID submitted!")), s != "" && (We(s), console.log("Email submitted!"))
  };
  
  function Ye() {
	var n = new Headers;
	n.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"), n.append("Content-Type", "application/json");
	var t = JSON.stringify({
		code: "test"
	  }),
	  e = {
		method: "POST",
		headers: n,
		body: t,
		redirect: "follow"
	  };
	fetch("https://admin.myshoefitter.com/flows/trigger/c7a5aa72-8ff2-4398-b910-a88994aeab4c", e).then(s => s.json()).then(s => {
	  const o = s[0].id;
	  console.log(o)
	}).catch(s => console.log("error", s))
  }
  
  function Dt() {
	var n = document.querySelector("#inner-content");
	if (V.style.display != "none") {
	  document.querySelector("#qr-code").innerHTML = "";
	  var t = n.clientWidth * .75;
	  Ut.render({
		text: zt,
		radius: Pe,
		ecLevel: Ie,
		fill: Fe,
		background: null,
		size: t
	  }, document.querySelector("#qr-code"))
	}
  }
  
  function We(n) {
	var t = new Headers;
	t.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"), t.append("Content-Type", "application/json");
	var e = JSON.stringify({
		email: n
	  }),
	  s = {
		method: "POST",
		headers: t,
		body: e,
		redirect: "follow"
	  };
	fetch("https://admin.myshoefitter.com/flows/trigger/bc96cffb-f215-4b8e-ba65-481d8c29e910", s).then(o => o.json()).then(o => console.log(o)).catch(o => console.log("error", o))
  }
  var O = document.createElement("button");
  document.body.appendChild(O);
  O.textContent = "FirstModal Test";
  O.id = "firstButton";
  O.class = "firstButton";
  O.style.backgroundColor = "#ff7d4f";
  O.style.padding = "12px";
  O.style.fontFamily = "'Circular Std', sans-serif";
  O.style.fontSize = "16px";
  O.style.color = "#ffffff";
  O.style.borderRadius = "10px";
  O.style.border = "1px solid #ff7d4f";
  O.style.left = "40%";
  O.style.top = "50%";
  O.style.position = "absolute";
  var K = document.createElement("div");
  document.body.appendChild(K);
  K.id = "firstModal";
  K.style.display = "none";
  O.onclick = function() {
	K.style.display = "flex"
  };
  var Vt = document.createElement("button");
  document.getElementById("firstModal").appendChild(Vt);
  Vt.id = "firstclose";
  var Ht = document.createElement("button");
  document.getElementById("firstModal").appendChild(Ht);
  Ht.id = "continueBtn";
  K.innerHTML = `
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
  `;
  document.querySelector("#continueBtn").onclick = function() {
	document.getElementById("firstModal").style.display = "none", document.getElementById("myModal").style.display = "flex", Dt()
  };
  