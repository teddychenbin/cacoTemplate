require.config({
	baseUrl: '../lib/',
  
	paths: {
		'domReady': 'plugin/domReady',
		'jquery': 'plugin/jquery.min',
		'bootstrap': 'plugin/bootstrap.min',
		'bootstrapValidator': 'plugin/bootstrapValidator.min',
		'angular': 'plugin/angular.min',
		'angularstrap': 'plugin/angular-strap.min',
		'angularstraptpl': 'plugin/angular-strap.tpl.min',
		'angular-animate': 'plugin/angular-animate.min', 
		'router': 'plugin/angular-ui-router.min',
		'qrcode': 'plugin/qrcode',
		'lazyload': 'plugin/jquery.lazyload',
		'lodash': 'plugin/lodash.min',
		'md5': 'plugin/md5.min',
//		'jqxcore': 'plugin/jqxcore', 
//		'jqxexpander': 'plugin/jqxexpander',
//		'jqxangular': 'plugin/jqxangular',
//		'jqxcheckbox': 'plugin/jqxcheckbox',
		'bootstrap-datepicker': 'plugin/bootstrap-datepicker.min',
		'bootstrap-datepicker-zh-tw': 'plugin/bootstrap-datepicker.zh-TW.min'
	},
	urlArgs: "ecmangular1.0.0",
	shim: {

		'angular': {
			exports: 'angular'
		},
		'router': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'bootstrapValidator': {
			deps: ['jquery']
		},
		'lazyload': {
			deps: ['jquery']
		},
//		"jqxcore": {
//			export: "$",
//			deps: ['jquery']
//		}, 
//		'jqxangular': {
//			export: "$",
//			deps: ['jquery', 'jqxcore']
//		},
//		'jqxcheckbox': {
//			export: "$",
//			deps: ['jquery', 'jqxangular']
//		},
//		'jqxexpander': {
//			export: "$",
//			deps: ['jquery', 'jqxangular']
//		},
		'bootstrap-datepicker': { 
			deps: ['jquery']
		},
		'bootstrap-datepicker-zh-tw': { 
			deps: ['bootstrap-datepicker']
		},

		'angularstrap': {
			deps: ['angular']
		},
		'angularstraptpl': {
			deps: ['angularstrap']
		},
		'angular-animate': {
			deps: ['angular']
		}

	},
	deps: ['domReady',
		'bootstrap',
		'bootstrapValidator',
		'router',
		'lodash',
		'lazyload',
		'md5',
//		'jqxcore', 
//		'jqxexpander', 
//		'jqxcheckbox',
//		'jqxangular',
		'bootstrap-datepicker',
		'bootstrap-datepicker-zh-tw',
		'angularstrap',
		'angularstraptpl',
		'angular-animate'
	]

});