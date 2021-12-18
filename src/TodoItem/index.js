import React from "react";
import './TodoItem.css';

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span
        className={`Icon icon-checkmark ChekItem ${props.completed ? 'checked' : ''}`}
        onClick={() => props.onComplete(props.text)}
      />
      <span className={props.completed ? 'text-checked' : ''}>{props.text}</span>
      <span
        className='Icon icon-cross DeleteItem'
        onClick={() => props.onDelete(props.text)}
      />
    </li >
  );
}

export {TodoItem};
