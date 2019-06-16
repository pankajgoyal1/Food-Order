import React from 'react';
import './Menu.css';

class Menu extends React.Component{
	constructor(props){
		super(props);
		this.state=
		{

		}
	}
	render(){
		return(
			<div className="Menu">
				<div className="yourmenu" >
					Menu
				</div>
				<span>Veg</span>
				<div className="allitems">

					{
						this.props.vegitems.map((item,i)=>{
							return(
								<div className="item" key ={i} >
									<span>{item.name}</span>
									<span>Rs. {item.price}</span>
									<button className="itembutton" onClick={this.props.addToCart} value={item.id} >Add To Cart</button>
								</div>
								);
						})
					}
					
				</div>
				<span>Non-Veg</span>
				<div className="allitems">

					{
						this.props.nonvegitems.map((item,i)=>{
							
							return(
								<div className="item" key ={i} >
									<span>{item.name}</span>
									<span>Rs. {item.price}</span>
									<button className="itembutton" onClick={this.props.addToCart} value={item.id} >Add To Cart</button>
								</div>
								);
						})
					}
					
				</div>
			</div>
			);
	}
}
export default Menu;