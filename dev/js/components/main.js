import React, {Component} 	from 'react';
import Image 				from './image.js';
import SkillList 			from '../containers/skill-list';
import NavigationComponent 	from './navigation';

export default class Main extends Component{
	render(){
		let isLocal = /localhost/.test(window.location.href),
			bannerImage = 'img/banner_full.jpg';
			
		return(
				<div className="main-container">
					<div className="banner">
						<Image className = "header-image" src='img/UT_ECE.jpg'/>
					</div>
					<div className="center-image">
						<Image className = "juan-image" src='img/juan_cropped.jpg'/>
					</div>
					<div className="content" style={{backgroundImage: `url(${bannerImage})`}}>
						<div className="information">
							<h1>Juan Cortez </h1>
							<SkillList/>
						</div>
						<NavigationComponent/>
					</div>
				</div>
		);
	}
}