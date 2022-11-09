import React from 'react';
import logo from './logo.png';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { FaUserAlt } from "react-icons/fa";

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [
      {name: 'name1', birthday: 'birthday1', image: 'image1', motto: 'motto1', id: 1 },
      {name: 'name2', birthday: 'birthday2', image: 'image2', motto: 'motto2', id: 2 },
      {name: 'name3', birthday: 'birthday3', image: 'image3', motto: 'motto3', id: 3 }]
    }
  }

  render() {
  return (
    <div>
      <header className="App-header">
      <img src={logo} alt="Logo" className="logo" />
      <SearchBar />
      <FaUserAlt className="user"/>
      </header>
      <div className="App">
        <SearchResults searchResults={this.state.searchResults} />
      </div>
    </div>
  );
}
}

export default App;
