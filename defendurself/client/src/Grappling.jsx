import React, { Component } from 'react';
import './Grappling.css';
import { Link } from 'react-router-dom';


class Grappling extends Component {
  constructor(props){
    super(props)
    this.state = {
      boxing:[]
    };
}

  componentWillMount() {
    fetch('http://localhost:3001/grappling', {
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({grappling:data})
      })

  }

  render(){
    return(
      <div className="Grappling">
        <header className="Grappling-header">
          <h1 className="Grappling-title">Grappling Gyms</h1>
        </header>
        <p className= "grapplingdesc">
          Below are grappling gyms in the New York City area. Scroll though,
          find your style and see if they're near by? Is this list missing
          a gym you know? Add it!
        </p>

      </div>
      )
  }
}

export default Grappling;
