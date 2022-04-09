import { createSlice } from '@reduxjs/toolkit'

const save = (value) => {
    localStorage.setItem("notes", JSON.stringify(value));
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        projectNotes: [],
        allNotes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []
    },
    reducers: {
        loadNotes: (state, action) => {
            state.projectNotes = state.allNotes.filter(item => item.projectId === action.payload.id)
        },
        addNote: (state, action) => {
            state.allNotes = [...state.allNotes, action.payload]
            save(state.allNotes)
        },
        removeNote: (state, action) => {
            state.allNotes = state.allNotes.filter(item => item.id !== action.payload)
            save(state.allTasks)
        },
        removeProjectNotes: (state, action) => {
            state.allNotes = state.allNotes.filter(item => item.projectId !== action.payload.id)
            save(state.allNotes)
        }
    }
})

export const { loadNotes, addNote, removeNote, removeProjectNotes } = notesSlice.actions

export default notesSlice.reducer