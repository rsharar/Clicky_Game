import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <ImageCard />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
