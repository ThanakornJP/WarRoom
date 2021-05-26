const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: 'src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',

  },
  devServer:{
    port: 3000,
    watchContentBase: true
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
  mode: 'development'
}

/*const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.[hash].js'
  },
  devtoop: 'inline-source-map',
  module: {
    rules:[
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }

};
*/


/*
module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
      path: './',
      filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      port: 5555
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  }
  */