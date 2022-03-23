export default {
  props: {
    value: {},
    label: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      mVal: undefined
    }
  },
  watch: {
    mVal: {
      handler () {
        this.$emit('input', this.mVal)
        this.$emit('change', this.mVal)
      },
      immediate: true,
      deep: true,
    },
    value: {
      handler (val) {
        this.mVal = val
      },
      immediate: true,
      deep: true,
    }
  },
}