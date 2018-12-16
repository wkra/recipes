<template>
  <div class="recipe">
    <div class="recipe__video" v-if="meal.strYoutube.length">
      <video-theme :videoUrl="meal.strYoutube"/>
    </div>
    <div class="recipe__descriptions">
      <div class="recipe-description">
        <h2 class="recipe-description__title">Instructions</h2>
        <div class="recipe-description__content" v-text="meal.strInstructions"></div>
      </div>
      <div class="recipe-description">
        <h2 class="recipe-description__title">Ingredients + Measure</h2>
        <div class="recipe-description__content">
          <div
            class="recipe-description__product"
            v-for="(product, index) in products"
            :key="meal.idMeal + index"
          >
            <span v-text="product.ingredient"></span>
            <span v-if="product.measure !== ''">-
              <span v-text="product.measure"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoTheme from "./VideoTheme";

export default {
  name: "Recipe",
  components: {
    VideoTheme
  },
  props: {
    meal: {
      type: Object,
      require: true
    }
  },
  computed: {
    products() {
      const products = [],
        strIngredient = "strIngredient",
        strMeasure = "strMeasure";

      let i = 1,
        ingredient = this.meal[strIngredient + i];

      while (typeof ingredient !== "undefined") {
        if (ingredient !== "") {
          products.push({
            ingredient: ingredient,
            measure: this.meal[strMeasure + i]
          });
        }
        i += 1;
        ingredient = this.meal[strIngredient + i];
      }

      return products;
    }
  }
};
</script>

<style lang="less" scoped>
.recipe {
  border: 2px solid #d8d8d8;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  position: relative;
  left: -2px;
  margin-top: 40px;
  background-color: #fff;
  z-index: 20;

  &__video {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
    position: relative;
  }
}

.recipe-description {
  padding: 20px;

  &__title {
    margin-bottom: 20px;
  }
  &__content {
    font-size: 12px;
    line-height: 15px;
  }
}

@media only screen and (min-width: 1024px) {
  .recipe {
    position: absolute;
    width: calc(100% - 80px);
    max-width: none;
    left: 40px;
    margin-bottom: 20px;
    display: flex;

    &__descriptions {
      width: 100%;
    }

    &__video {
      max-width: 300px;
      margin: 0 20px 20px 0;
      border-radius: 4px;
    }
  }
}
</style>

