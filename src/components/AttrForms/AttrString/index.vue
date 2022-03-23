<template>
  <el-form-item :label="label">
    <el-input v-model="mVal"></el-input>
  </el-form-item>
</template>

<script>
  import attrMixin from '@/mixins/mixin'
  export default {
    name: 'AttrString',
    mixins: [attrMixin]
  }

</script>