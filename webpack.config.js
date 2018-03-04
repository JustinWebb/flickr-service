const { resolve } = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  const config = {
    entry: {
      app: './app/app.js',
    },
    output: {
      filename: 'bundle.[name].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    devtool: !env.prod ? 'source-map' : 'eval',
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader!eslint-loader', exclude: /node_modules/ },
      ],
    },
    plugins: [
      new Dotenv(),
    ],
  };

  return config;
};
