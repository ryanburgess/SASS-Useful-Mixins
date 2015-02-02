module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				updateConfigs: ["pkg"],
				commit: true,
				commitMessage: 'Release v%VERSION%',
				commitFiles: ['package.json'], // '-a' for all files
				createTag: true,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				commitFiles: ["-a"],
				push: false
			}
		},
		sassyclean: {
	    options: {
	      modules: ['mixins/**/*.scss'],
	      buildfiles: ['mixins/_base.scss'],
	      remove: false,
	      days: null
	    }
	  }
	});
	grunt.loadNpmTasks('grunt-sassyclean');
	grunt.loadNpmTasks('grunt-bump');
}
