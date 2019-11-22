var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var p1Button = document.getElementById("p1Button");
var p2Button = document.getElementById("p2Button");
var reset = document.getElementById("reset");

var maxScore = document.getElementById("maxScore");
var maxScoreInput = document.getElementById("maxScoreInput");
maxScore.textContent = maxScoreInput.value;
var maxScoreInt = parseInt(maxScore.textContent);


var isFinished = false;

p1Button.addEventListener("click", function () {
    if (!isFinished) {
        var score = parseInt(p1Score.textContent);
        p1Score.textContent = score + 1;
        if (score + 1 == maxScoreInt) {
            p1Score.style.color = "green";
            isFinished = true;
        }
    }
});
p2Button.addEventListener("click", function () {
    if (!isFinished) {
        var score = parseInt(p2Score.textContent);
        p2Score.textContent = score + 1;
        if (score + 1 == maxScoreInt) {
            p1Score.style.color = "green";
            isFinished = true;
        }
    }
});
reset.addEventListener("click", function () {
    p1Score.textContent = "0";
    p1Score.style.color = "black";
    p2Score.textContent = "0";
    p2Score.style.color = "black";

});
maxScoreInput.addEventListener("change", function () {
    maxScore.textContent = maxScoreInput.value;
    maxScoreInt = maxScoreInput.value;
})