import Webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ejsBuilder from 'ejs-webpack-builder';
import Path from 'path';

import config from './config';

module.exports = {
  entry: {
    app: config.webpack.entry
  },
  output: {
    filename: './scripts/[name].js'
  },
  // Configuration for dev server
  devServer: {
    contentBase: config.dist,
    port: 3000,
    open: true,
    hot: true,
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css', '.scss', '.html', '.vue', '.ejs'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
      // 'src': Path.resolve(__dirname, '../src'),
      // 'assets': Path.resolve(__dirname, '../src/assets'),
      // 'components': Path.resolve(__dirname, '../src/components')
    }
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader', 'scss-loader'] },
      { test: /\.ejs$/, loader: 'ejs-loader' },
    ],
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
        // vue-loader options
          loaders: {
            scss: 'style!css!sass!scss'
          }
        }
      }
    ]
  },
  plugins: [
    // new ejsBuilder({
    //   root: __dirname,
    //   files: [{
    //     source: {
    //       name: 'index.ejs',
    //       dir: './src',
    //     },
    //     target: {
    //       name: 'index.html',
    //       dir: ''
    //     },
    //     parameters: {},
    //     encoding: 'utf8'
    //   }]
    // }),
    // liveReload
    new Webpack.HotModuleReplacementPlugin(),
    // new Webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // copy
    // new CopyWebpackPlugin(
    //   [
    //     { from: Config.src + '/**/*.html', to: Config.dist }
    //   ],
    //   {
    //     ignore: [],
    //     // By default, we only copy modified files during
    //     // a watch or webpack-dev-server build. Setting this
    //     // to `true` copies all files.
    //     copyUnmodified: true
    //   }
    // ),
    // // clean
    // new CleanWebpackPlugin([Config.dist], {
    //   root: __dirname,
    //   verbose: true, 
    //   dry: true,
    //   exclude: []
    // })
  ]
};
