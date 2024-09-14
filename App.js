import React, { useCallback, useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
function App() {
  let [task, setTask] = useState("");
  let [taskList, setTaskList] = useState([]);

  const takeTask = useCallback((e) => {
    setTask(e.target.value);
  });

  const addTask = useCallback(() => {
    if (task.trim() != "") {
      setTaskList((previtem) => [...previtem, task]);
      setTask("");
    }
  }, [task]);
  return (
    <div className="main">
      <h1>To Do List</h1>
      <div className="task-set">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={takeTask}
        />
        <button onClick={addTask}>+</button>
      </div>
      <div className="tasks">
        {taskList.map((i) => (
          <Card key={i} text={"*" + i} />
        ))}
      </div>
    </div>
  );
}

export default App;
