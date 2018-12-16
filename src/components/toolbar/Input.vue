<template>
  <div class="input-theme__wrapper">
    <input
      type="text"
      class="input-theme"
      :value="textFilter"
      @input="setTextFilter"
      placeholder="SEARCH"
    >
    <div
      class="input-theme__clear"
      :class="{'input-theme__clear--active': isClearActive}"
      @click="resetTextFilter"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    textFilter: {
      type: String
    }
  },
  computed: {
    isClearActive() {
      return this.textFilter.length;
    }
  },
  methods: {
    setTextFilter(e) {
      this.$emit("setTextFilter", e.target.value);
    },
    resetTextFilter() {
      this.$emit("setTextFilter", "");
    }
  }
};
</script>

<style lang="less" scoped>
.input-theme {
  background-color: #ffff8d;
  border: 1px solid #656565;
  border-radius: 10px;
  font-size: 12px;
  padding: 8px 25px 8px 40px;
  outline: none;
  background: url("../../assets/img/loupe.svg") no-repeat 10px 6px;
  width: 100%;
  letter-spacing: 1px;
  color: #656565;

  &::placeholder {
    color: #a7a6a6;
  }

  &__wrapper {
    position: relative;
    margin: 0 80px 0 20px;
    width: 100%;
  }
  
  &__clear {
    position: absolute;
    right: 4px;
    top: 3px;
    cursor: pointer;
    opacity: 0;
    width: 25px;
    height: 25px;

    &--active {
      opacity: 1;
      transition: opacity 1s;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 15px;
        height: 1px;
        background-color: #656565;
        right: 4px;
        top: 12px;
      }

      &::before {
        transform: rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .input-theme {
    &__wrapper {
      margin-right: 320px;
      margin-left: 10%;
    }
  }
}
</style>
