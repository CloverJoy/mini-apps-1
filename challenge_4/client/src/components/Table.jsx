import React from 'react';
import Row from './Row.jsx';

let numbers = [0, 1, 2, 3, 4, 5];

const Table = (props) => {
  return (
    <div>
      {props.col.map((col, colnum) => <Row colnum = {colnum} row = {props.row} key = {`column ${colnum}` } handleClick = {props.handleClick}/>)}
    </div>
  )
}

export default Table;