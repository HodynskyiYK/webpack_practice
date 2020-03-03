const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './components/analytics.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/img/favicon.ico'),
                to: path.resolve(__dirname, 'public/img')
            },
            {
                from: path.resolve(__dirname, 'src/img/logo.svg'),
                to: path.resolve(__dirname, 'public/img')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: './styles/[name].css',
            chunkFilename: './styles/[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader?url=false'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                }],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }],
            },
        ],
    },
};