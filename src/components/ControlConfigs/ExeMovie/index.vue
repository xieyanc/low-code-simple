
<template>
  <div>
    <video controls        
      :src="MoviePath || defaultMovie"
      type="video/mp4"
      :poster="MoviePoster"
      :style="{ width: MovieWidth+'px',height:MovieHeight+'px'}">
      

    
    </video>
    <slot></slot>
    
  </div>
</template>

<script>


export default {
  name: "ExeMovie",

  props: {
    MoviePath: {
      type: String,
      default: "",
    },

    MovieWidth: {
      type: Number,
      default: 0
    },
     MovieHeight: {
      type: Number,
      default: 0
    },
    MoviePoster:{
      type:Number,
      default:"",
    }


  },

  data() {
    return {
      defaultMovie:
        //"https://www.sicau.edu.cn/__local/A/1E/52/E8093449CF93AF4E8960C131C04_09BD5DD1_1F12F030.mp4?e=.mp4",
        //"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        "https://media.w3.org/2010/05/sintel/trailer.mp4",
    };
  },
};
</script>
