import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import UsersList from '../components/UsersList';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Github Search
          <SearchBar />
          <UsersList />
        </header>
      </div>
    );
  }
}

export default Main;
