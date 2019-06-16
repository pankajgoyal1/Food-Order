import React from 'react';
import './Menu.css';

class Menu extends React.Component{
	constructor(props){
		super(props);
		this.state=
		{
			showveg:true,
			shownonveg:true
		}
	}
	showveg =(e)=>{
		this.setState({showveg:e.target.checked});
	}
	shownonveg = (e)=>{
		this.setState({shownonveg:e.target.checked});
	}
	render(){
		//console.log(this.state.shownonveg,this.state.showveg);
		return(
			<div className="Menu">
				<div className="yourmenu" >
					Menu
				</div>
				<input className="filter" type="checkbox" onChange={this.showveg} checked={this.state.showveg}   />Veg
				<input className="filter" type="checkbox" onChange={this.shownonveg} checked={this.state.shownonveg} />Non-Veg
				<div className="allitems">

					{ 	
						this.state.showveg === true ?
						this.props.vegitems.map((item,i)=>{
							return(
								<div className="item" key ={i} >
									<span>{item.name}</span>
									<span>Rs. {item.price}</span>
									<button className="itembutton" onClick={this.props.addToCart} value={item.id} >Add</button>
								</div>
								);
						})
						: <div />
					}
					{
						this.state.shownonveg === true ?
						this.props.nonvegitems.map((item,i)=>{
							
							return(
								<div className="item" key ={i} >
									<span>{item.name}</span>
									<span>Rs. {item.price}</span>
									<button className="itembutton" onClick={this.props.addToCart} value={item.id} >Add</button>
								</div>
								);
						})
						: <div />
					}
					
				</div>
				<div className="allitems">

				</div>
			</div>
			);
	}
}
export default Menu;