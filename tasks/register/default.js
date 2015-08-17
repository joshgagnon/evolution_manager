var timer = require("grunt-timer");

module.exports = function (grunt) {
	timer.init(grunt);
	grunt.registerTask('default', ['compileAssets', 'linkAssets',  'watch']);
};
