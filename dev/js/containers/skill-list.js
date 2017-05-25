import React, {Component} 	from 'react';
import {bindActionCreators} from 'redux';
import {connect} 			from 'react-redux';
import {selectSkill} 		from '../actions/skill';

class SkillList extends Component {

	createSkillItems(){
		return this.props.juanSkills.map((skill) => {
			return (
				<li 
					key={skill.id}
					className="skills"
					onClick={() => this.props.selectSkill(skill)}
				>
					{skill.name}
				</li>
			);
		});	
	}

	render(){
		return (
			<ul className="skills-list">
				{this.createSkillItems()}
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
		juanSkills: state.juanSkills
	}
}

/*
	Send it in as a property with the same name
*/
function matchDispatchtoProps(dispatch){
	return bindActionCreators({selectSkill: selectSkill}, dispatch);
}

export default connect(mapStateToProps, matchDispatchtoProps)(SkillList);