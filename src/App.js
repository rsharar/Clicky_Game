import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
// import Wrapper from './components/Wrapper';
import characters from "./characters.json";


import './App.css';

class App extends Component {

  // add all functions for gameplay

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
          <div>
            {characters.map((character, i) => {
              return (
                <ImageCard characters={character} key={character.id} />
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
