const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        about: './src/about.js',
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name]_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            template: './src/about.html',
            filename: './about.html',
            chunks: ['about']
        })
    ]
}