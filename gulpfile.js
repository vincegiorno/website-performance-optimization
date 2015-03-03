var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    aux = gulpLoadPlugins();

gulp.task('js', function() {
    return gulp.src('src/**/*.js')
    .pipe(aux.cached('jsfiles'))
    .pipe(aux.uglify())
    .pipe(gulp.dest('.'));
});

gulp.task('img', function() {
	return gulp.src(['src/**/*.jpg', './**/*.jpeg', './**/*.png', './**/*.gif'])
	.pipe(aux.cached('imagefiles'))
	.pipe(aux.imagemin())
	.pipe(gulp.dest('.'));
});

gulp.task('css', function() {
	return gulp.src('src/**/*.css')
	.pipe(aux.cached('cssfiles'))
	.pipe(aux.uncss())
	.pipe(aux.minifyCss())
	.pipe(gulp.dest('.'));
});

gulp.task('default', ['js', 'img', 'css']);
