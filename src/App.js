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

    // const pictures = this.state.pictures.filter(picture => picture.id === id);

    if(this.state.pictures.filter(picture => picture.id === id)){
    }
    this.setState({ 
      score: this.state.score + 1,
     });
    // const pictures = this.state.pictures.filter(picture => picture.id === id);

    // this.setState({ pictures });

  };

  tScoreHandler = id => {
    if(this.state.pictures.filter(picture => picture.id === id)){
    }
    this.setState({ 
      tscore: this.state.tscore + 1,
     });
  };

  render() {
    return (
      <Wrapper>
        <Title>
          <ul>
            <li className="game-name">Click Game</li>
            <li>Click an image to start game!</li>
            <li className="score">Score: {this.state.score}<span className="topscore">| Top Score: {this.state.tscore}</span></li>
          </ul>
          </Title>
          {this.state.pictures.map(picture => (
            <Game
            id={picture.id}
            key={picture.id}
            image={picture.image}
            scoreHandler={this.state.score}
            tScoreHandler={this.state.tscore}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
