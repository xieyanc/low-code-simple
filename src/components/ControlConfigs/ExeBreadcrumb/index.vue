<template>
  <el-breadcrumb :separator="separator" :key="sep" :separator-class="separator_class">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "ExeBreadcrumb",
  data(){
    return{
      sep: "",
      a: "",
    }
  },
  props: {
    separator: {
      type: String,
      defaults: ''
    },
    separator_class: {
      type: String,
      defaults: ''
    }
  },
  watch:{
    separator(news){
      this.sep = news
    }
  }
}
</script>

<style scoped>

</style>
