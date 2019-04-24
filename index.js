// Your code here
let dodger = document.getElementById("dodger");
let x_cord = parseInt(dodger.style.left)

dodger.style.backgroundColor = "#FF69B4";
document.addEventListener("keydown", e=>{
   console.log(e.code)

   if (e.code === 'ArrowLeft') { x_cord -= 5 }
   if (e.code === 'ArrowRight') { x_cord += 5 }
   dodger.style.left = x_cord.toString()+'px'
} )