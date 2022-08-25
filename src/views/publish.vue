<template>
  <div>
 

        
        <RenderCenter
          v-for="item in list"
          :itemData="item"
          :curCompId="curComponent && curComponent.id"
          :key="item.id"
          @chooseComp="chooseComp" 

          />

  </div>



</template>

<script>

import RenderCenter from '@/components/RenderWidget/RenderCenter'
import { mapState } from 'vuex'
export default {
  components: {
    RenderCenter,
   
  },
  data() {
    return {
      
      curComponent: null,
      
    }
  },
  computed: {
    ...mapState('cloneList'),
    list:function(){
        
        return this.$store.state.cloneList;
    }
  },
  provide() {
    return {
      chontrol: this,
    };
  },

  methods: {
    
     // chooseComp是 RenderCenter.vue 中传递过来的,作用似乎是选中组件?
    chooseComp(item) {
      console.log(item)
      this.curComponent = item
    },

    
    


  }
  
}
</script>
<style>
.header{
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 15px 18px;
  background-color: #ffffff;
}
.header-font{
  font-size: 21px;
  font-weight: 700;
}
  .box {
    width: 100%;
    height: 100%;
    background: #eee;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  .right {
    width: 25%;
  }
  .left,.right {
    background: #fff;
    height: calc(100vh - 40px);
    border-radius: 10px;
  }
  h4 {
    padding-left: 10px;
  }

</style>