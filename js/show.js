if(window.localStorage.getItem('Type')){
    var Stype =window.localStorage.getItem('Type');
    var SType=JSON.parse(Stype).type;
    if(SType==="video"){
        $(".nav-tabs li:nth-child(1)").addClass("active");
        $(".nav-tabs li:nth-child(1)").siblings().removeClass("active");
        $(".page-header").html("视频");
        window.localStorage.removeItem('Type');
    }else if(SType==="audio"){
        $(".nav-tabs li:nth-child(2)").addClass("active");
        $(".nav-tabs li:nth-child(2)").siblings().removeClass("active");
        $(".page-header").html("音频");
        window.localStorage.removeItem('Type');
    }else if(SType==="image"){
        $(".nav-tabs li:nth-child(3)").addClass("active");
        $(".nav-tabs li:nth-child(3)").siblings().removeClass("active");
        $(".page-header").html("图片");
        window.localStorage.removeItem('Type');
    }else if(SType==="document"){
        $(".nav-tabs li:nth-child(4)").addClass("active");
        $(".nav-tabs li:nth-child(4)").siblings().removeClass("active");
        $(".page-header").html("文章");
        window.localStorage.removeItem('Type');
    }

}



$(".nav-tabs").children("li:eq(0)").click(function () {
    $(".page-header").html("视频");
});
$(".nav-tabs").children("li:eq(1)").click(function () {
    $(".page-header").html("音频");
});
$(".nav-tabs").children("li:eq(2)").click(function () {
    $(".page-header").html("图片");
});
$(".nav-tabs").children("li:eq(3)").click(function () {
    $(".page-header").html("文件");
});
$(".nav-tabs").children("li:eq(4)").click(function () {
    $(".page-header").html("压缩包");
});
$(".nav-tabs").children("li:eq(5)").click(function () {
    $(".page-header").html("其他");
});
$(".tab-pane tbody tr").mouseenter(function () {
    $(this).css({
        boxShadow: "0px 2px 2px grey",
        background: "#e2e2e2"
    })
});
$(".tab-pane tbody tr").mouseleave(function () {
    $(this).css({
        boxShadow: "none",
        background: "white",
        color: "black"
    })
});

$(".tab-pane tbody tr").hover(function () {
    $(this).children("td").children("img").toggleClass("max");
});



$("tbody tr").on("click",function () {
    var fileName = $(this).children("td:eq(0)").children("a").html();
    // console.log(fileName);
    $.getJSON("json/file.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].name == fileName) {
                window.localStorage.setItem('file', JSON.stringify(data[i]));
                $(location).attr("href", "details.html");
            }
        }
    });
});