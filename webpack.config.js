const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 9900,
        public: 'de-dale'
    },
    plugins: [
        new CleanWebpackPlugin([ 'dist' ]),
        new HtmlWebpackPlugin({
            title: 'De-Dale - Shelves',
            template: 'src/index.html',
            chunks: [ 'app' ]
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: [ 'babel-loader', 'eslint-loader' ]
            }, 
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // localIdentName: '[local]--[hash:base64:5]'
                            localIdentName: '[local]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(secrets)$/,
                use: [
                    'json-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.styl', '.json', '.md', 'jpeg' ],
        alias: {
            core: path.resolve(__dirname, 'src', 'app', 'core'),
            entities: path.resolve(__dirname, 'src', 'app', 'core', 'entities'),
            utils: path.resolve(__dirname, 'src', 'app', 'core', 'utils'),
            store: path.resolve(__dirname, 'src', 'app', 'store'),
            components: path.resolve(__dirname, 'src', 'app', 'components')
        }
    }
};

