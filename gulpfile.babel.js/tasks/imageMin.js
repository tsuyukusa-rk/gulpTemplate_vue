import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import config from '../config.js';

const task = (type) => {
  gulp.src(config.imageMin)
    .pipe(imagemin(
      [
        pngquant({quality: '40-70', speed: 1})
      ],
      {
        optimizationLevel: 7,
        progressive: true,
      }
    ))
    .pipe(imagemin())
    .pipe(gulp.dest(config[type]));
};
gulp.task('imageMin:dev', () => { task('dist'); });
gulp.task('imageMin:artifacts', () => { task('artifacts'); });
