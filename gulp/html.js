const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

module.exports = function html(){
    return gulp.src(path.src.html)
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest(path.build))
}