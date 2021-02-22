const config = require('./webpack.config')
const {merge} = require('webpack-merge')

const webpackConfig = merge(config, {
    output: {
        libraryTarget: 'umd',
    }
})

module.exports = webpackConfig