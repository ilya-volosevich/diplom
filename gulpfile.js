const {watch,series,parallel} = require('gulp');
const browserSync = require('browser-sync').create();
const path = require('./gulp/config/path')

//tasks
const html = require('./gulp/tasks/html');
const clear = require('./gulp/tasks/clear');
const style = require('./gulp/tasks/style');
const img = require('./gulp/tasks/img')
const script = require('./gulp/tasks/script')

//sever
const server = () => {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    })
}
//watch
const watcher = () => {
    watch(path.html.watch,html).on('all',browserSync.reload)
    watch(path.style.watch,style).on('all',browserSync.reload)
    watch(path.img.watch,img).on('all',browserSync.reload)
    watch(path.script.watch,script).on('all',browserSync.reload)

}


const build = series(
    clear,
    parallel(html,style,img,script)
)
const dev = series(
    build,
    parallel(watcher,server)
)
exports.dev = dev;
exports.build = build;



