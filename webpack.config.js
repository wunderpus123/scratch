const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'Browser', 'index.js'), //! NEED TO UPDATE ONCE FOLDER NAME CHANGED
  resolve: { extensions: ['.jsx', '.js']},
  //! REVISIT
  devServer: {
    publicPath: '/Public', //! NEED TO UPDATE ONCE FOLDER NAME CHANGED
    proxy: {
      '/api': 'http://localhost:3000',
    },
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'Public'), //! NEED TO UPDATE ONCE FOLDER NAME CHANGED
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ]
      }
    ]
  }
}