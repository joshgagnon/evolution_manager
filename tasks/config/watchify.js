


module.exports = function(grunt) {

	var pipeline = require('../pipeline');
	grunt.config.set("watchify",
	 {
      options:{
           debug: true,
           wait: 0.5
      },
      dev: {
        src: ['./.tmp/babel/app.js'],
        dest: './.tmp/public/js/app.js'
      }
    });

    grunt.loadNpmTasks('grunt-watchify');
}
