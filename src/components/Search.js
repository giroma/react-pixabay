import React, { Component } from 'react';

class Search extends Component {

  render() {

    return (
      <div className="search-bar">
        <input type="text" value={this.props.search_input} onChange={this.props.changeSearchState}></input>
      </div>
    );
  }
}

export default Search;
