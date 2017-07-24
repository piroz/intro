const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + '/dist/',
    filename: "intro.js"
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    loaders: [
        { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: {
            cacheDirectory: true,
            presets: ['es2015']
        }},
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: [
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ]})
        }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin("intro.css")
  ]
}
