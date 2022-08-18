<template>
<div>
  <el-empty :description="description" :image="image" :image-size="image_size"></el-empty>
</div>
</template>

<script>
export default {
  name: "ExeEmpty",
  props: {
    image: {
      type: String,
      default: ''
    },
    image_size: {
      type: Number,
      default: ''
    },
    description: {
      type: String,
      default: '描述文字'
    }
  }
}
</script>

<style scoped>

</style>
