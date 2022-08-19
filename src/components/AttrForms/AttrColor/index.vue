<template>
<div>
    <el-form-item :label="label">
        <el-color-picker v-model="mVal"></el-color-picker>
    </el-form-item>
</div>
</template>

<script>
import attrMixin from '@/mixins/mixin'
  export default {
    name: 'AttrColor',
    mixins: [attrMixin]
  }
</script>