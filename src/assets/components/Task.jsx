import DeleteButton from "./DeleteButton";
import CheckBox from "./CheckBox";
import { useState } from "react";

const Task = ({ taskTab, setTaskTab, element, index }) => {
  const [taskDivClass, setTaskDivClass] = useState("non-striped-task");

  return (
    <li key={index} id={element.id}>
      <CheckBox taskDivClass={taskDivClass} setTaskDivClass={setTaskDivClass} />
      <div className={taskDivClass}>{element.title}</div>
      <DeleteButton
        taskTab={taskTab}
        setTaskTab={setTaskTab}
        element={element}
      />
    </li>
  );
};

export default Task;
