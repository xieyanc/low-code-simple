<template>
  <div>
   <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item :label="label1">
      <el-input placeholder="Approved by" />
    </el-form-item>
    <el-form-item :label="label2">
      <el-input placeholder="Approved by" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  name: "LineForm",

  props: {
    label1: {
      type: String,
      default: "",
    },
    label2: {
      type: String,
      default: "",
    },
  },

  data() {
    return {

    };
  },
  methods: {
    handleClick() {
      this.eventName && this.$lowApi.eventBus.$emit(this.eventName, this.options)
    }
  }
};
</script>
