// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLanczosPulse=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=Object.prototype.hasOwnProperty;function p(r,t){return null!=r&&y.call(r,t)}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function s(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function d(r){return r!=r}var b=Number.POSITIVE_INFINITY,w=Number,m=w.NEGATIVE_INFINITY;function j(r){return r===b||r===m}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function A(){return h&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var _="function"==typeof Symbol?Symbol.toStringTag:"";var O=A()?function(r){var t,n,e;if(null==r)return g.call(r);n=r[_],t=p(r,_);try{r[_]=void 0}catch(t){return g.call(r)}return e=g.call(r),t?r[_]=n:delete r[_],e}:function(r){return g.call(r)},E="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var U,S="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,t,n;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(E&&n instanceof Uint32Array||"[object Uint32Array]"===O(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?S:function(){throw new Error("not implemented")};var P=U,T="function"==typeof Float64Array;var I="function"==typeof Float64Array?Float64Array:null;var F,R="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,t,n;if("function"!=typeof I)return!1;try{t=new I([1,3.14,-3.14,NaN]),n=t,r=(T&&n instanceof Float64Array||"[object Float64Array]"===O(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?R:function(){throw new Error("not implemented")};var G=F,H="function"==typeof Uint8Array;var L="function"==typeof Uint8Array?Uint8Array:null;var B,x="function"==typeof Uint8Array?Uint8Array:void 0;B=function(){var r,t,n;if("function"!=typeof L)return!1;try{t=new L(t=[1,3.14,-3.14,256,257]),n=t,r=(H&&n instanceof Uint8Array||"[object Uint8Array]"===O(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};var V=B,M="function"==typeof Uint16Array;var k="function"==typeof Uint16Array?Uint16Array:null;var C,W="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,65536,65537]),n=t,r=(M&&n instanceof Uint16Array||"[object Uint16Array]"===O(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var Y,z={uint16:C,uint8:V};(Y=new z.uint16(1))[0]=4660;var Q=52===new z.uint8(Y.buffer)[0],X=!0===Q?1:0,q=new G(1),D=new P(q.buffer);function J(r){return q[0]=r,D[X]}function K(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))}var Z=-.16666666666666632;function $(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(Z+o*n):r-(o*(.5*t-e*n)-t-e*Z)}var rr,tr,nr=!0===Q?0:1,er=new G(1),or=new P(er.buffer);!0===Q?(rr=1,tr=0):(rr=0,tr=1);var ur={HIGH:rr,LOW:tr},ir=new G(1),fr=new P(ir.buffer),ar=ur.HIGH,cr=ur.LOW;function lr(r,t){return fr[ar]=r,fr[cr]=t,ir[0]}var yr,pr,vr=Math.floor;!0===Q?(yr=1,pr=0):(yr=0,pr=1);var sr={HIGH:yr,LOW:pr},dr=new G(1),br=new P(dr.buffer),wr=sr.HIGH,mr=sr.LOW;function jr(r,t){return dr[0]=t,r[0]=br[wr],r[1]=br[mr],r}function hr(r,t){return 1===arguments.length?jr([0,0],r):jr(r,t)}var Ar=[0,0];function gr(r,t){var n,e;return hr(Ar,r),n=Ar[0],n&=2147483647,e=J(t),lr(n|=e&=2147483648,Ar[1])}function _r(r){return Math.abs(r)}function Or(r,t,n,e){return d(r)||j(r)?(t[e]=r,t[e+n]=0,t):0!==r&&_r(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return Or(r,[0,0],1,0)}),"assign",Or);var Er=[0,0],Nr=[0,0];function Ur(r,t){var n,e;return 0===t||0===r||d(r)||j(r)?r:(Or(r,Er,1,0),t+=Er[1],t+=function(r){var t=J(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Er[0]),t<-1074?gr(0,r):t>1023?r<0?m:b:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,hr(Nr,r),n=Nr[0],n&=2148532223,e*lr(n|=t+1023<<20,Nr[1])))}function Sr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Pr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Tr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ir=16777216,Fr=5.960464477539063e-8,Rr=Sr(20),Gr=Sr(20),Hr=Sr(20),Lr=Sr(20);function Br(r,t,n,e,o,u,i,f,a){var c,l,y,p,v,s,d,b,w;for(p=u,w=e[n],b=n,v=0;b>0;v++)l=Fr*w|0,Lr[v]=w-Ir*l|0,w=e[b-1]+l,b-=1;if(w=Ur(w,o),w-=8*vr(.125*w),w-=d=0|w,y=0,o>0?(d+=v=Lr[n-1]>>24-o,Lr[n-1]-=v<<24-o,y=Lr[n-1]>>23-o):0===o?y=Lr[n-1]>>23:w>=.5&&(y=2),y>0){for(d+=1,c=0,v=0;v<n;v++)b=Lr[v],0===c?0!==b&&(c=1,Lr[v]=16777216-b):Lr[v]=16777215-b;if(o>0)switch(o){case 1:Lr[n-1]&=8388607;break;case 2:Lr[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=Ur(1,o)))}if(0===w){for(b=0,v=n-1;v>=u;v--)b|=Lr[v];if(0===b){for(s=1;0===Lr[u-s];s++);for(v=n+1;v<=n+s;v++){for(a[f+v]=Pr[i+v],l=0,b=0;b<=f;b++)l+=r[b]*a[f+(v-b)];e[v]=l}return Br(r,t,n+=s,e,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===Lr[n];)n-=1,o-=24;else(w=Ur(w,-o))>=Ir?(l=Fr*w|0,Lr[n]=w-Ir*l|0,o+=24,Lr[n+=1]=l):Lr[n]=0|w;for(l=Ur(1,o),v=n;v>=0;v--)e[v]=l*Lr[v],l*=Fr;for(v=n;v>=0;v--){for(l=0,s=0;s<=p&&s<=n-v;s++)l+=Tr[s]*e[v+s];Hr[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Hr[v];for(t[0]=0===y?l:-l,l=Hr[0]-l,v=1;v<=n;v++)l+=Hr[v];return t[1]=0===y?l:-l,7&d}function xr(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)Rr[a]=c<0?0:Pr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Rr[i+(a-c)];Gr[a]=o}return 4,Br(r,t,4,Gr,f,4,u,i,Rr)}var Vr=Math.round;function Mr(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Vr(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(J(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(J(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var kr=1.5707963267341256,Cr=6077100506506192e-26,Wr=2*Cr,Yr=3*Cr,zr=4*Cr,Qr=[0,0,0],Xr=[0,0];function qr(r,t){var n,e,o,u,i,f,a;if((o=2147483647&J(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Mr(r,o,t):o<=1073928572?r>0?(a=r-kr,t[0]=a-Cr,t[1]=a-t[0]-Cr,1):(a=r+kr,t[0]=a+Cr,t[1]=a-t[0]+Cr,-1):r>0?(a=r-2*kr,t[0]=a-Wr,t[1]=a-t[0]-Wr,2):(a=r+2*kr,t[0]=a+Wr,t[1]=a-t[0]+Wr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Mr(r,o,t):r>0?(a=r-3*kr,t[0]=a-Yr,t[1]=a-t[0]-Yr,3):(a=r+3*kr,t[0]=a+Yr,t[1]=a-t[0]+Yr,-3):1075388923===o?Mr(r,o,t):r>0?(a=r-4*kr,t[0]=a-zr,t[1]=a-t[0]-zr,4):(a=r+4*kr,t[0]=a+zr,t[1]=a-t[0]+zr,-4);if(o<1094263291)return Mr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return er[0]=r,or[nr]}(r),a=lr(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Qr[i]=0|a,a=16777216*(a-Qr[i]);for(Qr[2]=a,u=3;0===Qr[u-1];)u-=1;return f=xr(Qr,Xr,e,u),r<0?(t[0]=-Xr[0],t[1]=-Xr[1],-f):(t[0]=Xr[0],t[1]=Xr[1],f)}var Dr=[0,0];function Jr(r){var t;if(t=J(r),(t&=2147483647)<=1072243195)return t<1044381696?1:K(r,0);if(t>=2146435072)return NaN;switch(3&qr(r,Dr)){case 0:return K(Dr[0],Dr[1]);case 1:return-$(Dr[0],Dr[1]);case 2:return-K(Dr[0],Dr[1]);default:return $(Dr[0],Dr[1])}}var Kr=[0,0];function Zr(r){var t;if(t=J(r),(t&=2147483647)<=1072243195)return t<1045430272?r:$(r,0);if(t>=2146435072)return NaN;switch(3&qr(r,Kr)){case 0:return $(Kr[0],Kr[1]);case 1:return K(Kr[0],Kr[1]);case 2:return-$(Kr[0],Kr[1]);default:return-K(Kr[0],Kr[1])}}var $r=3.141592653589793;function rt(r){return d(r)?NaN:j(r)?0:0===r?1:function(r){var t,n;return d(r)||j(r)?NaN:0===(t=_r(n=r%2))||1===t?gr(0,n):t<.25?Zr($r*n):t<.75?gr(Jr($r*(t=.5-t)),n):t<1.25?(n=gr(1,n)-n,Zr($r*n)):t<1.75?-gr(Jr($r*(t-=1.5)),n):(n-=gr(2,n),Zr($r*n))}(r)/($r*r)}var tt=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var nt=/./;function et(r){return"boolean"==typeof r}var ot=Boolean.prototype.toString;var ut=A();function it(r){return"object"==typeof r&&(r instanceof Boolean||(ut?function(r){try{return ot.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function ft(r){return et(r)||it(r)}function at(){return new Function("return this;")()}l(ft,"isPrimitive",et),l(ft,"isObject",it);var ct="object"==typeof self?self:null,lt="object"==typeof window?window:null,yt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},pt="object"==typeof yt?yt:null;var vt=function(r){if(arguments.length){if(!et(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return at()}if(ct)return ct;if(lt)return lt;if(pt)return pt;throw new Error("unexpected error. Unable to resolve global object.")}(),st=vt.document&&vt.document.childNodes,dt=Int8Array;function bt(){return/^\s*function\s*([^(]*)/i}var wt=/^\s*function\s*([^(]*)/i;function mt(r){return null!==r&&"object"==typeof r}function jt(r){var t,n,e,o;if(("Object"===(n=O(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=wt.exec(e.toString()))return t[1]}return mt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(bt,"REGEXP",wt),l(mt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!tt(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(mt));var ht="function"==typeof nt||"object"==typeof dt||"function"==typeof st?function(r){return jt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?jt(r).toLowerCase():t};function At(r){return"function"===ht(r)}var gt,_t=Object.getPrototypeOf;gt=At(Object.getPrototypeOf)?_t:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ot=gt;var Et=Object.prototype;function Nt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!tt(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),Ot(r))}(r),!t||!p(r,"constructor")&&p(t,"constructor")&&At(t.constructor)&&"[object Function]"===O(t.constructor)&&p(t,"isPrototypeOf")&&At(t.isPrototypeOf)&&(t===Et||function(r){var t;for(t in r)if(!p(r,t))return!1;return!0}(r)))}function Ut(r){return"number"==typeof r}var St=w.prototype.toString;var Pt=A();function Tt(r){return"object"==typeof r&&(r instanceof w||(Pt?function(r){try{return St.call(r),!0}catch(r){return!1}}(r):"[object Number]"===O(r)))}function It(r){return Ut(r)||Tt(r)}function Ft(r){return Ut(r)&&r>0}function Rt(r){return Tt(r)&&r.valueOf()>0}function Gt(r){return Ft(r)||Rt(r)}function Ht(r){return r<b&&r>m&&vr(t=r)===t;var t}function Lt(r){return Ut(r)&&Ht(r)}function Bt(r){return Tt(r)&&Ht(r.valueOf())}function xt(r){return Lt(r)||Bt(r)}function Vt(r){return Lt(r)&&r>0}function Mt(r){return Bt(r)&&r.valueOf()>0}function kt(r){return Vt(r)||Mt(r)}function Ct(r){return Lt(r)&&r>=0}function Wt(r){return Bt(r)&&r.valueOf()>=0}function Yt(r){return Ct(r)||Wt(r)}function zt(r,t){return Nt(t)?p(t,"duration")&&(r.duration=t.duration,!Vt(t.duration))?new TypeError(s("0Ra3b","duration",t.duration)):p(t,"period")&&(r.period=t.period,!Vt(t.period))?new TypeError(s("0Ra3b","period",t.period)):p(t,"amplitude")&&(r.amplitude=t.amplitude,!Ft(t.amplitude))?new TypeError(s("0Ra4Q","amplitude",t.amplitude)):p(t,"offset")&&(r.offset=t.offset,!Lt(t.offset))?new TypeError(s("0Ra8e","offset",t.offset)):p(t,"iter")&&(r.iter=t.iter,!Ct(t.iter))?new TypeError(s("0Ra35","iter",t.iter)):null:new TypeError(s("0Ra2h",t))}return l(It,"isPrimitive",Ut),l(It,"isObject",Tt),l(Gt,"isPrimitive",Ft),l(Gt,"isObject",Rt),l(xt,"isPrimitive",Lt),l(xt,"isObject",Bt),l(kt,"isPrimitive",Vt),l(kt,"isObject",Mt),l(Yt,"isPrimitive",Ct),l(Yt,"isObject",Wt),function r(t){var n,e,o,u,i,f,a;if(n={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(u=zt(n,t)))throw u;if(-1===n.duration&&(n.duration=n.period),n.duration>n.period)throw new RangeError(s("0Ra8c","duration",n.duration));if(n.duration<=2)throw new RangeError(s("0Ra8d","duration",n.duration));return(i=(n.period-n.offset)%n.period)<0&&(i+=n.period),f=2/(n.duration-1),i-=1,a=0,l(e={},"next",c),l(e,"return",y),v&&l(e,v,p),e;function c(){return a+=1,o||a>n.iter?{done:!0}:{value:(i=(i+1)%n.period)<n.duration?n.amplitude*rt(f*i-1):0,done:!1}}function y(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function p(){return r(n)}}}));
//# sourceMappingURL=index.js.map
