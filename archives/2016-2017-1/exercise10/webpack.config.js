const webpack = require('webpack');

module.exports = [{
  entry: {
    application: __dirname + '/index.js',
    vendor: ['react', 'react-dom', 'lodash', 'core-js/shim']
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: { extensions: ['', '.js', '.json'] },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader', exclude: /node_modules/ }
    ]
  },
  target: 'web',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      "vendor",
      "vendor.bundle.js"
    )
  ]
}];
