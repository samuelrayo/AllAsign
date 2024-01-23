import RenderTodos from './components/RenderTodos'
import './App.css'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import  {loadDataLS}  from './reducers/todos/TodosSlice'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadDataLS())
  }, []) 
  
  return (
    <>
    <main className="w-full h-screen bg-black font-Rajdhani">
      <header className='w-[400px] h-auto mx-auto pt-4  '>
        <img src="/logoAssign.png" alt="" className='w-full h-full '/> 
      </header>
      <section className='flex items-center justify-center'>
        <RenderTodos />
      </section>
    </main>
    </>
  )
}

export default App
