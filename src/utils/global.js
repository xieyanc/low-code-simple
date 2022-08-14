import Vue from 'vue'
import { EventManage, eventBus, eventsName } from '@/eventBus'
import { getComponents } from './register'
import ExeButton from "@/components/ControlConfigs/ExeButton";

class GlobalData {
  // ES6构造器，将类的共有属性放到构造器中
  // 与global.js相同的构造器，
  constructor({ request, ui }) {
    // 是不是可以理解为将弹窗等方法封装在eventManage中，然后通过构造器调用???
    this.eventManage = new EventManage({
      request,
      ui
    })
    this.init()
  }

  init() {
    // 初始化.json配置文件，将配置文件存入controlList中，同时完成全部“组件库”组件的注册
    this.initConfig()
    // 初始化elementUI的API(貌似）
    this.initApi()
    // 初始化Attr开头的组件
    this.registerAttrs()
  }

// Vue.prototype的作用就是全局注册，大概就是变成全局变量的意思
  initApi() {
    Vue.prototype.$lowApi = {}

// 从返回结果上看，this.eventManage似乎是返回了什么奇怪的组件库？？？
    Vue.prototype.$lowApi['eventManage'] = this.eventManage
    //console.log(this.eventManage)

    Vue.prototype.$lowApi['eventBus'] = eventBus
    // console.log(this.eventBus)

    Vue.prototype.$lowApi['eventsName'] = eventsName
    // console.log(this.eventsName)
  }

  initConfig() {
    // fileFun里是components目录下ControlConfigs里所有组件的config.json文件,
    const fileFun = require.context('@/components/ControlConfigs', true, /config.json$/)
    // 但是直接打印是看不出结果的,需要通过forEach以数组的形式才能看出结果
    // console.log(fileFun)

    let fields = {}
    let controlList = []

// 应该这么看：( fileFun.keys() ).forEach
// fileFun.keys()里存的是所有组件的.json文件的文件名，或者更准确点说是路径，"./ExeButton/config.json"
//     console.log(fileFun.keys())
    fileFun.keys().forEach(key => {
//key的位置指代当前元素，但是注意并不是指代文件名这个字符串，而是一整个文件
//       console.log(key)

// compName存除的结果就是组件的文件名，比如 ./ExeButton/config.json ，留下的就是ExeButton
      const compName = key.split('/') && key.split('/')[1]
      // console.log(compName)

// config存储了各个组件的.json文件里的各个属性，包括：name、field等
      const config = {
        component: compName,
        ...fileFun(key)
      }
      // console.log(config)

// 注意：fields实际上是一个对象，不是一个数组
      fields[compName] = config.fields
      // console.log(fields.ExeButton)

      controlList.push(this.rewriteConfig(config))
      // console.log(controlList)
    })
    Vue.prototype.$fields = fields

// 最后声明 $controlList 存储，然后在 view/index.vue 中通过调用 $controlList 遍历出全部的组件
//  注意,到这里的时候,controList里的数据是不包括.json文件中的fileds属性的,因为它已经把它拆了,与name这些属性平级了,
    Vue.prototype.$controlList = controlList
  }

  rewriteConfig({ name, icon, component, fields }) {
    const temp = { component }
    // console.log(component)

    const newFiels = {}
    Object.keys(fields).forEach(item => {
      newFiels[item] = fields[item].value
    })
    return { name, icon, component, ...newFiels }
  }

  registerAttrs() {
// CTRL+B即可跳转到作者定义的 getComponents 方法，该方法获取了组件库中全部的组件，可以在log中看到组件的生命周期
    const compListObj = getComponents(require.context('@/components/AttrForms', true, /.vue/))
    // console.log(compListObj)

    // 注册全部组件
    Object.keys(compListObj).forEach(compName => {
      Vue.component(compName, compListObj[compName])
    })
  }
}

export default GlobalData
