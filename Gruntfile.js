/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt
			.initConfig({

				clean : {
					libPlugin : {
						files : [ {
							src : [
									'lib/plugin/**',
									'lib/r.js',
									'bower_components/jqwidgets/documentation/**',
									'bower_components/jqwidgets/demos/**' ]
						} ]
					}
				},
				copy : {
					libPlugin : {
						files : [
								{
									src : 'node_modules/requirejs/bin/r.js',
									dest : 'lib/r.js'
								},
								{
									src : 'node_modules/requirejs/require.js',
									dest : 'lib/plugin/require.js'
								},
								{
									src : 'bower_components/jquery/dist/jquery.min.js',
									dest : 'lib/plugin/jquery.min.js'
								},
								{
									src : 'bower_components/domReady/domReady.js',
									dest : 'lib/plugin/domReady.js'
								},
								{
									src : 'bower_components/require-css/css.min.js',
									dest : 'lib/plugin/css.min.js'
								},
								{
									src : 'bower_components/bootstrap/dist/js/bootstrap.min.js',
									dest : 'lib/plugin/bootstrap.min.js'
								},
								{
									src : 'bower_components/bootstrap/dist/css/bootstrap.min.css',
									dest : 'lib/plugin/bootstrap.min.css'
								},
								{
									src : 'bower_components/angular/angular.min.js',
									dest : 'lib/plugin/angular.min.js'
								},
								{
									src : 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
									dest : 'lib/plugin/angular-ui-router.min.js'
								},
								{
									src : 'bower_components/angular-strap/dist/angular-strap.min.js',
									dest : 'lib/plugin/angular-strap.min.js'
								},
								{
									src : 'bower_components/angular-strap/dist/angular-strap.tpl.min.js',
									dest : 'lib/plugin/angular-strap.tpl.min.js'
								},
								{
									src : 'bower_components/font-awesome/css/font-awesome.min.css',
									dest : 'lib/plugin/font-awesome.min.css'
								},
								{
									src : 'bower_components/angular-qrcode/angular-qrcode.js',
									dest : 'lib/plugin/angular-qrcode.js'
								},
								{
									src : 'bower_components/bootstrapvalidator/dist/js/bootstrapValidator.min.js',
									dest : 'lib/plugin/bootstrapValidator.min.js'
								},
								{
									src : 'bower_components/jquery_lazyload/jquery.lazyload.js',
									dest : 'lib/plugin/jquery.lazyload.js'
								},
								{
									src : 'bower_components/bootstrapvalidator/dist/css/bootstrapValidator.min.css',
									dest : 'lib/plugin/bootstrapValidator.min.css'
								},
								{
									expand : true,
									cwd : 'bower_components/bootstrapvalidator/dist/js/language/',
									src : [ 'zh_TW.js', 'zh_CN.js', 'en_US.js' ],
									dest : 'lib/plugin/language/',
									filter : 'isFile'
								},
								{
									expand : true,
									cwd : 'bower_components/font-awesome/fonts/',
									src : [ '**' ],
									dest : 'lib/fonts/',
									filter : 'isFile'
								},
								{
									expand : true,
									cwd : 'bower_components/bootstrap/dist/fonts/',
									src : [ '**' ],
									dest : 'lib/fonts/',
									filter : 'isFile'
								},
								{
									src : 'bower_components/jquery/dist/jquery.min.js',
									dest : 'lib/plugin/jquery.min.js'
								},
								{
									src : 'bower_components/lodash/dist/lodash.min.js',
									dest : 'lib/plugin/lodash.min.js'
								},
								{
									src : 'bower_components/ecmAngular/module.js',
									dest : 'lib/app/module.js'
								},
								{
									src : 'bower_components/ecmAngular/stateRegist.js',
									dest : 'lib/app/stateRegist.js'
								},
								{
									src : 'bower_components/js-md5/build/md5.min.js',
									dest : 'lib/plugin/md5.min.js'
								},
								{
									src : 'bower_components/jqwidgets/jqwidgets/jqxcore.js',
									dest : 'lib/plugin/jqxcore.js'
								}, 
								{
									src : 'bower_components/jqwidgets/jqwidgets/jqxcheckbox.js',
									dest : 'lib/plugin/jqxcheckbox.js'
								},
								{
									src : 'bower_components/jqwidgets/jqwidgets/jqxexpander.js',
									dest : 'lib/plugin/jqxexpander.js'
								},
								{
									src : 'bower_components/jqwidgets/jqwidgets/jqxangular.js',
									dest : 'lib/plugin/jqxangular.js'
								},
								{
									src : 'bower_components/jqwidgets/jqwidgets/styles/jqx.base.css',
									dest : 'lib/plugin/jqx.base.css'
								},
								{
									src : 'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
									dest : 'lib/plugin/bootstrap-datepicker.min.js'
								},
								{
									src : 'bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-TW.min.js',
									dest : 'lib/plugin/bootstrap-datepicker.zh-TW.min.js'
								},
								{
									src : 'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
									dest : 'lib/plugin/bootstrap-datepicker.min.css'
								},
								{
									src : 'bower_components/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css',
									dest : 'lib/plugin/awesome-bootstrap-checkbox.css'
								},
								{
									src : 'bower_components/angular-motion/dist/angular-motion.min.css',
									dest : 'lib/plugin/angular-motion.min.css'
								},
								{
									src : 'bower_components/angular-animate/angular-animate.min.js',
									dest : 'lib/plugin/angular-animate.min.js'
								},
								{
									src : 'bower_components/bootstrap-additions/dist/bootstrap-additions.min.css',
									dest : 'lib/plugin/bootstrap-additions.min.css'
								}]
					}
				}
			});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('setupPlugin', [ 'clean:libPlugin', 'copy:libPlugin' ]);

};