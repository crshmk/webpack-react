const path = require('path')

const webpack = require('webpack')
const common = require('./webpack.config.common.js')

const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')

const resolve = filePath => path.resolve(__dirname, filePath)

const vendorChunks = [
  'react', 
  'react-dom', 
  'react-router-dom', 
  'axios', 
  'ramda', 
  'qs'
]

module.exports = merge(common, {
  mode: 'production',
  entry: {
    main: resolve('src/index.js'),
    page: resolve('src/components/Page/index.js'),
    vendor: vendorChunks
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      process: { env: { isProduction: true } }
    })
  ]
})
