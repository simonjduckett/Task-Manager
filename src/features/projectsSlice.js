import { createSlice } from '@reduxjs/toolkit'

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        value: []
    },
    reducers: {
        //write these functions properly
        addProject: (state, action) => {
            state.value = [action.payload, ...state.value]
            console.log(state.value)
        },
        removeProject: (state, action) => {
            let x = window.confirm('really delete?');
            if (x) {
                state.value = state.value.filter(item => item.id !== action.payload)
            }
        },
        loadProject: (state) => {
            state.value = JSON.parse(localStorage.getItem("todolist"))
        }
    }
})

export const { addProject, removeProject, loadProject } = projectsSlice.actions

export default projectsSlice.reducer