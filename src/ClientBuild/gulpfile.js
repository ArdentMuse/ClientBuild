var gulp = require("gulp");
var browserSync = require("browser-sync");
var typescript = require("gulp-typescript");
var del = require('del');
var vinylPaths = require('vinyl-paths');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var tsProject = typescript.createProject("tsconfig.json");

gulp.task("hello", function() {
    console.log("HELLO!");
});

gulp.task("copyIndex", function() {
    return gulp.src("./wwwroot/src/index.html")
        .pipe(gulp.dest("./wwwroot"))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task("browserSync", function () {
    browserSync({
        server: {
            baseDir: "./wwwroot"
        }
    });
});

gulp.task("watchFiles", function () {
    gulp.watch("wwwroot/src/index.html", ["copyIndex"]);
    gulp.watch("wwwroot/src/**/*.ts", ["scripts"]);
});

gulp.task("scripts", function() {
    return gulp.src("./wwwroot/src/**/*.ts")
        .pipe(typescript(tsProject))
        .pipe(gulp.dest("./wwwroot/app"))
        .pipe(browserSync.reload({ stream: true }));

});

gulp.task("clean", function () {
    return gulp.src("./wwwroot/app", { read: false })
			.pipe(vinylPaths(del));
});

gulp.task("default", ["clean", "copyIndex", "scripts", "browserSync", "watchFiles"]);