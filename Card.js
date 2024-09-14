import React, { useState } from "react";

export default function Card(props) {
  let [style, setStyle] = useState("none");
  return (
    <div className="task">
      <p style={{ textDecoration: style }}>{props.text}</p>
      <div className="imgs">
        <div onClick={() => setStyle("line-through")} className="img">
          <i className="fa-solid fa-check"></i>
        </div>
        <div onClick={() => setStyle("none")} className="img">
          <i class="fa-solid fa-rotate-left"></i>
        </div>
      </div>
    </div>
  );
}
