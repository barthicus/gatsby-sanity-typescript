require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs'
  },
  plugins: [
    'gatsby-alias-imports',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_API_DATASET,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: !IS_PRODUCTION,
        overlayDrafts: !IS_PRODUCTION
      }
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
          'src/__generated__/gatsby-schema.graphql': true
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true
        }
      }
    }
  ]
}
