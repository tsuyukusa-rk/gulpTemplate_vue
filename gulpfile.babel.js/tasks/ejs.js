import gulp from 'gulp';
import config from '../config.js';
import gulpUtil from 'gulp-util';
import ejs from 'gulp-ejs';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';

gulp.task('ejs', () => {
  return gulp.src(config.ejs)
    .pipe(plumber())
    .pipe(ejs({}).on('error', gulpUtil.log))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest(config.dist))
});
