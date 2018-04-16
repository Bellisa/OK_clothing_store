const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');//for loaded images
const images = ['jpg', 'jpeg', 'png', 'gif', 'svg'];//for loaded images

/* const stylesLoader = [
  { loader: 'style-loader' },
  { loader: 'css-loader' },
  { loader: 'sass-loader' }
]; */

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Test app',
    template: 'index.html'
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component']
  }),
  new CopyWebpackPlugin([
    ...images.map(ext => ({ from: `**/*/*.${ext}`, to: 'images/[name].[ext]' }))
  ]),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
  })
];

module.exports = {
  entry: './app.component.js',
  context: path.resolve('src'),
  output: {
    filename: 'bundle-[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['syntax-dynamic-import',
              'transform-class-properties']
          }
        }
      },

      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      }

    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve('dist'),
    publicPath: '/',
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
};

