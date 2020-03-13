const path = require('path')

module.exports = {
  client: {
    addTypename: false,
    excludes: [],
    includes: [
      './src/**/*.tsx',
      './src/**/*.ts',
      './plugins/**/*.js',
      './node_modules/gatsby-source-contentful/src/*.js',
      './node_modules/gatsby-source-datocms/fragments/*.js',
      './node_modules/gatsby-transformer-sharp/src/*.js',
      './node_modules/gatsby-image/src/*.js',
      './src/**/*.tsx',
      './src/**/*.ts',
      './node_modules/gatsby-source-sanity/src/*.js',
      './node_modules/gatsby-transformer-sharp/src/*.js',
      './node_modules/gatsby-image/src/*.js'
    ],
    service: {
      name: 'GatsbyJS',
      // localSchemaFile: './src/__generated__/gatsby-schema.graphql'
      localSchemaFile: path.resolve(__dirname, 'src/__generated__/gatsby-schema.graphql')
    },
    tagName: 'graphql'
  }
}
