var gulp=require("gulp");
var cleanCss=require("gulp-clean-css");
var uglify=require("gulp-uglify");
var less=require("gulp-less");
gulp.task("clean",function(){
	return gulp.src("src/style/*.css")
	.pipe(cleanCss())
	.pipe(gulp.dest("dist/style"))
})
gulp.task("uglify",function(){
	return gulp.src("src/script/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("dist/script"))
})
gulp.task("less",function(){
	return gulp.src("src/less/*.less")
	.pipe(less())
	.pipe(gulp.dest("src/style"))
})
gulp.task("watch",function(){
	gulp.watch("src/less/*.less",["less"])
	 gulp.watch("src/script/*.js",["uglify"])
	 gulp.watch("src/style/*.css",["clean"])
	
})
gulp.task("default",["less","clean","uglify","watch"])
