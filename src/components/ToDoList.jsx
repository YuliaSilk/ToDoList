import React from 'react'
import TodoItem from './ToDoItem';
import { useSelector } from 'react-redux';

const ToDoList = () => {
const todos = useSelector(state => state.todos.todos);

  return (
    <ul>
        {todos.map(todo => 
        <TodoItem key={todo.id} 
          {...todo}/> )}
    </ul>
  )
}

export default ToDoList