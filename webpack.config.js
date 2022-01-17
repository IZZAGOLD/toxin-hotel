const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

const pagesDir = './src/pages';

const createEntriesFromPageList = (pages) => {
    const webpackPageEntries = {};
    const htmlWebpackPageInstances = [];

    pages.forEach((pageName) => {
        webpackPageEntries[pageName] = `${pagesDir}/${pageName}/${pageName}.js`;
        htmlWebpackPageInstances.push(new HtmlWebpackPlugin({
            filename: `${pageName}.html`,
            template: `${pagesDir}/${pageName}/${pageName}.pug`,
            chunks: [pageName],
        }));
    });

    return [webpackPageEntries, htmlWebpackPageInstances];
};

const [webpackPageEntries, htmlWebpackPageInstances] = createEntriesFromPageList(
    fs.readdirSync(pagesDir),
);

module.exports = {
    mode: mode,
    entry: {
        favicon: './src/favicons/favicons.js',
        ...webpackPageEntries,
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[name][ext][query]",
        path: path.resolve(__dirname, 'docs'),
        clean: true,
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/components'),
            fonts: path.resolve(__dirname, 'src/components'),
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        }),
        ...htmlWebpackPageInstances
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env"
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                generator: {
                    filename: 'img/[hash][ext][query]'
                },
                type: 'asset/resource',

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                generator: {
                    filename: 'fonts/[name][ext][query]'
                },
                type: 'asset/resource',
            },
            {
                test: /\.(svg|png|ico|xml|json|webmanifest)$/,
                generator: {
                    filename: 'favicons/[name][ext][query]'
                },
                type: 'asset/resource',
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}