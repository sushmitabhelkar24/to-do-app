import React, { useState } from 'react'

function App() {
  const [todoItem,setTodoItem] = useState({
  task:"",
  priority:""
});

const [todoList,setTodoList]=useState([
  {
    task:"Task1",
    priority:"High"
  },
   {
    task:"Task2",
    priority:"High"
  },
   {
    task:"Task3",
    priority:"High"
  },
])
  return (
    <>
    <div className='bg-pink-100'>
     <div>
      <h1 className='text-3xl md:text-4xl text-center text-blue-600 mt-2 bg-blue-200 p-2 '>TODO-APP📝</h1>
    </div>
    <div className='flex flex-row justify-center align-center mt-5'>
     <input 
     type="text"
     onChange={(e)=>{
      setTodoItem({
        ...todoItem,
        task:e.target.value,
      })
     }}
     className='w-[500px] md:w-[700px] bg-amber-300 p-4 rounded-lg ' 
     />
     <select className='text-[12px] md:text-xl ml-2 bg-orange-300 rounded-lg text-center w-24 md:w-40'
     onChange={(e)=>{
      setTodoItem({
        ...todoItem,
        priority:e.target.value,
      })
     }}>
      <option value={""}>Select Priority</option>
      <option value={"High"}>High</option>
      <option value={"Medium"}>Medium</option> 
      <option value={"Low"}>Low</option>  
     </select>
     <button className='bg-blue-300 w-[100px] md:w-[150px] p-1 ml-2 md:ml-5 md:p-2 rounded-lg text-[16px] md:text-xl'
     onClick={()=>{
      setTodoList([todoItem,...todoList]);
      setTodoItem({
       task: "",
       priority: "",
      });
     }}>Add</button>
 
    </div>
       <div>
      {todoList.map((listitem,index)=>{
       const {task,priority} = listitem;

       return(
        <div key={index} className='w-3/3 rounded-xl bg-gray-500 mt-5 text-white pl-4 shadow-lg'>
          <h1>{task}</h1>
          <span>{priority}</span>
        </div>

       )
      })}
    </div>
    </div> 
    </>
  )
}

export default App
