import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, showTasks } from "../features/todoSlice";

const TaskCard = ({ task }) => {
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
          <h3>{task.task}</h3>
          <p>{task.dueDate}</p>

          <p>{task.description}</p>
          <div>
            <button>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        </div>

        <div className="checkbox">
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
