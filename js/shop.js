/*
* @Author: 香芋
* @Date:   2018-10-08 19:47:08
* @Last Modified by:   香芋
* @Last Modified time: 2018-10-15 18:06:58
*/

$(function(){
	$('.money').hover(function() {
		$(this).children().children('p').css({'display':'block'});
	}, function() {
		$(this).children().children('p').css({'display':'none'});
	});
})
	
