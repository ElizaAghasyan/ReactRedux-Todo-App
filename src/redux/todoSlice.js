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
    },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
