import DeleteButton from "./DeleteButton";
import CheckBox from "./CheckBox";
import { useState } from "react";

const Task = ({ taskTab, setTaskTab, element, index }) => {
  const [taskDivClass, setTaskDivClass] = useState("non-striped-task");
  const [comment, setComment] = useState(false);
  return (
    <>
      <li key={index} id={element.id}>
        <CheckBox
          taskDivClass={taskDivClass}
          setTaskDivClass={setTaskDivClass}
        />
        <div className={taskDivClass}>{element.title}</div>
        <DeleteButton
          taskTab={taskTab}
          setTaskTab={setTaskTab}
          element={element}
        />
      </li>
      <div className="comment-box">
        <button
          onClick={() => {
            comment ? setComment(false) : setComment(true);
          }}
          className="comment-button">
          comment
        </button>
        {comment && <textarea placeholder="Détails" className="text-area" />}
      </div>
    </>
  );
};

export default Task;
