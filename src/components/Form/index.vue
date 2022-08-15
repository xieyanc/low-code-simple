<template>
  <div>
    <h3 style="text-align: center" :style="{ display: shown1 }">{{ name1 }}</h3>
    <el-form ref="form" label-width="60px" style="border:1px solid #C4E1C5;padding:20px;">
      <el-form-item :label="text1">
        <el-input></el-input>
      </el-form-item>

      <el-form-item :label="text2">
        <el-input></el-input>
      </el-form-item>

      <el-form-item :label="text3" :style="{ display: shown }">
        <el-input></el-input>
      </el-form-item>

      <el-form-item :label="text4" :style="{ display: shown2 }">
        <el-input></el-input>
      </el-form-item>

      <el-form-item :label="text5" :style="{ display: shown2 }">
        <el-input></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleClick">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Form",

  props: {
    text1: {
      type: String,
      default: "",
    },
    text2: {
      type: String,
      default: "",
    },
    text3: {
      type: String,
      default: "",
    },
    text4: {
      type: String,
      default: "",
    },
    text5: {
      type: String,
      default: "",
    },
    name1: {
      type: String,
      default: ''
    },
    shown: {
      type: String,
      default: ''
    },
    shown1: {
      type: String,
      default: ''
    },
    shown2: {
      type: String,
      default: ''
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
