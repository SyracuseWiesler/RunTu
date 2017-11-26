angular.module("myApp").controller("ctrlMyNews", ["$scope", "myFactory", function($scope, myFactory){
    $scope.atBtn1 = true;
    $scope.isNewsOpened = false;
    $scope.industryNews = myFactory.industryNews;
    $scope.companyNews = myFactory.companyNews;
}]);
