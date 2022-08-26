<template>
  <div>
    <div class="header">
      <span class="header-font">Low-code</span>
      <keep-alive><router-view/><router-link to="/publish">
      <el-button style="float:right">发布</el-button>
      </router-link></keep-alive>
    </div>
  <div class="box">
    <div class="left">
      <h4>控件区</h4>
      <!--      group：是否允许内容在数组之间相互拖动-->
      <draggable
        v-model="$controlList"
        :group="{
          name: 'rendBox',
          pull: 'clone'
        }"
        :sort="false"
        :clone="handleClone"
        animation="300"
      >
       <!--        组件列表渲染-->
          <!--        $controlList存储的实际上是.json里的属性文件-->
        <div
          v-for="(item, index) in $controlList"
          :key="index"
          class="control-item"
        >
          <div :class="item.icon"></div>
          <div>{{ item.name }}</div>
        </div>
      </draggable>
    </div>
    <div class="center">
      <h4><span>显示区</span><el-button @click="drawer = true" type="primary" style="float:right">
  预览
</el-button></h4>

    <el-drawer
  
  title="预览页面"
  
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose">
<RenderCenter
          
          v-for="(item) in cloneList"
          
          :itemData="item"
        
          :curCompId="curComponent && curComponent.id"
          :key="item.id"
          
          @chooseComp="chooseComp" 
          
          ></RenderCenter>
      </el-drawer>




      <draggable
        class="center-draggable"
        v-model="cloneList"
        group="rendBox"
        :animation="500"
        :sort="true"
        style="height:470px;overflow-y:scroll"

      >
        <RenderCenter
          v-for="item in cloneList"
          :itemData="item"
          :curCompId="curComponent && curComponent.id"
          :key="item.id"
          @chooseComp="chooseComp" 
          />
       
      </draggable>
    </div>
    <div class="right">
      <RenderRight v-if="curComponent" :curComponent="curComponent">
      <slot><el-button  @click="remove(curComponent,index)">删除</el-button></slot>
      </RenderRight>
    </div>
  </div>
  </div>
</template>

<script>
import { deepClone, idGenerate } from '@/utils'
import RenderCenter from '@/components/RenderWidget/RenderCenter'
import RenderRight from '@/components/RenderWidget/RenderRight'
export default {
  components: {
    RenderCenter,
    RenderRight
  },
  data() {
    return {
      cloneList:[],
     
      curComponent: null,
      index:'',
      drawer: false,
      direction: 'rtl',
      id: ''
    }
  },
  provide() {
    return {
      chontrol: this,
    };
  },
  watch: {
    cloneList(val) {
      console.log(val)
    }
  },
  methods: {
    handleClone(item) {
       // 这个item可能是Vue.draggable底层传过来的，因为触发了拖拽事件
      const cloneItem = {
        ...deepClone(item),
        id: idGenerate()
        
      }
       // 将control里的数据存入cloneList中
      this.cloneList.push(cloneItem)
      console.log(this.cloneList)
     
      this.$store.commit("getList",this.cloneList)
      
      // return cloneItem
    },
     // chooseComp是 RenderCenter.vue 中传递过来的,作用似乎是选中组件?
    chooseComp(item) {
      console.log(item)
      this.curComponent = item
    },

     remove(curComponent,index) {
      
      
      index=this.cloneList.indexOf(curComponent)
      console.log(index)
      this.cloneList.splice(index,1)
    },
    handleClose(done) {
        this.$confirm('确认关闭预览？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },


  }
  
}
</script>
<style>
.body{
  height: 470px;
}
.header{
  width: 100%;
  height: 60px;
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
  .left {
    width: 25%;
  }
  .center {
    width: 46%;
    background-color: #fff;/*背景色*/
		background-image: linear-gradient(90deg, rgba(200, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%) 
		,linear-gradient(0deg,rgba(200, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%);/*rgba(0, 0, 0, 0)，transparent全透明黑*/
		background-size: 15px 15px;/*调节格子宽 高*/
  }
  .center-draggable {
    min-height: 600px;
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
  .control-item {
    padding: 20px;
    font-size: 18px;
    text-align: center;
    display: inline-block;
    color: blue;
  }
</style>
