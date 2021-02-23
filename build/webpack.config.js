const path = require('path');
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

    ]
};