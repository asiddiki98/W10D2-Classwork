const path = require('path'); // built-in node module

module.exports = {
    entry: './frontend/widgets.jsx', // relative path to entry file
    output: {
        path: path.resolve(__dirname), // absolute path to output file
        filename: 'bundle.js' // output file name
    },
    devtool: 'source-map', // can see line numbers and source file for errors that come from our bundled file (ie errors in our chrome console)
    resolve: {
        extensions: [".js", ".jsx", "*"], // if I import a file without an explicit extension, webpack first looks here; in this case, first for a .js file, then .jsx, then any (*) file
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // regex matcher for which files to run this loader on
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react'] // which presets to run
                    }
                },
            }
        ]
    }
}