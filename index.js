let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(leftNumbers, 10) + 40;
 
  if (right < 400) {
    dodger.style.left = `${right + 1 - 40}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    console.log(e.key);
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight") {
    console.log(e.key);
    moveDodgerRight();
  }
});