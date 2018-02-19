const path = require('path');

const projectRoot = path.resolve(__dirname, './')

module.exports = {
  watch: true,
  entry: './src/client/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [
        "node_modules"
    ],
    alias: {
        vue: 'vue/dist/vue.common.js'
    }
  },
};
