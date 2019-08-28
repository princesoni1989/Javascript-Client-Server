import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: "./index.js",
    name: 'server.com',
    output: {
        path: path.resolve(__dirname, "build-client"),
        filename: "index.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        historyApiFallback: true,
        port: 9000
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })]

}
