let proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Igasfy`,
    description: `Where you find images`,
    author: `@r3ndydinar`,
  },
  // Enables the use of function URLs locally
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: { "/.netlify/functions/": "" },
      })
    )
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    // manifest 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Igasfy`,
        short_name: `Igasfy`,
        start_url: `/`,
        background_color: `#1f9362`,
        theme_color: `#1f9362`,
        display: `standalone`,
        icon: `src/images/icon-512.png`,
        icons: [
          {
            src: `src/images/icon-192.png.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/icon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
