import axios from "axios";

const actions = {
  fetchData({ commit }) {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/latest.php")
      .then(res => {
        res.data.meals.forEach(el => {
          commit("addMeal", el);
        });
      });
  },
  initLocalStorage({ commit }) {
    if (localStorage.getItem("favourite")) {
      let favourite = JSON.parse(localStorage.getItem("favourite"));
      commit("setFavourite", favourite);
    } else {
      commit("setLocalFavourite");
    }
  },
  addFavourite({ state, commit }, idMeal) {
    if (state.favourite.indexOf(idMeal) === -1) {
      commit("addFavourite", idMeal);
      commit("setLocalFavourite");
    }
  },
  removeFavourite({ state, commit }, idMeal) {
    const index = state.favourite.indexOf(idMeal);

    if (index !== -1) {
      commit("removeFavourite", index);
      commit("setLocalFavourite");
    }
  },
  setFilter({ state, commit }, [type, text]) {
    if (state.filters[type].indexOf(text) === -1) {
      commit("setFilter", [type, text]);
      commit("setActiveRecipe", "");
    }
  },
  removeFilter({ state, commit }, [type, text]) {
    const index = state.filters[type].indexOf(text);
    if (index > -1) {
      commit("removeFilter", [type, index]);
      commit("setActiveRecipe", "");
    }
  },
  resetFilters({ state, commit }) {
    const filtersKey = Object.keys(state.filters);

    filtersKey.forEach(el => {
      if (el !== "text") {
        commit("resetFilter", el);
      }
    });
  },
  setTextFilter({ commit }, text) {
    commit("setTextFilter", text);
    commit("setActiveRecipe", "");
  },
  favouriteHandler({ dispatch }, text) {
    dispatch("setTextFilter", text);
    dispatch("resetFilters");
  }
};

export default actions;
