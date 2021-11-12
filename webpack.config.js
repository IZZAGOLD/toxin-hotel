const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/pages/Colors&Type/colors-type.js'),
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
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: [
                    path.resolve(__dirname, './src/img/'),
                    path.resolve(__dirname, './src/components/'),
                ],
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                    },
                }],
            },
            {
                test: /\.(png|gif|svg|jpe?g)$/,
                exclude: [
                    path.resolve(__dirname, './src/fonts/'),
                    path.resolve(__dirname, './src/favicons/'),
                ],
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                    },
                }],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'title',
            template: path.resolve(__dirname, './src/pages/Colors&Type/colors-type.pug'),
            filename: 'index.html',
        }),
    ],
}
