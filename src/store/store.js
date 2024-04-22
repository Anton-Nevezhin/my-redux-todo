import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todoSlice'
import filterReducer from './filterSlice'

export default configureStore({
    reducer: {
        todos: todosReducer,
        filter: filterReducer
    }
})
 