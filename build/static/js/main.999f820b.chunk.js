(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(74)},41:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){var a={"./exchange/exchange.api.js":75};function r(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=49},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),o=n.n(c),i=n(6),l=n(7),u=n(9),s=n(8),m=n(10),f=n(78),d=n(80),p=n(79),h=n(81),v=(n(41),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={source:null},n.getData=function(){r.a.commonHandler.api.exchange.getLast10Articles({categoryCode:"important_notice"}).then(function(e){n.setState({source:e})})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.source;return r.a.createElement("div",null,r.a.createElement("h1",null,"\u6211\u662f\u9996\u9875"),r.a.createElement("button",{onClick:this.getData},"\u6d4b\u8bd5\u4e00\u4e2a\u8bf7\u6c42"),r.a.createElement("input",null),e&&e.map(function(e){return r.a.createElement("span",null,JSON.stringify(e))}))}}]),t}(r.a.PureComponent)),b=n(22),g=n.n(b),E=n(33),y=function(){return r.a.createElement("div",null,"\u5934\u90e8")},j=n(11),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.dispatch;return r.a.createElement("div",null,r.a.createElement("p",null,"\u4e2d\u95f4\u7684\u6b63\u6587"),r.a.createElement("button",{onClick:function(){return e({type:"\u6da8\u5de5\u8d44"})}},"\u6323\u94b1")," ",r.a.createElement("button",{onClick:function(){return e({type:"\u6263\u5de5\u8d44"})}},"\u82b1\u94b1"),r.a.createElement("hr",null),r.a.createElement("button",{onClick:function(){e({type:"change",val:{id:2,name:"\u88e4\u5b50\ud83d\udc56",price:"122.81"}})}},"\u5c06\u88e4\u5b501\u52a0\u5165\u8d2d\u7269\u8f66"),"    ",r.a.createElement("button",{onClick:function(){e({type:"change",val:{id:3,name:"\u88e4\u5b50\ud83d\ude01",price:"152.0093"}})}},"\u5c06\u88e4\u5b502\u52a0\u5165\u8d2d\u7269\u8f66"))}}]),t}(r.a.PureComponent),w=Object(j.b)()(O),k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tiger,n=e.car,a=e.totalPrice;return r.a.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"center"}},r.a.createElement("h3",null,"\u5e95\u90e8,\u94b1\u5305\u4f59\u989d\uff1a\u201c",t,"\u201d "),r.a.createElement("div",{style:{width:"50%"}},"\u8d2d\u7269\u8f66\u5217\u8868","(\u5408\u8ba1\uff1a".concat(a," \xa5)"),r.a.createElement("ul",null,n&&n.length>0&&n.map(function(e,t){return r.a.createElement("li",{key:e.id},"\u540d\u79f0\uff1a".concat(e.name,"  \u4ef7\u683c\uff1a").concat(e.price,"  \u6570\u91cf\uff1ax").concat(e.count||1)," ",r.a.createElement("a",{href:"void:0"},"\u5220\u9664"))}))))}}]),t}(r.a.PureComponent),x=Object(j.b)(function(e){return{tiger:e.reducer,car:e.carFn.goods,totalPrice:e.carFn.totalPrice}})(k),C=(n(48),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"exchangeBody"},r.a.createElement("div",null,r.a.createElement(y,null)),r.a.createElement("div",null,r.a.createElement(w,null)),r.a.createElement("div",null," ",r.a.createElement(x,null)," "))}}]),t}(r.a.PureComponent)),P=[{path:"/home",name:"\u9996\u9875",component:v},{path:"/exchange",name:"\u529f\u80fd\u9996\u9875",component:Object(j.b)(function(e){return{tiger:e.reducer,car:e.carFn}})(C)},{path:"/about",name:"\u5173\u4e8e",component:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u5173\u4e8e\u6211\u4eec"),r.a.createElement("button",{onClick:function(){(function(){var e=Object(E.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:alert("123");case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}})()(),console.log("\u51c6\u5907\u5f00\u59cb"),console.log("\u51c6\u5907\u5f00\u59cb")}},"\u5403\u996d"))}}],A=n(49),F={};A.keys().forEach(function(e){var t=void 0;try{t=A(e).default}catch(c){throw Error("".concat(e,":").concat(c))}if(void 0===t)throw Error("".concat(e,":\u5185\u6ca1\u6709 export default"));if("object"!=typeof t.apis)throw Error("".concat(e,":apis\u6709\u8bef"));var n=e.lastIndexOf("/"),a=e.slice(n+1).replace(".api.js",""),r=t.name&&"string"===typeof t.name?t.name:a;F[r]=t.apis});var D=F;r.a.commonHandler={jcTest:function(){return alert("Test")},api:D},window.addEventListener("hashchange",function(e){console.log("=>",e)});var L=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{background:"green",display:"flex",width:"90%",padding:"10px",margin:"20px auto"}},P&&P.length>0&&P.map(function(e,t){return r.a.createElement("a",{key:t,style:{color:"RGBA(255,255,255,0.75)",margin:5},href:"#".concat(e.path)},e.name)})),r.a.createElement("div",{style:{border:"1px solid red",width:"90%",minHeight:500,margin:"20px auto"}},r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(d.a,{to:"/home"})}}),r.a.createElement(h.a,null,P&&P.length>0&&P.map(function(e){return r.a.createElement(f.a,Object.assign({key:e.path},e))}))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(35),B=n(13),T={goods:[{id:1,name:"\u8863\u670d\ud83d\udc54",price:"188.00",count:1}],totalPrice:188},H=Object(B.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;switch((arguments.length>1?arguments[1]:void 0).type){case"\u6da8\u5de5\u8d44":return e+100;case"\u6263\u5de5\u8d44":return e-100;default:return e}},carFn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"change":var n=[].concat(Object(N.a)(e.goods),[t.val]),a=0;return n.forEach(function(e){a+=(e.price||0)*(e.count||1)}),{goods:n,totalPrice:a.toFixed(2)};default:return e}}}),I=Object(B.c)(H);o.a.render(r.a.createElement(j.a,{store:I},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n.n(a);t.default={name:"exchange",apis:{getLast10Articles:function(e){return function(e,t){if(t.method){r.a.defaults.headers={"X-Token":"zh,1072477336055582722,35915c18f04949b3a09e3efc1c28f40d,1,e514f9a54f8e54eaad66079de3ab01ae71f148075d36955db910049e47812389"},r.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),r.a.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});var n=null;return"post"===t.method?n=t.params:"get"===t.method&&(n={params:t.params}),new Promise(function(a,c){r.a[t.method](e,n).then(function(e){!function(e){e.data}(e),a(e.data)}).catch(function(e){c(e)})})}}("/plat/cms/c/web/getLast10Articles",{method:"post",params:e})}}}}},[[36,1,2]]]);
//# sourceMappingURL=main.999f820b.chunk.js.map