const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			// 拡張子 .ts の場合
			test: /\.ts$/,
			// TypeScript をコンパイルする
			use: "ts-loader"
		}]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
		host: "0.0.0.0"
	}
};
