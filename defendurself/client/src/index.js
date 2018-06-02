import React        from 'react';
import ReactDOM     from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App           from './App';
import Boxing        from './Boxing';
import Grappling     from './Grappling';
// import Gym1          from './BoxingGyms/Gym1';
import { BrowserRouter as Router } from 'react-router-dom'





ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
