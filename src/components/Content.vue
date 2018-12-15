<template>
  <section class="content">
      <meal v-for="meal in meals" 
        :key="meal.idMeal"
        :thumb="meal.strMealThumb"
        :name="meal.strMeal"
        :idMeal="meal.idMeal"
        :isFavourite="isFavourite(meal.idMeal)"
        @addFavourite="addFavourite"
        @removeFavourite="removeFavourite"
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
}
</style>
