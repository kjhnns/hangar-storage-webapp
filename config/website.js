module.exports = {
  pathPrefix: `/`,
  url: `https://hangar-storage-webapp.netlify.app/`,
  title: `Hangar Storage`,
  titleTemplate: `%s — Hangar Storage`,
  description: `Nunca mais visite uma unidade de Storage.`,
  image: `/images/meta-image-default.png`, // Path to the default meta image in `static` folder
  siteLanguage: `en`, // Language tag on <html> element

  // Web App Manifest
  favicon: `src/images/favicon.png`, // Used for manifest favicon generation
  shortName: `Hangar`, // shortname for manifest. *Must* be shorter than 12 characters
  themeColor: `#ffffff`,
  backgroundColor: `#ffffff`,

  // schema.org JSONLD
  headline: `Nunca mais visite uma unidade de Storage.`,
  author: `Johannes Klumpe`,

  // Twitter
  twitter: `@kjhnns`, // Twitter username
}
