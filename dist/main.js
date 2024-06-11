(()=>{"use strict";var t={89:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);r&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},248:t=>{t.exports=function(t){return t[1]}},159:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(248),i=e.n(r),o=e(89),a=e.n(o)()(i());a.push([t.id,'*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\nbody,\nhtml {\n\n  height: 100vh;\n  width: 100vw;\n}\n\nbody {\n  background-color: #f5f5f5;\n  font-family: "Roboto", sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  color: #333;\n}\n\n#background-video {\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.game {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.messageContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 20%;\n}\n\n.message{\n  font-family: "Black Ops One", system-ui;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 5rem;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n  background-image: linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);\n  -webkit-text-stroke: 1px #fff;\n}\n\n.buttonContainer {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  font-family: "Schoolbell", cursive;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 2rem;\n  padding: 1rem 2rem;\n  margin: 0 1rem;\n  border: none;\n  border-radius: 5px;\n  background-color: #f5f5f5;\n  color: #333;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #333;\n  color: #f5f5f5;\n  transition:  0.3s;\n}\n\n.windowContainer {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(33,33,33,0.5);\n}\n\n.window {\n  position: absolute;\n  width: 40%;\n  height: 30%;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n}\n\n.boardContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n  width: 100%;\n  height: 60%;\n}\n\n.board{\n  display: grid;\n}\n\n#place {\n  height: 10rem;\n  width: 10rem;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n#human, #robot {\n  height: 20rem;\n  width: 20rem;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.cell{\n  padding: 0;\n  border: 1px solid rgba(255,255,255,0.211765);\n}\n\n#robot>.cell:hover:not(.miss):not(.hit){\n  background-color: rgb(233,233,233);\n  cursor: cell;\n}\n\n#human>.ship{\n  background-color: white;\n  border: 1px solid black;\n}\n\n.miss{\n  background-color: lightgreen;\n}\n\n.hit{\n  background-color: lightpink;\n}\n\n#human>.destroyer{\n  background-color: #ad1400;\n  border: 1px solid #ff0800;\n}\n\n#human>.submarine{\n  background-color: #c4980b;\n  border: 1px solid #f0d16a;\n}\n\n#human>.cruiser{\n  background-color: #379e07;\n  border: 1px solid #7af06a;\n}\n\n#human>.battleship{\n  background-color: #333fec;\n  border: 1px solid #6a89f0;\n}\n\n#human>.carrier{\n  background-color: #460699;\n  border: 1px solid #9d6af0;\n}',""]);const s=a},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var o={},a=[],s=0;s<t.length;s++){var l=t[s],u=r.base?l[0]+r.base:l[0],c=o[u]||0,h="".concat(u," ").concat(c);o[u]=c+1;var f=e(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=i(p,r);r.byIndex=s,n.splice(s,0,{identifier:h,updater:m,references:1})}a.push(h)}return a}function i(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=e(o[a]);n[s].references--}for(var l=r(t,i),u=0;u<o.length;u++){var c=e(o[u]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}o=l}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,i&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return t[r](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(72),n=e.n(t),r=e(825),i=e.n(r),o=e(659),a=e.n(o),s=e(56),l=e.n(s),u=e(540),c=e.n(u),h=e(113),f=e.n(h),p=e(159),m={};function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function v(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function b(t){var n=function(t,n){if("object"!=d(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==d(n)?n:n+""}m.styleTagTransform=f(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=c(),n()(p.A,m),p.A&&p.A.locals&&p.A.locals;var g=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.players=function(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return y(t,n);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n),this.currentPlayer=null,this.winner=null,this.gameOn=!1}var n,e;return n=t,e=[{key:"changeGameStatus",value:function(){this.gameOn=!this.gameOn}},{key:"initGame",value:function(){this.players.forEach((function(t){t.initMap(),t.initShip(),t.initShipOnMap()})),this.currentPlayer=this.players[0]}},{key:"determineTurns",value:function(){this.currentPlayer=this.currentPlayer===this.players[0]?this.players[1]:this.players[0]}},{key:"receiveAttack",value:function(t,n){this.currentPlayer.attack(t,n,this.players[1]),this.players[1].attackRobot(this.players[0]),this.determineTurns()}},{key:"checkWin",value:function(){var t=this.players.find((function(t){return t.ships.every((function(t){return!0===t.sunk}))}));return this.winner=this.players.find((function(n){return n!==t})),this.players[0].ships.every((function(t){return!0===t.sunk}))||this.players[1].ships.every((function(t){return!0===t.sunk}))}},{key:"animateBoard",value:function(){for(var t=this,n=0;n<this.players.length;n++)for(var e=document.querySelector("#".concat(this.players[n].name)),r=function(r){for(var i=function(i){var o=document.createElement("div");o.dataset.x=r,o.dataset.y=i,o.classList.add("cell"),"hit"===t.players[n].map[r][i]?o.classList.add("hit"):"miss"===t.players[n].map[r][i]?o.classList.add("miss"):"ship"===t.players[n].map[r][i]&&(o.classList.add("".concat(t.players[n].ships.find((function(t){return t.coordinates.some((function(t){return t[0]===r&&t[1]===i}))})).type)),o.classList.add("ship")),e.appendChild(o)},o=0;o<t.players[n].map[r].length;o++)i(o)},i=0;i<this.players[n].map.length;i++)r(i)}},{key:"cleanBoard",value:function(){for(var t=0;t<this.players.length;t++)for(var n=document.querySelector("#".concat(this.players[t].name));n.firstChild;)n.removeChild(n.firstChild)}}],e&&v(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();const k=g;function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,x(r.key),r)}}function x(t){var n=function(t,n){if("object"!=w(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==w(n)?n:n+""}const A=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.length=n,this.type=e,this.hitCount=null,this.sunk=!1,this.coordinates=[]}var n,e;return n=t,(e=[{key:"hit",value:function(){1!=this.sunk&&this.hitCount++,this.isSunk()}},{key:"isSunk",value:function(){this.hitCount===this.length?this.sunk=!0:this.sunk=!1}}])&&S(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function M(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;l=!1}else for(;!(l=(r=o.call(e)).done)&&(s.push(r.value),s.length!==n);l=!0);}catch(t){u=!0,i=t}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}(t,n)||j(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,n){if(t){if("string"==typeof t)return O(t,n);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?O(t,n):void 0}}function O(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function E(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,P(r.key),r)}}function P(t){var n=function(t,n){if("object"!=C(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==C(n)?n:n+""}const z=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.map=[],this.name=n,this.ships=[],this.previousAttack=[],this.futureAttack=[],this.previousAttackDirection=null}var n,e;return n=t,e=[{key:"initMap",value:function(){this.ships=[];for(var t=0;t<10;t++){this.map.push([]);for(var n=0;n<10;n++)this.map[t].push(null)}}},{key:"initShip",value:function(){var t=this;[{size:5,name:"carrier"},{size:4,name:"battleship"},{size:3,name:"cruiser"},{size:3,name:"submarine"},{size:2,name:"destroyer"}].forEach((function(n){return t.ships.push(new A(n.size,n.name))}))}},{key:"initShipOnMap",value:function(){var t=this;this.ships.forEach((function(n){for(var e=Math.floor(10*Math.random()),r=Math.floor(10*Math.random()),i=Math.random()<.5?"horizontal":"vertical";!t.checkIfShipAround(n,e,r,i);)e=Math.floor(10*Math.random()),r=Math.floor(10*Math.random()),i=Math.random()<.5?"horizontal":"vertical";t.placeShip(n,e,r,i)}))}},{key:"checkIfShipAround",value:function(t,n,e,r){if("horizontal"===r)for(var i=0;i<t.length;i++){if(e+i>=this.map[0].length||n<0||n>=this.map.length)return!1;if(null!==this.map[n][e+i]||n-1>=0&&null!==this.map[n-1][e+i]||n+1<this.map.length&&null!==this.map[n+1][e+i])return!1;if(n-1>=0&&e+i-1>=0&&null!==this.map[n-1][e+i-1]||n-1>=0&&e+i+1<this.map[0].length&&null!==this.map[n-1][e+i+1]||n+1<this.map.length&&e+i-1>=0&&null!==this.map[n+1][e+i-1]||n+1<this.map.length&&e+i+1<this.map[0].length&&null!==this.map[n+1][e+i+1])return!1;if(e-1>=0&&null!==this.map[n][e-1]||e+t.length<this.map[0].length&&null!==this.map[n][e+t.length])return!1}else for(var o=0;o<t.length;o++){if(n+o>=this.map.length||e<0||e>=this.map[0].length)return!1;if(null!==this.map[n+o][e]||e-1>=0&&null!==this.map[n+o][e-1]||e+1<this.map[0].length&&null!==this.map[n+o][e+1])return!1;if(n+o-1>=0&&e-1>=0&&null!==this.map[n+o-1][e-1]||n+o-1>=0&&e+1<this.map[0].length&&null!==this.map[n+o-1][e+1]||n+o+1<this.map.length&&e-1>=0&&null!==this.map[n+o+1][e-1]||n+o+1<this.map.length&&e+1<this.map[0].length&&null!==this.map[n+o+1][e+1])return!1;if(n-1>=0&&null!==this.map[n-1][e]||n+t.length<this.map.length&&null!==this.map[n+t.length][e])return!1}return!0}},{key:"checkWhichShip",value:function(t,n){return this.ships.find((function(e){return e.coordinates.some((function(e){return e[0]===t&&e[1]===n}))}))}},{key:"placeShip",value:function(t,n,e,r){if("horizontal"===r)for(var i=0;i<t.length;i++)t.coordinates.push([n,e+i]),this.map[n][e+i]="ship";else for(var o=0;o<t.length;o++)t.coordinates.push([n+o,e]),this.map[n+o][e]="ship"}},{key:"attack",value:function(t,n,e){null===e.map[t][n]?e.map[t][n]="miss":"ship"===e.map[t][n]&&(e.map[t][n]="hit",e.checkWhichShip(t,n).hit())}},{key:"robotAttack",value:function(t,n,e){if(null===e.map[t][n])e.map[t][n]="miss";else if("ship"===e.map[t][n]){e.map[t][n]="hit";var r=e.checkWhichShip(t,n);this.algorithmAttack(t,n,e),r.hit()}}},{key:"attackRobot",value:function(t){if(this.futureAttack.length>0){var n=M(this.futureAttack.shift(),2),e=n[0],r=n[1];this.robotAttack(e,r,t)}else{console.log("this is random"),this.previousAttackDirection=null,this.previousAttack=[];for(var i=Math.floor(10*Math.random()),o=Math.floor(10*Math.random());"miss"===t.map[i][o]||"hit"===t.map[i][o];)i=Math.floor(10*Math.random()),o=Math.floor(10*Math.random());this.robotAttack(i,o,t)}}},{key:"algorithmAttack",value:function(t,n,e){var r=[[-1,0,"up"],[1,0,"down"],[0,-1,"left"],[0,1,"right"]];if("hit"===e.map[t][n]&&this.previousAttack.length>0){var i=M(this.previousAttack.pop(),2),o=i[0],a=i[1];o===t?(this.previousAttackDirection="horizontal",this.futureAttack=this.futureAttack.filter((function(n){return n[0]===t})),r=r.splice(2,2)):a===n&&(this.previousAttackDirection="vertical",this.futureAttack=this.futureAttack.filter((function(t){return t[1]===n})),r=r.splice(0,2))}console.log(r);var s,l=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=j(t))){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==e.return||e.return()}finally{if(s)throw o}}}}(r);try{for(l.s();!(s=l.n()).done;){var u=M(s.value,3),c=u[0],h=u[1],f=u[2],p=t+c,m=n+h;p>=0&&p<e.map.length&&m>=0&&m<e.map[0].length&&"miss"!==e.map[p][m]&&"hit"!==e.map[p][m]&&this.futureAttack.push([p,m,f])}}catch(t){l.e(t)}finally{l.f()}0===this.futureAttack.length&&(this.previousAttack=[]),this.previousAttack.push([t,n])}}],e&&E(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();var T,L=document.querySelector(".windowContainer"),I=document.querySelector(".window"),B=document.querySelector(".window>button"),q=document.querySelector(".window>h1"),G=document.querySelector(".messageContainer>h1"),W=document.querySelector(".boardContainer>#robot");function D(){var t=new z("human"),n=new z("robot");(T=new k([t,n])).initGame(),T.cleanBoard(),T.animateBoard(),T.changeGameStatus(),G.textContent="Battleship",q.textContent="Welcome to BattleShip Game",B.textContent="Start Game",B.classList.add("startButton")}B.addEventListener("click",(function(){B.classList.contains("startButton")?(I.style.display="none",L.style.display="none",q.textContent="",B.textContent="",B.classList.remove("startButton")):B.classList.contains("resetButton")&&(B.classList.remove("resetButton"),D())})),W.addEventListener("mousedown",(function(t){if(T.gameOn&&!t.target.classList.contains("hit")&&!t.target.classList.contains("miss")&&"undefined"!==t.target.dataset.x&&"undefined"!==t.target.dataset.y){var n=parseInt(t.target.dataset.x),e=parseInt(t.target.dataset.y);T.receiveAttack(n,e),T.cleanBoard(),T.animateBoard(),T.checkWin()&&T.changeGameStatus()}})),document.addEventListener("click",(function(){T.gameOn||(I.style.display="flex",L.style.display="flex",L.style.backgroundColor="rgb(33,33,33,0.5)",q.textContent="".concat(T.winner.name," wins!"),B.textContent="Play Again?",B.classList.add("resetButton"))})),D()})()})();