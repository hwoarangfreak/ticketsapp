var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    resolve: {
        alias: {
            Nav: path.resolve(__dirname, 'src/nav/'),
            Login: path.resolve(__dirname, 'src/login/'),
            Register: path.resolve(__dirname, 'src/register/'),
            Cabinet: path.resolve(__dirname, 'src/cabinet/'),
            Tickets: path.resolve(__dirname, 'src/tickets/'),
            Cart: path.resolve(__dirname, 'src/cart/'),
            Store: path.resolve(__dirname, 'src/store/'),
            Global: path.resolve(__dirname, 'src/global/'),
            Home: path.resolve(__dirname, 'src/home/')
        }
    },
    module: { //Обновлено
        loaders: [ //добавили babel-loader
            {
                enforce: "pre",
                test: /\.js$/,
                loaders: ['eslint-loader'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
            },
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader'],
                include: [
                    path.resolve(__dirname, "src"),
                ]
            },
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}