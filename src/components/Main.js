import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div className="main">
      {console.log('Main render current:',this.props.current)}
        <img src={this.props.current} alt=''></img>
      </div>
    );
  }
}

export default Main;
