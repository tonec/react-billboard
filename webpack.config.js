var path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, './')

const config = {

  entry: './main.js',

  devServer: {
    hot: true,
    inline: true,
    port: 7700,
    historyApiFallback: true
  },

  output: {
    path: BUILD_DIR,
    filename: 'react-auto-tabs.js',
    publicPath: 'http://localhost:7700/dist'
  },

  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loaders: ['style', 'css', 'sass']
      },
    ]
  }
}

module.exports = config
