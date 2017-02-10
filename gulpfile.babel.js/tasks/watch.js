import gulp from 'gulp';
import config from '../config.js';
import runSequence from 'run-sequence';
import watch from 'gulp-watch';

/*
* ファイル更新を監視
*/
gulp.task('watch', () => {
  watch(config.watch.bin, () => {return runSequence('copy_dev', 'reload')});
  watch(config.watch.ejs, () => {return runSequence('ejs', 'reload')});
  watch(config.watch.scss, () => {return runSequence('scss', 'reload')});
  watch(config.watch.js, () => {return runSequence('webpack', 'eslint', 'reload')});
  watch(config.watch.vue, () => {return runSequence('webpack', 'eslint', 'reload')});
  watch(config.watch.do, () => {return runSequence('copy_dev', 'reload')});
  watch(config.watch.json, () => {return runSequence('copy_dev', 'reload')});
});
