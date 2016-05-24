
var main = function(){
	$('<a href="index.html">').text("Vivian").prependTo('.navbar');
	$('<a href="gems.html">').text("Gems Computer Science Camp for Girls").appendTo('.navbar');
	$('<a href="comics.html">').text("Comics").appendTo('.navbar');
	$('<a href="blog.html">').text("Blog").appendTo('.navbar');
};

$(document).ready(main);