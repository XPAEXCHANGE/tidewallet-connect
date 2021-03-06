/*
const User = "0x89871c844ffcbeaf7bc4f161d081defaa35bed67";
const USX = "0x172afbb76bc5ed20f449db64954f87da8ba4baf4";
const XDice = "0x1c1530c92f622a5a6e23d51792e285575f20007f";

// 取得當前用戶帳號
TWC.accounts().then(console.log)
=> ["0x49aa79070f27f2fa4c375586eaf03c862cad26e9"]

// 取得當期資訊（期數, 累積投注, 開獎需求金額）
TWC.call({ to: XDice, data: `0x565b1a25000000000000000000000000${USX.substr(2)}` }).then(console.log)
=> ["0xb", "0x7ce66c50e2840000", "0x8ac7230489e80000"]

// allowance
TWC.call({ to: USX, data: `0xdd62ed3e000000000000000000000000${XDice.substr(2)}000000000000000000000000${User.substr(2)}` }).then(console.log)
=> ["0x0000000000000000000000000000000000000000000000000000000000000001"]

// approve
TWC.sendTransaction({ from: User, to: USX, data: `0x095ea7b3000000000000000000000000${XDICE.substr(2)}0000000000000000000000000000000000000000000000000de0b6b3a7640000` }).then(console.log)
=> "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"

// 投注
TWC.sendTransaction({ from: User, to: XDice, data: `0x56142ca4000000000000000000000000${USX.substr(2)}00000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000` }).then(console.log)
=> "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"

// 取得第 5 期結果
TWC.call({ to: XDice, data: `0x7724f4e7000000000000000000000000${USX.substr(2)}0000000000000000000000000000000000000000000000000000000000000005` }).then(console.log)
=> "0xa"

// 用戶第 5 期中獎狀態（有無中獎, 是否已領取, 投注數字, 該期中獎數字）
TWC.call({ to: XDice, data: `0xe62c06af000000000000000000000000${USX.substr(2)}0000000000000000000000000000000000000000000000000000000000000005${User.substr(2)}` }).then(console.log)
=> ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000000", "0x000000000000000000000000000000000000000000000000000000000000000a", "0x000000000000000000000000000000000000000000000000000000000000000a"]

// 領第 5 期獎
TWC.sendTransaction({ from: User, to: XDice, data: `0xaad3ec96000000000000000000000000${USX.substr(2)}0000000000000000000000000000000000000000000000000000000000000005` }).then(console.log)
=> "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"

//取得用戶 balanceOf 
TWC.call({ to: USX, data: `0x70a08231000000000000000000000000${User.substr(2)}` }).then(console.log)

//取得用戶 balanceOf 
TWC.checkTransactionReceipt({ tx: '0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331' }).then(console.log)
*/

// error sendtraction
// {"jsonrpc":"2.0","error":{"code":-32010,"message":"Transaction with the same hash was already imported."},"id":"80b10eccea30af65694db8213f1e2987"}
// success sendtraction
// {"jsonrpc":"2.0","result":"0xc05f581ccd19f469235e20eeb33ba4330f277a8878a1623f46f9c8407ab31d51","id":"35bae240dc0abc80909293bfeff6775a"}
(function e(t,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r();else if(typeof define==="function"&&define.amd)define([],r);else if(typeof exports==="object")exports["Rusha"]=r();else t["Rusha"]=r()})(typeof self!=="undefined"?self:this,function(){return function(e){var t={};function r(n){if(t[n]){return t[n].exports}var a=t[n]={i:n,l:false,exports:{}};e[n].call(a.exports,a,a.exports,r);a.l=true;return a.exports}r.m=e;r.c=t;r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:n})}};r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};r.d(t,"a",t);return t};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p="";return r(r.s=3)}([function(e,t,r){function n(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var a=r(5);var i=r(1),o=i.toHex,s=i.ceilHeapSize;var f=r(6);var u=function(e){for(e+=9;e%64>0;e+=1){}return e};var c=function(e,t){var r=new Uint8Array(e.buffer);var n=t%4,a=t-n;switch(n){case 0:r[a+3]=0;case 1:r[a+2]=0;case 2:r[a+1]=0;case 3:r[a+0]=0}for(var i=(t>>2)+1;i<e.length;i++){e[i]=0}};var h=function(e,t,r){e[t>>2]|=128<<24-(t%4<<3);e[((t>>2)+2&~15)+14]=r/(1<<29)|0;e[((t>>2)+2&~15)+15]=r<<3};var p=function(e,t){var r=new Int32Array(e,t+320,5);var n=new Int32Array(5);var a=new DataView(n.buffer);a.setInt32(0,r[0],false);a.setInt32(4,r[1],false);a.setInt32(8,r[2],false);a.setInt32(12,r[3],false);a.setInt32(16,r[4],false);return n};var l=function(){function e(t){n(this,e);t=t||64*1024;if(t%64>0){throw new Error("Chunk size must be a multiple of 128 bit")}this._offset=0;this._maxChunkLen=t;this._padMaxChunkLen=u(t);this._heap=new ArrayBuffer(s(this._padMaxChunkLen+320+20));this._h32=new Int32Array(this._heap);this._h8=new Int8Array(this._heap);this._core=new a({Int32Array:Int32Array},{},this._heap)}e.prototype._initState=function e(t,r){this._offset=0;var n=new Int32Array(t,r+320,5);n[0]=1732584193;n[1]=-271733879;n[2]=-1732584194;n[3]=271733878;n[4]=-1009589776};e.prototype._padChunk=function e(t,r){var n=u(t);var a=new Int32Array(this._heap,0,n>>2);c(a,t);h(a,t,r);return n};e.prototype._write=function e(t,r,n,a){f(t,this._h8,this._h32,r,n,a||0)};e.prototype._coreCall=function e(t,r,n,a,i){var o=n;this._write(t,r,n);if(i){o=this._padChunk(n,a)}this._core.hash(o,this._padMaxChunkLen)};e.prototype.rawDigest=function e(t){var r=t.byteLength||t.length||t.size||0;this._initState(this._heap,this._padMaxChunkLen);var n=0,a=this._maxChunkLen;for(n=0;r>n+a;n+=a){this._coreCall(t,n,a,r,false)}this._coreCall(t,n,r-n,r,true);return p(this._heap,this._padMaxChunkLen)};e.prototype.digest=function e(t){return o(this.rawDigest(t).buffer)};e.prototype.digestFromString=function e(t){return this.digest(t)};e.prototype.digestFromBuffer=function e(t){return this.digest(t)};e.prototype.digestFromArrayBuffer=function e(t){return this.digest(t)};e.prototype.resetState=function e(){this._initState(this._heap,this._padMaxChunkLen);return this};e.prototype.append=function e(t){var r=0;var n=t.byteLength||t.length||t.size||0;var a=this._offset%this._maxChunkLen;var i=void 0;this._offset+=n;while(r<n){i=Math.min(n-r,this._maxChunkLen-a);this._write(t,r,i,a);a+=i;r+=i;if(a===this._maxChunkLen){this._core.hash(this._maxChunkLen,this._padMaxChunkLen);a=0}}return this};e.prototype.getState=function e(){var t=this._offset%this._maxChunkLen;var r=void 0;if(!t){var n=new Int32Array(this._heap,this._padMaxChunkLen+320,5);r=n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)}else{r=this._heap.slice(0)}return{offset:this._offset,heap:r}};e.prototype.setState=function e(t){this._offset=t.offset;if(t.heap.byteLength===20){var r=new Int32Array(this._heap,this._padMaxChunkLen+320,5);r.set(new Int32Array(t.heap))}else{this._h32.set(new Int32Array(t.heap))}return this};e.prototype.rawEnd=function e(){var t=this._offset;var r=t%this._maxChunkLen;var n=this._padChunk(r,t);this._core.hash(n,this._padMaxChunkLen);var a=p(this._heap,this._padMaxChunkLen);this._initState(this._heap,this._padMaxChunkLen);return a};e.prototype.end=function e(){return o(this.rawEnd().buffer)};return e}();e.exports=l;e.exports._core=a},function(e,t){var r=new Array(256);for(var n=0;n<256;n++){r[n]=(n<16?"0":"")+n.toString(16)}e.exports.toHex=function(e){var t=new Uint8Array(e);var n=new Array(e.byteLength);for(var a=0;a<n.length;a++){n[a]=r[t[a]]}return n.join("")};e.exports.ceilHeapSize=function(e){var t=0;if(e<=65536)return 65536;if(e<16777216){for(t=1;t<e;t=t<<1){}}else{for(t=16777216;t<e;t+=16777216){}}return t};e.exports.isDedicatedWorkerScope=function(e){var t="WorkerGlobalScope"in e&&e instanceof e.WorkerGlobalScope;var r="SharedWorkerGlobalScope"in e&&e instanceof e.SharedWorkerGlobalScope;var n="ServiceWorkerGlobalScope"in e&&e instanceof e.ServiceWorkerGlobalScope;return t&&!r&&!n}},function(e,t,r){e.exports=function(){var e=r(0);var t=function(e,t,r){try{return r(null,e.digest(t))}catch(e){return r(e)}};var n=function(e,t,r,a,i){var o=new self.FileReader;o.onloadend=function s(){if(o.error){return i(o.error)}var f=o.result;t+=o.result.byteLength;try{e.append(f)}catch(e){i(e);return}if(t<a.size){n(e,t,r,a,i)}else{i(null,e.end())}};o.readAsArrayBuffer(a.slice(t,t+r))};var a=true;self.onmessage=function(r){if(!a){return}var i=r.data.data,o=r.data.file,s=r.data.id;if(typeof s==="undefined")return;if(!o&&!i)return;var f=r.data.blockSize||4*1024*1024;var u=new e(f);u.resetState();var c=function(e,t){if(!e){self.postMessage({id:s,hash:t})}else{self.postMessage({id:s,error:e.name})}};if(i)t(u,i,c);if(o)n(u,0,f,o,c)};return function(){a=false}}},function(e,t,r){var n=r(4);var a=r(0);var i=r(7);var o=r(2);var s=r(1),f=s.isDedicatedWorkerScope;var u=typeof self!=="undefined"&&f(self);a.disableWorkerBehaviour=u?o():function(){};a.createWorker=function(){var e=n(2);var t=e.terminate;e.terminate=function(){URL.revokeObjectURL(e.objectURL);t.call(e)};return e};a.createHash=i;e.exports=a},function(e,t,r){function n(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:false,exports:{}};e[n].call(a.exports,a,a.exports,r);a.l=true;return a.exports}r.m=e;r.c=t;r.i=function(e){return e};r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:n})}};r.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};r.d(t,"a",t);return t};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p="/";r.oe=function(e){console.error(e);throw e};var n=r(r.s=ENTRY_MODULE);return n.default||n}var a="[\\.|\\-|\\+|\\w|/|@]+";var i="\\((/\\*.*?\\*/)?s?.*?("+a+").*?\\)";function o(e){return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function s(e,t,n){var s={};s[n]=[];var f=t.toString();var u=f.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);if(!u)return s;var c=u[1];var h=new RegExp("(\\\\n|\\W)"+o(c)+i,"g");var p;while(p=h.exec(f)){if(p[3]==="dll-reference")continue;s[n].push(p[3])}h=new RegExp("\\("+o(c)+'\\("(dll-reference\\s('+a+'))"\\)\\)'+i,"g");while(p=h.exec(f)){if(!e[p[2]]){s[n].push(p[1]);e[p[2]]=r(p[1]).m}s[p[2]]=s[p[2]]||[];s[p[2]].push(p[4])}return s}function f(e){var t=Object.keys(e);return t.reduce(function(t,r){return t||e[r].length>0},false)}function u(e,t){var r={main:[t]};var n={main:[]};var a={main:{}};while(f(r)){var i=Object.keys(r);for(var o=0;o<i.length;o++){var u=i[o];var c=r[u];var h=c.pop();a[u]=a[u]||{};if(a[u][h]||!e[u][h])continue;a[u][h]=true;n[u]=n[u]||[];n[u].push(h);var p=s(e,e[u][h],u);var l=Object.keys(p);for(var v=0;v<l.length;v++){r[l[v]]=r[l[v]]||[];r[l[v]]=r[l[v]].concat(p[l[v]])}}}return n}e.exports=function(e,t){t=t||{};var a={main:r.m};var i=t.all?{main:Object.keys(a)}:u(a,e);var o="";Object.keys(i).filter(function(e){return e!=="main"}).forEach(function(e){var t=0;while(i[e][t]){t++}i[e].push(t);a[e][t]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })";o=o+"var "+e+" = ("+n.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+i[e].map(function(t){return""+JSON.stringify(t)+": "+a[e][t].toString()}).join(",")+"});\n"});o=o+"("+n.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+i.main.map(function(e){return""+JSON.stringify(e)+": "+a.main[e].toString()}).join(",")+"})(self);";var s=new window.Blob([o],{type:"text/javascript"});if(t.bare){return s}var f=window.URL||window.webkitURL||window.mozURL||window.msURL;var c=f.createObjectURL(s);var h=new window.Worker(c);h.objectURL=c;return h}},function(e,t){e.exports=function e(t,r,n){"use asm";var a=new t.Int32Array(n);function i(e,t){e=e|0;t=t|0;var r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,h=0,p=0,l=0,v=0,d=0,y=0;i=a[t+320>>2]|0;s=a[t+324>>2]|0;u=a[t+328>>2]|0;h=a[t+332>>2]|0;l=a[t+336>>2]|0;for(r=0;(r|0)<(e|0);r=r+64|0){o=i;f=s;c=u;p=h;v=l;for(n=0;(n|0)<64;n=n+4|0){y=a[r+n>>2]|0;d=((i<<5|i>>>27)+(s&u|~s&h)|0)+((y+l|0)+1518500249|0)|0;l=h;h=u;u=s<<30|s>>>2;s=i;i=d;a[e+n>>2]=y}for(n=e+64|0;(n|0)<(e+80|0);n=n+4|0){y=(a[n-12>>2]^a[n-32>>2]^a[n-56>>2]^a[n-64>>2])<<1|(a[n-12>>2]^a[n-32>>2]^a[n-56>>2]^a[n-64>>2])>>>31;d=((i<<5|i>>>27)+(s&u|~s&h)|0)+((y+l|0)+1518500249|0)|0;l=h;h=u;u=s<<30|s>>>2;s=i;i=d;a[n>>2]=y}for(n=e+80|0;(n|0)<(e+160|0);n=n+4|0){y=(a[n-12>>2]^a[n-32>>2]^a[n-56>>2]^a[n-64>>2])<<1|(a[n-12>>2]^a[n-32>>2]^a[n-56>>2]^a[n-64>>2])>>>31;d=((i<<5|i>>>27)+(s^u^h)|0)+((y+l|0)+1859775393|0)|0;l=h;h=u;u=s<<30|s>>>2;s=i;i=d;a[n>>2]=y}for(n=e+160|0;(n|0)<(e+240|0);n=n+4|0){y=(a[n-12>>2]^a[n-32>>2]^a[n-56>>2]^a[n-64>>2])<<1|(a[n-12>>2]^a[n-32>>2]^a[n-56>>2]^a[n-64>>2])>>>31;d=((i<<5|i>>>27)+(s&u|s&h|u&h)|0)+((y+l|0)-1894007588|0)|0;l=h;h=u;u=s<<30|s>>>2;s=i;i=d;a[n>>2]=y}for(n=e+240|0;(n|0)<(e+320|0);n=n+4|0){y=(a[n-12>>2]^a[n-32>>2]^a[n-56>>2]^a[n-64>>2])<<1|(a[n-12>>2]^a[n-32>>2]^a[n-56>>2]^a[n-64>>2])>>>31;d=((i<<5|i>>>27)+(s^u^h)|0)+((y+l|0)-899497514|0)|0;l=h;h=u;u=s<<30|s>>>2;s=i;i=d;a[n>>2]=y}i=i+o|0;s=s+f|0;u=u+c|0;h=h+p|0;l=l+v|0}a[t+320>>2]=i;a[t+324>>2]=s;a[t+328>>2]=u;a[t+332>>2]=h;a[t+336>>2]=l}return{hash:i}}},function(e,t){var r=this;var n=void 0;if(typeof self!=="undefined"&&typeof self.FileReaderSync!=="undefined"){n=new self.FileReaderSync}var a=function(e,t,r,n,a,i){var o=void 0,s=i%4,f=(a+s)%4,u=a-f;switch(s){case 0:t[i]=e.charCodeAt(n+3);case 1:t[i+1-(s<<1)|0]=e.charCodeAt(n+2);case 2:t[i+2-(s<<1)|0]=e.charCodeAt(n+1);case 3:t[i+3-(s<<1)|0]=e.charCodeAt(n)}if(a<f+(4-s)){return}for(o=4-s;o<u;o=o+4|0){r[i+o>>2]=e.charCodeAt(n+o)<<24|e.charCodeAt(n+o+1)<<16|e.charCodeAt(n+o+2)<<8|e.charCodeAt(n+o+3)}switch(f){case 3:t[i+u+1|0]=e.charCodeAt(n+u+2);case 2:t[i+u+2|0]=e.charCodeAt(n+u+1);case 1:t[i+u+3|0]=e.charCodeAt(n+u)}};var i=function(e,t,r,n,a,i){var o=void 0,s=i%4,f=(a+s)%4,u=a-f;switch(s){case 0:t[i]=e[n+3];case 1:t[i+1-(s<<1)|0]=e[n+2];case 2:t[i+2-(s<<1)|0]=e[n+1];case 3:t[i+3-(s<<1)|0]=e[n]}if(a<f+(4-s)){return}for(o=4-s;o<u;o=o+4|0){r[i+o>>2|0]=e[n+o]<<24|e[n+o+1]<<16|e[n+o+2]<<8|e[n+o+3]}switch(f){case 3:t[i+u+1|0]=e[n+u+2];case 2:t[i+u+2|0]=e[n+u+1];case 1:t[i+u+3|0]=e[n+u]}};var o=function(e,t,r,a,i,o){var s=void 0,f=o%4,u=(i+f)%4,c=i-u;var h=new Uint8Array(n.readAsArrayBuffer(e.slice(a,a+i)));switch(f){case 0:t[o]=h[3];case 1:t[o+1-(f<<1)|0]=h[2];case 2:t[o+2-(f<<1)|0]=h[1];case 3:t[o+3-(f<<1)|0]=h[0]}if(i<u+(4-f)){return}for(s=4-f;s<c;s=s+4|0){r[o+s>>2|0]=h[s]<<24|h[s+1]<<16|h[s+2]<<8|h[s+3]}switch(u){case 3:t[o+c+1|0]=h[c+2];case 2:t[o+c+2|0]=h[c+1];case 1:t[o+c+3|0]=h[c]}};e.exports=function(e,t,n,s,f,u){if(typeof e==="string"){return a(e,t,n,s,f,u)}if(e instanceof Array){return i(e,t,n,s,f,u)}if(r&&r.Buffer&&r.Buffer.isBuffer(e)){return i(e,t,n,s,f,u)}if(e instanceof ArrayBuffer){return i(new Uint8Array(e),t,n,s,f,u)}if(e.buffer instanceof ArrayBuffer){return i(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),t,n,s,f,u)}if(e instanceof Blob){return o(e,t,n,s,f,u)}throw new Error("Unsupported data type.")}},function(e,t,r){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function a(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var i=r(0);var o=r(1),s=o.toHex;var f=function(){function e(){a(this,e);this._rusha=new i;this._rusha.resetState()}e.prototype.update=function e(t){this._rusha.append(t);return this};e.prototype.digest=function e(t){var e=this._rusha.rawEnd().buffer;if(!t){return e}if(t==="hex"){return s(e)}throw new Error("unsupported digest encoding")};n(e,[{key:"state",get:function(){return this._rusha.getState()},set:function(e){this._rusha.setState(e)}}]);return e}();e.exports=function(){return new f}}])});
((w) => {w.echashcash = (l) => {const hasher = new Rusha();const nd = new Date().getTime();const s = [l, nd, ''].join(':');let i = -1;while(hasher.resetState().append(s).append((++i).toString()).end().substr(0, 3) != '000') {}const hashcash = [nd, i].join(':');return hashcash;};})(window)
;
(function (module, exports) {
'use strict';

const ecalert = (title, content, rs) => {
  let container;
  let color;
  const items = document.getElementById('tidewallet-connect-debug');
  const body = document.getElementsByTagName('body').item(0);
  const msg = document.createElement('li');
  const close = document.createElement('a');
  const header = document.createElement('div');
  switch(rs) {
    case 1:
      color = ['#cfd', '#adb'];
      break;
    case 0:
      color = ['#fcc', '#daa'];
      break;
    default:
      color = ['#cdf', '#abd'];
  }
  header.append(title);
  header.style = `text-decoration: underline; font-weight: bold`;
  close.onclick = () => { msg.remove(); }
  close.append('x');
  close.style = `position: absolute; right: 0px; top: 0px; padding: 0px 5px; height: 100%; line-height: 100%; cursor: pointer; background: ${color[1]}; border-top-right-radius: 5px; border-bottom-right-radius: 5px;`;
  msg.style = `display: block; width: 300px; padding: 10px; background: ${color[0]}; border-radius: 5px; position: relative; color: #666; margin: 1px`;
  msg.append(header);
  msg.append(content);
  msg.append(close);
  if(!!items) {
    container = items;
  } else {
    container = document.createElement('ul');
    container.id = 'tidewallet-connect-debug';
    container.style = 'position: fixed; left: 50%; margin-left: -200px; top: 0px; margin-top: 0px; font-size: 0.8em;';
    body.append(container);
  }
  container.append(msg);
};

const events = {};
class TWC {
  static once({ id, callback }) {
    const fn = callback instanceof Function ? callback : () => {};
    events[id] = fn;
  }
  static zeroFill(content, n, fillRight) {
  	const fillZ = n - content.length;
  	let result = content;
    if(fillZ > 0) {
      result = !!fillRight ?
        content + new Array(fillZ).fill(0).join('') :
        new Array(fillZ).fill(0).join('') + content;
    }
    return result;
  }
  static randomID() {
    const ID = this.zeroFill(
    	(parseInt(Math.random() * 16 ** 8)).toString(16),
    	8,
    	false
    );
    return ID;
  }
  static encodeQuery(data) {
  	let result = "";
  	if(data instanceof Object) {
      result = Object.keys.map((k) => {

      });
  	}
  }
  static log(fn, args, rs) {
    if(this.debug) {
      ecalert(`${fn}`, args, rs);
    }
  }
  static ecRequest(data, Url, hash)
  {
      //const serverUrl = "https://betarpc.xpa.exchange";
      const serverUrl = "https://rpc.xpa.exchange";
      return new Promise((resolve, reject) =>
      {
          const xhr = new XMLHttpRequest();
          const url = Url || serverUrl;
          const method = 'POST';
          xhr.open(method, url);
          xhr.onreadystatechange = () =>
          {
              if (xhr.readyState === XMLHttpRequest.DONE)
              {
                  resolve(xhr.response);
              }
          };
          xhr.onerror = () =>
          {
              reject({
                  status: this.status,
                  statusText: xhr.statusText
              });
          };
  
          const hashcash = echashcash('/');
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.setRequestHeader('hashcash', hash || hashcash);
          xhr.send(JSON.stringify(data));
      });
  }

  static TidewalletCommand({ cmd, address, tx, from, to, token, value, data, waitReceipt }) {
    const rid = this.randomID();
    const req = {};

    const tmpA = document.createElement('a');
    document.getElementsByTagName("BODY")[0].appendChild(tmpA);
    // if(navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1){
    //   tmpA.target = "_blank";
    //   this.log("this is android device","this is android device");
    // } else {
    //   this.log("this is not android device","this is not android device");
    // }

    //const tmpA = {};
    
    //const body = document.getElementsByTagName("BODY")[0];
    switch(cmd) {
      case 'getTransactionReceipt': //return json
        //tmpA.href = `tidewallet://connect/getTransactionReceipt/${rid}?tx=${tx}`;
        req.data = {
          jsonrpc: '2.0',
          method: 'eth_getTransactionReceipt',
          params: [tx],
          id: 67
        };
        return this.ecRequest(req.data).then(v => { return JSON.parse(v).result});
        break;
      case 'call': //return array
        //tmpA.href = `tidewallet://connect/call/${rid}?from=${from}?to=${to}?value=${value}?data=${data}`;  
        req.data = {
          jsonrpc: '2.0',
          method: 'eth_call',
          params: [{ from, to, value, data }],
          id: 67
        };
        return this.ecRequest(req.data).then(v => {
          let r = JSON.parse(v).result;
          let l = Math.floor(r.slice(2).length / 64);
          let a = [];
          for (let i = 0; i < l; i++) {
            a.push("0x"+r.slice(2+i*64, 66+i*64));
          }
          return a;
        });
        break;
      case 'accounts': //return array
        tmpA.href = `tidewallet://connect/accounts/${rid}`;
        break;
      case 'getBalance': //return array
        tmpA.href = `tidewallet://connect/getBalance/${rid}?address=${address}`;
        break;
      case 'getTokenBalance':
        tmpA.href = `tidewallet://connect/getTokenBalance/${rid}?address=${address}&token=${token}`;
        break;
      case 'getTransactionCount':
        tmpA.href = `tidewallet://connect/getTransactionCount/${rid}?address=${address}`;
        break;
      case 'getCode':
        tmpA.href = `tidewallet://connect/getCode/${rid}?address=${address}`;
        break;
      case 'getTransactionByHash':
        tmpA.href = `tidewallet://connect/getTransactionByHash/${rid}?tx=${address}`;
        break;
      case 'gasPrice':
        tmpA.href = `tidewallet://connect/gasPrice/${rid}`;
        break;
      case 'estimateGas':
        tmpA.href = `tidewallet://connect/estimateGas/${rid}?from=${from}&to=${to}&value=${value}&data=${data}`;
        break;
      case 'sign':
        tmpA.href = `tidewallet://connect/sign/${rid}?address=${address}&data=${data}`;
        break;
      case 'sendTransaction':
        tmpA.href = `tidewallet://connect/sendTransaction/${rid}?from=${from}&to=${to}&value=${value}&data=${data}`;
        break;
    }
    this.log(cmd, tmpA.href);

    return new Promise((resolve, reject) => {
      this.once({ id: rid, callback: (data) => {
        if(data){
          if(cmd == 'call'){
            let l = Math.floor(data.slice(2).length / 64);
            let r = [];
            for (let i = 0; i < l; i++) {
              r.push(data.slice(2+i*64, 66+i*64));
            }
            resolve(r);
          } 
          else if(cmd == 'sendTransaction' && waitReceipt) {
            this.checkTransactionReceipt({ tx: data[0] }).then(v => {
              this.log(tmpA.href, v, 1);
              resolve(v);
            }, e => {
              this.log(tmpA.href, e, 0);
              reject(e);
            })
          } 
          else {
            this.log(tmpA.href, data, 1);
            resolve(data);
          }
        } else {
          this.log(tmpA.href, 'oops! unknown error!', 0);
          reject(new Error('oops!'));
        }
      }});
      
      tmpA.click();
      //window.open(tmpA.href);
    });
  }
  static regist({ rid, href }) {
    return new Promise((resolve, reject) => {
      this.once({ id: rid, callback: (data) => {
        if(data){
          window.open(href);
          resolve(data);
        } else {
          reject(new Error('oops!'));
        }
      }});
    });
  }
  static accounts() {
  	return this.TidewalletCommand({
  	  cmd: 'accounts'
  	});
  }
  static getBalance({ address }) {
    return this.TidewalletCommand({
      cmd: 'getBalance',
      address: address
  	});
  }
  static getTokenBalance({ address, token }) {
    return this.TidewalletCommand({
      cmd: 'getTokenBalance',
      address: address,
      token: token
  	});
  }
  static getTransactionCount({ address }) {
    return this.TidewalletCommand({
      cmd: 'getTransactionCount',
      address: address
  	});
  }
  static getCode({ address }) {
    return this.TidewalletCommand({
      cmd: 'getCode',
      address: address
  	});
  }
  static getTransactionByHash({ address }) {
    return this.TidewalletCommand({
      cmd: 'getTransactionByHash',
      address: address
  	});
  }
  static gasPrice() {
    return this.TidewalletCommand({
      cmd: 'gasPrice'
  	});
  }
  static estimateGas() {
    return this.TidewalletCommand({
      cmd: 'estimateGas',
      from: from,
      to: to,
      value: value,
      data: data
  	});
  }
  static sign({ address, data}) {
    return this.TidewalletCommand({
      cmd: 'sign',
      address: address,
      data: data
  	});
  }
  static getTransactionReceipt({ tx }) {
    return this.TidewalletCommand({
      cmd: 'getTransactionReceipt',
      tx: tx
  	});
  }
  static call({ from, to, value, data }) {
    return this.TidewalletCommand({
      cmd: 'call',
      from: from,
      to: to,
      value: value,
      data: data
  	});
  }
  static sendTransaction({ from, to, value, data, waitReceipt }) {
    return this.TidewalletCommand({
      cmd: 'sendTransaction',
      from: from,
      to: to,
      value: value,
      data: data,
      waitReceipt: waitReceipt
  	});
  }
  static getTransactionLink({ from, to, value, data }) {
    const rid = this.randomID();
    return `tidewallet://connect/sendTransaction/${rid}?from=${from}&to=${to}&value=${value}&data=${data}`;
  }
  static checkTransactionReceipt({ tx }) {
    let data = {
      jsonrpc: '2.0',
      method: 'eth_getTransactionReceipt',
      params: [tx],
      id: 67
    };
    
    return this.retryPromise(
      ()=> new Promise((resolve, reject) =>{
          this.ecRequest(data).then(v => { 
            let r = JSON.parse(v).result;
            if(r && r.blockNumber) {
              return resolve(JSON.parse(v).result);
            } else {
              return reject('check timeout');
            }
          })
        })
    , 50, 7000 );
  }
  static retryPromise(promise, maxTries, timeout) {
    return promise()
    .then((d) => {
      return Promise.resolve(d);
    },
    (e) => {
      if (maxTries <= 0) return Promise.reject(e);
      else {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.retryPromise(promise, maxTries - 1, timeout)
            .then(resolve, reject);
          }, timeout || 0);
        });
      }
    });
  }
  // static checkTransactionReceipt({ tx }) {
  //   let data = {
  //     jsonrpc: '2.0',
  //     method: 'eth_getTransactionReceipt',
  //     params: [tx],
  //     id: 67
  //   };
  //   let status = "wait";
  //   return new Array(50).fill(0).reduce((pre, cur, i, arr) => {
  //     return pre.then(() => {
  //       let that = this;
  //       if(status == "wait") {
  //         return new Promise((resolve, reject) => {
  //           setTimeout(function(){  
  //             that.ecRequest(data).then(v => { 
  //               let r = JSON.parse(v).result;
  //               if(r && r.blockNumber && (r.status == 1 || r.logs.length > 0)) {
  //                 status = "run";
  //               } 
  //               resolve(JSON.parse(v).result);
  //             }, reject);
  //           }, 2000);
  //         })
  //       } else {
  //          return Promise.resolve();
  //       }
  //     })
  //   }, Promise.resolve()).catch(console.log);
  // }
}
TWC.debug = false;

const TidewalletEmit = ({ id, result }) => {
  if(events[id] instanceof Function) {
  	events[id](result);
  	delete events[id];
  }
};

if (typeof module === 'object') {
  module.exports = TWC;
} else {
  exports.TWC = TWC;
  exports.TidewalletEmit = TidewalletEmit;
}
})(typeof module === 'undefined' || module, this);
