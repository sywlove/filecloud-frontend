$(function (){
                btn.on('click',function(){
                    CheckMail();CheckPwd();CheckYZM();
                    if (CheckMail()&&CheckPwd()&&CheckYZM()) {
                        //读出json
                        var jsonstr1 =window.localStorage.getItem("register");
                        var json = eval('(' + jsonstr1 + ')');
                        if($(".email").val()==json.email&&$(".pwd").val()==json.pwd1){
                            alert("ok");
                            //其他组进行对接-------！
                            //页面进行跳转
						}
                    }
                });
            })