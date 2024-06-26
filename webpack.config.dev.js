const path = require('path')

const webpack = require('webpack')
const common = require('./webpack.config.common.js')

const { merge } = require('webpack-merge')

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
  },
  plugins: [
    new webpack.DefinePlugin({
      process: { env: { isProduction: false } }
    })
  ]
})