module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bump: {  
		    scripts: {
		        files: ["*.js", "*.js"],
		        updateConfigs: ["pkg"],
		        commitFiles: ["-a"],
		        push: false
		    }
		},
		watch: {
			css: {
				files: 'source/**/*.scss',
				tasks: ['bump'],
				options: { 
					spawn: false,
					livereload: true 
				},
			}
		}
	});
	grunt.registerTask('default',['watch']);
}