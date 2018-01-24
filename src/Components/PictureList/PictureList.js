import React from 'react';
import Picture from '../Picture/Picture.js';

class PictureList extends React.Component {

  render() {
    return (
      <div className='PictureList'>
        {
          this.props.handlePictures.map(picture => {
            return <Picture handlePictures={picture} />;
          })
        }
      </div>
    );
  }
}


export default PictureList;
