<template>
  <div id="app">
    <Toolbar/>
    <Aside/>
    <Content/>
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Toolbar from "./components/Toolbar.vue";
import Aside from "./components/Aside.vue";

export default {
  name: "app",
  components: {
    Content,
    Toolbar,
    Aside
  },
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("initLocalStorage");
  }
};
</script>

<style lang="less">
@import "./assets/css/reset.css";
@import "./assets/css/styleguide.less";
</style>
