<template>
  <div>
    <div class="slider-wrapper">
      <div class="slider">
        <div class="slider-group">
          <slot></slot>
        </div>
        <div class="block">
          <el-carousel :interval="4000" arrow="never">
            <el-carousel-item v-for="(item,index) in imgList" :key="index">
              <img :src="item.url">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      imgList: [
        {
          url:
            "http://p1.music.126.net/Wwkozl6e0vxvA59T99W0FQ==/109951163937363418.jpg"
        },
        {
          url:
            "http://p1.music.126.net/94g0sOPpzanDXqePJZ1wEg==/109951163939359951.jpg"
        },
        {
          url:
            "http://p1.music.126.net/c7UHVwKlkmrgx7Xtk7xM-A==/109951163942005218.jpg"
        },
        {
          url:
            "http://p1.music.126.net/N4nWleCQVsAlUNhVaYxhCQ==/109951163942348275.jpg"
        },
        {
          url:
            "http://p1.music.126.net/1mm9AwV7MGcf1HT5Ugg0Ew==/109951163941936343.jpg"
        },
        {
          url:
            "http://p1.music.126.net/kvSpArunm2yRH0zsH4-a2g==/109951163941944651.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scope>
@import "@/common/scss/variable.scss";
.el-carousel__indicator {
  .el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    opacity: 0.2;
    background: #fff;
  }
}
.slider-wrapper {
  width: 96%;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  .slider {
    min-height: 1px;
    position: relative;
    .block {
      width: 100%;
      height: 148px;
      .el-carousel {
        width: 100%;
        height: 100%;
        .el-carousel__container {
          position: relative;
          height: 100%;

          .el-carousel__item {
            width: 100%;
            box-sizing: border-box;

            overflow: hidden;
            pointer-events: auto;
            img {
              width: 100%;
              display: block;
            }
          }
        }
      }
    }
  }
}

.dots {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 12px;
  text-align: center;
  height: 336px;
  // font-size: 0;
  .dot {
    display: inline-block;
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: $color-text-l;
    &.active {
      // width: 10px;
      border-radius: 5px;
      background: $color-highlight-background;
    }
  }
}
</style>

