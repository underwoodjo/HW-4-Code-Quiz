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
Question1.addEventListener("click", function(){
    document.querySelector("#Question1").style="display:none"
    document.querySelector("#Question2").style="display:block"
})

var Question2 = document.querySelector("#Question2")

Question2.addEventListener("click", function(){
    Question2.style="display:none"
    document.querySelector("#initials").style="display:block"
})

