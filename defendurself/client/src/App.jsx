import React       from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Boxing      from './Boxing';
import Gym1        from './BoxingGyms/Gym1';
import Grappling   from './Grappling';
import Home        from './Home';



export default function App () {
      return (
          <div>
            <Switch>
                  <Route exact path='/Boxing' component={Boxing} />
                  <Route exact path='/Boxing/1' component={Gym1} />
                  <Route exact path='/Grappling' component={Grappling} />
                  <Route exact path='/' component={Home} />
              </Switch>
            </div>
      )
}
