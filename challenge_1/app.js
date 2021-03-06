//variable
let xPlayer = window.prompt('X player, Enter your name: ');
let oPlayer = window.prompt('o Player, Enter your name: ');
let boardState =
['', '', '',
'', '', '',
'','',''];
let message = document.getElementById('message');
let endgameMessage = document.getElementById('endgame');
let scoreboard = document.getElementById('scoreboard');
var xWin = 0;
var oWin = 0;
scoreboard.innerHTML = `Total ${xPlayer} win: ${xWin}. Total ${oPlayer} win: ${oWin}`;
message.innerHTML = `${xPlayer} move first! after that game winner move first`;

let turnCounter = 0;
let playerOneWin = false;
let playerTwoWin = false;
let isDraw = false;
let playerOneMoveFirst = true;
//newgame variable
const refreshBoard = () => {
  if (playerOneWin) {
    xWin ++;
  }
  if (playerTwoWin) {
    oWin ++;
  }
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
  message.innerHTML = `Winner move first`;
  scoreboard.innerHTML = `Total ${xPlayer} win: ${xWin}. Total ${oPlayer} win: ${oWin}`;
  gameStart();
}
//player one move
const playerOneTurn = (i) => {
  message.innerHTML = `Loser / O turn`;
  //determine who move first here
  if (playerOneMoveFirst) {
    event.target.innerHTML = 'X';
    boardState[i] = 'X';
  } else {
    event.target.innerHTML = 'O';
    boardState[i] = 'O';
  }
  turnCounter ++;
  checkDraw();
  checkWinCon()
  if (isEndGame()) {
    endGame();
  };
}

//player two move
const playerTwoTurn = (i) => {
  message.innerHTML = `Winner / X turn`;
  //determine who move second here
  if (playerOneMoveFirst) {
    event.target.innerHTML = 'O';
    boardState[i] = 'O';
  } else {
    event.target.innerHTML = 'X';
    boardState[i] = 'X';
  }
  turnCounter ++;
  checkDraw();
  checkWinCon();
  if (isEndGame()) {
    endGame();
  }
}
//winning condition
const checkWinCon = () => {
  if (boardState[0] + boardState[1] + boardState[2] === 'XXX' ||
      boardState[3] + boardState[4] + boardState[5] === 'XXX' ||
      boardState[6] + boardState[7] + boardState[8] === 'XXX' ||
      boardState[0] + boardState[3] + boardState[6] === 'XXX' ||
      boardState[1] + boardState[4] + boardState[7] === 'XXX' ||
      boardState[2] + boardState[5] + boardState[8] === 'XXX' ||
      boardState[0] + boardState[4] + boardState[8] === 'XXX' ||
      boardState[2] + boardState[4] + boardState[6] === 'XXX') {
    message.innerHTML = `${xPlayer} WIN!`;
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
    message.innerHTML = `${oPlayer} WIN!`;
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

//check if game over
const isEndGame = () => {
  if (playerOneWin || playerTwoWin || isDraw) {
    return true;
  }
  return false;
}

//new game init
const endGame = () => {
  //check the winner to determine who move first
  if (playerTwoWin) {
    playerOneMoveFirst = false;
  } else if (playerOneWin) {
    playerOneMoveFirst = true;
  }
  endgameMessage.innerHTML = 'Game Over! Click me for new game!'
  endgameMessage.addEventListener('click', (event) => {
    refreshBoard();
  });
}
//event listener + game
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
//first init
gameStart();

