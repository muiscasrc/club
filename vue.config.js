const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/', '/about', '/some/deep/nested/route'],
      })
    ]
  },
  pwa: {
    name: 'Muiscas RC',
    themeColor: '#1a1a1a',
    msTileColor: '#1a1a1a',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/club/'
    : '/'
}
