<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    vertical: {
      //用布尔值指定滚动条的方向   direction用水平或垂直指定滚动条的方向
      type: Boolean,
      default: true //默认为垂直方向
    },
    probeType: {
      //滚动轴响应时机
      type: Number,
      default: 1 //经过短暂时间后响应滚动时间，用以提高性能。
    },
    click: {
      //响应点击事件
      type: Boolean,
      default: true
    },
    mouseWheel: {
      //鼠标滚轮  移动端false禁用即可
      type: Boolean,
      default: false
    }
  },
  methods: {
    //定义一个方法
    _initScroll() {
      //定义_initScroll()方法  _ 表示方法私有
      // 校验
      var { wrapper } = this.$refs; //用解构赋值和$refs拿取父容器

      if (!wrapper) {
        //校验是否拿到
        return; //如果没有拿到直接return
      }

      if (this.scroll) {
        //如果scroll被创建
        this.scroll.refresh(); //刷新(重新计算可滚动值)
        return;
      }

      var options = {
        probeType: this.probeType,
        click: this.click,
        mouseWheel: this.mouseWheel
      };

      if (!this.vertical) {
        //(此时this.vertical为false横向)如果this.vertical取反后为true
        options.scrollX = true;
        options.scrollY = false;

        this._initContentWidth(); // 设置content高度
      }
      this.scroll = new BScroll(wrapper, options);
    },
    _initContentWidth() {
      //定义_initContentWidth()方法
      if (this.vertical) return; //如果this.vertical为false直接return

      // debugger;

      var { content } = this.$refs; ////用解构赋值和$refs拿取content

      if (!content || !content.children.length) return;

      var child = content.children[0];
      var w = child.offsetWidth,
        l = content.children.length;

      content.style.width = l * w + "px";
    },
    refresh() {
      //创建refresh()方法
      this.$nextTick(() => {
        //在所有更新之后
        this._initContentWidth(); // 设置content高度
        this.scroll.refresh(); //刷新(重新计算可滚动高度值)
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      //nextTick()在所有更新之后
      this._initScroll(); //_initScroll()方法
    });
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>