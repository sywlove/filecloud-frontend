$(window).scroll(function () {
    var docScrollTop = $(document).scrollTop();
    if (docScrollTop > 0) {
        $(".til").css({
            "background": "#fdfdfd"
        });
        $(".til img").attr("src", "img/cloud_.png");
        $(".til span").css({
            "color": "#8a8a8a"
        });
        $(".til a").css({
            "color": "#8a8a8a"
        });
        $(".nav li a").on("mouseleave", function () {
            $(this).css({
                "color": "#8a8a8a"
            });
        });
    } else {
        $(".til").css({
            "background": "transparent"
        });
        $(".til img").attr("src", "img/cloud.png");
        $(".til span").css({
            "color": "#fff"
        });
        $(".til a").css({
            "color": "#fff"
        });
        $(".nav li a").on("mouseenter", function () {
            $(this).css({
                "color": " #8a8a8a"
            });
        });
        $(".nav li a").on("mouseleave", function () {
            $(this).css({
                "color": " #fff"
            });
        });

    }
});
$(".file ul li").on("click", function () {
    var fileName = $(this).children("p").children("span").html();
    $.getJSON("json/file.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].name == fileName) {
                window.localStorage.setItem('file', JSON.stringify(data[i]));
                $(location).attr("href", "details.html");
            }
        }
    });
});
$(".hot ul li").on("click",function () {
   var fileName = $(this).children("a").children("p").children("span:eq(1)").html();
    $.getJSON("json/file.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].name == fileName) {
                window.localStorage.setItem('file', JSON.stringify(data[i]));
                $(location).attr("href", "details.html");
            }
        }
    });
});
$(".more").on("click",function () {
    var Type = $(this).attr("name");
    var obj={
        "type":Type
    };
    window.localStorage.setItem('Type', JSON.stringify(obj));
    $(location).attr("href", "show.html");
});