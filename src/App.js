import React, { Component } from 'react';
import './App.css';
//import Categories from '../src/Components/Categories/Categories.js';
import PictureList from '../src/Components/PictureList/PictureList.js';
import { NavLink } from 'react-router-dom';



const picture = {
  imageUrl: 'http://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg',
  pictureTitle: 'Cat',
  rating: 1,
  reviewCount: 0,

  // Optional
  name: '',
  misrad: '',
  phoneNumber: ''
}

const pictures = [
  picture,
  picture,
  picture,
  picture
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'http://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg',
      pictureTitle: 'Cat',     //Finding spesific picture through pictureTitle
      rating: 1,
      reviewCount: 0,
      isRemoval: true,
      Category: 'בעל חיים',

      // Optional
      name: '',
      misrad: '',
      phoneNumber: ''
    },

    this.addRating = this.addRating.bind(this);
    this.removeRating = this.removeRating.bind(this);
  }

  addRating() {
    let newRating = this.state.rating + 1;
    this.setState({ rating: newRating , isRemoval: false});
  }

  removeRating() {
    let newRating = this.state.rating - 1;
    this.setState({ rating: newRating , isRemoval: true});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">גלריית תמונות</h1>
        </header>
        <p className="App-intro">
          <PictureList handlePictures={this.state} onAdd={this.addRating} onRemove={this.removeRating} isRemoval={this.state.isRemoval}/>
          <NavLink to='/picture-list'>Picture List</NavLink>
        </p>
      </div>
    );
  }
}

export default App;
