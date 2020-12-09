// json数据
function int1(){
	var dataUrl="json/int-word.json"
		$.getJSON(dataUrl,function(data){
			$(".int-word").empty()
			$.each(data,function(i,item){
				$(".int-word").append("<li>"+item.int1+"</li>")
			})
		})
	}
$(function(){
	int1()
})
function rules1(){
	var dataUrl="json/rules1.json"
	$.getJSON(dataUrl,function(data){
		$(".ru1").empty()
		$.each(data,function(i,item){
			$(".ru1").append("<li>"+item.ru11+"</li>")
			$(".ru1").append("<li>"+item.ru12+"</li>")
			$(".ru1").append("<li>"+item.ru13+"</li>")
			$(".ru1").append("<li>"+item.ru14+"</li>")
		})
	})
}
$(function(){
	rules1()
})
function rules2(){
	var dataUrl="json/rules2.json"
	$.getJSON(dataUrl,function(data){
		$(".ru2").empty()
		$.each(data,function(i,item){
			$(".ru2").append("<li>"+item.ru21+"</li>")
			$(".ru2").append("<li>"+item.ru22+"</li>")
			$(".ru2").append("<li>"+item.ru23+"</li>")
			$(".ru2").append("<li>"+item.ru24+"</li>")
		})
	})
}
$(function(){
	rules2()
})
function rules3(){
	var dataUrl="json/rules3.json"
	$.getJSON(dataUrl,function(data){
		$(".ru3").empty()
		$.each(data,function(i,item){
			$(".ru3").append("<li>"+item.ru31+"</li>")
			$(".ru3").append("<li>"+item.ru32+"</li>")
			$(".ru3").append("<li>"+item.ru33+"</li>")
			$(".ru3").append("<li>"+item.ru34+"</li>")
		})
	})
}
$(function(){
	rules3()
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