<template>
  <section class="content__wrapper">
    <transition-group name="content__list" tag="div" class="content">
      <meal
        v-for="meal in meals"
        :key="meal.idMeal"
        :meal="meal"
        :isFavourite="isFavourite(meal.idMeal)"
        :activeRecipe="activeRecipe"
        @addFavourite="addFavourite"
        @removeFavourite="removeFavourite"
        @setActiveRecipe="setActiveRecipe"
      />
    </transition-group>
  </section>
</template>

<script>
import Meal from "./content/Meal.vue";

export default {
  name: "Content",
  components: {
    Meal
  },
  computed: {
    meals() {
      return this.$store.getters.getFilteredMeals;
    },
    favourite() {
      return this.$store.getters.getFavourite;
    },
    activeRecipe() {
      return this.$store.getters.activeRecipe;
    }
  },
  methods: {
    isFavourite(idMeal) {
      return this.favourite.indexOf(idMeal) > -1;
    },
    addFavourite(idMeal) {
      this.$store.dispatch("addFavourite", idMeal);
    },
    removeFavourite(idMeal) {
      this.$store.dispatch("removeFavourite", idMeal);
    },
    setActiveRecipe(idMeal) {
      this.$store.commit("setActiveRecipe", idMeal);
    }
  }
};
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  text-align: left;
  position: relative;
  display: inline-block;
  width: 300px;

  &__wrapper {
    text-align: center;
  }

  &__list {
    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }

    &-leave-active {
      display: none;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .content {
    width: 720px;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 1310px) {
  .content {
    width: 1060px;
  }
}
</style>
