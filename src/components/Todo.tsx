import {type TodoId, Todo as TodoType} from '../types'
import { Checked, CheckedLine } from '../icons/Icons'
import { XIcon } from '../icons/Icons'
import { useRef } from 'react'

interface Props extends TodoType{
    handleCompleted: ({ id }: TodoId) => void,
    handleDelete: ({ id }: TodoId) => void,
    handleChangeValue: ({id , title}: Pick<TodoType, 'id' | 'title'>) => void
}
const Todo: React.FC<Props> = ({ id, handleCompleted, handleDelete ,isCompleted, handleChangeValue ,title})  => {
  const valueRef = useRef<HTMLInputElement>(null)
  const handleChangeInput = () => {
      const query = valueRef.current!.value
      handleChangeValue({id, title: query})
      if(!query){
        handleDelete({id})
      }
    }
  return (
      <div className='flex items-center justify-center gap-2 w-80'>
          <span onClick={() => handleCompleted({id})} 
                className= 'font-bold rounded-full cursor-pointer '>
                {isCompleted ? <Checked /> : <CheckedLine />}
          </span>

          <div className="w-full p-2 text-xl font-semibold rounded-lg inputDiv text-slate-950 bg-emerald-400 ">
                <span contentEditable='true'  ref={valueRef} className='text-center bg-transparent outline-none w-fit' onChange={() => handleChangeInput()}>{title} </span>
          </div>

                
            <button onClick={() => handleDelete({id})} >
                    <XIcon />
            </button>
      </div>
          
  )
}

export default Todo