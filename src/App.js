import React, { Component } from "react";
import Game from './components/Game';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import './App.css';
import pictures from "./pictures.json";

class App extends Component{
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

      const { tscore, score } = this.state;
      const newScore = score + 1;
      const newTScore = newScore > tscore ? newScore : tscore;

      return this.setState({
        image: picOrder.sort(() => Math.random() - 0.5),
        message: "You picked right!",
        score: newScore,
        tscore: newTScore,
      });
    }

};

  render() {
    return (
      <Wrapper>
  
        <Title>Click Game</Title>
        <div className="game-name">

            <p className="message">{this.state.message}</p>
            <p className="score">Score: {this.state.score} | Top Score: {this.state.tscore}</p>
  
        </div>

        <div className="game-cont">
          {this.state.pictures.map( image => (
        <Game
          key={image.id}
          id={image.id}
          clicked={image.clicked}
          image={image.image}
          scoreHandler={this.scoreHandler}
          />
        ))}  
        </div>
      </Wrapper>
    );
  }
}

export default App;
