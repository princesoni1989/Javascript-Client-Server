import path from 'path';
import nodeExternals from 'webpack-node-externals'
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: "./client-app/index.js",
    name: 'client',
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
            }
        ]
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },
    plugins: [new HtmlWebpackPlugin({
        template: './client-app/index.html'
    })]

}
