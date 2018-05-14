import React, { Component } from 'react';
import Search from './components/Search';
import Main from './components/Main';
import Thumbnail from './components/Thumbnail';

import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      search_input: 'trees',
      current: 'https://pixabay.com/get/ea36b90a21f2073ed1584d05fb1d4e9fea72e5d41eac104497f6c27baee9bcbf_1280.jpg',
      search_results: '',
    }
  }

  componentDidMount(){
    // this.search(this.state.search_input)
  }

  changeSearchState = (e) => {
    this.setState({search_input: e.target.value})
    this.search(this.state.search_input)
  }

  search = (searchString) => {
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${searchString}&image_type=photo`
    fetch(url).then(response => {
      response.json().then(data => {
        this.setState({search_results: data})
        console.log(this.state.search_results)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Search changeSearchState={this.changeSearchState}
                search_input={this.state.search_input}
        />
        <Main current={this.state.current}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <Thumbnail/>
      </div>
    );
  }
}

export default App;
