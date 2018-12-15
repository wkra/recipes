<template>
  <div class="meal">
    <div class="meal__img" :style="{backgroundImage: `url(${thumb})`}">
      <div
        class="meal__favourite"
        :class="{'meal__favourite--active': isFavourite}"
        @click="favouriteHandler"
      ></div>
    </div>
    <div class="meal__name-wrapper">
      <div class="meal__name" v-text="name"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Meal',
  props: {
    thumb: {
      type: String
    },
    name: {
      type: String
    },
    idMeal: {
      type: String
    },
    isFavourite: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    favouriteHandler() {
      if (this.isFavourite) {
        this.$emit("removeFavourite", this.idMeal);
      } else {
        this.$emit("addFavourite", this.idMeal);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.meal {
  border: 2px solid #d8d8d8;
  border-radius: 5px;
  margin: 20px;
  width: 300px;
  position: relative;

  &__img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 200px;
    position: relative;
  }

  &__name-wrapper {
    height: 70px;
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;
    padding: 10px;
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
    background-image: url("../../assets/img/heart_white4.svg");
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    bottom: 15px;
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

@media only screen and (min-width: 768px) {
  .meal {
  }
}
</style>
