import { resolve } from 'path';
import * as webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default [{
  context: resolve(__dirname, './'),
  devtool: 'source-map',
  entry: {
    application: resolve(__dirname, './bootstrap.js'),
    vendors: ['babel-polyfill', 'react', 'react-dom', 'lodash', 'ramda']
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, enforce: 'pre' },
      { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader' }), exclude: /node_modules/ }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '../dist'),
    sourceMapFilename: '[name].bundle.map'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors' }),
    new ExtractTextPlugin('application.bundle.css')
  ],
  resolve: { extensions: ['.js'] },
  stats: 'errors-only',
  target: 'web',
  watchOptions: {
    aggregateTimeout: 250,
    ignore: /node_modules/,
    poll: true
  }
}];
