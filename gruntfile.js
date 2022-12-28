module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dist/main.css': 'src/main.less' 
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/main.min.css': 'src/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/main.min.js': 'src/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
}

