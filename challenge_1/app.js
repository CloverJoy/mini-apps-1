let boardState =
['', '', '',
'', '', '',
'','',''];

let turnCounter = 0;

const playerOneTurn = (i) => {
  console.log('Player 1 Fired! Board: ' + i);
  event.target.innerHTML = 'X';
  boardState[i] = 'X';
  console.log(boardState);
  turnCounter ++;
}

const playerTwoTurn = (i) => {
  console.log('Player 2 Fired! Board: ' + i);
  event.target.innerHTML = 'O';
  boardState[i] = 'O';
  console.log(boardState);
  turnCounter ++;
}

const playerTurn = () => {
  for (let i = 0; i <= 8; i++) {
    var current = document.getElementById(i);
    current.addEventListener('click', (event) => {
      if (!event.target.innerText && turnCounter % 2 === 0) {
        // console.log('Player 1 Fired!' + i);
        // event.target.innerHTML = 'X';
        // boardState[i] = 'X';
        // console.log(boardState);
        // turnCounter ++;
        playerOneTurn(i);
      } else if (!event.target.innerText && turnCounter % 2 === 1) {
        // console.log('Player 2 fired!' + i);
        // event.target.innerHTML = 'O';
        // boardState[i] = 'O';
        // console.log(boardState);
        // turnCounter ++;
        playerTwoTurn(i);
      }
    });
  }
}

const gameStart = () => {
  playerTurn();
}

gameStart();

