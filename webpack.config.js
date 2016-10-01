const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./libs/parts');




const PATHS = {
  app: path.join(__dirname, 'app', 'js', 'index.js'),
  style: path.join(__dirname, 'app', 'scss', 'main.scss'),
  build: path.join(__dirname, 'build'),
};


const common = {
  
  entry: {
    style: PATHS.style,
    app: PATHS.app
  },

  output: {
    path: PATHS.build,
    filename: '[name].js',
    // publicPath: '/webpack-demo/'
  }, 

  module: {
    loaders: [
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=img/[name].[ext]'
        // include: PATHS.images
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, 'app/index.html'),
    })
  ]
}


var config;


// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  
  case 'build':
    config = merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractSASS(PATHS.style)
      // parts.purifyCSS([PATHS.style]),
      // parts.minify()

    );
    break;
  
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setupSASS(PATHS.style),
      parts.devServer({
        // Customize host/port here if needed
        host: '0.0.0.0', //process.env.HOST,
        port: process.env.PORT
      })
    );
}


module.exports = validate(config);

