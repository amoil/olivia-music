<template>
  <div>
    <div class="list-inner">
      <div class="no-result-wrapper">
        <div class="no-result">
          <div class="no-result-icon">
            <i class="fa fa-music"></i>
          </div>
          <p class="no-result-text">去寻找属于你自己最爱的MUSIC吧~</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Play"
};
</script>
<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
.no-result-wrapper {
  margin-top: 60%;
}
.no-result {
  text-align: center;
  .no-result-icon {
    color: $color-text-gg;
    font-size: 50px;
  }
  .no-result-text {
    margin-top: 30px;
    font-size: $font-size-medium;
    color: $color-text;
  }
}
</style>