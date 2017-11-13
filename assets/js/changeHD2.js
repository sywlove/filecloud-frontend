$(function (){
    // 修改密码
    var jsonstr2 =window.localStorage.getItem("register");
    var json2 = eval('(' + jsonstr2 + ')');
    console.log(json2.pwd1);
    $('input[id=changepwd]').val(json2.pwd1);
    $("#cgpwd").on("click",function (){
        $('input[id=changepwd]').removeAttr("disabled");
    });
    $("#sure").on("click",function () {
        var pwd1 = $('input[id=changepwd]').val();
        json2.pwd1 = pwd1;
        $("input[id=changepwd]").attr("disabled",true);
        alert("111")
    });


    $("#sub").on("click",function (){
        //读出json
        var jsonstr1 =window.localStorage.getItem("register");
        var json = eval('(' + jsonstr1 + ')');

        var username = $('input[id=username]').val();
        json['username'] = username;

        var phoneNum = $('input[id=phoneNum]').val();
        json['phoneNum'] = phoneNum;


        var birthTime = $("select").find("option:selected").text();
        json['birthTime'] = birthTime;

        var sex =$("input[name=sex]:checked").val();
        json['sex'] = sex;
    });
});