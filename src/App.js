import React, { Component } from 'react';
import Bookings from './containers/Bookings';
import Footer from './components/Footer';
import './App.css';
import Search from './components/Search';
import Heading from './components/Heading';
import TouristInfoCards from './components/TouristInfoCards';
import Restaurant from './Restaurant';


class App extends Component {
  render() {
    const footerArray = ["123 CYF Street, Manchester, M1 4UD", "hello@cyfhotel.com", "0123 456789"]
    return (
      <div className="App">
        <Heading headingHeader="FIVE STAR CYF HOTEL" />
        <div className="cards-container">
        <TouristInfoCards source="https://image.freepik.com/free-vector/london-eye_23-2147514691.jpg" cityName="London" link="https://www.visitlondon.com/" ButtonName="Click Here" />
        <TouristInfoCards source="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Piccadilly_Gardens_tram_stop%2C_Feb_18.jpg/800px-Piccadilly_Gardens_tram_stop%2C_Feb_18.jpg" link="https://www.visitmanchester.com//" cityName="Manchester" ButtonName="Click Here" />
        <TouristInfoCards source="https://www.mossbroshire.co.uk/images/extralarge/8301_01.jpg" link="https://peoplemakeglasgow.com/" cityName="Glasgow" ButtonName="Click Here" />
        </div>
        <Search />
        <Bookings />
        <Restaurant />
        <Footer array={footerArray} />

      </div>
    );
  }
}

export default App;
