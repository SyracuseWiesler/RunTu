/**
 * Created by Eric on 11/17/2017.
 */
angular.module("modFactory", []).factory("myFactory", ["$http", function($http){
    var banners = ["./img/banner01.jpg", "./img/banner02.jpg"];
    var products = [
        {name: "片状腐植酸钠", url: "./img/products/pzfzsn.jpg", portion: ">70%", organic: "85%", NPK: "3% ~ 5%", elements: "Ca Mg S Cu Zn Mn Mo", size: "25 Kg 编织袋, 也可根据顾客要求订做"},
        {name: "片状腐植酸钾", url: "./img/products/pzfzsj.jpg", portion: ">68%", organic: "85%", NPK: "3% ~ 5%", elements: "Ca Mg S Cu Zn Mn Mo", size: "25 Kg 编织袋, 也可根据顾客要求订做"},
        {name: "精品腐植酸钠颗粒", url: "./img/products/jpfzsnkl.jpg", portion: ">65%", organic: "85%", NPK: "3% ~ 5%", elements: "Ca Mg S Cu Zn Mn Mo", size: "25 Kg 编织袋, 也可根据顾客要求订做"},
        {name: "精品腐植酸钾颗粒", url: "./img/products/jpfzsjkl.jpg", portion: ">65%", organic: "85%", NPK: "3% ~ 5%", elements: "Ca Mg S Cu Zn Mn Mo", size: "25 Kg 编织袋, 也可根据顾客要求订做"},
        {name: "粉状腐植酸原矿", url: "./img/products/fzfzsyk.jpg", portion: ">65%", organic: "85%", NPK: "3% ~ 5%", elements: "Ca Mg S Cu Zn Mn Mo", size: "25 Kg 编织袋, 也可根据顾客要求订做"},
        {name: "腐植酸造粒", url: "./img/products/fzszl.jpg", portion: ">50%", organic: "85%", NPK: "3% ~ 5%", elements: "Ca Mg S Cu Zn Mn Mo", size: "25 Kg 编织袋, 也可根据顾客要求订做"},
    ];
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
    var carousel1Interval = 2000;
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
    var innerShowText = "宁夏润土生物科技有限公司（原石嘴山市顺平化工有限公司）成立于2008年，是一家集科研、开发、生产、" +
        "推广于一体的民营生物科技企业，公司坐落于石嘴山市惠农区国家级经济开发工业园区，距110国道1公里、京藏高速2公里、京兰铁路2公里，" +
        "交通便利地理位置优越。公司占地面积12万平方米，通过近10年的科研、生产及实践，宁夏润土生物科技有限公司已发展成为行业中规模大，" +
        "品种全，品质优的腐植酸钠、腐植酸钾、腐植酸原粉专业生产基地，并可根据客户所需定制生产。公司拥有完整、科学的管理体系，" +
        "拥有专业的营销团队。宁夏润土生物科技有限公司以诚信、实力…";
    function myTime() {
        var d = new Date();
        return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() ;
        // + " "
        // + (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":"
        // + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) +
        // ":" + (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());
    }
    var companyNews = {
        title: "公司新闻",
        titleEng: "companyNews",
        icon: "television",
        showCaseUrl: "./img/news01.jpg",
        showCaseTitle: "腐植酸在农业及工业上的具体应用和贡献",
        showCaseConcise: "腐植酸在农业上的应用已被普遍认可，主要作用有：增进肥效、改良土壤、改善品质、调节作物生长和增强作物的抗逆性等。" +
        "主要产品类型有腐植酸土壤改良类、腐植酸类肥料、腐植酸类农药、腐植酸种苗类等。腐植......",
        list: [
            {title: "腐植酸在农业及工业上的具体应用和贡献", url: "", date: myTime()},
            {title: "腐殖酸简介以及制作方法详解", url: "", date: myTime()},
            {title: "腐植酸对微生物和低等植物的生长有促进作用", url: "", date: myTime()},
            {title: "腐植酸涂层缓释肥在施用中应注意的几个问题", url: "", date: myTime()},
            {title: "腐植酸在修复生态环境中的重要作用", url: "", date: myTime()},
            {title: "生物腐植酸在低碳农业中的地位与作用", url: "", date: myTime()},
        ],
    };
    var industryNews = {
        title: "行业动态",
        titleEng: "industryNews",
        icon: "globe",
        showCaseUrl: "./img/hydt01.jpg",
        showCaseTitle: "腐植酸水溶肥料促进水肥一体化发展",
        showCaseConcise: "在过去的几年里，我国的水肥一体化得到了广大的推广和发展，腐植酸水溶肥料对水肥一体化的发展起到了至关重要的作用。" +
        "随着农业的不断发展，农业集约化经营逐渐显现出其卓越的优点，施肥方式和灌溉方式的......",
        list: [
            {title: "腐植酸水溶肥料促进水肥一体化发展", url: "", date: myTime()},
            {title: "生物液体腐植酸修复铬污染土壤技术获国际领先", url: "", date: myTime()},
            {title: "腐植酸原料为什么要“活化”？", url: "", date: myTime()},
            {title: "近8年，腐植酸低碳农业节节攀高", url: "", date: myTime()},
            {title: "在“化肥与土壤”之间，让腐植酸良性调节好", url: "", date: myTime()},
            {title: "腐植酸肥料春来花开风满楼", url: "", date: myTime()},
            {title: "腐植酸，看“天气”重在补“地气”", url: "", date: myTime()},
        ],
    };
    /**企业风采 图片名称数组*/
    var aboutShow = [];
    for (var i = 0; i < 12; i ++) {
        aboutShow.push("./img/aboutShow/" + i + ".jpg");
    }
    /**myNews.html 初始状态*/
    var atBtn1 = true;
    /**菜单栏初始状态*/
    var menubar = [true, false, false, false, false, false];
    /**产品页面初始选中*/
    var selectedIdx = [0];
    /**关于页面初始状态*/
    var about = [true, false, false, false];
    var aboutBtns = ["公司简介", "企业文化", "资质荣誉", "企业风采"];
    return {
        banners: banners,
        carouselInterval: carouselInterval,
        carousel1Interval: carousel1Interval,
        indicatorStyle: indicatorStyle,
        indicatorProgressBarStyle: indicatorProgressBarStyle,
        homeBlocks: homeBlocks,
        products: products,
        innerShowText: innerShowText,
        atBtn1: atBtn1,
        menubar: menubar,
        selectedIdx: selectedIdx,
        about: about,
        aboutBtns: aboutBtns,
        aboutShow: aboutShow,
        setMenubar: function (idx){
            for (var i = 0; i < menubar.length; i ++) {
                menubar[i] = false;
            }
            menubar[idx] = true;
        },
        stopVideo: function(video){
            for (var i = 0; i < video.length; i ++) {
                video[i].pause();
                video[i].currentTime = 0;
            }
        },
        myTime: myTime,
        companyNews: companyNews,
        industryNews: industryNews,
        sendEmail: function(email){
            return $http({
                method: "POST",
                // url: "/email/" + new Date().getTime(),  // /email/时间戳
                url: "http://localhost:3000/email",
                data: email,  // email object, including {name: "guest", tel: "", email: "", info: ""}
            });
        },
    };
}]);