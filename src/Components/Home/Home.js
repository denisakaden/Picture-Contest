import React from 'react';

import { NavLink } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div className="Home">
        <h2>Welcome</h2>
        <NavLink to='/gallery'>gallery</NavLink>
      </div>
    );
  }
}


export default Home;
