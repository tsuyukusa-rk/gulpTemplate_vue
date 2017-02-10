import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config.js';
const browserSyncCreate =  browserSync.create();

/*
* ローカルサーバーを立てる
*/
gulp.task('server', () => {
  return browserSyncCreate.init({
    server: {
      baseDir: config.dist,
      directory: false,
      index: "/index.html"
    },
    port: 3001
  });
});

/*
* ローカルサーバーの画面リロード
*/
gulp.task('reload', () => browserSyncCreate.reload());
