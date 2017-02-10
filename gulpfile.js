var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;


gulp.task('html', function(){
  gulp.src('app/**/*.html');
});

/** SASS - Translates SASS files into CSS files **/
gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

/** BrowserSync - Enables working in browser + devices **/
gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: "./app/"
    }
  });
});

gulp.task('watch', function(){
  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('default', ['html', 'sass', 'browser-sync', 'watch']);
