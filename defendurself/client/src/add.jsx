import React, { Component } from 'react';
 import './add.css';
 import { Redirect, Link } from 'react-router-dom';



//component for adding a new gym.
//each value is bound
//a submit button is located on the bottom where you can
//i looked at Project 3 for reference
class Add extends Component {
    constructor(props){
    super(props)
    this.state = {
      name: '',
      location: '',
      type: '',
      image: '',

    };
  this.post = this.post.bind(this);
  this.handleName = this.handleName.bind(this);
  this.handleLocation = this.handleLocation.bind(this);
  this.handleType = this.handleType.bind(this);
  this.handleImage = this.handleImage.bind(this);

  }

  post(e){
  console.log(e)
  e.preventDefault();
  console.log('under fetch', fetch)
    fetch('http://localhost:3001/boxing', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'name': this.state.name,
              'location': this.state.location,
              'type': this.state.type,
              'image': this.state.image
        })
    // .then(() => {
    //         this.props.history.push(`/boxing`)
    //   })
    })
  }

  handleName(event) {
    this.setState({name: event.target.value})

  }

  handleLocation(event) {
    this.setState({location: event.target.value})
  }

  handleType(event) {
    this.setState({type: event.target.value})
  }

  handleImage(event){
    this.setState({image: event.target.value})
  }


  render() {
    return(
      <div className="addgym">
        <h1 className="gymheader"> Add a gym</h1>
        <p>Add a gym you're familiar with</p>
      <form onSubmit={this.post}>
          <input name="name" type="text" placeholder="Name"
          onChange={this.handleName}/>
          <br/>
          <input name="location" type="text" placeholder="location"
          onChange={this.handleLocation}/>
          <br/>
          <input name="name" type="text" placeholder="type"
          onChange={this.handleType}/>
          <br/>
          <input name="name" type="text" placeholder="image"
          onChange={this.handleImage}/>
          <button type="submit">Add</button>
      </form>
      <Link to="/boxing"><p>Back</p></Link>
      </div>
      )
  }
}

export default Add;
