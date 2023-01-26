/* eslint-disable quotes */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Page7636/' : '/',
  productionSourceMap: false,
  // publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    port: 8090,
    host: '0.0.0.0',
    https: true,
    open: true,
  },
}
