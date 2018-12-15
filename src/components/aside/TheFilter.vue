<template>
  <div class="filter">
    <div class="filter__title" v-text="title"></div>
    <div class="filter__box">
      <div class="filter__element" 
        v-for="element in elements"
        :key="element"
        >
        <span class="filter__btn"
          @click="emitRemoveFiltere(element)">x</span>
        <span class="filter__text"
          v-text="element"
          @click="emitSetFilter(element)"></span>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'TheFilter',
  props: {
    title: {
      type: String
    },
    elements: {
      type: Array
    },
    activeFilter: {
      type: Array
    }
  },
  methods: {
    emitSetFilter(text) {
      this.$emit('setFilter', [this.title.toLowerCase(), text]);
    },
    emitRemoveFiltere(text) {
      this.$emit('removeFilter', [this.title.toLowerCase(), text]);
    }
  }
}
</script>

<style lang="less" scoped>
.filter {
  padding: 25px 15px;

  &__title {
    font-weight: 300;
    font-size: 22px;
    line-height: 22px;
    margin-bottom: 15px;
  }

  &__box {
    border: 1px solid #656565;
    border-radius: 6px;
    padding: 10px;
    min-height: 110px;
  }

  &__element {
    background-color: #fff;
    border-radius: 6px;
    font-size: 9px;
    text-transform: uppercase;
    margin: 5px;
    display: inline-block;
    padding: 5px;
    letter-spacing: 1px;
  }

  &__btn {
    padding: 0 15px 0 5px;
    cursor: pointer;
  }

  &__text {
    cursor: pointer;
  }
}

</style>

