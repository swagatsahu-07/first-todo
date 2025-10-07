import React from 'react'

const Read = (props) => {
    const todos = props.todos;
     const setTodos = props.setTodos; 
 
     const deleteHandler = (id) => {
        setTodos(todos.filter((item) => item.id != id))
     }

   const renderUser =  todos.map((val) => {
    return <li className='mb-4 flex justify-between items-center p-4 bg-gray-900 rounded' key={val.id}>
        <span className='text-xl font-thin'>{val.task}</span>  <button className='text-sm font-thin text-red-400' onClick={() => deleteHandler(val.id)}>Delete</button></li>
   })
  return (
     
     <div className='w-[50%] text-5xl font-thin p-10'>
        <h1 className='text-5xl text-thin'><span className='text-pink-800'>Pending</span> Tasks</h1>
     <br /><br />
      <ol>{renderUser}</ol> 
     </div>
    
  )
}

export default Read