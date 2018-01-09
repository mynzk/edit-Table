const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sourcePath = path.resolve(__dirname, 'src/views/index');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        sourcePath
    ],
    devtool: 'source-map',
    output: {
        path: outputPath,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=8192'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader', 
                  use: [
                    {loader: "css-loader", options: { importLoaders: 1 }},
                    { loader: "postcss-loader" }
                  ]
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader', 
                  use: [
                    {loader: "css-loader", options: { importLoaders: 1 }},
                    { loader: "postcss-loader" },
                    { loader: "less-loader" }
                  ] 
                }),
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
          sourcePath,
          'node_modules'
        ]
    }
}