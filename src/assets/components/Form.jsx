import CommentBox from "./CommentBox";

const Form = ({ task, setTask, taskTab, setTaskTab, comment, commentBox }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const taskTabCopy = [...taskTab];
        taskTabCopy.push({
          title: task,
          id: crypto.randomUUID(5),
          commentBox: { commentBox },
          comment: { comment },
        });
        setTaskTab(taskTabCopy);
      }}
      className="input-box">
      <input
        type="text"
        className="task-input"
        placeholder="new task"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <button className="task-button">Add task</button>
    </form>
  );
};

export default Form;
