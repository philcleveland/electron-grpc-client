'use strict';
var nodeExternals = require('webpack-node-externals');
// const path = require('path');

module.exports = {
    cache: true,
    entry: [
        "./app/app.tsx",
    ],
    output: {
        filename: "./dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        alias: {
            // Backend: path.resolve(__dirname, 'app/')
        },
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        }, 
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2016', 'es2015', 'react']
            }
        }
        ]

        // preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     {
        //         test: /\.js$/,
        //         loader: "source-map-loader"
        //     }
        // ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    
    externals: [nodeExternals()],
    target: 'electron-main',
};