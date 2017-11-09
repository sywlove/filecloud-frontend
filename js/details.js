var timer = null;
var flag = false;//---暂停状态
$(function(){
    var cover = $('#cover');
    var title = $('#title');
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
    title.style.webkitAnimationPlayState='';
    player.play();
    //---同步滑块
    timer = setInterval(function(){
        var value = player.currentTime;
        $('#slider').slider('option','value',value);
    },500);
}
//---暂停
function pause(){
    cover.style.webkitAnimationPlayState='paused';
    title.style.webkitAnimationPlayState='paused';
    player.pause();
    clearInterval(timer);
}
//---重置
function stop(){
    cover.style.webkitAnimationPlayState='paused';
    title.style.webkitAnimationPlayState='paused';
    player.pause();
    clearInterval(timer);
    player.currentTime = 0;
    $('#slider').slider('option','value',0);
}
function Toggle(){
    var btnToggle = document.getElementById('buttonPlayAndPause');
    if(flag===false){
        play();
        btnToggle.style.backgroundImage='url(img/jtbq_013.png)';
        flag=true;
    }else{
        pause();
        btnToggle.style.backgroundImage='url(img/jtbq_014.png)';
        flag=false;
    }
}