const path = require('path')

const PATHS = {
  app: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist')
}

const config = {

  entry: PATHS.app,

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    port: 8080
  },

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/dist'
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
        include: PATHS.app,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: PATHS.app,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}

module.exports = config
