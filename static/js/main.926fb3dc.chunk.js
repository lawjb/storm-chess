(this["webpackJsonpstorm-chess"]=this["webpackJsonpstorm-chess"]||[]).push([[0],{17:function(e,n,t){e.exports=t(25)},22:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(10),c=t.n(o),i=(t(22),t(3)),u=t(4),l=t(6),s=t(11),f=t.n(s),m=t(8),v=t(12),d=t(13),h=["a1","a2","a3","a4","a5","a6","a7","a8","h1","h2","h3","h4","h5","h6","h7","h8","b1","c1","d1","e1","f1","g1","b8","c8","d8","e8","f8","g8","b2","b3","b4","b5","b6","b7","g2","g3","g4","g5","g6","g7","c2","d2","e2","f2","c7","d7","e7","f7","c3","d3","e3","f3","c6","d6","e6","f6","c4","c5","f4","f5","d4","e4","d5","e5"],g=new(t.n(d).a),p=[15,25,35,45],b=function(){var e=0,n=!1,t=h,r=[];function a(){return g.half_moves>=100||o()||g.in_stalemate()||g.insufficient_material()||g.in_threefold_repetition()}function o(){for(var e=0,n=0;n<t.length;n++)e+=c(t[n]).length;return 0===e}function c(n){var r=[],a=t.slice();if(Math.floor(g.history().length/2)+1===p[e]){var o=16-4*e;if(e>=2&&(o=20-4*e),a.splice(0,o).some((function(e){var n=g.get(e);return n&&"k"===n.type&&n.color===g.turn()}))){var c=g.get(n);c&&"k"!==c.type&&(a=[])}}var i,u=g.moves({square:n,verbose:!0}),l=Object(v.a)(u);try{for(l.s();!(i=l.n()).done;){var s=i.value;a.includes(s.to)&&r.push(s.to)}}catch(f){l.e(f)}finally{l.f()}return r}function i(){var n=16-4*e;e>=2&&(n=20-4*e);for(var a=0;a<n;a++)g.remove(t[a]);r=t.splice(0,n),e+=1}return Object(m.a)(Object(m.a)({},g),{},{in_checkmate:o,game_over:a,move:function(t){var r=t.sourceSquare,o=t.targetSquare,u=g.turn(),l=Math.floor(e/2);if(c(r).includes(o)){if(g.move({from:r,to:o,promotion:"q"}),o.includes((l+1).toString())||o.includes((8-l).toString())){var s=g.get(o);s&&"p"===s.type&&(g.remove(o),g.put({type:"q",color:u},o))}p.includes(g.history().length/2)&&i(),n=a()}},moves:c,zap:i,stormLevel:e,gameOver:n,liveSquares:t,zappedSquares:r})},S={background:"radial-gradient(circle, #fffc00 36%, transparent 40%)",borderRadius:"50%"};function y(){var e=Object(r.useState)(new b),n=Object(l.a)(e,1)[0],t=Object(r.useState)({}),o=Object(l.a)(t,2),c=o[0],i=o[1];Object(r.useEffect)((function(){n.stormLevel}),[n.stormLevel]);return a.a.createElement(f.a,{position:n.fen(),squareStyles:c,onMouseOverSquare:function(e){var t=n.moves(e);i(Object.fromEntries(t.map((function(e){return[e,S]}))))},onMouseOutSquare:function(){i({})},onDrop:function(e){var t=e.sourceSquare,r=e.targetSquare;n.move({sourceSquare:t,targetSquare:r})}})}function q(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 16px;\n"]);return q=function(){return e},e}function O(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: calc(10px + 2vmin);\n  margin: 16px;\n"]);return O=function(){return e},e}var j=u.a.header(O()),E=u.a.main(q());var w=function(){return a.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.a.createElement(j,null,a.a.createElement("div",null,"Storm Chess")),a.a.createElement(E,null,a.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.926fb3dc.chunk.js.map