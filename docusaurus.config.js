// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `Op-chen'Blog`,
  tagline: 'Op-chen的个人主页',
  url: 'https://github.com/DBSDs',
  baseUrl: '/Blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/Blog/img/avator.png',
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
          remarkPlugins: [require('mdx-mermaid'), ]
        },
        // blog: {
        //   showReadingTime: true,

        //   editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
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
          src: '/Blog/img/avator.png',
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
              label: 'Json格式',
              href: 'https://dbsds.github.io/json-view-web/build/',
            }, ],
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
    }),
  plugins: ['docusaurus-plugin-sass']
};

module.exports = config;