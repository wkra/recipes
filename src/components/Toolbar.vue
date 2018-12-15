<template>
  <nav>
    <div class="logo"></div>
    <Input 
     :textFilter="textFilter"
     @setFilter="setFilter"/>
  </nav>
</template>

<script>
import Input from './toolbar/Input.vue'
import Favourite from './toolbar/Favourite.vue'

export default {
  name: 'Toolbar',
  components: {
    Input,
    Favourite
  },
  computed: {
    textFilter (){
      return this.$store.getters.getTextFilter;
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


