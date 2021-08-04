import { createSlice } from '@reduxjs/toolkit';
import { nanoid }  from 'nanoid';

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description,
                completed: false,
            };
            state.push(newTodo);
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => {
                return todo.id !== action.payload.id
            })
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
