var boxes = document.querySelectorAll(".box");
var result = document.getElementById("result");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var hardRow = document.getElementById("hard");
var hardBoxes = hardRow.querySelectorAll("div");
var resetBtn = document.getElementById("resetBtn");
var colorCode = document.getElementById("colorCode");
var colorString = "RGB(0, 123, 255)";
var answer;
var gameOver = false;

$(function () {
  resetGame();
});

function resetGame() {
  gameOver = false;
  resetBtn.textContent = "NEW GAME";
  if (easyBtn.classList.contains("customBg")) {
    easyBtn.style.backgroundColor = "";
  } else {
    hardBtn.style.backgroundColor = "";
  }
  boxes = document.querySelectorAll(".box");
  answer = Math.floor(Math.random() * boxes.length);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "";
    boxes[i].style.backgroundColor = randomColor();
    if (i == answer) {
      boxes[i].id = "correct";
    }
  }
  colorCode.textContent = boxes[answer].style.backgroundColor.toUpperCase();
  bindClick(boxes);
}

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  colorString = "RGB(" + x + ", " + y + ", " + z + ")";
  return colorString;
}

function bindClick() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", clickFunction(i));
  }
}

function clickFunction(i) {
  return function () {
    if ((i == answer) && !gameOver) {
      gameOver = true;
      result.textContent = "Correct!";
      for (var index = 0; index < boxes.length; index++) {
        boxes[index].style.backgroundColor = colorString;
      }
      document.querySelector(".jumbotron").style.backgroundColor = colorString;
      if (easyBtn.classList.contains("customBg")) {
        easyBtn.style.backgroundColor = colorString;
      } else {
        hardBtn.style.backgroundColor = colorString;
      }
      resetBtn.textContent = "PLAY AGAIN?";
      $(boxes).fadeIn("slow");
    } else if (!gameOver) {
      result.textContent = "Try again";
      $(this).fadeOut("slow");
    }
  }
}

easyBtn.addEventListener("click", function () {
  hardRow.classList.add("d-none");
  for (var i = 0; i < hardBoxes.length; i++) {
    hardBoxes[i].classList.remove("box");
  }
  resetGame();
  toggleHighlight(easyBtn, hardBtn);
});

hardBtn.addEventListener("click", function () {
  hardRow.classList.remove("d-none");
  for (var i = 0; i < hardBoxes.length; i++) {
    hardBoxes[i].classList.add("box");
  }
  resetGame();
  toggleHighlight(hardBtn, easyBtn);
});

function toggleHighlight(button1, button2) {
  button1.classList.add("customBg");
  button1.classList.remove("whiteBg");
  button2.classList.add("whiteBg");
  button2.classList.remove("customBg");
}

resetBtn.addEventListener("click", function () {
  resetGame();
});