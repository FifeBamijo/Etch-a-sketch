let color = "black";
let click = false;
document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      let draw = document.querySelector("#draw");
      if (click) {
        draw.innerHTML = "You can draw";
      } else {
        draw.innerHTML = "Click to draw";
      }
    }
  });

  const selectBtn = document.getElementById("select");
  selectBtn.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });
});
function createBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = document.querySelector(".input");
  let message = document.querySelector("#message");
  if (input.value === "") {
    input.style.borderColor = "red";
    message.innerHTML = "Please provide a number";
  } else if (input.value < 0 || input.value > 100) {
    input.style.borderColor = "red";
    message.innerHTML = "Provide a number between 1-100";
  } else {
    input.style.borderColor = "none";
    return input.value;
  }
}

function colorDiv() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color === "white") {
      this.style.backgroundColor = "white";
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function reset() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
