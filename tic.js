let boxes=document.querySelectorAll(".box1");
let hello=document.querySelector(".Reset");
let newbutton=document.querySelector(".winbtn");
let msg=document.querySelector(".msg-container");
let para=document.querySelector(".winner");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msg.classList.add("hide");
};

boxes.forEach((box1) => {
  box1.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box1.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box1.innerText = "X";
      turnO = true;
    }
    box1.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  para.innerText = `Game was a Draw.`;
  msg.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box1 of boxes) {
    box1.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box1 of boxes) {
    box1.disabled = false;
    box1.innerText = "";
  }
};

const showWinner = (winner) => {
  para.innerText = `Congratulations, Winner is ${winner}`;
  msg.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newbutton.addEventListener("click", resetGame);
hello.addEventListener("click", resetGame);