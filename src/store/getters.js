const getters = {
  getMeals(state) {
    return state.meals;
  },
  getTextFilter(state) {
    return state.filters.text;
  },
  getFilteredMeals(state) {
    return state.meals.filter(el => {
      let isElementMatch = (element, filter) => {
        let isMatch = [];

        if (filter.length > 0) {
          if (element !== null) {
            filter.forEach(filterEl => {
              if (element.indexOf(filterEl) === -1) {
                isMatch.push(false);
              }
            });
          } else {
            isMatch.push(false);
          }
        }
        return isMatch.indexOf(false) === -1;
      };

      let isMatchText =
          el.strMeal.toLowerCase().indexOf(state.filters.text.toLowerCase()) >
          -1,
        isMatchCategory = isElementMatch(
          el.strCategory,
          state.filters.category
        ),
        isMatchArea = isElementMatch(el.strArea, state.filters.area),
        isMatchTags = isElementMatch(el.strTags, state.filters.tags);

      return isMatchText && isMatchCategory && isMatchArea && isMatchTags;
    });
  },
  getFavourite(state) {
    return state.favourite;
  },
  getFavouriteMeals(state) {
    if (state.favourite.length > 0) {
      return state.meals.filter(el => {
        return state.favourite.indexOf(el.idMeal) > -1;
      });
    } else {
      return state.favourite;
    }
  },
  getIsDesktop(state) {
    return state.isDesktop;
  },
  getFilters(state) {
    return state.filters;
  },
  activeRecipe(state) {
    return state.activeRecipe;
  }
};

export default getters;
