import React, {Component} 		from 'react';
import {connect} 				from 'react-redux';
import ReactCSSTransitionGroup	from 'react-addons-css-transition-group';

import Main 					from './main';
import SkillDetail 				from './../containers/skill-detail';

class App extends Component{
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
					<SkillDetail/>
				</ReactCSSTransitionGroup>
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

export default connect(mapStateToProps)(App);