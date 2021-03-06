// Karma configuration
// Generated on Tue Jul 21 2015 14:01:44 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'common_js'],

    // list of files / patterns to load in the browser
    files: [
      'src/**/!(*-test).js',
      'src/**/*-test.js',
      'src/**/*.html'
    ],
    preprocessors: {
      'src/**/!(*-test).js': ['common_js'],
      'src/**/*-test.js': ['common_js'],
      'src/**/*.html': ['common_js']
    },
    common_js: {
      transforms: {
      },
      autoRequire: [
        '**/src/**/*-test.js'
      ]
    },

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
