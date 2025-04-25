// code for the navigation //
function homeBtn() {
    window.location.href = "../finalHome.html";
    }
    
function boardsBtn() {
    window.location.href = "../finalBoards.html";
    }


    
// code for math game //
let timeLeft = 10;
let timerInterval;
let score = 0;
let highScore = 0;
let correctAnswer = 0;
    // "let" statements to give them variables to start with


window.onload = function() // function for when you first load the website
{
    let scoreFromBrowser = localStorage.getItem("highScore");
    if (scoreFromBrowser != undefined) highScore = scoreFromBrowser
    document.getElementById("highScore").innerHTML = "High Score: " + highScore;
        // tells the website to load the remembered high score from previous session
}


function startGame(){ // function to start the game after the button is pressed
    nextQuestion();
    document.getElementById("startBtn").disabled = true;
    // disables the start button after starting the game, to not be able to reset the time until end of game

    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.hidden = false;
    timerInterval = setInterval(function(){
        timeLeft -= 1;
        
        timeDisplay.innerHTML = "Time Left: " + timeLeft;
        if (timeLeft == 0)
            // time commands to display the time as well as start the time countdown
        {
            clearInterval(timerInterval);
            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = true;
            document.getElementById("btn3").disabled = true;
            document.getElementById("btn4").disabled = true;
        }
    },1000) // tells the interval to happen every 1k milliseconds (aka every second)
}


function nextQuestion() // function to start the next question
{
    let operationDiv = document.getElementById("operation"); // creates a variable for the operation (the equation)
    let firstNum = Math.ceil(Math.random() * 12); // first number in the equation from 0 to 12
    let secondNum = Math.ceil(Math.random() * 12); // second number in the equation from 0 to 12
    correctAnswer = firstNum * secondNum; // the correct answer is the first number times the second number
    operationDiv.innerHTML = firstNum + "*" + secondNum; // tells the code to multiply the two numbers

    let wrongAnswer1 = Math.ceil(Math.random() * 12) *  Math.ceil(Math.random() * 12);
    let wrongAnswer2 = Math.ceil(Math.random() * 12) *  Math.ceil(Math.random() * 12);
    let wrongAnswer3 = Math.ceil(Math.random() * 12) *  Math.ceil(Math.random() * 12);
    let wrongAnswer4 = Math.ceil(Math.random() * 12) *  Math.ceil(Math.random() * 12);
    // the math calculations for the multiplication problems
    
   document.getElementById("btn1").innerHTML = wrongAnswer1;
   document.getElementById("btn2").innerHTML = wrongAnswer2;
   document.getElementById("btn3").innerHTML = wrongAnswer3;
   document.getElementById("btn4").innerHTML = wrongAnswer4;

    let correctAnswerIndex = Math.floor(Math.random()*4)+1; // random num between 1, 2, 3, & 4
    let correctAnswerID = "btn" + correctAnswerIndex; // says "this button is the correct answer" without fully defining it
    document.getElementById(correctAnswerID).innerHTML = correctAnswer; // defines the correct answer as the button that has the number that is correct
}


function checkAnswer(buttonIndex) // function to check if the answer clicked was correct or not.
{
    let answer = document.getElementById("btn" + buttonIndex).innerHTML;
    if (answer == correctAnswer) score += 1; 
    document.getElementById("currentScore").innerHTML = "Current Score: " + score;
    if (score > highScore) highScore = score;
        // this function adds to the high score if correct. if not correct, high score is unaffected, all before remembering the high score.
    localStorage.setItem("highScore",highScore); //remembers previous high score
    document.getElementById("highScore").innerHTML = "High Score: " + highScore;
        
    nextQuestion(); // tells the website to move onto the next equation.
}