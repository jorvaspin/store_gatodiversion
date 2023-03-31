const mix = require('laravel-mix');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

mix.options({
    terser: {
        extractComments: false,
    },
    uglify: {
        uglifyOptions: {
            compress: {
                drop_console: true
            }
        }
    }
});

// webpack.config.js
module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader' // <- Añadir aquí
        ]
      },
      // this will apply to both plain .js files
      // AND <script> blocks in vue files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain .css files
      // AND <style> blocks in vue files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      // this will apply to both plain .scss files
      // AND <style lang="scss"> blocks in vue files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: '$color: red;'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
}

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts'],
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
            '@store': path.resolve(__dirname, 'resources/js/store')
        }
    }
});

mix.js('resources/js/app.js', 'public/js').vue().sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false
    });
