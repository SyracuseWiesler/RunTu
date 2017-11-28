/**
 * Created by Eric on 11/17/2017.
 */
angular.module("myApp", ["ngRoute", "ngAnimate", "modFactory"]).config(["$routeProvider", function($routeProvider){
    var companyNews = [0, 1, 2, 3, 4, 5];
    var industryNews = [0, 1, 2, 3, 4, 5, 6];
    $routeProvider.when("/", {
        templateUrl: "home.html",
        controller: "ctrlHome"
    }).when("/news", {
        templateUrl: "myNews.html",
        controller: "ctrlMyNews",
    });
    industryNews.forEach(function(val){
        $routeProvider.when("/news/industryNews/" + val, {
            templateUrl: "./articles/industryNews" + val + ".html",
            controller: "ctrlMyNewsArticles",
        });
    });
    companyNews.forEach(function(val){
        $routeProvider.when("/news/companyNews/" + val, {
            templateUrl: "./articles/companyNews" + val + ".html",
            controller: "ctrlMyNewsArticles",
        });
    });
    $routeProvider.when("/products", {
        templateUrl: "products.html",
        controller: "ctrlProduct",
    }).when("/video", {
        templateUrl: "video.html",
        controller: "ctrlVideo",
    }).when("/about", {
        templateUrl: "about.html",
        controller: "ctrlAbout",
    }).when("/contact", {
        templateUrl: "contact.html",
        controller: "ctrlContact",
    }).otherwise({
        redirectTo: "/",
    });
}])
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
    .directive("carouselPlay1", ["myFactory", function(myFactory){
        return {
            restrict: "A",
            scope: false,
            link: function(scope, element, attrs){
                element.carousel({
                    interval: myFactory.carousel1Interval,
                    pause: "hover",
                });
                element.find(".left").click(function(){
                    element.carousel("prev");
                });
                element.find(".right").click(function(){
                    element.carousel("next");
                });
            },
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
            replace: true,
            templateUrl: "header.html",
        };
    })
    .directive("webFooter", function(){
        return {
            restrict: "AEC",
            replace: true,
            templateUrl: "footer.html",
        };
    })
    .directive("innerBlock", function(){
        return {
            restrict: "AEC",
            replace: true,
            templateUrl: "innerBlock.html",
            scope: {
                type: "@",
                title1: "@",
                description: "@",
            },
        }
    })
    .directive("displayCarousel", function(){
        return {
            restrict: "AEC",
            replace: true,
            templateUrl: "displayCarousel.html"
        };
    })
    .directive("blockClick", ["myFactory", function(myFactory){
        return {
            restrict: "A",
            scope: false,
            link: function(scope, element, attrs){
                element.on("click", function(){
                    var i, x;
                    var innerShow = angular.element(document).find(".inner-show");
                    var show1 = angular.element(document).find(".show1");
                    var video = angular.element(document).find("video");
                    switch(attrs.blockClick) {
                        case "left":
                            x = 0;
                            break;
                        case "center":
                            x = 1;
                            break;
                        case "right":
                            x = 2;
                            break;
                    }
                    if (! scope.blockShowsOpened) {  // 如果展示区域还未打开
                        if (x === 0) {
                            angular.element(document).find("#myCarousel1").carousel(0);
                        }
                        innerShow.css("display", "none");
                        scope.blockShows[x] = true;
                        innerShow.eq(x).fadeIn(600);
                        show1.slideDown(600);
                        scope.blockShowsOpened = true;
                        element.addClass("active");
                        angular.element(document).find(".inner-show")[x].scrollIntoView(true);
                    } else {  // 如果展示区域已经打开
                        if (scope.blockShows[x]) {  // 如果当前点击的，已经被打开了
                            if (x === 1) {  // 如果是点击的关闭视频
                                myFactory.stopVideo(video);
                            }
                            innerShow.eq(x).fadeOut(600);
                            show1.slideUp(600);
                            scope.blockShowsOpened = false;
                            for (i = 0; i < scope.blockShows.length; i ++) {
                                scope.blockShows[i] = false;
                            }
                            angular.element(document).find(".display-inner").removeClass("active");
                        } else {  // 如果当前点击的没有被打开
                            myFactory.stopVideo(video);
                            if (x === 0) {
                                angular.element(document).find("#myCarousel1").carousel(0);
                            }
                            for (i = 0; i < scope.blockShows.length; i ++) {
                                scope.blockShows[i] = false;
                                innerShow.eq(i).hide();
                            }
                            innerShow.eq(x).fadeIn(600);
                            scope.blockShows[x] = true;
                            angular.element(document).find(".display-inner").removeClass("active");
                            element.addClass("active");
                            angular.element(document).find(".inner-show")[x].scrollIntoView(true);
                        }
                    }
                });
            },
        };
    }])
    .directive("news", function(){
        return {
            restrict: "E",
            // replace: true,
            scope: {
                title: "@articleTitle",
                titleEng: "@",
                icon: "@",
                showCaseTitle: "@",
                showCaseUrl: "@",
                showCaseConcise: "@",
                list: "=",
            },
            templateUrl: "news.html",
        };
    })
    .directive("myNewsHeader", function(){
        return {
            restrict: "E",
            replace: true,
            scope: false,
            templateUrl: "myNewsHeader.html",
        };
    })
    .directive("myArticle", function(){
        return {
            restrict: "AEC",
            scope: false,
            transclude: true,
            templateUrl: "myArticle.html"
        }
    })
    .directive("scrollHere", function(){
        return {
            restrict: "A",
            scope: false,
            link: function(scope, element, attrs){
                angular.element(document).ready(function(){
                    element[0].scrollIntoView();
                });
            },
        };
    })
    .directive("itemClick", ["myFactory", "$rootScope", function(myFactory, $rootScope){
        return {
            restrict: "A",
            scope: false,
            link: function(scope, element, attrs){
                element.on("click", function(){
                    var idx = parseInt(attrs.itemClick);
                    if (idx !== scope.selectedIdx || ! scope.isShowAreaOpened) {
                        scope.isShowAreaOpened = true;
                        angular.element(document).find(".productsItem").find("p").removeClass("active");
                        element.find("p").addClass("active");
                        angular.element(document).find(".productsShow").slideDown();
                        angular.element(document).find(".productsShow")[0].scrollIntoView();
                        scope.select(idx);
                        scope.$apply();
                    } else {
                        scope.isShowAreaOpened = false;
                        angular.element(document).find(".productsItem").find("p").removeClass("active");
                        angular.element(document).find(".productsShow").slideUp();
                    }
                });
            },
        };
    }])
    .directive("aboutHeader", function(){
        return {
            restrict: "AEC",
            replace: true,
            templateUrl: "aboutHeader.html",
        };
    })
    .directive("aboutArticle", function(){
        return {
            restrict: "AEC",
            replace: true,
            templateUrl: "./articles/aboutArticle.html",
        };
    })
    .directive("showCover", function(){
        return {
            restrict: "A",
            scope: false,
            link: function(scope, element, attrs){
                var coverStyle = {
                    display: "block",
                    position: "absolute",
                    background: "rgba(0, 0, 0, 0.5)",
                    top: angular.element(document).find("header").height() + "px",
                    left: "5%",
                    width: "90%",
                    height: angular.element(document).find("html").find("body").height() - angular.element(document).find("html").find("header").height() - angular.element(document).find("html").find("footer").height() + "px",
                };
                element.on("click", function(){
                    if (angular.element(document).find("html").width() >= 992) {
                        angular.element(document).find(".cover").css(coverStyle);
                        angular.element(document).find(".cover").children("img").src = attrs.showCover === "license" ? "./img/license.jpg" : "./img/permit.jpg";
                    }
                });
            },
        };
    })

;