module.exports = function(grunt) {
	grunt.initConfig({

cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'css/',
      src: ['*.css', '!*.min.css'],
      dest: 'css/',
      ext: '.min.css'
    }]
  }
},

htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'index.php': 'backup.php'     // 'destination': 'source'
      }
    }
    },

 uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'js/app.min.js': ['js/app.js']
      }
    }
  }

});
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['cssmin','htmlmin','uglify']);

}