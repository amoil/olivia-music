<template>
  <div>
    <div class="user">
      <div class="back" @click="back">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="switches-wrapper">
        <Current @change="switchItem" :current-index="currentIndex"/>
      </div>
      <div class="sequence-play">
        <i class="iconfont icon-bofangicon"></i>
        <span class="text">播放全部</span>
        <span class="count">(共0首)</span>
      </div>
      <div class="list-wrapper" ref="listWrapper">
        <keep-alive>
          <component :is="currentComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import Collect from "./components/Collect";
import Play from "./components/Play";
import Current from "./components/Current";
export default {
  name: "User",
  data() {
    return {
      currentIndex: 0
    };
  },
  components: {
    Collect,

    Play,
    Current
  },
  computed: {
    currentComponent() {
      return this.currentIndex === 0 ? "Collect" : "Play";
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    switchItem(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
.user {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: $color-background;
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 0.3s;
  }
  &.slide-enter,
  &.slide-leave-to {
    transform: translate3d(-50%, 0, 0);
    opacity: 0;
  }
  .back {
    position: absolute;
    top: 0;
    left: 4px;
    .fa-angle-left {
      padding: 5px 10px;
      font-size: 30px;
      color: #fff;
    }
  }
  .switches-wrapper {
    display: flex;
    align-items: center;
    background: $color-theme;
    height: 44px;
  }
  .sequence-play {
    position: absolute;
    top: 44px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding-left: 16px;
    border-bottom: 1px solid rgb(228, 228, 228);
    .iconfont {
      font-size: 18px;
      color: $color-text;
      padding-right: 14px;
    }
    .text {
      font-size: $font-size-medium-x;
    }
    .count {
      font-size: $font-size-medium;
      color: $color-text-g;
    }
  }
  .list-wrapper {
    position: absolute;
    top: 84px;
    bottom: 0;
    width: 100%;
    .list-scroll {
      overflow: hidden;
      // width: 100%;
      height: 100%;
    }
  }
  .no-result-wrapper {
    margin-top: 60%;
  }
}
.switches {
  display: flex;
  align-items: center;
  width: 240px;
  margin: 0 auto;
  // border-radius: 5px;
  .switch-item {
    flex: 1;
    padding: 8px;
    margin: 0 20px;
    text-align: center;
    font-size: $font-size-medium;
    color: $color-text-l;
    border-bottom: 2px solid $color-theme;
    &.active {
      border-bottom: 2px solid $color-text-l;
      // background: $color-highlight-background;
      color: #fff;
    }
  }
}
</style>
