import React, { Component } from "react";
import "./style.css";
import pictures from "../../pictures.json";

class Game extends Component {
  state = {
    pictures,
    message: "Click a picture to start!",
    score: 0,
    tscore: 0
  };

  scoreHandler = (id, clicked) => {

    const picOrder = this.state.pictures;

    if(clicked){
      picOrder.forEach((image, index) => {
        picOrder[index].clicked = false;
      });
      return this.setState({
        image: picOrder.sort(() => Math.random() - 0.5),
        message: "Oh no, you guessed wrong!",
        score: 0
      })
    } else {
      picOrder.forEach((image, index) => {
        if (id === image.id) {
          picOrder[index].clicked = true;
        }
      });

    }


  };

  tScoreHandler = (id, clicked) => {
    if(this.state.pictures.filter(picture => picture.id === id)){
    }
    this.setState({ 
      tscore: this.state.tscore + 1,
     });
  };


   render() {
    return (
      <div className="card">
        <div className="img-container">
          <img key={this.state.id} alt={this.state.id} src={this.state.images} onClick={this.scoreHandler}/>
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
}

export default Game;