import React, { Component } from 'react';
// import Search from '../components/Search.js';
import SearchResults from '../components/SearchResults';
import fakeBookings from '../data/fakeBookings';

export default class Bookings extends Component {
  
  search = () => {
    console.info('TO DO!');
  };
  
  render() {
    return (
      <div className="App-content">
        <div className="container">
        <SearchResults results={fakeBookings} /> 
          {/* <Search search={this.search} />
          <Results results={this.state.results} /> */}
        </div>
      </div>
    );
  }
}
