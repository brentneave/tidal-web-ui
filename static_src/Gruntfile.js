module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          '../static/css/screen.css' : 'scss/screen.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          '../static/css/screen.css':'../static/css/screen.css'
        }
      }
    },
    browserify: {
      main: {
        src: 'js/site.js',
        dest: '../static/js/site.js'
      }
    },
    watch: {
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass', 'autoprefixer']
      },
      js: {
        files: ['js/*.js', 'package.json'],
        tasks: ['browserify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default',['sass', 'autoprefixer', 'browserify', 'watch']);
}