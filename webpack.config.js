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
        { test: /\.jsx?$/, use: [{
            loader: "babel-loader",
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ]},
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: {
            loader: 'css-loader'
          }})
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
    new ExtractTextPlugin("intro.css")
  ]
}
