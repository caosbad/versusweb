require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Versus",
    siteUrl: "http://versus-flow.art/",
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "GA-EXAMPLE",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://art.us1.list-manage.com/subscribe/post?u=40a0977850285ef1131ddbf9e&id=f29d57a2fa",
        timeout: 3500,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Source Sans Pro:400,600,700",
            "Lato:300,400,500,700,900",
            "IBM Plex Mono:300,400",
            "Roboto Mono:300",
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
