import React, { Component } from 'react';

class Thumbnail extends Component {

  render() {
    return (
      <div className="thumbnail">
        {console.log('thunbs results:',this.props.searchResults)}
        {
          this.props.searchResults.hits.map((image, index) => {
          return <img key={index} src={image.previewURL} alt='' onClick={(e) => {this.props.handleThumbClick(e, index)}} ></img>
          })
        }
      </div>
    );
  }
}

export default Thumbnail;
