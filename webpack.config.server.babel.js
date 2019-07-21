import path from 'path';
import nodeExternals from 'webpack-node-externals'

module.exports =
    {
        entry: "./server/index.js",
        name: 'server',
        output: {
            path: path.resolve(__dirname, "build-server"),
            filename: "server.min.js"
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
        watch: true,
        target: "node",
        externals: nodeExternals()
    }

