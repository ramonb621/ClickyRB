import React, { Component } from 'react';
import Game from './components/Game';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import './App.css';
import pictures from "./pictures.json";

class App extends Component {
  state = {
    pictures,
    score: 0,
    tscore: 0
  };
  scoreHandler = id => {

    const pictures = this.state.pictures.filter(picture => picture.id === id);

    this.setState({ pictures });
  };

  render() {
    return (
      <Wrapper>
        <Title>
          <ul>
            <li className="game-name">Click Game</li>
            <li>Click an image to start game!</li>
            <li className="score">Score: {this.state.score} <span className="topscore">| Top Score: {this.state.tscore}</span></li>
          </ul>
          </Title>
          {this.state.pictures.map(picture => (
            <Game
            id={picture.id}
            image={picture.image}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
