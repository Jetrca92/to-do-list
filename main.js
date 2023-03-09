(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,'html {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nbody {\r\n    text-align: center;\r\n    width: 1000px;\r\n}\r\n\r\n.container {\r\n    max-width: 800px;\r\n}\r\n\r\n.clickable {\r\n    cursor: pointer;\r\n}\r\n\r\n.header {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    gap: 50px;\r\n    align-items: center;\r\n}\r\n\r\n.title-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.title-img {\r\n    width: 30px;\r\n    height: auto;\r\n}\r\n\r\n.blue-light {\r\n    color: #BDDBFF;\r\n}\r\n\r\n.gray {\r\n    color: #6c757d\r\n}\r\n\r\n.blue {\r\n    color: #3D9AE2;\r\n}\r\n\r\n.btn-outline-primary {\r\n    color: #3D9AE2;\r\n    border-color: #3D9AE2;\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n    background-color: #3D9AE2;\r\n    border-color: #3D9AE2;\r\n}\r\n\r\n.btn-outline-primary:active {\r\n    background-color: #3D9AE2;\r\n    border-color: #3D9AE2;\r\n}\r\n\r\n#inbox-view, #today-view, #upcoming-view, #projects-view {\r\n    margin: 0 30px;\r\n    color: #6c757d;\r\n}\r\n\r\n.add-task-form, .add-project-form {\r\n    display: none;\r\n    opacity: 0;\r\n    transition: opacity 0.4s ease;\r\n}\r\n\r\n#form, #formProject {\r\n    text-align: start;\r\n    padding: 30px;\r\n}\r\n\r\n.inbox-tasks, .today-tasks, .upcoming-tasks, .projects-tasks  {    \r\n    text-align: start;\r\n}\r\n\r\n.unchecked-btn {\r\n    width: 30px;\r\n    height: auto;\r\n    opacity: 0.2;\r\n}\r\n\r\n.checked-btn {\r\n    width: 30px;\r\n    height: auto;\r\n    opacity: 1;\r\n}\r\n\r\n.list-body {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.list-checkmark {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.task-item {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.list-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n}\r\n\r\n#today-view {\r\n    display: none;\r\n}\r\n\r\n#upcoming-view {\r\n    display: none;\r\n}\r\n\r\n#projects-view {\r\n    display: none;\r\n}\r\n\r\n.add-project-form {\r\n    display: none;\r\n    opacity: 0;\r\n    transition: opacity 0.4s ease;\r\n}\r\n\r\n.dropDown {\r\n    content: "...";\r\n    display: inline-block;\r\n    writing-mode: vertical-lr;\r\n    transform: rotate(180deg);\r\n    margin-left: 0.2em;\r\n}\r\n\r\n.project-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    html {\r\n    display: block;\r\n    }\r\n    \r\n    body {\r\n    width: 100%;\r\n    }\r\n    \r\n    .container {\r\n    max-width: 100%;\r\n    padding: 0 10px;\r\n    }\r\n    \r\n    .header {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    }\r\n    \r\n    .title-container {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    }\r\n    \r\n    .title-img {\r\n    width: 20px;\r\n    }\r\n    \r\n    .list-body {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    }\r\n    \r\n    .task-item {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    }\r\n    \r\n    .list-content {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    }\r\n    \r\n    .list-checkmark {\r\n    margin-right: 10px;\r\n    }\r\n    \r\n    .add-task-form,\r\n    .add-project-form {\r\n    opacity: 1;\r\n    }\r\n}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],d=o[s]||0,l="".concat(s," ").concat(d);o[s]=d+1;var m=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=a(h,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var u=r(e,a),s=0;s<o.length;s++){var d=n(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/to-do-list/",n.nc=void 0,(()=>{function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(n){e(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||"object"===t(n)&&"[object Date]"===r?new Date(n.getTime()):"number"==typeof n||"[object Number]"===r?new Date(n):("string"!=typeof n&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var i=864e5;function c(t){e(1,arguments);var n=r(t),a=n.getUTCDay(),o=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function u(t){e(1,arguments);var n=r(t),a=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=c(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=c(u);return n.getTime()>=i.getTime()?a+1:n.getTime()>=s.getTime()?a:a-1}var s=6048e5;var d={};function l(){return d}function m(t,n){var a,i,c,u,s,d,m,h;e(1,arguments);var f=l(),p=o(null!==(a=null!==(i=null!==(c=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==c?c:f.weekStartsOn)&&void 0!==i?i:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==a?a:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=r(t),y=g.getUTCDay(),v=(y<p?7:0)+y-p;return g.setUTCDate(g.getUTCDate()-v),g.setUTCHours(0,0,0,0),g}function h(t,n){var a,i,c,u,s,d,h,f;e(1,arguments);var p=r(t),g=p.getUTCFullYear(),y=l(),v=o(null!==(a=null!==(i=null!==(c=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==c?c:y.firstWeekContainsDate)&&void 0!==i?i:null===(h=y.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==a?a:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(g+1,0,v),b.setUTCHours(0,0,0,0);var w=m(b,n),T=new Date(0);T.setUTCFullYear(g,0,v),T.setUTCHours(0,0,0,0);var x=m(T,n);return p.getTime()>=w.getTime()?g+1:p.getTime()>=x.getTime()?g:g-1}var f=6048e5;function p(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const g=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return p("yy"===t?r%100:r,t.length)},y=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):p(n+1,2)},v=function(e,t){return p(e.getUTCDate(),t.length)},b=function(e,t){return p(e.getUTCHours()%12||12,t.length)},w=function(e,t){return p(e.getUTCHours(),t.length)},T=function(e,t){return p(e.getUTCMinutes(),t.length)},x=function(e,t){return p(e.getUTCSeconds(),t.length)},C=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return p(Math.floor(r*Math.pow(10,n-3)),t.length)};var k={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g(e,t)},Y:function(e,t,n,r){var a=h(e,r),o=a>0?a:1-a;return"YY"===t?p(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):p(o,t.length)},R:function(e,t){return p(u(e),t.length)},u:function(e,t){return p(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return p(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return p(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return y(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return p(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,a,i){var c=function(t,n){e(1,arguments);var a=r(t),i=m(a,n).getTime()-function(t,n){var r,a,i,c,u,s,d,f;e(1,arguments);var p=l(),g=o(null!==(r=null!==(a=null!==(i=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(u=n.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==i?i:p.firstWeekContainsDate)&&void 0!==a?a:null===(d=p.locale)||void 0===d||null===(f=d.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==r?r:1),y=h(t,n),v=new Date(0);return v.setUTCFullYear(y,0,g),v.setUTCHours(0,0,0,0),m(v,n)}(a,n).getTime();return Math.round(i/f)+1}(t,i);return"wo"===n?a.ordinalNumber(c,{unit:"week"}):p(c,n.length)},I:function(t,n,a){var o=function(t){e(1,arguments);var n=r(t),a=c(n).getTime()-function(t){e(1,arguments);var n=u(t),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),c(r)}(n).getTime();return Math.round(a/s)+1}(t);return"Io"===n?a.ordinalNumber(o,{unit:"week"}):p(o,n.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):v(e,t)},D:function(t,n,a){var o=function(t){e(1,arguments);var n=r(t),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=a-n.getTime();return Math.floor(o/i)+1}(t);return"Do"===n?a.ordinalNumber(o,{unit:"dayOfYear"}):p(o,n.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return p(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return p(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return p(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):w(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):p(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):p(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):T(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):x(e,t)},S:function(e,t){return C(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return M(a);case"XXXX":case"XX":return D(a);default:return D(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return M(a);case"xxxx":case"xx":return D(a);default:return D(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+S(a,":");default:return"GMT"+D(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+S(a,":");default:return"GMT"+D(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return p(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return p((r._originalDate||e).getTime(),t.length)}};function S(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+p(o,2)}function M(e,t){return e%60==0?(e>0?"-":"+")+p(Math.abs(e)/60,2):D(e,t)}function D(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+p(Math.floor(a/60),2)+n+p(a%60,2)}const E=k;var q=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},L=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const j={p:L,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return q(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",q(a,t)).replace("{{time}}",L(o,t))}};var U=["D","DD"],P=["YY","YYYY"];function A(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var W={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function N(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Y={date:N({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:N({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:N({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var H={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function O(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,c=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[c]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const F={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:O({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:O({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:O({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:O({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:O({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function z(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,c=o[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(c))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(c))return n}(u);return i=e.valueCallback?e.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(c.length)}}}var Q,B={ordinalNumber:(Q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(Q.matchPattern);if(!n)return null;var r=n[0],a=e.match(Q.parsePattern);if(!a)return null;var o=Q.valueCallback?Q.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const G={code:"en-US",formatDistance:function(e,t,n){var r,a=W[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Y,formatRelative:function(e,t,n,r){return H[e]},localize:F,match:B,options:{weekStartsOn:0,firstWeekContainsDate:1}};var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,X=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,I=/^'([^]*?)'?$/,$=/''/g,J=/[a-zA-Z]/;function _(t,n,i){var c,u,s,d,m,h,f,p,g,y,v,b,w,T,x,C,k,S;e(2,arguments);var M=String(n),D=l(),q=null!==(c=null!==(u=null==i?void 0:i.locale)&&void 0!==u?u:D.locale)&&void 0!==c?c:G,L=o(null!==(s=null!==(d=null!==(m=null!==(h=null==i?void 0:i.firstWeekContainsDate)&&void 0!==h?h:null==i||null===(f=i.locale)||void 0===f||null===(p=f.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==m?m:D.firstWeekContainsDate)&&void 0!==d?d:null===(g=D.locale)||void 0===g||null===(y=g.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==s?s:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=o(null!==(v=null!==(b=null!==(w=null!==(T=null==i?void 0:i.weekStartsOn)&&void 0!==T?T:null==i||null===(x=i.locale)||void 0===x||null===(C=x.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==w?w:D.weekStartsOn)&&void 0!==b?b:null===(k=D.locale)||void 0===k||null===(S=k.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==v?v:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!q.localize)throw new RangeError("locale must contain localize property");if(!q.formatLong)throw new RangeError("locale must contain formatLong property");var N=r(t);if(!function(t){if(e(1,arguments),!function(t){return e(1,arguments),t instanceof Date||"object"===a(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var n=r(t);return!isNaN(Number(n))}(N))throw new RangeError("Invalid time value");var Y=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(N),H=function(t,n){return e(2,arguments),function(t,n){e(2,arguments);var a=r(t).getTime(),i=o(n);return new Date(a+i)}(t,-o(n))}(N,Y),O={firstWeekContainsDate:L,weekStartsOn:W,locale:q,_originalDate:N};return M.match(X).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,j[t])(e,q.formatLong):e})).join("").match(R).map((function(e){if("''"===e)return"'";var r,a,o=e[0];if("'"===o)return(a=(r=e).match(I))?a[1].replace($,"'"):r;var c,u=E[o];if(u)return null!=i&&i.useAdditionalWeekYearTokens||(c=e,-1===P.indexOf(c))||A(e,n,String(t)),null!=i&&i.useAdditionalDayOfYearTokens||!function(e){return-1!==U.indexOf(e)}(e)||A(e,n,String(t)),u(H,e,q.localize,O);if(o.match(J))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return e})).join("")}var Z=n(379),V=n.n(Z),K=n(795),ee=n.n(K),te=n(569),ne=n.n(te),re=n(565),ae=n.n(re),oe=n(216),ie=n.n(oe),ce=n(589),ue=n.n(ce),se=n(426),de={};de.styleTagTransform=ue(),de.setAttributes=ae(),de.insert=ne().bind(null,"head"),de.domAPI=ee(),de.insertStyleElement=ie(),V()(se.Z,de),se.Z&&se.Z.locals&&se.Z.locals;const le=n.p+"cb84809e138503e15457.png",me=(n.p,document.querySelector("head")),he=document.createElement("link");he.setAttribute("rel","icon"),he.setAttribute("type","image/x-icon"),he.setAttribute("href",`${CheckIcon}`),me.appendChild(he);const fe=document.createElement("img");fe.setAttribute("alt","check icon"),fe.classList.add("title-img"),fe.setAttribute("src",`${le}`);const pe=document.createElement("h2");pe.classList.add("h2");const ge=document.createElement("span");ge.classList.add("blue"),ge.innerHTML="To";const ye=document.createElement("span");ye.classList.add("blue-light"),ye.innerHTML="Do";const ve=document.createElement("span");ve.classList.add("gray"),ve.innerHTML="by Jetrca",pe.appendChild(ge),pe.appendChild(ye),pe.appendChild(ve);const be=document.querySelector(".title-container");be.appendChild(fe),be.appendChild(pe);let we=[],Te=[];class xe{constructor(e,t,n,r,a){this.name=e,this.description=t,this.date=n,this.urgent=r,this.project=a,this.complete=!1}info(){console.log(`${this.name} - ${this.description}, due on ${this.date}, ${this.urgent?"urgent":"not urgent"}`)}}function Ce(e,t){const n=document.querySelector(t),r=document.createElement("li"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("img"),c=document.createElement("div"),u=document.createElement("div"),s=document.createElement("div"),d=document.createElement("b"),l=document.createElement("span"),m=document.createElement("div"),h=document.createElement("span"),f=document.createElement("div"),p=document.createElement("p");r.setAttribute("class","list-group-item"),a.setAttribute("class","task-item"),o.classList.add("list-checkmark","me-3"),i.classList.add("unchecked-btn","clickable"),i.setAttribute("src",`${le}`),i.setAttribute("alt","check icon"),c.setAttribute("class","list-content"),u.classList.add("d-flex","justify-content-between"),d.setAttribute("class","me-3"),f.setAttribute("class","list-body"),p.classList.add("d-flex","flex-wrap");const g=document.createElement("div");g.classList.add("dropdown");const y=document.createElement("button");y.classList.add("btn","btn-sm","btn-outline-primary","dropdown-toggle"),y.type="button",y.setAttribute("data-bs-toggle","dropdown"),y.setAttribute("aria-expanded","false"),y.textContent="Delete";const v=document.createElement("ul");v.classList.add("dropdown-menu");const b=document.createElement("li"),w=document.createElement("a");w.classList.add("dropdown-item"),w.href="#",w.textContent="Delete Task",b.appendChild(w),v.appendChild(b),g.appendChild(y),g.appendChild(v),w.addEventListener("click",(()=>{const t=we.findIndex((t=>t.name===e.name&&t.description===e.description&&t.date===e.date&&t.urgent===e.urgent&&t.project===e.project));-1!==t&&(we.splice(t,1),r.remove())})),d.innerHTML=e.name;const T=new Date(Date.parse(e.date));h.innerHTML=_(T,"MMM do yyyy"),p.innerHTML=e.description,e.urgent?l.innerHTML="(Urgent)":l.innerHTML="(Not urgent)",e.complete?(i.classList.value="checked-btn clickable",a.style.textDecoration="line-through"):(i.classList.value="unchecked-btn clickable",a.style.textDecoration="none"),i.addEventListener("click",(()=>{!1===e.complete?(i.classList.value="checked-btn clickable",i.parentNode.parentNode.style.textDecoration="line-through",e.complete=!0):(i.classList.value="unchecked-btn clickable",i.parentNode.parentNode.style.textDecoration="none",e.complete=!1)})),o.appendChild(i),a.appendChild(o),s.appendChild(d),s.appendChild(l),s.appendChild(g),m.appendChild(h),u.appendChild(s),u.appendChild(m),u.appendChild(g),c.appendChild(u),f.appendChild(p),c.appendChild(f),a.appendChild(c),r.appendChild(a),n.appendChild(r)}const ke=document.querySelector("#inbox"),Se=document.querySelector("#today"),Me=document.querySelector("#upcoming"),De=document.querySelector("#projects"),Ee=document.querySelector("#addTask"),qe=document.querySelector("#addProject");document.querySelector("#form").addEventListener("submit",(t=>(t.preventDefault(),function(){const t=document.querySelector("#task-name").value,n=document.querySelector("#task-description").value,a=document.querySelector("#task-date").value,o=document.querySelector("#task-urgent").checked,i=document.querySelector("#projectSelect").value,c=new xe(t,n,a,o,i);we.push(c),console.log(we),we.sort(((t,n)=>function(t,n){e(2,arguments);var a=r(t),o=r(n),i=a.getTime()-o.getTime();return i<0?-1:i>0?1:i}(new Date(t.date),new Date(n.date)))),Ce(c,"#listUl")}(),document.querySelector("#task-name").value="",document.querySelector("#task-description").value="",document.querySelector("#task-date").value="",document.querySelector("#task-urgent").checked=!1,document.querySelector(".add-task-form").style.display="none",!1))),Ee.addEventListener("click",(()=>{const e=document.querySelector(".add-task-form");"none"!==e.style.display&&e.style.display?(e.style.opacity=0,setTimeout((()=>{e.style.display="none"}),400)):(e.style.display="block",setTimeout((()=>{e.style.opacity=1}),0));const t=document.querySelector("#project-select");t.innerHTML="",t.classList.add("col-auto","my-1");const n=document.createElement("label"),r=document.createElement("select"),a=document.createElement("option");n.setAttribute("class","mr-sm-2"),n.setAttribute("for","projectSelect"),n.innerHTML="Project",r.setAttribute("id","projectSelect"),r.classList.add("custom-select","mr-sm-2"),a.setAttribute("selected",!0),a.innerHTML="No project",r.appendChild(a);for(let e=0;e<Te.length;e++){const t=document.createElement("option");t.setAttribute("value",Te[e]),t.innerHTML=Te[e],r.appendChild(t)}t.append(n),t.append(r)})),ke.addEventListener("click",(()=>{document.querySelector("#listUl").innerHTML="",document.querySelector(".add-task-form").style.display="none",document.querySelector("#inbox-view").style.display="block",document.querySelector("#today-view").style.display="none",document.querySelector("#upcoming-view").style.display="none",document.querySelector("#projects-view").style.display="none";for(let e=0;e<we.length;e++)Ce(we[e],"#listUl")})),Se.addEventListener("click",(()=>{document.querySelector("#listTodayUl").innerHTML="",document.querySelector("#inbox-view").style.display="none",document.querySelector("#today-view").style.display="block",document.querySelector("#upcoming-view").style.display="none",document.querySelector("#projects-view").style.display="none";let e=new Date;e=_(e,"yyyy-MM-dd");for(let t=0;t<we.length;t++)we[t].date===e&&Ce(we[t],"#listTodayUl")})),Me.addEventListener("click",(()=>{document.querySelector("#listUpcomingUl").innerHTML="",document.querySelector("#inbox-view").style.display="none",document.querySelector("#today-view").style.display="none",document.querySelector("#upcoming-view").style.display="block",document.querySelector("#projects-view").style.display="none";let e=new Date;e=_(e,"yyyy-MM-dd");for(let t=0;t<we.length;t++)we[t].date>e&&Ce(we[t],"#listUpcomingUl")})),De.addEventListener("click",(()=>{document.querySelector("#inbox-view").style.display="none",document.querySelector("#today-view").style.display="none",document.querySelector("#upcoming-view").style.display="none",document.querySelector("#projects-view").style.display="block";for(let e=0;e<Te.length;e++){const t=document.querySelector(`#project-${Te[e].replace(/\s+/g,"-")}`);t&&(t.innerHTML="");for(let t=0;t<we.length;t++)we[t].project===Te[e]&&Ce(we[t],`#project-${Te[e].replace(/\s+/g,"-")}`)}})),document.querySelector("#formProject").addEventListener("submit",(e=>(e.preventDefault(),function(){const e=document.createElement("div");e.setAttribute("class","project-header");const t=document.querySelector("#project-name").value,n=document.querySelector(".projects-tasks"),r=document.createElement("h2"),a=document.createElement("div");a.classList.add("dropdown");const o=document.createElement("button");o.classList.add("btn","btn-sm","btn-outline-primary","dropdown-toggle"),o.type="button",o.setAttribute("data-bs-toggle","dropdown"),o.setAttribute("aria-expanded","false"),o.textContent="Delete";const i=document.createElement("ul");i.classList.add("dropdown-menu");const c=document.createElement("li"),u=document.createElement("a");u.classList.add("dropdown-item"),u.href="#",u.textContent="Delete Project",c.appendChild(u),i.appendChild(c),a.appendChild(o),a.appendChild(i),u.addEventListener("click",(()=>{s.remove(),e.remove();for(let e=0;e<we.length;e++)we[e].project===t&&(we[e].project="No project")})),r.setAttribute("class","h2 project-"+t.replace(/\s+/g,"-")),r.classList.add("mt-3"),r.innerHTML=t,Te.push(t);const s=document.createElement("ul");s.setAttribute("class","list-group"),s.setAttribute("id","project-"+t.replace(/\s+/g,"-")),e.appendChild(r),e.appendChild(a),n.appendChild(e),n.appendChild(s)}(),document.querySelector("#project-name").value="",document.querySelector(".add-project-form").style.display="none",!1))),qe.addEventListener("click",(()=>{const e=document.querySelector(".add-project-form");"none"!==e.style.display&&e.style.display?(e.style.opacity=0,setTimeout((()=>{e.style.display="none"}),400)):(e.style.display="block",setTimeout((()=>{e.style.opacity=1}),0))}))})()})();