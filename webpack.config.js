/*
* Maneesh Divana <maneeshd77@gmail.com>
* Jan-05-2020
*/

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env, argv) => {
    console.log(`webpack is working in ${argv.mode} mode...`);

    const cssExtractor = new MiniCssExtractPlugin({
        filename: argv.mode === 'development' ? 'static/css/[name].css' : 'static/css/[name].min.css',
        chunkFilename: argv.mode === 'development' ? 'static/css/[name].css' : 'static/css/[name].min.css'
    });

    const cssOptimizer = new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: argv.mode === 'development' ? true : false
    });

    const htmlWebpacker = new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'template.html'),
        title: 'React Project Starter',
        favicon: path.resolve(__dirname, 'src', 'img', 'favicon.ico'),
        filename: 'index.html'
    });

    const jsUglifier = new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: argv.mode === 'development' ? true : false
    });

    const compressor = new CompressionPlugin({
        filename: '[path].gz[query]',
        cache: true,
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/
    });

    return {
        entry: path.resolve(__dirname, 'src', 'index.js'),
        mode: argv.mode === 'development' ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.(jpe?g|gif|png|svg)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/img',
                        publicPath: 'static/img',
                        name: '[sha512:hash:base64:7].[ext]'
                    }
                }
            ]
        },
        devtool: argv.mode === 'development' ? 'cheap-eval-source-map' : false,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: argv.mode === 'development' ? 'static/js/[name].js' : 'static/js/[name].min.js',
            chunkFilename: argv.mode === 'development' ? 'static/js/[name].js' : 'static/js/[name].min.js',
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            cssExtractor,
            cssOptimizer,
            compressor,
            htmlWebpacker,
        ],
        optimization: {
            minimize: argv.mode === 'production' ? true : false,
            minimizer: [jsUglifier, cssOptimizer],
            splitChunks: {
                chunks: 'all',
                name: 'vendor'
            }
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            compress: true,
            historyApiFallback: true,
            disableHostCheck: true
        }
    };
};
