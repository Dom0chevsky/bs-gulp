var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function(done) { 
  	browserSync.init({
  	  	server: {
  	    	baseDir: './build/'
  	  	},
  	  	notify: true,
  	  	tunnel: false,
        host: 'localhost',
        port: 9000,
        logPrefix: "domkod",
        logLevel: 'debug',
        online: true
  	});
  	
  	browserSync.watch('build/**/*').on('change', browserSync.reload);
  	
  	done()
});	

gulp.task('tpl', function () {
return gulp.src ('./src/tpl/*.html')
        .pipe(gulp.dest('./build/'));
});

gulp.task('fonts', function () {
return gulp.src ('./src/fonts/*')
        .pipe(gulp.dest('./build/fonts'));
});


gulp.task('css', function () {
return gulp.src ('./src/css/*.css')
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('imglife', function () {
return gulp.src ('./src/imglife/*.png')
        .pipe(gulp.dest('./build/img/'));
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



gulp.task('default', gulp.parallel('tpl', 'css', 'sass', 'imglife', 'fonts', 'browser-sync'));



