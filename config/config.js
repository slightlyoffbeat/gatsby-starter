module.exports = {
  pathPrefix: '/', // Prefix for all links"
  title: 'Gatsby Starter', // Site Title
  titleAlt: 'Gatsby Starter', // Title for JSONLD
  shortName: 'gatsbystarter', // shortname for manifest
  description: 'A Gatsby Starter', // Site description
  siteHeadline: 'A Gatsby Starter', // Headline for schema.org JSONLD
  url: 'https://www.website.com', //  Site domain. No trailing slash!
  siteUrl: `https://www.website.com${this.pathPrefix}`, // site domain with pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  author: 'Dan', // Author for schemaORGJSONLD
  favicon: 'src/images/favicon.png',
  logo: 'src/images/logo.png',
  banner: 'src/images/banner.png',
  twitter: '@twitter_handle',
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-xxxxxxxx-x',
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
};
