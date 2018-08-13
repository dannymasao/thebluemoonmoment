var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
//var sourcemaps = require('gulp-sourcemaps');
//var browserSync = require('browser-sync').create();


var cssPath = {
  src: './src/css/scss/',
  dist: './static/css',
  // dist2: '../inabluemoon/static/css'
};

var jsPath = {
  src: './src/js/app.js',
  dist: './static/js',
  // dist2: '../inabluemoon/static/js'
}

// var htmlPath = {
//   src: './Site/src/*.ejs',
//   dist: './Site/dist'
// }

gulp.task('css', function() {
  gulp.src(cssPath.src + 'style.scss')
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer({ grid: true }))
    .pipe(gulp.dest(cssPath.dist))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(cssPath.dist));
    // .pipe(browserSync.stream());
});

gulp.task('animate', function() {
  gulp.src(cssPath.src + 'animate.scss')
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer({ grid: true }))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(cssPath.dist));
});


gulp.task('js', function() {
    gulp.src(jsPath.src)
      .pipe(babel({
        presets: ['env']
      }))
      .pipe(gulp.dest(jsPath.dist))
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(jsPath.dist));
      // .pipe(browserSync.stream());
});

//Reload
// gulp.task('reload', function () {
//     browserSync.reload();
// });


gulp.task('watch', function() {
    // browserSync.init({
    //   server: {
    //     baseDir: './dist/',
    //     index: 'index.html'
    //   }
    // });
    // gulp.watch('./dist/*.html', ['reload']);
    gulp.watch('./src/css/scss/*.scss', ['css']);
    gulp.watch(jsPath.src, ['js']);
});


gulp.task('default', ['watch']);



