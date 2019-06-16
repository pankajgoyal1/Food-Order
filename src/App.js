import React from 'react';
import Cart from './Components/Cart/Cart.js';
import Menu from './Components/Menu/Menu.js';
import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state=
    {
      veg:[],
      nonveg:[],
      cartitems:[],
      showveg:true,
      shownonveg:true
    }
  }
  componentDidMount(){
    fetch('https://demo0764762.mockable.io/food')
    .then(response=>response.json())
    .then(data=>{
      this.setState({veg:data.veg,nonveg:data.nonveg})
    })
  }
  onAddition = (event)=>{
    const id = event.target.value;
    this.state.cartitems.push(parseInt(id));
    this.setState({cartitems:this.state.cartitems})
    //console.log(this.state.cartitems);
  }
  removeitem = (e)=>{
    //console.log(this.state.cartitems.length);
    //console.log(e.target.value);
    let flag=0;
    this.setState({cartitems: this.state.cartitems.filter(function(item,i) { 
      //console.log(item);
        if( parseInt(item) === parseInt(e.target.value) && flag===0)
        {
          flag=1;
        }
        else
        return item;
    })});
    //console.log(this.state.cartitems.length);

  }
  render(){
    return (
      <div className="App">
        <header className="header">
          React Task 
        </header>
        <Cart veg={this.state.veg} nonveg={this.state.nonveg} selecteditems={this.state.cartitems} removeitem={this.removeitem} />
        <Menu vegitems={this.state.veg} nonvegitems={this.state.nonveg} addToCart={this.onAddition} shownonveg={this.state.shownonveg} showveg={this.state.showveg}/>
      </div>
    ); 
  }
  
}

export default App;
