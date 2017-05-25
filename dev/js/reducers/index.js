import { combineReducers }  from 'redux';
import JuanSkillsReducer 	from './reducer-juan-skills';
import ActiveSkillReducer 	from './reducer-active-skill';
import LinksReducer 		from './reducer-links';

const allReducers = combineReducers({
	juanSkills: JuanSkillsReducer,
	skill: ActiveSkillReducer,
	links: LinksReducer
});

export default allReducers;