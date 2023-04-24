const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('./src/index.tsx')
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx?$/,
                exclude: /node.modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                from: path.resolve('src/assets/manifest.json'), 
                to: path.resolve('dist')  
                },
                {
                from: path.resolve('src/assets/icon.png'), 
                to: path.resolve('dist')  
                },
                {
                from: path.resolve('src/assets/background.js'), 
                to: path.resolve('dist')  
                },
                {
                from: path.resolve('src/assets/content.js'), 
                to: path.resolve('dist')  
                }
            ]
        }),
        new HtmlPlugin({
            title: 'Frontdoor Chrome Extension Popup',
            filename: 'index.html',
            chunks: ['popup']
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js'
    }
}