<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Recommend from "@/pages/recommend/Recommend";
import Rank from "@/pages/rank/Rank";
import Singer from "@/pages/singer/Singer";
export default {
  name: "App",
  components: {
    Recommend,
    Rank,
    Singer
  }
};
</script>
<style lang="scss">
@import "@/common/scss/index.scss";
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
