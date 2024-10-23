import React, { useCallback, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  function takeTask(e) {
    setTask(e.target.value);
  }

  function taskDone(tick) {
    let tsk = 0;
    let newlist = tasklist.filter((i, idx) => {
      if (idx !== tick) {
        return i;
      } else {
        tsk = { text: i.text, done: !i.done };
      }
    });
    newlist = [...newlist, tsk];
    setTasklist(newlist);
  }
  const addTask = useCallback(() => {
    if (task !== "") {
      setTasklist((prev) => [{ text: task, done: false }, ...prev]);
      setTask("");
    }
  }, [task]);

  function handleEdit(edt, newText) {
    const newlist = tasklist.map((i, idx) => {
      if (idx === edt) {
        return { text: newText, done: i.done };
      } else {
        return i;
      }
    });
    setTasklist(newlist);
  }

  function handleDelete(del) {
    const newTasklist = tasklist.filter((i, idx) => {
      if (idx != del) {
        return i;
      }
    });
    setTasklist(newTasklist);
  }

  return (
    <div className="main">
      <div className="setTask">
        <input
          type="text"
          placeholder="Enter Here"
          onChange={takeTask}
          value={task}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="tasklist">
        {tasklist.map((i, index) => (
          <Card
            key={index}
            text={i.text}
            index={index}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            taskDone={taskDone}
            done={i.done}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

