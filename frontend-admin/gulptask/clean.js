/**
 * Created by jin on 5/31/17.
 */


var gulp = require('gulp');
var del = require( 'del');


var distPath = {
    'all'  : './dist',
    'all2'  : './static',
    'html'  : './dll',
    'stylesheets' : './src/css/**/*',
    'autoSprite' : './src/css/images/sprite/auto-sprite.*',
    'tsCompileJs' : './.awcache/**/*',
    'tsSourceWithHtmlTpl' : './tssource-temp-prodution/**/*',
    'tsCompileJsBuild' : './jsoutput-temp-prodution/**/*'
};

gulp.task('clean', function() {
    del.sync([
        distPath.all,
        distPath.all2,
        distPath.html,
        distPath.stylesheets,
        distPath.autoSprite,
        distPath.tsCompileJs

    ], {force:true});
});


