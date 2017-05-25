import React, {Component}   from 'react';
import {connect} 			from 'react-redux';
import FontAwesome 			from 'react-fontawesome';
import {Link}  				from 'React-router-dom';

class LinksContainer extends Component {
	constructor(props){
		super(props);
	}

	createItems(){
		let links = this.props.links;
		return links.map((link) => {
			if(link.isRoute){
				return (
					<li 
						key={link.id}
					>
						<Link to="/resume">
							<FontAwesome
								className="nav-icons"
		        				name={link.icon}
		        				size='2x'/>
		        		</Link>
					</li>
				);
			} else{
				return (
					<li 
						key={link.id}
					>
						<a href={link.url}>
							<FontAwesome
								className="nav-icons"
		        				name={link.icon}
		        				size='2x'/>
	        			</a>
					</li>
				);
			}
		});			
	}

	render(){
		return (
			<ul className="navigation-items">
				{this.createItems()}
			</ul>
		);
	}
}


/*
	Takes a piece of application store and passes it in to
	your component as a property
*/
function mapStateToProps(state){
	return {
		links: state.links
	}
}

export default connect(mapStateToProps)(LinksContainer);