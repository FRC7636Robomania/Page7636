const publicPath = process.env.NODE_ENV === 'production' ? '/Page7636/' : '/'
module.exports = {
  publicPath,
  transpileDependencies: [
    'vuetify',
  ],
  productionSourceMap: false,
  outputDir: 'dist',
  assetsDir: 'assets',

  pluginOptions: {
    prerenderSpa: {

      registry: undefined,
      renderRoutes: [
        '/', '/home', '/members', '/contact', '/outreach',
        '/news', '/resources', '/sponsors'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
}
