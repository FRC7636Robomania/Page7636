const publicPath = process.env.NODE_ENV === 'production' ? '/Page7636/' : '/'
module.exports = {
  publicPath,
  devServer: {
    proxy: 'https://instagram.frmq2-1.fna.fbcdn.net/',
    port: 8080,
    host: '0.0.0.0',
    https: true,
    open: true,
  },
}
