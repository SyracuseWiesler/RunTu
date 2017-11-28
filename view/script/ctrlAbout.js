angular.module("myApp").controller("ctrlAbout", ["$scope", "myFactory", "$rootScope", function($scope, myFactory, $rootScope){
    myFactory.setMenubar(4);
    $rootScope.menubar = myFactory.menubar;

}]);
