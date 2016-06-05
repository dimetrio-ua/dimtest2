var gulp = require('gulp');
var postcss = require('gulp-postcss');
var atImport = require('postcss-import');
var mqpacker = require('css-mqpacker');
var autoprefixer = require('autoprefixer');
var color_rgba_fallback = require('postcss-color-rgba-fallback');
var opacity = require('postcss-opacity');
var pseudoelements = require('postcss-pseudoelements');
var vmin = require('postcss-vmin');
var pixrem = require('pixrem');
var precss = require('precss');
var cssnano = require('cssnano');

gulp.task('css', function () {
  var processors = [
    atImport,
    mqpacker,
    precss,
    color_rgba_fallback,
    opacity,
    pseudoelements,
    vmin,
    pixrem ({atrules: true}),
    autoprefixer,
    cssnano
  ];
  return gulp.src('./src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});
