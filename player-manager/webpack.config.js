'use strict';

const { resolve } = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const config = {
  context: resolve(__dirname, './'),
  entry: {
    application: './client/bootstrap.js',
    vendors: [
      'react',
      'react-dom',
      'prop-types',
      'core-js',
      'regenerator-runtime',
      'jquery'
    ],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, './dist'),
    pathinfo: true,
    publicPath: 'http://localhost:9100/dist',
    sourceMapFilename: '[name].map',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: { babelrc: true, cacheDirectory: true },
      },
      {
        test: /jquery/,
        loaders: 'expose-loader',
        options: 'jQuery',
      },
      {
        test: /.css$/,
        loaders: ExtractTextPlugin.extract({ use: 'css-loader' })
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg/,
        loaders: 'file-loader'
      }
    ],
  },
  resolve: { modules: [resolve(__dirname, './node_modules')] },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['vendors'] }),
    new ExtractTextPlugin('application.css'),
    new CopyWebpackPlugin([{
      context: resolve(__dirname, './'),
      from: './client/index.html',
      to: './index.html',
    }])
  ],
  devtool: 'source-map',
  target: 'web',
  watchOptions: {
    aggregateTimeout: 500,
    ignored: /node_modules/,
    poll: 1000,
  },
  devServer: {
    contentBase: resolve(__dirname, './dist'),
    compress: false,
    port: 9000
  }
};

module.exports = config;
