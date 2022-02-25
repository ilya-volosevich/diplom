const {src, dest} = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const path = require('../config/path')


const style = () => {
    return src(path.style.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(dest(path.style.build))
}

module.exports = style;