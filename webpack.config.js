const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, "src/img/favicon.ico"),
                to: path.resolve(__dirname, "public/img")
            },
            {
                from: path.resolve(__dirname, "src/img/logo.svg"),
                to: path.resolve(__dirname, "public/img")
            },
        ]),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, "public/styles"),
                        },
                    },
                    "css-loader",
                ],
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        compress: true,
        port: 9000
    }
};