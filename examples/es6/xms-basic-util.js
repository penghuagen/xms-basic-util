!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.xmsBasicUtil=e():t.xmsBasicUtil=e()}(this,(function(){return(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>h});const n={SDF_DATE:"yyyy-MM-DD",SDF_DATE_SECOND:"yyyy-MM-dd HH:mm:ss",SDF_DATE_MINUTE:"yyyy-MM-dd HH:mm",SDF_DATE_MONTH_MINUTE:"MM-dd HH:mm",SDF_HOUR_TIME:"HH:mm:ss",SDF_DATE_CN:"yyyy年MM月dd日"};function r(t,e){return e=e||n.SDF_DATE,t||(t=new Date),t.format(e)}function o(t){let e=new Date;if(t){if("number"!=typeof t||13!==t.toString().length)throw`timestamp格式不对,必须为13位的数字，类似1614049156378,当前参数为${t}`;e=new Date(t)}return e}function i(t,e){return e=e||n.SDF_DATE_SECOND,r(o(t),e)}function a(t){let e=new Date;if(t)try{let n=(t=t.toString()).substring(0,4),r=t.substring(4,6),o=t.substring(6,8),i=t.substring(8,10),a=t.substring(10,12),u=t.substring(12,14);e=new Date(n,r-1,o,i,a,u)}catch(e){throw`time格式不对,时间格式类似:20210106101605570,当前参数为${t}`}return e}function u(t,e){return e=e||n.SDF_DATE_SECOND,r(a(t),e)}function c(t,e,n){return e&&t.setMonth(t.getMonth()+e),r(t,n)}function s(t,e,n){return e&&t.setDate(t.getDate()+e),r(t,n)}function l(t,e,n){let r=0,o=t.toString(),i=e.toString();try{r+=o.split(".")[1].length}catch(t){}try{r+=i.split(".")[1].length}catch(t){}return p(Number(o.replace(".",""))*Number(i.replace(".",""))/Math.pow(10,r),n)}function m(t,e,n){let r,o,i=0,a=0;try{i=t.toString().split(".")[1].length}catch(t){}try{a=e.toString().split(".")[1].length}catch(t){}return r=Number(t.toString().replace(".","")),o=Number(e.toString().replace(".","")),p(Number(r/o*Math.pow(10,a-i)),n)}function p(t,e){return null!=e&&e>=0&&(t=Math.round(t*Math.pow(10,e))/Math.pow(10,e)),t}Date.prototype.format=function(t){let e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/i.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(let n in e)new RegExp("("+n+")","i").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};const h={dateFormat:{DATE_FORMAT:n,dateFormat:r,dateAddMonth:c,dateAddDay:s,timestampDate:o,timestampFormat:i,timestampToDate:function(t){return i(t,n.SDF_DATE)},timestampToDateTime:function(t){return i(t,n.SDF_DATE_SECOND)},timestampAddMonth:function(t,e,n){return c(o(t),e,n)},timestampAddDay:function(t,e,n){return s(o(t),e,n)},timeDate:a,timeFormat:u,timeToDate:function(t){return u(t,n.SDF_DATE)},timeToDateTime:function(t){return u(t,n.SDF_DATE_SECOND)},timeAddMonth:function(t,e,n){return c(a(t),e,n)},timeAddDay:function(t,e,n){return s(a(t),e,n)}},mathUtil:{accMul:l,accDiv:m,accAdd:function(t,e){var n,r,o;try{n=t.toString().split(".")[1].length}catch(t){n=0}try{r=e.toString().split(".")[1].length}catch(t){r=0}return m(l(t,o=Math.pow(10,Math.max(n,r)))+l(e,o),o,2)},accSub:function(t,e){var n,r,o;try{n=t.toString().split(".")[1].length}catch(t){n=0}try{r=e.toString().split(".")[1].length}catch(t){r=0}return m(t*(o=Math.pow(10,Math.max(n,r)))-e*o,o,2)},toFixed:function(t,e){let n=Math.pow(10,e),r=l(t,n)+.5;return r=parseInt(r,10)/n,r},binaryFloatToDecimal:function(t,e){if(e=e||2,Number.isInteger(t))return parseInt(t,e);const n=t.toString().split("."),r=n[0];return parseInt(r,e)+function(t,e){return t.map(((t,n)=>Number(t)*Math.pow(e,-(n+1))))}(n[1].split(""),e).reduce(((t,e)=>t+e),0)}}};return e})()}));