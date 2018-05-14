import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <img src={this.props.current} alt=''></img>
      </div>
    );
  }
}

export default Main;
