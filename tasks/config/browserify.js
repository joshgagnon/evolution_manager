


module.exports = function(grunt) {

	var pipeline = require('../pipeline');
	grunt.config.set("browserify",
	 {
      options:{
        browserifyOptions: {
           debug: true
        },
      },
      dist: {
        files: {
          '.tmp/public/js/app.js': '.tmp/babel/app.js'
        }
      }
    });

    grunt.loadNpmTasks('grunt-browserify');
}
