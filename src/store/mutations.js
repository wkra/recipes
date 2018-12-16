const mutations = {
  addMeal(state, meal) {
    state.meals.push(meal);
  },
  setTextFilter(state, text) {
    state.filters.text = text;
  },
  setFilter(state, [type, text]) {
    state.filters[type].push(text);
  },
  removeFilter(state, [type, index]) {
    state.filters[type].splice(index, 1);
  },
  resetFilter(state, type) {
    state.filters[type] = [];
  },
  setFavourite(state, data) {
    state.favourite = data;
  },
  setLocalFavourite(state) {
    localStorage.setItem("favourite", JSON.stringify(state.favourite));
  },
  addFavourite(state, idMeal) {
    state.favourite.push(idMeal);
  },
  removeFavourite(state, index) {
    state.favourite.splice(index, 1);
  },
  setIsDesktop(state, isDesktop) {
    state.isDesktop = isDesktop;
  },
  setActiveRecipe(state, id) {
    state.activeRecipe = id;
  }
};

export default mutations;
