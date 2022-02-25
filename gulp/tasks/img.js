const {src, dest} = require("gulp");
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const path = require('../config/path');
const app = require("../config/app");



const img = () => {
    return src(path.img.watch)
        .pipe(newer(path.img.build))
        .pipe(imagemin())
        .pipe(dest(path.img.build))
}
module.exports = img;