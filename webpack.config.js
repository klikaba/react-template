const { resolve } = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});
const cleanPlugin = new CleanWebpackPlugin(['dist']);
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const definePlugin = new webpack.DefinePlugin(envKeys);

module.exports = {
  mode: 'development',
  entry: [
    './src/client/index.jsx',
    // 'webpack-hot-middleware/client?http://localhost:3000&reload=true',
  ],
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      services: resolve(__dirname, 'src/client/services'),
      styles: resolve(__dirname, 'src/client/styles'),
    },
    extensions: ['.js', '.jsx', '.scss'],
  },
  output: {
    publicPath: '/',
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            // options: {
            //   modules: true,
            //   importLoaders: 1,
            //   localIdentName: '[name]_[local]_[hash:base64]',
            //   sourceMap: true,
            //   minimize: true,
            // },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    cleanPlugin,
    hotModuleReplacementPlugin,
    definePlugin,
  ],
};


// { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
// { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
// { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
// { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
// { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
// {
//   test: /\.(png|jpg|gif|jpeg)$/,
//   loader: 'url-loader?limit=8192',
// },