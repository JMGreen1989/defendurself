import React, { Component } from 'react';
import './Boxing.css';
import { Link } from 'react-router-dom';


class Boxing extends Component {
  constructor(props){
    super(props)
    this.state = {};
}

  componentWillMount() {
    fetch('http://localhost:3001/boxing', {
       mode: 'no-cors', // no-cors, cors, *same-origin
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => { debugger; response.json()} )
        .then(data => {
          console.log(data)
        })

  }

    // if(!res.ok) throw.resStatusText;
  render(){
    return(
      <div className="boxing">
        <header className="boxing-header">
          <h1 className="boxing-title">Boxing Gyms</h1>
        </header>
        <p className= "boxingdesc">
          Below are boxing gyms in the New York City area. Scroll though,
          find your style and see if they're near by? Is this list missing
          a gym you know? Add it!
        </p>
      </div>

      )
  }
}

export default Boxing;
