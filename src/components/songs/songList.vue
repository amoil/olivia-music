<template>
  <div class="song-list">
    <ul>
      <li v-for="(song, index) in songs" :key="song.id" class="itemm">
        <p class="count">{{index + 1}}</p>
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song.ar)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Scroll from "@/components/scroll/Scroll";
export default {
  name: "songList",

  props: {
    songs: {
      type: Array
    }
  },
  computed: {},
  methods: {
    selectItem(item, index) {
      this.$emit("select", item, index);
    },
    getDesc(song) {
      if (song.length > 1) {
        var name = "";
        for (var i = 1; i < song.length; i++) {
          name = song[0].name;
          name = name + "/" + song[i].name;
        }
        return name;
      } else {
        return song[0].name;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
.song-list {
  .itemm {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 60px;
    border-bottom: 1px solid rgb(228, 228, 228);
    .count {
      flex: 0 0 50px;
      width: 50px;
      text-align: center;
      color: $color-text-g;
    }
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        margin-top: 4px;
        width: 80%;
        @include no-wrap();
        color: $color-text;
      }
      .desc {
        @include no-wrap();
        // margin-top: 3px;
        width: 80%;
        font-size: 12px;
        color: $color-text-g;
      }
    }
  }
}
</style>
