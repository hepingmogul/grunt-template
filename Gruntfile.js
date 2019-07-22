module.exports = (grunt) => {
  'use strict'

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/jsdom.js', 'src/tools.js'],
        dest: 'dist/jsdom.js',
      },
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
        // src: 'dist/jsdom.js',
        // dest: 'dist/jsdom.min.js'
      }
    },

    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认任务
  grunt.registerTask('default', ['concat', 'uglify']);
}