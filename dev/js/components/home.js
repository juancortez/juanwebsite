import React, {Component} 		from 'react';
import {connect} 				from 'react-redux';
import ReactCSSTransitionGroup	from 'react-addons-css-transition-group';
import {bindActionCreators} 	from 'redux';
import Main 					from './main';
import SkillDetail 				from './../containers/skill-detail';
import {selectSkill} 			from '../actions/skill';

class HomeComponent extends Component{
	render(){
		if(this.props.skill === null){
			return (<ReactCSSTransitionGroup transitionName='app' transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
				<div className="overlay"></div>
				<Main/>
			</ReactCSSTransitionGroup>
			);
		} else{
			return (
				<ReactCSSTransitionGroup transitionName='app' transitionEnterTimeout={5000} transitionLeaveTimeout={500}>
					<div className="overlay"></div>
					<SkillDetail reset={this.reset.bind(this)}/>
				</ReactCSSTransitionGroup>
			);
		}
	}

	reset(){
		this.props.selectSkill(null);
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

/*
	Send it in as a property with the same name
*/
function matchDispatchtoProps(dispatch){
	return bindActionCreators({selectSkill: selectSkill}, dispatch);
}

export default connect(mapStateToProps, matchDispatchtoProps)(HomeComponent);