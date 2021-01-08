import React from 'react';
import Table from './Table.jsx';
let col = [0, 1, 2, 3, 4, 5];
let row = [0, 1, 2, 3, 4, 5, 6];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: false,
      col,
      row,
      curRow: 0,
      curCol: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const {playerTurn} = this.state;
    this.setState({playerTurn: !playerTurn});
    console.log(playerTurn);
    console.log(event.target.name)
  }

  render() {
    return(
      <Table col={this.state.col} row={this.state.row} handleClick = {this.handleClick} playerTurn={this.state.playerTurn}/>
    )
  }
}

export default App;