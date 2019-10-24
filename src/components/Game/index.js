import React from "react";
import "./style.css";

function Game(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} onClick={() => props.scoreHandler}/>
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default Game;