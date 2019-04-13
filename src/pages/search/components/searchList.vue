<template>
  <div class="suggest">
    <div class="search-suggest" v-show="query">
      <p class="title">最佳匹配</p>
      <div class="search-suggest-item" @click="clickHandle">
        <div v-if="list.artists">
          <img v-lazy="list.artists[0].img1v1Url" width="50" height="50">
          <span>歌手：{{singers[0].name}}</span>
        </div>
      </div>

      <div class="search-suggest-item" @click="clickHandle">
        <div v-if="list.playlists">
          <img v-lazy="list.playlists[0].coverImgUrl" width="50" height="50">
        </div>
        <div class="text">
          <div v-if="list.playlists">
            <p>歌单：{{list.playlists[0].name}}</p>
          </div>
          <div v-if="list.albums">
            <p class="singer">{{list.albums[0].artist.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <ul class="suggest-list" ref="suggestList">
      <div v-if="songs">
        <li @click="clickHandle" class="suggest-item" v-for="(item, index) in songs" :key="index">
          <div class="icon">
            <i></i>
          </div>
          <div class="name">
            <p class="song">{{item.name}}</p>
            <p class="singer">{{item.artists[0].name}}</p>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "searchList",
  data() {
    return {
      list: [],
      songs: [],
      singers: [],
      id: -1
    };
  },
  props: {
    query: {
      type: String,
      default: ""
    }
  },
  computed: {
    ids() {
      return (this.id = this.singers[0].id);
    }
  },
  methods: {
    getSinger(query) {
      this.$http.get(`/api/search/suggest?keywords= ${query}`).then(res => {
        this.list = res.data.result;
        this.singers = res.data.result.artists;
        this.songs = res.data.result.songs;
        console.log(this.singers[0].id);
      });
    },
    clickHandle() {
      this.$router.replace({ path: "/music" });
      this.setId(this.ids);
    },
    ...mapMutations(["setId", "setSinger", "setMusic"])
  },
  watch: {
    query: function(newQuery, oldQuery) {
      this.getSinger(newQuery);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

.suggest {
  height: 100%;
  overflow: hidden;
  .search-go {
    font-size: $font-size-medium;
    margin-left: 20px;
    color: $color-theme;
  }
  .search-suggest {
    .title {
      padding-left: 20px;
      padding-bottom: 10px;
      color: $color-theme;
      font-size: 11px;
    }
    .search-suggest-item {
      display: flex;
      align-items: center;
      padding: 8px 20px;
      border-bottom: 1px solid rgb(228, 228, 228);
      font-size: $font-size-medium;
      img {
        flex: 0 0 50px;
        padding-right: 15px;
      }
      .text {
        width: 100%;
        p {
          padding: 3px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .singer {
          font-size: 12px;
          color: $color-text;
        }
      }
    }
  }
  .suggest-list {
    padding-bottom: 30px;
    .suggest-item {
      display: flex;
      padding: 3px 20px;
      height: 50px;
      align-items: center;
      border-bottom: 1px solid rgb(228, 228, 228);
      p {
        padding: 3px 0;
      }
      .song {
        font-size: $font-size-medium-x;
        color: $color-text;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        // padding-bottom: 20px
      }
      .singer {
        font-size: 12px;
        color: $color-text-g;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .icon {
      // flex: 0 0 30px
      // width: 30px
      [class^="icon-"] {
        font-size: 14px;
        color: $color-text;
      }
    }
    .name {
      flex: 1;
      font-size: $font-size-medium;
      color: $color-text;
      overflow: hidden;
      .text {
        @include no-wrap();
      }
    }
  }
}
.no-result-wrapper {
  position: fixed;
  overflow: hidden;
  left: 50%;
  top: 40vh;
  transform: translatex(-50%);
  color: $color-text;
}
</style>
