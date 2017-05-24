import { combineReducers }  from 'redux';
import JuanSkillsReducer 	from './reducer-juan-skills';
import ActiveSkillReducer 	from './reducer-active-skill';

const allReducers = combineReducers({
	juanSkills: JuanSkillsReducer,
	skill: ActiveSkillReducer
});

export default allReducers;