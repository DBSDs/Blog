// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `Op-chen'Blog`,
  tagline: 'Op-chen的个人主页',
  url: 'https://blog-jade-five-78.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/avator.png',
  projectName: 'Blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  // themes: ['@docusaurus/theme-search-algolia'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')] 
        },
        blog: {
          showReadingTime: true,

          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: `Op-chen'Blog`,
        logo: {
          alt: 'My Site Logo',
          src: '/img/avator.png',
        },
        items: [{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '博客',
          },
          {
            type: 'dropdown',
            label: '工具箱',
            position: 'left',
            items: [{
                label: '时间戳工具',
                to: '/tools/timestamp',
              },
              {
                label: 'Base64编解码',
                to: '/tools/base64compute',
              },
              {
                label: '三维地球',
                to: '/tools/earth',
              },
              {
                label: 'Json格式',
                href: 'https://dbsds.github.io/json-view-web/build/',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/DBSDs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub 仓库',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // Algolia 提供的应用 ID
        appId: 'TS23858RNP',

        //  公开 API 密钥：提交它没有危险
        apiKey: '649cdab6bb34cb22dbe8e4d40d36823e',

        indexName: 'jade-five-78',

        // 可选：见下文
        contextualSearch: true,

        // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
        externalUrlRegex: 'external\\.com|domain\\.com',

        // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),
  plugins: ['docusaurus-plugin-sass']
};

module.exports = config;