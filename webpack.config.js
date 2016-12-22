var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: path.join(__dirname, '/index.html'),
	filename: 'index.html',
	inject: 'body',
});

module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', './app/app.js']
	},

	output: {
		path: './dist/built',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/built/'
	},

	devServer: {
		contentBase: './dist',
	},

	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
};
