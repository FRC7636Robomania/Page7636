const publicPath = process.env.NODE_ENV === 'production' ? '/Page7636/' : '/'
module.exports = {
  publicPath,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://firebasestorage.googleapis.com',
        changeOrigin: true,
        ws: true,
        secure: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      // '/api': {
      //   target: 'https://instagram.frmq2-1.fna.fbcdn.net/',
      //   changeOrigin: true,
      //   ws: true,
      //   secure: true,
      //   pathRewrite: {
      //     '^/api': '',
      //   },
      // },
    },
  },
}
