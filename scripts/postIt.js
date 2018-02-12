$(document).ready(function(){
	$("button#topButton").on("click", function(){
		var value = $("input#input").val();
		if (value) {
			addPostIt(value);
		}
		$("input#input").val('');
	});
	var input = document.getElementById("input");
	input.addEventListener("keyup", function(event) {
  	if (event.keyCode === 13) {
		document.getElementById("topButton").click();
  	}
	});
	});	
	function addPostIt(value) {
		
		// var $label = $('<label class="item"></label>').append('<input type="checkbox">', '<span class="checkbox"></span>');
		// var $title = $('<h3 class="title"></h3>').text(value);
		// 			$($label).appendTo($title)
		// 			.appendTo('<h3 class="title"></h3>');
		// var $div = $('<div class="note"></div>').append('<button class="remove buttons"></button>', $title)
		// 			.appendTo("div#main");
					
		var $label = $('<label class="item"></label>').append('<input type="checkbox">', '<span class="checkmark"></span>');
		var $title = $('<h3 class="title"></h3>').text(value);
		var $todo = $('<h3 class="title"></h3>',).append($title, $label);
		var $div = $('<div class="note"></div>').append('<button class="remove buttons"></button>', $todo);
		$("div#main").append($div);
		console.log($div);
	};