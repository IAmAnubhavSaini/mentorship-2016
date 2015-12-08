module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        expand: true,
        cwd: 'App/public/scripts/',
        src: '*.js',
        dest: 'Dist/public/scripts/',
        ext: '.min.js',
        extDot: 'last'
      },
    },

    clean: {
      dist: ["Dist/*"]
    },

/* I want sass to take care of SCSS and SASS files. */
    sass: {
      self: {
        options: { 
          style: 'compressed',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'App/public/styles/',
          src: ['*.scss'],
          dest: 'Dist/public/styles/',
          ext: '.min.css'
        }]
      }
    },

    haml: {
      dist: {
        files: {
          'Dist/index.html': 'App/index.haml',
          'Dist/firststep.html': 'App/firststep.haml',
        }
      }
    },

    copy: {
      fonts: {
        files: [{expand: true, cwd: 'App/public/fonts/', src: ['*'], dest: 'Dist/public/fonts/'}]
      },
      images: {
        files: [{expand: true, cwd: 'App/public/images', src: ['*'], dest: 'Dist/public/images/'}]
      },
      docs: {
        files: [{expand: true, cwd: 'App/public/docs', src:['*'], dest: 'Dist/public/docs/'}]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'App/public/styles/',
          src: ['*.css', '!*.min.css', '!*.scss'],
          dest: 'Dist/public/styles/',
          ext: '.min.css'
        }]
      }
    }

  });

  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.registerTask('default', ['clean:dist', 'uglify', 'sass:self', 'haml', 'copy:fonts', 'copy:images', 'cssmin']);
/* sass:self gotta come before cssmin */
};
