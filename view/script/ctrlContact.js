angular.module("myApp").controller("ctrlContact", ["$scope", "myFactory", "$rootScope", function($scope, myFactory, $rootScope){
    myFactory.setMenubar(5);
    $rootScope.menubar = myFactory.menubar;

}]);
