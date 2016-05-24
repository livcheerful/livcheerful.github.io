
var main = function(){
	$('<a href="../index.html">').text("Vivian").prependTo('.navbar');
	$('<a href="gems.html">').text("Gems Computer Science Camp for Girls").appendTo('.navbar');
	$('<a href="comics.html">').text("Comics").appendTo('.navbar');
	$('<a href="blog.html">').text("Blog").appendTo('.navbar');
	$('li').hover(
		function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		}
	);
};

$(document).ready(main);
