var score1 = document.getElementById("p1Score");
var score2 = document.getElementById("p2Score");
var button1 = document.getElementById("p1Button");
var button2 = document.getElementById("p2Button");
var reset = document.getElementById("reset");

var max = document.getElementById("maxScore");
var maxInput = document.getElementById("maxScoreInput");
max.textContent = maxInput.value;
var maxInt = parseInt(max.textContent);


var gameOver = false;

button1.addEventListener("click", function () {
    if (!gameOver) {
        var score = parseInt(score1.textContent);
        score1.textContent = score + 1;
        if (score + 1 == maxInt) {
            score1.style.color = "green";
            gameOver = true;
        }
    }
});
button2.addEventListener("click", function () {
    if (!gameOver) {
        var score = parseInt(score2.textContent);
        score2.textContent = score + 1;
        if (score + 1 == maxInt) {
            score1.style.color = "green";
            gameOver = true;
        }
    }
});
reset.addEventListener("click", function () {
    score1.textContent = "0";
    score1.style.color = "black";
    score2.textContent = "0";
    score2.style.color = "black";

});
maxInput.addEventListener("change", function () {
    max.textContent = maxInput.value;
    maxInt = maxInput.value;
})