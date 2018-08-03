module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          protocol: 'http',
          livereload: true,
          open: true,
          port: 9000,
          base: {
            path: '.',
            options: {
              index: 'index.html'
            }
          }
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      files: [
        '*.html',
        'home/*.js',
        'home/**/*.js',
        'home/*.html',
        'home/**/*.html',
        'gruntfile.js'
      ]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect', 'watch']);
};
