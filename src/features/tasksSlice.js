import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: []
    },
    reducers: {
        addTask: (state, action) => {
            state.value = [...state.value, action.payload]
            console.log(state.value)
        },
        removeTask: (state, action) => {
            let x = window.confirm('really delete?');
            if(x) {
                state.value = state.value.filter(item => item.id !== action.payload)
            }
        },
        done: (state, action) => {
            console.log(action.payload)
            let arr = [];
            state.value.forEach(item => {
                item.id === action.payload.id ? item.done = action.payload.done : null
                arr.push(item)
            });
            state.value = arr;
        }
    }
})

export const { addTask, removeTask, done } = tasksSlice.actions

export default tasksSlice.reducer