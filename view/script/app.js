/**
 * Created by Eric on 11/17/2017.
 */
angular.module("myApp", ["ngRoute", "ngAnimate", "modFactory"]).config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "home.html",
        controller: "ctrlHome"
    });
})
    .directive("pageHeightWatch", function(){
        return {
            restrict: "A",
            scope: false,
            link: function(scope, element, attrs){
                var clientHeight = angular.element(document).find("html")[0].clientHeight;
                var actualHeight = angular.element(document).find("body")[0].clientHeight;
                var headerHeight = angular.element(document).find("header")[0].clientHeight;
                var footerHeight = angular.element(document).find("footer")[0].clientHeight;
                scope.heightDiff = clientHeight - headerHeight - footerHeight;
                scope.$watch("heightDiff", function(newVal){
                    if (newVal >= 0) element.css({"min-height": scope.heightDiff + "px"});
                });
            }
        };
    })
    // .directive("verticalCenter", function(){
    //     return {
    //         restrict: "A",
    //         scope: false,
    //         link: function(scope, element, attrs){
    //             // scope.height1 = element.parent().height();
    //             // element.height(scope.height1);
    //             // element.children("div").eq(0).height(scope.height1);
    //             // element.children("div").eq(0).css({"line-height": scope.height1 + "px"});
    //             var height = element.parent().height();
    //             console.log(height);
    //             element.height(height);
    //             element.children("div").eq(0).height(height);
    //             element.children("div").eq(0).css({"line-height": height + "px"});
    //         },
    //     };
    // })
    .directive("carouselPlay", ["myFactory", function(myFactory){
        return {
            restrict: "A",
            scope: false,
            link: function(scope, element, attrs){
                element.carousel({
                    interval: myFactory.carouselInterval,
                    pause: false,
                });
            }
        };
    }])
    .directive("carouselIndicatorProgress", ["myFactory", "$interval", function(myFactory, $interval){
        return {
            restrict: "A",
            scope: false,
            link: function(scope, element, attrs){
                element.height(myFactory.indicatorProgressBarStyle.height);
                var current;
                scope.$watch(function(){
                    return element.parent().hasClass("active");
                }, function(newVal){
                    var parentWidth = 45;
                    // var parentWidth = element.parent().width();
                    if (newVal) {
                        var interval = myFactory.carouselInterval;  // 3000 毫秒完成
                        var val = parentWidth / (interval / 100);  // 每100毫秒进度
                        var width = 0;
                        // element[0].style.width = width + "px";
                        // element[0].style.background = myFactory.indicatorProgressBarStyle.background;
                        element.css({
                            width: width + "px",
                            background: myFactory.indicatorProgressBarStyle.background,
                        });
                        current = $interval(function(){
                            width += val;
                            element.css("width", width + "px");
                            if (Math.ceil(width) >= parentWidth) {
                                $interval.cancel(current);
                            }
                        }, 100);
                    } else {
                        $interval.cancel(current);
                        element.css({
                            background: "transparent",
                            width: 0,
                        });
                    }
                });
            },
        };
    }])
    .directive("webHeader", function(){
        return {
            restrict: "AEC",
            templateUrl: "header.html"
        };
    })
    .directive("webFooter", function(){
        return {
            restrict: "AEC",
            templateUrl: "footer.html",
        };
    });