module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-uglify');
   
  grunt.initConfig({
       
    sass: { 
      dev: { 
        files: {
            'app/css/style.css': 'app/scss/style.scss'
        }
      }
    },
     
    watch: {
      sass: {
        files: 'app/scss/*.scss',
        tasks: ['compass']
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
            src : [
              'app/css/*.css',
              'app/*.html',
              'app/js/min/*.js'
            ]
        },
        options: {
            watchTask: true,
            server: './app',
            https: false,
            browser: ["google chrome"]
        }
      },
    },
    compass: {                 
      dist: {                   
        options: {              
          sassDir: 'app/scss',
          cssDir: 'app/css',
          environment: 'develop'
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
          'app/scss/style.scss',
        ]
      }
    },
    uglify: {
      my_target: {
        options: {
          beautify: true
        },
        files: {
          'js/min/main.min.js': ['app/js/main.js', 'app/js/vendor/bootstrap.js']
        }
      }
    }
  });
  grunt.registerTask('default', ['browserSync', 'watch']);
};