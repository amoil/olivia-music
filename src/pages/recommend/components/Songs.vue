<template>
  <div>
    <h1 class="title">推荐歌单</h1>
    <ul>
      <li class="item" v-for="item in playList.result" :key="item.id">
        <div class="icon" @click="selectList(item)">
          <div class="gradients"></div>
          <img v-lazy="item.picUrl">
        </div>
        <p class="play-count">
          <i class="fa fa-headphones"></i>
          {{Math.floor(item.playCount / 10000) }}万
        </p>
        <div class="text">
          <p class="name">{{item.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Songs",
  data() {
    return {
      playList: []
    };
  },
  mounted() {
    this.$http.get("/api/personalized").then(res => {
      this.playList = res.data;
      // console.log(this.playList.result[0].picUrl);
    });
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
.title {
  height: 65px;
  line-height: 65px;
  padding-left: 1.5%;
  text-align: left;
  font-size: $font-size-medium;
  font-weight: bold;
  color: $color-text;
}
.item {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 33%;
  padding: 0 1%;
  .icon {
    position: relative;
    display: inline-block;
    width: 100%;
    margin-bottom: 5px;
    .gradients {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(
        rgba(109, 109, 109, 0.4),
        rgba(255, 255, 255, 0)
      );
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .play-count {
    position: absolute;
    top: 5px;
    right: 8px;
    font-size: $font-size-small-s;
    color: $color-text-l;
  }
  .text {
    float: left;
    line-height: 16px;
    text-align: left;
    height: 40px;
    line-height: 16px;
    overflow: hidden;
    margin-bottom: 10px;
    font-size: $font-size-small;

    .name {
      white-space: pre-wrap;
      overflow: hidden;
    }
  }
}
</style>