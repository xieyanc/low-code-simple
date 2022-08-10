<template>
  <div>
    <div class="header">
      <span class="header-font">Low-code</span>
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
            <!--          <div>{{$controlList}}</div>-->
          </div>
        </draggable>
      </div>
      <div class="center">
        <h4>显示区</h4>
        <draggable
            class="center-draggable"
            v-model="cloneList"
            group="rendBox"
            :animation="500"
            :sort="true"
        >
          <RenderCenter
              v-for="(item, index) in cloneList"
              :itemData="item"
              :curCompId="curComponent && curComponent.id"
              :key="item.id"
              :id="index"
              @chooseComp="chooseComp"/>
        </draggable>
      </div>
      <div class="right">
        <RenderRight v-if="curComponent" :curComponent="curComponent"></RenderRight>
      </div>
    </div>
  </div>
</template>

<script>
import {deepClone, idGenerate} from '@/utils'
import RenderCenter from '@/components/RenderWidget/RenderCenter'
import RenderRight from '@/components/RenderWidget/RenderRight'

export default {
  components: {
    RenderCenter,
    RenderRight
  },
  data() {
    return {
      cloneList: [],
      curComponent: null,
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
      // console.log(val)
    }
  },
  methods: {
    handleClone(item) {
      // 这个item可能是Vue.draggable底层传过来的，因为触发了拖拽事件
      // console.log(item)
      const cloneItem = {
        ...deepClone(item),
        id: idGenerate()
      }
      // console.log(cloneItem)
      // 将control里的数据存入cloneList中
      this.cloneList.push(cloneItem)
      // return cloneItem
    },

    // chooseComp是 RenderCenter.vue 中传递过来的,作用似乎是选中组件?
    chooseComp(item) {
      console.log(item)
      this.curComponent = item
    }
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

.left {
  width: 25%;
}

.center {
  width: 46%;
}

.center-draggable {
  min-height: 600px;
}

.right {
  width: 25%;
}

.left, .center, .right {
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
