(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5503],{6544:function(t,r,o){"use strict";o.d(r,{n:function(){return c}});o(7294);var n=o(3145),e=o(1903),a=o(5893),c=function(t){var r=t.patterns;return(0,a.jsxs)("section",{children:[(0,a.jsx)(n.Heading,{level:2,children:"See also"}),(0,a.jsx)("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"1.5rem"},children:r.map((function(t){return(0,a.jsx)(e.T,{pattern:t},t)}))})]})}},5608:function(t,r,o){"use strict";o.d(r,{_:function(){return l}});var n=o(7294),e=o(9008),a=o(3145),c=o(5893),s=function(){var t=n.useRef(null);return n.useEffect((function(){var r=t.current;if(r){var o=document.createElement("script");return o.src="https://cdn.carbonads.com/carbon.js?serve=CE7I6KQL&placement=csslayoutio",o.async=!0,o.id="_carbonads_js",r.appendChild(o),function(){r.removeChild(o)}}}),[]),(0,c.jsx)("div",{ref:t})},i=o(6708),d=o(2915),l=function(t){var r=t.pattern,o=t.children,n=(0,i.o)(r);return(0,c.jsxs)(d.A,{title:r,children:[(0,c.jsxs)(e.default,{children:[(0,c.jsxs)("title",{children:[r," - CSS Layout"]}),(0,c.jsx)("meta",{name:"title",content:"".concat(r," - CSS Layout")}),(0,c.jsx)("meta",{property:"og:image",content:"https://csslayout.io/assets/patterns/".concat(n,".png")}),(0,c.jsx)("meta",{property:"og:title",content:"".concat(r," - CSS Layout")}),(0,c.jsx)("meta",{property:"og:url",content:"https://csslayout.io/patterns/".concat(n)}),(0,c.jsx)("meta",{property:"twitter:image",content:"https://csslayout.io/assets/patterns/".concat(n,".png")}),(0,c.jsx)("meta",{property:"twitter:title",content:"".concat(r," - CSS Layout")}),(0,c.jsx)("meta",{property:"twitter:url",content:"https://csslayout.io/patterns/".concat(n)})]}),(0,c.jsxs)("div",{className:"block-container",children:[(0,c.jsxs)("div",{className:"page-home__hero",children:[(0,c.jsx)(a.Spacer,{size:"extraLarge"}),(0,c.jsx)(a.Heading,{level:1,children:r}),(0,c.jsx)(a.Spacer,{size:"large"}),(0,c.jsx)("div",{className:"block-ad",children:(0,c.jsx)(s,{})}),(0,c.jsx)(a.Spacer,{size:"medium"})]}),o,(0,c.jsx)(a.Spacer,{size:"extraLarge"})]})]})}},419:function(t,r,o){"use strict";o.r(r);var n=o(7294),e=o(9008),a=o(3145),c=o(5046),s=o(6544),i=o(3938),d=o(5608),l=o(3680),p=o(5893);r.default=function(){var t=n.useContext(c.T3),r=t.prefix,o=t.container;return o=o||"container",(0,p.jsxs)(d._,{pattern:i.c.PopoverArrow,children:[(0,p.jsxs)(e.default,{children:[(0,p.jsx)("meta",{name:"description",content:"Create a popover arrow with CSS"}),(0,p.jsx)("meta",{name:"og:description",content:"Create a popover arrow with CSS"}),(0,p.jsx)("meta",{name:"twitter:description",content:"Create a popover arrow with CSS"}),(0,p.jsx)("meta",{name:"keywords",content:"css arrow, css popover"})]}),(0,p.jsx)(l.Z,{html:""+'\n<div class="'.concat(r).concat(o,'">\n    \x3c!-- The content --\x3e\n    ...\n\n    \x3c!-- Top left arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--tl"></div>\n\n    \x3c!-- Top center arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--tc"></div>\n\n    \x3c!-- Top right arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--tr"></div>\n\n    \x3c!-- Right top arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--rt"></div>\n\n    \x3c!-- Right center arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--rc"></div>\n\n    \x3c!-- Right bottom arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--rb"></div>\n\n    \x3c!-- Bottom left arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--bl"></div>\n\n    \x3c!-- Bottom center arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--bc"></div>\n\n    \x3c!-- Bottom right arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--br"></div>\n\n    \x3c!-- Left top arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--lt"></div>\n\n    \x3c!-- Left center arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--lc"></div>\n\n    \x3c!-- Left bottom arrow --\x3e\n    <div class="').concat(r).concat(o,"__arrow ").concat(r).concat(o,'__arrow--lb"></div>\n</div>\n'),css:""+"\n.".concat(r).concat(o," {\n    /* Border */\n    border: 1px solid rgba(0, 0, 0, 0.3);\n\n    /* Used to position the arrow */\n    position: relative;\n}\n\n.").concat(r).concat(o,"__arrow {\n    /* Size */\n    height: 16px;\n    width: 16px;\n\n    background-color: #fff;\n    position: absolute;\n}\n\n.").concat(r).concat(o,"__arrow--tl {\n    /* Position at the top left corner */\n    left: 32px;\n    top: 0px;\n\n    /* Border */\n    border-left: 1px solid rgba(0, 0, 0, 0.3);\n    border-top: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(50%, -50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--tc {\n    /* Position at the top center */\n    left: 50%;\n    top: 0px;\n\n    /* Border */\n    border-left: 1px solid rgba(0, 0, 0, 0.3);\n    border-top: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--tr {\n    /* Position at the top right corner */\n    right: 32px;\n    top: 0px;\n\n    /* Border */\n    border-left: 1px solid rgba(0, 0, 0, 0.3);\n    border-top: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--rt {\n    /* Position at the right top corner */\n    right: 0;\n    top: 32px;\n\n    /* Border */\n    border-right: 1px solid rgba(0, 0, 0, 0.3);\n    border-top: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(50%, 50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--rc {\n    /* Position at the right center */\n    right: 0;\n    top: 50%;\n\n    /* Border */\n    border-right: 1px solid rgba(0, 0, 0, 0.3);\n    border-top: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(50%, -50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--rb {\n    /* Position at the right bottom corner */\n    bottom: 32px;\n    right: 0;\n\n    /* Border */\n    border-right: 1px solid rgba(0, 0, 0, 0.3);\n    border-top: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(50%, -50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--bl {\n    /* Position at the bottom left corner */\n    bottom: -16px;\n    left: 32px;\n\n    /* Border */\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    border-right: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(50%, -50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--bc {\n    /* Position at the bottom center */\n    bottom: -16px;\n    left: 50%;\n\n    /* Border */\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    border-right: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--br {\n    /* Position at the bottom right corner */\n    bottom: -16px;\n    right: 32px;\n\n    /* Border */\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    border-right: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--lt {\n    /* Position at the left top corner */\n    left: 0;\n    top: 32px;\n\n    /* Border */\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    border-left: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(-50%, 50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--lc {\n    /* Position at the left center */\n    left: 0;\n    top: 50%;\n\n    /* Border */\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    border-left: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.").concat(r).concat(o,"__arrow--lb {\n    /* Position at the left bottom corner */\n    bottom: 32px;\n    left: 0;\n\n    /* Border */\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    border-left: 1px solid rgba(0, 0, 0, 0.3);\n    transform: translate(-50%, -50%) rotate(45deg);\n}\n"),children:(0,p.jsx)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"},children:(0,p.jsxs)("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",borderRadius:"4px",height:"300px",marginBottom:"16px",position:"relative",width:"300px"},children:[(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderLeft:"1px solid rgba(0, 0, 0, 0.3)",borderTop:"1px solid rgba(0, 0, 0, 0.3)",height:"16px",left:"32px",position:"absolute",top:0,transform:"translate(50%, -50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderLeft:"1px solid rgba(0, 0, 0, 0.3)",borderTop:"1px solid rgba(0, 0, 0, 0.3)",height:"16px",left:"50%",position:"absolute",top:0,transform:"translate(-50%, -50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderLeft:"1px solid rgba(0, 0, 0, 0.3)",borderTop:"1px solid rgba(0, 0, 0, 0.3)",height:"16px",position:"absolute",right:"32px",top:0,transform:"translate(-50%, -50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderRight:"1px solid rgba(0, 0, 0, 0.3)",borderTop:"1px solid rgba(0, 0, 0, 0.3)",height:"16px",position:"absolute",right:0,top:"32px",transform:"translate(50%, 50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderRight:"1px solid rgba(0, 0, 0, 0.3)",borderTop:"1px solid rgba(0, 0, 0, 0.3)",height:"16px",position:"absolute",right:0,top:"50%",transform:"translate(50%, -50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderRight:"1px solid rgba(0, 0, 0, 0.3)",borderTop:"1px solid rgba(0, 0, 0, 0.3)",bottom:"32px",height:"16px",position:"absolute",right:0,transform:"translate(50%, -50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderBottom:"1px solid rgba(0, 0, 0, 0.3)",borderRight:"1px solid rgba(0, 0, 0, 0.3)",bottom:"-16px",height:"16px",left:"32px",position:"absolute",transform:"translate(50%, -50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderBottom:"1px solid rgba(0, 0, 0, 0.3)",borderRight:"1px solid rgba(0, 0, 0, 0.3)",bottom:"-16px",height:"16px",left:"50%",position:"absolute",transform:"translate(-50%, -50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderBottom:"1px solid rgba(0, 0, 0, 0.3)",borderRight:"1px solid rgba(0, 0, 0, 0.3)",bottom:"-16px",height:"16px",position:"absolute",right:"32px",transform:"translate(-50%, -50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderBottom:"1px solid rgba(0, 0, 0, 0.3)",borderLeft:"1px solid rgba(0, 0, 0, 0.3)",height:"16px",left:0,position:"absolute",top:"32px",transform:"translate(-50%, 50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderBottom:"1px solid rgba(0, 0, 0, 0.3)",borderLeft:"1px solid rgba(0, 0, 0, 0.3)",height:"16px",left:0,position:"absolute",top:"50%",transform:"translate(-50%, -50%) rotate(45deg)",width:"16px"}}),(0,p.jsx)("div",{style:{backgroundColor:"#FFF",borderBottom:"1px solid rgba(0, 0, 0, 0.3)",borderLeft:"1px solid rgba(0, 0, 0, 0.3)",bottom:"32px",height:"16px",left:0,position:"absolute",transform:"translate(-50%, -50%) rotate(45deg)",width:"16px"}})]})})}),(0,p.jsx)(a.Spacer,{size:"extraLarge"}),(0,p.jsx)(s.n,{patterns:[i.c.ArrowButtons,i.c.Tooltip]})]})}},3680:function(t,r,o){"use strict";o.d(r,{Z:function(){return p}});o(7294);var n=o(3145),e=o(4942),a=o(9235),c=o(1418),s=o(5893);function i(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.push.apply(o,n)}return o}function d(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){(0,e.Z)(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}var l=function(t){var r=t.children,o=t.language;return(0,s.jsx)(a.ZP,d(d({},a.lG),{},{theme:c.Z,code:r.trim(),language:o,children:function(t){var r=t.className,o=t.style,n=t.tokens,e=t.getLineProps,a=t.getTokenProps;return(0,s.jsx)("pre",{className:"block-code ".concat(r),style:d({},o),children:n.map((function(t,r){return(0,s.jsx)("div",d(d({},e({line:t,key:r})),{},{children:t.map((function(t,r){return(0,s.jsx)("span",d({},a({token:t,key:r})),r)}))}),r)}))})}}))},p=function(t){var r=t.children,o=t.css,e=t.html;return(0,s.jsxs)(n.Window,{children:[(0,s.jsx)("div",{className:"demo__html",children:(0,s.jsx)(l,{language:"markup",children:e})}),(0,s.jsx)("div",{className:"demo__css",children:(0,s.jsx)(l,{language:"css",children:o})}),(0,s.jsx)("div",{className:"demo__live",children:r})]})}},8015:function(t,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/popover-arrow",function(){return o(419)}])}},function(t){t.O(0,[9774,1136,8527,3797,2888,179],(function(){return r=8015,t(t.s=r);var r}));var r=t.O();_N_E=r}]);