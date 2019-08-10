import Vue from 'vue';
import Vuex from 'vuex';
import { GET_HABIT_LIST, HABIT_MAX_INDEX } from './getters';
import { ADD_HABIT } from './actions';
import { SET_HABIT } from './mutations';

// Compose store modules into App store

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		habits: [
			{
				id: 1,
				title: 'Brush teeth'
			},
			{
				id: 2,
				title: 'Play badminton'
			},
			{
				id: 3,
				title: 'Shoulder exercises'
			},
			{
				id: 4,
				title: '300 pushups'
			},
			{
				id: 5,
				title: 'Go to karaoke'
			}
		]
	},
	getters: {
		[HABIT_MAX_INDEX]: (state) => {
			return state.habits.reduce((maxIndex, habit) => {
				return habit.id > maxIndex ? habit.id : maxIndex;
			}, 0);
		},
		[GET_HABIT_LIST]: (state) => state.habits
	},
	mutations: {
		[SET_HABIT]: (state, habit) => {
			const habits = [...state.habits, habit];
			Object.assign(state, { habits });
		}
	},
	actions: {
		[ADD_HABIT]: ({ commit, getters }, habit) => {
			Object.assign(habit, { id: getters[HABIT_MAX_INDEX] + 1 });
			commit(SET_HABIT, habit);
		}
	}
});
