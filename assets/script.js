var ul = document.getElementById("ul");
var nextButton = document.getElementById("nxtBtn");
var quizBox = document.getElementById("questionPrompt");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector(".timer-count");
var restartButton = document.querySelector("#reset-button");
var timer;
var timerCount;
var isWin = false;

var questionArray = {
    questions: [
        {
            question: "What data type is considered Boolean?",
            options: ["Numeric", "True/False", "String", "CSS"],
            answer: "1"
        },
        {
            question: "What does CSS stand for?",
            options: ["cascading style sheets", "Care Safe Style", "Code Standard Style", "None of the above"],
            answer: "0"
        }
    ],
    index: 0,
    load: function(){
        if(this.index < this.questions.length){
            quizBox.innerHTML = (this.index + 1) + ". " + this.questions[this.index].question;
            p1.innerHTML = this.questions[this.index].options[0];
            p2.innerHTML = this.questions[this.index].options[1];
            p3.innerHTML = this.questions[this.index].options[2];
            p4.innerHTML = this.questions[this.index].options[3];
        }
        else {
            quizBox.innerHTML = "Quiz Complete";
            ul.style.display = "none";
            nextButton.style.display = "none";
        }
    },
    check: function(ele){
        var id = ele.id.split("");
        if (id[id.length - 1] == this.questions[this.index].answer){
            this.score++;
            ele.className = "correct";
        }
        else {
            ele.className = "wrong";
        }
    },
    preventClick: function(){
        for(var i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents = "none";
        }
    },
    permitClick: function(){
        for(var i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = "";
        }
    },
    score: 0,
    scoreCard: function(){
        var scoreCard = document.getElementById("score-card");
        scoreCard.innerHTML = "Score: " + this.score + "/" + this.questions.length;
    },
    next: function(){
        this.index++;
        this.load();
    }
};

window.onload = questionArray.load();

function button(ele){
    questionArray.check(ele);
    questionArray.preventClick();
    questionArray.scoreCard();
}

function next(){
    questionArray.next();
    questionArray.permitClick();
}

startButton.addEventListener("click", function(){
    document.querySelector("#quiz-block").setAttribute("class","show");
    document.querySelector("#page-load").setAttribute("class", "hide");
    startQuiz();
});

function restartQuiz(){
    questionArray.score = 0;
    questionArray.index = 0;
    questionArray.load();
    questionArray.scoreCard();
}

function startQuiz(){
    isWin = false;
    timerCount = 20; // change this value to set quiz duration
    startTimer();
}

function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if(timerCount >= 0){
            if(isWin && timerCount > 0){
                clearInterval(timer);
                winGame();
            }
        }
        if(timerCount === 0){
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function winGame(){
    // insert code for winning the game here
}

function loseGame(){
    // insert code for losing the game here
}