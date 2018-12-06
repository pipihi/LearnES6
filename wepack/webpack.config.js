var path = require('path');  //加载nodejs的路径处理模块
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'production',
    entry: './src/b.js',
    output: {
        path: __dirname + '/dist',        //__dirname是一个nodejs变量，表示当前js文件所在的目录
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                // test:'./WWW',
                test: path.join(__dirname, './src/'),
                exclude: '/node_modules/',
		        loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'head'
        })
    ]
}
