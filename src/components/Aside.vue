<template>
  <aside class="aside">
    <div class="aside__btn" @click="toggleActive">Filter</div>
    <div class="aside__content" :class="{'aside__content--active': asideActive}">
      <the-filter 
        :title="'Category'"
        :elements="filteredCategory"
        :activeFilter="getFilters.category"
        @setFilter="setFilter"
        @removeFilter="removeFilter"/>
      <the-filter 
        :title="'Area'"
        :elements="filteredArea"
        :activeFilters="getFilters.area"
        @setFilter="setFilter"
        @removeFilter="removeFilter"/>
      <the-filter 
        :title="'Tags'"
        :elements="filteredTags"
        :activeFilters="getFilters.tags"
        @setFilter="setFilter"
        @removeFilter="removeFilter"/>
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
    filteredCategory() {
      return this.getFilteredMeals.reduce((prev, curr) => {
        if (prev.indexOf(curr.strCategory) === -1){
          prev.push(curr.strCategory)
        } 
        return prev
      }, [])
    },
    filteredArea() {
      return this.getFilteredMeals.reduce((prev, curr) => {
        if (prev.indexOf(curr.strArea) === -1){
          prev.push(curr.strArea)
        } 
        return prev
      }, [])
    },
    filteredTags() {
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
    },
    isDesktop() {
      return this.$store.getters.isDesktop;
    },
    getFilters(){
      return this.$store.getters.getFilters;
    }
  },
  methods: {
    setFilter ([type, text]) {
      this.$store.dispatch('setFilter', [type, text]);
      if (!this.isDesktop) {
        this.toggleActive();
      }
    },
    removeFilter([type, text]) {
      this.$store.dispatch('removeFilter', [type, text]);
      if (!this.isDesktop) {
        this.toggleActive();
      }
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
    border: 1px solid #656565;
    padding: 10px;
    border-radius: 6px;
    background-color: #d2d2d2;
  }
  &__content {
    width: 100%;
    background-color: #d2d2d2;
    padding: 25px 0;
    position: absolute;
    left: -120vw;
    transition: all 0.2s;
    box-shadow: 5px 5px 20px 0 rgba(0,0,0,0.3);
    z-index: 30;

    &--active {
      left: 0;
    }
  }
}
@media only screen and (min-width: 768px) {
  .aside {
    width: 250px;
    display: inline-block;
    float: left;

    &__btn {
      display: none;
    }
    &__content {
      left: 0;
      position: relative;
      box-shadow: none;
    }
  }
}

</style>

