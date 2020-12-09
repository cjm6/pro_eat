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