import React from "react";
import Avatar from "../Assets/Avtar.png";

function CardsComponents(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-image" alt=""></img>
      <h4>
        <b>{props.title}</b>
      </h4>
      <p>{props.description}</p>
    </div>
  );
}

export default CardsComponents;
