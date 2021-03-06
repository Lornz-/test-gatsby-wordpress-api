require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `My awesome blog`,
    description: `This is my awesome blog`,
    author: `Laurent Harel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.WP_API_BASE_URL,
        protocol: `http`,
        hostingWPCOM: false,
        useAcf: false,
        includedRoutes: [
          "**/pages",
          "**/posts",
          "**/tags",
          "**/categories",
          "**/users",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
