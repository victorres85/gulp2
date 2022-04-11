const gulp = require('gulp')
const { series, parallel } = require('gulp')  // series -> tarefas sao executadas uma apos a outra; parallel -> acoes sao executadas simultaneamente
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const cssmin = require('gulp-cssmin')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const stripJs = require('gulp-strip-comments')
const stripCSS = require('gulp-strip-css-comments')
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create()
const reload = browserSync.reload


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

function tarefasCSS(callback) {

    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/brands.css',
        './src/vendor/owl/css/owl.css',
        './src/vendor/jquery-ui/jquery-ui.css',
        './src/css/custom.css'])
        .pipe(stripCSS())                   // remove comentários
        .pipe(concat('styles.css'))         // mescla arquivos
        .pipe(cssmin())                     // minifica css
        .pipe(rename({ suffix: '.min' }))    // styles.min.css
        .pipe(gulp.dest('./dist/css'))      // cria arquivo em novo diretório
    return callback()

}

function tarefaJS(callback) {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './src/vendor/owl/js/owl.js',
        './src/vendor/jquery-mask/jquery.mask.js',
        // './src/vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))
    return callback()
}

function tarefasHTML(callback) {

    gulp.src('./src/**/*.html')

        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
    return callback()

}

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process) // repete o processo quando algo for alterado em SRC
    gulp.watch('./src/**/*').on('change', reload)
})

const process = series(tarefasHTML, tarefaJS, tarefasCSS)

exports.styles = tarefasCSS
exports.scripts = tarefaJS
exports.images = tarefasImagem

exports.default = process