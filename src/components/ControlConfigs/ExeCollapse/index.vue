<template>
    <el-collapse v-model="activeNames" @change="handleChange" :accordion="accordion" v-if="isFresh">
      <el-collapse-item :ref="item.id" :title="item.title" v-for="item in test" :name="item.id" :id="item.id">
        <div :id="item.id">{{ item.content1 }}</div>
        <div>{{ item.content2 }}</div>
      </el-collapse-item>
    </el-collapse>
<!--  <el-collapse v-model="activeNames" @change="handleChange">-->
<!--    <el-collapse-item title="一致性 Consistency" name="1" disabled>-->
<!--      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>-->
<!--      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>-->
<!--    </el-collapse-item>-->
<!--    <el-collapse-item title="反馈 Feedback" name="2" disabled>-->
<!--      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>-->
<!--      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>-->
<!--    </el-collapse-item>-->
<!--    <el-collapse-item title="效率 Efficiency" name="3">-->
<!--      <div>简化流程：设计简洁直观的操作流程；</div>-->
<!--      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>-->
<!--      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>-->
<!--    </el-collapse-item>-->
<!--    <el-collapse-item title="可控 Controllability" name="4">-->
<!--      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>-->
<!--      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>-->
<!--    </el-collapse-item>-->
<!--  </el-collapse>-->
</template>

<script>
export default {
  name: "ExeCollapse",
  data() {
    return {
      activeNames: ['1'],
      isFresh: true,
      test: [
        {
          id: 0,
          title: "一致性 Consistency",
          content1: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念',
          content2: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
        },
        {
          id: 1,
          title: "一致性 Consistency",
          content1: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念',
          content2: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
        },
        {
          id: 2,
          title: "一致性 Consistency",
          content1: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念',
          content2: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
        },
        {
          id: 3,
          title: "一致性 Consistency",
          content1: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念',
          content2: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
        }
      ]
    };
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    setDis(edit){
      edit.setAttribute("disabled" ,"true")
      this.reload()
    },
    async reload () {
      this.isFresh = false
      await this.$nextTick()
      this.isFresh = true
    }
  },
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: String,
      default: ""
    }
  },
  watch:{
    disabled(num){
      // this.$refs.num.setAttribute("disabled", "true")
      let edit = document.getElementById(num)
      console.log(edit)
      this.setDis(edit)
    }
  }
}
</script>

<style>
.el-collapse{
  box-sizing: border-box;
  padding: 15px;
  border-top: 0px;
}
</style>
