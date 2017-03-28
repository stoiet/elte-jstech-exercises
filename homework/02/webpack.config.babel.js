import { resolve } from 'path';
import * as webpack from 'webpack';

export default [{
  context: resolve(__dirname, './'),
  entry: {
    application: resolve(__dirname, './bootstrap.js'),
    vendors: ['babel-polyfill', 'react', 'react-dom', 'lodash', 'ramda']
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '../../dist'),
    sourceMapFilename: '[name].bundle.map'
  },
  devtool: 'source-map',
  resolve: { extensions: ['.js'] },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, enforce: 'pre' }
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
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors' })
  ]
}];

