import Vue from 'vue';
import Vuex from 'vuex';
import { LOAD_HABIT_LIST } from './getters';

// Compose store modules into App store

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    habits: [
      {
        title: 'Brush teeth',
      },
      {
        title: 'Play badminton',
      },
      {
        title: 'Shoulder exercises',
      },
      {
        title: '300 pushups',
      },
      {
        title: 'Go to karaoke',
      },
    ],
  },
  getters: {
    [LOAD_HABIT_LIST]: state => state.habits,
  },
  mutations: {},
  actions: {},
});
