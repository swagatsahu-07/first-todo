import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid';


const Create = (props) => {
     const todos = props.todos;
     const setTodos = props.setTodos;

    const [taskInput,setTaskInput] = useState("");

    const handelSubmit = (e) => {
     e.preventDefault();

     const newTodos = {
      id : nanoid(),
      task : taskInput,
      isCompleted : false
     }
    
     setTodos([...todos,newTodos]);
     setTaskInput("")
   }
  return (
     
      <div className=' w-[80%] p-10'>
        <h1 className='mb-10 text-5xl text-thin'>Set <span className='text-red-800 text-thin'>Remainders</span> for <br />tasks</h1>
         <form onSubmit={handelSubmit}>
      <input className='p-2 border-b w-full text-2xl font-thin outline-0' type="text" placeholder='create task here' 
      onChange={(e) => setTaskInput(e.target.value)}
      value={taskInput}
      required/> <br /><br />
      <button className='text-xl px-10 py-2 border rounded'>Add Task</button>
      </form>
      </div>
    
  )
}

export default Create