<template>
  <div>
    <div class="filter__title" v-text="title"></div>
    <div class="filter__box">
      <div class="filter__element" 
        v-for="element in elements"
        :key="element">
        <span class="filter__btn"
          @click="emitFilterChange('')">x</span>
        <span class="filter__text"
          v-text="element"
          @click="emitFilterChange(element)"></span>
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
    }
  },
  methods: {
    emitFilterChange(text) {
      this.$emit('setFilter', [this.title.toLowerCase(), text]);
    }
  }
}
</script>

<style lang="less">

</style>

