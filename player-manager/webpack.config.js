'use strict';

const { resolve } = require('path');
const webpack = require('webpack');

const config = {
  context: resolve(__dirname, './'),
  entry: {
    application: './client/bootstrap.js',
    vendors: ['react', 'react-dom', 'prop-types', 'core-js', 'regenerator-runtime'],
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
      },
    ],
  },
  resolve: { modules: [resolve(__dirname, './node_modules')] },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['vendors'] }),
  ],
  devtool: 'source-map',
  target: 'web',
  watchOptions: {
    aggregateTimeout: 500,
    ignored: /node_modules/,
    poll: 1000,
  },
};

module.exports = config;
