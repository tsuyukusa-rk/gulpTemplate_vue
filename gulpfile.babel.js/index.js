import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
runSequence.use(gulp);

/*
* タスクの読み込み
*/
requireDir('./tasks', { recurse: true });
/*
* dev用の一連のファイルコピー
* build:dev
* 画像とかコピー後、HTML,CSS,JSはUTF-8に変換する
*/
gulp.task('build:dev', (callback) => {
  return runSequence(
    'pug',
    'ejs',
    'stylus',
    'webpack',
    'copy:dev',
    callback
  )
});
/*
* 作業用タスク
*/
gulp.task('default', (callback) => {
  return runSequence(
    'clean',
    'build:dev',
    'imageMin:dev',
    'eslint',
    // '_index',
    'server',
    'watch',
    callback
  )
});
/*
* テスト用
*/
gulp.task('test', (callback) => {
  return runSequence(
    'karma',
    callback
  )
});
/*
* 納品用タスク
*/
gulp.task('artifacts', (callback) => {
  return runSequence(
    'clean',
    'build:dev',
    'copy:artifacts',
    'imageMin:artifacts',
    callback
  )
});
