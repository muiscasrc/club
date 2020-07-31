// const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {

  devServer: {
    port: 8989,
    compress: true
  },
  configureWebpack: {
    mode: process.env.production ? 'production' : 'development',
    devtool: process.env.production ? 'source-maps' : 'eval',
    performance: {
      hints: false
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        maxSize: 250000
      }
    },
    plugins: [
      // new PrerenderSPAPlugin({
      //   staticDir: path.join(__dirname, 'docs'),
      //   // Required - Routes to render.
      //   routes: [
      //     '/'
      //   ]
      // })
    ]
  },
  pwa: {
    name: 'Muiscas RC',
    display: 'fullscreen',
    themeColor: '#d50000',
    backgroundColor: '#1a1a1a',
    msTileColor: '#1a1a1a',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js'
      // ...other Workbox options...
    },
    iconPaths: {
      favicon16: 'icon.png',
      favicon32: 'icon.png'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/club/' : '/',
  runtimeCompiler: true
}
