var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('tpl', function () {
return gulp.src ('./src/tpl/*.html')
        .pipe(gulp.dest('./build/'));
});

gulp.task('css', function () {
return gulp.src ('./src/css/*.css')
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('sass', function () {
return gulp.src ('./src/sass/style.scss')
        .pipe(sass({
			errorLogToConsole: true,
			//outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
        .pipe(gulp.dest('./build/css/'));

});

gulp.task('default', gulp.parallel('tpl', 'css', 'sass'));



