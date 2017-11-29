angular.module("myApp").controller("ctrlAbout", ["$scope", "myFactory", "$rootScope", function($scope, myFactory, $rootScope){
    myFactory.setMenubar(4);
    $rootScope.menubar = myFactory.menubar;
    $scope.aboutBtns = myFactory.aboutBtns;
    $scope.about = myFactory.about;
    $scope.toggleAbout = function(idx){
        for (var i = 0; i < myFactory.about.length; i ++) {
            myFactory.about[i] = false;
        }
        myFactory.about[idx] = true;
        $scope.about = myFactory.about;
    };
    $scope.aboutShow = myFactory.aboutShow;
}]);
