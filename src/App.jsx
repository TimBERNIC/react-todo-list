import "./App.css";
import "./assets/components/Header.css";
import "./assets/components/Footer.css";
import { useState } from "react";
import { FaRegListAlt } from "react-icons/fa";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import TaskList from "./assets/components/TaskList";
import Form from "./assets/components/Form";

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
          <Form
            task={task}
            setTask={setTask}
            taskTab={taskTab}
            setTaskTab={setTaskTab}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
