<template>
  <div class="block" >
    <el-carousel
        :initial_index="initial_index"
        :trigger="trigger"
        :autoplay="autoplay"
        :interval="interval"
        :indicator_position="indicator_position"
        :arrow="arrow"
        :type="type"
        :loop="loop"
        :direction="direction"
    >
      <el-carousel-item v-for="item in imageUrl" :key="item.id">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "ExeCarousel",
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    initial_index: {
      type: Number,
      default: 0
    },
    trigger: {
      type: String,
      default: ''
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    indicator_position: {
      type: String,
      default: ''
    },
    arrow: {
      type: String,
      default: "hover"
    },
    type: {
      type: String,
      default: ''
    },
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

img{
  height: 100%;
  width: 100%;
}
</style>
