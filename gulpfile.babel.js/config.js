module.exports = {
  src: './assets',
  dist: './dist',
  artifacts: './artifacts',
  watch: {
    bin: './assets/**/*.{ico,eot,ttf,wotf}',
    ejs: ['./assets/**/*.ejs'],
    pug: ['./assets/**/*.pug'],
    scss: './assets/**/*.scss',
    stylus: './assets/**/*.styl',
    js: './assets/**/*.js',
    vue: './assets/**/*.vue',
    do: './assets/**/*.do',
    json: './assets/**/*.json',
    imageMin: './assets/**/*.{jpg,jpeg,png,gif,svg}'
  },
  imageMin: './assets/**/*.{jpg,jpeg,png,gif,svg}',
  copy: {
    dev: [
      './assets/**/*.{ico,eot,ttf,wotf}',
      './assets/**/*.do',
      './assets/**/*.json',
      '!./assets/html/**/*.json'
    ],
    artifacts: [
      '!./dist/**/*.map',
    ]
  },
  ejs: [
    './assets/**/*.ejs',
    '!./assets/**/_*.ejs'
  ],
  pug: [
    './assets/**/*.pug',
    '!./assets/**/_*.pug'
  ],
  scss: './assets/**/*.scss',
  stylus: [
    './assets/**/*.styl',
    '!./assets/**/_*.styl'
  ],
  webpack: {
    entry: {
      'js/app': [
        'babel-polyfill',
        'es6-promise',
        'whatwg-fetch',
        './assets/scripts/app.js'
      ]
    },
    output: {
      filename: '[name].js'
    },
    src: [
      './assets/**/*.{vue,js}'
    ]
  },
  eslint: {
    src: ['./assets/**/*.vue']
  },
  autoprefixer: {
    browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4','ios_saf >= 8']
  }
}
