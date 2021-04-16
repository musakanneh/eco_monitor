<template>
  <div id="app">
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
  // methods: {
  //   isMobile(){
  //     if (Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //       return true;
  //         }else{
  //           return false;
  //         }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  color: #484848;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
</style>
