import React, {Component} 	from 'react';
import FontAwesome 			from 'react-fontawesome';
import Image 				from './image.js';

export default class Skill extends Component {
	render(){
		let{
			name,
			description,
			imageLink
		} = this.props.skill;
		
		let icon = this.props.icon || 'laptop',
			imageClass = this.props.imageClass || "",
			linkExists = this.props.link ? this.props.link : '',
			bodyContent;

		if(!!linkExists){
			bodyContent = <a href={linkExists}><Image className ={imageClass} src={imageLink}/></a>;
		} else {
			bodyContent = <Image className ={imageClass} src={imageLink}/>;
		}
		
		return(
			<div className="skill-inner-container">
				<div className="header">
					<div>
						<FontAwesome
        				name='circle'
        				size='2x'
        				stack="2x"/>
						<FontAwesome
        				className='inner-icon'
        				name={icon}
        				size='2x'
        				stack="1x"/>
        			</div>
					<h1>{name} </h1>
				</div>
				<div className="body">
					<p> {description}</p>
					{bodyContent}
				</div>
			</div>
		);
	}
};