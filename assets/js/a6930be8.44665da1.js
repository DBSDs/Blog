"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4656],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),v=a,d=s["".concat(p,".").concat(v)]||s[v]||m[v]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},919:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:11},p="mvvm\u662f\u4ec0\u4e48",u={unversionedId:"js/mvvm",id:"js/mvvm",title:"mvvm\u662f\u4ec0\u4e48",description:"\u9996\u5148\u5148\u4e86\u89e3\u4e00\u4e0bmvc\u662f\u4ec0\u4e48:",source:"@site/docs/js/mvvm.md",sourceDirName:"js",slug:"/js/mvvm",permalink:"/Blog/docs/js/mvvm",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u5806\u548c\u6808\u7684\u533a\u522b",permalink:"/Blog/docs/js/heap&stack"},next:{title:"js\u4e2d\u5224\u65ad\u503c\u7684\u7c7b\u578b",permalink:"/Blog/docs/js/typeof"}},c={},m=[{value:"Vue\u4e2dVM\u7684\u8868\u73b0",id:"vue\u4e2dvm\u7684\u8868\u73b0",level:2},{value:"React\u4e2dVM\u7684\u8868\u73b0",id:"react\u4e2dvm\u7684\u8868\u73b0",level:2}],s={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mvvm\u662f\u4ec0\u4e48"},"mvvm\u662f\u4ec0\u4e48"),(0,l.kt)("p",null,"\u9996\u5148\u5148\u4e86\u89e3\u4e00\u4e0bmvc\u662f\u4ec0\u4e48:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"M \u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"V \u89c6\u56fe")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"C \u63a7\u5236\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"M Modal \u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"V View \u89c6\u56fe")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MV \u6570\u636e\u89c6\u56fe"))),(0,l.kt)("p",null,"\u6570\u636e\u89c6\u56fe\u53d6\u4ee3\u63a7\u5236\u5668\uff0c\u4e3a\u4ec0\u4e48\uff1f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"MVC\u662f\u5355\u5411\u901a\u4fe1"),(0,l.kt)("li",{parentName:"ol"},"MVC\u4e2d\u5927\u91cf\u7684dom\u64cd\u4f5c\u4f7f\u9875\u9762\u6e32\u67d3\u6027\u80fd\u964d\u4f4e")),(0,l.kt)("h2",{id:"vue\u4e2dvm\u7684\u8868\u73b0"},"Vue\u4e2dVM\u7684\u8868\u73b0"),(0,l.kt)("p",null,"vm \u901a\u8fc7\u89c6\u56fe\u7ed1\u5b9a\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"input.addEventListener('change', (e) => {\n  this.data = e.target.value\n})\n")),(0,l.kt)("p",null,"mv \u901a\u8fc7\u6570\u636e\u7ed1\u5b9a\u8bd5\u56fe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Object.define(this.data, {\n  get: () => {\n    return this.data\n  },\n  set: (val) => {\n    this.data = val;\n    input.value = this.data\n  }\n})\n")),(0,l.kt)("h2",{id:"react\u4e2dvm\u7684\u8868\u73b0"},"React\u4e2dVM\u7684\u8868\u73b0"),(0,l.kt)("p",null,"vm \u901a\u8fc7\u89c6\u56fe\u7ed1\u5b9a\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<input onChange={() => {\n  setState()\n}} /> \n")),(0,l.kt)("p",null,"vm \u901a\u8fc7\u6570\u636e\u7ed1\u5b9a\u89c6\u56fe\nsetState => render() => vdom \u7684\u5bf9\u6bd4 \uff1f => \u5c06\u65b0\u6811\u66ff\u6362\u65e7\u6811\u5728\u9875\u9762\u4e0a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6709\u4e00\u79cd\u8bf4\u6cd5\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"React"),"\u5e76\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"MVVM"),"\u6846\u67b6\u800c\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"MVC"),"\u6846\u67b6")))}v.isMDXComponent=!0}}]);