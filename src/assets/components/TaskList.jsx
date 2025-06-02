import Task from "./Task";
const TaskList = ({
  taskTab,
  setTaskTab,
  comment,
  setComment,
  commentBox,
  setCommentBox,
}) => {
  return (
    <ul className="task-list-box">
      {taskTab.map((element, index) => {
        return (
          <>
            <Task
              taskTab={taskTab}
              element={element}
              setTaskTab={setTaskTab}
              index={index}
              comment={comment}
              setComment={setComment}
              commentBox={commentBox}
              setCommentBox={setCommentBox}
            />
          </>
        );
      })}
    </ul>
  );
};

export default TaskList;
