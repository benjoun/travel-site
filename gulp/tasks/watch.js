var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();  // we import the method

gulp.task('watch', function() {
  
  browserSync.init({
    notify: false, // so we don't see the annoying box of browser-sync
    server: {
      baseDir: "./app"
    }
  });
   
  watch('./app/index.html', function() {
    browserSync.reload();
    // gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

});


// the second argument is a dependency .. the thing to do before the function
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
            .pipe(browserSync.stream());
})


// the second argument is a dependency .. the thing to do before the function
gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
})