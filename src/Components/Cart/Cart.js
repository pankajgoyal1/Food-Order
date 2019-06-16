import React from 'react';
import './Cart.css';
let total=0;
class Cart extends React.Component{
	constructor(props){
		super(props);
		this.state=
		{

		}
	}
	render(){
		console.log(this.props.selecteditems.length);
		total=0;
		return(
			<div className="cart">
				<div className="yourcart" >
					Your Cart
				</div>
				{
					

					parseInt(this.props.selecteditems.length) !== 0 
					? 
						<div className="addeditems">
						{

							this.props.selecteditems.map((item)=>{
								for(var i in this.props.veg)
								{
									//console.log(i);
									if(this.props.veg[i].id === item)
									{
										total=total+this.props.veg[i].price;
										return(
											<div className="addedcartitem" key={this.props.veg[i].id}>
												<span>{this.props.veg[i].name } <br />      
												Price: Rs.{this.props.veg[i].price}
												</span>
											</div>
											);
									}
								}
								for(var i in this.props.nonveg)
								{
									//console.log(i);
									if(this.props.nonveg[i].id === item)
									{
										total=total+parseInt(this.props.nonveg[i].price);
										return(
											<div className="addedcartitem" key ={this.props.nonveg[i].id}>
												<span> {this.props.nonveg[i].name} <br />
												Price: Rs. {this.props.nonveg[i].price}
												</span>
											</div>
											);
									}
								}

								
							})
						}
						<br />
						
						</div>
					:
					<div className="">Your Cart is empty</div>
				}
				<div className="total">
							<span>Order total is Rs. {total}</span>
						</div>
			</div>
			);
	}
}
export default Cart;