import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home/Home.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/gallery' component={App}/>
      // Route to path to animals category
      // Route to path to landscapes category
      // Route to path to people category
      // Route to path to special events category
    </div>
  </Router>

  ,
   document.getElementById('root'));
