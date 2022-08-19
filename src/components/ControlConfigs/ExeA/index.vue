
<template>
  <div>
    <a :style="{'color':aFontColor,'textDecorationLine' : aDecline ? C[0] : C[1]}" :href="aHref || defaulthref" target="_blank" >{{aName}}</a>
  </div>
</template>

<script>
export default {
  name: "ExeA",

  props: {
    aName:{
      type:String,
      default:"链接"
    },
    aHref:{
      type:String,
      default:""
    },
    aDecline:{
      type:Boolean,
      default:true
    },
    aFontColor:{
      type:String,
      default:""
    }
  },

  data() {
    return {
      defaulthref:
        "https://www.baidu.com",
      C:["underline","none"]
    };
  },
};
</script>
