<template>
  <section class="content">
      <meal v-for="meal in meals" 
        :key="meal.idMeal"
        :meal="meal"
        :isFavourite="isFavourite(meal.idMeal)"
        :activeRecipe="activeRecipe"
        @addFavourite="addFavourite"
        @removeFavourite="removeFavourite"
        @setActiveRecipe="setActiveRecipe"
      />
  </section>
</template>

<script>
import Meal from './content/Meal.vue'

export default {
  name: 'Content',
  components: {
    Meal
  },
  computed: {
    meals () {
      return this.$store.getters.getFilteredMeals;
    },
    favourite () {
      return this.$store.getters.getFavourite;
    },
    activeRecipe () {
      return this.$store.getters.activeRecipe;
    }
  },
  methods: {
    isFavourite(idMeal) {
      return this.favourite.indexOf(idMeal) > -1;
    },
    addFavourite (idMeal) {
      this.$store.dispatch('addFavourite', idMeal);
    },
    removeFavourite (idMeal) {
      this.$store.dispatch('removeFavourite', idMeal);
    },
    setActiveRecipe(idMeal){
      this.$store.commit("setActiveRecipe", idMeal);
    }
  }
}
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
}

@media only screen and (min-width: 768px) {
  .content {
    max-width: calc(~"100% - 250px");
  }
}
</style>
