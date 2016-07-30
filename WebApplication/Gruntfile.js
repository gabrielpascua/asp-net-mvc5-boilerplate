/// <binding AfterBuild='default' />
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                  'node_modules/jquery/dist/jquery.js',
                  'node_modules/bootstrap/dist/js/bootstrap.js'
                ],
                dest: 'Content/js/vendors.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'Content/js/vendors.min.js': [
                      'Content/js/vendors.js'
                    ]
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'Content/css/main.min.css': [
                      'node_modules/bootstrap/dist/css/bootstrap.min.css',
                      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                      'Sass/style.css'
                    ]
                }
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'Sass',
                    src: ['*.scss'],
                    dest: './Sass',
                    ext: '.css'
                }]
            }
        },
        clean: {
            contents: [
                './Content/js/vendors.js',
                './Sass/Style.css',
                './Sass/Style.css.map'
            ]
        }
    });

    //Activate Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //Create task(s).
    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin', 'clean']);

};
