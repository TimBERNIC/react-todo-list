import { FaTrash } from "react-icons/fa";
const DeleteButton = ({ taskTab, setTaskTab, element }) => {
  return (
    <button
      onClick={() => {
        const foundTaskIndex = taskTab.findIndex(
          (taskTabElement) => taskTabElement.id === element.id
        );

        const taskTabCopy = [...taskTab];
        taskTabCopy.splice(foundTaskIndex, 1);
        setTaskTab(taskTabCopy);
      }}
      className="delete-button">
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
