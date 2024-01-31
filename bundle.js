(()=>{"use strict";var t={905:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(81),i=n.n(r),o=n(645),s=n.n(o)()(i());s.push([t.id,"div.gameboard {\n  --gap: 0.65vh;\n  display: flex;\n  flex-direction: column;\n  width: 40vh;\n  height: 40vh;\n  gap: var(--gap);\n  background-color: #2f415a;\n  padding: var(--gap);\n}\n\ndiv.gameboard > div.row {\n  display: flex;\n  flex-direction: row;\n  gap: var(--gap);\n  flex-grow: 1;\n}\n\ndiv.gameboard > div.row > div {\n  flex-grow: 1;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n",""]);const a=s},28:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(81),i=n.n(r),o=n(645),s=n.n(o)()(i());s.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap);"]),s.push([t.id,'body,\ndiv.container {\n  display: flex;\n  flex-direction: column;\n  background-color: #474f7a;\n  align-items: center;\n}\n\ndiv.container {\n  gap: 1em;\n  padding: 1em;\n  width: fit-content;\n}\n\nbutton {\n  background-color: #b4b4b4;\n  padding: 0.5em 2em;\n  border: none;\n  border-radius: 10px;\n}\n\ndiv.top {\n  height: 5vh;\n  align-self: stretch;\n}\n\ndiv.controls {\n  position: relative;\n  display: flex;\n  justify-content: space-evenly;\n}\n\ndiv.game-over {\n  top: 0;\n  position: relative;\n  font-family: "Sawarabi Mincho";\n  font-size: x-large;\n  text-align: center;\n}\n\n.hidden {\n  display: none !important;\n}\n',""]);const a=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},91:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},s=[],a=0;a<t.length;a++){var c=t[a],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=i(p,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var a=n(o[s]);e[a].references--}for(var c=r(t,i),l=0;l<o.length;l++){var d=n(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},225:(t,e,n)=>{t.exports=n.p+"2cbf407a194514f16f4b.svg"},979:(t,e,n)=>{t.exports=n.p+"a43a163ab24d88301002.svg"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!t;)t=r[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(91),e=n.n(t),r=new URL(n(979),n.b),i=new URL(n(225),n.b);const o='<div class="container"> <div class="top"> <div class="controls"> <button id="shuffle"> <img src="'+e()(r)+'" alt="shuffle"/> </button> <button id="start"> <img src="'+e()(i)+'" alt="play"/> </button> </div> <div class="game-over hidden"></div> </div> <div class="my-gameboard"></div> <div class="enemy-gameboard"></div> </div> ';var s=n(379),a=n.n(s),c=n(795),l=n.n(c),d=n(569),u=n.n(d),h=n(565),p=n.n(h),f=n(216),m=n.n(f),v=n(589),g=n.n(v),b=n(28),y={};y.styleTagTransform=g(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=m(),a()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;var w=n(905),x={};x.styleTagTransform=g(),x.setAttributes=p(),x.insert=u().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=m(),a()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals;const S=n.p+"8cf70ba960f613826190.png",k=n.p+"f6fd07f532f51a3f833a.png",T=n.p+"b8479c20e99bfe97d82c.png",M=n.p+"74d8cb1a047e360b2ce9.png";class A{grid;constructor(t,e,n){this.grid=new Array(t),e.classList.add("gameboard");for(let r=0;r<t;++r){this.grid[r]=new Array(t);const i=document.createElement("div");i.classList.add("row");for(let e=0;e<t;++e){const t=document.createElement("div");t.style.backgroundImage=`url(${S})`,n&&t.addEventListener("click",(()=>n.makeMove(r,e))),i.appendChild(t),this.grid[r][e]=t}e.appendChild(i)}}updateCell(t,e,n){let r;r=n.isHit?null==n.ship?k:T:null==n.ship?S:M,this.grid[t][e].style.backgroundImage=`url(${r})`}}class E{length;hits;constructor(t){this.length=t,this.hits=0}hit(){this.hits++}isSunk(){return this.hits==this.length}}class H{#t;#e;constructor(t){this.notifyElement=t,this.#t=null,this.#e=!1}set ship(t){this.#t=t,this.notifyElement(this)}get ship(){return this.#t}set isHit(t){this.#e=t,this.notifyElement(this)}get isHit(){return this.#e}}class P{board;size;ships;floatingShips;constructor(t,e){this.size=t,this.board=new Array(t);for(let n=0;n<t;++n){this.board[n]=new Array(t);for(let r=0;r<t;++r)this.board[n][r]=new H((t=>e.updateCell(n,r,t)))}this.ships=new Array,this.floatingShips=0}clear(){for(const t of this.board)for(const e of t)e.ship=null,e.isHit=!1;this.ship=[],this.floatingShips=0}placeShip(t,e,n,r){for(let i=0;i<t;++i){const t=r?e:e+i,o=r?n+i:n;if(0>t||t>=this.size||0>o||o>=this.size||null!=this.board[t][o].ship)return!1}const i=new E(t);this.ships.push(i);for(let o=0;o<t;++o){const t=r?e:e+o,s=r?n+o:n;this.board[t][s].ship=i}return++this.floatingShips,!0}receiveAttack(t,e){const n=this.board[t][e];n.isHit||(n.isHit=!0,null!=n.ship&&(n.ship.hit(),n.ship.isSunk()&&--this.floatingShips))}areAllSunk(){return 0==this.floatingShips}}class C{turn;game;enemyGameboard;constructor(){this.turn=!1}configure(t,e){this.game=t,this.enemyGameboard=e}setTurn(){this.turn=!0}makeMove(t,e){return!(!this.turn||this.enemyGameboard.board[t][e].isHit||(this.enemyGameboard.receiveAttack(t,e),this.turn=!1,this.game.turnFinished(),0))}}function L(t){return Math.floor(t*Math.random())}function G(t,e){t.clear();for(let n in e)for(let r=0;r<e[n];++r)for(;!t.placeShip(n,L(t.size),L(t.size),Math.random()>=.5););}document.body.innerHTML=o;const I={2:1,3:2,4:1,5:1},Z=document.querySelector("div.my-gameboard"),z=document.querySelector("div.enemy-gameboard"),j=new C,q=new class extends C{setTurn(){super.setTurn();const t=this.enemyGameboard.board,e=t.length;let n=!1;const r=function(e,n){for(const[r,i]of[[e+1,n],[e-1,n],[e,n+1],[e,n-1]]){if(null==t[r]||null==t[r][i])continue;const e=t[r][i];if(e.isHit&&null!=e.ship)return!0}return!1};let i=[];for(let o=0;o<e;++o)for(let s=0;s<e;++s){const e=r(o,s);t[o][s].isHit||(n?e&&i.push([o,s]):e?(n=!0,i=[[o,s]]):i.push([o,s]))}console.log(i);const o=i[Math.floor(Math.random()*i.length)];this.makeMove(...o)}},N=new class extends A{updateCell(t,e,n){n.isHit&&super.updateCell(t,e,n)}}(10,Z,j),F=new P(10,new A(10,z)),R=new P(10,N),U=new class{constructor(t){let{gameboard1:e,gameboard2:n,player1:r,player2:i,onGameover:o}=t;r.configure(this,n),i.configure(this,e),this.currentPlayer=r,this.nextPlayer=i,this.onGameover=o,this.started=!1}start(){this.started||(this.started=!0,this.currentPlayer.setTurn())}turnFinished(){if(this.currentPlayer.enemyGameboard.areAllSunk())return void this.onGameover(this.currentPlayer);const t=this.currentPlayer;this.currentPlayer=this.nextPlayer,this.nextPlayer=t,this.currentPlayer.setTurn()}}({gameboard1:F,gameboard2:R,player1:j,player2:q,onGameover:function(t){const e=document.querySelector("div.game-over");e.innerText=t===j?"You won!":"You lost!",e.classList.remove("hidden")}});function $(){U.started||(G(F,I),G(R,I))}$(),document.querySelector("button#shuffle").addEventListener("click",$),document.querySelector("button#start").addEventListener("click",(function(){U.start(),document.querySelector("div.controls").classList.add("hidden")}))})()})();