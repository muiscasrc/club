const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const JavaScriptObfuscator = require('webpack-obfuscator')

module.exports = {
  devServer: {
    port: 8888,
    noInfo: true,
    compress: true
  },
  configureWebpack: {
    plugins: [
      // new JavaScriptObfuscator({}),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'docs'),
        // Required - Routes to render.
        routes: ['/']
      })
    ]
  },
  pwa: {
    name: 'Muiscas RC',
    themeColor: '#1a1a1a',
    msTileColor: '#1a1a1a',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc: './src/service-worker.js'
    },
    iconPaths: {
      favicon16: 'img/icons/icon.png',
      favicon32: 'img/icons/icon.png'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/club/' : '/'
}
