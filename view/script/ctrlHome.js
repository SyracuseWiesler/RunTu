/**
 * Created by Eric on 11/17/2017.
 */
angular.module("myApp").controller("ctrlHome", ["$scope", "myFactory", "$filter", "$rootScope", "$location", function($scope, myFactory, $filter, $rootScope, $location){
    $scope.banners = myFactory.banners;
    $scope.indicatorStyle = myFactory.indicatorStyle;
    $scope.homeBlocks = myFactory.homeBlocks;
    $scope.blockShows = [false, false, false];
    $scope.blockShowsOpened = false;
    $scope.products = myFactory.products;
    $scope.innerShowText = myFactory.innerShowText;
    $scope.industryNews = myFactory.industryNews;
    $scope.companyNews = myFactory.companyNews;
    // for (var i = 0; i < myFactory.menubar.length; i ++) {
    //     myFactory.menubar[i] = false;
    // }
    // myFactory.menubar[0] = true;
    // angular.element(document).find("header").find(".nav.navbar-nav").children("li").removeClass("active");
    // angular.element(document).find("header").find(".nav.navbar-nav").children("li").eq(0).addClass("active");
    myFactory.setMenubar(0);
    $rootScope.menubar = myFactory.menubar;
    $scope.clickItem = function(idx){
        // $rootScope.productsIdx = idx;
        $location.url("/products");
        // $rootScope.$emit("clickItem", [idx]);
    };
    $rootScope.aboutClick = function(idx){
        for (var i = 0; i < myFactory.about.length; i ++) {
            myFactory.about[i] = false;
        }
        myFactory.about[idx] = true;
        $location.url("/about");
    };
    $rootScope.year = new Date().getFullYear();
    // $rootScope.productsIdx = -1;

}]);