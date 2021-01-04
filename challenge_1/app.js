let boardState =
['', '', '',
'', '', '',
'','',''];
let message = document.getElementById('message');

let turnCounter = 0;

const playerOneTurn = (i) => {
  message.innerHTML = 'Your Turn: Player 2';
  console.log('Player 1 Fired! turn: ' + turnCounter);
  event.target.innerHTML = 'X';
  boardState[i] = 'X';
  console.log(boardState);
  turnCounter ++;
  checkDraw();
  checkWinCon();
}


const playerTwoTurn = (i) => {
  message.innerHTML = 'Your Turn: Player 1';
  console.log('Player 2 Fired! turn: ' + turnCounter);
  event.target.innerHTML = 'O';
  boardState[i] = 'O';
  console.log(boardState);
  turnCounter ++;
  checkDraw();
  checkWinCon();
}

const checkWinCon = () => {
  if (boardState[0] + boardState[1] + boardState[2] === 'XXX' ||
      boardState[3] + boardState[4] + boardState[5] === 'XXX' ||
      boardState[6] + boardState[7] + boardState[8] === 'XXX' ||
      boardState[0] + boardState[3] + boardState[6] === 'XXX' ||
      boardState[1] + boardState[4] + boardState[7] === 'XXX' ||
      boardState[2] + boardState[5] + boardState[8] === 'XXX' ||
      boardState[0] + boardState[4] + boardState[8] === 'XXX' ||
      boardState[2] + boardState[4] + boardState[6] === 'XXX') {
    message.innerHTML = 'PLAYER ONE WIN!'
    return;
  } else if (boardState[0] + boardState[1] + boardState[2] === 'OOO' ||
  boardState[3] + boardState[4] + boardState[5] === 'OOO' ||
  boardState[6] + boardState[7] + boardState[8] === 'OOO' ||
  boardState[0] + boardState[3] + boardState[6] === 'OOO' ||
  boardState[1] + boardState[4] + boardState[7] === 'OOO' ||
  boardState[2] + boardState[5] + boardState[8] === 'OOO' ||
  boardState[0] + boardState[4] + boardState[8] === 'OOO' ||
  boardState[2] + boardState[4] + boardState[6] === 'OOO') {
    message.innerHTML = 'PLAYER TWO WIN!'
    return;
  }
};

const checkDraw = () => {
  if (turnCounter === 9) {
    message.innerHTML ='DRAW!';
  }
};

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

