<template>
  <section>
    <div v-for="meal in meals" :key="meal.idMeal">
      <meal
        :thumb="meal.strMealThumb"
        :name="meal.strMeal"
        :idMeal="meal.idMeal"
      />
    </div>
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
    }
  }
}
</script>

<style scoped lang="less">

</style>
