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
		var $listButton = $('<button class="listButton buttons"></button>');
		var $input = $('<input class="itemInput" type="text" placeholder="add an activity and press enter">').append($listButton);
		var $listItem = $($listButton).on("click", function(){
			addItemText($listButton);
		});
		var $label = $('<label class="item"></label>').append('<input type="checkbox">', '<span class="checkmark"></span>')
						.append($listItem);
						console.log($listItem);
		var $title = $('<h3 class="title"></h3>').text(value);
		var $todo = $('<h3 class="title"></h3>',).append($title, $input, $listButton, $label,);
		var $div = $('<div class="note"></div>').append('<button class="remove buttons"></button>', $todo);
		$("div#main").append($div);
	};
	function addItemText($listButton) {
		var value = $($listButton).siblings("input").val();
		var text = $($listButton).siblings("label").text(value);
			return text;
	}

	
	// function clickList() {
		// var input = document.getElementsByClassName("listButton");
		// console.log(input);
		// input.addEventListener("keyup", function(event) {
		// 	if (event.keyCode === 13) {
		// 	document.getElementsByClassName("itemInput").click();
		// 	console.log("button clicked");
		
	// }
  	
