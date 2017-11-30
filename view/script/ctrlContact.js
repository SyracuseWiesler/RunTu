angular.module("myApp").controller("ctrlContact", ["$scope", "myFactory", "$rootScope", "$timeout", function($scope, myFactory, $rootScope, $timeout){
    myFactory.setMenubar(5);
    $rootScope.menubar = myFactory.menubar;
    $scope.flag = true;
    $scope.displayAlert = false;
    $scope.submit = function(){
        var email = {
            name: $scope.name,
            email: $scope.email,
            tel: $scope.tel,
            info: $scope.info,
        };
        myFactory.sendEmail(email).then(function success(res){
            // 显示您的信息已发送成功，我们会尽快与您联系
            console.log(res.data);
            $scope.flag = true;
            $scope.displayAlert = true;
            $timeout(function(){
                $scope.displayAlert = false;
            }, 2000);
        }, function error(res){
            // 提示未发送成功，请稍后再试
            console.log(res.data);
            $scope.flag = false;
            $scope.displayAlert = true;
            $timeout(function(){
                $scope.displayAlert = false;
            }, 2000);
        });
    };
}]);
