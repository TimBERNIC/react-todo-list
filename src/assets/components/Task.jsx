import DeleteButton from "./DeleteButton";
import CheckBox from "./CheckBox";
import { useState } from "react";
import CommentBox from "./CommentBox";

const Task = ({
  taskTab,
  setTaskTab,
  element,
  index,
  comment,
  setComment,
  commentBox,
  setCommentBox,
}) => {
  const [taskDivClass, setTaskDivClass] = useState("non-striped-task");

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
      <CommentBox
        comment={comment}
        setComment={setComment}
        taskTab={taskTab}
        setTaskTab={setTaskTab}
        commentBox={commentBox}
        setCommentBox={setCommentBox}
      />
    </>
  );
};

export default Task;
