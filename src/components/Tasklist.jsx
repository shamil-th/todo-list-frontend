import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showTasks } from "../features/todoSlice";
import TaskCard from "./TaskCard";

const Tasklist = ({currentPriority}) => {
  const tasks = useSelector((state) => state.todoList.todoList);
  const status = useSelector((state) => state.todoList.status);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(showTasks());
  }, [dispatch]);
  return (
    <div className="task-list">
      {tasks?.map((task) => (
        <>
        {currentPriority==='all'&& <TaskCard task={task} key={task._id}/>}
        {currentPriority===task.priority && <TaskCard task={task} key={task._id}/>}
        </>
      ))}
    </div>
  );
};

export default Tasklist;
