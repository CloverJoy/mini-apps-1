let boardState =
['', '', '',
'', '', '',
'','',''];
let message = document.getElementById('message');
let endgameMessage = document.getElementById('endgame');

let turnCounter = 0;
let playerOneWin = false;
let playerTwoWin = false;
let isDraw = false;

const refreshBoard = () => {
  boardState =
  ['', '', '',
  '', '', '',
  '','',''];
  turnCounter = 0;
  playerOneWin = false;
  playerTwoWin = false;
  isDraw = false;
  for (let i = 0; i <= 8; i++) {
    let current = document.getElementById(i);
    current.innerHTML = '';
  }
  message.innerHTML = 'Your Turn: Player 1';
  endgameMessage.innerHTML = '';
  gameStart();
}

const playerOneTurn = (i) => {
  message.innerHTML = 'Your Turn: Player 2';
  console.log('Player 1 Fired! turn: ' + turnCounter);
  event.target.innerHTML = 'X';
  boardState[i] = 'X';
  console.log(boardState);
  turnCounter ++;
  checkDraw();
  checkWinCon()
  if (isEndGame()) {
    endGame();
  };
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
  if (isEndGame()) {
    endGame();
  }
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
    playerOneWin = true;
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
    playerTwoWin = true;
    return;
  }
};

const checkDraw = () => {
  if (turnCounter === 9) {
    message.innerHTML ='DRAW!';
    isDraw = true;
  }
};

const isEndGame = () => {
  if (playerOneWin || playerTwoWin || isDraw) {
    return true;
  }
  return false;
}

const endGame = () => {
  endgameMessage.innerHTML = 'Game Over! Click me for new game!'
  endgameMessage.addEventListener('click', (event) => {
    refreshBoard();
  });
}

const gameStart = () => {
  for (let i = 0; i <= 8; i++) {
    var current = document.getElementById(i);
    current.addEventListener('click', (event) => {
      if (isEndGame()) {
        endGame();
      } else if (!event.target.innerText && turnCounter % 2 === 0) {
        playerOneTurn(i);
      } else if (!event.target.innerText && turnCounter % 2 === 1) {
        playerTwoTurn(i);
      }
    });
  }
}

gameStart();

