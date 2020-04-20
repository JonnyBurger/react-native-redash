(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{kpsx:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return l}));t("4cIV"),t("NZyX"),t("c0Gx"),t("QNbk"),t("+ytS"),t("WY76");var a=t("V0Ug"),r=t("sN0p");t("xH0s");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/transformations.mdx"}});var c={_frontmatter:s},i=r.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(i,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"transformations"},"Transformations"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"translatez"},Object(a.b)("inlineCode",{parentName:"h2"},"translateZ()")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"const translateZ: (perspective: Animated.Adaptable<number>, z: Animated.Adaptable<number>) => {\n    scale: Animated.Node<number>;\n};\n")),Object(a.b)("p",null,"Convert a translateZ transformation into a scale transformation.\nExample usage with ",Object(a.b)("inlineCode",{parentName:"p"},"transform"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"const perspective = 800;\nconst z = new Value(100);\n//...\ntransform: [{ perspective }, translateZ(perspective, z)];\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"transformorigin"},Object(a.b)("inlineCode",{parentName:"h2"},"transformOrigin()")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"const transformOrigin: ({ x, y }: Point, ...transformations: AnimatedTransform[]) => AnimatedTransform[];\n")),Object(a.b)("p",null,"Changes the origin of the transformations."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"<View\n  style={{\n    transform: transformOrigin(cx, cy, { rotateX })\n  }}\n/>\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"accumulatetransform"},Object(a.b)("inlineCode",{parentName:"h2"},"accumulateTransform()")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"interface AccumulatedTransform {\n  scale: Animated.Node<number>;\n  scaleX: Animated.Node<number>;\n  scaleY: Animated.Node<number>;\n  translateX: Animated.Node<number>;\n  translateY: Animated.Node<number>;\n  rotateZ: Animated.Node<number>;\n}\n\nconst accumulateTransform: (transform: AnimatedTransform[]) => AccumulatedTransform;\n")),Object(a.b)("p",null,"Given a set of 2d transformations, returns the accumlated transformation.\nThis is useful to keep the state of a complex 2d transformation into a set of animation value.\nThis function works well with ",Object(a.b)("inlineCode",{parentName:"p"},"PinchGestureHandler")," or ",Object(a.b)("inlineCode",{parentName:"p"},"RotationGestureHandler")," for instance."),Object(a.b)("p",null,"Example: "),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"const { rotateZ, translateX } = accumulatedTransform([\n  { translateX: 100 },\n  { translateX: -CARD_WIDTH / 2 },\n  { rotateZ: -Math.PI / 6 },\n  { translateX: CARD_WIDTH / 2 },\n]);\nreturn (\n  <Animated.View style={{ transform: [{ rotateZ }, { translateX }]}}>\n    <Card />\n  </Animated.View>\n)\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/transformations.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-transformations-mdx-d07c4d3b31b11a2757e9.js.map