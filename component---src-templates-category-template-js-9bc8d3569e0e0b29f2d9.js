(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{294:function(e,t,a){"use strict";a.r(t),a.d(t,"categoryQuery",function(){return u});var n=a(21),c=a(1),s=a.n(c),i=a(0),l=a.n(i),r=a(155),o=a(302),d=a(301),m=a(309),p=function(e){var t=e.pageContext.category,a=e.data.allMarkdownRemark,c=a.totalCount,s=a.edges;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.ThemeContext.Consumer,null,function(e){return l.a.createElement(o.a,{theme:e},l.a.createElement("header",null,l.a.createElement(d.a,{theme:e},l.a.createElement("span",null,"Posts in category")," ",l.a.createElement(n.f,null),t),l.a.createElement("p",{className:"meta"},"There ",c>1?"are":"is"," ",l.a.createElement("strong",null,c)," post",c>1?"s":""," ","in the category."),l.a.createElement(m.a,{edges:s,theme:e})))}))};p.propTypes={data:s.a.object.isRequired,pageContext:s.a.object.isRequired},t.default=p;var u="3772081990"},301:function(e,t,a){"use strict";var n=a(2),c=a.n(n),s=a(0),i=a.n(s),l=a(1),r=a.n(l),o=function(e){var t=e.title,a=e.children,n=e.theme;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement("h1",{className:c.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},t):i.a.createElement("h1",{className:c.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},a),i.a.createElement(c.a,{styleId:"1826841480",css:["h1.__jsx-style-dynamic-selector{font-size:"+n.font.size.xxl+";margin:"+n.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+n.time.duration.long+";-webkit-animation-duration:"+n.time.duration.long+";animation-duration:"+n.time.duration.long+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+n.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+n.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+n.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.4);}}"],dynamic:[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]}))};o.propTypes={title:r.a.string,children:r.a.node,theme:r.a.object.isRequired},t.a=o},302:function(e,t,a){"use strict";var n=a(2),c=a.n(n),s=a(0),i=a.n(s),l=a(1),r=a.n(l),o=function(e){var t=e.children,a=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("article",{className:c.a.dynamic([["2846578189",[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]]])+" article"},t),i.a.createElement(c.a,{styleId:"2846578189",css:[".article.__jsx-style-dynamic-selector{padding:"+a.space.inset.default+";margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+") calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.desktop+";}}"],dynamic:[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]}))};o.propTypes={children:r.a.node.isRequired,theme:r.a.object.isRequired};var d=o;a.d(t,"a",function(){return d})},309:function(e,t,a){"use strict";a(68);var n=a(2),c=a.n(n),s=a(0),i=a.n(s),l=a(1),r=a.n(l),o=a(16),d=function(e){var t=e.edges,a=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:c.a.dynamic([["132031231",[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]]])},t.map(function(e){var t=e.node,n=t.frontmatter.title,s=t.fields.slug;return i.a.createElement("li",{key:s,className:c.a.dynamic([["132031231",[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]]])},i.a.createElement(o.Link,{to:s},n))})),i.a.createElement(c.a,{styleId:"132031231",css:["ul.__jsx-style-dynamic-selector{margin:"+a.space.stack.m+";padding:"+a.space.m+";list-style:circle;}","li.__jsx-style-dynamic-selector{padding:"+a.space.xs+" 0;font-size:"+a.font.size.s+";line-height:"+a.font.lineHeight.l+";}"],dynamic:[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]}))};d.propTypes={edges:r.a.array.isRequired,theme:r.a.object.isRequired};var m=d;a.d(t,"a",function(){return m})}}]);
//# sourceMappingURL=component---src-templates-category-template-js-9bc8d3569e0e0b29f2d9.js.map