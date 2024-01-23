
  import Todos from './Todos'
  function RenderTodos() {
    
    return (
      <div className='flex flex-col items-center justify-center h-auto bg-black border-2  border-slate-500 w-96 '>
          <article className="py-5  text-white container__initialtext w-fit  text-center">
              <h1 className='text-5xl font-semibold '>Welcome!</h1>
              <h3 className='text-xl pt-3 ' >What goal will you achieve today?</h3>
              <Todos />
          </article>

      </div>

          
    )
  }

  export default RenderTodos