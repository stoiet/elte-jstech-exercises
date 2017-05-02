import { resolve } from 'path';
import * as webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default [{
  context: resolve(__dirname, './'),
  entry: {
    application: resolve(__dirname, './bootstrap.js'),
    vendors: ['babel-polyfill', 'lodash', 'ramda', 'angular']
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '../dist'),
    sourceMapFilename: '[name].bundle.map'
  },
  devtool: 'source-map',
  resolve: { extensions: ['.js'] },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, enforce: 'pre' },
      { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader' }), exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html-loader', exclude: /node_modules/ }
    ]
  },
  target: 'web',
  watchOptions: {
    ignore: /node_modules/,
    aggregateTimeout: 250,
    poll: true
  },
  stats: 'errors-only',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors' }),
    new ExtractTextPlugin('application.bundle.css')
  ]
}];

