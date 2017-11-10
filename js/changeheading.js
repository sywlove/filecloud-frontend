 $(function (){
             $(".modal-body img").on("click",function (){
                 $(this).css({
                     opacity: "1"
                 });
                 $(this).siblings().css({
                     opacity: "0.3"
                 });
                 var newSrc = $(this).attr("src");
                 $(".box img").attr("src",newSrc);
                 setCookie("src",$("#img1").attr("src"),5);
             });
             $("#changeHD").on("click",function (){
                 $(".modal").modal('hide');
//                 $(".modal").css({
//                     display:"none"
//                 });
//                 $(".modal-backdrop").hide().removeClass("in");
//                 $(".modal-backdrop").css({
//                     display:"none"
//                 });
             });

             if(getCookie("src")){
                 $(".box img").attr("src",getCookie("src"));
             }


             function setCookie(key,value,time){
                 var oDate = new Date();
                 oDate.setDate(oDate.getDate()+time);
                 document.cookie=key+"="+encodeURI(value)+";expires="+oDate.toGMTString();
             }
//              获得cookie
             function getCookie(key){
                 var arr1 = document.cookie.split("; ");
                 for(var i=0;i<arr1.length;i++){
                     var arr2 = arr1[i].split("=");
                     if(arr2[0]==key){
                         return decodeURI(arr2[1]);
                     }
                 }
             }
         })