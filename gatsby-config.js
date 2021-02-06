module.exports = {
  siteMetadata: {
    siteUrl: 'https://chrisliu.ml/',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          url: 'https://chrisliu.ml',
          description: 'Software Developer from Hong Kong. Enthusiast of meaningful and user-friendly applications. Expert in Web Dev.',
          images: [
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/website-og-image.jpg?alt=media&token=5b018f72-574f-41cf-9d91-4fa4b4981076',
              width: 1200,
              height: 630,
              alt: 'Chris Liu - Software Developer',
            }
          ]
        },
        twitter: {
          cardType: 'summary_large_image'
        }
      },
    },
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/stonksviz`, `/stonksviz/*`]
      }
    }
  ]
}
