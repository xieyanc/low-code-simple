<template>
  <el-form-item :label="label">
    <el-select v-model="mVal" placeholder="请选择">
      <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  import attrMixin from '@/mixins/mixin'
  export default {
    name: 'AttrSelect',
    mixins: [attrMixin]
  }

</script>