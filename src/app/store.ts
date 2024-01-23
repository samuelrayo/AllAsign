import { configureStore } from "@reduxjs/toolkit";


import todoSlice from '../reducers/todos/TodosSlice'

export default configureStore({
    reducer: {
        todos: todoSlice 
    }
})