<!-- 单选框 -->
<template>
  <div>
    <el-radio
        v-model="radio"
        label="1"
        :disabled="disabled"
        :border="border"
        :size="size"
        :name="name"
    >{{ text }}</el-radio>
    <el-radio
        v-model="radio"
        label="2"
        :disabled="disabled"
        :border="border"
        :size="size"
        :name="name"
    >{{ text }}</el-radio>
  </div>
</template>

<script>
export default {
  name: 'ExeRadio',
  data () {
    return {
      radio: '1'
    };
  },
  props: {
    text: {
      type: String,
      default: '123'
    },
    label: {
      type: String | Number | Boolean,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => {}
    },
    name: {
      type: String,
      default: '123'
    }
  }
}
</script>
