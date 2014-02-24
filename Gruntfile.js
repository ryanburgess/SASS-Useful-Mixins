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
		}
	});
	grunt.loadNpmTasks('grunt-bump');
}