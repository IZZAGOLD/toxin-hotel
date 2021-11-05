const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/pages/index/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './docs'),
    },
    devServer: {
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'title',
            template: path.resolve(__dirname, './src/pages/index/index.pug'),
            filename: 'index.html',
        }),
    ],
}
