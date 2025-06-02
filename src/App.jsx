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
  const [commentBox, setCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  console.log(taskTab);

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
            <TaskList
              taskTab={taskTab}
              setTaskTab={setTaskTab}
              comment={comment}
              setComment={setComment}
              commentBox={commentBox}
              setCommentBox={setCommentBox}
            />
          </div>
          <Form
            task={task}
            setTask={setTask}
            taskTab={taskTab}
            setTaskTab={setTaskTab}
            comment={comment}
            commentBox={commentBox}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
