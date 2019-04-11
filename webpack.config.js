var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
	entry: path.join(__dirname, './main.js'),//入口
	output: {//出口
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	plugins: [//插件
		new htmlWebpackPlugin({
			template: path.join(__dirname, "./src/index.html"),
			filename: 'index.html'
		}),
		 new VueLoaderPlugin(),
	],
	module: {//第三方模块
		rules: [
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			{test: /\.(jpg|png|bmp|jpeg|gif)$/, use: 'url-loader?limit=2048name=[name].[ext]'},
			{test: /\.(ttf|svg|eot|woff|woff2)$/, use: 'url-loader'},
			{test: /\.vue$/, use: 'vue-loader'},
		]
	}

};