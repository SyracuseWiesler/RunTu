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
        background: 'orange',
        height: parseInt(indicatorStyle.height) - 2 + "px",  // 数字开头的字符串是可以parseInt转换的，只取到数字部分，不会NaN
    };
    var carouselInterval = 4000;  // 轮播器换图间隔(毫秒)
    var homeBlocks = {
        left: {
            type: "flask",
            title1: "我们的产品",
            description: "通过近10年的科研、生产及实践，宁夏润土生物科技有限公司已发展成为行业中规模大，" +
            "品种全，品质优的腐植酸钠、腐植酸钾、腐植酸原粉专业生产基地，并可根据客户所需定制生产",
        },
        center: {
            type: "home",
            title1: "生产车间",
            description: "公司占地面积12万平方米, 拥有完整、科学的管理体系，拥有专业的营销团队并以诚信、实力和产品优良获得了同业界的认可",
        },
        right: {
            type: "newspaper-o",
            title1: "关于我们",
            description: "宁夏润土生物科技有限公司（原石嘴山市顺平化工有限公司）成立于2008年，是一家集科研、开发、生产、" +
            "推广于一体的民营生物科技企业，公司坐落于石嘴山市惠农区国家级经济开发工业园区",
        }
    };
    return {
        banners: banners,
        carouselInterval: carouselInterval,
        indicatorStyle: indicatorStyle,
        indicatorProgressBarStyle: indicatorProgressBarStyle,
        homeBlocks: homeBlocks,
        stopVideo: function(video){
            for (var i = 0; i < video.length; i ++) {
                video[i].pause();
                video[i].currentTime = 0;
            }
        },

    };
});