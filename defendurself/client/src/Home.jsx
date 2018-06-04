import React, { Component } from 'react';
import './Home.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Boxing        from './Boxing';
import Grappling     from './Grappling';


// the main home landing page
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-title">Welcome to Defend Urself</h1>
        </header>
        <p className="intro">
          Choose a gym which fits you the best!
        </p>
        <div className="boxing-link">
          <a href="/Boxing">Boxing</a>
        </div>
        <div className="boxing-pic">
        </div>
        <div className="grappling-link">
          <a href="/Grappling">Grappling</a>
        </div>
        <div className="grappling-pic">
       </div>

    </div>
    );
  }
}

export default Home;
