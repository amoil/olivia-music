<template>
  <div>
    <div class="search" ref="searchWrapper">
      <div class="search-box-wrapper">
        <i class="fa fa-angle-left" @click="back"></i>
        <search-box @change="onQueryChange" :query="query" ref="searchBox"></search-box>
      </div>
      <Scroll class="search-scroll-wrapper" ref="scroll">
        <div ref="search">
          <div class="search-hots" v-show="!query">
            <p class="title">热门搜索</p>
            <span
              class="search-hots-item"
              v-for="item in hots"
              :key="item.id"
              @click="goSearch()"
            >{{item.first}}</span>
          </div>
          <div class="search-result">
            <search-list :query="query" ref="suggest"></search-list>
          </div>
        </div>
      </Scroll>
    </div>
  </div>
</template>
<script>
import Scroll from "@/components/scroll/Scroll";
import searchBox from "./components/Searchbox";
import searchList from "./components/searchList";
export default {
  name: "Search",
  components: {
    Scroll,
    searchBox,
    searchList
  },
  data() {
    return {
      hots: [],
      query: "",
      clickInfo: "搜索"
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    goSearch() {
      this.$router.push({ name: "searchList" });
    },
    onQueryChange(query) {
      this.query = query;
      console.log(this.query);
    }
  },
  mounted() {
    this.$http.get("/api/search/hot").then(res => {
      this.hots = res.data.result.hots;
    });
  }
};
</script>
<style scoped lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

.search-enter-active,
.search-leave-active {
  transition: all 0.3s;
}
.search-enter,
.search-leave-to {
  transform: translate3d(50%, 0, 0);
  opacity: 0;
}
.search {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  bottom: 0;
  background: $color-background;
  .search-box-wrapper {
    padding: 10px 40px 10px 43px;
    // margin-bottom: 15px;
    background: $color-theme;
    .fa {
      position: absolute;
      left: 5px;
      top: 3px;
      padding: 3px 10px;
      font-size: 30px;
      color: #fff;
    }
  }
  .search-scroll-wrapper {
    height: 100%;
    overflow: hidden;
    .search-hots {
      margin: 0 20px;
      .title {
        padding: 15px 5px 0 5px;
        height: 30px;
        line-height: 30px;
        font-size: $font-size-small-x;
        color: $color-text-g;
      }
      span {
        display: inline-block;
        padding: 3px 5px;
        margin: 4px 4px;
        border: 0.8px solid $color-text-ggg;
        border-radius: 5px;
        line-height: 20px;
        color: $color-text;
        font-size: $font-size-medium;
      }
    }
    .shortcut-wrapper {
      position: relative;
      // top: 178px
      // bottom: 0
      // width: 90%
      margin: 0 auto;
      .shortcut {
        height: 100%;
        overflow: hidden;
        .hot-key {
          margin: 0 20px 20px 20px;
          .title {
            margin-bottom: 20px;
            font-size: $font-size-medium;
            color: $color-text;
          }
          .item {
            display: inline-block;
            padding: 5px 10px;
            margin: 0 20px 10px 0;
            border-radius: 6px;
            background: $color-highlight-background;
            font-size: $font-size-medium;
            color: $color-text;
          }
        }
      }
      .search-history {
        position: relative;
        margin: 10px 25px;
        .title {
          display: flex;
          align-items: center;
          height: 30px;
          font-size: $font-size-small-x;
          color: $color-text-g;
          .text {
            // font-size: 13px;
            flex: 1;
          }
          .clear {
            @include extend-click();
            .icon-clear {
              font-size: $font-size-medium;
              color: $color-text;
            }
          }
        }
      }
    }
    .search-result {
      position: relative;
      width: 100%;
      top: 10px;
      bottom: 0;
    }
  }
}
.router-view {
  z-index: 1000;
}
</style>

