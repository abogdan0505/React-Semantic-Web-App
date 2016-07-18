// var debug = process.env.NODE_ENV !== "production";
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: [
    "./src/js/client.js"
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      images: path.join(__dirname, 'src/images')
    }
  },
  output: {
    path: 'dist',
    filename: "js/client.[hash].js"
  },
  plugins: [
    new ExtractTextPlugin('css/main.[hash].css'),
    new HtmlWebpackPlugin({
      title: 'Semantic-ui-React',
      template: 'src/index.html',
      filename: 'index.html',
      favicon: path.join(__dirname, 'src', 'images', 'favicons', 'favicon.ico')
    }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/, 
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'react-hmre'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        },
        include: path.join(__dirname, 'src/js') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap', {publicPath: "../"}) },
      { test: /\.sass$/i, loader: ExtractTextPlugin.extract( ['css?sourceMap', 'resolve-url', 'sass?sourceMap'], {publicPath: "../"} ) },
      {
          test: /\.(jpg|png|gif)$/i,
          loaders: [
            'url-loader?limit=10000&name=images/[name].[hash].[ext]',
            'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
          ]
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream'},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]'},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=images/[name].[hash].[ext]&mimetype=image/svg+xml' }
    ]
  }
}