import React from "react";

function Display(props) {
  return (
    <div className="display">
      <img src={props.img} className="display-img" alt=""></img>
      <h4>
        <b>{props.title}</b>
      </h4>
      <p>{props.description}</p>
    </div>
  );
}

export default Display;
