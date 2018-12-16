<template>
  <div class="meal" :class="{'meal--inactive': isInactive}">
    <div class="meal__box-wrapper">
      <div class="meal__box" @click="setActiveRecipe(meal.idMeal)">
        <div class="meal__img" :style="{backgroundImage: `url(${meal.strMealThumb})`}"></div>
        <div class="meal__name-wrapper">
          <div class="meal__name" v-text="meal.strMeal"></div>
        </div>
      </div>
      <div
        class="meal__favourite"
        :class="{'meal__favourite--active': isFavourite}"
        v-on:click.self="favouriteHandler"
      ></div>
    </div>
    <Recipe
      v-if="activeRecipe === meal.idMeal"
      :meal="meal"
      :instructions="meal.strInstructions"
      :ingredients="this.ingredients(meal)"
      :videoUrl="meal.strYoutube"
      :idMeal="meal.idMeal"
    />
  </div>
</template>

<script>
import Recipe from "./Recipe.vue";

export default {
  name: "Meal",
  components: {
    Recipe
  },
  props: {
    isFavourite: {
      type: Boolean,
      default: false
    },
    meal: {
      type: Object,
      require: true
    },
    activeRecipe: {
      type: String,
      default: ""
    }
  },
  computed: {
    isInactive() {
      return this.activeRecipe.length && this.activeRecipe !== this.meal.idMeal;
    }
  },
  methods: {
    favouriteHandler(e) {
      e.preventDefault();
      if (this.isFavourite) {
        this.$emit("removeFavourite", this.meal.idMeal);
      } else {
        this.$emit("addFavourite", this.meal.idMeal);
      }
    },
    setActiveRecipe(idMeal) {
      if (this.activeRecipe === idMeal) {
        idMeal = "";
      }
      this.$emit("setActiveRecipe", idMeal);
    },
    ingredients(meal) {
      const ingredients = [],
        strIngredient = "strIngredient",
        strMeasure = "strMeasure";

      let i = 1,
        ingredient = meal[strIngredient + i];

      while (typeof ingredient !== "undefined") {
        if (ingredient !== "") {
          if (meal[strMeasure + i]) {
            ingredient += " - " + meal[strMeasure + i];
          }
          ingredients.push(ingredient);
        }
        i += 1;
        ingredient = meal[strIngredient + i];
      }
      return ingredients;
    }
  }
};
</script>

<style lang="less" scoped>
.meal {
  margin: 20px;
  width: 100%;
  max-width: 300px;
  position: relative;

  transition: all 0.5s;
  display: inline-block;

  &--inactive {
    .meal {
      &__box-wrapper {
        opacity: 0.5;
      }
    }
  }

  &__box-wrapper {
    position: relative;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      .meal {
        &__img {
          transform: scale(1.05);
        }
      }
    }
  }

  &__box {
    border: 2px solid #d8d8d8;
    border-radius: 5px;
    overflow: hidden;
  }

  &__img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 200px;
    transition: all 0.4s;
  }

  &__name-wrapper {
    height: 70px;
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    position: relative;
    z-index: 10;
  }

  &__name {
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
  }

  &__favourite {
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("../../assets/img/heart_white.svg");
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    top: 170px;
    right: 10px;
    transition: all 0.2s;

    &--active {
      background-image: url("../../assets/img/heart_active.svg");
    }

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(0.9);
      transition: all 0s;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .meal {
    position: static;
    margin: 20px;
  }
}
</style>
