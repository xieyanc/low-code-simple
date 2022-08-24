
<template>

   <div class="demo-type">
    <span>
      <el-avatar :icon="icon"></el-avatar>
    </span>
    <span>
      <el-avatar :src="imageicon"></el-avatar>
    </span>
    
  </div>

</template>

<script>
export default {
  name: "ExeHeadPortrait",

  props: {
    icon: {
      type: String,
      default: ''
    },
    imageicon: {
      type: String,
      default: ''
    },
  },

  data() {
    return {
     

    };
  },
};
</script>
