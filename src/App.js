import React, { Component } from 'react';
import './App.css';
//import Categories from '../src/Components/Categories/Categories.js';
import PictureList from '../src/Components/PictureList/PictureList.js';

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
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">גלריית תמונות</h1>
        </header>
        <p className="App-intro">
          <PictureList handlePictures={pictures}/>
        </p>
      </div>
    );
  }
}

export default App;
