var gulp = require('gulp'),
webpack = require('webpack');

// We add call back to : so that gulp can be certain webpack has completed
gulp.task('scripts', function(callback) {
  webpack(require('../../webpack.config.js'), function(err, stats) {
  
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});