<template>
  <div>
    <Header/>

    <div class="recommend" ref="recommend">
      <scroll class="recommend-content" ref="scroll">
        <div>
          <div>
            <div data-v-37fa4dc7 class="decorate"></div>
            <Carousel/>
          </div>
          <div class="recommend-list" ref="recommendList">
            <Songs/>
          </div>
          <div class="recommend-song" ref="recommendSong">
            <Song/>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/Header";
import Carousel from "./components/Carousel";

import Songs from "./components/Songs";
import Song from "./components/Song";
import Scroll from "@/components/scroll/Scroll";
export default {
  name: "Recommend",
  components: {
    Header,
    Carousel,
    Songs,
    Song,
    Scroll
  }
};
</script>
<style lang="scss">
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .decorate {
      position: absolute;
      top: -30vh;
      z-index: -10;
      background: $color-theme;
      width: 100%;
      height: 50vh;
      vertical-align: inherit;
    }
    .recommend-list {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      min-height: 1px;
    }
    .recommend-song {
      position: relative;
      margin-top: -20px;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      min-height: 1px;
    }
  }
}
</style>

