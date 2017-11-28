angular.module("myApp").controller("ctrlVideo", ["$scope", "$rootScope", "myFactory", function($scope, $rootScope, myFactory){
    myFactory.setMenubar(3);
    $rootScope.menubar = myFactory.menubar;

}]);
