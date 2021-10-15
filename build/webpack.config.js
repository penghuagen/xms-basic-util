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
                include: [
                    // resolve('src'), resolve("dist")
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};