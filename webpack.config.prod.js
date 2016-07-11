let webpack = require('webpack')
import baseConfig from './webpack.config.base'

module.exports = {
	...baseConfig,
	plugins: [
		...baseConfig.plugins,
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': '"production"'
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			},
			output: {
				comments: false
			}
		})
	],
	module: {
		...baseConfig.module,
		loaders: [
			...baseConfig.module.loaders
		]
	}
};