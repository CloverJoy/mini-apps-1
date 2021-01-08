import React from 'react';
import Circle from './Circle.jsx';

const numbers = [0, 1, 2, 3, 4, 5, 6];

const Row = (props) => {
  return (
    <div>
      {props.row.map((row, rownnum) => <Circle rownum = {rownnum} colnum = {props.colnum} handleClick = {props.handleClick} key = {`row ${rownnum}`}/>)}
    </div>
  )
};

export default Row;