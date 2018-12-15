<template>
  <aside class="aside">
    <div class="aside__btn">Filter</div>
    <div class="aside__content" :class="{'aside__content--active': asideActive}">
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
    
  </aside>
  
</template>

<script>
import TheFilter from './aside/TheFilter.vue'

export default {
  name: 'Aside',
  components: {
    TheFilter
  },
  data () {
    return {
      asideActive: false
    }
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
    },
    toggleActive () {
      this.asideActive = !this.asideActive;
    }
  }
}
</script>

<style lang="less" scoped>
.aside {
  

  &__btn {
    text-transform: uppercase;
    border: 2px solid #656565;
    padding: 10px;
    border-radius: 6px;
  }
  &__content {
    width: 250px;
    background-color: #d2d2d2;
  }
}
@media only screen and (min-width: 768px) {
  .aside {
    &__btn {
      display: none;
    }
  }
}

</style>

