var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require("gulp-uglify");
var source = require('vinyl-source-stream');
var browserify = require("browserify");
var rename = require("gulp-rename");
var plumber = require('gulp-plumber');
var browserSync = require("browser-sync");
var runSequence = require("run-sequence");
var notify = require('gulp-notify');
 

 gulp.task("js", function(callback) {
       return runSequence("browserify","js-min",callback);
 });

gulp.task("browserify", function(callback) {
  console.log("---------- babel-browserify ----------");
  return browserify('src/index.js', { debug: true })
  .transform("babelify", {presets: ["es2015"]})
  .bundle(function(err){
    if(err){
      //エラー時でもgulpのwatchタスクを終了させない措置
      return callback(err)
    }
  })
  .on('error', function(err){
    //jsの記法でエラーがあればログを吐き出す
    console.log("JSのエラー："　+ err.message);
    console.log(err.stack);
  })
  .pipe(source('main.js'))
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(gulp.dest('./dist'));
});

//圧縮
gulp.task("js-min", function() {
  console.log("---------- js圧縮 ----------");
  gulp.src(['src/*.js', 'src/**/*.js'])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(uglify())
  .pipe(rename({ extname: ".min.js" }))
  .pipe(gulp.dest('./dist.jsmin'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', function () {
         //return gulp.src(['src/*.js', 'src/**/*.js']) .pipe(babel()) .pipe(gulp.dest('dist'));
 });

