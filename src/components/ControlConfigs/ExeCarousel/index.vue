<template>
  <div class="block" >
    <el-carousel
        :style="{'height': height + '%'}"
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
      <el-carousel-item v-for="item in selectpic" :key="item.index" >
        <h3 class="small"><img :src="item.pic" alt=""></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "ExeCarousel",
  props: {
    height: {
      type: Number,
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
    },
    selectpic:{
      type:Array,
      default: function() {
            return [{pic:'./src/asset/img/1.jpg'},{pic:'./src/asset/img/1.jpg'},{pic:'./src/asset/img/1.jpg'}]
        }
    },
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
</style>
