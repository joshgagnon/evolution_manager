
module.exports = function(grunt) {

	var pipeline = require('../pipeline');

	grunt.config.set('babel', {
        options: {
            sourceMap: 'inline',
            stage: 0
        },
        dist: {
            files: [{
                    expand: true,
                    cwd: 'assets/js',
                    src: ['*.jsx', '**/*.jsx','*.js', '**/*.js' ],
                    dest: '.tmp/babel',
                    ext: '.js'
                }]
        }
	});

	grunt.loadNpmTasks('grunt-babel');
};
