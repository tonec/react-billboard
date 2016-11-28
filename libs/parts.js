const webpack = require('webpack')

exports.devServer = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host, // Default: localhost
      port: options.port // Default: 8080
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multistep: true
      })
    ]
  }
}

exports.setupCSS = function(paths) {
  return {
    module: {
      loaders: [
        { test: /\.css$/, loaders: ['style', 'css'], include: paths }
      ]
    }
  }
}
