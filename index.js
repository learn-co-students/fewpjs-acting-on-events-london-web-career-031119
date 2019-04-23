// Your code here


//grab the dodger:
let dodger = document.querySelector("#dodger");

//work on that function to make sure that the dodger doesn't go over the black box:
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

//Create an event listener:
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


//DO THE SAME FOR THE RIGHT:
function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}


//Create an event listener:
document.addEventListener('keydown', function(e) {
  if (e.which === "ArrowRight") {
    moveDodgerRight()
  }
})
