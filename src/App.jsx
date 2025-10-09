import { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';



function App() {
   


  return (
    
    <div className='flex w-screen h-screen bg-gray-800 p-10 text-white'>
      <Create/>
      <Read/>

    </div>
     
      
    
  )
}

export default App
