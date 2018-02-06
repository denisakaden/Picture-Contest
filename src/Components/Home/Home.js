import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div>
        <h2>Welcome</h2>
        <NavLink to='/gallery'>גלרייה</NavLink>
      </div>
    );
  }
}


export default Home;
