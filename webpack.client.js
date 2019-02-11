const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.js')

module.exports = merge({
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  }
}, baseConfig)