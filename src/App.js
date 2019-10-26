import React from 'react';
import Game from './components/Game';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import './App.css';
// import pictures from "./pictures.json";

// class App extends Component {
//   state = {
//     pictures,
//     message: "Click a picture to start!",
//     score: 0,
//     tscore: 0
//   };
  
  // scoreHandler = (id, clicked) => {

  //   // const pictures = this.state.pictures.filter(picture => picture.id === id);

  //   if(this.state.pictures.filter(picture => picture.id === id)){
  //   }
  //   this.setState({ 
  //     score: this.state.score + 1,
  //    });
  //   // const pictures = this.state.pictures.filter(picture => picture.id === id);

  //   // this.setState({ pictures });

  // };

  // tScoreHandler = id => {
  //   if(this.state.pictures.filter(picture => picture.id === id)){
  //   }
  //   this.setState({ 
  //     tscore: this.state.tscore + 1,
  //    });
  // };

  function App() {
    return (
      <Wrapper>

        <Title />
        
        <Game />

      </Wrapper>
    );
  }
// }

export default App;
