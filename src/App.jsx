import "./App.css";
import "./assets/components/Header.css";
import "./assets/components/Footer.css";
import Footer from "./assets/components/Footer";
import { FaRegListAlt } from "react-icons/fa";
import Header from "./assets/components/Header";
import { useState } from "react";

import TaskList from "./assets/components/TaskList";

const App = () => {
  const [task, setTask] = useState("");
  const [taskTab, setTaskTab] = useState([]);

  return (
    <>
      <Header
        icon={<FaRegListAlt color="#5C48D3" />}
        title="Todo List"
        className="container"
      />
      <main>
        <div className="container">
          <div>
            <TaskList taskTab={taskTab} setTaskTab={setTaskTab} />
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const taskTabCopy = [...taskTab];
              taskTabCopy.push({
                title: task,
                id: crypto.randomUUID(5),
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
