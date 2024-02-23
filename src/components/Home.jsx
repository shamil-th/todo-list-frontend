import React, { useState } from "react";
import Tasklist from "./Tasklist";
import TaskFooter from "./TaskFooter";
import CreateTask from "./CreateTask";

const Home = () => {
    const [currentPriority,setCurrentPriority] = useState('all');

  return (
    <div class="to-do-list">
      <h1>To-Do List</h1>
      <CreateTask currentPriority={currentPriority} setCurrentPriority={setCurrentPriority} />
      <Tasklist currentPriority={currentPriority}/>
      <TaskFooter />
    </div>
  );
};

export default Home;
