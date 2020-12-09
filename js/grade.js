// 护眼模式
$(document).ready(function(){
	$("#btn").click(function(){
		if($(this).val()=="护眼模式"){
			$(this).val("正常模式")
			$("body").css({"background":"#fffae8"})
		}else{
			$(this).val("护眼模式")
			$("body").css({"background":"white"})
		}
	})
})
// 评分
$(function(){
	$("ul>li").mouseover(function(){
		$(this).text("★").prevAll().text("★").end().nextAll().text("☆")
	}).mouseout(function(){
		$("ul").find("li").text("☆")
		$("ul>li[index=1]").text("★").prevAll().text("★")
	}).click(function(){
		$(this).attr("index","1").siblings("li").removeAttr("index")
	})
})