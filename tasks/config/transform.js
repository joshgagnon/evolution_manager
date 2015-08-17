
module.exports = function(grunt) {

	var pipeline = require('../pipeline');

	grunt.config.set('babel', {
        options: {
            sourceMap: true,
        },
        dist: {
            files: [{
                    expand: true,
                    cwd: 'assets/js',
                    src: ['*.jsx', '**/*.jsx'],
                    dest: '.tmp/babel',
                    ext: '.js'
                }]
        }
	});

	grunt.loadNpmTasks('grunt-babel');
};
