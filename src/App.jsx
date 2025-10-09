import { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';



function App() {
   


  return (
    
    <div className='flex w-screen h-screen p-10 bg-gradient-to-r from-white-500/50 to-indigo-500/50 backdrop-blur-md'>
      <Create/>
      <Read/>

    </div>
     
      
    
  )
}

export default App
