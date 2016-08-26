$(document).ready(function() {
	// create random number for user to match
	var numberToMatch = Math.floor((Math.random() * 100) + 1);

	//  create random number for each ring
	var yellow = Math.floor((Math.random() * 9) + 2);
	var aquamarine = Math.floor((Math.random() * 9) + 2);
	var green = Math.floor((Math.random() * 9) + 2);
	var orange = Math.floor((Math.random() * 9) + 2);

	// set a counter where rock clicks are added together
	counter = 0;

	// set losses and wins to 0
	var losses = 0;
	var wins = 0;

	// display numberToMatch on DOM
	$("#computerNumber").html(numberToMatch);

	// apply vars to pictures
	$(".rings").on("click", function(){
		$("#yellow").data('yellow');
	})
	$(".rings").on("click", function(){
		$("#aquamarine").data('aquamarine');
	})
	$(".rings").on("click", function(){
		$("#green").data('green');
	})
	$(".rings").on("click", function(){
		$("#orange").data('orange');
	})
})
