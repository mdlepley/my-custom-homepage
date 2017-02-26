var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
    modules: ['node_modules']
  },
  module: {
    loaders: [
      { test: /\.jsx$|\.es6$|\.js$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.scss$|\.css$/, loader: 'style-loader!style!css!sass' }
    ]
  }
};

module.exports = config;
