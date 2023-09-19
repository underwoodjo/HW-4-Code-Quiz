//setting variable for start button from html
var startButton = document.querySelector("#startbutton")
//adding the click function to start button
//first query hides the start page div
//second query shows the next div
startButton.addEventListener("click", function(){
    document.querySelector("#startPage").style="display:none"
    document.querySelector("#Question1").style="display:block"
})
//setting variable for quiz page 
var Question1 = document.querySelector("#Question1")

//adding click function to questions
var question1a = document.querySelector("#question1a")
var question1b = document.querySelector("#question1b")
question1a.addEventListener("click", function(){
    document.querySelector("#Question1").style="display:none"
    document.querySelector("#Question2").style="display:block"
})
question1b.addEventListener("click", function(){
    document.querySelector("#Question1").style="display:none"
    document.querySelector("#Question2").style="display:block"
})
var question2a = document.querySelector("#question2a")
var question2b = document.querySelector("#question2b")
question2a.addEventListener("click", function(){
    document.querySelector("#Question1").style="display:none"
    document.querySelector("#Question2").style="display:block"
})
question2b.addEventListener("click", function(){
    document.querySelector("#Question2").style="display:none"
    document.querySelector("#endofquiz").style="display:block"
})
var Question2 = document.querySelector("#Question2")

var endofquiz = document.querySelector("#endofquiz")

var submitInitials = document.querySelector("#submitInitials")
    
submitInitials.addEventListener("click", function(){
    document.querySelector("#endofquiz").style="display:none"
    document.querySelector("#highscores").style="display:block"
})


