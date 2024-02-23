import React from 'react'
import { useSelector } from 'react-redux'

const TaskFooter = () => {
    const taskCount = useSelector((state) => state.todoList.taskCount);
  return (
    <footer>
    Total tasks: {taskCount} <span id="total-tasks"></span>, Completed:
    <span id="completed-tasks"></span>
  </footer>
  )
}

export default TaskFooter