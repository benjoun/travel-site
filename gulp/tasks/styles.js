var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer])) // postcss expects an array
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end'); // so it just end the 'styles' task as it was ok - So it doens't break gulp watch
    })
    .pipe(gulp.dest('./app/temp/styles'));
});