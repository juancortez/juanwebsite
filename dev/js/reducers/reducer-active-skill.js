export default function(state = null, action) {
	switch(action.type){
		case "SKILL_SELECTED":
			return action.payload;
			break;
	}
	return state;
}