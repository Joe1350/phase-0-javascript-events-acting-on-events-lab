// const dodger = document.getElementById("dodger");

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }

// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });

// function moveDodgerRight() {
//     const rightNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(rightNumbers, 10);

//     if (left < 360) {
//         dodger.style.left = `${left + 1}px`;
//     }
// }

// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight();
//     }
// });



//declarations
const dodger = document.getElementById("dodger");

//styles
dodger.style.backgroundColor = "#ff69b4";
dodger.style.bottom = "0px";


// add event listeners
document.addEventListener('keydown', function(event) {
  // console.log(event);
  if (event.key === "ArrowLeft") {
    moveDodgerLeft()
  }
});

document.addEventListener('keydown', function(event) {
	if (event.key === "ArrowRight") {
		moveDodgerRight()
	}
})

// callback Functions
function moveDodgerLeft() {
	const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
  	dodger.style.left = `${left - 5}px`;
	}
}

function moveDodgerRight() {
	const rightNumbers = dodger.style.left.replace('px', '');
	const right = parseInt(rightNumbers, 10);

	if (right < 360) {
		dodger.style.left = `${right + 5}px`
	}
}