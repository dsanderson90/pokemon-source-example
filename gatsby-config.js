module.exports = {
  siteMetadata: {
    title: `gatsby-source-pokeapi`,
    description: `Example repo of usage of the gatsby-source-pokemons plugin.`,
    author: `@dsanderson_`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-source-pokemons`,
    // {
    //   // including a plugin from outside the plugins folder needs the path to it
    //   resolve: require.resolve(`../gatsby-source-pokemons`),
    // },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-layout`
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
