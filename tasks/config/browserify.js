


module.exports = function(grunt) {

	var pipeline = require('../pipeline');
	grunt.config.set("browserify",
	 {
      dist: {
        files: {
          '.tmp/public/js/app.js': '.tmp/babel/app.js'
        }
      }
    });

    grunt.loadNpmTasks('grunt-browserify');
}
