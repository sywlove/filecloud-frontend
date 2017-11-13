 $(function () {
           $("#btn").on("click",function (){
               var newArr1 = {};
               var email = $('input[class=email]').val();
               newArr1.email = email;

               var pwd1 = $('input[class=pwd1]').val();
               newArr1.pwd1 = pwd1;

               var Jsonstr1 = JSON.stringify(newArr1);

               // 存储json字符串
               window.localStorage.setItem("register",Jsonstr1);

      })
       })