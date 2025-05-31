const Form = ({ task, setTask, taskTab, setTaskTab }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const taskTabCopy = [...taskTab];
        taskTabCopy.push({
          title: task,
          id: crypto.randomUUID(5),
          commentBox: true,
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
