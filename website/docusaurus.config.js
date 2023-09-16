// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FOR DEVELOPERS - IANA SYSTEMS',
  tagline: ' IANA SYSETMS - we help developers succeed in shortest time for less money ',
  url: 'https://dev.iana.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  favicon: 'img/Gloo-Logo.ico',
  organizationName: 'ianaio - IANA SYSTEMS',
  projectName: 'devdotianaio',
  themeConfig: {
    navbar: {
      title: 'iana.io',
      logo: {
        alt: 'IANA SYSTEM at www.iana.io',
        src: 'img/ianaio-logo.webp',
      },
      items: [
        //{to: '/analysis', label: 'Analysis', position: 'left'},
        {
          href: 'https://dev.iana.io/docs/getting-started',
          label: 'Analysis',
          position: 'left',
        },
	//{to: '/blog', label: 'Analysis', position: 'left'},
        {
          type: 'dropdown',
          label: 'iana.io',
          position: 'right',
          items: [
            {
              label: 'Home',
              href: 'https://www.iana.io/',
            },
          ],
        },
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/AAAAAAA', // #gloo in Yew server
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
	      label: 'EMAIL: dev(at)iana.io',
              href: 'https://dev.iana.io',
            },
            {
              label: 'Blog',
              to: '/blog',
            },

          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['rust', 'toml'],
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ianaio/dev/blob/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ianaio/dev/blob/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
