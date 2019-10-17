var timeRemaining = 30;
var intervalId;
var correctAnswer;
var userAnswer;
var numRight = 0;
var numWrong = 0;
var numUnanswered = 0;

// $(document).ready(function(){
// ("#startGame").on("click", startTimer());
// });

$("#startGame").click(startTimer);

// shows the Time Remaining and sets decrement interval to 1 second. 
// then is will hide with start button
// then it will display the questions
function startTimer() {
	$("#timer").text("Time Remaining: " + timeRemaining);   
    setInterval(decrement, 1000);
    $("#startGame").hide();
    displayQuestion();
}

// states that 1 will be subtracted from timeRemaining (setInterval declared in startTimer function)
// if the time remaining is 0 we call the stopTimer function which clears the interval and checks the answers
function decrement(){
    timeRemaining--;
    $("#timer").text("Time Remaining: " + timeRemaining);   
    if(timeRemaining === 0){
        stopTimer();
    }
}

// clears the interval and compares the user's answers to the correct answer
function stopTimer() {
    clearInterval(intervalId);
    keepScore();
}

//compare user input to correct answer
function keepScore() {

    for (var i = 0; i < triviaQuestions.length; i++) {    // create a for loop to loop through the array of trivia questions
        correctAnswer = triviaQuestions[i].correct;       // declares the correct answer 
        userAnswer = $('input[id=radio'+i+']:checked + label').text();   // declares the user's answer
        console.log(correctAnswer);
        console.log(userAnswer);
        if(userAnswer === correctAnswer) {                // if the user's answer is correct, then add 1 to numRight
            numRight++;
        } else if (userAnswer === "") {                   // if the user's answer is not answered, then add 1 to numUnanswered
            numUnanswered++;
        } else if (userAnswer !== correctAnswer) {        // if the user's answer is wrong, then add 1 to numWrong
            numWrong++;
        }
    }
    showResults(numRight, numWrong, numUnanswered);
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
    var questionContainer = $("#questionContainer");   // create a var that holds the questionContainer div
    var answerChoices = $(".form-check");       // create a var that that holds the form-check class
    
    for (var i = 0; i < triviaQuestions.length; i++) {
        questionContainer.append('<div id="question">' + triviaQuestions[i].question + '</div>');

        var choice1 = triviaQuestions[i].answers[0];
        var choice2 = triviaQuestions[i].answers[1];
        var choice3 = triviaQuestions[i].answers[2];

        questionContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + choice1 + '</label></div>');
        questionContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + choice2 + '</label></div>');
        questionContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + choice3 + '</label></div>');
    }

    var endQuizButton = '<button type="button" class="btn btn-success" id="endQuiz" type="submit">Finish</button>';
    questionContainer.append(endQuizButton);
    $("#endQuiz").on("click", stopTimer);
}




var triviaQuestions = [
    {
        question: "What Pokemon does Pikachu evolve into?",
        answers: ["Elekid", "Jolteon", "Raichu"],
        correct: "Raichu"
    },

    {
        question: "Which of the following is the most effective Poke Ball?",
        answers: ["Ultra Ball", "Great Ball", "Master Ball"],
        correct: "Master Ball"
    },

    {
        question: "What type of attacks are Normal-type Pokemon immune to?",
        answers: ["Fighting", "Ghost", "Dark"],
        correct: "Ghost"
    },

    {
        question: "Which of the following is NOT an evolutionary stone?",
        answers: ["Dragon Stone", "Fire Stone", "Thunder Stone"],
        correct: "Dragon Stone"
    },

    {
        question: "What type of attacks are Flying-type Pokemon immune to?",
        answers: ["Normal", "Ground", "Water"],
        correct: "Ground"
    },

    {
        question: "Which Pokemon is the god of all Pokemon?",
        answers: ["Arceus", "Mew", "Mewtwo"],
        correct: "Arceus"
    },

    {
        question: "What weather condition does Groudon summon upon entering battle?",
        answers: ["Hail", "Rain", "Sun"],
        correct: "Sun"
    },

    {
        question: "What weather condition does Kyogre summon upon entering battle?",
        answers: ["Sun", "Sandstorm", "Rain"],
        correct: "Rain"
    },

    {
        question: "If you need to revive your fainted Pokemon to full health, where do you go?",
        answers: ["Pokemon Gym", "Home", "Pokemon Center"],
        correct: "Pokemon Center"
    },

    {
        question: "If you need to buy supplies in the Pokemon world, where do you go?",
        answers: ["Poke Store", "Poke Dep", "Pokemon Mart"],
        correct: "Pokemon Mart"
    }
]