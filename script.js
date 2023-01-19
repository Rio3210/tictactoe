
const notfication=document.querySelector('.notification');
let player = "X";
let gameOver = false;
const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector("#reset-button");

let count=0  // helps to when the game is tie (draw)

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(event) {
    count+=1
    if (!gameOver) {
      if (event.target.textContent === "") {
        event.target.textContent = player;
        checkForWinner();
        player = player === "X" ? "O" : "X";
      }
    }
  });
}

resetButton.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  gameOver = false;
  player = "X";
  notfication.style.display="none";
  count=0
});

function checkForWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent === player &&
      cells[b].textContent === player &&
      cells[c].textContent === player
    ) {
      gameOver = true;
      let html=""
      html+=`<h2>Game Over</h2>
        
        <div class="inst">
            <p>Winner Player: ${player}</p>
        </div>`
        notfication.innerHTML=html
        notfication.style.display="block";  

        
      break;
    }
  }
  if (count==9){  // if count reach 9 that means there is no any free cell these it's a draw
    let html=""
    html+=`<h2>Game Over</h2>
        
        <div class="inst">
            <p>Draw</p>
        </div>`
    notfication.innerHTML=html
    notfication.style.display="block"; 
  }
}

