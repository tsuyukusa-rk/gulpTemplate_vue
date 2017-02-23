import gulp from 'gulp';
import config from '../config.js';
import webserver from 'gulp-webserver';

/*
* ローカルサーバーを立てる
*/
gulp.task('server', ['apiServer'], ()=> {
  return gulp.src(config.dist)
    .pipe(webserver({
      host: 'localhost',
      port: 3001,
      livereload: true,
      open: true,
      fallback: 'index.html',
      proxies: [
        {
          source: '/api',
          target: 'http://localhost:7777'
        }
      ]
    }));
});
