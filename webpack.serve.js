const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.js')
const nodeExternals = require('webpack-node-externals')

module.exports = merge({
  target: "node",
  externals: [nodeExternals()],
  entry: './src/serve/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  }
}, baseConfig)