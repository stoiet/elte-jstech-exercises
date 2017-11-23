'use strict';

const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: {
    application: './client/bootstrap.js',
    vendors: ['react', 'react-dom', 'prop-types', 'core-js', 'regenerator-runtime'],
  },
  devtool: 'source-map',
  resolve: { extensions: ['.js', '.json', '.ts', '.tsx'] },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['vendors'] }),
  ],
};

module.exports = config;
