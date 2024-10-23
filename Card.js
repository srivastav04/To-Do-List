import React, { useState, useEffect } from "react";

export default function Card(props) {
  const { handleDelete, index, text, handleEdit, taskDone, done } = props;

  let [edit, setEdit] = useState(false);
  let [txt, setTxt] = useState(text);

  useEffect(() => {
    setTxt(text);
  }, [text]);

  function setEditText() {
    setEdit(false);
    handleEdit(index, txt);
  }

  function takeNewTask(e) {
    setTxt(e.target.value);
    console.log("takeNewTask");
  }
  return (
    <div className="task-card">
      <div className="checked" onClick={() => taskDone(index)}>
        {done ? (
          <i className="fa-solid fa-square-check fa-xl"></i>
        ) : (
          <i className="fa-regular fa-square-check fa-xl"></i>
        )}
      </div>

      <div className="text-area">
        {edit ? (
          <input
            className="edit-task-input"
            type="text"
            value={txt}
            onChange={takeNewTask}
          />
        ) : (
          <div className="text">{txt}</div>
        )}
      </div>
      <div className="icons">
        <div className="delete" onClick={() => handleDelete(index)}>
          <i className="fa-solid fa-trash"></i>
        </div>
        <div className="edit">
          {edit ? (
            <i className="fa-solid fa-check " onClick={setEditText}></i>
          ) : (
            <i
              className="fa-solid fa-pen-to-square"
              onClick={() => setEdit(true)}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}
