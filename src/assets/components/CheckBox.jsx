const CheckBox = ({ taskDivClass, setTaskDivClass }) => {
  return (
    <input
      type="checkbox"
      onClick={() => {
        taskDivClass === "non-striped-task"
          ? setTaskDivClass("striped-task")
          : setTaskDivClass("non-striped-task");
      }}
      className="check-box"
    />
  );
};

export default CheckBox;
