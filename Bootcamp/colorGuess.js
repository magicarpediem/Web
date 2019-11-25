var isHardMode = false;
var boxes = document.querySelectorAll(".box");
var colorCode = document.getElementById("colorCode");
var result = document.getElementById("result");
var answer;

$(function() {
  randomizeBoxes();
});

function randomizeBoxes() {
  answer = Math.floor(Math.random() * 6);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = randomColor();
  }
  colorCode.textContent = boxes[answer].style.backgroundColor.toUpperCase();
}

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var result = "RGB(" + x + ", " + y + ", " + z + ")";
  return result;
}

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function() {
    console.log("listener");
    if ((i = answer)) {
      result.textContent = "Correct!";
      console.log("WIN");
    }
  });
}
