/**
 * 
 */

actionApp.directive('datePicker',function(){ //自定义指令
    return {
        restrict: 'AC',
        link:function(scope,elem,attrs){
           // scope.treeObj = $.fn.zTree.init(elem, scope.settings);

            elem.datepicker();//选择datepicker()组件
        }
    };
});


