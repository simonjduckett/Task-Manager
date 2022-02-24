import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasksSlice'

export default configureStore({
    reducer: {
        tasks: tasksReducer
    }
})