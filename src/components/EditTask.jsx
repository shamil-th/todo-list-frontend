import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showTasks, updateTask } from "../features/todoSlice";

const EditTask = ({ setModal, task }) => {
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [description, setDescription] = useState(task.description);
  const [currentTask, setCurrenttask] = useState(task.task);
  const [completed, setCompleted] = useState(task.completed);
  const [priority, setPriority] = useState(task.priority);

  let dispatch = useDispatch();

  const editTask = (id) => {
    const data = {
      task: currentTask,
      dueDate,
      description,
      completed,
      priority,
    };
    dispatch(updateTask({ id, data }));
    setTimeout(() => {
      dispatch(showTasks());
    }, 300);
    setModal(false);
  };
  
  const updateStatus = () => {
    setCompleted(!completed)
  }

  return (
    <div className="overlay">
      <div className="edit_form">
        <input type="text" value={currentTask} onChange={(e)=>setCurrenttask(e.target.value)} />
        <select
          name=""
          id=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="all">All</option>
          <option value="urgent">Urgent</option>
          <option value="important">Important</option>
          <option value="optional">Optional</option>
        </select>
        <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="status">Completed</label>
        <input type="checkbox" id="status" value={completed} onChange={(e)=>updateStatus()} checked={completed}/>
        <div>
          <button onClick={() => setModal(false)}>Cancel</button>
          <button onClick={() => editTask(task._id)}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
