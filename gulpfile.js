'use strict';

const gulp = require('gulp');
const protractor = require("gulp-protractor").protractor;

gulp.task('default', () => {
    return gulp.src([])
    .pipe(protractor({
        configFile: "./configs/conf.js",
        args: ['--baseUrl', 'http://127.0.0.1:8000']
    }))
    .on('error', function(e) { throw e })
});