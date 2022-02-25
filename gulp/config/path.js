const pathSrc = './src'
const pathPublic = './public'

module.exports = {
    root:pathPublic,
    html: {
        src:`${pathSrc}/html/index.pug`,
        watch:`${pathSrc}/html/**/*.pug`,
        build: `${pathPublic}`
    },
    style: {
        src:`${pathSrc}/style/*.scss`,
        watch:`${pathSrc}/style/**/*.scss`,
        build: `${pathPublic}/style/`
    },
    img: {
        watch:`${pathSrc}/img/*.{jpeg,jpg,png,svg,gif}`,
        build: `${pathPublic}/img/`
    },
    script: {
        src:`${pathSrc}/script/*.js`,
        watch:`${pathSrc}/script/**/*.js`,
        build: `${pathPublic}/script/`
    }
}