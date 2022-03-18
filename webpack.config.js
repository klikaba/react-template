const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const cleanPlugin = new CleanWebpackPlugin();
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "src", "index.html"),
  filename: './index.html',
  environment: process.env.NODE_ENV,
});
const dotenvPlugin = new Dotenv({
  systemvars: true,
});

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src/client/index.jsx'), 'webpack-hot-middleware/client'],
  resolve: {
    alias: {
      services: path.resolve(__dirname, 'src/client/services'),
      styles: path.resolve(__dirname, 'src/client/styles'),
    },
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
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
    dotenvPlugin,
  ],
}

// { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
// { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
// { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
// { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
// { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
// {
//   test: /\.(png|jpg|gif|jpeg)$/,
//   loader: 'url-loader?limit=8192',
// },