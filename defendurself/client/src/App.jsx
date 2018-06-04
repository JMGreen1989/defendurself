import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Boxing      from './Boxing';
import Grappling   from './Grappling';
import Home        from './Home';
import Add         from './add';



// the main app where this is all tied together
// thank you HUGH THORNHILL for helping me lay out this code
// all the other components are routed at the bottom
class App extends Component {
  state = {
    response: ''
  };
   // componentDidMount() {
    // this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('http://localhost:3001/');
  //   const body = await response.json();

    // if (response.status !== 200) throw Error(body.message);

    // return body;

  render(){
      return (
          <div>
            <Switch>
                  <Route exact path='/Boxing' component={Boxing} />
                  <Route exact path='/Add' component={Add} />
                  <Route exact path='/Grappling' component={Grappling} />
                  <Route exact path='/' component={Home} />
              </Switch>
           <p className="express">{this.state.response}</p>
            </div>
      )
}
}
export default App;

