const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.common.js')

const resolve = filePath => path.resolve(__dirname, filePath)

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    liveReload: true,
    open: false,
    port: 4201,
    historyApiFallback: true,
    static: resolve('dist')
  }
})