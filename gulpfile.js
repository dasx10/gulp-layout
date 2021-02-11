const gulp = require('gulp');

const config = require('./gulp/config')

const html = require('./gulp/html');
const css = require('./gulp/css');

function watchCss(){
    return gulp.watch(['./assets/css/*.less'],css);
}

function watchHtml(){
    return gulp.watch([config.src.html], html);
}

function watch(){
    watchCss();
    watchHtml();
}

module.exports.css = css;
module.exports.html = html;

// module.exports.img=img;

module.exports.watch = watch;
module.exports.watchCss = watchCss;
module.exports.watchHtml = watchHtml;