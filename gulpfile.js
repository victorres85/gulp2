const gulp = require('gulp')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const cssmin = require('gulp-cssmin')
const uglify = require('gulp-uglify')

function tarefaCSS(cb) {
    return gulp.src('./vendor/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('.\dist\css'))
}

function tarefaJS(cb) {
    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))
}

exports.styles = tarefaCSS
exports.scripts = tarefaJS