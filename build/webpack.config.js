const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
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
        // 或者：剥离除 “en”、“es-us” 和 “ru” 以外的所有语言环境。
        //（“en” 内置于 Moment 中，无法移除）
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru']
        })
    ]
};