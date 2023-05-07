# Website: Under the Hood

* Build using [Docusaurus](http://docusaurus.io) platform. 
* Long-term goal: improve a11y, performance, SEO
* Short-term goal: Get a blog running!

---

## 1. Setup

These are the commands used at the _root_ folder of this repo, to create _this_ `website/` folder with the source for the site.

```bash
$ nvm use --latest
Now using node v18.16.0 (npm v9.6.5)

$ npx create-docusaurus@latest website classic
[SUCCESS] Created website.
```
Change to the `website/` folder and run commands as useful:

 * `npm start` - Starts the development server (preview)
 * `npm run build` - Creates static site build for production.
 * `npm run serve` - Serves the built website locally (preview)
 * `npm deploy` - Publishes site to GitHub pages. (needs config)

I prefer using the `npx docusaurus` format instead of `npm` - for example:
 * `npx docusaurus start` starts the dev server
 * `npx docusaurus --help`gets full list of commands
 * `npx docusaurus <command> --help` gets details on command.

---

## 2. Configure

The [`docsaurus.config.js`](https://docusaurus.io/docs/configuration#what-goes-into-a-docusaurusconfigjs) file is the heart of the system. It exports a single [config](https://docusaurus.io/docs/api/docusaurus-config) object that provides:
 - site metadata (e.g., title, url, baseurl, favicon)
 - deployment config info (e.g., github pages)
 - theme, plugin and preset (theme/plugin bundles) config
 - custom configuration properties.

Updated the configuration file to:
 - Make blog the landing page
 - Hide docs and other pages 
 - Change footer
 - Use ideal image
 - Add Clarity Analytics
 - Update (trailingSlash, org, project, deployment) for GitHub pages use
 - Update link to GitHub logo in navbar, to point to deployment endpoint

---

## 3. Deploy

Validate that build is stable first, by running local build and preview:. 

```bash
$ cd website
$ npx docusaurus build
$ npx docusarus serve
```

Then setup the GitHub Actions workflow to have Docusaurus build the static site content in the [gh-pages branch](https://docusaurus.io/docs/deployment#deploying-to-github-pages) of the repo. Commit this step to test the workflow runs (and creates the gh-pages branch)


Finally, configure [GitHub Settings](https://github.com/AI-ML-Dev/prompt-me/settings/pages) for the project, to push the static files in that branch to the GitHub Pages hosted endpoint in the cloud.

Note that we are using a a custom domain for this site. 
 * Follow the [GitHub guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) and update your DNS provider with the IP addresses for GitHub pages. 
 * Once, update the [GitHub Settings](https://github.com/AI-ML-Dev/prompt-me/settings/pages) for custom domain, and enforce HTTPS. DNS check may take a while to complete.
 * Don't forget to [configure the www subdomain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) for completeness.

---

## 4. Usage

The site is now ready for use as a blog. 
 * The blog feed can be found at [/rss.xml](https://prompt-me.dev/rss.xml) by default.
 * Configure [Table Of Contents]() if you want TOC at top-right of page.