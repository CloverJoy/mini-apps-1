import React from 'react';
import Row from './Row.jsx';

let numbers = [0, 1, 2, 3, 4, 5];

const Table = (props) => {
  return (
    <div>
      {numbers.map((row, num) => <Row key = {`column ${num}` } />)}
    </div>
  )
}

export default Table;