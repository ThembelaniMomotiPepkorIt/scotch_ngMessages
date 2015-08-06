module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			build: ['Gruntfile.js', '*.js']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('jshint-stylish');

	grunt.registerTask('default', ['jshint']);	
};



