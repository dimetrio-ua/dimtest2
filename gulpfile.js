var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var color_rgba_fallback = require('postcss-color-rgba-fallback');
var opacity = require('postcss-opacity');
var pseudoelements = require('postcss-pseudoelements');
var vmin = require('postcss-vmin');
var pixrem = require('pixrem');
var precss = require('precss');

gulp.task('css', function () {
  var processors = [
    precss,
    color_rgba_fallback,
    opacity,
    pseudoelements,
    vmin,
    pixrem,
    autoprefixer
  ];
  return gulp.src('./src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});
