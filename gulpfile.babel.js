import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import runSequence from 'run-sequence';
import gulpEslint from 'gulp-eslint';
import mocha from 'gulp-mocha';

var config = {
  paths: {
    js: {
      src: 'src/**/*.es6',
      dist: 'dist/'
    },
    test: {
      src: 'test/test.js'
    }
  }
};

gulp.task('clean', () =>
  del(config.paths.js.dist)
);

gulp.task('babel', ['babel-src']);

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

gulp.task('test', ['babel'], () =>
  gulp.src([config.paths.test.src])
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', err => console.log(err.stack))
);

// Default Task
gulp.task('default', () =>
  runSequence('clean', ['babel', 'test'])
);