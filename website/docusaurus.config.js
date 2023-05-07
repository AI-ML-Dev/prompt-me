// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  // Site metadata
  title: "Misadventures in Generative AI",
  url: "https://prompt-me.dev",
  baseUrl: "/",
  favicon: 'img/favicon.ico',

  // Custom properties (defined by you)
  // See: https://docusaurus.io/docs/api/docusaurus-config#customfields
  customFields: {
  },

  // Static Directories (locations of static assets)
  // Files/sub-folders will be copied as-is to build, visible under "/" 
  // See: https://docusaurus.io/docs/api/docusaurus-config#staticDirectories
  staticDirectories: [  
    'static',
  ],

  // HTML <head> tags
  // defined as { tagName: string, attributes: Object } objects
  // See: https://docusaurus.io/docs/api/docusaurus-config#headTags
  headTags: [
  ],

  // HTML <script> tags inserted into <head>
  // See: https://docusaurus.io/docs/api/docusaurus-config#scripts
  scripts: [
  ],

  // Also see:
  // stylesheets, clientModules, ssrTemplate,

  // Website tagline (landing page)
  tagline: 'From Curious Coder to Prompt Queen 👑',

  // Customize presence/absence of trailing slash in URLs
  trailingSlash: undefined,

  // For robots.txt (default=false)
  // Set to true to prevent search engines indexing site
  noIndex: false,

  // Deployment config (GitHub Pages)
  organizationName: 'AI-ML-Dev', 
  projectName: 'prompt-me',
  deploymentBranch: 'gh-pages',

  // Early detection (throw error or warning?)
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  // ========> CONFIG PRESET = CLASSIC
  // A "preset" is a bundle of themes+plugins shipped together
  // See "preset-classic"
  // https://docusaurus.io/docs/using-plugins#docusauruspreset-classic
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        
        // @docusaurus/
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },

        // Make blog the root
        // See: https://docusaurus.io/docs/blog#blog-only-mode
        blog: {
          path: './blog',     // Directory for source
          routeBasePath: '/', // Route for website
          blogTitle: '#100DaysOfPrompts',
          blogDescription: 'Exploring LLMs, Generative AI, Prompt Engineering and more.',
          blogSidebarTitle: '#100Days Journey',
          blogSidebarCount: 10, // 'ALL',
          postsPerPage: 7,     // 'ALL',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // ========> CONFIG FOR MAIN THEMES
  // Customizes UI elements
  // Navbar, Footer, CodeBlock, TOC, 
  // Common, Hooks, i18n, etc.
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // Replace with your project's social card
      image: 'img/ddalle-chat-peacock.jpeg',

      // Light/Dark color mode switcher 
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: 'Prompt Me!',
        logo: {
          alt: 'Prompt-Me.Dev Logo',
          src: 'img/logo.jpeg',
        },
        items: [
          /*
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: '#100Days', position: 'left'},
          */
          {to: '/landing', label: 'About', position: 'right'},
          { 
            href: 'https://github.com/nitya/nitya.dev',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: "light",
        links: [
          { label: `Twitter`, to: 'https://twitter.com/nitya' },
          { label: `GitHub`, to: 'https://github.com/nitya' },
          { label: `LinkedIn`, to: 'https://linkedin.com/in/nityan' },
          { label: `Dev.to`, to: 'https://dev.to/nitya' },
          { label: `SketchTheDocs`, to: 'https://sketchthedocs.dev' },
          { label: `Visual Guides`, to: 'https://cloud-skills.dev' },
          { label: `In #30Days`, to: 'https://in30Days.dev' },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nitya Narasimhan, PhD - ❤️ Built with Docusaurus, Images from OpenAI`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      clarity: {
        ID: "gzukylgwjh", // Instructions below
      }

    }),

  //==========> CONFIG PLUGINS
  //See: https://docusaurus.io/docs/api/plugins
  plugins: [
    "docusaurus-plugin-clarity",
    
    [      
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ]
  ],

  //==========> CONFIG THEMES (custom)
  //See: https://docusaurus.io/docs/api/themes
  themes: [
  ],
};

module.exports = config;
