<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Raleway", sans-serif;
  box-sizing: border-box;
  color: #484848;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

</style>
