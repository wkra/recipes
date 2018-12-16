<template>
  <div class="logo">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style lang="less" scoped>
.logo {
  width: 46px;
  height: 30px;

  span {
    width: 40px;
    background-color: #494729;
    display: block;
    margin: 5px 0;
    border-radius: 4px;
    border: 2px solid #494729;
  }
}

@media only screen and (min-width: 768px) {
  .logo {
    width: 250px;
  }
}
</style>
