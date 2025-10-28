import React, { useEffect, useState } from "react";
import TodoCard from "./components/TodoCard";
import toast,{Toaster} from "react-hot-toast";
function App() {
  const [todoItem, setTodoItem] = useState({
    task: "",
    priority: "",
  });

  const [todoList, setTodoList] = useState([]);
  const [selectedTab,setSelectedTab] = useState("All");
  useEffect(()=>{
    if (todoList.length == 0) return;
    
    localStorage.setItem("todoList",JSON.stringify(todoList));
  },[todoList]);

  useEffect(()=>{
    const todolistFromLocalStore = JSON.parse(localStorage.getItem("todoList") || "[]");
     setTodoList(todolistFromLocalStore);
  },[])

  const onDelete = (index)=>{
    const listafterDelete = todoList.filter((_,i) => i != index);
    setTodoList(listafterDelete)
  }
  return (
    <>
      <div className="bg-pink-100 min-h-screen overflow-scroll">
        <div>
          <h1 className="text-3xl md:text-4xl text-center text-blue-600 mt-2 bg-blue-200 p-2 ">
            TODO-APP📝
          </h1>
        </div>
        <div className="flex flex-row justify-center align-center mt-5">
          <input
            type="text"
            placeholder="Enter task"
            value={todoItem.task}
            onChange={(e) => {
              setTodoItem({
                ...todoItem,
                task: e.target.value,
              });
            }}
            className="w-[500px] md:w-[700px] bg-amber-300 p-4 rounded-lg "
          />
          <select
            className="text-[12px] md:text-xl ml-2 bg-orange-300 rounded-lg text-center w-24 md:w-40"
            onChange={(e) => {
              setTodoItem({
                ...todoItem,
                priority: e.target.value,
              });
            }}
            value={todoItem.priority}
          >
            <option value={""}>Select Priority</option>
            <option value={"High"}>High</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Low"}>Low</option>
          </select>
          <button
            className="bg-blue-300 w-[100px] md:w-[150px] p-1 ml-2 md:ml-5 md:p-2 rounded-lg text-[16px] md:text-xl cursor-pointer"
            onClick={() => {
              if(!todoItem.task || !todoItem.priority){
                toast.error("Sorry!! No task and priority added");
                return;
               
              }
              setTodoList([todoItem, ...todoList]);
              setTodoItem({
                task: "",
                priority: "",
              });
            
            toast.success("Task added successfully")}}
          >
            Add
          </button>
        </div>
        <div>
          {todoList.map((listitem, index) => {
            const { task, priority } = listitem;

            return <TodoCard key={index} task={task} priority={priority} index={index} onDelete={onDelete}/>;
          })}
        </div>
        <div className="flex justify-between bottom-1 fixed border-t-2 border-slate-400 pb-2">
          {["All","High","Medium","Low"].map((tab,i) => {
            return(
              <span 
              className={`block w-[250px] text-xl text-center rounded-bl-lg rounded-br-lg`}>
              {tab}</span>
            )
          })}
        </div>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
