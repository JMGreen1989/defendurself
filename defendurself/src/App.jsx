import React, { Component } from 'react';
import './App.css';
// import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Defend Urself</h1>
        </header>
        <p className="intro">
          Choose a gym which fits you the best!
        </p>
        <div className="boxing-pic">
          <img src={'http://res.cloudinary.com/dc6dj6gen/image/upload/v1527608591/Agoura-Boxing-Gym-Adult-Man-Training-On-Punching-Bag-1.jpg'}/>
        </div>


      </div>

    );
  }
}

export default App;
