import {Trash2 as TrashIcon} from "lucide-react";
import toast,{Toaster} from "react-hot-toast";
const TASK_PRIORITY_CLASSES = {
  High: "border-t-6 border-t-red-500",
  Medium: "border-t-6 border-t-blue-500",
  Low: "border-t-6 border-t-green-500",
};

const BADGES_CLASSES = {
  High: "border-4 border-red-500 bg-red-800 text-center py-1",
  Medium: "border-4 border-blue-500 bg-blue-800 text-center py-1",
  Low: "border-4 border-green-500 bg-green-800 text-center py-1",
};

function TodoCard({ task, priority,onDelete,index }) {
  return (
    <div>
      <div
        className={`${TASK_PRIORITY_CLASSES[priority]} w-3/3 rounded-xl bg-gray-500 mt-5 text-white pl-4 shadow-lg relative h-[80px] md:h-[100px]`}
      >
        <span
          className={`${BADGES_CLASSES[priority]} w-16 text-[12px] md:text-xl md:w-26 bg-black-400 absolute top-1 left-2 rounded-xl p-2 `}
        >
          {priority}
        </span>
        <h1 className="text-[14px] md:text-xl pt-12">{task}</h1>
        
        <TrashIcon 
        onClick={()=>{onDelete(index);
        toast.success("task deleted successfully",{duration:1000});}} className="w-[60px] bg-pink-800 rounded-lg py-1 absolute top-1 right-1 border-4 border-red-900 h-8 md:h-10"/>
      </div>
      <Toaster/>
    </div>
  );
}

export default TodoCard;
