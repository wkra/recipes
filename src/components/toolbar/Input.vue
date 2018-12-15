<template>
  <div>
    <input type="text" :value="textFilter" @input="emitInputChange"/>
  </div>
  
</template>

<script>
export default {
  name: 'Input',
  props: {
    textFilter: {
      type: String
    }
  },
  methods: {
    emitInputChange(e) {
      this.$emit('setFilter', ['text', e.target.value]);
    }
  }
  
}
</script>

<style lang="less">

</style>

