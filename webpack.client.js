const path = require('path')
const baseConfig = require('./webpack.base.js')
const webpackMerge = require('webpack-merge')

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = webpackMerge(baseConfig, clientConfig)
