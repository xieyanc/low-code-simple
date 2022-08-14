<template>
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
</template>

<script>
export default {
  name: "ExeBacktop",
  props: {
    target: {
      type: String,
      default: ''
    },
    visibility_height: {
      type: Number,
      default: 200
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  }
}
</script>

<style scoped>

</style>
