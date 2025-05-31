import Task from "./Task";
const TaskList = ({ taskTab, setTaskTab }) => {
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
            />
          </>
        );
      })}
    </ul>
  );
};

export default TaskList;
