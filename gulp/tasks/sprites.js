var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

// Sprite wants its configuration to be declared in an object literal
var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

// so that we don't add sprite files each time we add or remove an icon in the source
gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites'])
});

gulp.task('createSprite', ['beginClean'], function() {
  // when using the src method we have to put return (so that the result is handle by gulp) 
  return gulp.src('./app/assets/images/icons/**/*.svg')
  .pipe(svgSprite(config))
  .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

//We created a dependency so that it waits createSprite to be finish first before to ren
gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
          .pipe(rename('_sprite.css'))
          .pipe(gulp.dest('./app/assets/styles/modules/'));
});

gulp.task('endClean', ['copySpriteGraphic','copySpriteCSS'], function() {
  return del('./app/temp/sprite');
});

// This will make the both tasks to run simultaneously
// but what we want is createSprite first and when completed then copySpriteCSS
// so we included a dependency in the copySpriteCSS task
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS']);

