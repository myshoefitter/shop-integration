(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();let we=null;class xe{}xe.render=function(n,e){we(n,e)};self.QrCreator=xe;(function(n){function e(v,a,c,p){var i={},r=n(c,a);r.u(v),r.J(),p=p||0;var u=r.h(),h=r.h()+2*p;return i.text=v,i.level=a,i.version=c,i.O=h,i.a=function(y,E){return y-=p,E-=p,0>y||y>=u||0>E||E>=u?!1:r.a(y,E)},i}function t(v,a,c,p,i,r,u,h,y,E){function O(g,b,f,d,x,_,C){g?(v.lineTo(b+_,f+C),v.arcTo(b,f,d,x,r)):v.lineTo(b,f)}u?v.moveTo(a+r,c):v.moveTo(a,c),O(h,p,c,p,i,-r,0),O(y,p,i,a,i,0,-r),O(E,a,i,a,c,r,0),O(u,a,c,p,c,0,r)}function o(v,a,c,p,i,r,u,h,y,E){function O(g,b,f,d){v.moveTo(g+f,b),v.lineTo(g,b),v.lineTo(g,b+d),v.arcTo(g,b,g+f,b,r)}u&&O(a,c,r,r),h&&O(p,c,-r,r),y&&O(p,i,-r,-r),E&&O(a,i,r,-r)}function s(v,a){var c=a.fill;if(typeof c=="string")v.fillStyle=c;else{var p=c.type,i=c.colorStops;if(c=c.position.map(u=>Math.round(u*a.size)),p==="linear-gradient")var r=v.createLinearGradient.apply(v,c);else if(p==="radial-gradient")r=v.createRadialGradient.apply(v,c);else throw Error("Unsupported fill");i.forEach(([u,h])=>{r.addColorStop(u,h)}),v.fillStyle=r}}function l(v,a){e:{var c=a.text,p=a.v,i=a.N,r=a.K,u=a.P;for(i=Math.max(1,i||1),r=Math.min(40,r||40);i<=r;i+=1)try{var h=e(c,p,i,u);break e}catch{}h=void 0}if(!h)return null;for(c=v.getContext("2d"),a.background&&(c.fillStyle=a.background,c.fillRect(a.left,a.top,a.size,a.size)),p=h.O,r=a.size/p,c.beginPath(),u=0;u<p;u+=1)for(i=0;i<p;i+=1){var y=c,E=a.left+i*r,O=a.top+u*r,g=u,b=i,f=h.a,d=E+r,x=O+r,_=g-1,C=g+1,S=b-1,w=b+1,N=Math.floor(Math.min(.5,Math.max(0,a.R))*r),z=f(g,b),I=f(_,S),H=f(_,b);_=f(_,w);var W=f(g,w);w=f(C,w),b=f(C,b),C=f(C,S),g=f(g,S),E=Math.round(E),O=Math.round(O),d=Math.round(d),x=Math.round(x),z?t(y,E,O,d,x,N,!H&&!g,!H&&!W,!b&&!W,!b&&!g):o(y,E,O,d,x,N,H&&g&&I,H&&W&&_,b&&W&&w,b&&g&&C)}return s(c,a),c.fill(),v}var m={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};we=function(v,a){var c={};Object.assign(c,m,v),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,a instanceof HTMLCanvasElement?((a.width!==c.size||a.height!==c.size)&&(a.width=c.size,a.height=c.size),a.getContext("2d").clearRect(0,0,a.width,a.height),l(a,c)):(v=document.createElement("canvas"),v.width=c.size,v.height=c.size,c=l(v,c),a.appendChild(c))}})(function(){function n(a){var c=t.s(a);return{S:function(){return 4},b:function(){return c.length},write:function(p){for(var i=0;i<c.length;i+=1)p.put(c[i],8)}}}function e(){var a=[],c=0,p={B:function(){return a},c:function(i){return(a[Math.floor(i/8)]>>>7-i%8&1)==1},put:function(i,r){for(var u=0;u<r;u+=1)p.m((i>>>r-u-1&1)==1)},f:function(){return c},m:function(i){var r=Math.floor(c/8);a.length<=r&&a.push(0),i&&(a[r]|=128>>>c%8),c+=1}};return p}function t(a,c){function p(g,b){for(var f=-1;7>=f;f+=1)if(!(-1>=g+f||h<=g+f))for(var d=-1;7>=d;d+=1)-1>=b+d||h<=b+d||(u[g+f][b+d]=0<=f&&6>=f&&(d==0||d==6)||0<=d&&6>=d&&(f==0||f==6)||2<=f&&4>=f&&2<=d&&4>=d)}function i(g,b){for(var f=h=4*a+17,d=Array(f),x=0;x<f;x+=1){d[x]=Array(f);for(var _=0;_<f;_+=1)d[x][_]=null}for(u=d,p(0,0),p(h-7,0),p(0,h-7),f=l.G(a),d=0;d<f.length;d+=1)for(x=0;x<f.length;x+=1){_=f[d];var C=f[x];if(u[_][C]==null)for(var S=-2;2>=S;S+=1)for(var w=-2;2>=w;w+=1)u[_+S][C+w]=S==-2||S==2||w==-2||w==2||S==0&&w==0}for(f=8;f<h-8;f+=1)u[f][6]==null&&(u[f][6]=f%2==0);for(f=8;f<h-8;f+=1)u[6][f]==null&&(u[6][f]=f%2==0);for(f=l.w(r<<3|b),d=0;15>d;d+=1)x=!g&&(f>>d&1)==1,u[6>d?d:8>d?d+1:h-15+d][8]=x,u[8][8>d?h-d-1:9>d?15-d:14-d]=x;if(u[h-8][8]=!g,7<=a){for(f=l.A(a),d=0;18>d;d+=1)x=!g&&(f>>d&1)==1,u[Math.floor(d/3)][d%3+h-8-3]=x;for(d=0;18>d;d+=1)x=!g&&(f>>d&1)==1,u[d%3+h-8-3][Math.floor(d/3)]=x}if(y==null){for(g=v.I(a,r),f=e(),d=0;d<E.length;d+=1)x=E[d],f.put(4,4),f.put(x.b(),l.f(4,a)),x.write(f);for(d=x=0;d<g.length;d+=1)x+=g[d].j;if(f.f()>8*x)throw Error("code length overflow. ("+f.f()+">"+8*x+")");for(f.f()+4<=8*x&&f.put(0,4);f.f()%8!=0;)f.m(!1);for(;!(f.f()>=8*x)&&(f.put(236,8),!(f.f()>=8*x));)f.put(17,8);var N=0;for(x=d=0,_=Array(g.length),C=Array(g.length),S=0;S<g.length;S+=1){var z=g[S].j,I=g[S].o-z;for(d=Math.max(d,z),x=Math.max(x,I),_[S]=Array(z),w=0;w<_[S].length;w+=1)_[S][w]=255&f.B()[w+N];for(N+=z,w=l.C(I),z=o(_[S],w.b()-1).l(w),C[S]=Array(w.b()-1),w=0;w<C[S].length;w+=1)I=w+z.b()-C[S].length,C[S][w]=0<=I?z.c(I):0}for(w=f=0;w<g.length;w+=1)f+=g[w].o;for(f=Array(f),w=N=0;w<d;w+=1)for(S=0;S<g.length;S+=1)w<_[S].length&&(f[N]=_[S][w],N+=1);for(w=0;w<x;w+=1)for(S=0;S<g.length;S+=1)w<C[S].length&&(f[N]=C[S][w],N+=1);y=f}for(g=y,f=-1,d=h-1,x=7,_=0,b=l.F(b),C=h-1;0<C;C-=2)for(C==6&&--C;;){for(S=0;2>S;S+=1)u[d][C-S]==null&&(w=!1,_<g.length&&(w=(g[_]>>>x&1)==1),b(d,C-S)&&(w=!w),u[d][C-S]=w,--x,x==-1&&(_+=1,x=7));if(d+=f,0>d||h<=d){d-=f,f=-f;break}}}var r=s[c],u=null,h=0,y=null,E=[],O={u:function(g){g=n(g),E.push(g),y=null},a:function(g,b){if(0>g||h<=g||0>b||h<=b)throw Error(g+","+b);return u[g][b]},h:function(){return h},J:function(){for(var g=0,b=0,f=0;8>f;f+=1){i(!0,f);var d=l.D(O);(f==0||g>d)&&(g=d,b=f)}i(!1,b)}};return O}function o(a,c){if(typeof a.length>"u")throw Error(a.length+"/"+c);var p=function(){for(var r=0;r<a.length&&a[r]==0;)r+=1;for(var u=Array(a.length-r+c),h=0;h<a.length-r;h+=1)u[h]=a[h+r];return u}(),i={c:function(r){return p[r]},b:function(){return p.length},multiply:function(r){for(var u=Array(i.b()+r.b()-1),h=0;h<i.b();h+=1)for(var y=0;y<r.b();y+=1)u[h+y]^=m.i(m.g(i.c(h))+m.g(r.c(y)));return o(u,0)},l:function(r){if(0>i.b()-r.b())return i;for(var u=m.g(i.c(0))-m.g(r.c(0)),h=Array(i.b()),y=0;y<i.b();y+=1)h[y]=i.c(y);for(y=0;y<r.b();y+=1)h[y]^=m.i(m.g(r.c(y))+u);return o(h,0).l(r)}};return i}t.s=function(a){for(var c=[],p=0;p<a.length;p++){var i=a.charCodeAt(p);128>i?c.push(i):2048>i?c.push(192|i>>6,128|i&63):55296>i||57344<=i?c.push(224|i>>12,128|i>>6&63,128|i&63):(p++,i=65536+((i&1023)<<10|a.charCodeAt(p)&1023),c.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63))}return c};var s={L:1,M:0,Q:3,H:2},l=function(){function a(i){for(var r=0;i!=0;)r+=1,i>>>=1;return r}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],p={w:function(i){for(var r=i<<10;0<=a(r)-a(1335);)r^=1335<<a(r)-a(1335);return(i<<10|r)^21522},A:function(i){for(var r=i<<12;0<=a(r)-a(7973);)r^=7973<<a(r)-a(7973);return i<<12|r},G:function(i){return c[i-1]},F:function(i){switch(i){case 0:return function(r,u){return(r+u)%2==0};case 1:return function(r){return r%2==0};case 2:return function(r,u){return u%3==0};case 3:return function(r,u){return(r+u)%3==0};case 4:return function(r,u){return(Math.floor(r/2)+Math.floor(u/3))%2==0};case 5:return function(r,u){return r*u%2+r*u%3==0};case 6:return function(r,u){return(r*u%2+r*u%3)%2==0};case 7:return function(r,u){return(r*u%3+(r+u)%2)%2==0};default:throw Error("bad maskPattern:"+i)}},C:function(i){for(var r=o([1],0),u=0;u<i;u+=1)r=r.multiply(o([1,m.i(u)],0));return r},f:function(i,r){if(i!=4||1>r||40<r)throw Error("mode: "+i+"; type: "+r);return 10>r?8:16},D:function(i){for(var r=i.h(),u=0,h=0;h<r;h+=1)for(var y=0;y<r;y+=1){for(var E=0,O=i.a(h,y),g=-1;1>=g;g+=1)if(!(0>h+g||r<=h+g))for(var b=-1;1>=b;b+=1)0>y+b||r<=y+b||(g!=0||b!=0)&&O==i.a(h+g,y+b)&&(E+=1);5<E&&(u+=3+E-5)}for(h=0;h<r-1;h+=1)for(y=0;y<r-1;y+=1)E=0,i.a(h,y)&&(E+=1),i.a(h+1,y)&&(E+=1),i.a(h,y+1)&&(E+=1),i.a(h+1,y+1)&&(E+=1),(E==0||E==4)&&(u+=3);for(h=0;h<r;h+=1)for(y=0;y<r-6;y+=1)i.a(h,y)&&!i.a(h,y+1)&&i.a(h,y+2)&&i.a(h,y+3)&&i.a(h,y+4)&&!i.a(h,y+5)&&i.a(h,y+6)&&(u+=40);for(y=0;y<r;y+=1)for(h=0;h<r-6;h+=1)i.a(h,y)&&!i.a(h+1,y)&&i.a(h+2,y)&&i.a(h+3,y)&&i.a(h+4,y)&&!i.a(h+5,y)&&i.a(h+6,y)&&(u+=40);for(y=E=0;y<r;y+=1)for(h=0;h<r;h+=1)i.a(h,y)&&(E+=1);return u+=Math.abs(100*E/r/r-50)/5*10}};return p}(),m=function(){for(var a=Array(256),c=Array(256),p=0;8>p;p+=1)a[p]=1<<p;for(p=8;256>p;p+=1)a[p]=a[p-4]^a[p-5]^a[p-6]^a[p-8];for(p=0;255>p;p+=1)c[a[p]]=p;return{g:function(i){if(1>i)throw Error("glog("+i+")");return c[i]},i:function(i){for(;0>i;)i+=255;for(;256<=i;)i-=255;return a[i]}}}(),v=function(){function a(i,r){switch(r){case s.L:return c[4*(i-1)];case s.M:return c[4*(i-1)+1];case s.Q:return c[4*(i-1)+2];case s.H:return c[4*(i-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p={I:function(i,r){var u=a(i,r);if(typeof u>"u")throw Error("bad rs block @ typeNumber:"+i+"/errorCorrectLevel:"+r);i=u.length/3,r=[];for(var h=0;h<i;h+=1)for(var y=u[3*h],E=u[3*h+1],O=u[3*h+2],g=0;g<y;g+=1){var b=O,f={};f.o=E,f.j=b,r.push(f)}return r}};return p}();return t}());const De=QrCreator,M=Object.create(null);M.open="0";M.close="1";M.ping="2";M.pong="3";M.message="4";M.upgrade="5";M.noop="6";const Y=Object.create(null);Object.keys(M).forEach(n=>{Y[M[n]]=n});const Ue={type:"error",data:"parser error"},Ve=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",He=typeof ArrayBuffer=="function",We=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Se=({type:n,data:e},t,o)=>Ve&&e instanceof Blob?t?o(e):fe(e,o):He&&(e instanceof ArrayBuffer||We(e))?t?o(e):fe(new Blob([e]),o):o(M[n]+(e||"")),fe=(n,e)=>{const t=new FileReader;return t.onload=function(){const o=t.result.split(",")[1];e("b"+(o||""))},t.readAsDataURL(n)},he="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",V=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<he.length;n++)V[he.charCodeAt(n)]=n;const je=n=>{let e=n.length*.75,t=n.length,o,s=0,l,m,v,a;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const c=new ArrayBuffer(e),p=new Uint8Array(c);for(o=0;o<t;o+=4)l=V[n.charCodeAt(o)],m=V[n.charCodeAt(o+1)],v=V[n.charCodeAt(o+2)],a=V[n.charCodeAt(o+3)],p[s++]=l<<2|m>>4,p[s++]=(m&15)<<4|v>>2,p[s++]=(v&3)<<6|a&63;return c},Ke=typeof ArrayBuffer=="function",ke=(n,e)=>{if(typeof n!="string")return{type:"message",data:Ee(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:$e(n.substring(1),e)}:Y[t]?n.length>1?{type:Y[t],data:n.substring(1)}:{type:Y[t]}:Ue},$e=(n,e)=>{if(Ke){const t=je(n);return Ee(t,e)}else return{base64:!0,data:n}},Ee=(n,e)=>{switch(e){case"blob":return n instanceof ArrayBuffer?new Blob([n]):n;case"arraybuffer":default:return n}},_e=String.fromCharCode(30),Ye=(n,e)=>{const t=n.length,o=new Array(t);let s=0;n.forEach((l,m)=>{Se(l,!1,v=>{o[m]=v,++s===t&&e(o.join(_e))})})},Qe=(n,e)=>{const t=n.split(_e),o=[];for(let s=0;s<t.length;s++){const l=ke(t[s],e);if(o.push(l),l.type==="error")break}return o},Ce=4;function A(n){if(n)return Je(n)}function Je(n){for(var e in A.prototype)n[e]=A.prototype[e];return n}A.prototype.on=A.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};A.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};A.prototype.off=A.prototype.removeListener=A.prototype.removeAllListeners=A.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var o,s=0;s<t.length;s++)if(o=t[s],o===e||o.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+n],this};A.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],o=1;o<arguments.length;o++)e[o-1]=arguments[o];if(t){t=t.slice(0);for(var o=0,s=t.length;o<s;++o)t[o].apply(this,e)}return this};A.prototype.emitReserved=A.prototype.emit;A.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};A.prototype.hasListeners=function(n){return!!this.listeners(n).length};const T=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function Oe(n,...e){return e.reduce((t,o)=>(n.hasOwnProperty(o)&&(t[o]=n[o]),t),{})}const Xe=T.setTimeout,Ge=T.clearTimeout;function J(n,e){e.useNativeTimers?(n.setTimeoutFn=Xe.bind(T),n.clearTimeoutFn=Ge.bind(T)):(n.setTimeoutFn=T.setTimeout.bind(T),n.clearTimeoutFn=T.clearTimeout.bind(T))}const Ze=1.33;function et(n){return typeof n=="string"?tt(n):Math.ceil((n.byteLength||n.size)*Ze)}function tt(n){let e=0,t=0;for(let o=0,s=n.length;o<s;o++)e=n.charCodeAt(o),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(o++,t+=4);return t}class nt extends Error{constructor(e,t,o){super(e),this.description=t,this.context=o,this.type="TransportError"}}class Ae extends A{constructor(e){super(),this.writable=!1,J(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,o){return super.emitReserved("error",new nt(e,t,o)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=ke(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}}const Re="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),ne=64,ot={};let ue=0,j=0,de;function pe(n){let e="";do e=Re[n%ne]+e,n=Math.floor(n/ne);while(n>0);return e}function Te(){const n=pe(+new Date);return n!==de?(ue=0,de=n):n+"."+pe(ue++)}for(;j<ne;j++)ot[Re[j]]=j;function Be(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function rt(n){let e={},t=n.split("&");for(let o=0,s=t.length;o<s;o++){let l=t[o].split("=");e[decodeURIComponent(l[0])]=decodeURIComponent(l[1])}return e}let Ne=!1;try{Ne=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const it=Ne;function Le(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||it))return new XMLHttpRequest}catch{}if(!e)try{return new T[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function st(){}const at=function(){return new Le({xdomain:!1}).responseType!=null}();class ct extends Ae{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const o=location.protocol==="https:";let s=location.port;s||(s=o?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port,this.xs=e.secure!==o}const t=e&&e.forceBase64;this.supportsBinary=at&&!t}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let o=0;this.polling&&(o++,this.once("pollComplete",function(){--o||t()})),this.writable||(o++,this.once("drain",function(){--o||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=o=>{if(this.readyState==="opening"&&o.type==="open"&&this.onOpen(),o.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(o)};Qe(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ye(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let o="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=Te()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(o=":"+this.opts.port);const s=Be(e),l=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(l?"["+this.opts.hostname+"]":this.opts.hostname)+o+this.opts.path+(s.length?"?"+s:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new L(this.uri(),e)}doWrite(e,t){const o=this.request({method:"POST",data:e});o.on("success",t),o.on("error",(s,l)=>{this.onError("xhr post error",s,l)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,o)=>{this.onError("xhr poll error",t,o)}),this.pollXhr=e}}class L extends A{constructor(e,t){super(),J(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=Oe(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new Le(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let o in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(o)&&t.setRequestHeader(o,this.opts.extraHeaders[o])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(o){this.setTimeoutFn(()=>{this.onError(o)},0);return}typeof document<"u"&&(this.index=L.requestsCount++,L.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=st,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete L.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}L.requestsCount=0;L.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",me);else if(typeof addEventListener=="function"){const n="onpagehide"in T?"pagehide":"unload";addEventListener(n,me,!1)}}function me(){for(let n in L.requests)L.requests.hasOwnProperty(n)&&L.requests[n].abort()}const Me=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),K=T.WebSocket||T.MozWebSocket,ye=!0,lt="arraybuffer",ge=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class ft extends Ae{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,o=ge?{}:Oe(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(o.headers=this.opts.extraHeaders);try{this.ws=ye&&!ge?t?new K(e,t):new K(e):new K(e,t,o)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType||lt,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const o=e[t],s=t===e.length-1;Se(o,this.supportsBinary,l=>{const m={};try{ye&&this.ws.send(l)}catch{}s&&Me(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let o="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(o=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=Te()),this.supportsBinary||(e.b64=1);const s=Be(e),l=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(l?"["+this.opts.hostname+"]":this.opts.hostname)+o+this.opts.path+(s.length?"?"+s:"")}check(){return!!K}}const ht={websocket:ft,polling:ct},ut=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,dt=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function oe(n){const e=n,t=n.indexOf("["),o=n.indexOf("]");t!=-1&&o!=-1&&(n=n.substring(0,t)+n.substring(t,o).replace(/:/g,";")+n.substring(o,n.length));let s=ut.exec(n||""),l={},m=14;for(;m--;)l[dt[m]]=s[m]||"";return t!=-1&&o!=-1&&(l.source=e,l.host=l.host.substring(1,l.host.length-1).replace(/;/g,":"),l.authority=l.authority.replace("[","").replace("]","").replace(/;/g,":"),l.ipv6uri=!0),l.pathNames=pt(l,l.path),l.queryKey=mt(l,l.query),l}function pt(n,e){const t=/\/{2,9}/g,o=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&o.splice(0,1),e.slice(-1)=="/"&&o.splice(o.length-1,1),o}function mt(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(o,s,l){s&&(t[s]=l)}),t}let ze=class F extends A{constructor(e,t={}){super(),this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=oe(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=oe(t.host).host),J(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=rt(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Ce,t.transport=e,this.id&&(t.sid=this.id);const o=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new ht[e](o)}open(){let e;if(this.opts.rememberUpgrade&&F.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),o=!1;F.priorWebsocketSuccess=!1;const s=()=>{o||(t.send([{type:"ping",data:"probe"}]),t.once("packet",i=>{if(!o)if(i.type==="pong"&&i.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;F.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{o||this.readyState!=="closed"&&(p(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const r=new Error("probe error");r.transport=t.name,this.emitReserved("upgradeError",r)}}))};function l(){o||(o=!0,p(),t.close(),t=null)}const m=i=>{const r=new Error("probe error: "+i);r.transport=t.name,l(),this.emitReserved("upgradeError",r)};function v(){m("transport closed")}function a(){m("socket closed")}function c(i){t&&i.name!==t.name&&l()}const p=()=>{t.removeListener("open",s),t.removeListener("error",m),t.removeListener("close",v),this.off("close",a),this.off("upgrading",c)};t.once("open",s),t.once("error",m),t.once("close",v),this.once("close",a),this.once("upgrading",c),t.open()}onOpen(){if(this.readyState="open",F.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let o=0;o<this.writeBuffer.length;o++){const s=this.writeBuffer[o].data;if(s&&(t+=et(s)),o>0&&t>this.maxPayload)return this.writeBuffer.slice(0,o);t+=2}return this.writeBuffer}write(e,t,o){return this.sendPacket("message",e,t,o),this}send(e,t,o){return this.sendPacket("message",e,t,o),this}sendPacket(e,t,o,s){if(typeof t=="function"&&(s=t,t=void 0),typeof o=="function"&&(s=o,o=null),this.readyState==="closing"||this.readyState==="closed")return;o=o||{},o.compress=o.compress!==!1;const l={type:e,data:t,options:o};this.emitReserved("packetCreate",l),this.writeBuffer.push(l),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},o=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?o():e()}):this.upgrading?o():e()),this}onError(e){F.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let o=0;const s=e.length;for(;o<s;o++)~this.transports.indexOf(e[o])&&t.push(e[o]);return t}};ze.protocol=Ce;function yt(n,e="",t){let o=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),o=oe(n)),o.port||(/^(http|ws)$/.test(o.protocol)?o.port="80":/^(http|ws)s$/.test(o.protocol)&&(o.port="443")),o.path=o.path||"/";const l=o.host.indexOf(":")!==-1?"["+o.host+"]":o.host;return o.id=o.protocol+"://"+l+":"+o.port+e,o.href=o.protocol+"://"+l+(t&&t.port===o.port?"":":"+o.port),o}const gt=typeof ArrayBuffer=="function",vt=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,qe=Object.prototype.toString,bt=typeof Blob=="function"||typeof Blob<"u"&&qe.call(Blob)==="[object BlobConstructor]",wt=typeof File=="function"||typeof File<"u"&&qe.call(File)==="[object FileConstructor]";function ae(n){return gt&&(n instanceof ArrayBuffer||vt(n))||bt&&n instanceof Blob||wt&&n instanceof File}function Q(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,o=n.length;t<o;t++)if(Q(n[t]))return!0;return!1}if(ae(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Q(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&Q(n[t]))return!0;return!1}function xt(n){const e=[],t=n.data,o=n;return o.data=re(t,e),o.attachments=e.length,{packet:o,buffers:e}}function re(n,e){if(!n)return n;if(ae(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){const t=new Array(n.length);for(let o=0;o<n.length;o++)t[o]=re(n[o],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){const t={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=re(n[o],e));return t}return n}function St(n,e){return n.data=ie(n.data,e),delete n.attachments,n}function ie(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=ie(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=ie(n[t],e));return n}const kt=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Et=5;var k;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(k||(k={}));class _t{constructor(e){this.replacer=e}encode(e){return(e.type===k.EVENT||e.type===k.ACK)&&Q(e)?this.encodeAsBinary({type:e.type===k.EVENT?k.BINARY_EVENT:k.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===k.BINARY_EVENT||e.type===k.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=xt(e),o=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(o),s}}function ve(n){return Object.prototype.toString.call(n)==="[object Object]"}class ce extends A{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const o=t.type===k.BINARY_EVENT;o||t.type===k.BINARY_ACK?(t.type=o?k.EVENT:k.ACK,this.reconstructor=new Ct(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(ae(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const o={type:Number(e.charAt(0))};if(k[o.type]===void 0)throw new Error("unknown packet type "+o.type);if(o.type===k.BINARY_EVENT||o.type===k.BINARY_ACK){const l=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const m=e.substring(l,t);if(m!=Number(m)||e.charAt(t)!=="-")throw new Error("Illegal attachments");o.attachments=Number(m)}if(e.charAt(t+1)==="/"){const l=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););o.nsp=e.substring(l,t)}else o.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const l=t+1;for(;++t;){const m=e.charAt(t);if(m==null||Number(m)!=m){--t;break}if(t===e.length)break}o.id=Number(e.substring(l,t+1))}if(e.charAt(++t)){const l=this.tryParse(e.substr(t));if(ce.isPayloadValid(o.type,l))o.data=l;else throw new Error("invalid payload")}return o}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case k.CONNECT:return ve(t);case k.DISCONNECT:return t===void 0;case k.CONNECT_ERROR:return typeof t=="string"||ve(t);case k.EVENT:case k.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&kt.indexOf(t[0])===-1);case k.ACK:case k.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ct{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=St(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Ot=Object.freeze(Object.defineProperty({__proto__:null,Decoder:ce,Encoder:_t,get PacketType(){return k},protocol:Et},Symbol.toStringTag,{value:"Module"}));function B(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const At=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ie extends A{constructor(e,t,o){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,o&&o.auth&&(this.auth=o.auth),this._opts=Object.assign({},o),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[B(e,"open",this.onopen.bind(this)),B(e,"packet",this.onpacket.bind(this)),B(e,"error",this.onerror.bind(this)),B(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(At.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const o={type:k.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const m=this.ids++,v=t.pop();this._registerAckCallback(m,v),o.id=m}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var o;const s=(o=this.flags.timeout)!==null&&o!==void 0?o:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const l=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let m=0;m<this.sendBuffer.length;m++)this.sendBuffer[m].id===e&&this.sendBuffer.splice(m,1);t.call(this,new Error("operation has timed out"))},s);this.acks[e]=(...m)=>{this.io.clearTimeoutFn(l),t.apply(this,[null,...m])}}emitWithAck(e,...t){const o=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((s,l)=>{t.push((m,v)=>o?m?l(m):s(v):s(m)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const o={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...l)=>o!==this._queue[0]?void 0:(s!==null?o.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...l)),o.pending=!1,this._drainQueue())),this._queue.push(o),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:k.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case k.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case k.EVENT:case k.BINARY_EVENT:this.onevent(e);break;case k.ACK:case k.BINARY_ACK:this.onack(e);break;case k.DISCONNECT:this.ondisconnect();break;case k.CONNECT_ERROR:this.destroy();const o=new Error(e.data.message);o.data=e.data.data,this.emitReserved("connect_error",o);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const o of t)o.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let o=!1;return function(...s){o||(o=!0,t.packet({type:k.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:k.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let o=0;o<t.length;o++)if(e===t[o])return t.splice(o,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let o=0;o<t.length;o++)if(e===t[o])return t.splice(o,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const o of t)o.apply(this,e.data)}}}function D(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}D.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};D.prototype.reset=function(){this.attempts=0};D.prototype.setMin=function(n){this.ms=n};D.prototype.setMax=function(n){this.max=n};D.prototype.setJitter=function(n){this.jitter=n};class se extends A{constructor(e,t){var o;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,J(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((o=t.randomizationFactor)!==null&&o!==void 0?o:.5),this.backoff=new D({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||Ot;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new ze(this.uri,this.opts);const t=this.engine,o=this;this._readyState="opening",this.skipReconnect=!1;const s=B(t,"open",function(){o.onopen(),e&&e()}),l=B(t,"error",m=>{o.cleanup(),o._readyState="closed",this.emitReserved("error",m),e?e(m):o.maybeReconnectOnOpen()});if(this._timeout!==!1){const m=this._timeout;m===0&&s();const v=this.setTimeoutFn(()=>{s(),t.close(),t.emit("error",new Error("timeout"))},m);this.opts.autoUnref&&v.unref(),this.subs.push(function(){clearTimeout(v)})}return this.subs.push(s),this.subs.push(l),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(B(e,"ping",this.onping.bind(this)),B(e,"data",this.ondata.bind(this)),B(e,"error",this.onerror.bind(this)),B(e,"close",this.onclose.bind(this)),B(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Me(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let o=this.nsps[e];return o?this._autoConnect&&!o.active&&o.connect():(o=new Ie(this,e,t),this.nsps[e]=o),o}_destroy(e){const t=Object.keys(this.nsps);for(const o of t)if(this.nsps[o].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let o=0;o<t.length;o++)this.engine.write(t[o],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const o=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&o.unref(),this.subs.push(function(){clearTimeout(o)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const U={};function X(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=yt(n,e.path||"/socket.io"),o=t.source,s=t.id,l=t.path,m=U[s]&&l in U[s].nsps,v=e.forceNew||e["force new connection"]||e.multiplex===!1||m;let a;return v?a=new se(o,e):(U[s]||(U[s]=new se(o,e)),a=U[s]),t.query&&!e.query&&(e.query=t.queryKey),a.socket(t.path,e)}Object.assign(X,{Manager:se,Socket:Ie,io:X,connect:X});let $;const Rt=new Uint8Array(16);function Tt(){if(!$&&($=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $(Rt)}const R=[];for(let n=0;n<256;++n)R.push((n+256).toString(16).slice(1));function Bt(n,e=0){return(R[n[e+0]]+R[n[e+1]]+R[n[e+2]]+R[n[e+3]]+"-"+R[n[e+4]]+R[n[e+5]]+"-"+R[n[e+6]]+R[n[e+7]]+"-"+R[n[e+8]]+R[n[e+9]]+"-"+R[n[e+10]]+R[n[e+11]]+R[n[e+12]]+R[n[e+13]]+R[n[e+14]]+R[n[e+15]]).toLowerCase()}let be,G,Z=0,ee=0;function Nt(n,e,t){let o=e&&t||0;const s=e||new Array(16);n=n||{};let l=n.node||be,m=n.clockseq!==void 0?n.clockseq:G;if(l==null||m==null){const r=n.random||(n.rng||Tt)();l==null&&(l=be=[r[0]|1,r[1],r[2],r[3],r[4],r[5]]),m==null&&(m=G=(r[6]<<8|r[7])&16383)}let v=n.msecs!==void 0?n.msecs:Date.now(),a=n.nsecs!==void 0?n.nsecs:ee+1;const c=v-Z+(a-ee)/1e4;if(c<0&&n.clockseq===void 0&&(m=m+1&16383),(c<0||v>Z)&&n.nsecs===void 0&&(a=0),a>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Z=v,ee=a,G=m,v+=122192928e5;const p=((v&268435455)*1e4+a)%4294967296;s[o++]=p>>>24&255,s[o++]=p>>>16&255,s[o++]=p>>>8&255,s[o++]=p&255;const i=v/4294967296*1e4&268435455;s[o++]=i>>>8&255,s[o++]=i&255,s[o++]=i>>>24&15|16,s[o++]=i>>>16&255,s[o++]=m>>>8|128,s[o++]=m&255;for(let r=0;r<6;++r)s[o+r]=l[r];return e||Bt(s)}var q=!1,Pe=!1,Fe;screen.width<=768?(q=!0,Fe="mobile"):q=!1;var Lt=0,Mt="L",zt="#022652",le,qt=window.location.protocol+"//"+window.location.host,It=Nt();const Pt=function(){function n(e,t,o){Ft(o,e,t)}return{setvalues:n}}();function Ft(n,e,t){const s=JSON.stringify({uid:It,host:qt,shop:n,manufacturer:e,model:t,client:Fe});le=`https://app.myshoefitter.com/?hash=${btoa(s)}`}var P=document.createElement("div");document.body.appendChild(P);P.id="modal-overlay";P.className="animate__fadeInUp";P.style.display="none";q?P.innerHTML=`
<style>
/* montserrat-100 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Montserrat';
  font-style: normal; 
  font-weight: 100;
  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-100.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* montserrat-200 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 200;
  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-200.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* montserrat-300 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-300.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* montserrat-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* montserrat-500 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* montserrat-600 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* montserrat-700 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* montserrat-800 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* montserrat-900 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-900.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

  .modal-overlay {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    font-family: 'Montserrat', sans-serif;
  }

  .modal-content {
    position: relative;
    flex-direction: column;
    align-items: center;
    width:90%;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 0 40px 10px rgba(0,0,0,0.1);
    margin: auto;
    padding: 30px;
    border-radius: 40px;
    font-family: 'Montserrat', sans-serif;
    color: #333333;
  }

  #mysf_mob {
    width:inherit;
    padding: 0px 50px;
    margin: 10px;
    z-index:1;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index:1;
  }

  .close {
    color: #ff7d4f;
    font-size: 64px;
    font-weight: 300;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #aaa;
    text-decoration: none;
    cursor: pointer;
  }

  .big-circle {
    background: linear-gradient(#ff7d4f10, #ff7d4f40);
    border-radius: 50%;
    height: 300px;
    position: absolute;
    width: 300px;
    z-index:0;
    top:50%;
    left:-100px;
  }

  .big-circle-top {
    background: linear-gradient(#ff7d4f10, #ff7d4f40);
    border-radius: 50%;
    height: 200px;
    position: absolute;
    width: 200px;
    z-index:0;
    top:15%;
    left:90%;
  }

  #mysf_input {
    width: inherit;
    padding: 0px 50px;
    margin: 10px;
    z-index:1;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .form-inputs {
    display: flex;
    width: -webkit-fill-available;
    flex-direction: row;
    border: 1px solid #d2d9e4;
    padding: 1px;
    border-radius: 20px;
    background: #fff;
    margin-bottom: 1em;
  }

  .form-inputs input {
    border: none;
    width: -webkit-fill-available;
    padding: 12px;
    border-radius: 20px;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
  }

  .form-inputs input:focus {
    outline: none;
    background-color: transparent;
  }

  .form-inputs input:-webkit-autofill,
  .form-inputs input:-webkit-autofill:hover,
  .form-inputs input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #333;
  }

  .form-inputs input:-moz-autofill {
    -moz-box-shadow: 0 0 0px 1000px white inset;
    -moz-text-fill-color: #333;
  }

  .form-inputs input::placeholder {
    color: #333333;
  }

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }

  .forgot-link {
    cursor: pointer;
    color: grey;
  }

  .info-text {
    margin: 0;
    color: grey;
    text-decoration: none;
  }

  .continue-button {
    display: block; 
    margin: auto;
    width: 100%;
    background-color: #ff7d4f;
    padding: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #ffffff;
    border-radius: 20px;
    border: 1px solid #ff7d4f;
    margin-bottom: 1em;
  }

  .continue-button:active {
    background-color: white;
    box-shadow: 0px 0px 32px 0 #f8f8f850;
    color: #ff7d4f;
    transition-duration: 250ms;
  }
  
  .continue-to-id-button {
    display: block; 
    width: 50%;
    background-color: transparent;
    padding: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #ff7d4f;
    border: 0;
    margin-bottom: 1em;
  }

  .continue-to-id-button:active {
    color: #aaa;
  }

  .continue-to-info-button {
    display: block; 
    width: 50%;
    background-color: transparent;
    padding: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #ff7d4f;
    border-radius: 20px;
    border: 1px solid #ff7d4f;
    margin-bottom: 1em;
  }
  .circle {
    position: relative;
    background: #ff7d4f;
    width: fit-content;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    display: block;
    margin: auto;
  }

  .shoe-size {
    position: absolute;
    font-weight: 500;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 0;
    margin: 0;
    font-size: 70px;
    width: 100%;
    text-align: center;
  }

  .specs {
    margin: 12px;
    background-color: #f2f2f280;
    padding: 10px;
    border-radius: 12px;
  }

  ul {
    list-style-type: none;
    padding: 0px 24px;
  }

  li {
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .label {
    font-weight: bold;
    margin-right: 5px;
  }

  .note {
    font-style: italic;
    color: gray;
  }

</style>

<div id="modal-overlay" class="modal-overlay" onclick="document.getElementById('modal-overlay').style.display='none';
document.getElementById('mysf_mob').style.display = 'block';
document.getElementById('mysf_size').style.display = 'none';
document.getElementById('mysf_input').style.display = 'none'";>
  <div class="modal-content animate__animated animate__fadeInDown" onclick="event.stopPropagation()">
    <div class="big-circle"></div>
    <div class="big-circle-top"></div>
    <div class="header">
      <img src=" https://cdn.myshoefitter.com/images/logo.png" width="150px" style="margin-left:50px">
      <span class="close" onclick="document.getElementById('modal-overlay').style.display='none';
       document.getElementById('mysf_mob').style.display = 'block';
       document.getElementById('mysf_size').style.display = 'none';
       document.getElementById('mysf_input').style.display = 'none';
      ">&times;</span>
      </div>
    <div id="mysf_input" style="display:none">
      <div class="form-container">
        <div class="form-inputs">
          <input type="text" id="id-field" name="idFormField" placeholder="Enter your ID">
          <input type="text" id="email-field" name="emailField" placeholder="Enter your Email" style="display:none;">
        </div>
        <button id="submit-btn" class="continue-button">Senden</button>
        <div class="form-footer">
          <a id="forgot-button" class="forgot-link">ID vergessen?</a>
          <p id="info-text" class="info-text"></p>
        </div>
      </div>
    </div>

    <div id="mysf_mob">
      <h3>Einmal deinen Fuß scannen,<br>immer die richtige Größe bestellen</h3>
      <p>Scanne den QR-Code und starte mit der Messung. Du <br>musst nur einen Scan von deinem Fuß machen.<br> Es dauert nur wenige Minuten.</p>
      <button id="continue-btn2" class="continue-button">Jetzt Fuß vermessen</button>
      <div style="display:flex;flex-direction:row;justify-content:space-evenly;margin-top: 0.5em;">
        <button id="continue-to-info-button" class="continue-to-info-button">So funktioniert's</button>
        <button id="continue-btn" class="continue-to-id-button">Mit Scan-ID fortfahren</button>
      </div>
    </div>

    <div id="mysf_size" style="display:none">
    <div class="circle">
      <h2 class="shoe-size">35</h2>
    </div>
    <div class="specs">
        <ul>
          <li>
            <div>
              Marke:
            </div>
            <div>
              Manufacturer
            </div>
          </li>
           <hr style="width:-webkit-fill-available;height:0px;border:1px solid #00000020; border-radius: 50%" />
          <li>
            <div>
              Modell:
            </div>
            <div>
              Model
            </div>
          </li>
        </ul>
      </div>
    <center>Vielen Dank, dass du mySHOEFITTER nutzt. Du hast gerade unserem Planeten geholfen, indem du 500g CO2 eingespart hast</center>
  </div>
</div>

`:P.innerHTML=`
  <style>
  /* montserrat-100 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 100;
    src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-100.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-200 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-200.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-300 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-300.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-500 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-600 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-800 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-900 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-900.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  .modal-overlay {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    font-family: 'Montserrat', sans-serif;
  }

  .modal-content {
    position: relative;
    flex-direction: column;
    align-items: center;
    min-width: 800px;
    max-width: 1000px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 0 40px 10px rgba(0,0,0,0.1);
    margin: auto;
    padding: 20px;
    border-radius: 40px;
    font-family: 'Montserrat', sans-serif;
    color: #333333;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .close {
    color: #ff7d4f;
    font-size: 64px;
    font-weight: 300;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #aaa;
    text-decoration: none;
    cursor: pointer;
  }

  .inner-content {
    display: flex;
    flex-direction: row;
    padding: 0px 70px;
    justify-content: space-between;
    margin: auto;
    z-index:1;
  }

  .left-section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 50%;
  }

  .right-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button-container {
    display:flex;
    width: max-content;
  }

  .continue-button {
    background-color: #ff7d4f;
    padding: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #ffffff;
    border-radius: 20px;
    border: 1px solid #ff7d4f;
    margin-bottom: 1em;
  }

  .continue-button:hover {
    cursor:pointer;
    background-color: transparent;
    box-shadow: 0px 0px 32px 0 #f8f8f850;
    color: #ff7d4f;
    transition-duration: 250ms;
  }
  
  .continue-to-id-button {
    background-color: transparent;
    padding: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #ff7d4f;
    border-radius: 20px;
    border: 0px;
    margin-bottom: 1em;
  }

  .continue-to-id-button:hover {
    cursor:pointer;
    color: #aaa;
    transition-duration: 250ms;
  }

  .form {
    display:none;
    width: 100%;
    margin-bottom: 25px;
    flex-direction: column;
    align-items: flex-start;
  }

  .form-fields {
    display: flex;
    flex-direction: row;
    width: -webkit-fill-available;
    border: 1px solid #d2d9e4;
    padding: 1px;
    border-radius: 20px;
    background: #fff;
  }

  input {
    border: none;
    width: -webkit-fill-available;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
    border-radius: 20px;
    background-color: transparent;
    font-family: inherit;
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

  .submit-btn {
    background-color: #ff7d4f;
    font-size: 14px;
    color: #ffffff;
    border-radius: 20px;
    border: 1px solid #ff7d4f;
  }

  .submit-btn:hover {
    background-color: white;
    border: 1px solid #ff7d4f;
    box-shadow: 0px 0px 32px 0 #f8f8f850;
    color: #ff7d4f;
    transition-duration: 250ms;
  }

  .form-footer {
    background-color: transparent;
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }

  #forgot-button {
    cursor: pointer;
    float: right;
    color: grey;
  }

  #info-text {
    margin: 0;
    float: left;
    color: grey;
    text-decoration: none;
  }

  .big-circle {
    background: linear-gradient(#ff7d4f10, #ff7d4f40);
    border-radius: 50%;
    height: 300px;
    position: absolute;
    width: 300px;
    z-index:0;
    top:50%;
    left:-100px;
  }

  .qr-circle {
    background: linear-gradient(#ff7d4f10, #ff7d4f30);
    border-radius: 50%;
    height: 300px;
    width: 300px;
    z-index:0;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:-100px;
  }

  .qr-background {
    background-color:white;
    box-shadow: 0 0 10px #0003;
    border-radius:20px;
    width:70%;
    height:70%;
    display:flex;
    align-items: center;
    justify-content: center;
  }

  .qr-code {
    z-index:1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .cut-border {
    position: relative;
    display: inline-block;
    border: 2px solid #022652;
    width: 90%;
    height: 90%;
    border-radius: 10px;
  }
  .cut-border::before {
    content: "";
    position: absolute;
    height: calc(100% + 10px);
    width: 50%;
    background-color: white;
    top: -5px;
    left: 25%;
  }
  .cut-border::after {
    content: "";
    position: absolute;
    height: 50%;
    width: calc(100% + 10px);
    background-color: white;
    top: 25%;
    left: -5px;
  }

  .circle {
    position: relative;
    background: #ff7d4f;
    width: fit-content;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    display: block;
    margin: auto;
  }

  .shoe-size {
    position: absolute;
    font-weight: 500;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 0;
    margin: 0;
    font-size: 70px;
    width: 100%;
    text-align: center;
  }

  .specs {
    margin: 12px;
    background-color: #f2f2f280;
    padding: 10px;
    border-radius: 12px;
  }

  ul {
    list-style-type: none;
    padding: 0px 24px;
  }

  li {
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .label {
    font-weight: bold;
    margin-right: 5px;
  }

  .note {
    font-style: italic;
    color: gray;
  }

</style>

<div id="modal-overlay" class="modal-overlay" onclick="document.getElementById('modal-overlay').style.display='none';
      document.querySelector('.button-container').style.display = 'flex';
      document.getElementById('mysf_size').style.display = 'none';
      document.querySelector('.qr-circle').style.display = 'flex';
      document.getElementById('form').style.display = 'none';">
  <div class="modal-content animate__animated animate__fadeInDown" onclick="event.stopPropagation()">
  <div class="big-circle"></div>
    <div class="header">
      <img src=" https://cdn.myshoefitter.com/images/logo.png" width="150px" style="margin-left:50px">
      <span class="close" onclick="document.getElementById('modal-overlay').style.display='none';
      document.querySelector('.button-container').style.display = 'flex';
      document.getElementById('mysf_size').style.display = 'none';
      document.querySelector('.qr-circle').style.display = 'flex';
      document.getElementById('form').style.display = 'none';
      ">&times;</span>
    </div>
    <div class="inner-content">
      <div class="left-section">
      <h3>Einmal deinen Fuß scannen,<br>immer die richtige Größe bestellen</h3>
      <p>Scanne den QR-Code und starte mit der Messung. Du <br>musst nur einen Scan von deinem Fuß machen.<br> Es dauert nur wenige Minuten.</p>
        <div class="button-container"> 
          <button class="continue-button" id="continue-to-info-button">So funktioniert's</button>
          <button id="continue-btn" class="continue-to-id-button">Mit Scan-ID fortfahren</button>
        </div>
        <div class="form" id="form">
          <div class="form-fields">
            <input type="text" id="id-field" name="idFormField" placeholder="Enter your ID">
            <input type="text" id="email-field" name="emailField" placeholder="Enter your Email" style="display:none">
            <button id="submit-btn" class="submit-btn">Senden</button>
          </div>
          <div class="form-footer">
            <a id="forgot-button">ID vergessen?</a>
            <p id="info-text"></p>
          </div>
        </div>
      </div>
      <div class="right-section">
      <div id="mysf_size" style="display:none">
      <div class="circle">
        <h2 class="shoe-size">35</h2>
      </div>
      <div class="specs">
          <ul>
            <li>
              <div>
                Marke:
              </div>
              <div>
                Manufacturer
              </div>
            </li>
             <hr style="width:-webkit-fill-available;height:0px;border:1px solid #00000020; border-radius: 50%" />
            <li>
              <div>
                Modell:
              </div>
              <div>
                Model
              </div>
            </li>
          </ul>
        </div>
      <center>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis iste dolorem amet! Eveniet quae, cum molestias earum libero</center>
    </div>
        <div class="qr-circle">
          <div class="qr-background">
            <div class="cut-border">
            <div id="qr-code" class="qr-code"/>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
  `;document.querySelector("#continue-to-info-button").onclick=function(){window.open("https://myshoefitter.com/faq","_blank")};document.querySelector("#mySF_Widget_Button").onclick=function(){P.style.display="flex",document.querySelector(".modal-content").style.display="flex",q||Vt()};document.querySelector("#submit-btn").onclick=function(){var n=document.querySelector("#id-field"),e=document.querySelector("#email-field"),t=n.value,o=e.value;t!=""&&Dt(t),o!=""&&Ut(o),Pe&&(document.getElementById("forgot-button").textContent="ID vergessen?",document.getElementById("email-field").style.display="none",document.getElementById("id-field").style.display="flex")};q?(document.querySelector("#continue-btn2").onclick=function(){window.open(le,"_blank")},document.querySelector("#continue-btn").onclick=function(){document.getElementById("mysf_mob").style.display="none",document.getElementById("mysf_input").style.display="block"}):document.querySelector("#continue-btn").onclick=function(){document.querySelector(".button-container").style.display="none",document.getElementById("form").style.display="flex"};var te=!1;document.querySelector("#forgot-button").onclick=function(){te?(document.querySelector("#email-field").style.display="none",document.querySelector("#id-field").style.display="flex",document.querySelector("#forgot-button").textContent="ID vergessen?",document.querySelector("#info-text").textContent=" ",te=!1):(document.querySelector("#email-field").style.display="flex",document.querySelector("#id-field").style.display="none",document.querySelector("#forgot-button").textContent="ID eingeben",document.querySelector("#info-text").textContent=" ",te=!0,Pe=!0)};document.querySelector("#id-field").onclick=function(){document.querySelector("#info-text").textContent=" "};window.addEventListener("resize",function(){screen.width<=768?q=!0:q=!1});function Dt(n){var e=new Headers;e.append("Authorization","Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"),e.append("Content-Type","application/json");var t=JSON.stringify({code:n}),o={method:"POST",headers:e,body:t,redirect:"follow"};fetch("https://admin.myshoefitter.com/flows/trigger/c7a5aa72-8ff2-4398-b910-a88994aeab4c",o).then(s=>s.json()).then(s=>{s[0].size,document.querySelector("#info-text").textContent="ID gesendet!",q?(document.querySelector("#mysf_mob").style.display="none",document.querySelector("#mysf_input").style.display="none"):document.querySelector(".qr-circle").style.display="none",document.querySelector("#mysf_size").style.display="block"}).catch(s=>{document.querySelector("#info-text").textContent="Dieser Code exisitert nicht!"})}function Ut(n){var e=new Headers;e.append("Authorization","Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a"),e.append("Content-Type","application/json");var t=JSON.stringify({email:n}),o={method:"POST",headers:e,body:t,redirect:"follow"};fetch("https://admin.myshoefitter.com/flows/trigger/bc96cffb-f215-4b8e-ba65-481d8c29e910",o).then(s=>s.json()).then(s=>{}).catch(s=>{document.querySelector("#info-text").textContent="Email nicht gefunden"})}function Vt(){var n=document.querySelector(".qr-background");if(!q){document.querySelector("#qr-code").innerHTML="";var e=n.clientWidth*.8;De.render({text:le,radius:Lt,ecLevel:Mt,fill:zt,background:null,size:e},document.querySelector("#qr-code"))}}Pt.setvalues("model","manufacturer","mySHOEFITTER Shop");
