import React from "react";
import "./style.css";


const Game = props => {
  return (
    <div className="card-options">
      <div className="img-container">
        <img key={props.id} alt={props.id} src={props.image} onClick={() => props.scoreHandler(props.id, props.clicked)}/>
      </div>
    </div>
  );
}

export default Game;