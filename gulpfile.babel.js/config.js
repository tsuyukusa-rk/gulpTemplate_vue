module.exports = {
  src: './assets',
  dist: './dist',
  watch: {
    bin: './assets/**/*.{ico,eot,ttf,wotf}',
    ejs: ['./assets/**/*.ejs','!./assets/**/_*.ejs'],
    scss: './assets/**/*.scss',
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
      './assets/**/*.json'
    ]
  },
  webpack: {
    entry: './assets/scripts/app.js'
  },
  eslint: {
    src: ['./assets/**/*.vue']
  }
}
