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
      <el-carousel-item v-for="item in imageURL" :key="item.id">
        <img :src="item.url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "ExeCarousel",
  data(){
    return{
      imageURL: [
        {
          id: 0,
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0827%2Fc0c92bd51bb72e6d12d5b877dce338e8.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650366164&t=d27e21189b6673f5e8c641161ede768b"
        },
        {
          id: 1,
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0827%2Fc0c92bd51bb72e6d12d5b877dce338e8.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650366164&t=d27e21189b6673f5e8c641161ede768b"
        },
        {
          id: 2,
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0827%2Fc0c92bd51bb72e6d12d5b877dce338e8.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650366164&t=d27e21189b6673f5e8c641161ede768b"
        },
        {
          id: 3,
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0827%2Fc0c92bd51bb72e6d12d5b877dce338e8.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650366164&t=d27e21189b6673f5e8c641161ede768b"
        }
      ]
    }
  },
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
