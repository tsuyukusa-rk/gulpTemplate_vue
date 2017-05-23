import gulp from 'gulp';
import config from '../config.js';
import pug from 'gulp-pug';
import data from 'gulp-data';
import plumber from 'gulp-plumber';


gulp.task('pug', () => {
  return gulp.src(config.pug)
    .pipe(plumber())
    .pipe(data(function(file) {
      let json = {};
      String(file.contents).split("\n").forEach(function(line) {
        if(line.match(/^\/\/\-\s*?data\s+?((\w+)\.json)$/)) {
          json[RegExp.$2] = require("./" + RegExp.$1);
        }
      });
      return { data: json };
    }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.dist))
});
