import Todo from './Todo'
import dispatchActions from '../app/utils/dispatchActions'
import { useSelector } from 'react-redux'
import { TodosList } from '../types'
import { useRef } from 'react'

/* interface Props{
    data: TodosList,
    handleDelete: ({ id }: TodoId) => void
} */

function Todos() {
// @ts-expect-error In localStorage, the expected type should be unknown 
    const dataTodos = useSelector(state => state.todos)
    
    const data: TodosList = dataTodos.todosList

    const inputRef = useRef<HTMLInputElement>(null)
    
    const { handleCompleted, handleDelete, handleSubmit, handleChangeValue } = dispatchActions(inputRef)



  return (
    <div className='w-full my-4 '>
        <form onSubmit={handleSubmit} className='text-2xl text-white '>
            <input type="text" placeholder='Make a cup of coffee' autoFocus ref= {inputRef} className='py-2 pl-5 rounded-lg bg-neutral-600 outline-teal-300'/>
        </form>
        <ul>
        {data.map(todo => (
                <li className='my-5 todoItem ' key={todo.id}>
                    <Todo handleCompleted={handleCompleted} handleDelete={handleDelete} handleChangeValue= {handleChangeValue} id={todo.id} isCompleted={todo.isCompleted} title={todo.title}  />
                </li>
        ))}
        </ul>
    </div>

)
}

export default Todos

