<template>
  <div class="favourite" :class="{'favourite--active': isActive}">
    <div class="favourite-btn" @click="toggleActive">
      <span class="favourite-btn__text">FAVOURITES</span>
      <span class="favourite-btn__img"></span>
    </div>
    <div class="favourite-element__wrapper" v-show="isActive">
      <div
        class="favourite-element"
        v-for="fav in favourite"
        :key="fav.idMeal"
        @click="initFavourite(fav.strMeal)"
      >
        <span class="favourite-element__img" :style="{backgroundImage: `url(${fav.strMealThumb})`}"></span>
        <span class="favourite-element__name" v-text="fav.strMeal"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favourite",
  props: {
    favourite: {
      type: Array
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    initFavourite(value) {
      this.$emit("favouriteHandler", value.toLowerCase());
      this.toggleActive();
    }
  }
};
</script>

<style lang="less" scoped>
.favourite {
  border: 1px solid #656565;
  border-radius: 10px;
  font-size: 12px;
  padding: 6px 20px;
  height: 32px;

  width: 55px;
  margin: 0 20px;
  text-align: center;
  transition: all 0.2s;
  position: absolute;
  right: 0;
  top: 19px;

  &--active {
    height: auto;
    background-color: #fff;
    width: 300px;
    z-index: 45;

    .favourite-btn {
      &__text {
        display: block;
      }
    }
  }
}
.favourite-btn {
  cursor: pointer;

  &__text {
    display: none;
  }

  &__img {
    background-image: url("../../assets/img/heart_black.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
    top: 5px;
  }
}

.favourite-element {
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;

  &__wrapper {
    display: block;
    margin: 20px 0;
  }

  &__img {
    width: 45px;
    height: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    margin-right: 20px;
  }

  &__name {
    width: 183px;

    &:hover {
      font-weight: bold;
    }
  }
}

@media only screen and (min-width: 768px) {
  .favourite {
    width: 300px;
    padding: 6px 25px;
  }
  
  .favourite-btn {
    &__text {
      display: inline-block;
    }
  }
}
</style>
