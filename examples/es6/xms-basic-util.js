!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.xmsBasicUtil=e():t.xmsBasicUtil=e()}(this,(function(){return(()=>{"use strict";var t={561:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n={SDF_DATE:"yyyy-MM-dd",SDF_DATE_SECOND:"yyyy-MM-dd HH:mm:ss",SDF_DATE_MINUTE:"yyyy-MM-dd HH:mm",SDF_DATE_MONTH_MINUTE:"MM-dd HH:mm",SDF_HOUR_TIME:"HH:mm:ss",SDF_DATE_CN:"yyyy年MM月dd日"};function r(t,e){return e=e||n.SDF_DATE,t||(t=new Date),t.format(e)}function o(t){var e=new Date;if(t){if("number"!=typeof t||13!==t.toString().length)throw"timestamp格式不对,必须为13位的数字，类似1614049156378,当前参数为".concat(t);e=new Date(t)}return e}function a(t,e){return e=e||n.SDF_DATE_SECOND,r(o(t),e)}function i(t){var e=new Date;if(t)try{var n=(t=t.toString()).substring(0,4),r=t.substring(4,6),o=t.substring(6,8),a=t.substring(8,10),i=t.substring(10,12),u=t.substring(12,14);e=new Date(n,r-1,o,a,i,u)}catch(e){throw"time格式不对,时间格式类似:20210106101605570,当前参数为".concat(t)}return e}function u(t,e){return e=e||n.SDF_DATE_SECOND,r(i(t),e)}function c(t,e,n){return e&&t.setMonth(t.getMonth()+e),r(t,n)}function s(t,e,n){return e&&t.setDate(t.getDate()+e),r(t,n)}Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/i.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},e.default={DATE_FORMAT:n,dateFormat:r,dateAddMonth:c,dateAddDay:s,timestampDate:o,timestampFormat:a,timestampToDate:function(t){return a(t,n.SDF_DATE)},timestampToDateTime:function(t){return a(t,n.SDF_DATE_SECOND)},timestampAddMonth:function(t,e,n){return c(o(t),e,n)},timestampAddDay:function(t,e,n){return s(o(t),e,n)},timeDate:i,timeFormat:u,timeToDate:function(t){return u(t,n.SDF_DATE)},timeToDateTime:function(t){return u(t,n.SDF_DATE_SECOND)},timeAddMonth:function(t,e,n){return c(i(t),e,n)},timeAddDay:function(t,e,n){return s(i(t),e,n)}},new Date,console.log(r()),console.log(r(new Date)),console.log(r(new Date,n.SDF_HOUR_TIME))},444:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default={debounce:function(t,e){var n;return function(){var r=this,o=arguments;n&&clearTimeout(n),n=setTimeout((function(){t.apply(r,o)}),e)}},throttle:function(t,e){var n=0;return function(){var r=this,o=arguments,a=new Date;a-n>e&&(t.apply(r,o),n=a)}}}},485:(t,e)=>{function n(t,e,n){var r=0,a=t.toString(),i=e.toString();try{r+=a.split(".")[1].length}catch(t){}try{r+=i.split(".")[1].length}catch(t){}return o(Number(a.replace(".",""))*Number(i.replace(".",""))/Math.pow(10,r),n)}function r(t,e,n){var r,a,i=0,u=0;try{i=t.toString().split(".")[1].length}catch(t){}try{u=e.toString().split(".")[1].length}catch(t){}return r=Number(t.toString().replace(".","")),a=Number(e.toString().replace(".","")),o(Number(r/a*Math.pow(10,u-i)),n)}function o(t,e){return null!=e&&e>=0&&(t=Math.round(t*Math.pow(10,e))/Math.pow(10,e)),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default={accMul:n,accDiv:r,accAdd:function(t,e){var o,a,i;try{o=t.toString().split(".")[1].length}catch(t){o=0}try{a=e.toString().split(".")[1].length}catch(t){a=0}return r(n(t,i=Math.pow(10,Math.max(o,a)))+n(e,i),i,2)},accSub:function(t,e){var n,o,a;try{n=t.toString().split(".")[1].length}catch(t){n=0}try{o=e.toString().split(".")[1].length}catch(t){o=0}return r(t*(a=Math.pow(10,Math.max(n,o)))-e*a,a,2)},toFixed:function(t,e){var r=Math.pow(10,e),o=n(t,r)+.5;return parseInt(o,10)/r},binaryFloatToDecimal:function(t,e){if(e=e||2,Number.isInteger(t))return parseInt(t,e);var n=t.toString().split("."),r=n[0];return parseInt(r,e)+function(t,e){return t.map((function(t,n){return Number(t)*Math.pow(e,-(n+1))}))}(n[1].split(""),e).reduce((function(t,e){return t+e}),0)}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}var r={};return(()=>{var t=r;Object.defineProperty(t,"__esModule",{value:!0});var e=i(n(561)),o=i(n(485)),a=i(n(444));function i(t){return t&&t.__esModule?t:{default:t}}var u={dateFormat:e.default,mathUtil:o.default,funcUtil:a.default};t.default=u})(),r})()}));