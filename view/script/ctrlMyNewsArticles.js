/**
 * Created by Eric on 11/26/2017.
 */
angular.module("myApp").controller("ctrlMyNewsArticles", ["$scope", "$location", "myFactory", function($scope, $location, myFactory){
    $scope.$parent.isNewsOpened = true;
    var params = $location.url().split("/");
    var type = params[params.length - 2];
    if (type === "industryNews") {
        myFactory.atBtn1 = false;
    } else {
        myFactory.atBtn1 = true;
    }
    $scope.$parent.atBtn1 = myFactory.atBtn1;
    $scope.switchNews = function(type){
        if (type === "companyNews" && $scope.atBtn1 || type === "industryNews" && !$scope.atBtn1) {

        } else {
            myFactory.atBtn1 = ! myFactory.atBtn1;
        }
        $scope.atBtn1 = myFactory.atBtn1;
    };
    $scope.myTime = myFactory.myTime;


}]);