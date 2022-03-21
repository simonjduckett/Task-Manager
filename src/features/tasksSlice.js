import { createSlice } from '@reduxjs/toolkit'

const save = (value) => {
    localStorage.setItem("todolist", JSON.stringify(value));
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: [],
        allTasks: localStorage.getItem("todolist") ? JSON.parse(localStorage.getItem("todolist")) : []
    },
    reducers: {
        loadList: (state, action) => {
            state.value = state.allTasks.filter(item => item.projectId === action.payload.id)
        },
        addTask: (state, action) => {
            state.allTasks = [action.payload, ...state.allTasks]
            save(state.allTasks)
        },
        removeTask: (state, action) => {
            let x = window.confirm('really delete?');
            if(x) {
                state.allTasks = state.allTasks.filter(item => item.id !== action.payload)
                save(state.allTasks)
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
            save(state.allTasks)
        },
        load: (state) => {
            state.value = JSON.parse(localStorage.getItem("todolist"))
        }
    }
})

export const { addTask, removeTask, done, load, loadList } = tasksSlice.actions

export default tasksSlice.reducer