<template>
  <div class="render-widget" :class="{'active': curCompId === itemData.id}" @click="compClick">
    <component :is="itemData.component" v-bind="itemData">
    <slot></slot>
    </component>

  </div>
</template>

<script>
import { getComponents } from '@/utils/register'
const compListObj = getComponents(require.context('@/components/ControlConfigs', true, /.vue/))
export default {
  components: {
    ...compListObj
  },
  props: {
    curCompId: {
      type: Number,
      default: ''
    },
    itemData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    compClick() {
      if(this.curCompId === this.itemData.id) {
        return
      }
      this.$emit('chooseComp', this.itemData)
    }
  }

}
</script>
<style>
  .box {
    width: 100%;
    height: 100%;
    background: #eee;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 25%;
  }
  .center {
    width: 46%;
  }
  .right {
    width: 25%;
  }
  .left,.center,.right {
    background: #fff;
    height: calc(100vh - 40px);
    border-radius: 10px;
  }
  h4 {
    padding-left: 10px;
  }
  .render-widget.active {
    border: 1px solid blue;
    padding: 3px;
  }
</style>
