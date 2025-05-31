import { useState } from "react";
import { FaTrash } from "react-icons/fa";
const Task = ({ taskTab, setTaskTab, element }) => {
  const [taskDivClass, setTaskDivClass] = useState("non-striped-task");

  return (
    <li key={element.id} id={element.id}>
      <input
        type="checkbox"
        onClick={() => {
          const foundTask = taskTab.find(
            (taskTabElement) => taskTabElement.id === element.id
          );

          taskDivClass === "non-striped-task"
            ? setTaskDivClass("striped-task")
            : setTaskDivClass("non-striped-task");
        }}
      />
      <div className={taskDivClass}>{element.title}</div>
      <button
        onClick={() => {
          const foundTaskIndex = taskTab.findIndex(
            (taskTabElement) => taskTabElement.id === element.id
          );

          const taskTabCopy = [...taskTab];
          taskTabCopy.splice(foundTaskIndex, 1);
          setTaskTab(taskTabCopy);
        }}>
        <FaTrash />
      </button>
    </li>
  );
};

export default Task;
