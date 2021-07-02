var xmsBasicUtil;(()=>{"use strict";var t={561:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var r={SDF_DATE:"yyyy-MM-dd",SDF_DATE_SECOND:"yyyy-MM-dd HH:mm:ss",SDF_DATE_MINUTE:"yyyy-MM-dd HH:mm",SDF_DATE_MONTH_MINUTE:"MM-dd HH:mm",SDF_HOUR_TIME:"HH:mm:ss",SDF_DATE_CN:"yyyy年MM月dd日"};function n(t,e){return e=e||r.SDF_DATE,t||(t=new Date),t.format(e)}function a(t){var e=new Date;if(t){if("number"!=typeof t||13!==t.toString().length)throw"timestamp格式不对,必须为13位的数字，类似1614049156378,当前参数为".concat(t);e=new Date(t)}return e}function i(t,e){return e=e||r.SDF_DATE_SECOND,n(a(t),e)}function u(t){var e=new Date;if(t)try{var r=(t=t.toString()).substring(0,4),n=t.substring(4,6),a=t.substring(6,8),i=t.substring(8,10),u=t.substring(10,12),o=t.substring(12,14);e=new Date(r,n-1,a,i,u,o)}catch(e){throw"time格式不对,时间格式类似:20210106101605570,当前参数为".concat(t)}return e}function o(t,e){return e=e||r.SDF_DATE_SECOND,n(u(t),e)}function c(t,e,r){return e&&t.setMonth(t.getMonth()+e),n(t,r)}function s(t,e,r){return e&&t.setDate(t.getDate()+e),n(t,r)}Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/i.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+r+")","i").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[r]:("00"+e[r]).substr((""+e[r]).length)));return t},e.default={DATE_FORMAT:r,dateFormat:n,dateAddMonth:c,dateAddDay:s,timestampDate:a,timestampFormat:i,timestampToDate:function(t){return i(t,r.SDF_DATE)},timestampToDateTime:function(t){return i(t,r.SDF_DATE_SECOND)},timestampAddMonth:function(t,e,r){return c(a(t),e,r)},timestampAddDay:function(t,e,r){return s(a(t),e,r)},timeDate:u,timeFormat:o,timeToDate:function(t){return o(t,r.SDF_DATE)},timeToDateTime:function(t){return o(t,r.SDF_DATE_SECOND)},timeAddMonth:function(t,e,r){return c(u(t),e,r)},timeAddDay:function(t,e,r){return s(u(t),e,r)}}},444:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default={debounce:function(t,e){var r;return function(){var n=this,a=arguments;r&&clearTimeout(r),r=setTimeout((function(){t.apply(n,a)}),e)}},throttle:function(t,e){var r=0;return function(){var n=this,a=arguments,i=new Date;i-r>e&&(t.apply(n,a),r=i)}}}},485:(t,e)=>{function r(t,e,r){var n=0,i=t.toString(),u=e.toString();try{n+=i.split(".")[1].length}catch(t){}try{n+=u.split(".")[1].length}catch(t){}return a(Number(i.replace(".",""))*Number(u.replace(".",""))/Math.pow(10,n),r)}function n(t,e,r){var n,i,u=0,o=0;try{u=t.toString().split(".")[1].length}catch(t){}try{o=e.toString().split(".")[1].length}catch(t){}return n=Number(t.toString().replace(".","")),i=Number(e.toString().replace(".","")),a(Number(n/i*Math.pow(10,o-u)),r)}function a(t,e){return null!=e&&e>=0&&(t=Math.round(t*Math.pow(10,e))/Math.pow(10,e)),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default={accMul:r,accDiv:n,accAdd:function(t,e){var a,i,u;try{a=t.toString().split(".")[1].length}catch(t){a=0}try{i=e.toString().split(".")[1].length}catch(t){i=0}return n(r(t,u=Math.pow(10,Math.max(a,i)))+r(e,u),u,2)},accSub:function(t,e){var r,a,i;try{r=t.toString().split(".")[1].length}catch(t){r=0}try{a=e.toString().split(".")[1].length}catch(t){a=0}return n(t*(i=Math.pow(10,Math.max(r,a)))-e*i,i,2)},toFixed:function(t,e){var n=Math.pow(10,e),a=r(t,n)+.5;return parseInt(a,10)/n},binaryFloatToDecimal:function(t,e){if(e=e||2,Number.isInteger(t))return parseInt(t,e);var r=t.toString().split("."),n=r[0];return parseInt(n,e)+function(t,e){return t.map((function(t,r){return Number(t)*Math.pow(e,-(r+1))}))}(r[1].split(""),e).reduce((function(t,e){return t+e}),0)}}}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}var n={};(()=>{var t=n;Object.defineProperty(t,"__esModule",{value:!0});var e=u(r(561)),a=u(r(485)),i=u(r(444));function u(t){return t&&t.__esModule?t:{default:t}}var o={dateFormat:e.default,mathUtil:a.default,funcUtil:i.default};t.default=o})(),xmsBasicUtil=n})();