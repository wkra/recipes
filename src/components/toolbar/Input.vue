<template>
    <input type="text"
      class="input-theme"
      :value="textFilter" 
      @input="setTextFilter"
      placeholder="SEARCH"/>
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
    setTextFilter(e) {
      this.$emit('setTextFilter', e.target.value);
    }
  }
}
</script>

<style lang="less" scoped>
  .input-theme {
    background-color: #ffff8d;
    border: 1px solid #656565;
    border-radius: 10px;
    font-size: 12px;
    padding: 8px 10px 8px 40px;
    outline: none;
    background: url("../../assets/img/loupe.svg") no-repeat scroll 10px 6px;
    margin: 0 80px 0 20px;
    width: 100%;
    letter-spacing: 1px;
    color: #656565;

    &::placeholder {
      color: #a7a6a6;
    }
  }
  @media only screen and (min-width: 768px) {
    .input-theme {
      margin-right: 320px;
      margin-left: 10%;
    }
  }
</style>

