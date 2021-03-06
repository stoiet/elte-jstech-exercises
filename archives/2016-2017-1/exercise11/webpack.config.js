const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: {
    application: __dirname + '/index.js',
    vendor: [
      'react',
      'react-dom',
      'lodash/isEmpty',
      'lodash/get',
      'codemirror',
      'cheerio',
      'core-js/shim',
      'codemirror/mode/htmlmixed/htmlmixed'
    ]
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: { extensions: ['', '.js', '.json', '.html', '.css'] },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.html$/, loader: 'html-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  target: 'web',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      'vendor',
      'vendor.bundle.js'
    ),
    new ExtractTextPlugin('application.css', { allChunks: true })
  ]
}];
