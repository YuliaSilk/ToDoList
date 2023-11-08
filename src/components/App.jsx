import { useState } from "react";
import ToDoList from "./ToDoList";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice"

export const App = () => {

  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({text}))
    setText('');
  };

  return(
    <div>
     <InputField text={text}
      handleInput={setText}
      handleSubmit={addTask}/>
    <ToDoList   />
    </div>
  )
}


// ;


  // const addTodo = () => {
  //   if(text.trim().length) {
  //     setTodos([
  //       ...todos,
  //     {
  //       id: new Date().toISOString(),
  //       text,
  //       completed: false,
  //     }
  //     ])
  //     setText(" ");
  //   }
    
  // }

// const removeTodo = (todoId) => {
//   // setTodos(todos.filter(todo => todo.id !== todoId))
// }

// const toggleComlete = (todoId) => {
//   setTodos (todos.msp(todo => {
//     if(todo.id !== todoId) return todo;

//     return {
//       ...todo,
//       completed: !todo.comleted,
//     }
//   }))
// }