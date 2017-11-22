/**
 * Created by Eric on 11/17/2017.
 */
angular.module("myApp").controller("ctrlHome", ["$scope", "myFactory", "$filter", function($scope, myFactory, $filter){
    $scope.banners = myFactory.banners;
    $scope.indicatorStyle = myFactory.indicatorStyle;
    $scope.homeBlocks = myFactory.homeBlocks;
    $scope.blockShows = [false, false, false];
    $scope.blockShowsOpened = false;
    $scope.products = myFactory.products;
    $scope.innerShowText = myFactory.innerShowText;
}]);