 window.onload = function(){
		    //---文档加载完调用getRem()
		        getRem(1420,100)      
			 /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
			      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
		    };
		    window.onresize = function(){
		    //---窗口或框架被调整大小发生变化
		        getRem(1420,100)
		    };
		    function getRem(pwidth,prem){
		    	//---pwidth---UI图的宽度
		    	//---prem--自己设置的换算比例
		    	//获取html元素
		        var html = document.getElementsByTagName("html")[0];
		        //屏幕的宽度（兼容处理）
		        var ScreenWidth = document.body.clientWidth || document.documentElement.clientWidth;
		        html.style.fontSize = ScreenWidth/pwidth*prem + "px";
		    }