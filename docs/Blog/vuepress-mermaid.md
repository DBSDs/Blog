# 博客添加流程图

vuepress 和 docusaurus 框架下的博客均可以自己编写。

其本质就是对markdown 的语法进行扩展

说人话就是：**将md中的关键字抓到匹配，然后替换上需要的组件来实现语法扩展**

## vuepress

首先注册一个插件 

```js
const plugins = (options?, ctx?) => {
  return {
    name: "vuepress-plugin-mermaidjs",
    define: {
      MERMAID_OPTIONS: options,
    },
    extendsMarkdown(md) {
      md.use(require("./markdownItPlugin"));
    },
  };
};

export default plugins;
```

```js
// markdownItPlugin

const { hash } = require("@vuepress/utils");
const markdownItFence = require("./markdownItFence");

module.exports = function mermaidjsPlugin(md) {
  return markdownItFence(md, "mermaid-fence", {
    render: (tokens, idx, _options, env, self) => {
      const token = tokens[idx];
      const key = `mermaid_${hash(idx)}`;
      const { content } = token;

      let encoded = encodeURIComponent(content);
      return `<ClientOnly><Mermaid id="${key}" graph="${encoded}"></Mermaid></ClientOnly>`;
    },
    validate: (params) => {
      return params.trim().split(" ").includes("mermaid");
    },
  });
};

```

可以看到我们是通过extendsMarkdown中传出来的参数md来解析在md中的一些关键字，目前解析的肯定是```mermaid样字样。

然后将我们需要的组件返回出来，这里我们需要引入mermaid来解析流程图了。

```js
import { h, ref, watchEffect, reactive, onMounted } from "vue";
import Loading from "./Loading";
import mermaid from "mermaid";

const getThemeVariables = (isDarkMode: boolean): Record<string, unknown> => {
  return {
    dark: isDarkMode,
    background: isDarkMode ? "#1e1e1e" : "#fff",

    primaryColor: isDarkMode ? "#389d70" : "#4abf8a",
    primaryBorderColor: isDarkMode ? "#389d70" : "#4abf8a",
    primaryTextColor: "#fff",

    secondaryColor: "#f39c12",
    secondaryBorderColor: isDarkMode ? "#fff" : "#000",
    secondaryTextColor: isDarkMode ? "#ddd" : "#333",

    tertiaryColor: isDarkMode ? "#22182d" : "#eeeaf3",
    tertiaryBorderColor: isDarkMode ? "#fff" : "#000",
    tertiaryTextColor: isDarkMode ? "#ddd" : "#333",

    // note
    noteBkgColor: isDarkMode ? "#f6d365" : "#fff5ad",
    noteTextColor: "#242424",
    noteBorderColor: isDarkMode ? "#f6d365" : "#333",

    lineColor: isDarkMode ? "#d3d3d3" : "#333",
    textColor: isDarkMode ? "#fff" : "#242424",

    mainBkg: isDarkMode ? "#389d70" : "#4abf8a",
    errorBkgColor: "#eb4d5d",
    errorTextColor: "#fff",

    // flowchart
    nodeBorder: isDarkMode ? "#389d70" : "#4abf8a",
    nodeTextColor: isDarkMode ? "#fff" : "#242424",

    // sequence
    signalTextColor: isDarkMode ? "#9e9e9e" : "#242424",

    // class
    classText: "#fff",

    // state
    labelColor: "#fff",

    // colors
    fillType0: isDarkMode ? "#cf1322" : "#f1636e",
    fillType1: "#f39c12",
    fillType2: "#2ecc71",
    fillType3: "#fa541c",
    fillType4: "#25a55b",
    fillType5: "#13c2c2",
    fillType6: "#096dd9",
    fillType7: "#aa6fe9",
  };
};

const Mermaid = {
  name: "Mermaid",
  props: {
    id: {
      type: String,
      required: false,
      default() {
        return "diagram_" + Date.now();
      },
    },
    graph: {
      type: String,
      required: true,
    },
    style: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      svg: undefined,
    };
  },

  setup(props) {
    const isDarkmode = ref(false);
    const state = reactive({
      svg: undefined,
    });
    onMounted(() => {
      const html = document.querySelector("html") as HTMLElement;
      const getDarkmodeStatus = (): boolean =>
        html.classList.contains("dark") ||
        html.getAttribute("data-theme") === "dark";
      isDarkmode.value = getDarkmodeStatus();
    });

    watchEffect(() => {
      if (props.graph) {
        mermaid.initialize({
          startOnLoad: true,
          themeVariables: getThemeVariables(isDarkmode.value),
          // ...MERMAID_OPTIONS
        });

        mermaid.render(props.id, decodeURIComponent(props.graph), (svg) => {
          state.svg = svg;
        });
      }
    });

    return () => {
      const style = {
        width: "100%",
        ...props.style,
      };

      return state.svg
        ? h("div", {
            innerHTML: state.svg,
            ...style,
          })
        : h(Loading);
    };
  },
  components: {
    Loading,
  },
};

export default Mermaid;
```

至此基本成功，将mermaid组件注册在clientAppEnhanceFiles 中就可以了

```js
// config.ts
export default defineUserConfig({
//...
  clientAppEnhanceFiles: path
    .resolve(__dirname, "clientAppEnhance.ts")
    .replace(/\\/g, "/"),
})

```

## docusaurus
在 docusaurus 中我推荐直接使用第三方插件 [mdx-mermaid](https://sjwall.github.io/mdx-mermaid/docs/intro/)