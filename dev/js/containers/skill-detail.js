import React, {Component}   from 'react';
import {connect} 			from 'react-redux';
import Skill				from './../components/skill';


class SkillDetail extends Component {
	constructor(props){
		super(props);
		this.onReset = this.onReset.bind(this);
	}

	render(){
		let skill = this.props.skill;
		let{id, name, icon, link, imageClass} = skill;

		if(name){
			return (<div className="skill-container"><Skill icon={icon} link={link} imageClass={imageClass} skill={skill}/><button className="back-button" onClick={this.onReset}>Go Back</button></div>);
		} else{
			return(
				<h1> TODO</h1>
			);
		}
	}

	onReset(){
		console.log("RESET");	
	}
}


/*
	Takes a piece of application store and passes it in to
	your component as a property
*/
function mapStateToProps(state){
	return {
		skill: state.skill
	}
}

export default connect(mapStateToProps)(SkillDetail);