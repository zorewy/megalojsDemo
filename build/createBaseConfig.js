const createMegaloTarget = require( '@megalo/target' )
const compiler = require( '@megalo/template-compiler' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const VueLoaderPlugin = require( 'vue-loader/lib/plugin' )
const CopyWebpackPlugin = require('copy-webpack-plugin')
const _ = require( './util' );
const glob = require('glob')
const path = require('path')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

function getEntry(rootSrc, pattern) {
	let files = glob.sync(path.resolve(rootSrc, pattern))
	return files.reduce((res, file) => {
		const info = path.parse(file)
		const key = info.dir.slice(rootSrc.length + 1) + '/' + info.name
		res[key] = path.resolve(file)
		return res
	}, {})
}

const appEntry = {app: resolve('./src/index.js')}
const pagesEntry = getEntry(resolve('./src'), 'pages/**/index.js')
const packageEntry = getEntry(resolve('./src'), 'packageOrder/pages/**/index.js')
const entry = Object.assign({}, appEntry, pagesEntry, packageEntry)

const CSS_EXT = {
  wechat: 'wxss',
  alipay: 'acss',
  swan: 'css',
};

function createBaseConfig( platform = 'wechat' ) {
  const cssExt = CSS_EXT[platform]

  return {
    mode: 'development',

    target: createMegaloTarget( {
      compiler: Object.assign( compiler, { } ),
      platform,
      htmlParse: {
        templateName: 'octoParse',
        src: _.resolve(`./node_modules/octoparse/lib/platform/${platform}`)
      }
    } ),

    entry: entry,

    output: {
      path: _.resolve( `dist-${platform}/` ),
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[id].js'
    },

    devServer: {
      // hot: true,
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]|megalo[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      },
      runtimeChunk: {
        name: 'runtime'
      }
    },

    // devtool: 'cheap-source-map',
    devtool: false,

    resolve: {
      extensions: ['.vue', '.js', '.json'],
      alias: {
        // 'vue': _.resolve('../../megalo-workspace/megalo/dist/megalo.mp.esm'),
        'vue': 'megalo',
        '@': _.resolve('src')
      },
    },

    module: {
      rules: [
        // ... other rules
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [resolve('src'), resolve('test')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                a: 1,
                cacheIdentifier: 'x'
              }
            }
          ]
        },
        {
          test: /\.js$/,
          use: 'babel-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'image/[name].[ext]'
          }
        },

        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[ext]'
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader',
          ]
        }
      ]
    },

    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin( {
        filename: `./static/css/[name].${cssExt}`,
      } ),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../src/assets/'),
          to: '/images'
        }
      ])
    ]
  }
}

module.exports = createBaseConfig
