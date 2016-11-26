var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, 'js/app');
var BUILD_PATH = path.resolve(__dirname, 'build');
var TEM_PATH = path.resolve(__dirname, 'template');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index.js')
	},
	output: {
		path: BUILD_PATH,
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'title',
			filename: 'index.html',
			template: path.resolve(TEM_PATH, 'index.html'),
			chunk: ['app'],
			inject: 'body'
		})
	],
	resolve: {
		extensions: ['', '.js']
	}
}
