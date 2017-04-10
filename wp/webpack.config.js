var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
	  app: './app/scripts/app.js',
	  vendor: [
	  'lodash', 
	  'jquery'
	  ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
	sourceMapFilename: '[name].map'
  },
    module: {
	rules: [
	{
		test: /\.js$/,
		exclude: /(node_modules|bower_components)/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['env']
			}
		}
	}],
  },
  module: {
	  rules: [{
         test: /\.scss$/,
         use: ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: ['css-loader', 'sass-loader']
		})
        }]
  },

  plugins: [
	new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
	new UglifyJSPlugin(),
	new HtmlWebpackPlugin({
		title: 'Test',
		hash: true,
		template: './app/index.html'
		}),
	new ExtractTextPlugin("[name].css"),
	new CopyWebpackPlugin([
		{ from: 'app/img', to: 'img/'}
		],
		{
			ignore: [
			],
			copyUnmodified: true
        })
	],
	
};

