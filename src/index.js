import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home/Home.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <Route  exact path='/' component={Home}/>
      <Route path='/gallery' component={App}/>
    </div>
  </Router>

  ,
   document.getElementById('root'));
