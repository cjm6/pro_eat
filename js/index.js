// 轮播图
function slideshow1(){
	var dataUrl="json/slideshow.json"
		$.getJSON(dataUrl,function(data){
			$(".slide-img").empty()
			$.each(data,function(i,item){
				$(".slide-img").append("<img src='image/"+item.img1+"'>")
				$(".slide-img").append("<img src='image/"+item.img2+"'>")
				$(".slide-img").append("<img src='image/"+item.img3+"'>")
				$(".slide-img").append("<img src='image/"+item.img4+"'>")
				$(".slide-img").append("<img src='image/"+item.img5+"'>")
			})
		})
	}
$(function(){
	slideshow1()
})
// 仿头像特效
$(document).ready(function(){
	$("#recommend>div").css("opacity",0.5)
	$("#recommend>div").mouseover(function(){
		$(this).css("opacity",1)
		$(this).siblings("div").css("opacity",0.5)
	})
	$("#recommend>div").mouseout(function(){
		$("#recommend>div").css("opacity",0.5)
	})
})
// 选项卡
$(function(){
	$("#photo>.tab>ul>li").mouseenter(function(){
		$(this).addClass("active")
		$(this).siblings().removeClass("active")
		
		var i=$(this).index()
		$("#photo>.intro>div:eq("+i+")").addClass("select")
		$("#photo>.intro>div:eq("+i+")").siblings("div").removeClass()
	})
})
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