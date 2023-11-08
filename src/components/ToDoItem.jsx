import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from 'store/todoSlice';


 const ToDoItem = ({ id, text, completed }) => {
const dispatch = useDispatch();

  return (
    <li>
        <input type="checkbox" checked={completed} onChange={() => dispatch(toggleComplete({ id }))} />
        <span>{text}</span>
        <span style={{color: 'red', cursor: 'pointer'}} onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
    </li>
  )
}

export default ToDoItem