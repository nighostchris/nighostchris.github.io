module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/"
      }
    }
  ]
}
