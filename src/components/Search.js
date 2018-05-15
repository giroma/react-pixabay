import React, { Component } from 'react';

class Search extends Component {

  render() {

    return (
      <div className="search-bar">
        <input type="text" value={this.props.searchInput} onChange={this.props.changeSearchState} placeholder='trees'></input>
      </div>
    );
  }
}

export default Search;
