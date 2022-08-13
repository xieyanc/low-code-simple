<template>
<div>
    <el-switch
      v-model="value"
      :inactive-text="label"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
</div>
</template>

<script>
import attrMixin from '@/mixins/mixin'
  export default {
    name: 'AttrSwitch',
    mixins: [attrMixin]
  }
</script>