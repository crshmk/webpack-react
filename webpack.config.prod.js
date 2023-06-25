const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const resolve = filePath => path.resolve(__dirname, filePath)

module.exports = {
  mode: 'production',
  entry: {
    main: resolve('src/index.js'),
    vendor: ['react', 'react-dom'],
    page: resolve('./src/Page.js')
  },
  output: {
    assetModuleFilename: '[name][ext]',
    clean: true,
    filename: '[name].[contenthash].bundle.js',
    path: resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html')
    })
  ],
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
  }
}