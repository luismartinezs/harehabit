import Vue from 'vue';
import Vuex from 'vuex';
import { GET_HABIT_LIST, HABIT_MAX_INDEX, GET_CURRENT_UPDATED_HABIT, GET_HABIT_BY_ID } from './getters';
import { ADD_HABIT } from './actions';
import { SET_HABIT, SET_CURRENT_UPDATED_HABIT } from './mutations';

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
		],
		currentUpdatedHabit: {}
	},
	getters: {
		[HABIT_MAX_INDEX]: (state) => {
			return state.habits.reduce((maxIndex, habit) => {
				return habit.id > maxIndex ? habit.id : maxIndex;
			}, 0);
		},
		[GET_HABIT_LIST]: (state) => state.habits,
		[GET_CURRENT_UPDATED_HABIT]: (state) => state.currentUpdatedHabit,
		[GET_HABIT_BY_ID]: (state, id) => state.habits.find((habit) => habit.id === id)
	},
	mutations: {
		[SET_HABIT]: (state, habit) => {
			const habits = [...state.habits, habit];
			Object.assign(state, { habits });
		},
		[SET_CURRENT_UPDATED_HABIT]: (state, habit) => {
			state.currentUpdatedHabit = habit;
		}
	},
	actions: {
		[ADD_HABIT]: ({ commit, getters }, habit) => {
			Object.assign(habit, { id: getters[HABIT_MAX_INDEX] + 1 });
			commit(SET_HABIT, habit);
		}
	}
});
