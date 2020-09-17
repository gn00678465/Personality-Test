import Vue from 'vue';

export const store = Vue.observable({
  score: {},
});

export const mutations = {
  setScore(val) {
    store.score = val;
  },
};
