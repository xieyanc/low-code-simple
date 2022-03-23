<template>
  <el-form-item :label="label">
    <el-input type="number" v-model.number="mVal"></el-input>
  </el-form-item>
</template>

<script>
  import attrMixin from '@/mixins/mixin'
  export default {
    name: 'AttrNumber',
    mixins: [attrMixin]
  }
</script>