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

