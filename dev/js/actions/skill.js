export const selectSkill = (skill) => {
	return {
		type: "SKILL_SELECTED",
		payload: skill
	}
};