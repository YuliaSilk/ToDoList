import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
name: 'todos',
initialState: {
    todos: [],
},
reducers: {
    addTodo(state, action) {
        console.log(state);
        console.log(action);

        state.todos.push({
            id: new Date().toISOString(),
            text: action.payload.text,
            completed: false,
        })
    },
    removeTodo(state, action) {
        state.todos = state.todos.filter(todo => 
            todo.id !== action.payload.id)
    },
    toggleComplete(state, action) {
        const toggletTodo = state.todos.find(todo => todo.id === action.payload.id)
        toggletTodo.completed = !toggletTodo.completed;
    },
},
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;