<template>
  <ul class="switches">
    <li>
      <span
        class="switch-item"
        v-for="(item, index) in switches"
        :key="item.id"
        :class="{'active': currentIndex === index}"
        @click="switchItem(index)"
      >{{item.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Current",
  data() {
    return {
      switches: [{ id: 0, title: "我的收藏" }, { id: 1, title: "正在播放" }]
    };
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchItem(index) {
      this.$emit("change", index);
    }
  }
};
</script>

<style scoped lang="scss" scoped>
@import "@/common/scss/variable.scss";

.switches {
  display: flex;
  align-items: center;
  width: 240px;
  margin: 0 auto;
  // border-radius: 5px;
  .switch-item {
    touch-action: none;
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
