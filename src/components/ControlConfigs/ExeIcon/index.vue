
<template>
  <div>
    <el-icon :class="iconClass" :style="{ 'font-size': size + 'px', color: iconColor }"></el-icon>
  </div>
</template>

<script>
export default {
  name: "ExeIcon",

  props: {
    size: {
      type: Number,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: ''
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
