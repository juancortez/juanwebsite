import React, {Component} 	from 'react';

export default class Image extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLocal: /localhost/.test(window.location.href)
		};
	}
	
	render(){
		let classes = this.props.className,
			src = this.props.src;
		
		// if(!this.state.isLocal) src = 'juanwebsite/' + src;

		return(
			<img className={classes} src={src}/>
		);
	}
}