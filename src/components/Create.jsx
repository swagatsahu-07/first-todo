import React from 'react'
// import { useState } from 'react'
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import {toast} from 'react-toastify'
 

const Create = (props) => {
     const todos = props.todos;
     const setTodos = props.setTodos;

    // const [taskInput,setTaskInput] = useState("");
   const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submitHandler = (data) => {
    //  e.preventDefault();
         
    // console.log(data);
    data.isCompleted = false;
    data.id = nanoid();


    setTodos([...todos,data]);
    toast.success("Todo Created");

    reset();

    
    //  const newTodos = {
    //   id : nanoid(),
    // //   task : taskInput,
    //   isCompleted : false
    //  }
    
    //  setTodos([...todos,newTodos]);
    //  setTaskInput("")
   }
//   console.log(errors);
  

  return (
     
      <div className=' w-[80%] p-10'>
        <h1 className='mb-10 text-5xl text-thin'>Set <span className='text-red-800 text-thin'>Remainders</span> for <br />tasks</h1>
         <form onSubmit={handleSubmit(submitHandler)}>
      <input 
      {...register("task" , {required : "task cannot be empty"})}
      className='p-2 border-b w-full text-2xl font-thin outline-0' 
      type="text" 
      placeholder='create task here' 
    //   onChange={(e) => setTaskInput(e.target.value)}
    //   value={taskInput}
      /> 
      {/* {errors && errors.task && errors.task.message && (<small>{errors.task.message}</small>)}  */}
      <small className='text-red-400 text thin'>{errors?.task?.message}</small>
      <br /><br />
      <button className='text-xl px-10 py-2 border rounded'>Add Task</button>
      </form>
      </div>
    
  )
}

export default Create