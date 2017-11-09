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
        background: "#f8f8f8"
    })
});
$(".tab-pane tbody tr").mouseleave(function () {
    $(this).css({
        boxShadow: "none",
        background: "white",
        color: "black"
    })
});

/* $("table img").hover(function () {
 $(this).toggleClass("max");
 });*/
$(".tab-pane tbody tr").hover(function () {
    $(this).children("td").children("img").toggleClass("max");
});
