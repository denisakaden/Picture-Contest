import React from 'react';
import './PictureList.css';
import Picture from '../Picture/Picture.js';
import { NavLink } from 'react-router-dom';

class PictureList extends React.Component {

  render() {
    return (
      <div className='PictureList'>
        {
           <Picture handlePicture={this.props.handlePictures} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
            
        }
      </div>
    );
  }
}


export default PictureList;
