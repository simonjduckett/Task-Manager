import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        value: {currentProject: 75775375},
        tasks: []
    },
    reducers: {
        //write these functions properly
        setProjectId: (state, action) => {
            console.log(action.payload.id)
            state.value = {currentProject: action.payload.id}
        }
    }
})

export const { setProjectId } = settingsSlice.actions

export default settingsSlice.reducer