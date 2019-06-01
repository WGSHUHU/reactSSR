const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')
const webpackMerge = require('webpack-merge')

const serverConfig = {
  mode: 'development',
  target: 'node',
  entry: './server/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = webpackMerge(baseConfig, serverConfig)
