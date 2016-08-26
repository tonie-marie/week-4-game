$(document).ready(function() {
	// set random numberToMatch
	var numberToMatch = Math.floor((Math.random() * 100) + 1);

	// set random numbers to rings
	var yellow = Math.floor((Math.random() * 9) + 2);
	var aquamarine = Math.floor((Math.random() * 9) + 2);
	var green = Math.floor((Math.random() * 9) + 2);
	var orange = Math.floor((Math.random() * 9) + 2);

	// counter where ring clicks are added together
	var counter = 0;

	// tally wins
	var wins = 0;
	
	// tally losses
	var losses = 0;

	// setting numberToMatch to current DOM element
	$("#computerNumber").html(numberToMatch);

	// seeting random numbers to images
	$("#computerNumber").attr(yellow);
	$("#computerNumber").attr(aquamarine);
	$("#computerNumber").attr(green);
	$("#computerNumber").attr(orange);
})