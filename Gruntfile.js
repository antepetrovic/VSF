module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'src/css/homepage.css': 'src/scss/homepage.scss',
          'src/css/lokacije.css': 'src/scss/lokacije.scss',
          'src/css/galerija.css': 'src/scss/galerija.scss',
          'src/css/footer.css'  : 'src/scss/Footer/footer.scss',
        }
      }
    },

    watch: {
      css: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};


