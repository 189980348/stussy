/*
* @Author: 香芋
* @Date:   2018-10-13 15:24:47
* @Last Modified by:   admin
* @Last Modified time: 2018-10-15 11:10:16
*/

$(function(){
	var imgsrc=$('.yi').children('li').children('img')
	var imgsrc2=$('.er').children('li').children('img')
	var imgsrc3=$('.san').children('li').children('img')
	var imgsrc4=$('.si').children('li').children('img')
	var pre=[
		{
			"Imgsrc":"../images/1.jpg"
		},
		{
			"Imgsrc":"../images/2.jpg"
		},
		{
			"Imgsrc":"../images/4.jpg"
		},
		{
			"Imgsrc":"../images/5.jpg"
		},
		{
			"Imgsrc":"../images/6.jpg"
		},
		{
			"Imgsrc":"../images/7.jpg"
		},
		{
			"Imgsrc":"../images/blac1.jpg"
		},
		{
			"Imgsrc":"../images/8.jpg"
		}
	]
	var pre2=[
		{
			"Imgsrc":"../images/1.jpg"
		},
		{
			"Imgsrc":"../images/2.jpg"
		},
		{
			"Imgsrc":"../images/4.jpg"
		},
		{
			"Imgsrc":"../images/5.jpg"
		},
		{
			"Imgsrc":"../images/6.jpg"
		},
		{
			"Imgsrc":"../images/7.jpg"
		},
		{
			"Imgsrc":"../images/blac1.jpg"
		},
		{
			"Imgsrc":"../images/8.jpg"
		}
	]
	var pre3=[
		{
			"Imgsrc":"../images/1.jpg"
		},
		{
			"Imgsrc":"../images/2.jpg"
		},
		{
			"Imgsrc":"../images/4.jpg"
		},
		{
			"Imgsrc":"../images/5.jpg"
		},
		{
			"Imgsrc":"../images/6.jpg"
		}
	]
	var pre4=[
		{
			"Imgsrc":"../images/1.jpg"
		},
		{
			"Imgsrc":"../images/2.jpg"
		},
		{
			"Imgsrc":"../images/4.jpg"
		},
		{
			"Imgsrc":"../images/5.jpg"
		},
		{
			"Imgsrc":"../images/7.jpg"
		},
		{
			"Imgsrc":"../images/8.jpg"
		}
	]
	$('#wd1').children('li').children('a').mouseover(function(event) {
		$('.yi').stop().fadeIn(500);
		var a=$(this).parent().index()
			imgsrc.attr({'src':pre[a].Imgsrc})
	});
	$('#wd3').children('li').children('a').mouseover(function(event) {
		$('.er').stop().fadeIn(500);
		var a=$(this).parent().index()
			imgsrc2.attr({'src':pre2[a].Imgsrc})
	});
	$('#wd5').children('li').children('a').mouseover(function(event) {
		$('.san').stop().fadeIn(500);
		var a=$(this).parent().index()
			imgsrc3.attr({'src':pre3[a].Imgsrc})
	});
	$('#wd7').children('li').children('a').mouseover(function(event) {
		$('.si').stop().fadeIn(500);
		var a=$(this).parent().index()
			imgsrc4.attr({'src':pre4[a].Imgsrc})
	});
	$('#bd').hover(function() {
		$(this).css({'backgroundColor':'#fff'})
	}, function() {
		$(this).css({'backgroundColor':'transparent'})
	});
	$('#lis').hover(function() {
		$('#wd').css({'display':'block'})
	}, function() {
		$('#wd').css({'display':'none'})
	});
	$('#wd').hover(function() {
		$(this).css({'display':'block'})
	}, function() {
		$(this).css({'display':'none'})
	});
	$('#lis2').hover(function() {
		$('#wd2').css({'display':'block'})
	}, function() {
		$('#wd2').css({'display':'none'})
	});
	$('#wd2').hover(function() {
		$(this).css({'display':'block'})
	}, function() {
		$(this).css({'display':'none'})
	});
	$('#lis3').hover(function() {
		$('#wd4').css({'display':'block'})
	}, function() {
		$('#wd4').css({'display':'none'})
	});
	$('#wd4').hover(function() {
		$(this).css({'display':'block'})
	}, function() {
		$(this).css({'display':'none'})
	});
	$('#lis4').hover(function() {
		$('#wd6').css({'display':'block'})
	}, function() {
		$('#wd6').css({'display':'none'})
	});
	$('#wd6').hover(function() {
		$(this).css({'display':'block'})
	}, function() {
		$(this).css({'display':'none'})
	});
	setTimeout(function(){
		$('#lis').mouseover(function(event) {
			$('yi').stop().fadeIn(1000)
		});
	})
})