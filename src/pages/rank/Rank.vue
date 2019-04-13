<template>
  <div>
    <Header/>
    <div class="rank" ref="rank">
      <scroll class="toplist" ref="scroll">
        <ul>
          <li class="item" v-for="item in rankList" :key="item.id" @click="selectItem(item)">
            <div class="icon">
              <img v-lazy="item.coverImgUrl" width="100" height="100">
            </div>
            <ul class="songlist">
              <li class="song" v-for="(song, index) in item.tracks" :key="index">
                <span>{{index + 1}}.</span>
                <span>{{song.name}} - {{song.ar[0].name}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </scroll>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/Header";
import Scroll from "@/components/scroll/Scroll";
export default {
  name: "Rank",
  components: {
    Header,
    Scroll
  },
  data() {
    return {
      rankList: [],
      arr1: [],
      value: [1, 2, 3, 4, 22, 23]
    };
  },

  methods: {
    idx() {
      for (const id of this.value) {
        return id;
      }
    },
    selectItem() {}
  },

  mounted() {
    for (const id of this.value) {
      this.$http.get(`/api/top/list?idx=${id}`).then(res => {
        var list = "";
        list = res.data.playlist;
        list.tracks = list.tracks.slice(0, 3);
        this.rankList.push(list);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

.rank {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .toplist {
    height: 100%;
    overflow: hidden;
    padding-top: 5px;
    .item {
      display: flex;
      margin: 0 10px;
      padding: 3px 0;
      height: 100px;
      border-bottom: 1px solid rgb(228, 228, 228);
      &:last-child {
        padding-bottom: 20px;
      }
      .icon {
        flex: 0 0 100px;
        width: 100px;
        height: 100px;
        img {
          border-radius: 3px;
        }
      }
      .songlist {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        height: 100px;
        overflow: hidden;
        // background: $color-dialog-background;
        color: $color-text;
        font-size: $font-size-small-x;
        .song {
          @include no-wrap();
          line-height: 30px;
        }
      }
    }
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
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