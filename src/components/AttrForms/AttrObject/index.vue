<template>
  <div>
    <template v-for="(item, key, index) in bindObj">
      <component :is="'attr-' + item.type" v-model="mVal[key]" v-bind="item" :key="'child' + index"></component>
    </template>
  </div>
</template>

<script>
  import attrMixin from '@/mixins/mixin'
  // TODO: 该组件后续可能涉及到递归，还需再优化， 目前还没测试未传depend类型，还需测试
  export default {
    name: 'AttrObject',
    props: {
      depend: {},
      child: {
        type: Object
      }
    },
    inject: ["chontrol"],
    computed: {
      bindObj() {
        console.log(this.child)
        let obj = {}
        if (this.depend) {
          const key = this.chontrol.curComponent[this.depend]
          obj = this.child[key]
        } else {
          obj = this.child
        }
        return obj
      }
    },
    mixins: [attrMixin]
  }

</script>