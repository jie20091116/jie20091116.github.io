!function(n){function t(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return n[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var e={};return t.m=n,t.c=e,t.p="./source/dist/",t(0)}([function(n,t,e){"use strict";e(8);var r=(e(1),e(4));e(2),e(30);var i=e(27);e(26);var o=e(13),a=e(15);BCD.app({initPage:function(n,t){r.show();var e=this;switch(n){case"link":o(e,a.daohangList),t();break;default:if(a.benchDict[n])return void i.then(function(){e.setView({title:n,source:{code:a.benchDict[n]},template:'<div class="am-g"><div data-codemirror class="am-u-lg-8 am-u-sm-12" data-on="?m=codemirror_formate&mode=javascript"></div><div class="am-margin-top-lg am-u-lg-4 am-u-sm-12"><div class="am-panel am-panel-default">  <div class="am-panel-hd">结果</div>  <div data-benchmark class="am-panel-bd" data-on="?m=run_benchmark"></div></div></div></div>',end:function(){var n=this.find("[data-benchmark]"),t=this.find("[data-codemirror]")[0];t&&t.codemirror&&t.codemirror.on("blur",function(e,r){n.trigger("codemirror_blur",t.codemirror.getValue())})}}),t()});BCD.replaceHash("#!/link"),t(-1)}}})},function(n,t,e){"use strict";var r={},i=e(6);$.extend(r,{url:BCD.url,toast:i,load:e(5)}),$.extend(r,{ua:navigator.userAgent,getElementRect:function(n){try{return $(n)[0].getBoundingClientRect()}catch(n){return{}}},getWindowHeight:function(){return window.innerHeight||window.clientHeight},getWindowWidth:function(){return window.innerWidth},getPageHeight:function(){return document.body.scrollHeight||document.documentElement.scrollHeight},getEleTopHeight:function(n){n=$(n)[0];for(var t=0;n;)t+=n.offsetTop||0,n=n.offsetParent;return t},getScrollTop:function(){return window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop},scrollTo:function(n,t){window.scrollTo(n,t)},leftFillString:function(n,t){return("0000000000"+n).substr(-t)},toastNetWorkError:function(){i("网络不给力，查看下吧")},htmlEncode:function(n){return $("<a></a>").text(n||"").html()},htmlDecode:function(n){return $("<a></a>").html(n||"").text()}}),r.ajax=function(n){var t=new Promise(function(t,e){BCD.is.s(n)&&(n={url:n}),$.ajax($.extend({dataType:"json",cache:!1,timeout:8e3,headers:{"Content-Type":"application/json",Accept:"application/json"}},n,{success:function(e){t(e),n.success&&n.success(e)},error:function(){t(!1),n.errors?n.errors.apply(this,arguments):r.toastNetWorkError()}}))});return t},n.exports=window.UTIL=r},function(n,t){"use strict";function e(n,t){BCD.addEvent(n,function(n,e,r){n.on("click",function(){try{t.call(n,e,r)}catch(n){BCD.reportError(n,"click trigger"+$.param(e))}})})}function r(n){var t=BCD.url.abs(n.url);"_blank"===n.target?window.open(t):BCD.go(t)}function i(){this.getView().hide()}e("go",r),e("hide",i),e("replace",function(n){BCD.replaceHash(n.url)}),e("toggle",function(n){this.toggleClass(n.class)}),e("back",function(n){history.back()}),e("open",function(n){window.open(n.url)}),n.exports={addEvent:e,go:r,hide:i}},function(n,t){"use strict";n.exports=function(){var n=[];return n.toString=function(){for(var n=[],t=0;t<this.length;t++){var e=this[t];e[2]?n.push("@media "+e[2]+"{"+e[1]+"}"):n.push(e[1])}return n.join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(n,t){"use strict";var e=$('<div class="mod-loading  fixed" style="display:none">  <div class="loading">    <b class="block"></b>    <b class="block"></b>    <b class="block"></b>  </div></div>');$("body").append(e),n.exports=e},function(n,t){"use strict";var e={};window.LOAD_CALLBACK=function(n,t){console.log(arguments)},n.exports=function(n,t){var r=new Promise(function(n){t||(t=n)}),i=document.getElementsByTagName("head")[0],o=[];return BCD.is.s(n)&&(n=[n]),n=n.map(function(n){return n=BCD.url.abs(n),e[n]||o.push(n),n}),o.length?o.forEach(function(r){var a=void 0;/\.js$/.test(r)?(a=document.createElement("script"),a.type="text/javascript",a.charset="utf-8",a.async=!1,a.src=r):(a=document.createElement("link"),a.rel="stylesheet",a.href=r),a.onload=function(){e[r]=!0,o.every(function(n){return e[n]})&&t(n.map(function(n){return e[n]}))},i.appendChild(a)}):t(n.map(function(n){return e[n]})),r}},function(n,t){"use strict";n.exports=function(){var n=document.createElement("div");return n.setAttribute("style","position: fixed; top:"+window.innerHeight/3+"px; left:0px; right:0px;text-align:center; z-index:9999;"),function(t,e){n.innerHTML='<div style="display:inline-block; padding:20px 40px; background:rgba(0,0,0,0.6); -webkit-box-shadow:inset 0px 0px 1px #424242, 0px 1px 3px rgba(0,0,0,0.65); color:#fff; text-shadow:0px 1px 1px #9d9d9d; font-size:15px; border-radius:5px;">'+t+"</div>",n.style.top=window.innerHeight/3+"px",n.parentNode||(document.body.appendChild(n),setTimeout(function(){document.body.removeChild(n)},1e3*(e||2)))}}()},function(n,t){"use strict";Array.from||(Array.from=function(n){for(var t=0,e=[];t<n.length;t++)e[t]=n[t];return e})},function(n,t,e){"use strict";e(7),e(10),e(9)},function(n,t){"use strict";Object.assign||(Object.assign=$.extend)},function(n,t){"use strict";function e(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}var r=!1;try{r=1===[].concat(e(new i([0]))).length}catch(n){}if(!r){var i=function(n){Array.call(this),n=n||[];for(var t=0;t<n.length;t++)this.add(n[t])};i.prototype=Object.create(Array.prototype),i.prototype.add=function(n){return this.indexOf(n)<0&&(this.push(n),!0)},i.prototype.delete=function(n){var t=this.indexOf(n);return t>-1&&(this.splice(t,1),!0)},i.prototype.has=function(n){return this.indexOf(n)>-1},i.prototype.size=function(){return this.length},i.prototype.clear=function(n){for(;this.pop(););},i.prototype.values=function(){},window.Set=i}},function(n,t,e){function r(n,t){for(var e=0;e<n.length;e++){var r=n[e],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(u(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(u(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function i(n){for(var t=[],e={},r=0;r<n.length;r++){var i=n[r],o=i[0],a=i[1],s=i[2],c=i[3],u={css:a,media:s,sourceMap:c};e[o]?e[o].parts.push(u):t.push(e[o]={id:o,parts:[u]})}return t}function o(n,t){var e=h(),r=x[x.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),x.push(t);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(t)}}function a(n){n.parentNode.removeChild(n);var t=x.indexOf(n);t>=0&&x.splice(t,1)}function s(n){var t=document.createElement("style");return t.type="text/css",o(n,t),t}function c(n){var t=document.createElement("link");return t.rel="stylesheet",o(n,t),t}function u(n,t){var e,r,i;if(t.singleton){var o=b++;e=v||(v=s(t)),r=d.bind(null,e,o,!1),i=d.bind(null,e,o,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=c(t),r=f.bind(null,e),i=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=s(t),r=l.bind(null,e),i=function(){a(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}function d(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}function l(n,t){var e=t.css,r=t.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function f(n,t){var e=t.css,r=t.sourceMap;r&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([e],{type:"text/css"}),o=n.href;n.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var p={},m=function(n){var t;return function(){return"undefined"==typeof t&&(t=n.apply(this,arguments)),t}},g=m(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),h=m(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,b=0,x=[];n.exports=function(n,t){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var e=i(n);return r(e,t),function(n){for(var o=[],a=0;a<e.length;a++){var s=e[a],c=p[s.id];c.refs--,o.push(c)}if(n){var u=i(n);r(u,t)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete p[c.id]}}}};var y=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},,function(n,t,e){"use strict";var r=e(14);n.exports=function(n,t){var e=0,i=["","warning","danger","success"],o=function(){var o=i[e%4];e++;var s=$("<div></div>").setView(r({full:"append"}));t[a].forEach(function(n){n.style=o,s.reset(n)}),n.append(s)};for(var a in t)o()}},function(n,t){"use strict";BCD.addEvent("expand",function(n){n.on("click",function(t){n.find("ul.am-list > li.expand").toggleClass("am-hide")})}),n.exports=function(n){return $.extend({name:"common/linktab",template:'<div class="am-u-sm-12 am-u-md-6 am-u-lg-4">    <section class="am-panel am-panel-<%=obj.style||"secondary"%>"  data-on="?m=expand">        <header class="am-panel-hd" >            <h3 class="am-panel-title" ><%=obj.title%></h3>        </header>        <div class="am-panel-bd">            <ul class="am-list">                <%var list = obj.rows; for(var i=0, len=list.length; i<len; i++){%>                <%if(i < obj.limit){ %>                <li style="padding:8px">                  <span >                    <a data-on="?m=<%=config.isEnv ? "goEnv" : "go"%>&target=_blank" data-url="<%=list[i].href%>" title="<%=list[i].title%>">                      <img style="height:16px; width:16px" src="<%=list[i].favicon%>">  </img><%=list[i].name%>                    </a>                  </span>                <button style="display:none" type="button" class="am-btn am-btn-default am-btn-xs" style="float:right" data-on="?m=goQR<%=config.isEnv ? "&env=1" : ""%>" data-url="<%=list[i].href%>">QR</button>                </li>                <%} else {%>                <li style="padding:8px" class="expand am-hide" >                  <span >                    <a data-on="?m=<%=config.isEnv ? "goEnv" : "go"%>&target=_blank" data-url="<%=list[i].href%>" title="<%=list[i].title%>">                      <img style="height:16px; width:16px" src="<%=list[i].favicon%>">  </img><%=list[i].name%>                    </a>                  </span>                <button style="display:none" type="button" class="am-btn am-btn-default am-btn-xs" style="float:right" data-on="?m=goQR<%=config.isEnv ? "&env=1" : ""%>" data-url="<%=list[i].href%>">QR</button>                </li>                <%}%>                <%}%>            </ul>        </div>    </section></div>'},n)}},function(n,t,e){"use strict";var r={string_split:e(19),string_match:e(17),string_plus__vs__array_push:e(18),white_list_good:e(21),white_list_bad:e(20),initial:e(16)},i=[{title:"字符串相关",rows:["string_match","string_split","string_plus__vs__array_push",{name:"string-startswith",href:"https://jsperf.com/string-startswith/48"}]},{title:"数据结构",rows:["initial","white_list_good","white_list_bad"]},{title:"数组相关",rows:[{name:"for vs map vs foreach vs reduce",href:"https://jsperf.com/for-map-foreach-reduce"}]}],o=0,a=[],s=location.origin+"/benchmark.html";i.forEach(function(n,t){a[o]||(a[o]=[]),a[o].push({title:n.title,rows:n.rows.map(function(n){return BCD.is.o(n)?n:{name:n,href:s+location.search+"#!/"+n}})}),t%2==1&&o++}),n.exports={benchDict:r,daohangList:a}},function(n,t){"use strict";n.exports='\n// 各种数据初始化\n[{\n  name: "Object",\n  fun: function () {\n    var a = {};\n  }\n}, {\n  name: "Object#new",\n  fun: function () {\n    var a = new Object();\n  }\n}, {\n  name: "Object#new2",\n  fun: function () {\n    var a = new Object;\n  }\n}, {\n  name: "String",\n  fun: function () {\n    var a = \'\';\n  }\n}, {\n  name: "Array",\n  fun: function () {\n    var a = [];\n  }\n}, {\n  name: "Array#new",\n  fun: function () {\n    var a = new Array;\n  }\n}, {\n  name: "Array#new2",\n  fun: function () {\n    var a = new Array();\n  }\n}, {\n  name: "Number",\n  fun: function () {\n    var a = 1.1;\n  }\n}, {\n  name: "Boolean",\n  fun: function () {\n    var a = true;\n  }\n}, {\n  name: "Boolean#Invert",\n  fun: function () {\n    var a = !0;\n  }\n}]\n'},function(n,t){"use strict";n.exports='\n// 是否包含某些字符串\n[{\n  name: "RegExp#test",\n  fun: function () {\n    /o/.test("Hello World!");\n  }\n}, {\n  name: "String#indexOf",\n  fun: function () {\n    "Hello World!".indexOf("o") > -1;\n  }\n}, {\n  name: "String#match",\n  fun: function () {\n    !!"Hello World!".match(/o/);\n  }\n}]\n'},function(n,t){"use strict";n.exports='\n// 字符串拼接形式, 模拟模板函数，一般模板大约需要拼接30段字符串\n// 需要拼接的字符串长度越长，字符串的方式越明显，push多个并不会有优势\n[{\n  name: "string plus",\n  fun: function () {\n    var str = "";\n    for(var i=10000; i<10030; i++){\n      str += i.toString();\n    }\n    return str;\n  }\n}, {\n  name: "array push",\n  fun: function () {\n    var arr = [];\n    for(var i=10000; i<10030; i++){\n      arr.push(i.toString());\n    }\n    return arr.join(\'\');\n  }\n}, {\n  name: "array push multiple",\n  fun: function () {\n    var arr = [];\n    for(var i=10000; i<10030; i++){\n      arr.push(i.toString(), (i++).toString(), (i++).toString(), (i++).toString(), (i++).toString());\n    }\n    return arr.join(\'\');\n  }\n}]\n'},function(n,t){"use strict";n.exports="\n// split的执行效率\n[{\n  name: \"RegExp#replace\",\n  fun: function () {\n    return \"%y%M%d%h%m%s\".replace(new RegExp('h'+'.*$'),'h');\n  }\n}, {\n  name: \"String#split\",\n  fun: function () {\n    var arr = \"%y%M%d%h%m%s\".split('h');\n    return arr[1] ? arr[0]+'h' : arr[0];\n  }\n}, {\n  name: \"String#indexOf\",\n  fun: function () {\n    var s = \"%y%M%d%h%m%s\";\n    return s.substring(0, (s.indexOf('h') + 1)||12);\n  }\n}]\n"},function(n,t){"use strict";n.exports='\n// 白名单策略，最差的情况（对于数组是遍历完最后一个元素）\n[{\n    name: "RegExp#test",\n    fun: function () {\n        return /m=getSignInfo|sign/.test("//liquidliang.cc/ajax?aid=20&uid=791756267&t=1492498034551");\n    }\n}, {\n    name: "RegExp#mutiple",\n    fun: function () {\n        return /m=getSignInfo|sign|m=getSignInfo|sign/.test("//liquidliang.cc/ajax?aid=20&uid=791756267&t=1492498034551");\n    }\n}, {\n    name: "array#indexOf",\n    fun: function () {\n        return [\'m=getSignInfo\', \'sign\', \'m=getSignInfo\', \'sign\'].some(function (o) {\n            return "//liquidliang.cc/ajax?aid=20&uid=791756267&t=1492498034551".indexOf(o) > -1;\n        });\n    }\n}, {\n    name: "dict#indexOf",\n    fun: function () {\n        var dict = {\n            \'m=getSignInfo\': 1,\n            \'sign\': 1\n        };\n        for (var key in dict) {\n            if ("//liquidliang.cc/ajax?aid=20&uid=791756267&t=1492498034551".indexOf(key) > -1) {\n                return true;\n            }\n        }\n        return false;\n    }\n}]\n'},function(n,t){"use strict";n.exports='\n// 白名单策略，最好的情况（对于数组是遍历到第一个元素即结束循环）\n[{\n    name: "RegExp#test",\n    fun: function () {\n        return /m=getSignInfo|sign/.test("//liquidliang.cc/ajax?m=getSignInfo&aid=20&uid=791756267&t=1492498034551");\n    }\n}, {\n    name: "RegExp#mutiple",\n    fun: function () {\n        return /m=getSignInfo|sign|m=getSignInfo|sign/.test("//liquidliang.cc/ajax?m=getSignInfo&aid=20&uid=791756267&t=1492498034551");\n    }\n}, {\n    name: "array#indexOf",\n    fun: function () {\n        return [\'m=getSignInfo\', \'sign\', \'m=getSignInfo\', \'sign\'].some(function (o) {\n            return "//liquidliang.cc/ajax?m=getSignInfo&aid=20&uid=791756267&t=1492498034551".indexOf(o) > -1;\n        });\n    }\n}, {\n    name: "dict#indexOf",\n    fun: function () {\n        var dict = {\n            \'m=getSignInfo\': 1,\n            \'sign\': 1\n        };\n        for (var key in dict) {\n            if ("//liquidliang.cc/ajax?m=getSignInfo&aid=20&uid=791756267&t=1492498034551".indexOf(key) > -1) {\n                return true;\n            }\n        }\n        return false;\n    }\n}]\n'},,,,,function(n,t){"use strict";BCD.addEvent("run_benchmark",function(n,t,e){var r=!0,i=new Worker("./source/lib/benchmark/worker.js");n.html("<div data-tips>正在执行，请稍候</div>");var o=n.find("[data-tips]");i.onmessage=function(t){var e=JSON.parse(t.data);n.append("<div data-result>"+e.msg+"</div>"),1===e.status&&(r=!1,o.hide()),console.info("worker: ",e)},i.postMessage(e.code),n.on("codemirror_blur",function(t,e){console.log("running",r),r===!1&&(r=!0,o.show(),n.find("[data-result]").remove(),i.postMessage(e))})})},function(n,t,e){"use strict";var r=e(1),i=r.load(["./source/lib/codemirror/lib/codemirror.css","./source/lib/codemirror/theme/tomorrow-night-bright.css","./source/lib/codemirror/addon/hint/show-hint.css","./source/lib/codemirror/lib/codemirror.js","./source/lib/codemirror/mode/javascript/javascript.js","./source/lib/codemirror/mode/css/css.js","./source/lib/codemirror/mode/htmlmixed/htmlmixed.js","./source/lib/codemirror/addon/hint/show-hint.js","./source/lib/codemirror/addon/hint/javascript-hint.js","./source/lib/codemirror/addon/hint/html-hint.js","./source/lib/codemirror/addon/mode/simple.js","./source/lib/codemirror/addon/display/autorefresh.js"]).then(function(){BCD.addEvent("codemirror_formate",function(n,t,e){var r=n[0];console.log(e),r.codemirror=CodeMirror(r,{mode:t.mode||"simplemode",styleActiveLine:!0,lineWrapping:!0,lineNumbers:!0,theme:"tomorrow-night-bright",value:n.html()||e&&e.code||""}),setTimeout(function(){r.codemirror.setSize("auto","auto")},100)})});n.exports=i},function(n,t,e){t=n.exports=e(3)(),t.push([n.id,"a{cursor:pointer}.QR-list p{font-size:28px}.QR-list li{float:left;width:50%;text-align:center;padding:0;margin:0;list-style:none}.QR-list canvas{display:block;margin:0 auto;border:2px solid #e0e0e0}.CodeMirror{border-top:1px solid #888;border-bottom:1px solid #888}.autocomplete-dropdown{position:absolute;z-index:10;background-color:#fff;margin-top:-1px;padding-bottom:20px;padding-left:10px;border:1px solid #ccc;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.autocomplete-dropdown,.autocomplete-dropdown input{box-sizing:border-box;width:100%}.autocomplete-dropdown ul{list-style:none;padding:0}.autocomplete-dropdown li{cursor:pointer;padding-bottom:3px;display:-webkit-box;-webkit-box-align:center;border-bottom:.1px solid #d7e8f1}.autocomplete-dropdown .left{width:30px}.autocomplete-dropdown .right{width:90%}.autocomplete-dropdown .addr{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:#7092a3}.autocomplete-dropdown .tips{text-align:center;color:#988a8a}",""])},,function(n,t,e){var r=e(28);"string"==typeof r&&(r=[[n.id,r,""]]);e(11)(r,{});r.locals&&(n.exports=r.locals)}]);
//# sourceMappingURL=benchmark.js.map