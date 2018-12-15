<template>
  <div class="logo">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="less">
.logo {
  width: 40px;
  height: 30px;

  span {
    width: 40px;
    height: 3px;
    background-color: #494729;
    display: block;
    margin: 5px 0;
    border-radius: 3px;
  }
}

</style>

