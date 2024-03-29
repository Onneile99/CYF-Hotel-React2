import React, { Component } from 'react'
import RestaurantButton from './RestaurantButton'

class Orders extends Component {
    constructor(props){
        super(props);
        this.state={
          Orders: 0
        }
      }
      addOrder = () => {
        // Use this.setState, to change the initial state set inside the constructor
      // console.log("Add orders")
      this.setState({
        Orders:this.state.Orders + 1
        //  Orders:this.state.Orders = "Hello"
      })
      }
      removeOrder=()=>{
        this.setState({
         Orders:this.state.Orders - 1  
        })
      }
      resetOrder=()=>{
        this.setState({
          Orders:0
        })
      }
    render() {
                return (
            <div>
              <ul>
          <li>
            Pizzaz Served:{this.state.Orders} 
            <RestaurantButton orderHandler={this.addOrder}  buttonName="Add" />
            <RestaurantButton orderHandler={this.removeOrder} buttonName="Remove" />
            <RestaurantButton orderHandler={this.resetOrder} buttonName="Reset" />
          </li>
        </ul>
            </div>
        )
    }
}
export default  Orders;