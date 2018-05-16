import React, { Component } from 'react';
import Search from './components/Search';
import Main from './components/Main';
import Thumbnail from './components/Thumbnail';
import {initialSearchData} from './initialSearchData';

import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
      current: 'https://pixabay.com/get/ea36b90a21f2073ed1584d05fb1d4e9fea72e5d41eac104497f6c27baee9bcbf_1280.jpg',
      searchResults: initialSearchData,
    }
  }
  componentDidMount(){
    // this.search(this.state.searchInput)
    console.log('current:',this.state.current);
    console.log('initial', initialSearchData);
  }

  changeSearchState = (e) => {
    this.setState({searchInput: e.target.value})
    this.search(e.target.value)
  }

  search = (searchString) => {
    console.log('search string', searchString);
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${searchString}&image_type=photo`
    fetch(url).then(response => {
      response.json().then(data => {
        if (data.total > 0) {//check for empty api return
          this.setState({current: data.hits[0].largeImageURL})
          this.setState({searchResults: data})
        }
        console.log('search::', this.state.searchInput);
        console.log('changed to:',this.state.current)
      })
    })
  }

  handleThumbHover = (e, index) => {
    const largeURLofThumbnail = this.state.searchResults.hits[index].largeImageURL
    this.setState({current: largeURLofThumbnail})
  }

  render() {
    return (
      <div className="App">
        <Search changeSearchState={this.changeSearchState}
                searchInput={this.state.searchInput}
        />
        <Main current={this.state.current}
        />
        <Thumbnail  searchResults={this.state.searchResults}
                    handleThumbHover={this.handleThumbHover}
        />
      </div>
    );
  }
}

export default App;
