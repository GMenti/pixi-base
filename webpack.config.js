var path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: path.join(__dirname, 'src'),
      },
    ]
  }
};