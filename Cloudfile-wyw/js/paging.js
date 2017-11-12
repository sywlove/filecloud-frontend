$(function () {
    $(".photo button:eq(0)").on("click",function () {
        $("#smImg div:eq(0)").slideDown().siblings().slideUp();
    })
    $(".photo button:eq(1)").on("click",function () {
        $("#smImg div:eq(1)").slideDown().siblings().slideUp();
    })
})