import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meals: [],
    filters: {
      text: "",
      category: [],
      area: [],
      tags: []
    },
    favourite: [],
    isDesktop: false,
    activeRecipe: ''
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

        let isElementMatch = (element, filter) => {
          let isMatch = [];

          if (filter.length > 0) {
            if (element !== null) {
              filter.forEach((filterEl) => {
                if (element.indexOf(filterEl) === -1){
                  isMatch.push(false);
                } 
              })
            } else {
              isMatch.push(false);
            }
          }
          return isMatch.indexOf(false) === -1;
        };

        let isMatchText = el.strMeal.toLowerCase().indexOf(state.filters.text.toLowerCase()) > -1,
          isMatchCategory = isElementMatch(el.strCategory,state.filters.category),
          isMatchArea = isElementMatch( el.strArea, state.filters.area),
          isMatchTags = isElementMatch( el.strTags, state.filters.tags);

        return isMatchText && isMatchCategory && isMatchArea && isMatchTags;
      })
    },
    getFavourite(state){
      return state.favourite;
    },
    getFavouriteMeals(state) {
      if (state.favourite.length > 0) {
        return state.meals.filter((el) => {
          return state.favourite.indexOf(el.idMeal) > -1;
        })
      }
      else {
        return state.favourite;
      }
    },
    getIsDesktop (state) {
      return state.isDesktop;
    },
    getFilters (state) {
      return state.filters;
    },
    activeRecipe (state) {
      return state.activeRecipe
    }
  },

  mutations: {
    addMeal(state, meal) {
      state.meals.push(meal);
    },
    setTextFilter (state, text) {
      state.filters.text = text;
    },
    setFilter(state, [type, text]) {
      state.filters[type].push(text);
    },
    removeFilter(state, [type, index]){
      state.filters[type].splice(index, 1);
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
    },
    setIsDesktop (state, isDesktop) {
      state.isDesktop = isDesktop;
    },
    setActiveRecipe(state, id) {
      state.activeRecipe = id;
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
    },
    setFilter({state, commit}, [type, text]){
      if (state.filters[type].indexOf(text) === -1) {
        commit('setFilter', [type, text]);
      }
    },
    removeFilter({state, commit}, [type, text]){
      const index = state.filters[type].indexOf(text);
      if (index > -1) {
        commit('removeFilter', [type,index]);
      }
    }
  }
});
