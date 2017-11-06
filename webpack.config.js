const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    PATHS = {
        dist: path.resolve(__dirname, 'docs'),
        src: path.resolve(__dirname, 'src')
    };

module.exports = {
    entry: PATHS.src,
    output: {
        path: PATHS.dist,
        filename: 'builds/scripts.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: PATHS.src + '/views/pug/pages/index.pug'
        })
    ],
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
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                }
            }
        ]
    }
};