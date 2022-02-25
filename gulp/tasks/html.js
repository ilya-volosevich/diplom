const {src, dest} = require("gulp");
const pug = require('gulp-pug');
const path = require('../config/path')
const app = require('../config/app')
const Fs = require('fs');
const data = JSON.parse(Fs.readFileSync('./src/data/data.json'));



const html = () => {
    return src(path.html.src)
        .pipe(pug({
            pretty:true,
            locals: data || {},
        }))
        .pipe(dest(path.html.build))
}

module.exports = html;