import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import runSequence from 'run-sequence';
import gulpEslint from 'gulp-eslint';

var config = {
  paths: {
    js: {
      src: 'src/**/*.es6',
      dist: 'dist/'
    }
  }
};

gulp.task('clean', () =>
  del(config.paths.js.dist)
);

gulp.task('babel-src', ['lint-src'], () =>
  gulp.src(config.paths.js.src)
    .pipe(babel())
    .pipe(gulp.dest(config.paths.js.dist))
);

gulp.task('lint-src', () =>
  gulp.src(config.paths.js.src)
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpEslint.failAfterError())
);

// Default Task
gulp.task('default', () =>
  runSequence('clean', ['babel-src'])
);