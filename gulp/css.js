const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cssmin = require('gulp-cssmin');

const config = require('./config')

module.exports = function(){
    return gulp.src(config.src.css)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(cssmin())
    .pipe(gulp.dest(config.build))
}