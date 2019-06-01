import React, { Component } from 'react'
// import RestaurantButton from './components/RestaurantButton'; 
import  Orders  from './components/Orders';

class Restaurant extends Component {
 
  render() {
   
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <Orders />
        <Orders orderType="Salads" />
      
      </div>
    );
  }
}


export default Restaurant;