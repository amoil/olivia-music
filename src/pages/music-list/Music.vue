<template>
  <transition name="slide" mode="out-in">
    <div class="music-list">
      <div class="header" ref="header">
        <div class="back" @click="back">
          <i class="fa fa-angle-left"></i>
        </div>
        <div class="text">
          <h1 class="title">歌手</h1>
        </div>
      </div>
      <scroll class="list" ref="list">
        <div class="music-list-wrapper">
          <div class="bg-image" ref="bgImage">
            <div class="filter"></div>
            <div class="text">
              <div v-if="singer[0]">
                <h2 class="list-title">{{singer[0].name}}</h2>
              </div>
              <!-- <p class="play-count" v-if="playCount">
                <i class="fa fa-headphones"></i>
                {{playCount}}
              </p>-->
            </div>
          </div>
          <div class="song-list-wrapper">
            <div class="sequence-play" v-show="songs.length">
              <i class="iconfont icon-bofangicon"></i>
              <span class="text">播放全部</span>
              <span class="count">(共{{songs.length}}首)</span>
            </div>

            <song-list :songs="songs"></song-list>
          </div>
        </div>
      </scroll>
      <!-- <div v-show="!songs.length" class="loading-content">
        <loading></loading>
      </div>-->
    </div>
  </transition>
</template>
<script>
import songList from "@/components/songs/songList";
import Scroll from "@/components/scroll/Scroll";
import { mapState } from "vuex";
export default {
  name: "Music",
  components: {
    songList,
    Scroll
  },
  data() {
    return {
      singer: [],
      songs: []
    };
  },
  computed: {
    ...mapState(["id"])
  },
  methods: {
    back() {
      this.$router.back();
    }
  },
  mounted() {
    console.log(this.id);
    this.$http.get(`/api/artists?id=${this.id}`).then(res => {
      this.singer.push(res.data.artist);
      this.songs = res.data.hotSongs;
      console.log(this.songs);
    });
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s;
}
.slide-enter,
.slide-leave-to {
  transform: translate3d(30%, 0, 0);
  opacity: 0;
}

.music-list {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 44px;
    color: #fff;
    z-index: 100;
    .back {
      position: absolute;
      top: 0;
      left: 4px;
      .fa-angle-left {
        padding: 5px 10px;
        font-size: 30px;
      }
    }
    .text {
      position: absolute;
      left: 38px;
      line-height: 44px;
      font-size: $font-size-medium-x;
      @include no-wrap();
    }
  }
  .list {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: $color-background;
    .music-list-wrapper {
      .bg-image {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 75%;
        transform-origin: top;
        background-size: cover;
        background-position: 0 30%;
        .filter {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          opacity: 0.2;
        }
        .text {
          position: absolute;
          width: 80%;
          height: 40px;
          bottom: 50px;
          left: 15px;
          color: #fff;
          .play-count {
            position: absolute;
            bottom: -16px;
            font-size: $font-size-small;
          }
          .list-title {
            position: absolute;
            bottom: 0;
            font-size: $font-size-medium-x;
            line-height: 18px;
            font-weight: bold;
            letter-spacing: 1px;
          }
        }
      }
      .song-list-wrapper {
        padding: 41px 0 20px 0;
        border-radius: 10px;
        position: relative;
        top: -20px;
        background: $color-background;
        .sequence-play {
          position: absolute;
          // left: 8;
          top: 0px;
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
        .songs {
          width: 100%;
          height: 400px;
        }
      }
      // position: fixed;
      // top: 0;
      // bottom: 0;
      // width: 100%;
      // background: $color-background;
      // height: 100%;
      // z-index: 20;
      // overflow: hidden;
      // padding: 5px 0 20px 0;
    }
  }
  .loading-content {
    position: fixed;
    width: 100%;
    top: 70%;
    transform: translateY(-50%);
  }
}
</style>
