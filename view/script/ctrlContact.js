angular.module("myApp").controller("ctrlContact", ["$scope", "myFactory", "$rootScope", "$timeout", "$route", function($scope, myFactory, $rootScope, $timeout, $route){
    myFactory.setMenubar(5);
    $rootScope.menubar = myFactory.menubar;
    $scope.flag = true;
    $scope.displayAlert = false;
    $scope.clicked = false;
    $scope.submit = function(){
        $scope.clicked = true;
        var email = {
            name: $scope.name,
            email: $scope.email,
            tel: $scope.tel,
            info: $scope.info,
            timestamp: new Date().getTime(),
        };
        myFactory.sendEmail(email).then(function success(res){
            // 显示您的信息已发送成功，我们会尽快与您联系
            console.log(res.data);
            $scope.flag = true;
            $scope.clicked = false;
            $scope.displayAlert = true;
            $scope.name = "";
            $scope.email = "";
            $scope.tel = "";
            $scope.info = "";
            $timeout(function(){
                $scope.displayAlert = false;
                $route.reload();
            }, 3000);
        }, function error(res){
            // 提示未发送成功，请稍后再试
            console.log(res.data);
            $scope.flag = false;
            $scope.clicked = false;
            $scope.displayAlert = true;
            $timeout(function(){
                $scope.displayAlert = false;
            }, 4000);
        });
    };
}]);
