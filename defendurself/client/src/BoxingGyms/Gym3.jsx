import React, { Component } from 'react';
import './Boxing.css';
// import { Link } from 'react-router-dom';



class Boxing extends Component {
  constructor(props){
    super(props)
    this.state = {
      boxing:[]
    };
}

  componentDidMount() {
    fetch('http://localhost:3001/boxing', {
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({boxing:data})
      })

  }

  renderItems() {
      console.log('inside renderItems')
      return this.state.boxing.map((elem, i) => (
          <div key={i} className="boxing-container">
           <img className="box-image" src={elem.image}/>
           <div className="boxing-info">{elem.name}</div>
           <div className="boxing-type">{elem.type}</div>
           <div className="boxing-location">{elem.location}</div>

          </div>
      ))
  }

  render(){
    if(true){ return  ( this.renderItems() ) }
    return (
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
