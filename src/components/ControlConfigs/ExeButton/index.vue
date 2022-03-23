
<template>
  <div>
    <el-button :type="btnType" :size="size" @click="handleClick">{{text}}</el-button>
  </div>
</template>

<script>
export default {
  name: "ExeButton",

  props: {
    text: {
      type: String,
      default: "",
    },
    btnType: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: ''
    },
    eventName: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {}
    }
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
