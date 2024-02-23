import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, showTasks } from "../features/todoSlice";
import EditTask from "./EditTask";

const TaskCard = ({ task }) => {
    const [modal,setModal] = useState(false)
  let dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch(removeTask(id));
    setTimeout(() => {
      dispatch(showTasks());
    }, 400);
  };

  return (
    <div className="task-card">
      <div className="taskcard_header">
        <div className="task_name">
            {task.completed?  <h3 className="completed_task"><del>{task.task}</del></h3> :  <h3>{task.task}</h3>}
         
          <p>{task.dueDate}</p>
          <p>{task.description}</p>
          <div>
            <button onClick={()=>setModal(true)}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        </div>
      </div>
      {modal &&<EditTask setModal={setModal} task={task}/>}
    </div>
  );
};

export default TaskCard;
