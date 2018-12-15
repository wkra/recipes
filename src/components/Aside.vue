<template>
  <div>
    <the-filter 
      :title="'Category'"
      :elements="getFilteredCategory"
      @setFilter="setFilter"/>
    <the-filter 
      :title="'Area'"
      :elements="getFilteredArea"
      @setFilter="setFilter"/>
    <the-filter 
      :title="'Tags'"
      :elements="getFilteredTags"
      @setFilter="setFilter"/>
  </div>
  
</template>

<script>
import TheFilter from './aside/TheFilter.vue'

export default {
  name: 'Aside',
  components: {
    TheFilter
  },
  computed: {
    getFilteredMeals (){
      return this.$store.getters.getFilteredMeals;
    },
    getFilteredCategory() {
      return this.getFilteredMeals.reduce((prev, curr) => {
        if (prev.indexOf(curr.strCategory) === -1){
          prev.push(curr.strCategory)
        } 
        return prev
      }, [])
    },
    getFilteredArea() {
      return this.getFilteredMeals.reduce((prev, curr) => {
        if (prev.indexOf(curr.strArea) === -1){
          prev.push(curr.strArea)
        } 
        return prev
      }, [])
    },
    getFilteredTags() {
      return this.getFilteredMeals.reduce((prev, curr) => {
        if (curr.strTags !== null) {
          let tags = curr.strTags.split(",");
          tags.forEach((el) => {
            if (prev.indexOf(el) === -1){
              prev.push(el)
            }
          })
        }
        return prev
      }, [])
    }
  },
  methods: {
    setFilter ([type, text]) {
      this.$store.commit("setFilter", [type, text]);
    }
  }
}
</script>

<style lang="less">

</style>

