<template>
  <div class="meal">
    <img :src="thumb"/>
    <h3 v-text="name"></h3>
    <div @click="addToFavourite">ADD TO FAVOURITE</div>
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
    }
  
  },
  methods: {
      addToFavourite () {
            this.$store.dispatch('addFavourite', this.idMeal);



      }
    }
}
</script>

<style lang="less">

</style>


