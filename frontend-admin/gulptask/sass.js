/**
 * Created by jin on 5/31/17.
 */



var gulp         = require('gulp');
var runSequence  = require('run-sequence');
var spritesmith  = require('gulp.spritesmith');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss     = require('gulp-clean-css');
var rev          = require('gulp-rev');



var sourcePath = {
    'docs'          : '../backend/docs/*.html',
    'module'        : 'node_modules/bootstrap/**/*',
    'module2'       : 'node_modules/font-awesome/**/*',
    'html'          : 'src/app/page/**/*.html',
    'images'        : 'src/assets/**/*',
    'imagesSprites' : 'src/assets/sprite/icon/**/*',
    'scss'          : 'src/sass/**/*.scss',
    'css'           : 'css'
};

var distPath = {
    'docs'                             : './static/docs/',
    'module'                           : './static/node_modules/bootstrap/',
    'module2'                          : './static/node_modules/font-awesome/',
    'html'                             : './static/resources/templates/web',
    'images'                           : './static/assets/',
    'imagesSprites'                    : './static/assets/sprite/auto-sprite.png',
    'imagesSpritesOutputReferringPath' : '/static/assets/sprite/auto-sprite.png',
    'imagesSpritesCssOutput'           : './static/css/helpers/_auto_sprite.scss',
    'css'                              : './static/css/',
    'manifest'                         : './static/rev/'
};



// Node Modules
gulp.task('nodeModules', function() {
    gulp.src(sourcePath.docs)
        .pipe(gulp.dest(distPath.docs))
    gulp.src(sourcePath.module)
        .pipe(gulp.dest(distPath.module))
    gulp.src(sourcePath.module2)
        .pipe(gulp.dest(distPath.module2))
});


// Html Views
gulp.task('htmlTemplate', function() {
    gulp.src(sourcePath.html)
        .pipe(gulp.dest(distPath.html))
});


// Optimize images
gulp.task('images', function() {
    gulp.src(sourcePath.images)
        .pipe(gulp.dest(distPath.images))
});



gulp.task('sprite', function () {
    var spriteData = gulp.src(sourcePath.imagesSprites).pipe(spritesmith({
        imgName:  distPath.imagesSprites ,
        imgPath: distPath.imagesSpritesOutputReferringPath,
        cssName:  distPath.imagesSpritesCssOutput ,
        cssFormat:  'scss',
        algorithm : 'alt-diagonal',
        padding: 20
    }));
    return spriteData.pipe(gulp.dest(''));
});


// Compile css and automatically prefix stylesheets
gulp.task('sass', [ 'images', 'nodeModules'], function() {
    gulp.src(sourcePath.scss)
        .pipe(sass({
            precision       : 10,
            outputStyle     : 'compressed',
            errLogToConsole : true
        }).on('error', sass.logError))
        // .pipe(autoprefixer({
        //     browsers: ['> 5%', 'Last 2 versions'],
        //     cascade: true, //是否美化属性值 默认：true 像这样：
        //     //-webkit-transform: rotate(45deg);
        //     //        transform: rotate(45deg);
        //     remove:true //是否去掉不必要的前缀 默认：true
        // }))
        //.pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(distPath.css))
});



gulp.task('sass-release', [ 'sprite'], function(done) {

    runSequence('images', function() {
        gulp.src(sourcePath.scss)
            .pipe(sass({
                precision       : 10,
                outputStyle     : 'compressed',
                errLogToConsole : true
            }).on('error', sass.logError))
            // .pipe(autoprefixer({
            //     browsers: ['> 5%', 'Last 2 versions'],
            //     cascade: false
            // }))
            //.pipe(cleanCss({compatibility: 'ie8'}))
            .pipe(rev())
            .pipe(gulp.dest(distPath.css))
            .pipe(rev.manifest('rev-manifest-css.json'))
            .pipe(gulp.dest(distPath.manifest) );
        done();
    });

});



gulp.task('watchSass', ['sass'], function() {
    gulp.watch(sourcePath.scss, ['sass']);
});
