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

  // imgClicked = () => {
  //   if (this.state.data.clicked === 'true') {
  //     console.log("Game Over")
  //   }
  //   else {
  //     this.increaseScore()
  //   }
  // }

  // FUNCTION INCREASE SCORE
  // increaseScore = (id) => {

  //   console.log(id)
  //   this.setState({
  //     currentScore: this.state.currentScore + 1,
  //     clicked: true
  //   })
  //   console.log("id: " + id)
  //   console.log("clickedState: " + this.state.clicked)
  // }
  gameOver = () => {
    if (this.state.currentScore > this.state.topScore) {
      this.setState({ topScore: this.state.currentScore }, function () {
        console.log(this.state.topScore);
      });
    }
    characters.forEach(character => {
      character.count = 0;
    });
    alert(`Game Over! \nYour Score: ${this.state.currentScore}`);
    this.setState({ currentScore: 0 });
    return true;
  }


  clickCount = id => {
    characters.find((j, i) => {
      if (j.id === id) {
        if (!characters[i].clicked) {
          console.log(characters[i].clicked);
          characters[i].clicked = true;
          this.setState({ 
            currentScore: this.state.currentScore + 1 }, function () {
            console.log("Current Score: " + this.state.currentScore);
          });
          characters.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  //FUNCTION UPDATE CLICKED STATUS
  // when an image is clicked, check state
  // if img state is clicked => gameOver
  // else update the state of the ImageCard (by its id) to be 'clicked'


  render() {
    return (
      <div>
        <Navbar score={this.state.currentScore} highScore={this.state.topScore} />

        {characters.map(character => (
          <ImageCard
            characters={character}
            key={character.id}
            clickCount={this.clickCount} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;