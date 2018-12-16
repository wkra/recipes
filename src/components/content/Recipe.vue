<template>
  <div class="recipe">
    <div class="recipe__video" v-if="videoUrl.length">
      <video-theme :videoUrl="videoUrl"/>
    </div>
    <div class="recipe__descriptions">
      <div class="recipe-description">
        <h2 class="recipe-description__title">Instructions</h2>
        <div class="recipe-description__content" v-text="instructions"></div>
      </div>
      <div class="recipe-description">
        <h2 class="recipe-description__title">Ingredients + Measure</h2>
        <div class="recipe-description__content">
          <div
            class="recipe-description__product"
            v-for="(ingredient, index) in ingredients"
            :key="idMeal + index"
          >
            <span v-text="ingredient"></span>
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
    idMeal: {
      type: String
    },
    instructions: {
      type: String
    },
    ingredients: {
      type: Array
    },
    videoUrl: {
      type: String
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
  text-align: left;

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

