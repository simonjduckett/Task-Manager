import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: []
    },
    reducers: {
        addTask: (state, action) => {
            state.value = [action.payload, ...state.value]
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
            let done = [];
            let todo = [];
            state.value.forEach(item => {
                //set clicked item to done
                item.id === action.payload.id ? item.done = action.payload.done : null
                item.done ? done.push(item) : todo.push(item)
            });
            state.value = [...todo, ...done];
        },
        load: (state) => {
            state.value = JSON.parse(localStorage.getItem("todolist"))
        }
    }
})

export const { addTask, removeTask, done, load } = tasksSlice.actions

export default tasksSlice.reducer