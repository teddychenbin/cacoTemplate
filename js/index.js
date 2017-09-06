require(
		[ './config' ],
		function() {

			require(
					[ 'domReady!', 'angular', 'router' ],
					function(document, ng) {

						require(
								[ 'app/module', 'app/stateRegist' ],
								function(app, stateRegist) {

									app
											.config([
													'$stateProvider',
													'$urlRouterProvider',
													'$locationProvider',
													function($stateProvider,
															$urlRouterProvider,
															$locationProvider) {

														stateRegist($stateProvider);
														$urlRouterProvider
																.otherwise('home/caco');
													} ]);

									app
											.run([
													'$location',
													'$rootScope',
													function($location,
															$rootScope) {
														$rootScope
																.$on(
																		'$stateChangeSuccess',
																		function(
																				event,
																				toState,
																				toParams,
																				fromState,
																				fromParams) {
																			console
																					.info('$stateChangeSuccess');
																			window
																					.scroll(
																							0,
																							0);

																			if (toState.name === 'login'
																					&& !_
																							.isEmpty(fromState.name)
																					&& fromState.name != "info"
																					&& fromState.name != "error"
																					&& fromState.name != "regist"
																					&& fromState.name != "changepassword") {
																				$rootScope.loginReturnState = fromState;
																				$rootScope.loginReturnParams = fromParams;
																			}

																		});

														$rootScope
																.$on(
																		'$stateChangeStart',
																		function(
																				event,
																				viewConfig) {
																			$rootScope.previousAbsurl = $location
																					.absUrl();
																			console
																					.info($rootScope.previousAbsurl);
																			console
																					.info('$stateChangeStart');

																		});

													} ]);

									app.value('apihost',
											'http://192.168.5.189:8090/membermall');
									app.value('jsonhost',
											'http://192.168.5.189:8022');
									app.value('webpagehost',
											'http://192.168.5.189:8022');
									app.value('ver', 'mock'); // 模擬數據版本

									app.value('dateformat', 'yyyy-mm-dd'); // 日期格式
									app.value('lanuage', 'zh-TW');
									/*
									 * 列表显示记录数
									 */
									app.value('pagesize', 40); 
									app.value('mockidentify', null);
									/*
									 * 加载的视图
									 */
									app.value('pages', [ 'article', // 文章
									'error', // 错误页面
									'itemsearch', // 产品查询
									'member', // 会员
									'order', // 订单
									'orderpay', // 付款
									'regist', // 会员注册
									'changepassword', // 修改密碼
									'actionauth', // 操作認證
									'test', 'mkgdispgroup', // 陈列群组
									'mkgpgm', // 行销方案
									'mkgpgmarticle', // 行销物件
									'info', 'info_actionexpire',
											'info_bindingemailsuccess',
											'info_changepasswordsuccess',
											'info_gotoemail',
											'info_registsuccess',
											'info_membermodifysuccess',
											'actionauth_email', 'bindingemail', // 绑定邮件
											'home', // 首页
											'home_caco', 'home_aretro',
											'home_chula', 'home_designt',
											'home_navy', 'home_waveshine',
											'shoppingcart', // 购物车
											'login', // 登陆
											'mainitem', // 产品
											'membermodify',
											'memberaddresslist',
											'memberaddressmodify',
											'memberorderlist', 'memberfollow',
											'memberbrowse' ]);
									/*
									 * 加载的模板和样式脚本
									 */
									app.value('views', [ 'foot', 'top', 'head',
											'event', 'itemmenu', 'css' ]);

									ng.bootstrap(document, [ 'app' ]);

								});

					});

		});