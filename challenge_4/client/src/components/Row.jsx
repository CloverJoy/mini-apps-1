import React from 'react';
import Circle from './Circle.jsx';

const numbers = [0, 1, 2, 3, 4, 5, 6];

const Row = (props) => {
  return (
    <div>
      {numbers.map((circle, row) => <Circle key = {`row ${row}`}/>)}
    </div>
  )
};

export default Row;