/*
 * Maneesh Divana <maneeshd77@gmail.com>
 * Jan-05-2020
 */

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (env, argv) => {
  console.log(`webpack is working in ${argv.mode} mode...`)

  const isDevelopment = argv.mode === 'development'

  const cssExtractor = new MiniCssExtractPlugin({
    filename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].min.css',
    chunkFilename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].min.css',
  })

  const cssMinimizer = new CssMinimizerPlugin({
    test: /\.css$/i,
    minimizerOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    parallel: true,
  })

  const htmlWebpacker = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'template.html'),
    title: 'Expensifier',
    favicon: path.resolve(__dirname, 'src', 'img', 'favicon.ico'),
    filename: 'index.html',
  })

  const terser = new TerserPlugin({
    parallel: true,
    terserOptions: {
      ecma: 6,
      compress: {
        drop_console: !isDevelopment,
        drop_debugger: !isDevelopment,
        dead_code: !isDevelopment,
        unused: !isDevelopment,
      },
    },
  })

  const compressor = new CompressionPlugin({
    filename: '[path][base].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.png$|\.jpg$|\.svg$|\.jpeg$/,
  })

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    mode: isDevelopment ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/fonts',
            publicPath: (url) => '../fonts/' + url,
          },
          include: [/files/],
        },
        {
          test: /\.(jpe?g|gif|png|svg)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'static/img',
            publicPath: 'static/img',
            name: '[sha512:hash:base64:7].[ext]',
          },
        },
      ],
    },
    devtool: isDevelopment ? 'eval-cheap-source-map' : false,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? 'static/js/[name].js' : 'static/js/[name].min.js',
      chunkFilename: isDevelopment ? 'static/js/[name].js' : 'static/js/[name].min.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [cssExtractor, cssMinimizer, compressor, htmlWebpacker],
    optimization: {
      minimize: argv.mode === 'production' ? true : false,
      minimizer: [terser, cssMinimizer],
      splitChunks: {
        chunks: 'all',
        name: 'vendor',
      },
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      disableHostCheck: true,
    },
  }
}
