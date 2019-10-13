$(document).ready(function(){
	$("#gameStart").on("click", game)



// GLOBAL VARIABLES
	var number = 30;
	var intervalID;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var unanswered =;

	let score = 0;
	let currentQuestion = 0;
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
			answer: "Ghost"
		},

		{
			question: "Which of the following is NOT an evolutionary stone?",
			answers: ["Dragon Stone", "Fire Stone", "Thunder Stone"],
			answer: "Dragon Stone"
		},

		{
			question: "What type of attacks are Flying-type Pokemon immune to?",
			answers: ["Normal", "Ground", "Water"],
			answer: "Ground"
		},

		{
			question: "Which Pokemon is the god of all Pokemon?",
			answers: ["Arceus", "Mew", "Mewtwo"],
			answer: "Arceus"
		},

		{
			question: "What weather condition does Groudon summon upon entering battle?",
			answers: ["Hail", "Rain", "Sun"],
			answer: "Sun"
		},

		{
			question: "What weather condition does Kyogre summon upon entering battle?",
			answers: ["Sun", "Sandstorm", "Rain"],
			answer: "Rain"
		},

		{
			question: "If you need to revive your fainted Pokemon to full health, where do you go?",
			answers: ["Pokemon Gym", "Home", "Pokemon Center"],
			answer: "Pokemon Center"
		},

		{
			question: "If you need to buy supplies in the Pokemon world, where do you go?",
			answers: ["Poke Store", "Poke Dep", "Pokemon Mart"],
			answer: "Pokemon Mart"
		}
	];

	$(document).ready(function(){
		$("#gameStart").on("click", game)

		// GAME SETUP
	function setup() {
		remainingTime : 60,

		startTimer: function() {
			$("#timer").text()
		}
	}
	
	});



var trivia = {
	displayQuestions: function(){ 
		var divContainer = $("#questionContainer");
		var answerGroup = $(".form-check");

		for (var i =0; i < triviaQuestions.length; i++){
			correctAnswers = triviaQuestions[i].correct;
			
		}
		
	}
}