<template>
  <div>
    <Header/>
    <div class="singer" ref="singer">
      <Scroll class="listview" ref="listview">
        <ul>
          <li v-for="group in singers" class="list-group" :key="group.id" ref="listGroup">
            <h2 class="list-group-title">热门</h2>
            <ul>
              <li
                v-for="item in group"
                class="list-group-item"
                :key="item.id"
                @click="setId({id:item.id}),clickChange()"
              >
                <img v-lazy="item.img1v1Url" class="avatar">
                <span class="name">{{ item.name }}</span>
              </li>
            </ul>
          </li>
        </ul>
        <!-- <div
          class="list-shortcut"
          @touchstart="onShortcutStart"
          @touchmove.stop.prevent="onShortcutMove"
        ></div>-->
        <div class="list-shortcut">
          <ul>
            <li
              v-for="(item, index) in aside"
              class="item"
              :data-index="index"
              :key="item.id"
            >{{ item }}</li>
          </ul>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Scroll from "@/components/scroll/Scroll";
import { mapMutations } from "vuex";
const pinyin = require("pinyin");
export default {
  name: "Singer",
  components: {
    Header,
    Scroll
  },
  data() {
    return {
      singers: [],
      abc: [],
      aside: [],
      num: [],
      name: []
    };
  },

  computed: {
    count() {
      const set = Array.from(new Set(this.abc));

      var obj = {};
      for (var i = 0; i < set.length; i++) {
        var count = 0;
        for (var j = 0; j < this.abc.length; j++) {
          if (this.abc[j] === set[i]) {
            count++;
          }
        }
        obj = {
          first: set[i],
          last: count
        };
        this.num.push(obj);
      }
      return this.num;
    }
  },
  methods: {
    clickChange() {
      this.$router.replace({ path: "/music" });
    },
    ...mapMutations(["setId"])
  },
  mounted() {
    this.$http.get("/api/top/artists").then(res => {
      const list = [];
      const abc = [];
      list.push(res.data.artists);

      for (const i of list) {
        for (const j of i) {
          var py = pinyin(j.name, {
            style: pinyin.STYLE_FIRST_LETTER
          })
            .join("")
            .substr(0, 1);
          if (/^[a-zA-Z]$/.test(py)) {
            this.abc.push(py.toUpperCase());
          }
        }
      }
      this.aside = Array.from(new Set(this.abc)).sort();

      this.singers.push(list[0].slice(0, 10));
      console.log(this.singers[0][0]);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
.listview {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;
  .list-group {
    // padding: 10px 0;
    .list-group-title {
      height: 20px;
      line-height: 20px;
      padding-left: 12px;
      margin-bottom: 10px;
      font-size: $font-size-small;
      color: #fff;
      background: rgba(0, 0, 0, 0.1);
    }
    .list-group-item {
      display: flex;
      align-items: center;
      padding: 5px 0;
      margin: 0 5px;
      border-bottom: 1px solid rgb(228, 228, 228);
      &:last-child {
        border: none;
        margin-bottom: 10px;
      }
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 3px;
      }
      .name {
        margin-left: 20px;
        color: $color-text;
        font-size: $font-size-medium;
      }
    }
  }
  .list-shortcut {
    position: absolute;
    z-index: 30;
    right: 3px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 200px 0;
    border-radius: 3px;
    text-align: center;
    font-family: Helvetica;
    .item {
      padding: 5px 5px;
      line-height: 1;
      color: $color-text-g;
      font-size: $font-size-small;
      font-weight: bold;
      &.current {
        color: $color-theme;
      }
    }
  }
  .list-fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .fixed-title {
      height: 20px;
      line-height: 20px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>
