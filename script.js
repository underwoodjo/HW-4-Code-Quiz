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
var True1 = document.querySelector("#True1")
var False1 = document.querySelector("#False1")
True1.addEventListener("click", function(){
    document.querySelector("#Question1").style="display:none"
    document.querySelector("#Question2").style="display:block"
})
False1.addEventListener("click", function(){
    document.querySelector("#Question1").style="display:none"
    document.querySelector("#Question2").style="display:block"
})
var True2 = document.querySelector("#True2")
var False2 = document.querySelector("#False2")
True2.addEventListener("click", function(){
    document.querySelector("#Question1").style="display:none"
    document.querySelector("#Question2").style="display:block"
})
False2.addEventListener("click", function(){
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


