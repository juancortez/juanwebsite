import React, {Component} 	from 'react';
import LinksContainer from './../containers/links';

export default class NavigationComponent extends Component {
	render(){
		return(
			<div className="navigation-container">
				<LinksContainer/>
			</div>
		);
	}
}