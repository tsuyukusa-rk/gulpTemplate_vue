module.exports = {
  src: './assets',
  dist: './dist',
  watch: {
    bin: './assets/**/*.{png,jpg,gif,ico,svg,eot,ttf,wotf}',
    ejs: ['./assets/**/*.ejs','!./assets/**/_*.ejs'],
    scss: './assets/**/*.scss',
    js: './assets/**/*.js',
    vue: './assets/**/*.vue',
    do: './assets/**/*.do',
    json: './assets/**/*.json',
  },
  copy: {
    dev: [
      './assets/**/*.{png,jpg,gif,ico,svg,eot,ttf,wotf}',
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
