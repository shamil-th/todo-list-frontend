import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { createTask, showTasks } from "../features/todoSlice";

const CreateTask = ({currentPriority,setCurrentPriority}) => {
    const [dueDate,setDueDate] = useState('')
    const [description,setDescription] = useState('')
    const [task,setTask] = useState('')

    let dispatch = useDispatch()
    const createNewTask = () => {
        let priority;
        if(currentPriority==='all'){
             priority = 'optional'
        }
        else{
             priority = currentPriority;
        }
        const data = {
            priority,
            dueDate,
            description,
            task,
            completed:false
        }
        // console.log(data)
        dispatch(createTask(data));
        setTimeout(() => {
            dispatch(showTasks())
            }, 400);
        clearform();

    } 
const clearform = () => {
    setCurrentPriority('all');
    setDueDate('');
    setDescription("");
    setTask("");
}
  return (
    <div className="add-task-container">
      <div className="add-task-row">
        <input type="text" placeholder="Add new task..." id="new-task" value={task} onChange={(e)=>setTask(e.target.value)} />
        <select id="task-filter" value={currentPriority} onChange={(e)=>setCurrentPriority(e.target.value)}>
          <option value="all">All</option>
          <option value="urgent">Urgent</option>
          <option value="important">Important</option>
          <option value="optional">Optional</option>
        </select>
      </div>
      <textarea
        name=""
        id=""
        cols="50"
        rows="5"
        placeholder="enter description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      ></textarea>
      <div className="add-task-row">
        <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
        <button id="add-task-button" onClick={createNewTask}>+</button>
      </div>
    </div>
  );
};

export default CreateTask;
