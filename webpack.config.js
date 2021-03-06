const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './docs',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Development',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};