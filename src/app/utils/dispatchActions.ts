import  {type TodoId, Todo as TodoType} from '../../types'
import { useDispatch } from 'react-redux'
import { addTodo, toggleComplete, removeTodo, updateTodo} from '../../reducers/todos/TodosSlice'

function dispatchActions(inputRef: React.RefObject<HTMLInputElement>) {
    

    const  dispatch = useDispatch()
    
    const handleCompleted = ({id}: TodoId) =>{
        dispatch(toggleComplete(id))      
      }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault()
  
      const valueRef = inputRef.current!.value
      if(!valueRef) return
      if(valueRef.startsWith(' ')) return

      const newTodo = {
          id: crypto.randomUUID(),
          title: inputRef.current!.value,
          isCompleted: false 
      }
      dispatch(addTodo(newTodo))
        
        inputRef.current!.value = ''
    }


    const handleDelete = ({ id }: TodoId) => {
      dispatch(removeTodo(id))
    }

    const handleChangeValue = ({id , title}: Pick<TodoType, 'id' | 'title'>) =>{
      dispatch(updateTodo({id, title}))
  }
  
    return { handleCompleted, handleSubmit, handleDelete, handleChangeValue }
}

export default dispatchActions