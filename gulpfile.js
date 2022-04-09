const gulp = require('gulp')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const cssmin = require('gulp-cssmin')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')


function tarefasImagem() {

    return gulp.src('./src/imagens/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

function tarefaCSS(cb) {
    return gulp.src('./src/vendor/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'))
}

function tarefaJS() {
    return gulp.src('./src/vendor/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))
}

exports.styles = tarefaCSS
exports.scripts = tarefaJS
exports.images = tarefasImagem