module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

   
  grunt.initConfig({
       
    sass: { 
      dev: { 
        files: {
          'app/css/style.css': 'app/scss/**/*.scss'
        }
      }
    },
     
    watch: {
      sass: {
        files: 'app/scss/**/*.scss',
        tasks: ['compass', 'cssmin']
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      scripts: {
        files: ['app/js/custom/*.js'],
        tasks: ['uglify']
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'app/css/*.css',
            'app/**/*.html',
            'app/js/min/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "app",
            routes: {
              "/bower_components": "bower_components"
            }
          },
          https: false,
          browser: ["google chrome"]
        }
      }
    },

    compass: {                 
      dist: {                   
        options: {              
          sassDir: 'app/scss',
          cssDir: 'app/css',
          environment: 'development'
        }
      },
      dev: {                    
        options: {
          sassDir: 'app/scss',
          cssDir: 'app/css'
        }
      }
    },

    wiredep: {
      task: {
        src: [
          'app/**/*.html',   
          'app/scss/**/*.scss',
        ]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'app/css',
          src: ['*.css', '!*.min.css'],
          dest: 'app/css',
          ext: '.min.css'
        }]
      }
    },

    paths: {
      src: {
        js: 'app/js/custom/*.js'
      },
      dest: {
        jsMin: 'app/js/min/main.min.js'
      }
    },

    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: '<%= paths.src.js %>',
        dest: '<%= paths.dest.js %>'
      }
    },

    uglify: {
      options: {
        beautify: true,
        compress: true
      },
      target: {
        src: '<%= paths.src.js %>',
        dest: '<%= paths.dest.jsMin %>'
      }
    }

  });
  grunt.registerTask('default', ['browserSync', 'watch']);
};