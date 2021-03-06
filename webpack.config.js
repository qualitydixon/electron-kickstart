const fs = require('fs');

if (fs.existsSync('./.env')) {
	require('dotenv').config({path: './.env'});
}

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: path.join(__dirname, '/index.html'),
	filename: 'index.html',
	inject: 'body',
});

const babelrc = fs.readFileSync('./.babelrc');
// let babelrcObject = {};

// try {
// 	babelrcObject = JSON.parse(babelrc);
// } catch (err) {
// 	console.error('==>     ERROR: Error parsing your .babelrc.');
// 	console.error(err);
// }

// const combinedPlugins = babelrcObject.plugins || [];

// const babelLoaderQuery = Object.assign({}, {
// 	plugins: combinedPlugins
// });

module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', './app/app.js']
	},

	output: {
		path: './dist/built',
		filename: 'bundle.js',
		publicPath: 'http://localhost:3000'
	},

	devServer: {
		// contentBase: './dist',
		filename: 'bundle.js',
		port: 3000,
		publicPath: 'http://localhost:3000',
		quiet: true
	},

	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015'],
					plugins: [
						'transform-class-properties', ['transform-es2015-classes', [{
							loose: true
						}]]
					]
				}
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.scss$/, loader: 'style-loader!css-loader!fast-sass-loader'}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			OAUTH_TOKEN: JSON.stringify(process.env.OAUTH_TOKEN)
		})
	]
};
