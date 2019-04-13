<template>
  <div>
    <h1 class="title">最新专辑</h1>
    <ul>
      <li class="item" v-for="item in recommendMusic.albums" :key="item.id">
        <div class="icon">
          <img v-lazy="item.blurPicUrl">
        </div>
        <p class="text">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Song",
  data() {
    return {
      recommendMusic: []
    };
  },
  mounted() {
    this.$http.get("/api/album/newest").then(res => {
      this.recommendMusic = res.data;
      // console.log(res.data);
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
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .text {
    line-height: 16px;
    text-align: left;
    height: 16px;
    white-space: pre-wrap;
    overflow: hidden;
    font-size: $font-size-small;
  }
}
</style>