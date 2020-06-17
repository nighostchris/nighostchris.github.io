module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
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
    }
  ]
}
