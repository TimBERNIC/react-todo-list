import { useState } from "react";
import Task from "./Task";
const TaskList = ({ taskTab, setTaskTab }) => {
  return (
    <ul className="task-list-box">
      {taskTab.map((element) => {
        return (
          <Task taskTab={taskTab} element={element} setTaskTab={setTaskTab} />
        );
      })}
    </ul>
  );
};

export default TaskList;
