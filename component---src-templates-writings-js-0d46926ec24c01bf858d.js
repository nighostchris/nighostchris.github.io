(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/e88":function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"AAI/":function(e,a,t){},HxSt:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=(t("AAI/"),t("xfY5"),t("+ZDr")),s=t.n(l);t("lw3w"),t("emEt").default.enqueue,n.a.createContext({});var c=function(e){var a=e.children,t=e.to;return n.a.createElement(s.a,{to:t,className:"custom-link",activeClassName:"custom-link-active",partiallyActive:"/"!==t},a)},i=(t("mDKW"),function(){return n.a.createElement("div",{className:"sidebar"},n.a.createElement("div",{className:"sidebar-top"},n.a.createElement("a",{href:"/"},n.a.createElement("img",{src:"/sidebar-logo.png",alt:"sidebar-logo"})),n.a.createElement("hr",{className:"sidebar-top-divider"}),n.a.createElement("p",{className:"sidebar-top-subtitle"},"Software Developer")),n.a.createElement("div",{className:"sidebar-middle"},n.a.createElement("nav",null,n.a.createElement("ul",{className:"sidebar-ul"},["home","skills","projects","work & edu","writings"].map((function(e,a){return n.a.createElement("li",{className:"sidebar-li"},n.a.createElement(c,{to:0===a?"/":3===a?"/workneducation/":"/"+e+"/"},e))}))))),n.a.createElement("div",{className:"sidebar-bottom"},n.a.createElement("p",{className:"sidebar-bottom-email"},"In case you want to contact me, just go for ",n.a.createElement("strong",null,"chrisliupascal@gmail.com")),n.a.createElement("hr",{className:"sidebar-top-divider"}),n.a.createElement("ul",{className:"sidebar-ul sidebar-bottom-ul"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/nighostchris",className:"sidebar-bottom-li-a"},n.a.createElement("i",{className:"fab fa-github sidebar-icon",style:{margin:"0px"}}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/chrisliupascal",className:"sidebar-bottom-li-a"},n.a.createElement("i",{className:"fab fa-linkedin sidebar-icon"}))))))}),o=(t("d1KU"),function(e){var a=e.scrolled,t=n.a.useState(!1),r=t[0],l=t[1];return n.a.createElement("div",{className:"topbar "+(a?"topbar-scrolled":"")},n.a.createElement("div",{className:"topbar-hamburger"},n.a.createElement("i",{role:"button",className:"fas fa-bars hamburger",onClick:function(){return l(!r)}})),n.a.createElement("a",{href:"/",style:{height:"36px"}},n.a.createElement("img",{src:"/topbar-logo.png",alt:"topbar-logo"})),n.a.createElement("div",{className:"topbar-alerts"},n.a.createElement("i",{className:"fas fa-signal alerts-icons"}),n.a.createElement("i",{className:"fas fa-wifi alerts-icons"}),n.a.createElement("i",{className:"fas fa-battery-quarter alerts-icons"})),n.a.createElement("menu",{className:"topbar-menu",style:{display:r?"flex":"none"}},n.a.createElement("nav",null,n.a.createElement("ul",{className:"topbar-ul"},["home","skills","projects","work & edu","writings"].map((function(e,a){return n.a.createElement("li",{className:"topbar-li"},n.a.createElement(c,{to:0===a?"/":3===a?"/workneducation/":"/"+e+"/"},e))}))))))});a.a=function(e){var a=e.children,t=n.a.useState(!1),r=t[0],l=t[1],s=n.a.createRef(null);return n.a.createElement("div",{className:"root"},n.a.createElement(i,null),n.a.createElement(o,{scrolled:r}),n.a.createElement("div",{ref:s,className:"main-content "+(r?"main-content-scrolled":""),onScroll:function(){s.current.scrollTop>0?l(!0):l(!1)}},n.a.createElement("div",{className:"main-content-alerts"},n.a.createElement("i",{className:"fas fa-phone-slash alerts-icons"}),n.a.createElement("i",{className:"fas fa-signal alerts-icons"}),n.a.createElement("i",{className:"fas fa-wifi alerts-icons"}),n.a.createElement("i",{className:"fas fa-battery-quarter alerts-icons"})),a))}},d1KU:function(e,a,t){},lw3w:function(e,a,t){var r;e.exports=(r=t("rzlk"))&&r.default||r},mDKW:function(e,a,t){},qncB:function(e,a,t){var r=t("XKFU"),n=t("vhPU"),l=t("eeVq"),s=t("/e88"),c="["+s+"]",i=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),m=function(e,a,t){var n={},c=l((function(){return!!s[e]()||"​"!="​"[e]()})),i=n[e]=c?a(u):s[e];t&&(n[t]=i),r(r.P+r.F*c,"String",n)},u=m.trim=function(e,a){return e=String(n(e)),1&a&&(e=e.replace(i,"")),2&a&&(e=e.replace(o,"")),e};e.exports=m},qoDK:function(e,a,t){"use strict";t.r(a),t.d(a,"writingsListQuery",(function(){return s}));t("KKXr");var r=t("q1tI"),n=t.n(r),l=t("HxSt"),s="1149885299";a.default=function(e){var a=e.data,t=e.pageContext,r=a.allPostsJson.edges,s=t.numOfPages;return console.log(a,s),n.a.createElement(l.a,null,n.a.createElement("div",{className:"main-content-writings"},n.a.createElement("div",{className:"terminal"},n.a.createElement("div",{className:"terminal-top-bar"},n.a.createElement("p",{className:"terminal-top-bar-title"},"chris@desktop: ~/writings"),n.a.createElement("div",{className:"terminal-top-bar-icons"},n.a.createElement("i",{className:"fas fa-times-circle terminal-top-bar-icon"}),n.a.createElement("i",{className:"fas fa-times-circle terminal-top-bar-icon"}),n.a.createElement("i",{className:"fas fa-times-circle terminal-top-bar-icon"}))),n.a.createElement("div",{className:"terminal-toolbar"},["File","Edit","View","Search"].map((function(e){return n.a.createElement("p",{className:"terminal-toolbar-button"},e)}))),n.a.createElement("div",{className:"terminal-card-wrapper"},n.a.createElement("div",{className:"terminal-cards"},r.map((function(e){var a=e.node;return n.a.createElement("a",{className:"terminal-card-a",href:"/writings/"+a.title.toLowerCase().split(" ").join("-")+"/"},n.a.createElement("div",{className:"terminal-card"},n.a.createElement("h1",{className:"post-title"},a.title),n.a.createElement("h4",{className:"post-date"},a.date),n.a.createElement("p",{className:"post-description"},a.content)))})))))))}},rzlk:function(e,a,t){"use strict";t.r(a);t("91GP");var r=t("q1tI"),n=t.n(r),l=t("IOVJ");a.default=function(e){var a=e.location,t=e.pageResources;return t?n.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null}},xfY5:function(e,a,t){"use strict";var r=t("dyZX"),n=t("aagx"),l=t("LZWt"),s=t("Xbzi"),c=t("apmT"),i=t("eeVq"),o=t("kJMx").f,m=t("EemH").f,u=t("hswa").f,f=t("qncB").trim,d=r.Number,E=d,p=d.prototype,N="Number"==l(t("Kuth")(p)),b="trim"in String.prototype,g=function(e){var a=c(e,!1);if("string"==typeof a&&a.length>2){var t,r,n,l=(a=b?a.trim():f(a,3)).charCodeAt(0);if(43===l||45===l){if(88===(t=a.charCodeAt(2))||120===t)return NaN}else if(48===l){switch(a.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+a}for(var s,i=a.slice(2),o=0,m=i.length;o<m;o++)if((s=i.charCodeAt(o))<48||s>n)return NaN;return parseInt(i,r)}}return+a};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var a=arguments.length<1?0:e,t=this;return t instanceof d&&(N?i((function(){p.valueOf.call(t)})):"Number"!=l(t))?s(new E(g(a)),t,d):g(a)};for(var v,h=t("nh4g")?o(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;h.length>w;w++)n(E,v=h[w])&&!n(d,v)&&u(d,v,m(E,v));d.prototype=p,p.constructor=d,t("KroJ")(r,"Number",d)}}}]);
//# sourceMappingURL=component---src-templates-writings-js-0d46926ec24c01bf858d.js.map