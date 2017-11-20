/**
 * Created by Eric on 11/17/2017.
 */
angular.module("modFactory", []).factory("myFactory", function(){
    var banners = ["./img/banner01.jpg", "./img/banner02.jpg"];
    var indicatorStyle = {
        display: 'inline-block',
        height: '9px',
        width: '40px',
        border: '1px solid white',
        margin: '0 5px',
        background: "none"
    };
    var indicatorProgressBarStyle = {
        background: 'white',
        height: parseInt(indicatorStyle.height) - 2 + "px",  // 数字开头的字符串是可以parseInt转换的，只取到数字部分，不会NaN
    };
    var carouselInterval = 4000;  // 轮播器换图间隔(毫秒)
    return {
        banners: banners,
        carouselInterval: carouselInterval,
        indicatorStyle: indicatorStyle,
        indicatorProgressBarStyle: indicatorProgressBarStyle,

    };
});