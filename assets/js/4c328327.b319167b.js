"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8674],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(i,".").concat(d)]||c[d]||k[d]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],s={sidebar_position:7},i="\u6d45\u5165\u6df1\u51fa\u5730\u4e86\u89e3useState",u={unversionedId:"js/usestate-source",id:"js/usestate-source",title:"\u6d45\u5165\u6df1\u51fa\u5730\u4e86\u89e3useState",description:"\u5728\u6211\u4e0d\u7b97\u5f88\u957f\u7684`React`\u51fd\u6570\u5f0f\u7f16\u7a0b\u4e2d\u6765\u770b\uff0c\u4ece\u4e0a\u624b\u5230\u73b0\u5728\u4e5f\u4f7f\u7528\u4e86\u4e0d\u4e0b\u5343\u6b21\u7684`useState`\uff0c\u53ef\u4ee5\u8bf4`useState`\u662f\u6211\u7684\u4ee3\u7801\u7684\u91cd\u8981\u7684\u6784\u6210\u90e8\u5206\uff0c\u53ef\u80fd\u4e0d\u4e86\u89e3\u672c\u8d28\u4e5f\u80fd\u8fdb\u884c\u65e5\u5e38\u7684\u4e1a\u52a1\u5f00\u53d1\uff0c\u4f46\u662f\u6bcf\u6b21\u9047\u5230\u96be\u4ee5\u89e3\u51b3\u7684`Bug`\u65f6\u6211\u65e5\u5e38\u6000\u7591\u4eba\u751f\uff0c\u56e0\u6b64\u6211\u8feb\u4e0d\u53ca\u5f85\u7684\u60f3\u8981\u4e86\u89e3`useState`\u5230\u5e95\u505a\u4e86\u4ec0\u4e48\u3002",source:"@site/docs/js/usestate-source.md",sourceDirName:"js",slug:"/js/usestate-source",permalink:"/Blog/docs/js/usestate-source",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u95ed\u5305\u7684\u6807\u51c6\u7b54\u6848",permalink:"/Blog/docs/js/closure"},next:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/Blog/docs/js/eventloop"}},p={},k=[{value:"useState\u8bde\u751f\u80cc\u666f",id:"usestate\u8bde\u751f\u80cc\u666f",level:2},{value:"\u4ec0\u4e48\u662fHooks",id:"\u4ec0\u4e48\u662fhooks",level:3},{value:"Hooks\u89e3\u51b3\u7684\u95ee\u9898",id:"hooks\u89e3\u51b3\u7684\u95ee\u9898",level:3},{value:"useState\u7684\u5b9e\u8df5",id:"usestate\u7684\u5b9e\u8df5",level:2},{value:"\u4ec0\u4e48\u65f6\u5019\u5237\u65b0",id:"\u4ec0\u4e48\u65f6\u5019\u5237\u65b0",level:3},{value:"\u4f18\u5316",id:"\u4f18\u5316",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u540c\u6b65\u8fd8\u662f\u5f02\u6b65",id:"\u540c\u6b65\u8fd8\u662f\u5f02\u6b65",level:3},{value:"\u5408\u5e76",id:"\u5408\u5e76",level:3},{value:"\u65f6\u5e8f\u4e00\u81f4",id:"\u65f6\u5e8f\u4e00\u81f4",level:3},{value:"\u6e90\u7801\u89e3\u6790",id:"\u6e90\u7801\u89e3\u6790",level:2}],c={toc:k};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6d45\u5165\u6df1\u51fa\u5730\u4e86\u89e3usestate"},"\u6d45\u5165\u6df1\u51fa\u5730\u4e86\u89e3useState"),(0,o.kt)("p",null,"\u5728\u6211\u4e0d\u7b97\u5f88\u957f\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u51fd\u6570\u5f0f\u7f16\u7a0b\u4e2d\u6765\u770b\uff0c\u4ece\u4e0a\u624b\u5230\u73b0\u5728\u4e5f\u4f7f\u7528\u4e86\u4e0d\u4e0b\u5343\u6b21\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\uff0c\u53ef\u4ee5\u8bf4",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u662f\u6211\u7684\u4ee3\u7801\u7684\u91cd\u8981\u7684\u6784\u6210\u90e8\u5206\uff0c\u53ef\u80fd\u4e0d\u4e86\u89e3\u672c\u8d28\u4e5f\u80fd\u8fdb\u884c\u65e5\u5e38\u7684\u4e1a\u52a1\u5f00\u53d1\uff0c\u4f46\u662f\u6bcf\u6b21\u9047\u5230\u96be\u4ee5\u89e3\u51b3\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Bug"),"\u65f6\u6211\u65e5\u5e38\u6000\u7591\u4eba\u751f\uff0c\u56e0\u6b64\u6211\u8feb\u4e0d\u53ca\u5f85\u7684\u60f3\u8981\u4e86\u89e3",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u5230\u5e95\u505a\u4e86\u4ec0\u4e48\u3002"),(0,o.kt)("h2",{id:"usestate\u8bde\u751f\u80cc\u666f"},"useState\u8bde\u751f\u80cc\u666f"),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u662fhooks"},"\u4ec0\u4e48\u662fHooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React\u4e00\u76f4\u5021\u5bfc\u4f7f\u7528\u51fd\u6570\u7ec4\u4ef6\uff0c\u4f46\u662f\u6709\u65f6\u5019\u9700\u8981\u4f7f\u7528state\u6216\u5176\u4ed6\u4e00\u4e9b\u529f\u80fd\u65f6\uff0c\u53ea\u80fd\u4f7f\u7528\u7c7b\u7ec4\u4ef6\uff0c\u56e0\u4e3a\u51fd\u6570\u7ec4\u4ef6\u6ca1\u6709\u5b9e\u4f8b\uff0c\u6ca1\u6709\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u53ea\u6709\u7c7b\u7ec4\u4ef6\u624d\u6709"),(0,o.kt)("li",{parentName:"ul"},"React hooks \u5141\u8bb8\u4f60\u4e0d\u7f16\u5199class\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528state\u4ee5\u53ca\u5176\u4ed6\u7684React\u7279\u6027")),(0,o.kt)("h3",{id:"hooks\u89e3\u51b3\u7684\u95ee\u9898"},"Hooks\u89e3\u51b3\u7684\u95ee\u9898"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7c7b\u7ec4\u4ef6\u7684\u4e0d\u8db3")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u72b6\u6001\u903b\u8f91\u96be\u590d\u7528\uff0c\u5728\u7ec4\u4ef6\u4e4b\u540e\u590d\u7528\u72b6\u6001\u903b\u8f91\u5f88\u96be\uff0c\u53ef\u80fd\u8981\u7528\u5230render props\u6216\u8005 HOC\uff0c\u4f46\u65e0\u8bba\u662f\u6e32\u67d3\u5c5e\u6027\u8fd8\u662f\u9ad8\u9636\u7ec4\u4ef6\uff0c\u90fd\u4f1a\u5728\u539f\u5148\u7684\u7ec4\u4ef6\u5916\u5305\u88f9\u4e00\u5c42\u7236\u5bb9\u5668\uff0c\u5bfc\u81f4\u5c42\u7ea7\u5197\u4f59"),(0,o.kt)("li",{parentName:"ul"},"\u8d8b\u5411\u590d\u6742\u96be\u4ee5\u7ef4\u62a4\uff0c\u5728\u58f0\u660e\u5468\u671f\u51fd\u6570\u4e2d\u6df7\u6742\u4e0d\u76f8\u5e72\u7684\u903b\u8f91"),(0,o.kt)("li",{parentName:"ul"},"this\u6307\u5411\u95ee\u9898")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Hooks\u7684\u4f18\u52bf")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u80fd\u4f18\u5316\u7c7b\u7ec4\u4ef6\u7684\u4e09\u5927\u95ee\u9898"),(0,o.kt)("li",{parentName:"ul"},"\u526f\u4f5c\u7528\u7684\u5173\u6ce8\u70b9\u5206\u79bb\uff1a\u526f\u4f5c\u7528\u6307\u90a3\u4e9b\u6ca1\u6709\u53d1\u751f\u5728\u6570\u636e\u5411\u89c6\u56fe\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u7684\u903b\u8f91\uff0c\u5982 ajax \u8bf7\u6c42\u3001\u8bbf\u95ee\u539f\u751fdom \u5143\u7d20\u3001\u672c\u5730\u6301\u4e45\u5316\u7f13\u5b58\u3001\u7ed1\u5b9a/\u89e3\u7ed1\u4e8b\u4ef6\u3001\u6dfb\u52a0\u8ba2\u9605\u3001\u8bbe\u7f6e\u5b9a\u65f6\u5668\u3001\u8bb0\u5f55\u65e5\u5fd7\u7b49\u3002\u4ee5\u5f80\u8fd9\u4e9b\u526f\u4f5c\u7528\u90fd\u662f\u5199\u5728\u7c7b\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u7684\u3002\u800c useEffect \u5728\u5168\u90e8\u6e32\u67d3\u5b8c\u6bd5\u540e\u624d\u4f1a\u6267\u884c\uff0cuseLayoutEffect \u4f1a\u5728\u6d4f\u89c8\u5668 layout \u4e4b\u540e\uff0cpainting \u4e4b\u524d\u6267\u884c\u3002")),(0,o.kt)("h2",{id:"usestate\u7684\u5b9e\u8df5"},"useState\u7684\u5b9e\u8df5"),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u65f6\u5019\u5237\u65b0"},"\u4ec0\u4e48\u65f6\u5019\u5237\u65b0"),(0,o.kt)("p",null,"\u4e0e class \u7ec4\u4ef6\u4e2d\u7684 setState \u65b9\u6cd5\u4e0d\u540c\uff0c\u5982\u679c\u4f60\u4fee\u6539\u72b6\u6001\u7684\u65f6\u5019\uff0c\u4f20\u7684\u72b6\u6001\u503c\u6ca1\u6709\u53d8\u5316\uff0c\u5219\u4e0d\u91cd\u65b0\u6e32\u67d3"),(0,o.kt)("h3",{id:"\u4f18\u5316"},"\u4f18\u5316"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u8981\u7236\u7ec4\u4ef6\u7684\u72b6\u6001\u53d8\u4e86(\u4e0d\u7ba1\u5b50\u7ec4\u4ef6\u4ee5\u6765\u4e0d\u4f9d\u8d56\u8be5\u72b6\u6001\uff0c\u5b50\u7ec4\u4ef6\u4e5f\u4f1a\u91cd\u65b0\u6e32\u67d3)"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u822c\u7684\u4f18\u5316\uff0c\u4f7f\u7528useMemo"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u6df1\u5165\u7684\u4f18\u5316\uff0c\u4f7f\u7528useCallBack")),(0,o.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,o.kt)("p",null,"\u4e86\u89e3useState\u6211\u4eec\u4ece\u6700\u7b80\u5355\u7684\u8fd4\u56de\u503c\u5f00\u59cb\u5165\u624b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const [data, setData] = React.useState<number>(0)\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u58f0\u660e\u4e86\u4e00\u4e2a\u6570\u7ec4\u53bb\u7ed3\u6784",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u7684\u8fd4\u56de\u3002\u4ed6\u7684\u7b2c\u4e00\u4e2a\u8fd4\u56de\u662f\u8fd9\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c\u4e5f\u5c31\u662f\u5728\u7ec4\u4ef6\u4e2d\u4e2d\u5b58\u50a8\u7684\u6570\u636e\uff0c\u7b2c\u4e8c\u4e2a\u8fd4\u56de\u5c31\u662f\u66f4\u65b0\u8fd9\u4e2a\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u53ea\u7528\u901a\u8fc7\u8fd9\u4e2a\u65b9\u6cd5\u53bb\u66f4\u65b0\u6570\u636e\uff0c\u624d\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u7684\u5237\u65b0\u3002"),(0,o.kt)("p",null,"\u90a3\u4e48\u4e3a\u4ec0\u4e48\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u6570\u7ec4\u5462\uff0c\u53ef\u4ee5\u8bd5\u60f3\u5982\u679c\u662f\u5bf9\u8c61\u7684\u8bdd\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u8981\u4f7f\u7528\u91cd\u547d\u540d\u53bb\u89e3\u6784\u591a\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u4e86"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const {data:numberData, setData:setNumberData} = React.useState<number>(0)\n\nconst {data:stringData, setData:setStringData} = React.useState<number>(0)\n")),(0,o.kt)("p",null,"\u663e\u793a\u8fd8\u662f\u76f4\u63a5\u4f7f\u7528\u6570\u7ec4\u66f4\u65b9\u4fbf\uff0c\u8fd9\u662fReact\u56e2\u961f\u5728\u8bbe\u8ba1\u4e0a\u7684\u8003\u91cf\u3002"),(0,o.kt)("h3",{id:"\u540c\u6b65\u8fd8\u662f\u5f02\u6b65"},"\u540c\u6b65\u8fd8\u662f\u5f02\u6b65"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u9047\u5230\u7684\u6700\u5e38\u89c1\u7591\u60d1\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u7a76\u7adf\u662f\u540c\u6b65\u7684\u8fd8\u662f\u5f02\u6b65\u7684\uff0c\u8fd9\u76f4\u63a5\u51b3\u5b9a\u4e86\u6211\u4eec\u662f\u5426\u53ef\u4ee5\u8fd9\u4e2a\u4e1a\u52a1\u573a\u666f\u4e0b\u4f7f\u7528\u5b83\u6765\u5b58\u50a8\u6570\u636e\uff0c\u6216\u8005\u5b83\u662f\u5426\u80fd\u6b63\u786e\u5730\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u5448\u73b0\u51fa\u6b63\u786e\u7684\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u7b54\u6848\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u5f02\u6b65"),"\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4f8b\u5b50\u4e00",title:"\u4f8b\u5b50\u4e00"},"const app = () => {\n  const [data, setData] = React.useState<number>(0);\n\n  return (\n    <div onClick={() => {\n      setData(data + 1);\n      console.log(data)\u3001  \n      setData(data + 2);\n      console.log(data)\n    }} />\n  )\n}\n\n\n// 0\n// 0\n")),(0,o.kt)("p",null,"\u540c\u6837\u5730\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"onClick"),"\u4ee5\u5916\u7684\u4efb\u52a1\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4f8b\u5b50\u4e8c",title:"\u4f8b\u5b50\u4e8c"},"const app = () => {\n  const [data, setData] = React.useState<number>(0);\n\n  return (\n    <div onClick={() => {\n      setTimeout(() => {\n        setData(data + 1);\n        console.log(data)\n        setData(data + 2);\n        console.log(data)\n      }, 300)\n    }} />\n  )\n}\n\n// 0\n// 0\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u5f88\u6e05\u695a\u5730\u77e5\u9053\uff0c\u4e24\u6b21\u6253\u5370\u5747\u662f0\uff0c\u5982\u679c\u5728\u540c\u6b65\u7684\u60c5\u51b5\u4e0b\uff0c\u90a3\u4e48\u4e24\u6b21\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"force"),"\u6253\u5370\u51fa\u6765\u7684\u60c5\u51b5\u5c06\u4f1a\u4e0d\u4e00\u81f4\uff0c\u4e8b\u5b9e\u8bc1\u660e",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u5728\u4e0d\u8bba\u4ec0\u4e48\u60c5\u51b5\u4e0b\u5747\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u5f02\u6b65")),(0,o.kt)("h3",{id:"\u5408\u5e76"},"\u5408\u5e76"),(0,o.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u6bcf\u4e00\u6b21\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u4e0b\u7684\u7b2c\u4e8c\u4e2a\u8fd4\u56de\u503c\uff0c\u4e5f\u5c31\u662f\u4e0b\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"setXXX"),"\uff0c\u90a3\u4e48",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u7684\u51fd\u6570\u5f0f\u7ec4\u4ef6\u5c31\u4f1a\u91cd\u65b0\u5237\u65b0\u4e00\u6b21\u3002"),(0,o.kt)("p",null,"\u4e0d\u8fc7\u5728\u4e00\u4e2a\u70b9\u51fb\u4e8b\u4ef6\u4e2d\uff0c\u5982\u679c\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"N"),"\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\u4e8b\u4ef6\u5462\uff1f\u663e\u7136",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3",(0,o.kt)("inlineCode",{parentName:"p"},"N"),"\u6b21\u5427\uff0c\u663e\u7136\u8fd9\u6837\u6d88\u8017\u6027\u80fd\u7684\u64cd\u4f5c\u662f\u8fdd\u6cd5\u76f4\u89c9\u7684\uff0c\u90a3\u4e48\u4ed6\u5c06\u4f1a\u5728\u4ec0\u4e48\u65f6\u5019\u5408\u5e76\u591a\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u7684\u503c\u5462\uff0c\u8fd9\u91cc\u53ef\u4ee5\u540c\u6837\u7528\u4e0a\u9762\u7684\u4ee3\u7801\u4e3e\u4e2a\u4f8b\u5b50\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4f8b\u5b50\u4e00",title:"\u4f8b\u5b50\u4e00"},"const app = () => {\n  const [data, setData] = React.useState<number>(0);\n  const [string, setString] = React.useState<string>('');\n  \n  console.log(force, string)\n  return (\n    <div onClick={() => {\n      setData(data + 1);\n      setData(data + 2);\n      setString(string + 'string')\n    }} />\n  )\n}\n\n// 2 'string'\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\uff0capp\u4ec5\u6e32\u67d3\u4e00\u6b21\uff0c\u4e24\u4e2a\u540c\u6837\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\u51fd\u6570\u4ec5\u4ec5\u53ea\u6709\u7b2c\u4e8c\u4e2a\u751f\u6548\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"setTimout"),"\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"promise"),"\u7b49\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u663e\u7136\u5e76\u4e0d\u5b58\u5728\u5408\u5e76\u73b0\u8c61\u4e86\uff0c\u5728\u4e00\u6b21",(0,o.kt)("inlineCode",{parentName:"p"},"onClick"),"\u4e8b\u4ef6\u4e2d\u5237\u65b0\u7ec4\u4ef6\u72b6\u6001\uff0c\u53ef\u4ee5\u770b\u5230\u591a\u6b21\u6253\u5370\u51fa\u5237\u65b0\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4f8b\u5b50\u4e8c",title:"\u4f8b\u5b50\u4e8c"},"const app = () => {\n  const [data, setData] = React.useState<number>(0);\n  const [string, setString] = React.useState<string>('');\n  \n  return (\n    <div onClick={() => {\n      setTimeout(() => {\n        setData(data + 1);\n        setData(data + 2);\n        setString(string + 'string')\n      }, 300)\n    }} />\n  )\n}\n\n// 1 ''\n// 2 ''\n// 2 'string'\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u73b0\u8c61\u4e3b\u8981\u662f\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u56e2\u961f\u7684\u64cd\u4f5c\uff0c\u5b83\u4eec\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u7684jsx\u4e2d\u5bf9\u6240\u6709\u7684onClick\u6216\u8005onChange\u4e8b\u4ef6\u8fdb\u884c\u4e86\u4e00\u4e2a\u63a5\u7ba1\u7684\u64cd\u4f5c\uff0c\u4f7f\u5176\u6240\u6709state\u5728\u8fd9\u4e9b\u4e8b\u4ef6\u5185\u6709\u5408\u5e76\u73b0\u8c61\uff0c\u800c\u5728\u5176\u4ed6\u56de\u8c03\u4e2d\u53ef\u4ee5\u8bf4\u662f\u8131\u79bb\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u63a5\u7ba1"),"\uff0c\u56e0\u6b64\u6ca1\u6709\u4efb\u4f55\u5408\u5e76\u7684\u73b0\u8c61"),(0,o.kt)("h3",{id:"\u65f6\u5e8f\u4e00\u81f4"},"\u65f6\u5e8f\u4e00\u81f4"),(0,o.kt)("p",null,"\u5728\u5b98\u7f51\u7684\u4ecb\u7ecd\u4e2d\uff0c\u65f6\u5e8f\u4e00\u81f4\u662f\u88ab\u63d0\u5230\u7684\u3002\u4f55\u8c13\u65f6\u5e8f\u4e00\u81f4\uff0c\u5c31\u662f\u6bcf\u6b21\u6e32\u67d3\u7684\u65f6\u5019\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u65f6\u7684\u987a\u5e8f\u5e94\u8be5\u662f\u4e00\u6837\u7684\uff0c\u6700\u5e38\u89c1\u7684\u60c5\u51b5\u5c31\u662f\u4e0d\u80fd\u5728\u6761\u4ef6\u5224\u65ad\u8bed\u53e5\u540e\u52a0\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"useState")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const app = () => {\n  // \u5e38\u89c4\u9519\u8bef1.\u5728if\u8bed\u53e5\u4e2d\u5305\u88f9useState\n  if(1 + 1 === 2) {\n    const [data, setData] = React.useState<number>(0);\n  }\n\n\n  // \u5e38\u89c4\u9519\u8bef1.\u5728useState\u524d\u8fd4\u56de\u51fd\u6570\u5f0f\u7ec4\u4ef6\n  if(2 + 2 === 4) {\n    return \n  }\n\n  const [string, setString] = React.useState<number>(0);\n\n  return (\n    <div onClick={() => {\n      setData(data + 1);\n    }} />\n  )\n}\n")),(0,o.kt)("p",null,"\u4e3a\u4ec0\u4e48\u6bcf\u6b21\u6e32\u67d3\u51fd\u6570\u90fd\u5fc5\u987b\u8981\u6309\u7167\u540c\u6837\u7684\u987a\u5e8f\u6e32\u67d3\u51fa\u6765",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u5462\uff1f\u7406\u89e3\u8fd9\u4e2a\u95ee\u9898\u9700\u8981\u4ece\u6700\u7b80\u5355\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u51fd\u6570\u5165\u624b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"let x\nfunction useState(initialValue) {\n   x = x === undefined ? initialValue : x\n  function setX(newState) {\n    x = newState;\n    render(); // \u53bb\u6e32\u67d3\u65b0\u7ec4\u4ef6\n  }\n  return [x, setX];\n}\n\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u53ef\u4ee5\u7b80\u5355\u5730\u7406\u89e3\u4e3a\u53ef\u4ee5\u505a\u5230\u8d4b\u503c\uff0c\u5237\u65b0\u7684\u4f5c\u7528\u3002\u4f46\u662f\u5f53\u5728\u7ec4\u4ef6\u4e2d\u8c03\u7528\u591a\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u8fd9\u4e2a\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u663e\u7136\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"x"),"\u4e0d\u591f\u7528\u4e86!"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019React\u56e2\u961f\u91c7\u7528\u7684\u505a\u6cd5\u662f\u6839\u636e\u6bcf\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u5728\u7ec4\u4ef6\u4e2d\u521b\u5efa\u7684\u987a\u5e8f\u6765\u8fdb\u884c\u4e00\u4e2a\u6807\u8bb0\uff0c\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"x"),"\u503c\u7ed9\u6309\u7167\u76f8\u540c\u7684\u987a\u5e8f\u505a\u4e00\u4e2a\u73af\u5f62\u94fe\u8868\uff0c\u5728\u53d6\u51fa\u7684\u65f6\u5019\u6309\u7167\u76f8\u540c\u7684\u987a\u5e8f\u62ff\u5230\u6b63\u786e\u7684\u503c\u3002"),(0,o.kt)("h2",{id:"\u6e90\u7801\u89e3\u6790"},"\u6e90\u7801\u89e3\u6790"),(0,o.kt)("p",null,"\u76ee\u524d React \u6784\u67b6\u53ef\u4ee5\u5206\u4e3a\u4e09\u5c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport ReactDom from 'react-dom'\n\nlet firstWorkInProgressHook = {\n  memoizedState: null,\n  next: null\n};\nlet workInProgressHook;\n\nfunction useState(initState) {\n  let currentHook = workInProgressHook.next ? workInProgressHook.next : {\n    memoizedState: null,\n    next: null\n  };\n\n  function setState(newState) {\n    currentHook.memoizedState = newState;\n    render()\n  }\n\n  // \u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48 useState \u4e66\u5199\u987a\u5e8f\u5f88\u91cd\u8981\u7684\u539f\u56e0\uff0c\u56e0\u4e3a\u662f\u7528\u94fe\u8868\u6765\u5b58\u50a8\u7684\n  if (workInProgressHook.next) {\n    workInProgressHook.next\n  } else {\n    // \u53ea\u6709\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u624d\u4f1a\u8fdb\u5165\n    workInProgressHook.next = currentHook;\n    // \u5c06 workInProgressHook \u6307\u5411 {}\n    workInProgressHook = currentHook;\n  }\n\n\n  return [currentHook.memoizedState, setState]\n}\n\nfunction render() {\n  // \u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u7684\u65f6\u5019\uff0c\u90fd\u5c06 workInProgressHook \u6307\u5411 firstWorkInProgressHook\n  workInProgressHook = firstWorkInProgressHook;\n  ReactDOM.render( < Counter / > , document.getElementById('root'));\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scheduler\uff08\u8c03\u5ea6\u5668\uff09 \u2014\u2014\u2014\u2014 \u8c03\u5ea6\u4efb\u52a1\u7684\u4f18\u5148\u7ea7"),(0,o.kt)("li",{parentName:"ul"},"Reconciler\uff08\u534f\u8c03\u5668\uff09\u2014\u2014\u2014\u2014 \u8d1f\u8d23\u627e\u51fa\u53d8\u5316\u7684\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"Renderer\uff08\u6e32\u67d3\u5668\uff09\u2014\u2014\u2014\u2014 \u8d1f\u8d23\u5c06\u53d8\u5316\u7684\u7ec4\u4ef6\u6e32\u67d3\u5230\u9875\u9762\u4e0a")),(0,o.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u6a21\u4eff",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\u5199\u51fa\u4ee5\u4e0b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function useState(initialState) {\n  let hook\n\n  // \u7b2c\u4e00\u6b21\u6302\u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\n  if(isMount) {\n    // ...mount \u65f6\u9700\u8981\u751f\u6210 hook \u5bf9\u8c61\n    hook = {\n      queue: {\n        pending: null\n      },\n      memoizedState: initialState,\n      next: null\n    }\n    \n\n    // \u5c06hook\u63d2\u5165 fiber.memoizedState \u94fe\u8868\u672b\u5c3e\n    if(!fiber.memoizedState) {\n      fiber.memoizedState = hook\n    }  else {\n      workInProgressHook.next = hook\n    }\n\n    // \u79fb\u52a8 workInProgressHook \u6307\u9488\n    workInProgressHook = hook\n  } else {\n    // ...update\u65f6\u4eceworkInProgressHook \u4e2d\u53d6\u51fa\u8be5useState \u5bf9\u5e94\u7684hook\n    hook = workInProgressHook;\n    // \u79fb\u52a8 workInProgressHook \u6307\u9488\n    workInProgressHook = workInProgressHook.next\n  }\n\n  let baseState = hook.memoizedState;\n\n  if(hook.queue.pending) {\n    // \u6839\u636e queue.pending \u4e2d\u4fdd\u5b58\u7684 update \u66f4\u65b0 state\n    let firstUpdate = hook.queue.pending.next;\n\n    do {\n      const action = firstUpdate.action;\n      baseState = action(baseState);\n      firstUpdate = firstUpdate.next\n      // \u6700\u540e\u4e00\u4e2aupdate\u6267\u884c\u5b8c\u540e\u8df3\u51fa\u5faa\u73af\n    } while (firstUpdate !== hook.queue.pending.next) {\n      hook.queue.pending = null\n    }\n  }\n  hook.memoizedState = baseState\n\n  return [baseState, dispatchAction.bind(null, hook.queue)]\n}\n")))}d.isMDXComponent=!0}}]);