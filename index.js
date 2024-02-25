// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLanczosPulse=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=l.call(n,h,"$1e"),n=l.call(n,b,"e"),n=l.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,d,"e-0$1"),r.alternate&&(n=l.call(n,y,"$1."),n=l.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=isNaN,E=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function _(r){var t,e,n,i,a,f,c,s,l,p,d,y,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)f+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,y=n.padRight,v=void 0,(v=d-p.length)<0?p:p=y?p+m(v):m(v)+p)),f+=n.arg||"",c+=1}return f}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function S(r){var t,e,n,o;for(e=[],o=0,n=N.exec(r);n;)(t=r.slice(o,N.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),o=N.lastIndex,n=N.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function U(r){var t,e;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[S(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return _.apply(null,t)}var I,x=Object.prototype,F=x.toString,P=x.__defineGetter__,k=x.__defineSetter__,V=x.__lookupGetter__,L=x.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(V.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=x,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,e.get),a&&k&&k.call(r,t,e.set),r};var C=I;function G(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var R=Object.prototype.hasOwnProperty;function $(r,t){return null!=r&&R.call(r,t)}var H="function"==typeof Symbol?Symbol:void 0;var W="function"==typeof H&&"symbol"==typeof H("foo")&&$(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null;function B(){var r,t=arguments,e="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function M(r){return r!=r}var Z=Number.POSITIVE_INFINITY,X=Number,z=X.NEGATIVE_INFINITY;function Y(r){return r===Z||r===z}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return D&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var J="function"==typeof H?H.toStringTag:"";var Q=K()?function(r){var t,e,n;if(null==r)return q.call(r);e=r[J],t=$(r,J);try{r[J]=void 0}catch(t){return q.call(r)}return n=q.call(r),t?r[J]=e:delete r[J],n}:function(r){return q.call(r)},rr="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var er,nr="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,t,e;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(rr&&e instanceof Uint32Array||"[object Uint32Array]"===Q(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var or=er,ir="function"==typeof Float64Array;var ar="function"==typeof Float64Array?Float64Array:null;var ur,fr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,t,e;if("function"!=typeof ar)return!1;try{t=new ar([1,3.14,-3.14,NaN]),e=t,r=(ir&&e instanceof Float64Array||"[object Float64Array]"===Q(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=ur,sr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var pr,dr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,t,e;if("function"!=typeof lr)return!1;try{t=new lr(t=[1,3.14,-3.14,256,257]),e=t,r=(sr&&e instanceof Uint8Array||"[object Uint8Array]"===Q(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var yr=pr,vr="function"==typeof Uint16Array;var gr="function"==typeof Uint16Array?Uint16Array:null;var br,hr="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,t,e;if("function"!=typeof gr)return!1;try{t=new gr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(vr&&e instanceof Uint16Array||"[object Uint16Array]"===Q(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr,mr={uint16:br,uint8:yr};(wr=new mr.uint16(1))[0]=4660;var jr=52===new mr.uint8(wr.buffer)[0],Ar=!0===jr?1:0,Er=new cr(1),Or=new or(Er.buffer);function _r(r){return Er[0]=r,Or[Ar]}function Nr(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var Tr=-.16666666666666632,Sr=.00833333333332249,Ur=-.0001984126982985795,Ir=27557313707070068e-22,xr=-2.5050760253406863e-8,Fr=1.58969099521155e-10;function Pr(r,t){var e,n,o;return e=Sr+(o=r*r)*(Ur+o*Ir)+o*(o*o)*(xr+o*Fr),n=o*r,0===t?r+n*(Tr+o*e):r-(o*(.5*t-n*e)-t-n*Tr)}var kr,Vr,Lr=2147483647,Cr=2146435072,Gr=1048575,Rr=!0===jr?0:1,$r=new cr(1),Hr=new or($r.buffer);!0===jr?(kr=1,Vr=0):(kr=0,Vr=1);var Wr={HIGH:kr,LOW:Vr},Br=new cr(1),Mr=new or(Br.buffer),Zr=Wr.HIGH,Xr=Wr.LOW;function zr(r,t){return Mr[Zr]=r,Mr[Xr]=t,Br[0]}var Yr,Dr,Kr=Math.floor,qr=1023,Jr=1023,Qr=-1023,rt=-1074,tt=2147483648;!0===jr?(Yr=1,Dr=0):(Yr=0,Dr=1);var et={HIGH:Yr,LOW:Dr},nt=new cr(1),ot=new or(nt.buffer),it=et.HIGH,at=et.LOW;function ut(r,t,e,n){return nt[0]=r,t[n]=ot[it],t[n+e]=ot[at],t}function ft(r){return ut(r,[0,0],1,0)}G(ft,"assign",ut);var ct=[0,0];function st(r,t){var e,n;return ft.assign(r,ct,1,0),e=ct[0],e&=Lr,n=_r(t),zr(e|=n&=tt,ct[1])}var lt=22250738585072014e-324;function pt(r){return Math.abs(r)}var dt=4503599627370496;function yt(r,t,e,n){return M(r)||Y(r)?(t[n]=r,t[n+e]=0,t):0!==r&&pt(r)<lt?(t[n]=r*dt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}G((function(r){return yt(r,[0,0],1,0)}),"assign",yt);var vt=2220446049250313e-31,gt=2148532223,bt=[0,0],ht=[0,0];function wt(r,t){var e,n;return 0===t||0===r||M(r)||Y(r)?r:(yt(r,bt,1,0),r=bt[0],t+=bt[1],t+=function(r){var t=_r(r);return(t=(t&Cr)>>>20)-qr|0}(r),t<rt?st(0,r):t>Jr?r<0?z:Z:(t<=Qr?(t+=52,n=vt):n=1,ft.assign(r,ht,1,0),e=ht[0],e&=gt,n*zr(e|=t+qr<<20,ht[1])))}function mt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var jt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],At=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Et=16777216,Ot=5.960464477539063e-8,_t=mt(20),Nt=mt(20),Tt=mt(20),St=mt(20);function Ut(r,t,e,n,o,i,a,u,f){var c,s,l,p,d,y,v,g,b;for(p=i,b=n[e],g=e,d=0;g>0;d++)s=Ot*b|0,St[d]=b-Et*s|0,b=n[g-1]+s,g-=1;if(b=wt(b,o),b-=8*Kr(.125*b),b-=v=0|b,l=0,o>0?(v+=d=St[e-1]>>24-o,St[e-1]-=d<<24-o,l=St[e-1]>>23-o):0===o?l=St[e-1]>>23:b>=.5&&(l=2),l>0){for(v+=1,c=0,d=0;d<e;d++)g=St[d],0===c?0!==g&&(c=1,St[d]=16777216-g):St[d]=16777215-g;if(o>0)switch(o){case 1:St[e-1]&=8388607;break;case 2:St[e-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=wt(1,o)))}if(0===b){for(g=0,d=e-1;d>=i;d--)g|=St[d];if(0===g){for(y=1;0===St[i-y];y++);for(d=e+1;d<=e+y;d++){for(f[u+d]=jt[a+d],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(d-g)];n[d]=s}return Ut(r,t,e+=y,n,o,i,a,u,f)}}if(0===b)for(e-=1,o-=24;0===St[e];)e-=1,o-=24;else(b=wt(b,-o))>=Et?(s=Ot*b|0,St[e]=b-Et*s|0,o+=24,St[e+=1]=s):St[e]=0|b;for(s=wt(1,o),d=e;d>=0;d--)n[d]=s*St[d],s*=Ot;for(d=e;d>=0;d--){for(s=0,y=0;y<=p&&y<=e-d;y++)s+=At[y]*n[d+y];Tt[e-d]=s}for(s=0,d=e;d>=0;d--)s+=Tt[d];for(t[0]=0===l?s:-s,s=Tt[0]-s,d=1;d<=e;d++)s+=Tt[d];return t[1]=0===l?s:-s,7&v}function It(r,t,e,n){var o,i,a,u,f,c,s;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),c=i-(a=n-1),s=a+4,f=0;f<=s;f++)_t[f]=c<0?0:jt[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*_t[a+(f-c)];Nt[f]=o}return 4,Ut(r,t,4,Nt,u,4,i,a,_t)}var xt=Math.round,Ft=.6366197723675814,Pt=1.5707963267341256,kt=6077100506506192e-26,Vt=6077100506303966e-26,Lt=20222662487959506e-37,Ct=20222662487111665e-37,Gt=84784276603689e-45,Rt=2047;function $t(r,t,e){var n,o,i,a,u;return i=r-(n=xt(r*Ft))*Pt,a=n*kt,u=t>>20|0,e[0]=i-a,u-(_r(e[0])>>20&Rt)>16&&(a=n*Lt-((o=i)-(i=o-(a=n*Vt))-a),e[0]=i-a,u-(_r(e[0])>>20&Rt)>49&&(a=n*Gt-((o=i)-(i=o-(a=n*Ct))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var Ht=0,Wt=16777216,Bt=1.5707963267341256,Mt=6077100506506192e-26,Zt=2*Mt,Xt=3*Mt,zt=4*Mt,Yt=598523,Dt=1072243195,Kt=1073928572,qt=1074752122,Jt=1074977148,Qt=1075183036,re=1075388923,te=1075594811,ee=1094263291,ne=[0,0,0],oe=[0,0];function ie(r,t){var e,n,o,i,a,u,f;if((o=_r(r)&Lr|0)<=Dt)return t[0]=r,t[1]=0,0;if(o<=qt)return(o&Gr)===Yt?$t(r,o,t):o<=Kt?r>0?(f=r-Bt,t[0]=f-Mt,t[1]=f-t[0]-Mt,1):(f=r+Bt,t[0]=f+Mt,t[1]=f-t[0]+Mt,-1):r>0?(f=r-2*Bt,t[0]=f-Zt,t[1]=f-t[0]-Zt,2):(f=r+2*Bt,t[0]=f+Zt,t[1]=f-t[0]+Zt,-2);if(o<=te)return o<=Qt?o===Jt?$t(r,o,t):r>0?(f=r-3*Bt,t[0]=f-Xt,t[1]=f-t[0]-Xt,3):(f=r+3*Bt,t[0]=f+Xt,t[1]=f-t[0]+Xt,-3):o===re?$t(r,o,t):r>0?(f=r-4*Bt,t[0]=f-zt,t[1]=f-t[0]-zt,4):(f=r+4*Bt,t[0]=f+zt,t[1]=f-t[0]+zt,-4);if(o<ee)return $t(r,o,t);if(o>=Cr)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return $r[0]=r,Hr[Rr]}(r),f=zr(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)ne[a]=0|f,f=(f-ne[a])*Wt;for(ne[2]=f,i=3;ne[i-1]===Ht;)i-=1;return u=It(ne,oe,n,i),r<0?(t[0]=-oe[0],t[1]=-oe[1],-u):(t[0]=oe[0],t[1]=oe[1],u)}var ae=[0,0],ue=2147483647,fe=1072243195,ce=1044381696,se=2146435072;function le(r){var t;if(t=_r(r),(t&=ue)<=fe)return t<ce?1:Nr(r,0);if(t>=se)return NaN;switch(3&ie(r,ae)){case 0:return Nr(ae[0],ae[1]);case 1:return-Pr(ae[0],ae[1]);case 2:return-Nr(ae[0],ae[1]);default:return Pr(ae[0],ae[1])}}var pe=1072243195,de=1045430272,ye=[0,0];function ve(r){var t;if(t=_r(r),(t&=Lr)<=pe)return t<de?r:Pr(r,0);if(t>=Cr)return NaN;switch(3&ie(r,ye)){case 0:return Pr(ye[0],ye[1]);case 1:return Nr(ye[0],ye[1]);case 2:return-Pr(ye[0],ye[1]);default:return-Nr(ye[0],ye[1])}}var ge=3.141592653589793;function be(r){return M(r)?NaN:Y(r)?0:0===r?1:function(r){var t,e;return M(r)||Y(r)?NaN:0===(t=pt(e=r%2))||1===t?st(0,e):t<.25?ve(ge*e):t<.75?st(le(ge*(t=.5-t)),e):t<1.25?(e=st(1,e)-e,ve(ge*e)):t<1.75?-st(le(ge*(t-=1.5)),e):(e-=st(2,e),ve(ge*e))}(r)/(ge*r)}var he=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};var we=/./;function me(r){return"boolean"==typeof r}var je=Boolean,Ae=Boolean.prototype.toString;var Ee=K();function Oe(r){return"object"==typeof r&&(r instanceof je||(Ee?function(r){try{return Ae.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function _e(r){return me(r)||Oe(r)}G(_e,"isPrimitive",me),G(_e,"isObject",Oe);var Ne="object"==typeof self?self:null,Te="object"==typeof window?window:null,Se="object"==typeof global?global:null,Ue="object"==typeof globalThis?globalThis:null;var Ie=function(r){if(arguments.length){if(!me(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Ue)return Ue;if(Ne)return Ne;if(Te)return Te;if(Se)return Se;throw new Error("unexpected error. Unable to resolve global object.")}(),xe=Ie.document&&Ie.document.childNodes,Fe=Int8Array;function Pe(){return/^\s*function\s*([^(]*)/i}var ke=/^\s*function\s*([^(]*)/i;function Ve(r){return null!==r&&"object"==typeof r}function Le(r){var t,e,n,o;if(("Object"===(e=Q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ke.exec(n.toString()))return t[1]}return Ve(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}G(Pe,"REGEXP",ke),G(Ve,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!he(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Ve));var Ce="function"==typeof we||"object"==typeof Fe||"function"==typeof xe?function(r){return Le(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Le(r).toLowerCase():t};function Ge(r){return"function"===Ce(r)}var Re,$e=Object,He=Object.getPrototypeOf;Re=Ge(Object.getPrototypeOf)?He:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var We=Re;var Be=Object.prototype;function Me(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!he(r)}(r)&&(t=function(r){return null==r?null:(r=$e(r),We(r))}(r),!t||!$(r,"constructor")&&$(t,"constructor")&&Ge(t.constructor)&&"[object Function]"===Q(t.constructor)&&$(t,"isPrototypeOf")&&Ge(t.isPrototypeOf)&&(t===Be||function(r){var t;for(t in r)if(!$(r,t))return!1;return!0}(r)))}function Ze(r){return"number"==typeof r}var Xe=X.prototype.toString;var ze=K();function Ye(r){return"object"==typeof r&&(r instanceof X||(ze?function(r){try{return Xe.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function De(r){return Ze(r)||Ye(r)}function Ke(r){return Ze(r)&&r>0}function qe(r){return Ye(r)&&r.valueOf()>0}function Je(r){return Ke(r)||qe(r)}function Qe(r){return r<Z&&r>z&&Kr(t=r)===t;var t}function rn(r){return Ze(r)&&Qe(r)}function tn(r){return Ye(r)&&Qe(r.valueOf())}function en(r){return rn(r)||tn(r)}function nn(r){return rn(r)&&r>0}function on(r){return tn(r)&&r.valueOf()>0}function an(r){return nn(r)||on(r)}function un(r){return rn(r)&&r>=0}function fn(r){return tn(r)&&r.valueOf()>=0}function cn(r){return un(r)||fn(r)}return G(De,"isPrimitive",Ze),G(De,"isObject",Ye),G(Je,"isPrimitive",Ke),G(Je,"isObject",qe),G(en,"isPrimitive",rn),G(en,"isObject",tn),G(an,"isPrimitive",nn),G(an,"isObject",on),G(cn,"isPrimitive",un),G(cn,"isObject",fn),function r(t){var e,n,o,i,a,u,f;if(e={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(i=function(r,t){return Me(t)?$(t,"duration")&&(r.duration=t.duration,!nn(t.duration))?new TypeError(B("0tN3P","duration",t.duration)):$(t,"period")&&(r.period=t.period,!nn(t.period))?new TypeError(B("0tN3P","period",t.period)):$(t,"amplitude")&&(r.amplitude=t.amplitude,!Ke(t.amplitude))?new TypeError(B("0tN4D","amplitude",t.amplitude)):$(t,"offset")&&(r.offset=t.offset,!rn(t.offset))?new TypeError(B("0tN8M","offset",t.offset)):$(t,"iter")&&(r.iter=t.iter,!un(t.iter))?new TypeError(B("0tN2t","iter",t.iter)):null:new TypeError(B("0tN2V",t))}(e,t)))throw i;if(-1===e.duration&&(e.duration=e.period),e.duration>e.period)throw new RangeError(B("0tN8K","duration",e.duration));if(e.duration<=2)throw new RangeError(B("0tN8L","duration",e.duration));return(a=(e.period-e.offset)%e.period)<0&&(a+=e.period),u=2/(e.duration-1),a-=1,f=0,G(n={},"next",(function(){if(f+=1,o||f>e.iter)return{done:!0};return{value:(a=(a+1)%e.period)<e.duration?e.amplitude*be(u*a-1):0,done:!1}})),G(n,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),W&&G(n,W,(function(){return r(e)})),n}}));
//# sourceMappingURL=index.js.map
