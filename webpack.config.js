const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextWEbpackPlugin = require('extract-text-webpack-plugin'),
    PATHS = {
        dist: __dirname,
        src: path.resolve(__dirname, 'src')
    };

module.exports = {
    entry: PATHS.src,
    output: {
        path: PATHS.dist,
        filename: 'builds/scripts.js'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextWEbpackPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: './',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                    publicPath: '../'
                }
            }
        ]
    },
    plugins:[
        new ExtractTextWEbpackPlugin('builds/styles.css'),
        new HtmlWebpackPlugin({
            template: PATHS.src + '/views/pug/pages/index.pug',
            excludeChunks: ['styles']
        })
    ]
};