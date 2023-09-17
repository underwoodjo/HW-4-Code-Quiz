//setting variable for start button from html
var startButton = document.querySelector("#startbutton")
//adding the click function to start button
//first query hides the start page div
//second query shows the next div
startButton.addEventListener("click", function(){
    document.querySelector("#startPage").style="display:none"
    document.querySelector("#Quiz").style="display:block"
})