var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
})
module.exports = {
	entry:[
		__dirname + '/app/index.js'
	],

	output:{
		path: __dirname + '/dist/',
		filename: 'index_bundle.js'
	},
	module:{
		loaders: [
			{test: /\.js$/, exclude: /node_module/, loader: 'babel?presets[]=es2015&presets[]=react'}
		]
	},
	plugins:[htmlWebpackPluginConfig]
}