const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['@babel/preset-env', '@babel/react'] }
                    }
                ]
            },
            {
                test: /\.(css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ]
}