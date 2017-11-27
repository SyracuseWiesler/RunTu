angular.module("myApp").controller("ctrlMyNews", ["$scope", "myFactory", "$location", function($scope, myFactory, $location){
    $scope.atBtn1 = myFactory.atBtn1;
    $scope.isNewsOpened = false;
    $scope.industryNews = myFactory.industryNews;
    $scope.companyNews = myFactory.companyNews;
    $scope.switchNews = function(type){
        if (type === "companyNews" && $scope.atBtn1 || type === "industryNews" && !$scope.atBtn1) {

        } else {
            myFactory.atBtn1 = ! myFactory.atBtn1;
        }
        $scope.atBtn1 = myFactory.atBtn1;
    };
    $scope.switchArticle = function(type, idx){
        $location.url("/news/" + type + "/" + idx);
        if (type === "industryNews") {
            myFactory.atBtn1 = false;
        } else {
            myFactory.atBtn1 = true;
        }
        $scope.atBtn1 = myFactory.atBtn1;
        $scope.isNewsOpened = true;
    };

}]);
