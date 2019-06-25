const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')
const webpackMerge = require('webpack-merge')

const serverConfig = {
  mode: 'development',
  target: 'node',
  entry: './src/server/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader']
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]-[local]-[hash:base64:5]'
            // name:文件名，style.css
            // local:实际的名字
            // hash：内容的hash值
          }
        }
      }
    ]
  }
}

module.exports = webpackMerge(baseConfig, serverConfig)
