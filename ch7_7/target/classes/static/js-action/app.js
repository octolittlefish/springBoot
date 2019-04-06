/**
 * 
 */

var actionApp = angular.module('actionApp',['ngRoute']);// 定义模块actionApp 依赖于ngRoute




actionApp.config(['$routeProvider' , function($routeProvider) { // 配置路由 并注入$routeProvider来配置
	
	$routeProvider.when('/oper', { // 路由名称
		controller: 'View1Controller',  // 控制器  controllers.js中定义
		templateUrl: 'views/view1.html', // view
	}).when('/directive', {
		controller: 'View2Controller',
		templateUrl: 'views/view2.html',
	});

}]);
