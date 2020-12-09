// 手风琴
$(document).ready(function(){
	$("#case-left>div>ul").hide()
	$("#case-left>div:eq(0)>ul").show()
	$("#case-left>div").click(function(){
		$(this).children("ul").slideDown()
		$(this).children("h3").children("span").text("↓")
		$(this).siblings().children("ul").slideUp()
		$(this).siblings().children("h3").children("span").text("→")
	})
})
// 来稿姓名电话筛查
function check(){
	var uname=$("#name").val()
	var tel=$("#tel").val()
	var regTel=/^1((3\d)|(4[4-9])|(5[^4])|(6[67])|(7[^2])|(8\d)|(9\d))\d{8}$/
	if(uname==""){
		alert("name不可以为空")
		return false
	}
	for(var i=0;i<uname.length;i++){
		var font=uname.substring(i,i+1)
		if(isNaN(font)==false){
			alert("name不可以有数字")
			return false
		}
	}
	if(tel==""){
		alert("tel不可以为空")
		return false
	}
	if(regTel.test(tel)==false){
		alert("请输入正确的手机号")
		return false
	}
	return true
}
$(function(){
	$("#myform").submit(function(){
		return check()
	})
})
//回到顶部
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