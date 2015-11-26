module.exports = function(grunt) {
 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-wiredep');
   
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
        tasks: ['sass']
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
              'app/*.html'
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
    wiredep: {

      task: {

        src: [
          'app/**/*.html',   // .html support...
          'app/scss/style.scss',  // .scss & .sass support...
        ],

        options: {
          // See wiredep's configuration documentation for the options
          // you may pass:

          // https://github.com/taptapship/wiredep#configuration
        }
      }
    }
  });
   
  grunt.registerTask('default', ['browserSync', 'watch']);
};