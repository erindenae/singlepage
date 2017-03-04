var gulp = require('gulp'),
	sass = require('gulp-sass');



	gulp.task('sass', function(){
	  return gulp.src('source-files')
	    .pipe(sass()) // Using gulp-sass
	    .pipe(gulp.dest('destination'))
	});

