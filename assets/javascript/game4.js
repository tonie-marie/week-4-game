var numberToMatch = Math.floor(Math.random() * 100) + 1;
$("#computerNumber").text(numberToMatch);

var yellow = Math.floor((Math.random() * 9) + 2);
var	aquamarine = Math.floor((Math.random() * 9) + 2);
var	green = Math.floor((Math.random() * 9) + 2);
var	orange = Math.floor((Math.random() * 9) + 2);

// keep track of score
var wins = 0;
var losses = 0;
$("#wins").append(wins);
$("#losses").append(losses);

// totalScore is where ring clicks are totaled together
var totalScore = 0;

//set random numbers to their correct location
$('#totalScore').text(totalScore);

$("#yellow").attr('data-num', yellow);

$("#aquamarine").attr('data-num', aquamarine);

$("#green").attr('data-num', green);

$("#orange").attr('data-num', orange);

// new round
function startGame() {
	// reset numberToMatch and ring numbers
	numberToMatch = Math.floor(Math.random() * 100) + 1;
	$("#computerNumber").text(numberToMatch);

	yellow = Math.floor((Math.random() * 9) + 2);
	aquamarine = Math.floor((Math.random() * 9) + 2);
	green = Math.floor((Math.random() * 9) + 2);
	orange = Math.floor((Math.random() * 9) + 2);
	totalScore = 0;
	$('#totalScore').text(totalScore);
}

// what happens when numbers match
function winner() {
	alert("You win!");
	wins++;
	$("#wins").html("<p>Wins: " + wins + "</p>");
	startGame();
}

// what happens when user guess over
function looser() {
	alert("You lost!");
	losses++;
	$("#losses").html("<p>Losses: " + losses + "</p>");
	startGame();
}

$(".rings").on("click", function(){
	totalScore = totalScore + parseInt($(this).data('num'));
	$("#totalScore").text(totalScore);
		if (totalScore === numberToMatch) {
			winner();
		}else if (totalScore > numberToMatch) {
			looser();
		}

})

