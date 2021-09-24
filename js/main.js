$(document).ready(function(){
 $('.header').height($(window).height());
 $("button").click(function ( {  
$.get("https://app.schoology.com/school/2654352006/", function (data, document, quotes) { 
 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })

})
