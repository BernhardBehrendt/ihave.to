module.exports = function(grunt) {'use strict';

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        notify : {
            styles : {
                options : {
                    title : 'Task Complete', // optional
                    message : 'SASS and Uglify finished running' //required
                }
            },
            nodemon : {
                options : {
                    message : 'Server restarted'
                }
            }
        },
        macreload : {
            firefox : {
                browser : 'firefox'
            }
        },
        compass : {
            dist : {
                options : {
                    basePath : '../sass/'
                }
            }
        },
        nodemon : {
            dev : {
                options : {
                    file : 'server/app.js',
                    nodeArgs : ['--debug'],
                    ignoredFiles : ['grunt/**', 'public/**', 'server/node_modules/**', 'server/components/**/migration/**', 'components/**/migration/**', 'server/i18n/**'],
                    watchedExtensions : ['js', 'json', 'ejs'],
                    cwd : '../'
                }
            }
        },
        shell : {
            sleep1sec : {
                command : 'sleep 1'
            },
            sleep2sec : {
                command : 'sleep 2'
            }
        },
        watch : {
            styles : {
                files : '../sass/**/*.scss',
                tasks : ['compass', 'notify:styles', 'macreload']
            },
            nodemonrestart : {
                files : '../nodemonrestart.tmp',
                tasks : ['notify:nodemon', 'macreload']
            }
        },
        jshint : {
            files : ['../**/*.js'],
            options : {
                ignores : ['../grunt/**', '../public/**', '../server/node_modules/**', '../frontend_modules/**', '../api-reference/**', '../yuidoc_template/**'],
                curly : true,
                unused : false,
                eqeqeq : true,
                eqnull : true,
                plusplus : false,
                newcap : false,
                node : true,
                jquery : true,
                yui : true,
                devel : true,
                globals : {
                    jQuery : true
                }
            }
        },
        concurrent : {
            target : {
                tasks : ['nodemon', 'watch', 'jshint'],
                options : {
                    logConcurrentOutput : true
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

    // grunt.task.run('notify_hooks');

    grunt.registerTask('default', ['concurrent:target']);
};
