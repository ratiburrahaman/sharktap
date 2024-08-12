/*! For license information please see main.6d415ae794a6d323939a.js.LICENSE.txt */
!function(t){function e(e){for(var r,c,a=e[0],u=e[1],s=e[2],l=0,p=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={0:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var f=u;i.push([121,1]),n()}({121:function(t,e,n){n(122),t.exports=n(310)},310:function(t,e,n){"use strict";n.r(e);n(308);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(u,Phaser.Scene);var e,n,r,a=c(u);function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),a.call(this,{key:"BootScene"})}return e=u,(n=[{key:"preload",value:function(){this.load.image("click-circle","./assets/images/click-circle.png"),this.load.image("charecter","./assets/images/charecter.png"),this.load.image("bottom","./assets/images/bottom.png"),this.load.image("top","./assets/images/top.png"),this.load.image("coin-icon","./assets/images/coin.png")}},{key:"create",value:function(){}},{key:"update",value:function(){this.scene.start("GameScene")}}])&&o(e.prototype,n),r&&o(e,r),u}();function f(t){return t.sys.canvas.width/2}function l(t){return t.sys.canvas.height/2}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?g(t):e}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(i,Phaser.Scene);var e,n,r,o=d(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),v(g(t=o.call(this,"GameScene")),"coinText",void 0),v(g(t),"coin",void 0),v(g(t),"maxEnergy",void 0),v(g(t),"currectEnergy",void 0),t}return e=i,(n=[{key:"init",value:function(){}},{key:"create",value:function(){var t=this;this.coin=0,this.maxEnergy=3e3,this.currectEnergy=3e3;var e=this.add.image(f(this),l(this),"charecter").setDepth(2);this.add.rectangle(f(this)-250,l(this)+500,500,40,2036106).setOrigin(0,.5);var n,r=this.add.rectangle(f(this)-250,l(this)+500,500,40,6599967).setOrigin(0,.5),o=this.add.text(f(this),l(this)+570,"ENERGY: 3000 per day",{fontStyle:"bold",fontFamily:"font",fontSize:"40px"}).setOrigin(.5);this.add.image(f(this),l(this),"click-circle").setInteractive().on("pointerdown",(function(){t.tweens.add({targets:e,scaleY:.85,scaleX:1.1,yoyo:!0,duration:50}),t.coin++,t.coinText.setText("".concat(t.coin)),t.coinEffect(),t.currectEnergy--,r.scaleX=t.currectEnergy/t.maxEnergy,o.text="ENERGY: ".concat(t.currectEnergy," per day")})),this.add.image(f(this),(n=this,n.sys.canvas.height-130),"bottom").setScale(1.2),this.add.image(f(this),430,"top").setScale(1.3),this.add.image(f(this)-150,300,"coin-icon").setScale(.7),this.coinText=this.add.text(f(this)-70,300,"0",{fontSize:"120px",fontFamily:"font",fontStyle:"bold"}).setOrigin(0,.5)}},{key:"coinEffect",value:function(){var t,e=this.add.image((t=this,t.sys.canvas.width+100),l(this)+300,"coin-icon").setScale(.6);this.tweens.add({targets:e,x:this.coinText.x,y:this.coinText.y,duration:200,alpha:.5,onComplete:function(){e.destroy()}})}}])&&y(e.prototype,n),r&&y(e,r),i}(),w={type:Phaser.AUTO,parent:"game",backgroundColor:"#141d26",width:1080,height:1920,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},scene:[s,O]};new Phaser.Game(w)}});