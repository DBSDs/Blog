"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3705],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],l={sidebar_position:4},c="\u4e3a\u4ec0\u4e48React.FC\u88ab\u5f03\u7528\u4e86",i={unversionedId:"ts/removeReact.FC",id:"ts/removeReact.FC",title:"\u4e3a\u4ec0\u4e48React.FC\u88ab\u5f03\u7528\u4e86",description:"\u6765\u81eagithub:merged pull request(Remove React.FC from Typescript template)",source:"@site/docs/ts/removeReact.FC.md",sourceDirName:"ts",slug:"/ts/removeReact.FC",permalink:"/Blog/docs/ts/removeReact.FC",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5728tsconfig\u4e2d\u7684\u914d\u7f6e\u53ca\u5b9e\u8df5",permalink:"/Blog/docs/ts/tsconfig"}},s={},u=[{value:"1.\u9690\u5f0f\u5730\u63d0\u4f9b\u4e86\u4e00\u4e2achildren\u5c5e\u6027",id:"1\u9690\u5f0f\u5730\u63d0\u4f9b\u4e86\u4e00\u4e2achildren\u5c5e\u6027",level:2},{value:"2.\u4e0d\u652f\u6301\u6cdb\u578b",id:"2\u4e0d\u652f\u6301\u6cdb\u578b",level:2},{value:"3. \u4f7f\u7ec4\u4ef6\u4f5c\u4e3a\u547d\u540d\u7a7a\u95f4\u7684\u7c7b\u578b\u5b9a\u4e49\u66f4\u56f0\u96be",id:"3-\u4f7f\u7ec4\u4ef6\u4f5c\u4e3a\u547d\u540d\u7a7a\u95f4\u7684\u7c7b\u578b\u5b9a\u4e49\u66f4\u56f0\u96be",level:2},{value:"4.\u4e0d\u80fd\u6b63\u786e\u7684\u4e3adefaultProps\u5de5\u4f5c",id:"4\u4e0d\u80fd\u6b63\u786e\u7684\u4e3adefaultprops\u5de5\u4f5c",level:2},{value:"* React.FC\u7684\u597d\u5904",id:"-reactfc\u7684\u597d\u5904",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e3a\u4ec0\u4e48reactfc\u88ab\u5f03\u7528\u4e86"},"\u4e3a\u4ec0\u4e48React.FC\u88ab\u5f03\u7528\u4e86"),(0,o.kt)("p",null,"\u6765\u81ea",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/pull/8177"},"github:merged pull request(Remove React.FC from Typescript template)")),(0,o.kt)("p",null,"\u603b\u7ed3\u5982\u4e0bReact.FC\u603b\u5171\u6709\u51e0\u4e2a\u7f3a\u70b9\uff1a"),(0,o.kt)("h2",{id:"1\u9690\u5f0f\u5730\u63d0\u4f9b\u4e86\u4e00\u4e2achildren\u5c5e\u6027"},"1.\u9690\u5f0f\u5730\u63d0\u4f9b\u4e86\u4e00\u4e2achildren\u5c5e\u6027"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const App: React.FC = () => { /*... */ };\nconst Example = () => {\n    <App><div>Unwanted children</div></App>\n}\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u4f8b\u5b50\u4e0d\u4f1a\u62a5\u9519\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"App"),"\u7ec4\u4ef6\u5b9a\u4e49\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC"),"\u7684\u65f6\u5019\uff0c\u5c31\u5305\u542b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"children"),"\u5c5e\u6027\u3002\u5373\u4f7f\u4f60\u7684\u672c\u610f\u662f\u6ca1\u6709\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"App"),"\u63d0\u4f9b",(0,o.kt)("inlineCode",{parentName:"p"},"children"),"\u5c5e\u6027\uff0c\u4f46\u662f\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Example"),"\u7ec4\u4ef6\u4e2d\u663e\u7136\u4e0d\u4f1a\u62a5\u9519\u3002"),(0,o.kt)("h2",{id:"2\u4e0d\u652f\u6301\u6cdb\u578b"},"2.\u4e0d\u652f\u6301\u6cdb\u578b"),(0,o.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u53ef\u4ee5\u50cf\u5b9a\u4e49\u51fd\u6570\u7684\u6cdb\u578b\u4e00\u6837\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u7684\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff0c\u6bd4\u5982\u5e38\u7528\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Table"),"\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type GenericComponentProps<T> = {\n  datasSource: T\n  column: ColumnProps<T>\n}\nconst GenericComponent = <T>(props: GenericComponentProps<T>) => {/*...*/}\n")),(0,o.kt)("p",null,"\u4f46\u662f\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC"),"\u7684\u65f6\u5019\u65e0\u80fd\u4e3a\u529b\u4e86"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const GenericComponent: React.FC</* ??? */> = <T>(props: GenericComponentProps<T>) => {/*...*/}\n")),(0,o.kt)("h2",{id:"3-\u4f7f\u7ec4\u4ef6\u4f5c\u4e3a\u547d\u540d\u7a7a\u95f4\u7684\u7c7b\u578b\u5b9a\u4e49\u66f4\u56f0\u96be"},"3. \u4f7f\u7ec4\u4ef6\u4f5c\u4e3a\u547d\u540d\u7a7a\u95f4\u7684\u7c7b\u578b\u5b9a\u4e49\u66f4\u56f0\u96be"),(0,o.kt)("p",null,"\u5982\u4e0b\u7684\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Select>\n    <Select.Item />\n</Select>\n")),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC"),"\u4e2d\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"Select"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"Select.Items"),"\u7684\u5c5e\u6027\u901a\u5e38\u9700\u8981"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const  Select: React.FC<SelectProps> & { Item: React.FC<ItemProps> } = (props) => {/* ... */ }\nSelect.Item = (props) => { /*...*/ }\n")),(0,o.kt)("p",null,"\u800c\u662f\u7528\u81ea\u5df1\u7684\u7c7b\u578b\u5b9a\u4e49\u4ec5\u4ec5\u53ea\u9700\u8981"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Select = (props: SelectProps) => {/* ... */}\nSelect.Item = (props: ItemProps) => { /*...*/ }\n")),(0,o.kt)("h2",{id:"4\u4e0d\u80fd\u6b63\u786e\u7684\u4e3adefaultprops\u5de5\u4f5c"},"4.\u4e0d\u80fd\u6b63\u786e\u7684\u4e3adefaultProps\u5de5\u4f5c"),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u4e0d\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC"),"\u65f6\uff0c\u8fd9\u6837\u662f\u53ef\u4ee5\u6b63\u786e\u7684\u7f16\u8bd1\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'type  ComponentProps = { name: string; }\n\nconst  Component = ({ name }: ComponentProps) => (<div>\n    {name.toUpperCase()} /* Safe since name is required */\n</div>);\nComponent.defaultProps = { name: "John" };\n\nconst  Example = () => (<Component />) \n')),(0,o.kt)("p",null,"\u4f46\u5982\u679c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC"),"\u5219\u4f1a\u6709\u95ee\u9898\uff1a\u5982\u679c\u662f\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC<name: string>"),"\u5c06\u4f1a\u4f7f",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\u53d8\u6210\u5fc5\u4f20\u5c5e\u6027\uff0c"),(0,o.kt)("p",null,"\u6216\u8005\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC<name?: string>"),"\u5219\u4f1a\u4f7f",(0,o.kt)("inlineCode",{parentName:"p"},"name.toUpperCase()"),"\u62a5\u4e00\u4e2a\u7c7b\u578b\u9519\u8bef\u3002"),(0,o.kt)("h2",{id:"-reactfc\u7684\u597d\u5904"},"* React.FC\u7684\u597d\u5904"),(0,o.kt)("p",null,"\u4e0d\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC"),"\u4e5f\u4e0d\u662f\u4e00\u65e0\u662f\u5904\uff0c\u4ed6\u5b9a\u4e49\u4e86\u4e00\u4e2a\u8fd4\u56de\u7684\u7c7b\u578b\u7ea6\u675f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Component = () => {\n  return undefined; // \u5f53\u8fd9\u6837\u8fd4\u56de\u7c7b\u578b\u65f6\u4f7f\u7528React.FC\u80fd\u5feb\u901f\u6355\u6349\u9519\u8bef\n}\n")),(0,o.kt)("p",null,"\u4f46\u662f\u8fd9\u5e76\u4e0d\u80fd\u8282\u7701\u591a\u5c11\u7684\u5de5\u4f5c\u91cf:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Component1 = (props: ComponentProps): JSX.Element => { /*...*/ }\nconst Component2: FC<ComponentProps> = (props) => { /*...*/ }\n")))}d.isMDXComponent=!0}}]);