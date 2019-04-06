/**
 * 
 */
// 定义控制器 View1Controller
actionApp.controller('View1Controller', ['$rootScope', '$scope', '$http', function($rootScope, $scope,$http) {
    $scope.$on('$viewContentLoaded', function() {// 监听$viewContentLoaded，页面加载完后执行方法
    	console.log('页面加载完成');
    });
    
    
    $scope.search = function(){
      personName = $scope.personName;
      $http.get('search',{//get方式请求search路径 参数为personName
    	  params:{personName:personName}
      }).success(function(data){
    	 $scope.person=data;//返回数据 $scope.person可用{{person.name}}访问
      });
     
    };
}]);

//页面二控制器
actionApp.controller('View2Controller', ['$rootScope', '$scope',  function($rootScope, $scope) {
    $scope.$on('$viewContentLoaded', function() {
    	console.log('页面加载完成');
    });
}]);

actionApp.directive('datePicker',function(){
    return {
        restrict: 'AC',
        link:function(scope,elem,attrs){
            // scope.treeObj = $.fn.zTree.init(elem, scope.settings);

            elem.datepicker();//选择datepicker()组件
        }
    };
});


