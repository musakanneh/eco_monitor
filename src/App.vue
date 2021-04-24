<template>
  <div id="app">
    <!-- <div id="app"> -->
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      mobileView: "true",
    };
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  color: #484848;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
* {
  display: flex;
  flex-direction: column;
  flex: auto;
  height: 100%;
}
</style>
