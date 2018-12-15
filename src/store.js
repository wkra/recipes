import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meals: [],
    filters: {
      text: "",
      category: "",
      area: "",
      tags: ""
    },
    favourite: []
  },

  getters: {
    getMeals(state) {
      return state.meals;
    },
    getTextFilter(state) {
      return state.filters.text;
    },
    getFilteredMeals(state) {
      return state.meals.filter((el) => {
        let isMatchText = state.filters.text === "" ? true : el.strMeal.toLowerCase().indexOf(state.filters.text.toLowerCase()) > -1,
          isMatchCategory = state.filters.category === "" ? true : el.strCategory.toLowerCase().indexOf(state.filters.category.toLowerCase()) > -1,
          isMatchArea = state.filters.area === "" ? true : el.strArea.toLowerCase().indexOf(state.filters.area.toLowerCase()) > -1,
          isMatchTags;
        if (state.filters.tags === "") {
          isMatchTags = true
        } else {
          isMatchTags = el.strTags === null ? false : el.strTags.toLowerCase().indexOf(state.filters.tags.toLowerCase()) > -1;
        }
        return isMatchText && isMatchCategory && isMatchArea && isMatchTags;
      })
    },
    getFavourite(state){
      return state.favourite;
    },
    getFavouriteMeals(state) {
      return state.meals.filter((el) => {
        return state.favourite.idMeal.indexOf(el.idMeal) > -1;
      })
    }
  },

  mutations: {
    addMeal(state, meal) {
      state.meals.push(meal);
    },
    setFilter(state, [type, text]) {
      state.filters[type] = text;
    },
    setFavourite(state, data) {
      state.favourite = data
    },
    setLocalFavourite(state) {
      localStorage.setItem('favourite', JSON.stringify(state.favourite))
    },
    addFavourite(state, idMeal) {
      state.favourite.push(idMeal);
    },
    removeFavourite(state, index) {
      state.favourite.splice(index, 1);
    }
  },

  actions: {
    fetchData({ commit }) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/latest.php")
        .then(res => {
          res.data.meals.forEach(el => {
            commit("addMeal", el);
          });
          console.log(res.data);
        });
    },
    initLocalStorage({commit}) {
			if (localStorage.getItem('favourite')) {
        let favourite = JSON.parse(localStorage.getItem('favourite'));
        commit('setFavourite', favourite);
			} else {
        commit('setLocalFavourite');
      }
    },
    addFavourite ({state, commit}, idMeal) {
      if (state.favourite.indexOf(idMeal) === -1) {
        commit('addFavourite', idMeal);
        commit('setLocalFavourite');
      }
    },
    removeFavourite({state, commit}, idMeal) {
      const index = state.favourite.indexOf(idMeal);

      if (index !== -1) {
        commit('removeFavourite', index);
        commit('setLocalFavourite');
      }
    }
  }
});
