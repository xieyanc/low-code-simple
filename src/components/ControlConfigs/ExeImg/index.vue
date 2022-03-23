
<template>
  <div>
    <img
      :src="imagePath || defaultImage"
      :style="{ borderRadius: radius + 'px', width: size + '%' }"
    />
  </div>
</template>

<script>
export default {
  name: "ExeImg",

  props: {
    imagePath: {
      type: String,
      default: "",
    },
    radius: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      defaultImage:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0827%2Fc0c92bd51bb72e6d12d5b877dce338e8.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650366164&t=d27e21189b6673f5e8c641161ede768b",
    };
  },
};
</script>
