
 $(function(){

//---------header-------
//---------搜索框--------------
    $("#nav-right .search .input input").focus(function(){
        $("#nav-right .search .search-default").css("display","none");
    });
    $("#nav-right .search .input input").blur(function(){
        $("#nav-right .search .search-default").css("display","block");
    });

//----------轮播图------------
    //代码初始化
    var length = $(".banner-ad .img li").length;
    for(var j = 0;j < length;j++){
        $(".banner-ad .num").append("<li>"+(j+1)+"</li>");
    }
    $(".banner-ad .num li").first().addClass("active");
    $(".banner-ad .img li").first().show();

    //手动控制轮播
    $(".banner-ad .num li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        i = index; 
        $(".banner-ad .img li").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);    //防止鼠标在按钮上快速切换时出现停不下来的bug
    });

    //自动轮播
    var i = 0;
    var t = setInterval(move,5000);

    //左边按钮点击事件
    $(".banner-ad .prev").click(function(){
        moveL();
    });
    //右边按钮点击事件
    $(".banner-ad .next").click(function(){
        move();
    });

    //向左运动函数
    function moveL(){
        i--;
        if(i<0){
            i = length-1;
        }
        $(".banner-ad .num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".banner-ad .img li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }

    //向右运动函数
    function move(){
        i++;
        var length = $(".banner-ad .img li").length;
        if(i==length){
            i = 0;
        }
        $(".banner-ad .num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".banner-ad .img li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }

    //定时器
    $(".banner-ad").hover(function(){
        clearInterval(t);
        },function(){
        t = setInterval(move,5000); //此处变量t不能丢掉，丢掉的话相当于又打开一个新的定时器
    });

//------------banner-bar===左侧选项条------------
    $(".banner-bar div").mouseenter(function(){
        var index = $(this).index();
        $(".banner-items>div").eq(index).show().siblings().hide();
        $(this).css("background-color","rgba(0,0,0,0.4)").siblings().css("background-color","");
    });
    $(".banner-bar div").mouseleave(function(){
        $(this).css("background-color","");
    });

//------------gototop===返回顶部部分---------------
    $("#gototop .app-download").mouseenter(function(){
        $("#gototop .mooc-app").stop().show(200);
    });
    $("#gototop .app-download").mouseleave(function(){
        $("#gototop .mooc-app").stop().hide(200);
    });

    $("#gototop .official-weixin").mouseenter(function(){
        $("#gototop .mooc-weixin").stop().show(200);
    });
    $("#gototop .official-weixin").mouseleave(function(){
        $("#gototop .mooc-weixin").stop().hide(200);
    });
//------------返回顶部按钮----------------------
    if($(window).scrollTop()>$(window).height()){
        $(".back-top").css("display","block");
    }
    $(window).scroll(function(){
        if($(window).scrollTop()>$(window).height()){
            $(".back-top").css("display","block");
        }
        else{
            $(".back-top").css("display","none");
        }
    });
    $(".back-top").click(function (){
        $("body,html").animate({scrollTop:0}, 200);
        return false;
    });

});
