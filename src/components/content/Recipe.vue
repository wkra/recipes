<template>
  <div class="recipe">
    
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  props: {
    meal: {
      type: Object,
      require: true
    }
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
  .recipe {
    opacity: 1;
  }
  @media only screen and (min-width: 768px) {
    .recipe {
      opacity: 1;
    }
  }
</style>

