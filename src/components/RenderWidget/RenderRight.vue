<template>
  <el-form ref="form" label-width="80px" :style="st" style="overflow-y:scroll;">
    <template v-for="(obj, key, index)  in field">
      <component
        :is="'attr-' + obj.type"
        v-bind="obj"
        v-model="chontrol.curComponent[key]"
        :key="index"></component>
    </template>
    <slot></slot>
  </el-form>
</template>

<script>
export default {
  inject: ["chontrol"],
  data() {
    return {
      st:{
        padding:20 + 'px',
        height: 470 + "px",
      }
    }
  },
  computed: {
    field() {
      return this.$fields[this.chontrol.curComponent.component]
    }
  },
}
</script>
<style>
  /* .el-form {
    padding: 20px;
  } */
</style>