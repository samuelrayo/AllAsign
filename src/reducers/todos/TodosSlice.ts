import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../types'


interface typeState {
    todosList: Todo[]
}

const initialState : typeState = {
    todosList: [
        {
        id: '2',
        title: 'Todo 2',
        isCompleted: false
        }
        
    ] 
}

// @ts-expect-error In localStorage, the expected type should be unknown
const saveInLocalStorage = (data: unknown) => {
    localStorage.setItem('todosListLS', JSON.stringify(data) )
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const info : Todo = action.payload
            state.todosList = [...state.todosList, info]
            saveInLocalStorage(state.todosList)
        },
        removeTodo: (state, action) => {
            const productId = action.payload
            state.todosList = state.todosList.filter(todo => todo.id !== productId)
            saveInLocalStorage(state.todosList)
        },
        toggleComplete : (state, action) => {
            const todoInfo = action.payload
            const todo = state.todosList.find(todo => todo.id === todoInfo)
                if(todo){
                    todo.isCompleted = !todo.isCompleted    
                }
            saveInLocalStorage(state.todosList)
        },
        updateTodo: (state, action) =>{
            const { id, title } = action.payload

            const todoToUpdate = state.todosList.map(todo => todo.id === id ? {...todo, title}: todo)
            state.todosList = todoToUpdate
            saveInLocalStorage(state.todosList)
        }, 
        loadDataLS: (state) =>{
            const dataSaved = localStorage.getItem('todosListLS')
            if(dataSaved){
                const datos = JSON.parse(dataSaved)
                state.todosList = datos
            }
        }
    
}
})

export const { addTodo, removeTodo, toggleComplete, updateTodo, loadDataLS} = todoSlice.actions

export default todoSlice.reducer