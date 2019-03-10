module.exports = {
  siteMetadata: {
    title: `pendexter.dev`,
    description: `Personal site for software developer and aspiring mandolin player.`,
    author: `@pendext`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2F2F4F`,
        theme_color: `#2F2F4F`,
        display: `minimal-ui`,
        // icon: ``,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
