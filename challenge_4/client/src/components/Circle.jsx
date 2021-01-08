import React from 'react';


const Circle = (props) => {
  return (
    <button onClick={props.handleClick} name={[props.rownum, props.colnum]}>()</button>
  )
};

export default Circle;