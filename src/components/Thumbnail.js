import React, { Component } from 'react';

class Thumbnail extends Component {

  render() {
    return (
      <div className="thumbnail">
        {this.props.searchResults.hits.map((image, index) => {
          return  <a href={image.pageURL} target="_blank">
                    <img key={index}  src={image.previewURL} alt='' onMouseOver={(e) => {this.props.handleThumbHover(e, index)}} ></img>
                  </a>
          })}
      </div>
    );
  }
}

export default Thumbnail;
