var timeRemaining = 30;
var intervalId;
var correctAnswer;
var userAnswer;
var numRight = 0;
var numWrong = 0;
var numUnanswered = 0;

("#startGame").on("click", function (){
	
	startTimer();
});

function startTimer() {
	$("#timer").text("Time Remaining: " + timeRemaining);   
    setInterval(decrement, 1000);
    $("startGame").hide();
    displayQuestion();
}

function decrement(){
    timeRemaining--;
    $("#timer").text("Time Remaining: " + timeRemaining);   
    if(timeRemaining === 0){
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(intervalId);
    checkAnswers();
}

//compare user input to correct answer
function keepScore() {

    for (var i = 0; i < questionBank.length; i++) {
        correctAnswer = triviaQuestions[i].correct;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();

        if(userAnswer === correctAnswer) {
            numRight++;
        } else if (userAnswer === "") {
            numUnanswered++;
        } else if (userAnswer !== correctAnswer) {
            numWrong++;
        }
    }
}

function showResults(numRight, numWrong, numUnanswered) {
    $("#resultsBox").show();
    $("#questionContainer").empty(); //The empty() method removes all child nodes and content from the selected elements.
    $("#timer").empty();
    $("#timer").hide();
    $("#rightAnswers").text("Correct Answers: " + numRight);
    $("#incorrectAnswers").text("Wrong Answers: " + numWrong);
    $("#notAnswered").text("Amount You Skipped: " + numUnanswered);
}

function displayQuestion() {
    
}