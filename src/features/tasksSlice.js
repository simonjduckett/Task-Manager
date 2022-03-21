import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: [],
        allTasks: []
    },
    reducers: {
        loadList: (state, action) => {
            state.value = state.allTasks.filter(item => item.projectId === action.payload.id)
            console.log(action)
        },
        addTask: (state, action) => {
            state.allTasks = [action.payload, ...state.allTasks]
            console.log(state.allTasks)
        },
        removeTask: (state, action) => {
            let x = window.confirm('really delete?');
            if(x) {
                state.allTasks = state.allTasks.filter(item => item.id !== action.payload)
            }
        },
        done: (state, action) => {
            console.log(action.payload)
            let done = [];
            let todo = [];
            state.allTasks.forEach(item => {
                //set clicked item to done
                item.id === action.payload.id ? item.done = action.payload.done : null
                item.done ? done.push(item) : todo.push(item)
            });
            state.allTasks = [...todo, ...done];
        },
        load: (state) => {
            state.value = JSON.parse(localStorage.getItem("todolist"))
        }
    }
})

export const { addTask, removeTask, done, load, loadList } = tasksSlice.actions

export default tasksSlice.reducer