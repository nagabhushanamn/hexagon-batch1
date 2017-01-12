

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                include: path.join(__dirname, 'src'),
                loaders: ['babel']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

};