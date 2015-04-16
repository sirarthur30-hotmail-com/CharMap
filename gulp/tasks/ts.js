var gulp = require('gulp');
var config = require('../config').winjs;
var browserSync  = require('browser-sync');
var ts = require('gulp-typescript');

gulp.task('ts', function() {
  return gulp.src(config.ts)
    .pipe(ts({
      declarationFiles: true,
      noExternalResolve: true
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});

