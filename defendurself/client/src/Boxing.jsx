import React, { Component } from 'react';
import './Boxing.css';
import { Link } from 'react-router-dom';




//component for the boxing table
// adding works, kind of. It doesn't refresh the page but you can add a new gym
// Joe Keohan helped me map out through the table values to make them display
// on the screen
class Boxing extends Component {
  constructor(props){
    super(props)
    this.state = {
      boxing:[]
    };
    this.destroy = this.destroy.bind(this);


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


  destroy(e,id){
    e.preventDefault()
    console.log("delete")
    fetch(`http://localhost:3001/boxing/${id}`, {
      method: 'DELETE',
      headers: ({"content-type": "application/json"})
    }).then( () => {
        console.log( 'Deleted' )
        // window.location.pathname = '/boxing';
    } ).catch((err) => console.log(err));
  }

  renderItems() {
      // console.log('inside renderItems')
      return this.state.boxing.map((elem, i) => (
      <div key={i} className="boxing-container">
        <div className="add-link">
          <a href="/add">Add a Gym</a>
        </div>
           <div className="boxing-info">{elem.name}</div>
           <div className="boxing-type">{elem.type}</div>
           <div className="boxing-location">{elem.location}</div>
        <div className= "left-line"></div>
           <img className="boxing-image" src={elem.image}/>
        <div className= "right-line"></div>
      <div className="delete">
        <form onSubmit={(e) => this.destroy(e, i-1)}>
          <input class="button is-black" type="submit" value="Delete" />
        </form>
      </div>
      </div>
      ))
  }


  render(){
    if(true)
      { return  ( this.renderItems() ) }
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
