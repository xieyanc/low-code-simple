
<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-input :class="font" >
      @import "./font.css"
    </el-input>
  </div>
  
    
</template>

<script>
import LabelEdit from 'label-edit'
export default {
  name: "ExeText",

  props: {
    msg: String,
    font: {
      type: String,
      default: "Helvetica Neue",
    },
    fontsize: {
      type: Number,
      default: 12,
    },
    fontcolor: {
      type: Number,
      default: "#000000"
    }
  },

  data() {
    return {
      input: ''
    }
  }
}

</script>


