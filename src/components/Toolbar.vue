<template>
  <nav class="toolbar">
    <Logo />
    <Input 
     :textFilter="textFilter"
     @setFilter="setFilter"/>
     <Favourite />
  </nav>
</template>

<script>
import Input from './toolbar/Input.vue'
import Favourite from './toolbar/Favourite.vue'
import Logo from './toolbar/Logo.vue'

export default {
  name: 'Toolbar',
  components: {
    Input,
    Favourite,
    Logo
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

<style lang="less" scoped>
.toolbar {
  height: 70px;
  background-color: #ffff8d;
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

</style>


