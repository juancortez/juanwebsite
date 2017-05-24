import React, {Component}   from 'react';
import {connect} 			from 'react-redux';

class SkillDetail extends Component {
	render(){
		let skill = this.props.skill;
		let{id, name} = skill;
		
		if(this.props.skill === null){
			return (<h4>Select a skill...</h4>);
		} else{
			return(
				<div>
					<h1> {name} </h1>
				</div>
			);
		}
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