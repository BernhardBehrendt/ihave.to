module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        notify: {
            styles: {
                options: {
                    title: 'Task Complete', // optional
                    message: 'SASS and Uglify finished running' //required
                }
            },
            nodemon: {
                options: {
                    message: 'Server restarted'
                }
            }
        },
        macreload: {
            firefox: {
                browser: 'firefox'
            }
        },
        compass: {
            dist: {
                options: {
                    basePath: '../sass/'
                }
            }
        },
        nodemon: {
            dev: {
                options: {
                    file: 'server/server-standalone.js',
                    nodeArgs: [],
                    ignoredFiles: ['grunt/**', 'public/**', 'server/node_modules/**'],
                    watchedExtensions: ['js', 'json'],
                    cwd: '../'
                }
            }
        },
        shell: {
            sleep1sec: {
                command: 'sleep 1'
            },
            sleep2sec: {
                command: 'sleep 2'
            }
        },
        watch: {
            styles: {
                files: '../sass/**/*.scss',
                tasks: ['compass', 'notify:styles', 'macreload']
            },
            nodemonrestart: {
                files: '../nodemonrestart.tmp',
                tasks: ['notify:nodemon', 'macreload']
            },
            client: {
                files: '../client/**/*.js',
                tasks: ['uglify', 'macreload']
            }
        },
        jshint: {
            files: ['../**/client/*.js', '../**/client/server/**/*.js'],
            options: {
                ignores: ['../grunt/**', '../public/**', '../server/node_modules/**', '../frontend_modules/**', '../api-reference/**', '../yuidoc_template/**'],
                curly: true,
                unused: false,
                eqeqeq: true,
                eqnull: true,
                plusplus: false,
                newcap: false,
                node: true,
                jquery: true,
                yui: true,
                devel: true,
                globals: {
                    jQuery: true
                }
            }
        },
        concurrent: {
            target: {
                tasks: ['nodemon', 'watch', 'jshint'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        uglify: {
            options: {
                beautify: true,
                DEVMODE: true
            },
            my_target: {
                files: {
                    '../public/js/client.js': [
                        '../client/static/language.js',
                        '../client/static/config.js',
                        '../client/static/templates.js',

                        '../client/classes/extends/string.js',
                        '../client/classes/*.js',

                        '../client/vendor/jquery/jquery.min.js',
                        '../client/vendor/jquery/jquery-ui.min.js',
                        '../client/vendor/jquery/jquery-ui.touchpunch.js',
                        '../client/vendor/jquery/jquery.color.js',
                        '../client/vendor/jquery/jquery.cursorposition.js',
                        '../client/vendor/jquery/jquery.pstrength.js',
                        '../client/vendor/jquery/jquerytinysort.js',

                        '../client/vendor/underscore.js/underscore.js',

                        '../client/vendor/apprise/apprise-v2.js',

                        '../client/vendor/cubic/add2home.js',

                        '../client/vendor/crypto/rollups/aes.js',
                        '../client/vendor/crypto/rollups/sha3.js',

                        '../client/vendor/socket.io/socket.io.js',

                        '../client/functions/*.js',

                        '../client/init/*.js',
                        '../client/interactions/*.js',
                        '../client/main.js']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-macreload');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // grunt.task.run('notify_hooks');

    grunt.registerTask('default', ['concurrent:target']);
};
