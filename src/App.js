import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
import characters from "./characters.json";


import './App.css';

class App extends Component {
  state = {
    data: characters,
    currentScore: 0,
    topScore: 0,
    gameOver: false
  }

  // add all functions for gameplay

  // shuffle characters
  // clicked img
  // imgClicked = id => {
    
  // }
  // increase score with correct click
  increaseScore = () => {
    this.setState({
      currentScore: this.state.currentScore + 1
    })
    console.log("currentScore: " + this.state.currentScore)
  }
  //FUNCTION UPDATE CLICKED STATUS
  // when an image is clicked, check state
  // if img state is clicked => gameOver
  // else update the state of the ImageCard (by its id) to be 'clicked'


  render() {
    return (
      <div>
        <div>
          <Navbar score={this.state.currentScore}/>
        </div>
        <div>
          {characters.map((character, i) => {
            return (
              <ImageCard characters={character} key={character.id} incrementScore={this.increaseScore}/>
            )
          })}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
