const path = require('path');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode:'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'xms-basic-util.js',
        library: 'xmsBasicUtil',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    plugins: [

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};