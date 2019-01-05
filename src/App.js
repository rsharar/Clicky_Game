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


  // update state of click img


  render() {
    return (
      <div>
        <div>
          <Navbar />
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
