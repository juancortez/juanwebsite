import React, {Component} 	from 'react';
import SkillList 			from '../containers/skill-list';

export default class Main extends Component{
	render(){
		return(
				<div className="main-container">
					<div className="banner">
						<img className="header-image" src="/img/UT_ECE.jpg"/>
					</div>
					<div className="center-image">
						<img className="juan-image" src="/img/juan_cropped.jpg"/>
					</div>
					<div className="content">
						<div className="information">
							<h1>Juan Cortez </h1>
							<SkillList/>
						</div>
					</div>
				</div>
		);
	}
}