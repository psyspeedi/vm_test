module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        path: __dirname + "/public",
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devServer: {
        port: 5000,
        contentBase: './public'
    }
};