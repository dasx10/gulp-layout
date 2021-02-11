const gulp = require('gulp');

const imagemin = require ('gulp-imagemin');
const webp = require('gulp-webp');
const gulpAvif = require('gulp-avif');

const clean = require('gulp-clean');

const quality = 80;

function img(){
    return gulp.src(path.src.img)
    .pipe(imagemin({
        progressive:true,
        svgoPlugins:[{removeViewBox:false}],
        interlaced:true,
        optimizationLevel:3
    })
    .pipe(gulp.dest(path.build)))
}

function toWebP(){
    return gulp.src(path.src.img)
    .pipe(webp({
        quality
    }))
    .pipe(gulp.dest(path.build))
}

function toAvif(){
    return gulp.src(path.src.img)
    .pipe(gulpAvif({
        quality
    }))
    .pipe(gulp.dest(path.build))
}

function cleanImg(){
    return gulp.src(path.src.img)
    .pipe(gulp.dest('./assets/backup/img'))
    .pipe(gulp.src(path.src.img)
    .pipe(clean()))
}

function cleanSvg(){
    return gulp.src(path.src.svg)
    .pipe(gulp.dest('./assets/backup/svg'))
    .pipe(gulp.src(path.src.svg)
    .pipe(clean()))
}

