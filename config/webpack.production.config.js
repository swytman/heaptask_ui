// webpack.config.js
var webpack = require('webpack')
var config = require('./prod.env.js')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = {
  // This is the "main" file which should include all other modules
  entry: [
    './src/main.js'
  ],
  // Where should the compiled file go?
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    // Special compilation rules

    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        // Ask webpack to check: If this file ends with .vue, then apply some transforms
        test: /\.vue$/,
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /(node_modules|bower_components)/,
        // Transform it with vue
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              js: 'babel-loader'
            }

          }
        }
      }
    ]
  },
  plugins: [
    // разбираемся со всеми предупреждениями в нашем Vue.js коде
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      ...config
    }),
    // минифицируем, устраняя весь ненужный код
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      hash: true
    })
  ]
}
