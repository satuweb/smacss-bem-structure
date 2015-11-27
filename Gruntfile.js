module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-concat');
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
      },
      scripts: {
        files: ['app/js/*.js'],
        tasks: ['uglify']
      },
      js_frontend: {
        files: [
          'bower_components/jquery/dist/jquery.js',
        ],   
        tasks: ['concat:js_frontend','uglify:frontend'],    
        options: {
          livereload: true
        }
      },
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
    concat: {
      options: {
        separator: ';',
      },
      js_frontend: {
        src: [
          'bower_components/jquery/dist/jquery.js',
        ],
        dest: ' app/js/main.js',
      }
    },
    uglify: {
      frontend: {
        options: {
          beautify: true
        },
        files: {
          'app/js/min/main.min.js': ['app/js/main.js','app/js/load-partials.js' ]
        }
      }
    }
  });
  grunt.registerTask('default', ['browserSync', 'watch']);
};