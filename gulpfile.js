var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

function build(done) {
	gulp.src('./src/tpl/*')
		.pipe( gulp.dest('./build/') )
		.pipe(browserSync.stream());

	done();
	gulp.src('./src/sass/style.scss')
		.pipe(sass({
			errorLogToConsole: true,
			//outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe( gulp.dest('./build/css/') );

	done();
	gulp.src('./src/imglife/*')
		.pipe( gulp.dest('./build/img/') );

	done();
	gulp.src('./src/fonts/*')
		.pipe( gulp.dest('./build/fonts/') );

	done();
	gulp.src('./src/css/*')
		.pipe( gulp.dest('./build/css/') );

	done();
	gulp.src('./src/js/*')
		.pipe( gulp.dest('./build/js/') );

	done();
}

function sync(done) {
	browserSync.init({
  	  	server: {
  	    	baseDir: './build/'
  	  	},
  	  	notify: true,
  	  	tunnel: false,
        host: 'localhost',
        port: 9000,
        logPrefix: "hardkod",
        logLevel: 'debug',
        online: true
	});
}
function watchBuild() {
	gulp.watch("./src/**/*", build);
}

gulp.task('default', gulp.parallel(sync, build, watchBuild));
gulp.task(sync);
