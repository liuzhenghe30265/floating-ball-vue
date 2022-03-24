// const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  publicPath: '',
  assetsDir: 'static',
  outputDir: 'dist',
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
  },
  // configureWebpack: config => {
  //   Object.assign(config, {
  //     resolve: {
  //       extensions: ['.js', '.vue', '.json', '.css'],
  //       alias: {
  //         '@': path.resolve(__dirname, './src')
  //       },
  //       plugins: []
  //     }
  //   })
  // },
  // devServer: {
  //   open: true,
  // host: '',
  // port: 8080,
  // https: false,
  // hotOnly: false
  // proxy: {
  //     '/': {
  //         target: '',
  //         changeOrigin: true,
  //         pathRewrite: {
  //             '^/': ''
  //         }
  //     }
  // }
  // }
}
