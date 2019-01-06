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

  // FUNCTION SHUFFLE IMGS 
  // if currentScore === 0, shuffle imgs
  // else {
  // on click shuffle imgs

  // FUNCTION HANDLE CLICK

  imgClicked = () => {
    if (this.state.data.clicked === 'true') {
      console.log("Game Over")
    }
    else{
      this.increaseScore()
    }
  }

  // FUNCTION INCREASE SCORE
  increaseScore = (id) => {

    console.log(id)
    this.setState({
      currentScore: this.state.currentScore + 1,
      clicked: true
    })
    console.log("id: " + id)
    console.log("clickedState: " + this.state.clicked)
  }
  //FUNCTION UPDATE CLICKED STATUS
  // when an image is clicked, check state
  // if img state is clicked => gameOver
  // else update the state of the ImageCard (by its id) to be 'clicked'


  render() {
    return (
      <div>
        <div>
          <Navbar score={this.state.currentScore} />
        </div>
        <div>
          {characters.map((character, i) => {
            return (
              <ImageCard characters={character} key={character.id} incrementScore={this.increaseScore} />
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
