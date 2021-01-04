let boardState =
['', '', '',
'', '', '',
'','',''];

let turnCounter = 0;


const playerOneTurn = () => {
  for (let i = 0; i <= 8; i++) {
    var current = document.getElementById(i);
    current.addEventListener('click', (event) => {
      if (!event.target.innerText) {
        console.log('Fired!')
        event.target.innerHTML = 'X';
      }
    });
  }
}

const gameStart = () => {
  playerOneTurn();
}

gameStart();

