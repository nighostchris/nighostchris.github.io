(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"490r":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),i=(n("FWMk"),function(e){var t=e.children;return a.a.createElement("h1",{className:"medium-title"},t)}),c=function(e){var t=e.children;return a.a.createElement("h4",{className:"medium-subtitle"},t)},u=function(e){var t=e.children;return a.a.createElement("h1",{className:"medium-header"},t)}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},A0Nx:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("qhky"),c=n("UnL/"),u=n.n(c),o=n("igcW"),s=n("yNaH"),l=n("oE25"),f=n("lLPr"),m=n("u9mI"),p=n("490r"),d=n("EWuS"),h=n("HxSt");n("KMfB");t.default=function(){var e=a.a.useState(""),t=e[0],n=e[1];return a.a.createElement(h.a,null,a.a.createElement(i.a,null,a.a.createElement("title",null,"Chris Liu - Write Passage")),a.a.createElement("div",{className:"main-content-write-passage"},a.a.createElement("div",{className:"write-passage-left-panel"},a.a.createElement("div",{className:"jsx-block-selector"},a.a.createElement("i",{className:"fas fa-paragraph jsx-block-icon",onClick:function(){return n(t+"<NormalText></NormalText>")}}),a.a.createElement("i",{className:"fas fa-bold jsx-block-icon",onClick:function(){return n(t+"<BoldText></BoldText>")}}),a.a.createElement("i",{className:"fas fa-link jsx-block-icon",onClick:function(){return n(t+"<HyperLinkText href={``}></HyperLinkText>")}}),a.a.createElement("i",{className:"fas fa-heading jsx-block-icon",onClick:function(){return n(t+"<Header></Header>")}}),a.a.createElement("i",{className:"fas fa-code jsx-block-icon",onClick:function(){return n(t+'<Code language=""></Code>')}}),a.a.createElement("i",{className:"fas fa-file-image jsx-block-icon",onClick:function(){return n(t+'<Image src="" alt="" />')}})),a.a.createElement("textarea",{className:"passage-editor",value:t,onChange:function(e){return n(e.target.value)}})),a.a.createElement(m.a,null,a.a.createElement(u.a,{components:{Title:p.c,Subtitle:p.b,Details:f.a,BoldText:d.a,NormalText:d.c,Header:p.a,Code:o.a,HyperLinkText:d.b,Image:l.a,ButtonLink:s.a},jsx:t}))))}},BILw:function(e,t,n){},EK0E:function(e,t,n){"use strict";var r,a=n("dyZX"),i=n("CkkT")(0),c=n("KroJ"),u=n("Z6vF"),o=n("czNK"),s=n("ZD67"),l=n("0/R4"),f=n("s5qY"),m=n("s5qY"),p=!a.ActiveXObject&&"ActiveXObject"in a,d=u.getWeak,h=Object.isExtensible,v=s.ufstore,g=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(l(e)){var t=d(e);return!0===t?v(f(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return s.def(f(this,"WeakMap"),e,t)}},b=e.exports=n("4LiD")("WeakMap",g,y,s,!0,!0);m&&p&&(o((r=s.getConstructor(g,"WeakMap")).prototype,y),u.NEED=!0,i(["delete","has","get","set"],(function(e){var t=b.prototype,n=t[e];c(t,e,(function(t,a){if(l(t)&&!h(t)){this._f||(this._f=new r);var i=this._f[e](t,a);return"set"==e?this:i}return n.call(this,t,a)}))})))},EWuS:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n("q1tI"),a=n.n(r),i=(n("BILw"),n("yNaH"),function(e){var t=e.children;return a.a.createElement("p",{className:"medium-normal-text"},t)}),c=function(e){var t=e.children;return a.a.createElement("strong",{className:"medium-bold-text"},t)},u=function(e){var t=e.href,n=e.children;return a.a.createElement("a",{href:t,className:"medium-hyper-link-text"},n)}},FWMk:function(e,t,n){},I5cv:function(e,t,n){var r=n("XKFU"),a=n("Kuth"),i=n("2OiF"),c=n("y3w9"),u=n("0/R4"),o=n("eeVq"),s=n("8MEG"),l=(n("dyZX").Reflect||{}).construct,f=o((function(){function e(){}return!(l((function(){}),[],e)instanceof e)})),m=!o((function(){l((function(){}))}));r(r.S+r.F*(f||m),"Reflect",{construct:function(e,t){i(e),c(t);var n=arguments.length<3?e:i(arguments[2]);if(m&&!f)return l(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(s.apply(e,r))}var o=n.prototype,p=a(u(o)?o:Object.prototype),d=Function.apply.call(e,p,t);return u(d)?d:p}})},KMfB:function(e,t,n){},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Y1GC:function(e,t,n){},ZD67:function(e,t,n){"use strict";var r=n("3Lyj"),a=n("Z6vF").getWeak,i=n("y3w9"),c=n("0/R4"),u=n("9gX7"),o=n("SlkY"),s=n("CkkT"),l=n("aagx"),f=n("s5qY"),m=s(5),p=s(6),d=0,h=function(e){return e._l||(e._l=new v)},v=function(){this.a=[]},g=function(e,t){return m(e.a,(function(e){return e[0]===t}))};v.prototype={get:function(e){var t=g(this,e);if(t)return t[1]},has:function(e){return!!g(this,e)},set:function(e,t){var n=g(this,e);n?n[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,n,i){var s=e((function(e,r){u(e,s,t,"_i"),e._t=t,e._i=d++,e._l=void 0,null!=r&&o(r,n,e[i],e)}));return r(s.prototype,{delete:function(e){if(!c(e))return!1;var n=a(e);return!0===n?h(f(this,t)).delete(e):n&&l(n,this._i)&&delete n[this._i]},has:function(e){if(!c(e))return!1;var n=a(e);return!0===n?h(f(this,t)).has(e):n&&l(n,this._i)}}),s},def:function(e,t,n){var r=a(i(t),!0);return!0===r?h(e).set(t,n):r[e._i]=n,e},ufstore:h}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},fp3j:function(e,t,n){},iWIM:function(e,t,n){var r=n("n3AX");function a(t,n,i){return"undefined"!=typeof Reflect&&Reflect.get?e.exports=a=Reflect.get:e.exports=a=function(e,t,n){var a=r(e,t);if(a){var i=Object.getOwnPropertyDescriptor(a,t);return i.get?i.get.call(n):i.value}},a(t,n,i||t)}e.exports=a},igcW:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),i=n("uUdh"),c=n("Yw2l"),u=(n("Y1GC"),function(e){var t=e.children,n=e.language;return a.a.createElement(i.a,{language:n,style:c.a,className:"medium-code"},t)})},jm62:function(e,t,n){var r=n("XKFU"),a=n("mQtv"),i=n("aCFj"),c=n("EemH"),u=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),o=c.f,s=a(r),l={},f=0;s.length>f;)void 0!==(n=o(r,t=s[f++]))&&u(l,t,n);return l}})},lHrm:function(e,t,n){},lLPr:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),i=(n("fp3j"),function(e){var t=e.author,n=e.avatarsrc,r=e.date,i=e.length;return a.a.createElement("div",{className:"publish-details"},a.a.createElement("img",{alt:t,className:"writing-avatar",src:n}),a.a.createElement("div",{className:"publish-details-subsection"},a.a.createElement("span",{className:"writing-author"},t),a.a.createElement("span",{className:"publish-date-length"},r+" · "+i+" min read")))})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},mGWK:function(e,t,n){"use strict";var r=n("XKFU"),a=n("aCFj"),i=n("RYi7"),c=n("ne8i"),u=[].lastIndexOf,o=!!u&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(o||!n("LyE8")(u)),"Array",{lastIndexOf:function(e){if(o)return u.apply(this,arguments)||0;var t=a(this),n=c(t.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in t&&t[r]===e)return r||0;return-1}})},mQtv:function(e,t,n){var r=n("kJMx"),a=n("JiEa"),i=n("y3w9"),c=n("dyZX").Reflect;e.exports=c&&c.ownKeys||function(e){var t=r.f(i(e)),n=a.f;return n?t.concat(n(e)):t}},n3AX:function(e,t,n){var r=n("Nsbk");e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}},oE25:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),i=(n("lHrm"),function(e){var t=e.src,n=e.alt;return a.a.createElement("img",{className:"medium-image",src:t,alt:n})})},u9mI:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),i=(n("fp3j"),function(e){var t=e.children;return a.a.createElement("div",{className:"medium-container"},t)})}}]);
//# sourceMappingURL=component---src-pages-writepassage-js-b72ee6b40c8570727c8e.js.map