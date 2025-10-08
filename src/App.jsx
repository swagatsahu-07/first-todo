import { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';



function App() {
   const [todos,setTodos] = useState([]);


  return (
    
    <div className='flex w-screen h-screen bg-gray-800 p-10 text-white'>
        <Create todos={todos} setTodos={setTodos}/>
      <Read todos={todos} setTodos={setTodos} />

    </div>
     
      
    
  )
}

export default App
