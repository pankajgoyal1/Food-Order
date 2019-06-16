import React from 'react';
import Cart from './Components/Cart/Cart.js';
import Menu from './Components/Menu/Menu.js';
import './App.css';
let a=-1;
class App extends React.Component{
  constructor(){
    super();
    this.state=
    {
      veg:[],
      nonveg:[],
      cartitems:[]
    }
  }
  componentDidMount(){
    fetch('http://demo0764762.mockable.io/food')
    .then(response=>response.json())
    .then(data=>{
      this.setState({veg:data.veg,nonveg:data.nonveg})
    .catch(err=>console.log(err))
    })
  }
  onAddition = (event)=>{
    const id = event.target.value;
    this.state.cartitems.push(parseInt(id));
    this.setState({cartitems:this.state.cartitems})
    //console.log(this.state.cartitems);
  }
  render(){
    return (
      <div className="App">
        <header className="header">
          React Task
        </header>
        <Cart veg={this.state.veg} nonveg={this.state.nonveg} selecteditems={this.state.cartitems} />
        <Menu vegitems={this.state.veg} nonvegitems={this.state.nonveg} addToCart={this.onAddition} />
      </div>
    ); 
  }
  
}

export default App;
