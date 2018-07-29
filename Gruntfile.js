'use strict';
const sass = require('./tasks/sass');
const watch = require('./tasks/watch');
const postcss = require('./tasks/postcss');
module.exports = function(grunt) {
  //load all grunt plugin
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass,
    postcss,
    watch
})
  //run Tasks
  grunt.registerTask('default', ['sass','postcss','watch']);
};