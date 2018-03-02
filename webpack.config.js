const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  output: {
    path: __dirname + '/dist/',
    filename: "intro.js"
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
        { test: /\.jsx?$/, loader: 'babel-loader' },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: [
            "css-loader",
            "sass-loader"
          ]})
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin("intro.css")
  ]
}
