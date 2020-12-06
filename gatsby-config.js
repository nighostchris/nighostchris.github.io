module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    "gatsby-plugin-postcss",
    "gatsby-plugin-next-seo",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "writings",
        path: "./src/data/writings"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/data/projects"
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["KievitOT, KievitOT-Book, KievitOT-BookItalic"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Nighost",
        fieldName: "nighost",
        url: "https://nighostchris-github-io-backend.herokuapp.com/graphql",
      },
    },
  ]
}
