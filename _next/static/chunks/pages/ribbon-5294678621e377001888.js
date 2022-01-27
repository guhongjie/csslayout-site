(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1973],{6544:function(t,e,n){"use strict";n.d(e,{n:function(){return i}});n(7294);var r=n(3145),o=n(1903),c=n(5893),i=function(t){var e=t.patterns;return(0,c.jsxs)("section",{children:[(0,c.jsx)(r.Heading,{level:2,children:"See also"}),(0,c.jsx)("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"1.5rem"},children:e.map((function(t){return(0,c.jsx)(o.T,{pattern:t},t)}))})]})}},5608:function(t,e,n){"use strict";n.d(e,{_:function(){return d}});var r=n(7294),o=n(9008),c=n(3145),i=n(5893),s=function(){var t=r.useRef(null);return r.useEffect((function(){var e=t.current;if(e){var n=document.createElement("script");return n.src="https://cdn.carbonads.com/carbon.js?serve=CE7I6KQL&placement=csslayoutio",n.async=!0,n.id="_carbonads_js",e.appendChild(n),function(){e.removeChild(n)}}}),[]),(0,i.jsx)("div",{ref:t})},a=n(6708),l=n(2915),d=function(t){var e=t.pattern,n=t.children,r=(0,a.o)(e);return(0,i.jsxs)(l.A,{title:e,children:[(0,i.jsxs)(o.default,{children:[(0,i.jsxs)("title",{children:[e," - CSS Layout"]}),(0,i.jsx)("meta",{name:"title",content:"".concat(e," - CSS Layout")}),(0,i.jsx)("meta",{property:"og:image",content:"https://csslayout.io/assets/patterns/".concat(r,".png")}),(0,i.jsx)("meta",{property:"og:title",content:"".concat(e," - CSS Layout")}),(0,i.jsx)("meta",{property:"og:url",content:"https://csslayout.io/patterns/".concat(r)}),(0,i.jsx)("meta",{property:"twitter:image",content:"https://csslayout.io/assets/patterns/".concat(r,".png")}),(0,i.jsx)("meta",{property:"twitter:title",content:"".concat(e," - CSS Layout")}),(0,i.jsx)("meta",{property:"twitter:url",content:"https://csslayout.io/patterns/".concat(r)})]}),(0,i.jsxs)("div",{className:"block-container",children:[(0,i.jsxs)("div",{className:"page-home__hero",children:[(0,i.jsx)(c.Spacer,{size:"extraLarge"}),(0,i.jsx)(c.Heading,{level:1,children:e}),(0,i.jsx)(c.Spacer,{size:"large"}),(0,i.jsx)("div",{className:"block-ad",children:(0,i.jsx)(s,{})}),(0,i.jsx)(c.Spacer,{size:"medium"})]}),n,(0,i.jsx)(c.Spacer,{size:"extraLarge"})]})]})}},9926:function(t,e,n){"use strict";n.r(e);var r=n(7294),o=n(9008),c=n(3145),i=n(5046),s=n(6544),a=n(3938),l=n(5608),d=n(3680),p=n(7389),u=n(5893);e.default=function(){var t=r.useContext(i.T3),e=t.prefix,n=t.container;return n=n||"container",(0,u.jsxs)(l._,{pattern:a.c.Ribbon,children:[(0,u.jsxs)(o.default,{children:[(0,u.jsx)("meta",{name:"description",content:"Create a ribbon with CSS"}),(0,u.jsx)("meta",{name:"og:description",content:"Create a ribbon with CSS"}),(0,u.jsx)("meta",{name:"twitter:description",content:"Create a ribbon with CSS"}),(0,u.jsx)("meta",{name:"keywords",content:"css ribbon"})]}),(0,u.jsx)(d.Z,{html:""+'\n<div class="'.concat(e).concat(n,'">\n    \x3c!-- The content --\x3e\n    ...\n\n    \x3c!-- The left side --\x3e\n    <div class="').concat(e).concat(n,"__side ").concat(e).concat(n,'__side--left"></div>\n\n    \x3c!-- The left triangle displayed below the content --\x3e\n    <div class="').concat(e).concat(n,"__triangle ").concat(e).concat(n,'__triangle--left"></div>\n\n    \x3c!-- The right triangle displayed below the content --\x3e\n    <div class="').concat(e).concat(n,"__triangle ").concat(e).concat(n,'__triangle--right"></div>\n\n    \x3c!-- The right side --\x3e\n    <div class="').concat(e).concat(n,"__side ").concat(e).concat(n,'__side--right"></div>\n</div>\n'),css:""+"\n.".concat(e).concat(n," {\n    /* Center the content */\n    align-items: center;\n    display: flex;\n    justify-content: center;\n\n    /* Background color */\n    background-color: #bbb;\n\n    /* Size */\n    height: 32px;\n\n    /* Use to position the corners */\n    position: relative;\n}\n\n.").concat(e).concat(n,"__side {\n    bottom: -8px;\n    position: absolute;\n\n    /* Displayed under the container */\n    z-index: -1;\n\n    /* Background */\n    border: 16px solid #ccc;\n    border-left-color: transparent;\n}\n\n.").concat(e).concat(n,"__side--left {\n    /* Position */\n    left: -24px;\n}\n\n.").concat(e).concat(n,"__side--right {\n    /* Position */\n    right: -24px;\n}\n\n.").concat(e).concat(n,"__triangle {\n    position: absolute;\n    top: 100%;\n\n    border: 8px solid transparent;\n    border-bottom-width: 0;\n    border-top-color: #aaa;\n}\n\n.").concat(e).concat(n,"__triangle--left {\n    border-right-width: 0;\n    left: 0;\n}\n\n.").concat(e).concat(n,"__triangle--right {\n    border-left-width: 0;\n    right: 0;\n}\n"),children:(0,u.jsx)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"},children:(0,u.jsxs)("div",{style:{alignItems:"center",backgroundColor:"#BBB",display:"flex",height:"32px",justifyContent:"center",padding:"0 16px",position:"relative",width:"150px"},children:[(0,u.jsx)(p.Z,{}),(0,u.jsx)("div",{style:{border:"16px solid #CCC",borderLeftColor:"transparent",bottom:"-8px",left:"-24px",position:"absolute",zIndex:-1}}),(0,u.jsx)("div",{style:{border:"8px solid transparent",borderBottomWidth:0,borderRightWidth:0,borderTopColor:"#AAA",left:0,position:"absolute",top:"100%"}}),(0,u.jsx)("div",{style:{border:"8px solid transparent",borderBottomWidth:0,borderLeftWidth:0,borderTopColor:"#AAA",position:"absolute",right:0,top:"100%"}}),(0,u.jsx)("div",{style:{border:"16px solid #CCC",borderRightColor:"transparent",bottom:"-8px",position:"absolute",right:"-24px",zIndex:-1}})]})})}),(0,u.jsx)(c.Spacer,{size:"extraLarge"}),(0,u.jsx)(s.n,{patterns:[a.c.CornerRibbon]})]})}},3680:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});n(7294);var r=n(3145),o=n(4942),c=n(9235),i=n(1418),s=n(5893);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=function(t){var e=t.children,n=t.language;return(0,s.jsx)(c.ZP,l(l({},c.lG),{},{theme:i.Z,code:e.trim(),language:n,children:function(t){var e=t.className,n=t.style,r=t.tokens,o=t.getLineProps,c=t.getTokenProps;return(0,s.jsx)("pre",{className:"block-code ".concat(e),style:l({},n),children:r.map((function(t,e){return(0,s.jsx)("div",l(l({},o({line:t,key:e})),{},{children:t.map((function(t,e){return(0,s.jsx)("span",l({},c({token:t,key:e})),e)}))}),e)}))})}}))},p=function(t){var e=t.children,n=t.css,o=t.html;return(0,s.jsxs)(r.Window,{children:[(0,s.jsx)("div",{className:"demo__html",children:(0,s.jsx)(d,{language:"markup",children:o})}),(0,s.jsx)("div",{className:"demo__css",children:(0,s.jsx)(d,{language:"css",children:n})}),(0,s.jsx)("div",{className:"demo__live",children:e})]})}},7389:function(t,e,n){"use strict";n(7294);var r=n(5893);e.Z=function(t){var e=t.height,n=void 0===e?8:e;return(0,r.jsx)("div",{style:{backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:"0.25rem",height:"".concat(n,"px"),width:"100%"}})}},4273:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ribbon",function(){return n(9926)}])}},function(t){t.O(0,[9774,1136,8527,3797,2888,179],(function(){return e=4273,t(t.s=e);var e}));var e=t.O();_N_E=e}]);