
if(window.localStorage.getItem("register")){
    var Register =  window.localStorage.getItem("register");
    var SE = JSON.parse(Register).email;
    $("#dLabel").text(SE);
}

//---localStorage
var LFile = window.localStorage.getItem("file");
var Ftype =JSON.parse(LFile).type;
if(Ftype=="video"){
    $("section#video").css("display","block");
    $("section#video div#title1 div:nth-child(2)").children("h4").html(JSON.parse(LFile).name);
    $("section#video div#title1 div:nth-child(4)").children("h4").html(JSON.parse(LFile).upuser);
    $("section#video div#title1 div:nth-child(5)").children("h4").html(JSON.parse(LFile).uptime);
}else if(Ftype=="audio"){
    $("section#music").css("display","block");
    $("section#music div#title2 div:nth-child(2)").children("h4").html(JSON.parse(LFile).name);
    $("section#music div#title2 div:nth-child(4)").children("h4").html(JSON.parse(LFile).upuser);
    $("section#music div#title2 div:nth-child(5)").children("h4").html(JSON.parse(LFile).uptime);
}else if(Ftype=="image" || Ftype=="document" || Ftype=="zip" || Ftype=="other"){
    $("section#picture").css("display","block");
    $("section#picture div#title3 div:nth-child(2)").children("h4").html(JSON.parse(LFile).name);
    $("section#picture div#title3 div:nth-child(4)").children("h4").html(JSON.parse(LFile).upuser);
    $("section#picture div#title3 div:nth-child(5)").children("h4").html(JSON.parse(LFile).uptime);
    if(Ftype=="image"){
        $("section#picture img").attr("src","img/pic1.jpg");
    }else if(Ftype=="zip"){
        $("section#picture img").attr("src","img/zip.jpg");
    }else if(Ftype=="document"){
        $("section#picture img").attr("src","img/txt.png");
    }else if(Ftype=="other"){
        $("section#picture img").attr("src","img/txt.png");
    }
}



//--------音频
var timer = null;
var flag = false;//---暂停状态
$(function(){
    var cover = $('#cover');
    var player = $('#player');
    //动画默认暂停
    cover.style.webkitAnimationPlayState='paused';
    title.style.webkitAnimationPlayState='paused';
    console.log(player.duration);
    $('#slider').slider({
        min:0,
        step:1,
        value:0,
        max:player.duration,
        slide:function(event,ui){
            player.currentTime = ui.value;
        }
    });
});

//---播放
function play(){
    cover.style.webkitAnimationPlayState='';
    player.play();
}
//---暂停
function pause(){
    cover.style.webkitAnimationPlayState='paused';
    player.pause();
}
//---重置
function stop(){
    cover.style.webkitAnimationPlayState='paused';
    player.pause();
    player.currentTime = 0;
}
function Toggle(){
    var btnToggle = document.getElementById('buttonPlayAndPause');
    if(flag===false){
        play();
        btnToggle.style.backgroundImage='url(assets/img/jtbq_013.png)';
        flag=true;
    }else{
        pause();
        btnToggle.style.backgroundImage='url(assets/img/jtbq_014.png)';
        flag=false;
    }
}

