const {src, dest} = require("gulp");
const path = require('../config/path');




const script = () => {
    return src(path.script.src)
        .pipe(dest(path.script.build))
}

module.exports = script;