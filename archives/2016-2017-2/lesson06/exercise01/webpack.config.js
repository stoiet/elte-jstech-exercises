const webpack = require('webpack');

module.exports = [{
  entry: {
    application: __dirname + '/application.js',
    vendors: ['react', 'react-dom']
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: { extensions: ['.js'] },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  target: 'web',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['vendors'] })
  ]
}];
