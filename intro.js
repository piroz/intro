!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.timer=null}return r(e,[{key:"start",value:function(e,t){this.timer=setInterval(function(){t()},e)}},{key:"stop",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}}]),e}(),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._key="introFlag",this._flag=sessionStorage.getItem(this._key)}return o(e,[{key:"flag",get:function(){return this._flag},set:function(e){this._flag=!!e,sessionStorage.setItem(this._key,this._flag)}}]),e}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(void 0===window.intro_messages||!intro_messages instanceof Array)&&(window.intro_messages=["Loading..."]),this.splitToCharactors()}return s(e,[{key:"splitToCharactors",value:function(){var e=this;this.chars=[];for(var t=function(t,n){var r=intro_messages[t],i="intro-message-item_row"+t;r.split("").map(function(t){var n=document.createElement("span");n.classList.add("intro-message-item-char");var r=document.createTextNode(t);n.appendChild(r),e.chars.push({identity:i,elem:n})})},n=0,r=intro_messages.length;n<r;n++)t(n)}},{key:"next",value:function(){return this.chars.shift()}}]),e}(),c=(n(7),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}());var l=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.reminder=t,this.timer=n,this.messages=r,this.setupEvents()}return c(e,[{key:"isSkipIntro",value:function(){return null!==location.search.match(/nointro=1/)}},{key:"setupEvents",value:function(){var e=this;document.addEventListener("DOMContentLoaded",function(t){e.isSkipIntro()||e.reminder.flag||e.start()}),window.addEventListener("load",function(t){e.restoreVisibility(),e.isSkipIntro()||e.reminder.flag||e.showSkip()})}},{key:"start",value:function(){var e=this,t=document.createElement("div");t.id="intro_loader",document.querySelector("body").appendChild(t),this.timer.start(100,function(){var n,r=e.messages.next(),i=void 0;void 0!==r?(null===(n=document.querySelector("#"+r.identity))?((i=document.createElement("p")).classList.add("intro-message-item"),i.id=r.identity,t.appendChild(i)):i=n,i.appendChild(r.elem),r.elem.classList.add("intro-message-item-char-active")):e.show()})}},{key:"show",value:function(){var e=this;this.reminder.flag=!0,document.querySelector("#intro_loader").classList.add("intro-fade-disappear"),setTimeout(function(){document.querySelector("#intro_loader").classList.add("intro-fade-disappear-active"),e.timer.stop(),setTimeout(function(){document.querySelector("#intro_loader")&&document.querySelector("#intro_loader").remove()},1e3)},500)}},{key:"restoreVisibility",value:function(){var e=document.createElement("style");e.setAttribute("type","text/css"),document.getElementsByTagName("head").item(0).appendChild(e),e.sheet.insertRule("\nbody > * {\n\tvisibility: visible;\n}",0)}},{key:"showSkip",value:function(){var e=this,t=document.getElementById("intro_loader"),n=document.createElement("a"),r=document.createTextNode("skip");n.appendChild(r),n.classList.add("skip"),n.addEventListener("click",function(){e.show()}),t.appendChild(n)}}]),e}();new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.reminder=new a,this.timer=new i,this.messages=new u,this.loader=new l(this.reminder,this.timer,this.messages)}},function(e,t){},,,,,function(e,t){}]);