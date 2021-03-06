module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src('./build/stylus/main.styl')
            .pipe($.gp.stylus({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./web/assets/css/'))
    });

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./build/stylus/main.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({
                'include css': true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Stylus',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./web/assets/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
