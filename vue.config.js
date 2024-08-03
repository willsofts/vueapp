//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({  
  indexPath: "demo003.html", //this change target html to specified file name
  outputDir: "demo003", //this change target folder to spcified name
  pages: {
    index: {
      entry: 'src/demo003.js',
      title: 'Sampling Information',
      //filename: 'demo002.html', //this can override by setting indexPath
    }
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' /* this is BASE_URL in index.html */
    ? './' /*+ process.env.CI_PROJECT_NAME + '/'*/
    : './',
  configureWebpack: {
    devtool: "source-map",
    optimization: {
      minimize: false
    },
    resolve: {
      alias: {
        // bind version of jquery-ui
        "jquery-ui": "jquery-ui-dist/jquery-ui.js",
        // bind to modules;
        modules: path.join(__dirname, "node_modules")
      }
    },
    /*output: {
      filename: 'js/demo002.[contenthash:8].js',
      chunkFilename: 'js/demo002.[contenthash:8].js',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/demo002.[contenthash:8].css',
      }),
    ],*/
  }    
})
