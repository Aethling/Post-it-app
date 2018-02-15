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
		$($listButton).on("click", function(){
			addItem($listButton);
		});
		$($input).on("keypress", function(e){
			if (e.which == 13){
				addItem($listButton);
			}
		});
		var $title = $('<h3 class="title"></h3>').text(value);
		var $todo = $('<h3 class="title"></h3>',).append($title, $input, $listButton,);
		var $removeButton = $('<button class="remove buttons">delete</button>');
		var $div = $('<div class="note"></div>').append($removeButton, $todo);
		$($removeButton).on("click", function() {
			removeNote($removeButton);
		})
		$("div#main").append($div);
	};
	function addItem($listButton) {
		var $value = $($listButton).siblings("input").val();
		var input = $('<input type="checkbox">')
		var checkmark = $('<span class="checkmark"></span>')
		var $label = $('<label class="item"></label>').text($value).append(input, checkmark);
		var theItem = $($listButton).closest("div").append($label);
		$($listButton).siblings("input").val('');
	}
	function removeNote($removeButton) {
		var theNote = $($removeButton).closest("div");
		$(theNote).remove();
	}
	
	// function clickList() {
		// var input = document.getElementsByClassName("listButton");
		// console.log(input);
		// input.addEventListener("keyup", function(event) {
		// 	if (event.keyCode === 13) {
		// 	document.getElementsByClassName("itemInput").click();
		// 	console.log("button clicked");
		
	// }
  	
