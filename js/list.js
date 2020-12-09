// 放大镜效果
$(function(){
	$("#list1>ul>li>img").hover(function(){
		$(this).css("transform","scale(1.2)")
	},function(){
		$(this).css("transform","scale(1)")
	})
})
// 图册选项卡
$(function(){
	$("#list2>.li-left>li").mouseenter(function(){
		$(this).siblings().removeClass()
		
		var i=$(this).index()
		$("#list2>.li-right>div:eq("+i+")").addClass("select")
		$("#list2>.li-right>div:eq("+i+")").siblings("div").removeClass()
	})
})
// 回到顶部
$(function(){
	$("#to-top>.top>a").bind({
		"mouseenter":function(){
			$(this).animate({
				"background-position-x":"0px"
			},200)
		},
		"mouseleave":function(){
			$("#to-top>.top>a").stop(true, true)
			$(this).animate({
				"background-position-x":"-80px"
			},200)
		}
	})
	$(window).bind("scroll",function(){
		var backtop=$(document).scrollTop()
		if(backtop>=800){
			$("#to-top>.top>a:first").fadeIn(200)
		}else{
			$("#to-top>.top>a:first").fadeOut(200)
		}
	})
	$("#to-top>.top>a:first").bind("click",function(){
		$("body").animate({
			"scrollTop":"0px"
		})
	})
})