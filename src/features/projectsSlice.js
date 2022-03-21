import { createSlice } from '@reduxjs/toolkit'

const save = (value) => {
    localStorage.setItem("projects", JSON.stringify(value));
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        value: localStorage.getItem("projects") ? JSON.parse(localStorage.getItem("projects")) : []
    },
    reducers: {
        //write these functions properly
        addProject: (state, action) => {
            state.value = [...state.value, action.payload]
            save(state.value)
        },
        removeProject: (state, action) => {
            console.log(action.payload)
            let x = window.confirm('really delete?');
            if (x) {
                state.value = state.value.filter(item => item.id !== action.payload.id)
                save(state.value)
            }
        },
        loadProject: (state) => {
            state.value = JSON.parse(localStorage.getItem("todolist"))
        }
    }
})

export const { addProject, removeProject, loadProject } = projectsSlice.actions

export default projectsSlice.reducer