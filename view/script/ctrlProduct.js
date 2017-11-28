angular.module("myApp").controller("ctrlProduct", ["$scope", "$rootScope", "myFactory", function($scope, $rootScope, myFactory){
    myFactory.setMenubar(2);
    $rootScope.menubar = myFactory.menubar;
    $scope.products = myFactory.products;
    $scope.selectedIdx = 0;
    $scope.$watch("selectedIdx", function(newVal){
        $scope.theItem = $scope.products[newVal];
    });
    $scope.select = function(idx){
        $scope.selectedIdx = idx;
    };
    $scope.isShowAreaOpened = false;
    // $rootScope.$watch("productsIdx", function(newVal){
    //     angular.element(document).ready(function(){
    //         console.log($rootScope.productsIdx);
    //         angular.element(document).find(".productsItem").children("div").eq(newVal).click();
    //         $rootScope.productsIdx = undefined;
    //     });
    // });
}]);