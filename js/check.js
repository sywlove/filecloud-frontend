var email = $('.email');
var pwd = $('.pwd1');
var tip1 = $('p:eq(0)');
var tip2 = $('p:eq(1)');
var btn = $('.btn');
var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','' +
        'p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        
        
var code1 = "";
for(var i=0;i<6;i++){//生成验证码
    var num1 = Math.floor(Math.random()*codeChars.length);
    code1 += codeChars[num1];
}
$(".yzm1").html(code1);
function YZM(){
	var code = "";
    $("#Tip").html("");
    $(".yzm1").html("");
    $("#Tip").css({
        display:"none"
    });
    var codeLength = 6;
    for(var i=0;i<codeLength;i++){
        var num = Math.floor(Math.random()*codeChars.length);
        code += codeChars[num];
    }
    $(".yzm1").html(code);
}

$(".change").on("click",YZM);
     		
     		
     		
	function CheckMail(){
		var flag1=false;
		if(email.val()==''){
			tip1.html('邮箱不能为空');
			tip1.css({display:'block'});
			email.on('keydown',function(){
				tip1.html('');
				tip2.html('');
				$("#Tip").html("");
			});
		}else{
			var flag1=true;
			return flag1;
		}
	}
     		
	function CheckPwd(){
		var flag2=false;
		if(pwd.val()==''){
			tip2.html('密码不能为空');
			tip2.css({display:'block'});
			pwd.on('keydown',function(){
				tip1.html('');
				tip2.html('');
				$("#Tip").html("");
			})	
		}else{
			var flag2=true;
			return flag2;
		}
	}
     		
	function CheckYZM(){
		var flag=$(".yzm").val().toLowerCase()==$(".yzm1").html().toLowerCase();
		
		if(flag){
			return flag;
		}else{
            $("#Tip").html("验证码错误");
			$("#Tip").css({ display:"block" });
			$(".yzm").on('keydown',function(){
				$("#Tip").html("");
			});	
		}
	}
     		
