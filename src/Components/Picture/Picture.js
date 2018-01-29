import React from 'react';
import './Picture.css';

class Picture extends React.Component {
  constructor(props){
    super(props);

    this.renderClick = this.renderClick.bind(this);

  }

  renderClick() {
    if (this.props.isRemoval) {
      return (<button className="Picture-action" onClick={this.props.onAdd}>Vote</button>)
    } else {
      return (<button className="Picture-action" onClick={this.props.onRemove}>Unvote</button>)
    }
  }


  render() {
    return (
      <div className="Picture">
        <div className="image-container">
          <img src={this.props.handlePicture.imageUrl} alt=''/>
        </div>
        <h2>{this.props.handlePicture.pictureTitle}</h2>
        <div className="Picture-information">
          <div className="Picture-address">
            <p>{this.props.handlePicture.name}</p>
              <p>{this.props.handlePicture.phoneNumber} {this.props.handlePicture.misrad}</p>
          </div>
          <div className="Picture-reviews">
            <h3 className="rating">{this.props.handlePicture.rating} upvotes</h3>

          </div>
          {this.renderClick()}
        </div>

      </div>
    );
  }
}


export default Picture;
