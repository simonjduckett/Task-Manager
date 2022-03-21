import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasksSlice'
import projectsReducer from './features/projectsSlice'
import settingsReducer from './features/settingsSlice'

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        projects: projectsReducer,
        settings: settingsReducer
    }
})