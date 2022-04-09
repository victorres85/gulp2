const gulp = require('gulp')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const cssmin = require('gulp-cssmin')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const stripCSS = require('gulp-strip-css-comments')


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

function tarefasCSS(cb) {

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

}

function tarefaJS() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './src/vendor/owl/js/owl.js',
        './src/vendor/jquery-mask/jquery.mask.js',
        './src/vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))
}

exports.styles = tarefasCSS
exports.scripts = tarefaJS
exports.images = tarefasImagem