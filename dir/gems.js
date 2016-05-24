var main = function(){
	$('#game').click(function(){
		$("#camptext").hide();
		$("#gametext").show();
		$("#artstext").hide();
	});
	$('#arts').click(function(){
		$("#camptext").hide();
		$("#artstext").show();
		$('#gametext').hide();
	});
	$('#title').hover(function(){
		$(this).css("color","cadetblue");

	}, function(){
		$(this).css("color","white")
	});
	$('#title').click(function(){
		$('#camptext').show();
		$('#artstext').hide();
		$('#gametext').hide();
	});
};

$(document).ready(main);