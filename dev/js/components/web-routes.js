import React, {Component} 						from 'react';
import { BrowserRouter as Router, Route, Link}  from 'React-router-dom';
import HomeComponent 							from './home';
import ResumeComponent 							from './resume';

const WebRoutes = () => {
	return (<Router>
    <div>
  			<Route exact path="/" component={HomeComponent}/>
	       	<Route path="/resume" component={ResumeComponent}/>
      </div>
      </Router>);
}

export default WebRoutes;


