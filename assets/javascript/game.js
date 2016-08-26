var numberToGuess = Math.floor(Math.random() * 100) + 1;
var totalScore = 0;
var yellow = Math.floor((Math.random() * 9) + 2);
var aquamarine = Math.floor((Math.random() * 9) + 2);
var green = Math.floor((Math.random() * 9) + 2);
var orange = Math.floor((Math.random() * 9) + 2);
var wins = 0;
var losses = 0;

function startGame() {
	numberToGuess = Math.floor(Math.random() * 100) + 1;
	yellow = Math.floor((Math.random() * 9) + 2);
	aquamarine = Math.floor((Math.random() * 9) + 2);
	green = Math.floor((Math.random() * 9) + 2);
	orange = Math.floor((Math.random() * 9) + 2);
	totalScore = 0;

	console.log(numberToGuess);
	console.log(yellow);
	console.log(aquamarine);
	console.log(green);
	console.log(orange);
}

//set random numbers to their correct location
$('#computerNumber').text(numberToGuess);

$("#yellow").attr('data-num', yellow);

$("#aquamarine").attr('data-num', aquamarine);

$("#green").attr('data-num', green);

$("#orange").attr('data-num', orange);

$("#scoreCounter").html("<p>Wins: </p>" + "<br>" + "<p>Losses: </p>");

// when a picture is clicked
$(".rings").on("click", function(){
	totalScore = totalScore + parseInt($(this).data('num'));

	$("#totalScore").text(totalScore);
	
	if (totalScore === numberToGuess){
		wins++;
		alert("You won!");
		$("#wins").html(wins);
	}else if(totalScore > numberToGuess){
		losses++;
		alert("You lost!");
		$("#losses").html(losses);
	}
})




