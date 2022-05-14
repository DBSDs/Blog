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
          remarkPlugins: [require('mdx-mermaid'), {
            theme: {
              light: 'neutral',
              dark: 'forest'
            }
          }]
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
            type: 'html',
            value: `<img src='/Blog/svg/github.svg' href="https://github.com/facebook/docusaurus" />`,
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [{
      //       title: '文章',
      //       items: [{
      //         label: '博客',
      //         to: '/docs/blog',
      //       }, ],
      //     },
      //     {
      //       title: '社区',
      //       items: [{
      //         label: '掘金',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       }, ],
      //     },
      //     {
      //       title: '更多',
      //       items: [{
      //         label: 'GitHub',
      //         href: 'https://github.com/DBSDs',
      //       }, ],
      //     },
      //   ],
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;