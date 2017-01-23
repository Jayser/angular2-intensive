const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/index.ts'
    },
    output: {
        filename: '[name].js?[hash]',
        publicPath: './',
        path: './dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: "tslint-loader"
            },
            {
                test: /\.ts$/,
                include: /app/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Typings',
            template: './app/index.html',
        })
    ],
    watch: true,
    devtool: 'source-map'
};